import Link from "next/link";
import { BrandCard } from "@/components/PremiumBrands";
import { ClinicSection } from "@/components/ui/ClinicSection";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowIcon } from "@/components/ui/icons";
import { getBrandsByIds } from "@/config/brands";
import type { TreatmentCategory } from "@/config/treatments";

type TreatmentMaterialsProps = {
  treatment: TreatmentCategory;
};

export function TreatmentMaterials({ treatment }: TreatmentMaterialsProps) {
  const brands = getBrandsByIds(treatment.relatedBrandIds);

  if (brands.length === 0) return null;

  return (
    <ClinicSection tone="ivory">
      <div className="container-agam">
        <SectionHeader
          eyebrow="Materials"
          title="החומרים בטיפול הזה"
          subtitle="החומר נבחר לפי האזור ולפי התוצאה הרצויה, ומתועד בתיק המטופלת."
        />

        <ul className="mt-12 grid grid-cols-2 gap-3.5 sm:gap-5 lg:mt-16 lg:grid-cols-3">
          {brands.map((brand, index) => (
            <Reveal key={brand.id} delay={index * 80} className="h-full">
              <li className="h-full">
                <BrandCard brand={brand} />
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={160}>
          <Link
            href="/#brands"
            className="group mt-12 inline-flex min-h-11 items-center gap-2.5 text-[0.8125rem] tracking-[0.1em] text-gold-deep transition-colors duration-400 hover:text-charcoal"
          >
            לכל המוצרים שאנחנו מציעות
            <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-500 group-hover:-translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </ClinicSection>
  );
}
