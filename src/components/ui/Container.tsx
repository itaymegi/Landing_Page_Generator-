import type { ReactNode } from 'react'

export function Container({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={`mx-auto w-full max-w-[min(100%,72rem)] px-[clamp(1rem,4vw,2rem)] ${className}`}
    >
      {children}
    </div>
  )
}
