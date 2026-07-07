import { site } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";

export function Occasions() {
  const { occasions } = site;

  return (
    <section id="occasions" className="bg-parchment py-16 sm:py-20 lg:py-24">
      <div className="container-rubina text-center">
        <Reveal>
          <h2 className="font-serif text-3xl font-light tracking-wide text-brown sm:text-4xl lg:text-5xl">
            {occasions.title}
          </h2>
          <span className="rule-gold rule-gold-center mt-6" aria-hidden="true" />
          <p className="mx-auto mt-4 max-w-xl font-serif text-base leading-relaxed text-brown/70 sm:text-lg">
            {occasions.subtitle}
          </p>
        </Reveal>

        <Reveal delay={100}>
          <ul className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3 sm:mt-12 sm:gap-4">
            {occasions.items.map((item) => (
              <li key={item.label}>
                <span className="inline-flex items-center rounded-full border border-gold/25 bg-white/70 px-4 py-2 text-sm font-light tracking-wide text-brown/80 transition-colors duration-200 hover:border-gold/60 hover:bg-white hover:text-brown sm:px-5 sm:py-2.5 sm:text-base">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
