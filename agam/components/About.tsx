import { ClinicSection } from "@/components/ui/ClinicSection";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/config/site";

/**
 * Text-only story under the Hero — the portrait already lives in the hero,
 * so this section continues the introduction without repeating it.
 */
export function About() {
  const { about } = site;

  return (
    <ClinicSection
      id="about"
      tone="sand"
      noPadding
      className="pb-12 pt-3 sm:pb-20 sm:pt-12 lg:pb-24 lg:pt-14"
    >
      <div className="container-agam">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow">{about.eyebrow}</p>
          </Reveal>

          <Reveal delay={80} blur>
            <h2 className="font-serif-en mt-2.5 text-[clamp(1.75rem,4.5vw,3.25rem)] font-light leading-[1.2] tracking-[0.06em] text-charcoal sm:mt-4">
              {about.title}
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <span className="rule-gold mx-auto mt-4 sm:mt-7" aria-hidden="true" />
          </Reveal>
        </div>

        <div className="mx-auto mt-6 max-w-2xl sm:mt-12">
          <Reveal delay={180}>
            <p className="text-center font-serif text-lg font-light italic leading-[1.5] text-gold-deep sm:text-2xl sm:leading-[1.7]">
              {about.lead}
            </p>
          </Reveal>

          <div className="mt-5 space-y-3.5 sm:mt-9 sm:space-y-5">
            {about.paragraphs.map((paragraph, index) => (
              <Reveal key={paragraph.slice(0, 24)} delay={240 + index * 60}>
                <p className="text-[0.9375rem] leading-[1.7] text-ink-muted sm:text-base sm:leading-[2]">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={440}>
            <blockquote className="mt-9 border-s-2 border-gold/40 ps-6 sm:mt-12 sm:ps-7">
              <p className="font-serif text-[clamp(1.25rem,3vw,1.875rem)] font-light leading-[1.5] text-charcoal">
                {about.pullQuote}
              </p>
            </blockquote>
          </Reveal>

          <Reveal delay={500}>
            <div className="mt-8 flex items-center gap-4 sm:mt-10">
              <span className="rule-gold" aria-hidden="true" />
              <div>
                <p className="font-serif text-lg font-light text-charcoal">
                  {about.signature}
                </p>
                <p className="mt-0.5 text-xs tracking-[0.1em] text-ink-faint">
                  {about.signatureRole}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={560}>
            <dl className="mt-8 grid grid-cols-3 gap-0 overflow-hidden rounded-2xl border border-gold/20 bg-marble/80 p-5 shadow-[0_12px_36px_rgba(31,30,28,0.05)] sm:mt-12 sm:p-7">
              {about.credentials.map((credential, index) => (
                <div
                  key={credential.label}
                  className={`px-2 text-center sm:px-4 ${
                    index > 0 ? "border-s border-line/80" : ""
                  }`}
                >
                  <dt className="sr-only">{credential.label}</dt>
                  <dd>
                    <span className="font-serif-en block text-[1.75rem] font-light leading-none text-charcoal sm:text-[clamp(1.75rem,4.5vw,2.75rem)]">
                      {credential.value}
                    </span>
                    <span
                      className="mx-auto mt-2 block h-px w-5 bg-gold/50"
                      aria-hidden="true"
                    />
                    <span className="mt-2 block text-[0.6875rem] leading-[1.45] text-ink-faint sm:mt-3 sm:text-[0.75rem] sm:leading-[1.7]">
                      {credential.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </ClinicSection>
  );
}
