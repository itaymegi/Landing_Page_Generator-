import Image from "next/image";
import Link from "next/link";
import { site } from "@/config/site";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
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
        className="absolute inset-0 bg-gradient-to-t from-brown/90 via-brown/50 to-brown/25"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(90,70,52,0.35)_100%)]"
        aria-hidden="true"
      />

      <div className="relative flex min-h-[90vh] flex-col justify-end pb-24 pt-32 sm:min-h-[92vh] sm:pb-28 lg:pb-32">
        <div className="container-rubina">
          <Reveal delay={0}>
            <p className="font-display text-2xl tracking-[0.35em] text-white/90 sm:text-3xl">
              {brand.logoText}
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-6 max-w-3xl font-serif text-5xl font-light leading-[1.05] tracking-wide text-white sm:text-6xl lg:text-7xl">
              {hero.headline}
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
              {hero.subtitle}
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <WhatsAppButton label={hero.ctaLabel} size="lg" />
              <Link
                href="#products"
                className="text-base font-medium text-white/60 underline-offset-4 transition-colors hover:text-white/90 hover:underline"
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
