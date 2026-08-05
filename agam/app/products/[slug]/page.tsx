import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { CTAButton } from "@/components/ui/CTAButton";
import { ClinicSection } from "@/components/ui/ClinicSection";
import { MobileCTABar } from "@/components/ui/MobileCTABar";
import { ResultImage } from "@/components/ui/ResultImage";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowIcon, CheckIcon, WhatsAppIcon } from "@/components/ui/icons";
import {
  getBrandBySlug,
  productBrands,
  productHref,
  productPage,
} from "@/config/brands";
import { consultationHref, getSiteUrl, productInquiryHref, site } from "@/config/site";
import { treatmentCategories, treatmentHref } from "@/config/treatments";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return productBrands.map((brand) => ({ slug: brand.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);

  if (!brand) {
    return { title: "החומר לא נמצא" };
  }

  const title = `${brand.metaTitle} | ${site.brand.name}`;
  const url = `${getSiteUrl()}${productHref(brand.slug)}`;

  return {
    title,
    description: brand.metaDescription,
    alternates: { canonical: productHref(brand.slug) },
    openGraph: {
      title,
      description: brand.metaDescription,
      url,
      siteName: site.brand.name,
      locale: "he_IL",
      type: "article",
      images: [{ url: brand.packshot, alt: brand.packshotAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: brand.metaDescription,
      images: [brand.packshot],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);

  if (!brand) notFound();

  const usedIn = treatmentCategories.filter((category) =>
    category.relatedBrandIds.includes(brand.id),
  );

  return (
    <>
      <Header />
      <main
        id="main-content"
        className="overflow-x-clip pb-[calc(110px+env(safe-area-inset-bottom))] sm:pb-0"
      >
        <section
          id="hero"
          className="section-tone-ivory relative overflow-hidden pb-16 pt-[calc(var(--header-height)+2.5rem)] sm:pb-24 sm:pt-[calc(var(--header-height)+4rem)] lg:pb-32 lg:pt-[calc(var(--header-height)+5.5rem)]"
        >
          <span
            className="pointer-events-none absolute -start-24 top-0 h-[28rem] w-[28rem] rounded-full bg-gold/[0.045] blur-3xl"
            aria-hidden="true"
          />

          <div className="container-agam relative">
            <Reveal>
              <nav aria-label="מסלול ניווט" className="mb-5 sm:mb-8">
                <ol className="flex flex-wrap items-center gap-x-2.5 text-[0.75rem] tracking-[0.08em] text-ink-faint">
                  <li>
                    <Link
                      href="/"
                      className="inline-flex min-h-11 items-center transition-colors duration-400 hover:text-gold-deep"
                    >
                      בית
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li>
                    <Link
                      href="/#brands"
                      className="inline-flex min-h-11 items-center transition-colors duration-400 hover:text-gold-deep"
                    >
                      {productPage.breadcrumbLabel}
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li
                    aria-current="page"
                    className="inline-flex min-h-11 items-center text-ink-muted"
                  >
                    {brand.name}
                  </li>
                </ol>
              </nav>
            </Reveal>

            <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-20">
              <div>
                <Reveal>
                  <p className="eyebrow">{brand.origin}</p>
                </Reveal>

                <Reveal delay={80} blur>
                  <h1 className="font-serif-en mt-5 text-[clamp(2.25rem,6vw,4rem)] font-light tracking-[0.06em] text-charcoal">
                    {brand.name}
                  </h1>
                </Reveal>

                <Reveal delay={140}>
                  <p className="mt-3 font-serif text-lg font-light text-gold-deep">
                    {brand.category}
                  </p>
                </Reveal>

                <Reveal delay={180}>
                  <span className="rule-gold mt-7" aria-hidden="true" />
                </Reveal>

                <Reveal delay={220}>
                  <p className="mt-7 max-w-xl text-base leading-[2] text-ink-muted sm:text-[1.0625rem]">
                    {brand.whatItDoes}
                  </p>
                </Reveal>

                <Reveal delay={280}>
                  <dl className="mt-9 flex flex-wrap gap-x-10 gap-y-5 border-t border-line pt-7">
                    <div>
                      <dt className="text-[0.6875rem] tracking-[0.16em] text-ink-faint">
                        {productPage.longevityLabel}
                      </dt>
                      <dd className="mt-1.5 font-serif text-lg font-light text-charcoal">
                        {brand.longevity}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[0.6875rem] tracking-[0.16em] text-ink-faint">
                        {productPage.priceLabel}
                      </dt>
                      <dd className="mt-1.5 font-serif text-lg font-light text-charcoal">
                        {brand.priceNote}
                      </dd>
                    </div>
                  </dl>
                </Reveal>

                <Reveal delay={340}>
                  <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <CTAButton
                      href={productInquiryHref(brand.name)}
                      external
                      icon={<WhatsAppIcon className="h-4 w-4" />}
                    >
                      {productPage.orderLabel}
                    </CTAButton>
                    <CTAButton
                      href={consultationHref()}
                      variant="outline"
                      external
                    >
                      {productPage.consultLabel}
                    </CTAButton>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={160} blur>
                <div className="relative">
                  <span
                    className="hairline-gold pointer-events-none absolute -bottom-5 -start-5 end-8 top-6 rounded-[18px] sm:-bottom-7 sm:-start-7"
                    aria-hidden="true"
                  />
                  <ResultImage
                    src={brand.packshot}
                    alt={brand.packshotAlt}
                    width={brand.packshotWidth}
                    height={brand.packshotHeight}
                    sizes="(max-width: 1024px) 92vw, 42vw"
                    priority
                    className="relative"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <ClinicSection tone="marble" hairline>
          <div className="container-agam">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-20">
              <div>
                <Reveal>
                  <p className="eyebrow">Material</p>
                </Reveal>

                <Reveal delay={80}>
                  <h2 className="mt-4 font-serif text-[clamp(1.625rem,4vw,2.5rem)] font-light leading-[1.3] text-charcoal">
                    {productPage.whoItFitsLabel}
                  </h2>
                </Reveal>

                <Reveal delay={140}>
                  <p className="mt-8 text-base leading-[2] text-ink-muted">
                    {brand.whoItFits}
                  </p>
                </Reveal>

                <Reveal delay={200}>
                  <div className="mt-10">
                    <p className="text-[0.6875rem] tracking-[0.14em] text-ink-faint">
                      {productPage.commonTreatmentsLabel}
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {brand.commonTreatments.map((treatment) => (
                        <li
                          key={treatment}
                          className="rounded-full bg-cream px-3.5 py-1.5 text-[0.75rem] text-ink-muted"
                        >
                          {treatment}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={160}>
                <div className="clinic-card p-8 sm:p-10">
                  <p className="eyebrow">Benefits</p>
                  <h3 className="mt-4 font-serif text-xl font-light text-charcoal">
                    {productPage.benefitsLabel}
                  </h3>

                  <ul className="mt-7 space-y-4">
                    {brand.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-3.5 text-[0.9375rem] leading-[1.85] text-ink"
                      >
                        <span
                          className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cream text-gold-deep"
                          aria-hidden="true"
                        >
                          <CheckIcon className="h-3 w-3" />
                        </span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 border-t border-line pt-7">
                    <CTAButton
                      href={productInquiryHref(brand.name)}
                      external
                      icon={<WhatsAppIcon className="h-4 w-4" />}
                      fullWidthOnMobile={false}
                      className="w-full"
                    >
                      {productPage.orderLabel}
                    </CTAButton>
                  </div>

                  <p className="mt-5 text-[0.75rem] leading-[1.8] text-ink-faint">
                    {productPage.disclaimer}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </ClinicSection>

        {usedIn.length > 0 ? (
          <ClinicSection tone="sand">
            <div className="container-agam">
              <SectionHeader
                eyebrow="Where We Use It"
                title="באילו טיפולים משתמשים בחומר"
                subtitle="החומר נבחר לפי האזור ולפי התוצאה הרצויה, ומתועד בתיק המטופלת."
              />

              <ul className="mx-auto mt-12 grid max-w-3xl gap-3.5 sm:grid-cols-2 lg:mt-16">
                {usedIn.map((category, index) => (
                  <Reveal key={category.id} delay={index * 80} className="h-full">
                    <li className="h-full">
                      <Link
                        href={treatmentHref(category.slug)}
                        className="clinic-card group flex h-full items-center justify-between gap-4 p-6"
                      >
                        <span>
                          <span className="block font-serif text-lg font-light text-charcoal">
                            {category.title}
                          </span>
                          <span className="mt-1 block text-[0.8125rem] leading-[1.7] text-ink-muted">
                            {category.description}
                          </span>
                        </span>
                        <ArrowIcon className="h-3.5 w-3.5 shrink-0 text-gold-deep transition-transform duration-500 group-hover:-translate-x-1" />
                      </Link>
                    </li>
                  </Reveal>
                ))}
              </ul>

              <Reveal delay={160}>
                <Link
                  href="/#brands"
                  className="group mt-12 inline-flex min-h-11 items-center gap-2.5 text-[0.8125rem] tracking-[0.1em] text-gold-deep transition-colors duration-400 hover:text-charcoal"
                >
                  {productPage.backLabel}
                  <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-500 group-hover:-translate-x-1" />
                </Link>
              </Reveal>
            </div>
          </ClinicSection>
        ) : null}

        <FinalCTA />
      </main>
      <Footer />
      <MobileCTABar />
    </>
  );
}
