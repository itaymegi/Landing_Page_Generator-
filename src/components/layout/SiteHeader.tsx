import { useEffect, useState } from 'react'
import type { SiteConfig } from '../../content/site'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { StoreToggleCTA } from '../ui/StoreToggleCTA'

export function SiteHeader({
  brand,
  nav,
  ui,
}: Pick<SiteConfig, 'brand' | 'nav' | 'ui'>) {
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
            className="group flex min-w-0 items-center gap-2.5 sm:gap-3"
            dir="ltr"
            onClick={() => setOpen(false)}
          >
            {brand.logoSrc ? (
              <span className="relative shrink-0 overflow-hidden rounded-full border border-border/80 bg-black/40 shadow-md ring-1 ring-white/10">
                <img
                  src={brand.logoSrc}
                  alt={brand.logoAlt ?? ''}
                  width={40}
                  height={40}
                  className="h-9 w-9 object-contain sm:h-10 sm:w-10"
                  decoding="async"
                />
              </span>
            ) : null}
            <span className="flex min-w-0 flex-col">
              <span className="font-display text-lg font-bold tracking-tight text-text transition-colors group-hover:text-accent sm:text-xl">
                {brand.name}
              </span>
              <span className="hidden truncate text-xs text-text-muted sm:block">
                {brand.tagline}
              </span>
            </span>
          </a>

          <nav
            className="hidden items-center gap-1 md:flex"
            aria-label={ui.navAriaPrimary}
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
            {nav.playStore ? (
              <div className="ms-2 hidden w-full max-w-[min(100%,30rem)] shrink-0 lg:block">
                <StoreToggleCTA
                  appStore={nav.cta}
                  playStore={nav.playStore}
                  segmentLabels={nav.storeSegmentLabels}
                  stickyPrimaryCta={nav.stickyPrimaryCta}
                  density="compact"
                  layout="inline"
                />
              </div>
            ) : (
              <Button
                href={nav.cta.href}
                className="ms-2 hidden !py-2 !text-sm lg:inline-flex"
                variant="primary"
              >
                {nav.cta.label}
              </Button>
            )}
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            {!nav.playStore ? (
              <Button
                href={nav.cta.href}
                className="!px-4 !py-2 !text-sm"
                variant="primary"
              >
                {nav.cta.label}
              </Button>
            ) : null}
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-text transition-colors hover:border-accent/50 hover:text-accent"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? ui.menuClose : ui.menuOpen}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">{ui.srMenu}</span>
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
        className={`fixed inset-0 top-16 z-40 bg-page backdrop-blur-md transition-opacity duration-200 md:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!open}
      >
        <nav
          className="mx-auto flex max-w-lg flex-col gap-1 px-4 py-6"
          aria-label={ui.navAriaMobilePrimary}
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
