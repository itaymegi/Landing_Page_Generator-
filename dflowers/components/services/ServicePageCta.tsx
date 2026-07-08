import type { ServiceCategory } from "@/config/services";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { WhatsAppConsentNote } from "@landing-legal/core";

type ServicePageCtaProps = {
  service: ServiceCategory;
};

export function ServicePageCta({ service }: ServicePageCtaProps) {
  return (
    <section className="section-py bg-card">
      <div className="container-dflowers text-center">
        <Reveal>
          <h2 className="mx-auto max-w-2xl font-serif text-3xl font-light leading-tight tracking-wide text-text sm:text-4xl">
            רוצה שנעצב גם את האירוע שלך?
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <p className="mx-auto mt-5 max-w-lg text-base text-text-muted sm:text-lg">
            נשמח לשמוע על החזון שלכם ולהתאים עיצוב פרחים יוקרתי — בדיוק בשבילכם.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-10 flex justify-center">
            <WhatsAppButton
              message={service.whatsappMessage}
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
