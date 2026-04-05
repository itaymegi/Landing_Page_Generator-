import type { SiteConfig } from '../../content/site'
import { Button } from '../ui/Button'

export function MobileCtaBar({ nav }: Pick<SiteConfig, 'nav'>) {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 p-4 sm:hidden">
      <div className="pointer-events-auto mx-auto max-w-md rounded-2xl border border-border bg-surface/95 p-2 shadow-lg shadow-black/30 backdrop-blur-md">
        <Button href={nav.cta.href} variant="primary" className="w-full !py-3.5">
          {nav.cta.label}
        </Button>
      </div>
    </div>
  )
}
