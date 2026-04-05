import type { SiteConfig } from '../../content/site'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

export function Hero({
  hero,
  proofStrip,
}: Pick<SiteConfig, 'hero' | 'proofStrip'>) {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border/80 bg-page pb-16 pt-10 sm:pb-20 sm:pt-14 lg:pb-24 lg:pt-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,color-mix(in_oklab,var(--color-accent)_22%,transparent),transparent_55%)]"
      />
      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-accent sm:text-sm">
              {hero.eyebrow}
            </p>
            <h1 className="mt-4 font-display text-[1.85rem] font-bold leading-[1.15] tracking-tight text-text sm:text-4xl sm:leading-[1.12] lg:text-5xl lg:leading-[1.08]">
              {hero.title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg">
              {hero.subtitle}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Button href={hero.primaryCta.href} variant="primary">
                {hero.primaryCta.label}
              </Button>
              <Button
                href={hero.secondaryCta.href}
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                {hero.secondaryCta.label}
              </Button>
            </div>
            <ul className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-2">
              {proofStrip.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm font-medium text-text-muted"
                >
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-2xl shadow-black/40 sm:aspect-[16/11] lg:aspect-[5/4]">
              <img
                src={hero.imageSrc}
                alt={hero.imageAlt}
                width={1200}
                height={900}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-page/90 via-transparent to-transparent" />
            </div>
            <div
              aria-hidden
              className="absolute -bottom-6 -right-4 hidden h-24 w-24 rounded-2xl border border-accent/30 bg-accent-subtle blur-2xl sm:block"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
