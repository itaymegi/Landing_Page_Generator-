import Image from "next/image";
import { site } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";
import { IMAGE_QUALITY } from "@/lib/image";

export function OurStory() {
  const { ourStory } = site;

  return (
    <section id="story" className="section-py bg-parchment">
      <div className="container-rubina grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
        <Reveal className="relative lg:order-1">
          <div
            className="absolute -bottom-4 -start-4 -z-10 h-full w-full bg-cream/80"
            aria-hidden="true"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-xl shadow-brown/10 ring-1 ring-cream sm:aspect-[5/6] lg:aspect-auto lg:min-h-[32rem]">
            <Image
              src={ourStory.image}
              alt={ourStory.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 50vw"
              quality={IMAGE_QUALITY}
            />
          </div>
        </Reveal>

        <Reveal className="lg:order-2 lg:py-8 text-center" delay={120}>
          <p className="text-base uppercase tracking-[0.25em] text-gold-deep">
            {ourStory.title}
          </p>
          <span className="rule-gold rule-gold-center mt-5" aria-hidden="true" />

          <h2 className="mt-8 mx-auto max-w-lg font-serif text-2xl font-light leading-tight tracking-wide text-brown sm:text-4xl lg:text-[3rem]">
            {ourStory.headline}
          </h2>

          <p className="mt-8 mx-auto max-w-lg text-base leading-relaxed text-text/80 sm:text-lg">
            {ourStory.intro}
          </p>

          {ourStory.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 24)}
              className="mt-5 mx-auto max-w-lg text-base leading-relaxed text-text/70 sm:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
