import type { SiteConfig } from '../../content/site'
import { Section } from '../layout/Section'
import { AccordionItem } from '../ui/AccordionItem'

export function Faq({ faq }: Pick<SiteConfig, 'faq'>) {
  return (
    <Section
      id="faq"
      variant="muted"
      title={faq.title}
      subtitle={faq.subtitle}
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-3">
        {faq.items.map((item, i) => (
          <AccordionItem
            key={item.question}
            id={`faq-${i}`}
            question={item.question}
          >
            <p className="pt-3">{item.answer}</p>
          </AccordionItem>
        ))}
      </div>
    </Section>
  )
}
