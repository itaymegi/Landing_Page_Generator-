import Image from "next/image";
import { site } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";

export function OurStory() {
  const { ourStory } = site;

  return (
    <section id="story" className="bg-white py-20 sm:py-28 lg:py-32">
      <div className="container-rubina grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative lg:order-1">
          <div
            className="absolute -bottom-4 -start-4 -z-10 h-full w-full bg-beige/60"
            aria-hidden="true"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-xl shadow-charcoal/10 ring-1 ring-charcoal/5 sm:aspect-[5/6] lg:aspect-auto lg:min-h-[32rem]">
            <Image
              src={ourStory.image}
              alt={ourStory.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        </Reveal>

        <Reveal className="lg:order-2 lg:py-8" delay={120}>
          <p className="font-display text-sm uppercase tracking-[0.2em] text-gold-deep">
            {ourStory.title}
          </p>
          <span className="rule-gold mt-4" aria-hidden="true" />

          <h2 className="mt-6 max-w-lg font-serif text-3xl font-light leading-tight tracking-wide text-charcoal sm:text-4xl lg:text-[2.75rem]">
            {ourStory.headline}
          </h2>

          <p className="mt-8 max-w-lg text-base leading-relaxed text-charcoal/80 sm:text-lg">
            {ourStory.intro}
          </p>

          {ourStory.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 24)}
              className="mt-5 max-w-lg text-base leading-relaxed text-charcoal/70 sm:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
