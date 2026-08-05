import type { ReactNode } from "react";

export type CTAVariant = "primary" | "outline" | "ghost" | "inverse";

const variantClasses: Record<CTAVariant, string> = {
  primary:
    "btn-sheen bg-charcoal text-ivory border border-charcoal hover:bg-charcoal-soft hover:border-charcoal-soft",
  outline:
    "border border-gold/45 text-charcoal hover:border-gold hover:bg-cream",
  ghost:
    "border border-ivory/35 text-ivory hover:border-ivory/70 hover:bg-ivory/10",
  inverse:
    "btn-sheen bg-ivory text-charcoal border border-ivory hover:bg-marble",
};

type CTAButtonProps = {
  href: string;
  children: ReactNode;
  variant?: CTAVariant;
  icon?: ReactNode;
  external?: boolean;
  fullWidthOnMobile?: boolean;
  className?: string;
  ariaLabel?: string;
  onClick?: () => void;
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  icon,
  external = false,
  fullWidthOnMobile = true,
  className = "",
  ariaLabel,
  onClick,
}: CTAButtonProps) {
  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      onClick={onClick}
      {...externalProps}
      className={`inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full px-8 text-sm font-normal tracking-[0.06em] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        fullWidthOnMobile ? "w-full sm:w-auto" : ""
      } ${variantClasses[variant]} ${className}`}
    >
      {icon}
      <span>{children}</span>
    </a>
  );
}
