import type { SiteConfig } from '../../content/site'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

export function Hero({ hero, proofStrip }: Pick<SiteConfig, 'hero' | 'proofStrip'>) {
  const hasHeroImage = Boolean(hero.imageSrc?.trim())

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border/80 bg-page pb-[clamp(3rem,6vw,6rem)] pt-[clamp(2.25rem,4vw,4rem)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_-15%,color-mix(in_oklab,var(--color-accent)_18%,transparent),transparent_50%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-page via-transparent to-transparent opacity-90"
      />
      <Container className="relative">
        <div
          className={`grid items-center gap-10 md:gap-12 ${hasHeroImage ? 'md:grid-cols-2 md:gap-10 lg:gap-14' : ''}`}
        >
          <div
            className={
              hasHeroImage ? '' : 'mx-auto w-full max-w-3xl text-center md:mx-0 md:text-start'
            }
          >
            {hero.modernEyebrow ? (
              <p
                className={`inline-flex rounded-full border border-accent/35 bg-accent/10 px-3 py-1 font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-accent drop-shadow-sm sm:text-xs sm:tracking-[0.2em] ${hasHeroImage ? '' : 'mx-auto md:mx-0'}`}
              >
                {hero.eyebrow}
              </p>
            ) : (
              <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-accent drop-shadow-sm sm:text-sm">
                {hero.eyebrow}
              </p>
            )}
            <h1 className="mt-4 font-display text-[length:var(--text-hero)] font-bold leading-[1.12] tracking-tight text-text">
              {hero.title}
            </h1>
            <p
              className={`mt-5 text-base leading-relaxed text-text-muted sm:text-lg ${hasHeroImage ? 'max-w-xl' : 'max-w-2xl md:max-w-none'} ${hasHeroImage ? '' : 'mx-auto md:mx-0'}`}
            >
              {hero.subtitle}
            </p>
            {!hero.hideHeroCtas ? (
              <div
                className={`mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center ${hasHeroImage ? '' : 'justify-center md:justify-start'}`}
              >
                {hero.dualStoreHero ? (
                  <>
                    <Button
                      href={hero.primaryCta.href}
                      variant="primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
                  </>
                ) : (
                  <>
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
                  </>
                )}
              </div>
            ) : null}
            <ul
              className={`${hero.hideHeroCtas ? 'mt-8' : 'mt-10'} flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-2 ${hasHeroImage ? '' : 'justify-center md:justify-start'}`}
            >
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

          {hasHeroImage ? (
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
                className="absolute -bottom-6 -end-4 hidden h-24 w-24 rounded-2xl border border-accent/30 bg-accent-subtle blur-2xl sm:block"
              />
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  )
}
