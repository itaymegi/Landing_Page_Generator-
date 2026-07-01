import { site } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { WhatsAppConsentNote } from "@landing-legal/core";

export function FinalCTA() {
  const { finalCta } = site;

  return (
    <section className="section-py relative overflow-hidden bg-brown">
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(166,124,82,0.15)_0%,transparent_60%)]"
        aria-hidden="true"
      />

      <div className="container-shani relative text-center">
        <Reveal>
          <h2 className="mx-auto max-w-2xl font-serif text-3xl font-light leading-tight tracking-wide text-white sm:text-4xl lg:text-5xl">
            {finalCta.headline}
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-white/80 sm:mt-6 sm:text-lg">
            {finalCta.text}
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-8 flex justify-center sm:mt-10">
            <WhatsAppButton
              label={finalCta.buttonLabel}
              variant="dark"
              size="lg"
            />
          </div>
          <WhatsAppConsentNote />
        </Reveal>
      </div>
    </section>
  );
}
