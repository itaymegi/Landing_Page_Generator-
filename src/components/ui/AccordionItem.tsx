import type { ReactNode } from 'react'

export function AccordionItem({
  id,
  question,
  children,
}: {
  id: string
  question: string
  children: ReactNode
}) {
  return (
    <details
      id={id}
      className="group rounded-2xl border border-border bg-surface-muted/60 open:bg-surface-muted/90 transition-colors"
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-display text-base font-semibold text-text sm:px-6 sm:py-5 sm:text-lg [&::-webkit-details-marker]:hidden">
        <span>{question}</span>
        <span
          aria-hidden
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-accent transition-transform group-open:rotate-45"
        >
          +
        </span>
      </summary>
      <div className="border-t border-border px-5 pb-5 pt-0 text-[0.95rem] leading-relaxed text-text-muted sm:px-6 sm:pb-6">
        {children}
      </div>
    </details>
  )
}
