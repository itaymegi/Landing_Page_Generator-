import type { SiteConfig } from '../../content/site'
import { Card } from '../ui/Card'
import { Section } from '../layout/Section'

export function Benefits({ benefits }: Pick<SiteConfig, 'benefits'>) {
  return (
    <Section
      id="benefits"
      variant="muted"
      title={benefits.title}
      subtitle={benefits.subtitle}
    >
      <ul className="grid gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
        {benefits.items.map((item) => (
          <li key={item.title}>
            <Card className="h-full">
              <h3 className="font-display text-lg font-semibold text-text sm:text-xl">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-muted sm:text-base">
                {item.description}
              </p>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  )
}
