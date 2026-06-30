import type { SiteConfig } from '../../content/site'
import { Container } from '../ui/Container'
import { inferSocialPlatform, SocialIconGlyph } from '../ui/socialIcons'

export function SiteFooter({
  footer,
  brand,
  ui,
}: Pick<SiteConfig, 'footer' | 'brand' | 'ui'>) {
  const legalOnly = footer.layout === 'legalOnly'

  return (
    <footer
      className={
        legalOnly
          ? 'border-t-0 bg-page pt-1 pb-2 sm:pt-0 sm:pb-2'
          : 'border-t border-border bg-page pt-6 pb-12 sm:pt-8 sm:pb-14'
      }
    >
      <Container>
        <div className="flex flex-col items-center text-center">
          {!legalOnly && brand.logoSrc ? (
            <div className="mb-3 overflow-hidden rounded-full border border-border bg-black/30 p-1 ring-1 ring-white/10">
              <img
                src={brand.logoSrc}
                alt={brand.logoAlt ?? ''}
                width={80}
                height={80}
                className="h-16 w-16 object-contain sm:h-20 sm:w-20"
                decoding="async"
              />
            </div>
          ) : null}
          {!legalOnly ? (
            <>
              <p className="font-display text-xl font-bold text-text sm:text-2xl">
                {brand.name}
              </p>
              <p className="mt-1.5 max-w-md text-sm leading-relaxed text-text-muted sm:text-base">
                {footer.tagline}
              </p>
            </>
          ) : null}

          {!legalOnly && footer.social.length > 0 ? (
            <ul className="mt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {footer.social.map((link) => {
                const platform = inferSocialPlatform(link)
                return (
                  <li key={link.label + link.href}>
                    <a
                      href={link.href}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-text-muted transition-colors hover:border-accent/50 hover:bg-surface-muted/80 hover:text-accent"
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

          {footer.links.length > 0 ? (
            <nav
              className={`flex max-w-lg flex-wrap justify-center gap-x-5 gap-y-2 text-sm ${legalOnly ? 'mt-2' : 'mt-8'}`}
              aria-label={ui.footerLegal}
            >
              {footer.links.map((link) => (
                <a
                  key={link.href + link.label}
                  href={link.href}
                  className="text-text-muted transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          ) : null}

          <p
            className={`text-xs text-text-muted sm:text-sm ${legalOnly ? 'mt-2' : 'mt-8'}`}
          >
            {footer.copyright}
          </p>
          {footer.creatorCredit ? (
            <p className="mt-3 font-display text-xs tracking-wide text-text-muted/90 sm:text-sm">
              {footer.creatorCredit}
            </p>
          ) : null}
        </div>
      </Container>
    </footer>
  )
}
