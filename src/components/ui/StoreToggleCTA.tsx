import { useEffect, useState } from 'react'
import type { Cta } from '../../content/types'
import { Button } from './Button'

function defaultStoreFromUA(): 'apple' | 'google' {
  if (typeof navigator === 'undefined') return 'apple'
  const ua = navigator.userAgent || ''
  if (/Android/i.test(ua)) return 'google'
  if (/iPhone|iPad|iPod/i.test(ua)) return 'apple'
  return 'apple'
}

type Density = 'compact' | 'relaxed'
type Layout = 'stack' | 'inline'

const storeLinkBase =
  'flex min-w-0 flex-1 items-center justify-center rounded-full font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-page text-text-muted hover:text-text'

/**
 * App Store / Google Play + primary CTA.
 * - With `playStore` only: segmented toggle + one button to the selected store.
 * - With `playStore` + `stickyPrimaryCta`: two direct store links + prominent button (e.g. WhatsApp).
 */
export function StoreToggleCTA({
  appStore,
  playStore,
  segmentLabels,
  density = 'relaxed',
  layout = 'stack',
  className = '',
  stickyPrimaryCta,
}: {
  appStore: Cta
  playStore?: Cta
  segmentLabels?: { apple: string; google: string }
  density?: Density
  layout?: Layout
  className?: string
  /** When set with `playStore`, store row links to each store; this button is the main action below (e.g. WhatsApp). */
  stickyPrimaryCta?: Cta
}) {
  const appleSeg = segmentLabels?.apple ?? 'App Store'
  const googleSeg = segmentLabels?.google ?? 'Google Play'
  const [store, setStore] = useState<'apple' | 'google'>('apple')

  useEffect(() => {
    if (!playStore || stickyPrimaryCta) return
    setStore(defaultStoreFromUA())
  }, [playStore, stickyPrimaryCta])

  const active = store === 'apple' ? appStore : playStore!
  const segPad = density === 'compact' ? 'py-1.5 text-xs' : 'py-2.5 text-sm'
  const btnClass = density === 'compact' ? '!py-2 !text-sm' : '!py-3.5'

  if (!playStore) {
    return (
      <div className={className}>
        <Button href={appStore.href} variant="primary" className={`w-full ${btnClass}`}>
          {appStore.label}
        </Button>
      </div>
    )
  }

  /** Two direct store links + optional prominent CTA (no duplicate store button). */
  if (stickyPrimaryCta) {
    const segmentRow = (
      <div
        className={`flex min-w-0 shrink-0 rounded-full border border-border/80 bg-page/50 p-1 ${layout === 'inline' ? 'flex-1' : 'w-full'}`}
        role="group"
        aria-label="App stores"
      >
        <a
          href={appStore.href}
          className={`${storeLinkBase} ${segPad}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {appleSeg}
        </a>
        <a
          href={playStore.href}
          className={`${storeLinkBase} ${segPad}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {googleSeg}
        </a>
      </div>
    )

    const prominent = (
      <Button
        href={stickyPrimaryCta.href}
        variant="primary"
        className={`${layout === 'inline' ? 'min-w-0 shrink-0 sm:flex-1' : 'w-full'} ${btnClass}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {stickyPrimaryCta.label}
      </Button>
    )

    if (layout === 'inline') {
      return (
        <div
          className={`flex min-w-0 flex-row flex-wrap items-stretch gap-2 ${className}`.trim()}
        >
          {segmentRow}
          {prominent}
        </div>
      )
    }

    return (
      <div className={`flex min-w-0 flex-col gap-2 ${className}`.trim()}>
        {segmentRow}
        {prominent}
      </div>
    )
  }

  const segmentGroup = (
    <div
      className={`flex min-w-0 shrink-0 rounded-full border border-border/80 bg-page/50 p-1 ${layout === 'inline' ? 'flex-1' : ''}`}
      role="group"
      aria-label="Choose store"
    >
      <button
        type="button"
        onClick={() => setStore('apple')}
        aria-pressed={store === 'apple'}
        className={`min-w-0 flex-1 rounded-full font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-page ${segPad} ${
          store === 'apple'
            ? 'bg-accent text-accent-foreground shadow-sm'
            : 'text-text-muted hover:text-text'
        }`}
      >
        {appleSeg}
      </button>
      <button
        type="button"
        onClick={() => setStore('google')}
        aria-pressed={store === 'google'}
        className={`min-w-0 flex-1 rounded-full font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-page ${segPad} ${
          store === 'google'
            ? 'bg-accent text-accent-foreground shadow-sm'
            : 'text-text-muted hover:text-text'
        }`}
      >
        {googleSeg}
      </button>
    </div>
  )

  const ctaBtn = (
    <Button
      href={active.href}
      variant="primary"
      className={`${layout === 'inline' ? 'min-w-0 flex-1' : 'w-full'} ${btnClass}`}
    >
      {active.label}
    </Button>
  )

  if (layout === 'inline') {
    return (
      <div className={`flex min-w-0 flex-row items-stretch gap-2 ${className}`.trim()}>
        {segmentGroup}
        {ctaBtn}
      </div>
    )
  }

  return (
    <div className={`flex flex-col gap-2 ${className}`.trim()}>
      {segmentGroup}
      {ctaBtn}
    </div>
  )
}
