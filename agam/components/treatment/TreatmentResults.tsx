import { ClinicSection } from "@/components/ui/ClinicSection";
import { ResultImage } from "@/components/ui/ResultImage";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  beforeAfterSection,
  getResultsByIds,
  type ResultComposite,
} from "@/config/media";
import type { TreatmentCategory } from "@/config/treatments";

type TreatmentResultsProps = {
  treatment: TreatmentCategory;
};

export function TreatmentResults({ treatment }: TreatmentResultsProps) {
  // The hero already carries this treatment's draggable pair, so the grid below
  // shows only the remaining cases.
  const composites = getResultsByIds(treatment.beforeAfterIds).filter(
    (item): item is ResultComposite => item.kind === "composite",
  );

  if (composites.length === 0) return null;

  return (
    <ClinicSection id="results" tone="cream">
      <div className="container-agam">
        <SectionHeader
          eyebrow="Results"
          title={`תוצאות — ${treatment.title}`}
          subtitle={beforeAfterSection.subtitle}
        />

        <div
          className={`mt-12 lg:mt-16 ${
            composites.length > 1 ? "results-grid" : "mx-auto max-w-lg"
          }`}
        >
          {composites.map((item, index) => (
            <Reveal
              key={item.id}
              delay={(index % 3) * 80}
              className="results-item"
            >
              <div>
                <ResultImage
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  sizes="(max-width: 639px) 92vw, (max-width: 1023px) 44vw, 30vw"
                />

                <div className="mt-5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
                  <h3 className="font-serif text-lg font-light text-charcoal">
                    {item.treatment}
                  </h3>
                  <span className="text-[0.75rem] tracking-[0.1em] text-gold-deep">
                    {item.interval}
                  </span>
                </div>
                <p className="mt-2 text-[0.9375rem] leading-[1.85] text-ink-muted">
                  {item.summary}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mx-auto mt-12 max-w-2xl border-t border-line pt-6 text-center text-[0.8125rem] leading-[1.85] text-ink-faint">
            {beforeAfterSection.disclaimer}
          </p>
        </Reveal>
      </div>
    </ClinicSection>
  );
}
