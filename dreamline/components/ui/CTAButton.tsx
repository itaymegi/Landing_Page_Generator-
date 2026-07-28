import type { AnchorHTMLAttributes } from "react";

type CTAButtonProps = {
  href: string;
  label: string;
  variant?: "primary" | "outline" | "ghost" | "inverse" | "dark";
  size?: "sm" | "md" | "lg";
  external?: boolean;
  showArrow?: boolean;
  className?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">;

const variantClasses: Record<NonNullable<CTAButtonProps["variant"]>, string> = {
  primary:
    "bg-terracotta-deep text-white hover:bg-[#87421F] shadow-md shadow-terracotta/20 hover:shadow-lg hover:shadow-terracotta/25",
  outline: "border border-terracotta/50 text-terracotta-deep hover:border-terracotta hover:bg-terracotta/6",
  ghost: "bg-blush/60 text-ink hover:bg-blush",
  inverse: "border border-white/40 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:border-white/60",
  dark: "bg-ink text-white hover:bg-ink/85",
};

const sizeClasses: Record<NonNullable<CTAButtonProps["size"]>, string> = {
  sm: "min-h-10 px-5 py-2 text-sm",
  md: "min-h-12 px-6 py-2.5 text-base",
  lg: "min-h-14 px-9 py-3.5 text-lg",
};

function ArrowIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:-translate-x-0.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4M10 6l-6 6 6 6" />
    </svg>
  );
}

export function CTAButton({
  href,
  label,
  variant = "primary",
  size = "md",
  external = false,
  showArrow = true,
  className = "",
  ...rest
}: CTAButtonProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`group inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-ivory ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...rest}
    >
      <span>{label}</span>
      {showArrow ? <ArrowIcon /> : null}
    </a>
  );
}
