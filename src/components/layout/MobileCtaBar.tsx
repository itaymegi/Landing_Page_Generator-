import type { SiteConfig } from '../../content/site'
import { StoreToggleCTA } from '../ui/StoreToggleCTA'

export function MobileCtaBar({ nav }: Pick<SiteConfig, 'nav'>) {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 px-3 pt-2 pb-[max(0.6rem,env(safe-area-inset-bottom))] sm:hidden">
      <div className="pointer-events-auto mx-auto max-w-sm rounded-2xl border border-border bg-surface/95 p-1.5 shadow-lg shadow-black/30 backdrop-blur-md">
        <StoreToggleCTA
          appStore={nav.cta}
          playStore={nav.playStore}
          segmentLabels={nav.storeSegmentLabels}
          stickyPrimaryCta={nav.stickyPrimaryCta}
          density="compact"
          layout="stack"
        />
      </div>
    </div>
  )
}
