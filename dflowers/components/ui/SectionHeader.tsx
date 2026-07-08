import { Reveal } from "@/components/ui/Reveal";

type SectionHeaderVariant = "default" | "label-first" | "centered" | "editorial-bg";
type SectionHeaderAlign = "start" | "center";

type SectionHeaderProps = {
  label?: string;
  title: string;
  subtitle?: string;
  editorialWord?: string;
  variant?: SectionHeaderVariant;
  align?: SectionHeaderAlign;
  delay?: number;
};

export function SectionHeader({
  label,
  title,
  subtitle,
  editorialWord,
  variant = "default",
  align = "start",
  delay = 0,
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";
  const ruleClass = align === "center" ? "mx-auto" : "";

  return (
    <Reveal delay={delay}>
      <div className={alignClass}>
        {variant === "label-first" && label ? (
          <p className="text-xs font-medium tracking-[0.25em] text-accent uppercase">
            {label}
          </p>
        ) : null}

        {variant === "editorial-bg" ? (
          <div className="relative">
            {editorialWord ? (
              <span
                className="editorial-word pointer-events-none absolute -top-8 start-1/2 hidden -translate-x-1/2 sm:block"
                aria-hidden="true"
              >
                {editorialWord}
              </span>
            ) : null}
            <h2 className="relative font-serif text-3xl font-light tracking-wide text-text sm:text-4xl lg:text-5xl">
              {title}
            </h2>
          </div>
        ) : (
          <h2
            className={`font-serif font-light tracking-wide text-text ${
              variant === "centered"
                ? "text-3xl sm:text-4xl lg:text-5xl"
                : "text-3xl sm:text-4xl lg:text-5xl"
            } ${variant === "label-first" ? "mt-5 max-w-xl text-2xl sm:text-3xl lg:text-4xl" : ""}`}
          >
            {title}
          </h2>
        )}

        <span className={`rule-gold mt-4 sm:mt-5 ${ruleClass}`} aria-hidden="true" />

        {subtitle ? (
          <p
            className={`mt-4 max-w-xl text-base leading-[1.75] text-text-muted sm:text-lg ${
              align === "center" ? "mx-auto" : ""
            }`}
          >
            {subtitle}
          </p>
        ) : null}
      </div>
    </Reveal>
  );
}
