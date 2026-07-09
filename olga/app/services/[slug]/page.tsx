import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getAllServiceSlugs, getServiceBySlug } from "@/config/gallery";
import { site } from "@/config/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: `${service.title} | ${site.brand.logoText}`,
    description: service.description,
  };
}

export default async function ServicePlaceholderPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Header variant="solid" />
      <main
        id="main-content"
        className="section-tone-ivory min-h-[80dvh] pt-[calc(env(safe-area-inset-top)+4rem)]"
      >
        <div className="container-olga section-py">
          <div className="mx-auto max-w-xl text-center">
            <p className="text-sm tracking-[0.2em] text-accent-deep uppercase">
              {site.brand.logoText}
            </p>
            <h1 className="mt-4 font-serif text-3xl font-light tracking-wide text-text sm:text-4xl">
              {service.title}
            </h1>
            <span className="rule-gold mx-auto mt-5" aria-hidden="true" />

            <div className="luxury-card mx-auto mt-10 px-6 py-12 sm:px-10 sm:py-14">
              <p className="font-serif text-2xl font-light text-text sm:text-3xl">
                ממתינה לתמונות שלך
              </p>
              <p className="mt-4 text-base leading-relaxed text-text-muted">
                בקרוב יעלו כאן תמונות מהעבודות בקטגוריה זו.
              </p>
            </div>

            <Link
              href="/"
              className="mt-10 inline-flex min-h-12 items-center justify-center rounded-full bg-accent-deep px-8 text-base font-serif font-medium text-white transition-colors hover:bg-floral"
            >
              חזרה לדף הבית
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
