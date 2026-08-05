import { ClinicSection } from "@/components/ui/ClinicSection";
import { Reveal } from "@/components/ui/Reveal";
import { CheckIcon } from "@/components/ui/icons";
import type { TreatmentCategory } from "@/config/treatments";

type TreatmentOverviewProps = {
  treatment: TreatmentCategory;
};

export function TreatmentOverview({ treatment }: TreatmentOverviewProps) {
  const paragraphs = treatment.longDescription.slice(1);

  return (
    <ClinicSection tone="marble" hairline>
      <div className="container-agam">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow">Overview</p>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="mt-4 font-serif text-[clamp(1.625rem,4vw,2.5rem)] font-light leading-[1.3] text-charcoal">
                מה כולל הטיפול
              </h2>
            </Reveal>

            <div className="mt-8 space-y-6">
              {paragraphs.map((paragraph, index) => (
                <Reveal key={paragraph.slice(0, 24)} delay={140 + index * 60}>
                  <p className="text-base leading-[2] text-ink-muted">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={320}>
              <div className="mt-10 border-s-2 border-gold/35 ps-6">
                <p className="text-[0.6875rem] tracking-[0.16em] text-ink-faint">
                  מתאים ל
                </p>
                <p className="mt-2.5 font-serif text-lg font-light italic leading-[1.7] text-charcoal">
                  {treatment.idealFor}
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <div className="clinic-card p-8 sm:p-10">
              <p className="eyebrow">Benefits</p>
              <h3 className="mt-4 font-serif text-xl font-light text-charcoal">
                מה מרוויחים מהטיפול
              </h3>

              <ul className="mt-7 space-y-4">
                {treatment.benefits.map((benefit) => (
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
            </div>
          </Reveal>
        </div>
      </div>
    </ClinicSection>
  );
}
