import Image from "next/image";
import { site } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";

export function AboutLin() {
  const { about } = site;

  return (
    <section id="about" className="section-py bg-parchment">
      <div className="container-munch grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
        <Reveal className="relative">
          <div
            className="absolute -bottom-4 -end-4 -z-10 h-full w-full rounded-xl bg-cream"
            aria-hidden="true"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-xl shadow-brown/12 ring-1 ring-border sm:aspect-[5/6] lg:aspect-auto lg:min-h-[30rem]">
            <Image
              src={about.image}
              alt={about.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        </Reveal>

        <Reveal className="lg:py-8" delay={120}>
          <p className="font-display text-sm uppercase tracking-[0.28em] text-gold-deep">
            {about.eyebrow}
          </p>
          <span className="rule-gold mt-5" aria-hidden="true" />

          <h2 className="mt-7 font-serif text-4xl font-light leading-tight tracking-wide text-brown sm:text-5xl">
            {about.title}
          </h2>

          <p className="mt-8 max-w-lg text-lg leading-relaxed text-text/80 sm:text-xl">
            {about.text}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
