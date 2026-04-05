import type { SiteConfig } from '../../content/site'
import { Section } from '../layout/Section'

export function Services({ services }: Pick<SiteConfig, 'services'>) {
  return (
    <Section
      id="services"
      eyebrow="Deliverables"
      title={services.title}
      subtitle={services.subtitle}
    >
      <div className="grid gap-5 lg:grid-cols-3 lg:gap-6">
        {services.items.map((item, i) => (
          <article
            key={item.title}
            className="group relative overflow-hidden rounded-2xl border border-border bg-surface-muted/60 p-6 transition-colors hover:border-accent/30 sm:p-8"
          >
            <span className="font-display text-4xl font-bold tabular-nums text-border transition-colors group-hover:text-accent/40 sm:text-5xl">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className="mt-4 flex items-start justify-between gap-3">
              <h3 className="font-display text-xl font-semibold text-text">
                {item.title}
              </h3>
              {item.highlight && (
                <span className="shrink-0 rounded-full border border-accent/40 bg-accent-subtle px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
                  {item.highlight}
                </span>
              )}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-text-muted sm:text-base">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </Section>
  )
}
