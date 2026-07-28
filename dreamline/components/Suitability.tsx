import { site } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";

export function Suitability() {
  const { suitability } = site;

  return (
    <section id="suitability" className="section-py relative overflow-x-clip bg-gradient-to-b from-blush/10 via-blush/20 to-peach/10">
      <div className="container-dreamline text-center">
        <Reveal>
          <h2 className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl lg:text-5xl">
            {suitability.title}
          </h2>
          <span className="rule rule-center mt-6" aria-hidden="true" />
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
            {suitability.subtitle}
          </p>
        </Reveal>

        <Reveal delay={100}>
          <ul className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3 sm:mt-12 sm:gap-4">
            {suitability.items.map((item) => (
              <li key={item.label}>
                <span className="inline-flex min-h-11 items-center rounded-full border border-terracotta/25 px-5 py-2.5 text-sm font-medium tracking-wide text-ink-soft transition-colors duration-200 hover:border-terracotta/60 hover:text-ink sm:text-base">
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
