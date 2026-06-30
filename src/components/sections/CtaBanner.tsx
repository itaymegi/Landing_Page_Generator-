import type { SiteConfig } from '../../content/site'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { StoreToggleCTA } from '../ui/StoreToggleCTA'

export function CtaBanner({ ctaMid, nav }: Pick<SiteConfig, 'ctaMid' | 'nav'>) {
  const play = ctaMid.playStore ?? nav.playStore
  const segmentLabels = nav.storeSegmentLabels

  return (
    <section className="border-y border-border bg-surface-muted/90 py-[var(--spacing-section-y)]">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-surface via-page to-surface-muted px-[clamp(1.25rem,4vw,2.5rem)] py-[clamp(2.5rem,5vw,4rem)] text-center">
          <div
            aria-hidden
            className="pointer-events-none absolute -start-20 top-0 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -end-20 bottom-0 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
          />
          <h2 className="relative font-display text-[length:var(--text-section-title)] font-bold leading-tight text-text">
            {ctaMid.title}
          </h2>
          <p className="relative mx-auto mt-4 max-w-2xl text-base leading-relaxed text-text sm:text-lg">
            {ctaMid.subtitle}
          </p>
          <div className="relative mx-auto mt-8 flex w-full max-w-md flex-col gap-3">
            {play ? (
              <StoreToggleCTA
                appStore={ctaMid.cta}
                playStore={play}
                segmentLabels={segmentLabels}
                stickyPrimaryCta={nav.stickyPrimaryCta}
                density="relaxed"
                layout="stack"
              />
            ) : (
              <Button href={ctaMid.cta.href} variant="primary" className="w-full">
                {ctaMid.cta.label}
              </Button>
            )}
            {ctaMid.secondaryCta && !(play && nav.stickyPrimaryCta) ? (
              <Button
                href={ctaMid.secondaryCta.href}
                variant="secondary"
                className="w-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                {ctaMid.secondaryCta.label}
              </Button>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  )
}
