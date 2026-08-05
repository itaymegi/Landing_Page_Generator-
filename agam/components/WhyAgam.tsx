import { ClinicSection } from "@/components/ui/ClinicSection";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/config/site";

/**
 * Principles + materials standard in one luxury block — four reasons on top,
 * a charcoal standard panel beneath.
 */
export function WhyAgam() {
  const { why } = site;

  return (
    <ClinicSection
      id="why"
      tone="sand"
      editorialWord={why.editorialWord}
      hairline
    >
      <div className="container-agam">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow">{why.eyebrow}</p>
          </Reveal>

          <Reveal delay={80} blur>
            <h2 className="mt-5 font-serif text-[clamp(1.875rem,4.5vw,3.25rem)] font-light leading-[1.2] text-charcoal">
              {why.title}
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <span className="rule-gold mx-auto mt-7" aria-hidden="true" />
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-7 text-base leading-[2] text-ink-muted">
              {why.subtitle}
            </p>
          </Reveal>
        </div>

        <ol className="mx-auto mt-14 grid max-w-5xl gap-x-8 gap-y-10 sm:mt-16 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-x-6">
          {why.items.map((item, index) => (
            <Reveal key={item.id} delay={index * 70}>
              <li className="relative border-t border-line pt-8">
                <span
                  className="font-serif-en pointer-events-none absolute -top-2 start-0 select-none text-[3.75rem] font-light leading-none text-gold/20 lg:text-[4.25rem]"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="relative pt-5 font-serif text-lg font-light text-charcoal sm:text-xl">
                  {item.title}
                </h3>

                <p className="relative mt-3 text-[0.875rem] leading-[1.9] text-ink-muted">
                  {item.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={280}>
          <div className="relative mt-16 overflow-hidden rounded-[24px] bg-charcoal px-7 py-10 sm:mt-20 sm:px-10 sm:py-12 lg:px-14">
            <span
              className="pointer-events-none absolute -end-16 -top-20 h-56 w-56 rounded-full bg-gold/[0.08] blur-3xl"
              aria-hidden="true"
            />

            <div className="relative">
              <p className="eyebrow text-gold-soft">{why.standard.eyebrow}</p>
              <p className="mt-5 max-w-2xl text-[0.9375rem] leading-[1.95] text-ivory/75 sm:text-base">
                {why.standard.body}
              </p>

              <ul className="mt-10 grid gap-8 border-t border-ivory/15 pt-8 sm:grid-cols-3 sm:gap-0">
                {why.standard.points.map((point, index) => (
                  <li
                    key={point.title}
                    className={`sm:px-6 ${
                      index > 0 ? "sm:border-s sm:border-ivory/15" : "sm:ps-0"
                    } ${index === why.standard.points.length - 1 ? "sm:pe-0" : ""}`}
                  >
                    <h3 className="font-serif text-lg font-light text-ivory">
                      {point.title}
                    </h3>
                    <p className="mt-2.5 text-[0.8125rem] leading-[1.85] text-ivory/55">
                      {point.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </ClinicSection>
  );
}
