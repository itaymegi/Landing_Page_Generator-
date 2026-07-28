import type { CSSProperties } from "react";
import { site, creationItem } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";
import { ArtworkFrame } from "@/components/ui/ArtworkFrame";
import { CTAButton } from "@/components/ui/CTAButton";

function SparkleIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2z" />
    </svg>
  );
}

export function Hero() {
  const { hero } = site;
  const primary = creationItem(hero.primaryImageId);
  const supporting = creationItem(hero.supportingImageId);
  const accent = creationItem(hero.accentImageId);

  return (
    <section className="relative overflow-hidden pb-14 pt-32 sm:pb-20 sm:pt-40 lg:pb-28 lg:pt-44">
      {/* Soft pastel backplates */}
      <div
        className="pointer-events-none absolute -top-24 -end-24 h-72 w-72 rounded-full bg-blush/50 blur-3xl sm:h-96 sm:w-96"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 -start-32 h-64 w-64 rounded-full bg-powder-blue/40 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-dreamline relative grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        {/* Text column */}
        <div className="text-center lg:text-start">
          <Reveal>
            <p className="font-display text-sm font-medium uppercase tracking-[0.28em] text-terracotta-deep">
              {hero.eyebrow}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mx-auto mt-5 max-w-xl text-4xl font-medium leading-[1.12] tracking-tight text-ink sm:text-5xl lg:mx-0 lg:text-[3.4rem]">
              {hero.headline}
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-ink-soft sm:text-lg lg:mx-0 lg:max-w-lg">
              {hero.subtitle}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:items-start lg:justify-start">
              <CTAButton href="#final-cta" label={hero.ctaLabel} size="lg" />
              <a
                href={hero.secondaryCtaHref}
                className="text-base font-medium text-ink-soft underline-offset-4 transition-colors hover:text-terracotta-deep hover:underline"
              >
                {hero.secondaryCtaLabel}
              </a>
            </div>
          </Reveal>
        </div>

        {/* Image composition column */}
        <Reveal delay={120} className="relative mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none">
          <div className="relative mx-auto w-[78%] sm:w-[70%] lg:w-[82%]">
            <ArtworkFrame
              item={primary}
              priority
              rounded="rounded-[2rem]"
              className="shadow-2xl shadow-ink/15 ring-1 ring-black/5"
              sizes="(max-width: 1024px) 70vw, 38vw"
            />

            {/* Supporting product photo — overlapping, polaroid style */}
            <div
              className="drift-slow absolute -bottom-8 -start-10 w-[52%] rotate-[-6deg] sm:-bottom-10 sm:-start-12"
              style={{ "--drift-rotate": "-6deg" } as CSSProperties}
            >
              <div className="rounded-[1.25rem] bg-white p-1.5 shadow-xl shadow-ink/15 ring-1 ring-black/5">
                <ArtworkFrame
                  item={supporting}
                  rounded="rounded-[0.9rem]"
                  sizes="(max-width: 1024px) 40vw, 20vw"
                />
              </div>
            </div>

            {/* Floating accent illustration */}
            <div
              className="drift-slow absolute -top-6 -end-8 w-[34%] rotate-[7deg] sm:-top-8 sm:-end-10"
              style={{ "--drift-rotate": "7deg", animationDelay: "1.2s" } as CSSProperties}
            >
              <div className="overflow-hidden rounded-full bg-white p-1 shadow-lg shadow-ink/10 ring-1 ring-black/5">
                <ArtworkFrame item={accent} rounded="rounded-full" className="aspect-square" sizes="20vw" />
              </div>
            </div>

            {/* Micro note */}
            <div className="absolute -end-2 top-[38%] hidden rotate-[-4deg] items-center gap-1.5 rounded-full bg-white/85 px-3 py-1.5 text-[11px] font-medium text-ink-soft shadow-sm backdrop-blur-sm sm:flex">
              <SparkleIcon className="h-3.5 w-3.5 text-terracotta" />
              {hero.microNoteTop}
            </div>
          </div>
        </Reveal>
      </div>

      <a
        href="#creations"
        className="absolute bottom-2 start-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ink-soft/50 transition-colors hover:text-ink-soft sm:flex"
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
