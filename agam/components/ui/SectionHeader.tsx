import { Reveal } from "@/components/ui/Reveal";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "start";
  invert?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  invert = false,
}: SectionHeaderProps) {
  const isCentered = align === "center";

  return (
    <div
      className={`max-w-2xl ${isCentered ? "mx-auto text-center" : "text-start"}`}
    >
      <Reveal>
        <p className={`eyebrow ${invert ? "text-gold-soft" : ""}`}>{eyebrow}</p>
      </Reveal>

      <Reveal delay={80} blur>
        <h2
          className={`mt-4 font-serif text-[clamp(1.75rem,4.5vw,3rem)] font-light leading-[1.25] ${
            invert ? "text-ivory" : "text-charcoal"
          }`}
        >
          {title}
        </h2>
      </Reveal>

      <Reveal delay={140}>
        <span
          className={`rule-gold mt-6 ${isCentered ? "mx-auto" : ""}`}
          aria-hidden="true"
        />
      </Reveal>

      {subtitle ? (
        <Reveal delay={200}>
          <p
            className={`mt-6 text-base leading-[1.95] sm:text-[1.0625rem] ${
              invert ? "text-ivory/70" : "text-ink-muted"
            }`}
          >
            {subtitle}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
