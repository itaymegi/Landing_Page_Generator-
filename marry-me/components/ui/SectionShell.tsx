import type { ReactNode } from "react";

type Tone = "warm-white" | "ivory" | "champagne" | "sand" | "charcoal";

const toneClasses: Record<Tone, string> = {
  "warm-white": "section-tone-warm-white",
  ivory: "section-tone-ivory",
  champagne: "section-tone-champagne",
  sand: "section-tone-sand",
  charcoal: "section-tone-charcoal",
};

type SectionShellProps = {
  id?: string;
  tone?: Tone;
  hairline?: boolean;
  children: ReactNode;
  className?: string;
};

export function SectionShell({
  id,
  tone = "ivory",
  hairline = false,
  children,
  className = "",
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden section-py ${toneClasses[tone]} ${className}`}
    >
      {hairline ? (
        <span
          className="absolute inset-x-0 top-0 mx-auto h-px w-[min(12rem,40%)] bg-gradient-to-r from-transparent via-gold/40 to-transparent"
          aria-hidden="true"
        />
      ) : null}
      <div className="relative z-10">{children}</div>
    </section>
  );
}
