import { site, creationItem } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { ArtworkFrame } from "@/components/ui/ArtworkFrame";

export function KeepsakeStory() {
  const { keepsakeStory } = site;
  const primary = creationItem(keepsakeStory.primaryItemId);
  const detail = creationItem(keepsakeStory.detailItemId);

  return (
    <section id="keepsake-story" className="section-py bg-ivory">
      <div className="container-dreamline grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="order-2 lg:order-1">
          <p className="font-display text-sm font-medium uppercase tracking-[0.18em] text-terracotta-deep">
            {keepsakeStory.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-medium leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
            {keepsakeStory.title}
          </h2>
          {keepsakeStory.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 20)} className="mt-5 max-w-lg text-base leading-relaxed text-ink-soft sm:text-lg">
              {paragraph}
            </p>
          ))}
          <div className="mt-8">
            <CTAButton href={keepsakeStory.ctaHref} label={keepsakeStory.ctaLabel} variant="outline" />
          </div>
        </Reveal>

        <Reveal delay={120} className="relative order-1 lg:order-2">
          <div className="relative">
            <ArtworkFrame item={primary} rounded="rounded-[2rem]" className="shadow-xl shadow-ink/10" />
            <div className="absolute -bottom-7 -start-7 w-[42%] rounded-[1.25rem] bg-white p-1.5 shadow-lg shadow-ink/10 ring-1 ring-black/5 sm:-bottom-9 sm:-start-9">
              <ArtworkFrame item={detail} rounded="rounded-[0.85rem]" sizes="30vw" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
