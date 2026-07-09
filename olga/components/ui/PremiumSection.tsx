import type { ReactNode, Ref } from "react";
import { BackgroundDecorations } from "@/components/ui/BackgroundDecorations";

type PremiumSectionTone = "ivory" | "white" | "beige" | "warm" | "blush";

const toneClasses: Record<PremiumSectionTone, string> = {
  ivory: "section-tone-ivory",
  white: "section-tone-white",
  beige: "section-tone-beige",
  warm: "section-tone-warm",
  blush: "section-tone-blush",
};

type PremiumSectionProps = {
  id?: string;
  tone: PremiumSectionTone;
  editorialWord?: string;
  floral?: "none" | "corners" | "heading";
  className?: string;
  noPadding?: boolean;
  sectionRef?: Ref<HTMLElement>;
  children: ReactNode;
};

export function PremiumSection({
  id,
  tone,
  editorialWord,
  floral = "none",
  className = "",
  noPadding = false,
  sectionRef,
  children,
}: PremiumSectionProps) {
  return (
    <section
      id={id}
      ref={sectionRef}
      className={`relative overflow-hidden ${noPadding ? "" : "section-py"} ${toneClasses[tone]} ${className}`}
    >
      <BackgroundDecorations variant={floral} />

      {editorialWord ? (
        <div
          className="editorial-word pointer-events-none absolute inset-x-0 top-1/2 z-0 hidden -translate-y-1/2 text-center sm:block"
          aria-hidden="true"
        >
          {editorialWord}
        </div>
      ) : null}

      <div className="relative z-10">{children}</div>
    </section>
  );
}
