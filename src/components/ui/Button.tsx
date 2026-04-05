import type { ComponentProps } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

const variantClass: Record<Variant, string> = {
  primary:
    'bg-accent text-page font-semibold shadow-sm hover:bg-accent-hover border border-transparent',
  secondary:
    'bg-transparent text-text border border-border hover:border-accent/50 hover:bg-accent-subtle',
  ghost: 'bg-transparent text-text hover:text-accent underline-offset-4 hover:underline border border-transparent',
}

type ButtonProps = ComponentProps<'a'> & {
  variant?: Variant
}

export function Button({
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  return (
    <a
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm sm:px-6 sm:py-3.5 sm:text-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-page ${variantClass[variant]} ${className}`.trim()}
      {...props}
    />
  )
}
