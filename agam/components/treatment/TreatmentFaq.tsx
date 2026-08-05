import { Accordion } from "@/components/ui/Accordion";
import { ClinicSection } from "@/components/ui/ClinicSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { TreatmentCategory } from "@/config/treatments";

type TreatmentFaqProps = {
  treatment: TreatmentCategory;
};

export function TreatmentFaq({ treatment }: TreatmentFaqProps) {
  if (treatment.faq.length === 0) return null;

  return (
    <ClinicSection tone="ivory">
      <div className="container-agam">
        <SectionHeader
          eyebrow="FAQ"
          title={`שאלות על ${treatment.title}`}
          subtitle="מה שנשאלנו הכי הרבה על הטיפול הזה בפגישות הייעוץ."
        />

        <Accordion
          items={treatment.faq}
          className="mx-auto mt-14 max-w-3xl lg:mt-20"
        />
      </div>
    </ClinicSection>
  );
}
