import type { ReactNode } from "react";

export function Badge({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex min-h-11 items-center justify-center rounded-2xl px-4 py-2 text-center text-[0.7rem] tracking-[0.08em] text-charcoal sm:text-[0.75rem] ${className}`}
    >
      {children}
    </span>
  );
}
