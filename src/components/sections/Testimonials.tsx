import type { SiteConfig } from '../../content/site'
import { Section } from '../layout/Section'

export function Testimonials({ testimonials }: Pick<SiteConfig, 'testimonials'>) {
  return (
    <Section
      id="testimonials"
      eyebrow="Social proof"
      title={testimonials.title}
      subtitle={testimonials.subtitle}
    >
      <ul className="grid gap-5 lg:grid-cols-3 lg:gap-6">
        {testimonials.items.map((item) => (
          <li
            key={item.name}
            className="flex flex-col rounded-2xl border border-border bg-surface-muted/70 p-6 sm:p-8"
          >
            <blockquote className="flex-1">
              <p className="text-[0.95rem] leading-relaxed text-text sm:text-base">
                “{item.quote}”
              </p>
            </blockquote>
            <footer className="mt-6 border-t border-border pt-6">
              <p className="font-display font-semibold text-text">{item.name}</p>
              <p className="text-sm text-text-muted">{item.role}</p>
            </footer>
          </li>
        ))}
      </ul>
    </Section>
  )
}
