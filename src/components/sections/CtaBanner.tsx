import type { SiteConfig } from '../../content/site'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

export function CtaBanner({ ctaMid }: Pick<SiteConfig, 'ctaMid'>) {
  return (
    <section className="border-y border-border bg-surface-muted/90 py-16 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-surface via-page to-surface-muted px-6 py-12 text-center sm:px-10 sm:py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
          />
          <h2 className="relative font-display text-2xl font-bold leading-tight text-text sm:text-3xl lg:text-4xl">
            {ctaMid.title}
          </h2>
          <p className="relative mx-auto mt-4 max-w-2xl text-base text-text-muted sm:text-lg">
            {ctaMid.subtitle}
          </p>
          <div className="relative mt-8 flex justify-center">
            <Button href={ctaMid.cta.href} variant="primary">
              {ctaMid.cta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
