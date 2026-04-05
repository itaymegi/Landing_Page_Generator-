import type { SiteConfig } from '../../content/site'
import { Container } from '../ui/Container'

export function SiteFooter({ footer, brand }: Pick<SiteConfig, 'footer' | 'brand'>) {
  return (
    <footer className="border-t border-border bg-surface/80 py-12 sm:py-14">
      <Container>
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-md">
            <p className="font-display text-lg font-bold text-text">{brand.name}</p>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">
              {footer.tagline}
            </p>
          </div>
          <div className="flex flex-wrap gap-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                Legal
              </p>
              <ul className="mt-3 space-y-2">
                {footer.links.map((link) => (
                  <li key={link.href + link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-text transition-colors hover:text-accent"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                Social
              </p>
              <ul className="mt-3 space-y-2">
                {footer.social.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-text transition-colors hover:text-accent"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <p className="mt-12 border-t border-border pt-8 text-center text-xs text-text-muted sm:text-left">
          {footer.copyright}
        </p>
      </Container>
    </footer>
  )
}
