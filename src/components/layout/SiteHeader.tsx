import { useEffect, useState } from 'react'
import type { SiteConfig } from '../../content/site'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

export function SiteHeader({
  brand,
  nav,
}: Pick<SiteConfig, 'brand' | 'nav'>) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-page/85 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4 sm:h-[4.25rem]">
          <a
            href="#top"
            className="group flex min-w-0 flex-col"
            onClick={() => setOpen(false)}
          >
            <span className="font-display text-lg font-bold tracking-tight text-text transition-colors group-hover:text-accent sm:text-xl">
              {brand.name}
            </span>
            <span className="hidden truncate text-xs text-text-muted sm:block">
              {brand.tagline}
            </span>
          </a>

          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Primary"
          >
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-text-muted transition-colors hover:bg-surface-muted/80 hover:text-text"
              >
                {link.label}
              </a>
            ))}
            <Button
              href={nav.cta.href}
              className="ml-2 !py-2 !text-sm"
              variant="primary"
            >
              {nav.cta.label}
            </Button>
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <Button
              href={nav.cta.href}
              className="!px-4 !py-2 !text-sm"
              variant="primary"
            >
              {nav.cta.label}
            </Button>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-text transition-colors hover:border-accent/50 hover:text-accent"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Menu</span>
              {open ? (
                <span aria-hidden className="text-xl leading-none">
                  ×
                </span>
              ) : (
                <span aria-hidden className="flex flex-col gap-1.5">
                  <span className="block h-0.5 w-5 rounded-full bg-current" />
                  <span className="block h-0.5 w-5 rounded-full bg-current" />
                </span>
              )}
            </button>
          </div>
        </div>
      </Container>

      <div
        id="mobile-nav"
        className={`fixed inset-0 top-16 z-40 bg-page/95 backdrop-blur-md transition-opacity duration-200 lg:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!open}
      >
        <nav
          className="mx-auto flex max-w-lg flex-col gap-1 px-4 py-6"
          aria-label="Mobile primary"
        >
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-xl border border-border/60 bg-surface-muted/50 px-4 py-4 text-base font-semibold text-text transition-colors hover:border-accent/40"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
