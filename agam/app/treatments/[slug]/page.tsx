import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { TreatmentFaq } from "@/components/treatment/TreatmentFaq";
import { TreatmentHero } from "@/components/treatment/TreatmentHero";
import { TreatmentMaterials } from "@/components/treatment/TreatmentMaterials";
import { TreatmentOverview } from "@/components/treatment/TreatmentOverview";
import { TreatmentProcess } from "@/components/treatment/TreatmentProcess";
import { TreatmentResults } from "@/components/treatment/TreatmentResults";
import { MobileCTABar } from "@/components/ui/MobileCTABar";
import { getSiteUrl, site } from "@/config/site";
import {
  getTreatmentBySlug,
  treatmentCategories,
  treatmentHref,
} from "@/config/treatments";

type TreatmentPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return treatmentCategories.map((treatment) => ({ slug: treatment.slug }));
}

export async function generateMetadata({
  params,
}: TreatmentPageProps): Promise<Metadata> {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);

  if (!treatment) {
    return { title: "הטיפול לא נמצא" };
  }

  const title = `${treatment.metaTitle} | ${site.brand.name}`;
  const url = `${getSiteUrl()}${treatmentHref(treatment.slug)}`;

  return {
    title,
    description: treatment.metaDescription,
    alternates: { canonical: treatmentHref(treatment.slug) },
    openGraph: {
      title,
      description: treatment.metaDescription,
      url,
      siteName: site.brand.name,
      locale: "he_IL",
      type: "article",
      images: [{ url: treatment.image, alt: treatment.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: treatment.metaDescription,
      images: [treatment.image],
    },
  };
}

export default async function TreatmentPage({ params }: TreatmentPageProps) {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);

  if (!treatment) notFound();

  return (
    <>
      <Header />
      <main
        id="main-content"
        className="overflow-x-clip pb-[calc(4.5rem+env(safe-area-inset-bottom))] sm:pb-0"
      >
        <TreatmentHero treatment={treatment} />
        <TreatmentOverview treatment={treatment} />
        <TreatmentProcess treatment={treatment} />
        <TreatmentResults treatment={treatment} />
        <TreatmentMaterials treatment={treatment} />
        <TreatmentFaq treatment={treatment} />
        <FinalCTA />
      </main>
      <Footer />
      <MobileCTABar />
    </>
  );
}
