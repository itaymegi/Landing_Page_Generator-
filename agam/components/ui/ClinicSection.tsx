import type { ReactNode } from "react";

export type SectionTone = "marble" | "ivory" | "cream" | "sand" | "charcoal";

const toneClasses: Record<SectionTone, string> = {
  marble: "section-tone-marble",
  ivory: "section-tone-ivory",
  cream: "section-tone-cream",
  sand: "section-tone-sand",
  charcoal: "section-tone-charcoal",
};

type ClinicSectionProps = {
  id?: string;
  tone: SectionTone;
  editorialWord?: string;
  hairline?: boolean;
  noPadding?: boolean;
  className?: string;
  children: ReactNode;
};

export function ClinicSection({
  id,
  tone,
  editorialWord,
  hairline = false,
  noPadding = false,
  className = "",
  children,
}: ClinicSectionProps) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden ${noPadding ? "" : "section-py"} ${toneClasses[tone]} ${className}`}
    >
      {hairline ? (
        <span
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-gold/25 to-transparent"
          aria-hidden="true"
        />
      ) : null}

      {editorialWord ? (
        <div
          className="editorial-word pointer-events-none absolute inset-x-0 top-1/2 z-0 hidden -translate-y-1/2 text-center lg:block"
          aria-hidden="true"
        >
          {editorialWord}
        </div>
      ) : null}

      <div className="relative z-10">{children}</div>
    </section>
  );
}
