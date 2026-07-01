import Image from "next/image";
import { site } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function Services() {
  const { services } = site;

  return (
    <section id="services" className="section-py bg-cream">
      <div className="container-shani">
        <Reveal>
          <h2 className="font-serif text-3xl font-light tracking-wide text-brown sm:text-4xl lg:text-5xl">
            {services.title}
          </h2>
          <span className="rule-accent mt-5" aria-hidden="true" />
          <p className="mt-4 max-w-xl text-base text-text/70 sm:text-lg">
            {services.subtitle}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 sm:mt-16 lg:grid-cols-3 lg:gap-10">
          {services.items.map((item, index) => (
            <Reveal key={item.id} delay={index * 80}>
              <article className="group flex h-full flex-col overflow-hidden rounded-xl bg-background shadow-[0_4px_24px_rgba(90,70,52,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(90,70,52,0.12)]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <h3 className="font-serif text-2xl font-medium text-brown">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-text/70 sm:text-base">
                    {item.description}
                  </p>
                  <div className="mt-6">
                    <WhatsAppButton
                      label="קבלת הצעת מחיר"
                      message={item.whatsappMessage}
                      size="sm"
                      fullWidth
                    />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
