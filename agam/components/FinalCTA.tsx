import Image from "next/image";
import { WhatsAppConsentNote } from "@landing-legal/core";
import { CTAButton } from "@/components/ui/CTAButton";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/ui/icons";
import { consultationHref, site, siteWhatsAppHref } from "@/config/site";

export function FinalCTA() {
  const { finalCta } = site;

  return (
    <section id="contact" className="relative overflow-hidden bg-charcoal">
      {/* Two soft gold pools instead of a photo — the closing block is
          typographic so it never competes with the results above it. */}
      <span
        className="pointer-events-none absolute -top-32 start-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-gold/[0.09] blur-3xl"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
        aria-hidden="true"
      />

      <div className="container-agam relative z-10 py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Image
              src={site.brand.logoMark}
              alt={site.brand.logoMarkAlt}
              width={150}
              height={150}
              sizes="112px"
              quality={90}
              className="mx-auto h-24 w-24 rounded-full object-cover shadow-[0_18px_44px_rgba(0,0,0,0.4)] sm:h-28 sm:w-28"
            />
          </Reveal>

          <Reveal delay={60}>
            <p className="eyebrow mt-9 text-gold-soft">{finalCta.eyebrow}</p>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mt-5 font-serif text-[clamp(2rem,5.5vw,3.5rem)] font-light leading-[1.22] text-ivory">
              {finalCta.title}
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <span className="rule-gold mx-auto mt-7" aria-hidden="true" />
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-7 text-base leading-[1.95] text-ivory/70 sm:text-lg">
              {finalCta.subtitle}
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CTAButton
                href={consultationHref()}
                variant="inverse"
                external
                fullWidthOnMobile
              >
                {finalCta.primaryCta}
              </CTAButton>
              <CTAButton
                href={siteWhatsAppHref()}
                variant="ghost"
                external
                fullWidthOnMobile
                icon={<WhatsAppIcon className="h-[1.125rem] w-[1.125rem]" />}
              >
                {finalCta.secondaryCta}
              </CTAButton>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <p className="mt-8 text-[0.8125rem] tracking-[0.06em] text-ivory/45">
              {finalCta.note}
            </p>
          </Reveal>

          <Reveal delay={360}>
            <div className="mt-4 text-[0.75rem] text-ivory/40 [&_a]:text-ivory/70 [&_a]:underline">
              <WhatsAppConsentNote />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
