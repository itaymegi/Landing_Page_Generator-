import { site } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";

export function HowToOrder() {
  const { howToOrder } = site;

  return (
    <section id="how" className="section-py bg-cream/30">
      <div className="container-rubina">
        <Reveal className="text-center">
          <p className="text-sm uppercase tracking-[0.28em] text-gold-deep">
            {howToOrder.eyebrow}
          </p>
          <h2 className="mt-3 font-serif text-3xl font-light tracking-wide text-brown sm:text-4xl lg:text-5xl">
            {howToOrder.title}
          </h2>
          <span className="rule-gold rule-gold-center mt-6" aria-hidden="true" />
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-brown/60 sm:text-lg">
            {howToOrder.subtitle}
          </p>
        </Reveal>

        <ol className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {howToOrder.steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 90} className="h-full">
              <li className="flex h-full flex-col items-center rounded-3xl border border-cream bg-white/70 p-6 text-center shadow-sm shadow-brown/5">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 font-serif text-xl font-light text-gold-deep">
                  {index + 1}
                </span>
                <h3 className="mt-5 font-serif text-lg font-medium text-brown">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brown/60">
                  {step.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
