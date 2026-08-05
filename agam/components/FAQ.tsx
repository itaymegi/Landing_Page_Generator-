import { Accordion } from "@/components/ui/Accordion";
import { ClinicSection } from "@/components/ui/ClinicSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { site } from "@/config/site";

export function FAQ() {
  const { faq } = site;

  return (
    <ClinicSection id="faq" tone="sand">
      <div className="container-agam">
        <SectionHeader
          eyebrow={faq.eyebrow}
          title={faq.title}
          subtitle={faq.subtitle}
        />

        <Accordion
          items={faq.items}
          className="mx-auto mt-14 max-w-3xl lg:mt-20"
        />
      </div>
    </ClinicSection>
  );
}
