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
      className="pb-16 pt-10 sm:pb-20 sm:pt-12 lg:pb-24 lg:pt-14"
    >
      <div className="container-agam">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow">{about.eyebrow}</p>
          </Reveal>

          <Reveal delay={80} blur>
            <h2 className="font-serif-en mt-4 text-[clamp(1.875rem,4.5vw,3.25rem)] font-light leading-[1.2] tracking-[0.06em] text-charcoal">
              {about.title}
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <span className="rule-gold mx-auto mt-7" aria-hidden="true" />
          </Reveal>
        </div>

        <div className="mx-auto mt-10 max-w-2xl sm:mt-12">
          <Reveal delay={180}>
            <p className="text-center font-serif text-xl font-light italic leading-[1.7] text-gold-deep sm:text-2xl">
              {about.lead}
            </p>
          </Reveal>

          <div className="mt-9 space-y-5">
            {about.paragraphs.map((paragraph, index) => (
              <Reveal key={paragraph.slice(0, 24)} delay={240 + index * 60}>
                <p className="text-base leading-[2] text-ink-muted">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={440}>
            <blockquote className="mt-12 border-s-2 border-gold/40 ps-7">
              <p className="font-serif text-[clamp(1.375rem,3vw,1.875rem)] font-light leading-[1.55] text-charcoal">
                {about.pullQuote}
              </p>
            </blockquote>
          </Reveal>

          <Reveal delay={500}>
            <div className="mt-10 flex items-center gap-4">
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

          <dl className="mt-12 grid grid-cols-1 gap-8 border-t border-line pt-8 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0">
            {about.credentials.map((credential, index) => (
              <Reveal key={credential.label} delay={560 + index * 70}>
                <div className="text-center sm:text-start">
                  <dt className="sr-only">{credential.label}</dt>
                  <dd>
                    <span className="font-serif-en block text-[clamp(1.75rem,4.5vw,2.75rem)] font-light leading-none text-charcoal">
                      {credential.value}
                    </span>
                    <span className="mt-3 block text-[0.75rem] leading-[1.7] text-ink-faint">
                      {credential.label}
                    </span>
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </ClinicSection>
  );
}
