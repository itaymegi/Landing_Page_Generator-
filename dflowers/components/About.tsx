import Image from "next/image";
import { site } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  const { about } = site;

  return (
    <>
      <section id="about" className="section-py bg-background">
        <div className="container-dflowers">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
            <Reveal className="relative lg:order-1">
              <div
                className="absolute -bottom-3 -start-3 -z-10 h-full w-full bg-border/50"
                aria-hidden="true"
              />
              <div className="relative aspect-[4/5] overflow-hidden bg-border sm:aspect-[5/6] lg:min-h-[28rem]">
                <Image
                  src={about.image}
                  alt={about.imageAlt}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
            </Reveal>

            <Reveal className="lg:order-2" delay={120}>
              <p className="text-xs font-medium tracking-[0.25em] text-accent uppercase">
                {about.title}
              </p>
              <span className="rule-gold mt-4" aria-hidden="true" />

              <h2 className="mt-5 max-w-xl font-serif text-2xl font-light leading-tight tracking-wide text-text sm:text-3xl lg:text-4xl">
                {about.headline}
              </h2>

              <div className="mt-5 max-w-xl space-y-3 text-sm leading-[1.7] text-text-muted sm:text-base">
                <p>{about.intro}</p>
                {about.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        id="values"
        className="relative section-py bg-card pt-16 sm:pt-20"
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
          aria-hidden="true"
        />
        <div className="container-dflowers">
          <Reveal>
            <h3 className="font-serif text-xl font-light tracking-wide text-text sm:text-2xl">
              {about.pillarsTitle}
            </h3>
            <span className="rule-gold mt-4" aria-hidden="true" />

            <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
              {about.pillars.map((pillar) => (
                <article
                  key={pillar.title}
                  className="rounded-sm border-t border-accent/30 bg-background/50 px-3 pt-4 transition-colors hover:border-accent/60"
                >
                  <h4 className="font-serif text-base font-medium text-text">
                    {pillar.title}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-text-muted sm:text-sm">
                    {pillar.description}
                  </p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
