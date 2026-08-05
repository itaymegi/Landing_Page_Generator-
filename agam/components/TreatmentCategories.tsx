import Link from "next/link";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { ClinicSection } from "@/components/ui/ClinicSection";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowIcon } from "@/components/ui/icons";
import { beforeAfterSection, getHeroPair } from "@/config/media";
import {
  categoriesSection,
  treatmentCategories,
  treatmentHref,
} from "@/config/treatments";

const CARD_SIZES = "(max-width: 640px) 46vw, (max-width: 1024px) 44vw, 23vw";

export function TreatmentCategories() {
  return (
    <ClinicSection
      id="categories"
      tone="marble"
      editorialWord={categoriesSection.editorialWord}
    >
      <div className="container-agam">
        <SectionHeader
          eyebrow={categoriesSection.eyebrow}
          title={categoriesSection.title}
          subtitle={categoriesSection.subtitle}
        />

        <p className="mx-auto mt-5 max-w-xl text-center text-[0.8125rem] tracking-[0.04em] text-ink-faint">
          {categoriesSection.dragHint}
        </p>

        <ul className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-5 lg:mt-14 lg:grid-cols-4">
          {treatmentCategories.map((category, index) => {
            const pair = getHeroPair(category.id);

            return (
              <Reveal
                key={category.id}
                delay={(index % 4) * 70}
                className="h-full"
              >
                <li className="h-full">
                  <article className="group flex h-full flex-col overflow-hidden rounded-[16px] border border-gold/15 bg-marble transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-gold/45 hover:shadow-[0_26px_58px_rgba(31,30,28,0.11)]">
                    <div className="relative">
                      {pair ? (
                        <BeforeAfterSlider
                          before={pair.before}
                          beforeAlt={pair.beforeAlt}
                          after={pair.after}
                          afterAlt={pair.afterAlt}
                          beforeLabel={beforeAfterSection.beforeLabel}
                          afterLabel={beforeAfterSection.afterLabel}
                          ariaLabel={`${beforeAfterSection.sliderLabel} — ${category.title}`}
                          sizes={CARD_SIZES}
                          rounded="rounded-none"
                          compact
                        />
                      ) : (
                        <MediaFrame
                          src={category.image}
                          alt={category.imageAlt}
                          aspect="portrait"
                          sizes={CARD_SIZES}
                          rounded="rounded-none"
                          overlay="soft"
                        />
                      )}
                    </div>

                    <Link
                      href={treatmentHref(category.slug)}
                      className="flex flex-1 flex-col p-4 transition-colors duration-500 sm:p-5"
                    >
                      <span className="font-serif-en text-[0.5rem] tracking-[0.26em] text-ink-faint">
                        {category.titleEn}
                      </span>

                      <h3 className="mt-2 font-serif text-[1.125rem] font-light leading-snug text-charcoal sm:text-xl">
                        {category.title}
                      </h3>

                      <p className="mt-2 hidden text-[0.8125rem] leading-[1.75] text-ink-muted sm:block">
                        {category.description}
                      </p>

                      <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[0.6875rem] tracking-[0.12em] text-gold-deep">
                        {categoriesSection.ctaLabel}
                        <ArrowIcon className="h-3 w-3 transition-transform duration-500 group-hover:-translate-x-1" />
                      </span>
                    </Link>
                  </article>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </ClinicSection>
  );
}
