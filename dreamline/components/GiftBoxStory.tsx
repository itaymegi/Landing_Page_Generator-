import { site, creationItem } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { ArtworkFrame } from "@/components/ui/ArtworkFrame";

export function GiftBoxStory() {
  const { giftBoxStory } = site;
  const primary = creationItem(giftBoxStory.primaryItemId);
  const detail = creationItem(giftBoxStory.detailItemId);

  return (
    <section id="gift-box-story" className="section-py overflow-x-clip bg-peach/20">
      <div className="container-dreamline grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative order-1 overflow-hidden pb-10 pe-6 sm:pb-12 sm:pe-10">
          <div className="relative">
            <ArtworkFrame item={primary} rounded="rounded-[2rem]" className="shadow-xl shadow-ink/10" />
            <div className="absolute -bottom-7 -end-7 w-[42%] rounded-[1.25rem] bg-white p-1.5 shadow-lg shadow-ink/10 ring-1 ring-black/5 sm:-bottom-9 sm:-end-9">
              <ArtworkFrame item={detail} rounded="rounded-[0.85rem]" sizes="30vw" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="order-2">
          <p className="font-display text-sm font-medium uppercase tracking-[0.18em] text-terracotta-deep">
            {giftBoxStory.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-medium leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
            {giftBoxStory.title}
          </h2>
          {giftBoxStory.paragraphs.map((paragraph, index) => (
            <p
              key={paragraph.slice(0, 20)}
              className={`mt-5 max-w-lg text-base leading-relaxed text-ink-soft sm:text-lg ${
                index > 0 ? "hidden sm:block" : ""
              }`}
            >
              {paragraph}
            </p>
          ))}
          <div className="mt-8">
            <CTAButton href={giftBoxStory.ctaHref} label={giftBoxStory.ctaLabel} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
