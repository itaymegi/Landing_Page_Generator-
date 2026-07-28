import type { ReactNode } from "react";

type Accent = "blush" | "peach" | "butter" | "powderBlue" | "lavender" | "sage";

type PastelBadgeProps = {
  accent?: Accent;
  children: ReactNode;
  className?: string;
};

const accentClasses: Record<Accent, string> = {
  blush: "bg-blush text-ink",
  peach: "bg-peach text-ink",
  butter: "bg-butter text-ink",
  powderBlue: "bg-powder-blue text-ink",
  lavender: "bg-lavender text-ink",
  sage: "bg-sage text-ink",
};

export function PastelBadge({ accent = "peach", children, className = "" }: PastelBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium tracking-wide ${accentClasses[accent]} ${className}`}
    >
      {children}
    </span>
  );
}
