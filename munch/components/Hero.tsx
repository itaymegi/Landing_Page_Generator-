import Image from "next/image";
import Link from "next/link";
import { site } from "@/config/site";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  const { hero } = site;

  return (
    <section className="relative min-h-[92vh] overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={hero.image}
          alt={hero.imageAlt}
          fill
          priority
          className="hero-zoom object-cover object-center"
          sizes="100vw"
        />
      </div>

      <div
        className="absolute inset-0 bg-gradient-to-t from-brown/92 via-brown/55 to-brown/30"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(44,44,44,0.35)_100%)]"
        aria-hidden="true"
      />

      <div className="relative flex min-h-[92vh] flex-col justify-end pb-24 pt-32 sm:pb-28 lg:pb-32">
        <div className="container-munch">
          <Reveal delay={0}>
            <p className="font-display text-2xl lowercase tracking-[0.3em] text-white/90 sm:text-3xl">
              {hero.eyebrow}
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-6 max-w-3xl font-serif text-5xl font-light leading-[1.08] tracking-wide text-white sm:text-6xl lg:text-7xl">
              {hero.headline}
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
              {hero.subtitle}
            </p>
          </Reveal>

          <Reveal delay={280}>
            <p className="mt-5 text-sm uppercase tracking-[0.28em] text-gold/90">
              {hero.trustLine}
            </p>
          </Reveal>

          <Reveal delay={360}>
            <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <WhatsAppButton
                label={hero.ctaLabel}
                message={hero.ctaMessage}
                size="lg"
              />
              <Link
                href="#products"
                className="text-base font-medium text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline"
              >
                {hero.secondaryCta}
              </Link>
              <a
                href={site.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-white/55 underline-offset-4 transition-colors hover:text-white/80 hover:underline"
              >
                {hero.instagramCta}
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      <a
        href="#products"
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
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </a>
    </section>
  );
}
