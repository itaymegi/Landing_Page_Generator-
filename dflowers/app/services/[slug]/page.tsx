import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServicePageHero } from "@/components/services/ServicePageHero";
import { ServicePortfolioGallery } from "@/components/services/ServicePortfolioGallery";
import { ServicePageCta } from "@/components/services/ServicePageCta";
import {
  getAllServiceSlugs,
  getServiceBySlug,
  getServiceImages,
} from "@/config/services";
import { getSiteUrl } from "@/config/site";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  const siteUrl = getSiteUrl();
  const ogImage = service.coverImage.startsWith("http")
    ? service.coverImage
    : `${siteUrl}${service.coverImage}`;

  return {
    title: `${service.title} | D Flowers`,
    description: service.metaDescription,
    openGraph: {
      title: `${service.title} | D Flowers`,
      description: service.metaDescription,
      url: `${siteUrl}/services/${service.slug}`,
      images: [{ url: ogImage, alt: service.coverImageAlt }],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const images = getServiceImages(service);

  return (
    <>
      <Header variant="solid" />
      <main>
        <ServicePageHero service={service} />
        <ServicePortfolioGallery images={images} />
        <ServicePageCta service={service} />
      </main>
      <Footer />
    </>
  );
}
