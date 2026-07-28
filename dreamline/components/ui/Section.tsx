import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "ivory" | "blush" | "peach" | "butter" | "powderBlue" | "lavender" | "sage" | "ink";
};

const toneClasses: Record<NonNullable<SectionProps["tone"]>, string> = {
  ivory: "bg-ivory",
  blush: "bg-blush/40",
  peach: "bg-peach/35",
  butter: "bg-butter/35",
  powderBlue: "bg-powder-blue/40",
  lavender: "bg-lavender/35",
  sage: "bg-sage/40",
  ink: "bg-ink text-white",
};

export function Section({ id, children, className = "", tone = "ivory" }: SectionProps) {
  return (
    <section id={id} className={`section-py ${toneClasses[tone]} ${className}`}>
      <div className="container-dreamline">{children}</div>
    </section>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "start";
  dark?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "start",
  dark = false,
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "mx-auto text-center" : "text-start";

  return (
    <div className={`max-w-2xl ${alignClass} ${className}`}>
      {eyebrow ? (
        <p
          className={`font-display text-sm font-medium uppercase tracking-[0.18em] ${
            dark ? "text-white/70" : "text-terracotta-deep"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`mt-3 text-3xl font-medium leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${dark ? "text-white/75" : "text-ink-soft"}`}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
