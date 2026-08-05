import Image from "next/image";
import Link from "next/link";
import { ClinicSection } from "@/components/ui/ClinicSection";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowIcon } from "@/components/ui/icons";
import {
  brandsSection,
  productBrands,
  productHref,
  type ProductBrand,
} from "@/config/brands";

/**
 * Packshots arrive as a mix of brand posters and plain product photos, so each
 * one is contained in a shared frame rather than cropped to fill it.
 */
export function BrandCard({ brand }: { brand: ProductBrand }) {
  return (
    <Link
      href={productHref(brand.slug)}
      className="clinic-card group flex h-full flex-col overflow-hidden"
    >
      <div className="relative aspect-[4/5] w-full bg-cream">
        <Image
          src={brand.packshot}
          alt={brand.packshotAlt}
          fill
          sizes="(max-width: 640px) 46vw, (max-width: 1024px) 44vw, 30vw"
          quality={90}
          className="object-contain"
        />

        <span className="absolute end-2.5 top-2.5 rounded-full border border-gold/25 bg-marble/90 px-2.5 py-1 text-[0.625rem] tracking-[0.08em] text-gold-deep backdrop-blur-sm">
          {brand.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="font-serif-en text-lg font-light tracking-[0.08em] text-charcoal">
          {brand.name}
        </h3>
        <p className="font-serif-en mt-1 text-[0.625rem] tracking-[0.16em] text-ink-faint">
          {brand.origin}
        </p>

        <dl className="mt-4 border-t border-line pt-4">
          <dt className="text-[0.6875rem] tracking-[0.12em] text-ink-faint">
            {brandsSection.longevityLabel}
          </dt>
          <dd className="mt-1 font-serif text-[0.9375rem] font-light text-charcoal">
            {brand.longevity}
          </dd>
        </dl>

        <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[0.6875rem] tracking-[0.12em] text-gold-deep">
          {brandsSection.ctaLabel}
          <ArrowIcon className="h-3 w-3 transition-transform duration-500 group-hover:-translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

export function PremiumBrands() {
  return (
    <ClinicSection
      id="brands"
      tone="ivory"
      editorialWord={brandsSection.editorialWord}
      hairline
    >
      <div className="container-agam">
        <SectionHeader
          eyebrow={brandsSection.eyebrow}
          title={brandsSection.title}
          subtitle={brandsSection.subtitle}
        />

        <ul className="mt-12 grid grid-cols-2 gap-3.5 sm:gap-5 lg:mt-16 lg:grid-cols-3">
          {productBrands.map((brand, index) => (
            <Reveal key={brand.id} delay={(index % 3) * 80} className="h-full">
              <li className="h-full">
                <BrandCard brand={brand} />
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </ClinicSection>
  );
}
