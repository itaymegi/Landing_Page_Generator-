import Image from "next/image";
import { site } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { WhatsAppConsentNote } from "@landing-legal/core";

export function ContactCTA() {
  const { contactCta } = site;

  return (
    <section id="contact" className="relative isolate overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={contactCta.backgroundImage}
          alt={contactCta.backgroundAlt}
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-text/55" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(45,45,45,0.35)_100%)]"
          aria-hidden="true"
        />
      </div>

      <div className="container-dflowers relative z-10 section-py text-center">
        <Reveal>
          <h2 className="mx-auto max-w-3xl font-serif text-3xl font-light leading-tight tracking-wide text-white sm:text-4xl lg:text-5xl">
            {contactCta.headline}
          </h2>
          <span
            className="rule-gold mx-auto mt-5 bg-accent"
            aria-hidden="true"
          />
        </Reveal>

        <Reveal delay={100}>
          <p className="mx-auto mt-6 max-w-xl text-base leading-[1.75] text-white/85 sm:text-lg">
            {contactCta.text}
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-10 flex justify-center sm:mt-12">
            <WhatsAppButton
              label={contactCta.buttonLabel}
              variant="primary"
              size="lg"
            />
          </div>
          <WhatsAppConsentNote />
        </Reveal>
      </div>
    </section>
  );
}
