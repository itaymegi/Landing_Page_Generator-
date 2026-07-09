import type { ElementType, ReactNode } from "react";

type LuxuryCardProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
};

export function LuxuryCard({
  children,
  className = "",
  as: Component = "div",
}: LuxuryCardProps) {
  return (
    <Component className={`luxury-card ${className}`}>{children}</Component>
  );
}
