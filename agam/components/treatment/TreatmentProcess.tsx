import { ClinicSection } from "@/components/ui/ClinicSection";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { TreatmentCategory } from "@/config/treatments";

type TreatmentProcessProps = {
  treatment: TreatmentCategory;
};

export function TreatmentProcess({ treatment }: TreatmentProcessProps) {
  return (
    <ClinicSection tone="sand">
      <div className="container-agam">
        <SectionHeader
          eyebrow="Process"
          title="איך זה עובד"
          subtitle="ארבעה שלבים קבועים, זהים לכל מטופלת, כדי שלא יהיו הפתעות."
        />

        <ol className="process-timeline mx-auto mt-16 max-w-sm sm:max-w-xl lg:mt-24 lg:max-w-none">
          {treatment.process.map((step, index) => (
            <li key={step.title} className="process-step">
              <Reveal delay={index * 90}>
                <div className="relative">
                  <span
                    className="font-serif-en pointer-events-none absolute -top-5 start-0 select-none text-[4.25rem] font-light leading-none text-gold/[0.22] lg:-top-8 lg:text-[5rem]"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="relative pt-7 font-serif text-xl font-light leading-snug text-charcoal lg:pt-8">
                    {step.title}
                  </h3>

                  <p className="relative mt-3 text-[0.9375rem] leading-[1.95] text-ink-muted">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </ClinicSection>
  );
}
