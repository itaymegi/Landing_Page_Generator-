import type { ReactNode } from "react";

type SoftGlowImageProps = {
  children: ReactNode;
  className?: string;
};

export function SoftGlowImage({ children, className = "" }: SoftGlowImageProps) {
  return (
    <div className={`soft-glow-wrap ${className}`}>
      <div className="soft-glow" aria-hidden="true" />
      <div className="relative z-[1]">{children}</div>
    </div>
  );
}
