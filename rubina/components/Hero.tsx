import Image from "next/image";
import { site } from "@/config/site";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  const { hero, brand } = site;

  return (
    <section className="relative min-h-[88vh] overflow-hidden sm:min-h-[92vh]">
      <Image
        src={hero.image}
        alt={hero.imageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      <div
        className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/45 to-charcoal/25"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(43,36,33,0.35)_100%)]"
        aria-hidden="true"
      />

      <div className="relative flex min-h-[88vh] flex-col justify-end pb-20 pt-28 sm:min-h-[92vh] sm:pb-24 lg:pb-28">
        <div className="container-rubina">
          <Reveal delay={0}>
            <div className="flex items-center gap-3">
              <span className="rule-gold" aria-hidden="true" />
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold sm:text-sm">
                {brand.tagline}
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-5 max-w-3xl font-serif text-4xl font-light leading-[1.08] tracking-wide text-white sm:text-5xl lg:text-[3.5rem]">
              {hero.headline}
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/88 sm:text-lg">
              {hero.subtitle}
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-9">
              <WhatsAppButton label={hero.ctaLabel} size="lg" />
            </div>
          </Reveal>
        </div>
      </div>

      <a
        href="#story"
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-white/50 transition-colors hover:text-white/80 sm:bottom-8"
        aria-label="גלול למטה"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">גלול</span>
        <svg
          className="h-5 w-5 scroll-cue-animate"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </a>
    </section>
  );
}
