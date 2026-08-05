import Image from "next/image";
import { CTAButton } from "@/components/ui/CTAButton";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/ui/icons";
import { media } from "@/config/media";
import { site, siteWhatsAppHref } from "@/config/site";

export function FinalCTA() {
  const { finalCta } = site;

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-32"
    >
      <div className="absolute inset-0">
        <Image
          src={media.finalCta.src}
          alt={media.finalCta.alt}
          fill
          sizes="100vw"
          quality={90}
          className="object-cover object-center"
        />
      </div>
      <div
        className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/72 to-charcoal/50"
        aria-hidden="true"
      />

      <div className="container-marry relative z-10">
        <Reveal blur>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow text-gold-soft">{finalCta.eyebrow}</p>
            <h2 className="mt-4 font-serif text-[clamp(1.85rem,5vw,3rem)] font-light leading-[1.2] text-warm-white">
              {finalCta.title}
            </h2>
            <span className="rule-gold mx-auto mt-5 bg-gold-soft" aria-hidden="true" />
            <p className="mt-5 text-base leading-[1.75] text-warm-white/80">
              {finalCta.subtitle}
            </p>
            <p className="mt-3 text-sm text-warm-white/60">
              {finalCta.afterClick}
            </p>

            <ul className="mx-auto mt-7 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {finalCta.reassurances.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-warm-white/25 bg-warm-white/10 px-3.5 py-1.5 text-[0.68rem] tracking-[0.1em] text-warm-white/85 backdrop-blur-sm"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex justify-center">
              <CTAButton
                href={siteWhatsAppHref()}
                variant="inverse"
                external
                icon={<WhatsAppIcon />}
                className="shadow-[0_12px_40px_rgba(0,0,0,0.3)]"
              >
                {finalCta.cta}
              </CTAButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
