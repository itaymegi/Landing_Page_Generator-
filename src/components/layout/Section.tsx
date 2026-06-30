import type { ReactNode } from 'react'
import { Container } from '../ui/Container'

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  variant = 'default',
}: {
  id?: string
  eyebrow?: string
  title?: string
  subtitle?: string
  children: ReactNode
  variant?: 'default' | 'muted' | 'contrast'
}) {
  const bg =
    variant === 'muted'
      ? 'bg-surface/70'
      : variant === 'contrast'
        ? 'bg-surface-muted/90'
        : 'bg-page'

  return (
    <section
      id={id}
      className={`scroll-mt-24 py-[var(--spacing-section-y)] ${bg}`}
    >
      <Container>
        {(eyebrow ?? title ?? subtitle) && (
          <header className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
            {eyebrow && (
              <p className="mb-3 font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-display text-[length:var(--text-section-title)] font-bold leading-tight tracking-tight text-text">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-base leading-relaxed text-text-muted sm:text-lg">
                {subtitle}
              </p>
            )}
          </header>
        )}
        {children}
      </Container>
    </section>
  )
}
