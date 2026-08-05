import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "ghost";
};

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-charcoal text-ivory border border-charcoal hover:bg-charcoal-soft"
      : "border border-gold/35 text-charcoal hover:border-gold hover:bg-champagne";

  return (
    <button
      type="button"
      className={`inline-flex min-h-11 items-center justify-center rounded-full px-6 text-sm tracking-[0.06em] transition-all duration-400 ${styles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
