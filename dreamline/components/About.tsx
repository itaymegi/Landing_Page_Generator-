import { site } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";

function PortraitPlaceholder() {
  return (
    <div className="placeholder-weave relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-gradient-to-br from-lavender via-blush/55 to-butter/45 shadow-lg shadow-ink/10">
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          className="h-[38%] w-[38%] text-[#9484CC] opacity-80"
          viewBox="0 0 100 125"
          fill="currentColor"
          aria-hidden="true"
        >
          <circle cx="50" cy="45" r="22" />
          <path d="M50 72c-24 0-40 14-40 34v19h80v-19c0-20-16-34-40-34z" />
        </svg>
      </div>
      <span
        className="absolute end-5 top-5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/70 font-display text-sm font-medium text-ink backdrop-blur-sm"
        aria-hidden="true"
      >
        {site.brand.monogram}
      </span>
      <span className="absolute bottom-5 start-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-white/75 px-3 py-1.5 text-[11px] font-medium tracking-wide text-ink-soft backdrop-blur-sm">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-terracotta" aria-hidden="true" />
        התמונה בדרך
      </span>
    </div>
  );
}

export function About() {
  const { about } = site;

  return (
    <section id="about" className="section-py bg-ivory">
      <div className="container-dreamline grid items-center gap-12 lg:grid-cols-[0.75fr_1fr] lg:gap-20">
        <Reveal>
          <div className="mx-auto w-full max-w-xs lg:max-w-none">
            <PortraitPlaceholder />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="font-display text-sm font-medium uppercase tracking-[0.18em] text-terracotta-deep">
            {about.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-medium leading-tight tracking-tight text-ink sm:text-4xl">
            {about.title}
          </h2>
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 20)} className="mt-5 max-w-lg text-base leading-relaxed text-ink-soft sm:text-lg">
              {paragraph}
            </p>
          ))}
          <p className="mt-7 font-display text-2xl italic text-ink/80">{about.signatureLabel}</p>
        </Reveal>
      </div>
    </section>
  );
}
