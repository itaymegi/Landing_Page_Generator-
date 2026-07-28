import { site, creationItem } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/Section";
import { ArtworkFrame } from "@/components/ui/ArtworkFrame";

export function IllustrationStory() {
  const { illustrationStory } = site;
  const colored = illustrationStory.coloredItemIds.map((id) => creationItem(id));
  const sketch = illustrationStory.sketchItemIds.map((id) => creationItem(id));

  return (
    <section id="illustration-story" className="section-py bg-blush/25">
      <div className="container-dreamline">
        <Reveal>
          <SectionHeading
            eyebrow={illustrationStory.eyebrow}
            title={illustrationStory.title}
            subtitle={illustrationStory.subtitle}
            align="center"
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 flex items-center gap-3 sm:mt-16">
            <span className="rule" aria-hidden="true" />
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-ink-soft">
              {illustrationStory.coloredLabel}
            </p>
          </div>
          <div className="mt-5 -mx-5 flex gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-5 sm:overflow-visible sm:px-0 lg:grid-cols-5">
            {colored.map((item) => (
              <div key={item.id} className="w-[62%] shrink-0 sm:w-auto">
                <ArtworkFrame item={item} sizes="(max-width: 640px) 62vw, (max-width: 1024px) 32vw, 19vw" />
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={180}>
          <div className="mt-12 flex items-center gap-3 sm:mt-14">
            <span className="rule bg-ink-soft/40" aria-hidden="true" />
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-ink-soft">
              {illustrationStory.sketchLabel}
            </p>
          </div>
          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {sketch.map((item) => (
              <ArtworkFrame key={item.id} item={item} sizes="(max-width: 640px) 90vw, 45vw" />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
