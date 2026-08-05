type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  invert?: boolean;
  align?: "start" | "center";
  className?: string;
};

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  invert = false,
  align = "center",
  className = "",
}: SectionTitleProps) {
  const alignClass =
    align === "center" ? "text-center items-center" : "text-start items-start";

  return (
    <div className={`flex flex-col ${alignClass} ${className}`}>
      {eyebrow ? (
        <p className={`eyebrow ${invert ? "text-gold-soft" : ""}`}>{eyebrow}</p>
      ) : null}
      <h2
        className={`mt-3 max-w-[18ch] font-serif text-[clamp(1.65rem,4.8vw,2.75rem)] font-light leading-[1.2] tracking-[0.01em] sm:mt-4 sm:max-w-3xl ${
          invert ? "text-warm-white" : "text-charcoal"
        }`}
      >
        {title.split("\n").map((line, index) => (
          <span key={`${line}-${index}`} className={index > 0 ? "mt-1 block" : "block"}>
            {line}
          </span>
        ))}
      </h2>
      <span
        className={`rule-gold mt-4 sm:mt-5 ${align === "center" ? "mx-auto" : ""} ${
          invert ? "bg-gold-soft" : ""
        }`}
        aria-hidden="true"
      />
      {subtitle ? (
        <p
          className={`mt-4 max-w-[42ch] text-[0.9375rem] leading-[1.75] sm:mt-5 sm:text-base ${
            invert ? "text-warm-white/75" : "text-ink-muted"
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
