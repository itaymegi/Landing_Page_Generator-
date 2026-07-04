import Image from "next/image";
import Link from "next/link";
import { site } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  const { hero, brand } = site;

  return (
    <section className="relative min-h-[90vh] overflow-hidden sm:min-h-[92vh]">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={hero.image}
          alt={hero.imageAlt}
          fill
          priority
          className="hero-zoom object-cover object-top"
          sizes="100vw"
        />
      </div>

      <div
        className="absolute inset-0 bg-gradient-to-b from-brown/80 via-brown/40 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,rgba(90,70,52,0.25)_100%)]"
        aria-hidden="true"
      />

      <div className="relative flex min-h-[90vh] flex-col justify-start pb-8 pt-28 sm:min-h-[92vh] sm:pt-32 lg:pt-36">
        <div className="container-rubina max-h-[55vh] sm:max-h-[58vh]">
          <Reveal delay={0}>
            <p className="font-display text-xl tracking-[0.35em] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] sm:text-2xl lg:text-3xl">
              {brand.logoText}
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-4 max-w-2xl font-serif text-4xl font-light leading-[1.05] tracking-wide text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] sm:mt-5 sm:text-5xl lg:text-6xl">
              {hero.headline}
            </h1>
          </Reveal>

          <Reveal delay={150}>
            <p
              dir="ltr"
              className="font-script mt-3 max-w-md text-3xl leading-[1.35] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] sm:mt-4 sm:max-w-lg sm:text-[2.25rem] lg:text-[2.5rem]"
            >
              {hero.tagline}
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] sm:mt-5 sm:text-base lg:text-lg">
              {hero.subtitle}
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-6 sm:mt-8">
              <Link
                href="#products"
                className="text-base font-medium text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline"
              >
                {hero.secondaryCta}
              </Link>
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
