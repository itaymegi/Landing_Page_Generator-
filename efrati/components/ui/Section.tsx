import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "cream" | "beige" | "white" | "dark";
};

const toneClasses = {
  cream: "bg-cream",
  beige: "bg-beige",
  white: "bg-white",
  dark: "bg-charcoal text-white",
};

export function Section({
  id,
  children,
  className = "",
  tone = "cream",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 sm:py-28 lg:py-32 ${toneClasses[tone]} ${className}`}
    >
      <div className="mx-auto w-full max-w-[90rem] px-4 sm:px-8 lg:px-12">
        {children}
      </div>
    </section>
  );
}

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  align?: "center" | "start";
  dark?: boolean;
};

export function SectionHeader({
  title,
  subtitle,
  align = "start",
  dark = false,
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-start";

  return (
    <div className={`mb-12 sm:mb-16 max-w-2xl ${alignClass}`}>
      <h2
        className={`font-serif text-3xl font-light tracking-wide sm:text-4xl ${
          dark ? "text-white" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            dark ? "text-white/75" : "text-charcoal/70"
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
