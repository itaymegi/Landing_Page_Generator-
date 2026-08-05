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
            <h2 className="mx-auto mt-3 max-w-[18ch] font-serif text-[clamp(1.75rem,4.2vw,3.25rem)] font-light leading-[1.2] text-charcoal sm:mt-5 sm:max-w-none">
              {why.title}
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <span className="rule-gold mx-auto mt-5 sm:mt-7" aria-hidden="true" />
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-5 text-[0.9375rem] leading-[1.75] text-ink-muted sm:mt-7 sm:text-base sm:leading-[2]">
              {why.subtitle}
            </p>
          </Reveal>
        </div>

        <ol className="mx-auto mt-8 grid max-w-5xl grid-cols-2 gap-3 sm:mt-14 sm:gap-x-8 sm:gap-y-10 lg:mt-20 lg:grid-cols-4 lg:gap-x-6">
          {why.items.map((item, index) => (
            <Reveal key={item.id} delay={index * 70} className="h-full">
              <li className="relative flex h-full flex-col rounded-2xl border border-gold/20 bg-marble p-[18px] shadow-[0_10px_28px_rgba(31,30,28,0.04)] sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none sm:border-t sm:border-line sm:rounded-none sm:pt-8">
                <span
                  className="font-serif-en pointer-events-none absolute end-3 top-2 select-none text-[2.5rem] font-light leading-none text-gold/20 sm:end-auto sm:start-0 sm:-top-2 sm:text-[3.75rem] lg:text-[4.25rem]"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="relative pt-6 font-serif text-base font-light text-charcoal sm:pt-5 sm:text-lg lg:text-xl">
                  {item.title}
                </h3>

                <p className="relative mt-2 text-[0.8125rem] leading-[1.65] text-ink-muted sm:mt-3 sm:text-[0.875rem] sm:leading-[1.9]">
                  {item.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={280}>
          <div className="relative mt-8 overflow-hidden rounded-[20px] bg-charcoal px-5 py-8 sm:mt-16 sm:rounded-[24px] sm:px-10 sm:py-12 lg:mt-20 lg:px-14">
            <span
              className="pointer-events-none absolute -end-16 -top-20 h-56 w-56 rounded-full bg-gold/[0.08] blur-3xl"
              aria-hidden="true"
            />

            <div className="relative">
              <p className="eyebrow text-gold-soft">{why.standard.eyebrow}</p>
              <p className="mt-4 max-w-2xl text-[0.875rem] leading-[1.8] text-ivory/75 sm:mt-5 sm:text-[0.9375rem] sm:leading-[1.95] sm:text-base">
                {why.standard.body}
              </p>

              <ul className="mt-7 grid gap-5 border-t border-ivory/15 pt-6 sm:mt-10 sm:grid-cols-3 sm:gap-0 sm:pt-8">
                {why.standard.points.map((point, index) => (
                  <li
                    key={point.title}
                    className={`sm:px-6 ${
                      index > 0 ? "sm:border-s sm:border-ivory/15" : "sm:ps-0"
                    } ${index === why.standard.points.length - 1 ? "sm:pe-0" : ""}`}
                  >
                    <h3 className="font-serif text-base font-light text-ivory sm:text-lg">
                      {point.title}
                    </h3>
                    <p className="mt-1.5 text-[0.75rem] leading-[1.7] text-ivory/55 sm:mt-2.5 sm:text-[0.8125rem] sm:leading-[1.85]">
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
