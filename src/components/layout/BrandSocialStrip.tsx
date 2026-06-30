import type { SiteConfig } from '../../content/site'
import { Container } from '../ui/Container'
import { inferSocialPlatform, SocialIconGlyph } from '../ui/socialIcons'

const contactBandBg =
  'bg-[color:var(--color-contact-band,var(--color-accent))] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.07)]'
const contactBandFg =
  'text-[color:var(--color-contact-band-foreground,var(--color-accent-foreground))]'

/** Logo + tagline + social row, placed after Contact for a connected end-of-page band. */
export function BrandSocialStrip({
  brand,
  footer,
  ui,
  /** `contactBand`: same burgundy band as Contact (legal-only flow). */
  tone = 'page',
}: Pick<SiteConfig, 'brand' | 'footer' | 'ui'> & {
  tone?: 'page' | 'contactBand'
}) {
  if (footer.social.length === 0 && !brand.logoSrc) return null

  const band = tone === 'contactBand'

  return (
    <section
      aria-label={ui.footerSocial}
      className={
        band
          ? `${contactBandBg} py-5 pt-4 pb-2 sm:pb-2.5`
          : 'border-t border-white/10 bg-page py-8 sm:py-10'
      }
    >
      <Container>
        <div className="flex flex-col items-center text-center">
          {brand.logoSrc ? (
            <div
              className={
                band
                  ? 'mb-2.5 overflow-hidden rounded-full border border-white/20 bg-black/25 p-0.5 ring-1 ring-white/15'
                  : 'mb-2.5 overflow-hidden rounded-full border border-border bg-black/30 p-0.5 ring-1 ring-white/10'
              }
            >
              <img
                src={brand.logoSrc}
                alt={brand.logoAlt ?? ''}
                width={64}
                height={64}
                className="h-12 w-12 object-contain sm:h-14 sm:w-14"
                decoding="async"
              />
            </div>
          ) : null}
          <p
            className={`font-display text-lg font-bold sm:text-xl ${band ? contactBandFg : 'text-text'}`}
          >
            {brand.name}
          </p>
          <p
            className={`mt-1 max-w-md text-xs leading-relaxed sm:text-sm ${band ? `${contactBandFg} opacity-[0.88]` : 'text-text-muted'}`}
          >
            {footer.tagline}
          </p>
          {footer.social.length > 0 ? (
            <ul className="mt-3 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
              {footer.social.map((link) => {
                const platform = inferSocialPlatform(link)
                return (
                  <li key={link.label + link.href}>
                    <a
                      href={link.href}
                      className={
                        band
                          ? 'inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white/90 transition-colors hover:border-white/45 hover:bg-white/10 sm:h-10 sm:w-10'
                          : 'inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-muted transition-colors hover:border-accent/50 hover:bg-surface-muted/80 hover:text-accent sm:h-10 sm:w-10'
                      }
                      target="_blank"
                      rel="noreferrer"
                      aria-label={link.label}
                    >
                      <SocialIconGlyph platform={platform} />
                    </a>
                  </li>
                )
              })}
            </ul>
          ) : null}
        </div>
      </Container>
    </section>
  )
}
