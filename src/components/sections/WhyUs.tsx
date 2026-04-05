import type { SiteConfig } from '../../content/site'
import { Section } from '../layout/Section'

export function WhyUs({ whyUs }: Pick<SiteConfig, 'whyUs'>) {
  return (
    <Section
      id="process"
      variant="muted"
      eyebrow="Process"
      title={whyUs.title}
      subtitle={whyUs.subtitle}
    >
      <ol className="mx-auto max-w-3xl space-y-6">
        {whyUs.steps.map((step) => (
          <li
            key={step.step}
            className="relative flex gap-5 rounded-2xl border border-border bg-page/60 p-5 sm:gap-6 sm:p-8"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent/50 bg-accent-subtle font-display text-lg font-bold text-accent sm:h-14 sm:w-14 sm:text-xl">
              {step.step}
            </div>
            <div className="min-w-0 pt-0.5">
              <h3 className="font-display text-lg font-semibold text-text sm:text-xl">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted sm:text-base">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
