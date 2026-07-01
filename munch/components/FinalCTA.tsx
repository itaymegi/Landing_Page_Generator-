import Image from "next/image";
import { site } from "@/config/site";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppConsentNote } from "@landing-legal/core";

export function FinalCTA() {
  const { finalCta } = site;

  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={finalCta.image}
          alt=""
          fill
          className="scale-105 object-cover blur-[3px]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brown/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,167,122,0.22)_0%,transparent_60%)]" />
      </div>

      <div className="section-py relative">
        <div className="container-munch mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="font-serif text-4xl font-light leading-tight tracking-wide text-white sm:text-5xl">
              {finalCta.title}
            </h2>
            <span className="rule-gold rule-gold-center mt-6" aria-hidden="true" />
            <p className="mt-8 text-base leading-relaxed text-white/85 sm:text-lg">
              {finalCta.text}
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-10 flex justify-center">
              <WhatsAppButton
                label={finalCta.ctaLabel}
                message={finalCta.ctaMessage}
                variant="primary"
                size="lg"
              />
            </div>
            <WhatsAppConsentNote />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
