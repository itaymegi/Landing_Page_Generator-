import Link from "next/link";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { CTAButton } from "@/components/ui/CTAButton";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowIcon, WhatsAppIcon } from "@/components/ui/icons";
import { beforeAfterSection, getHeroPair } from "@/config/media";
import { consultationHref, treatmentInquiryHref } from "@/config/site";
import type { TreatmentCategory } from "@/config/treatments";

type TreatmentHeroProps = {
  treatment: TreatmentCategory;
};

export function TreatmentHero({ treatment }: TreatmentHeroProps) {
  const heroPair = getHeroPair(treatment.id);

  return (
    <section
      id="hero"
      className="section-tone-ivory relative overflow-hidden pb-16 pt-[calc(var(--header-height)+2.5rem)] sm:pb-24 sm:pt-[calc(var(--header-height)+4rem)] lg:pb-32 lg:pt-[calc(var(--header-height)+5.5rem)]"
    >
      <span
        className="pointer-events-none absolute -start-24 top-0 h-[28rem] w-[28rem] rounded-full bg-gold/[0.045] blur-3xl"
        aria-hidden="true"
      />

      <div className="container-agam relative">
        <Reveal>
          <nav aria-label="מסלול ניווט" className="mb-5 sm:mb-8">
            <ol className="flex flex-wrap items-center gap-x-2.5 text-[0.75rem] tracking-[0.08em] text-ink-faint">
              <li>
                <Link
                  href="/"
                  className="inline-flex min-h-11 items-center transition-colors duration-400 hover:text-gold-deep"
                >
                  בית
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href="/#categories"
                  className="inline-flex min-h-11 items-center transition-colors duration-400 hover:text-gold-deep"
                >
                  טיפולים
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li
                aria-current="page"
                className="inline-flex min-h-11 items-center text-ink-muted"
              >
                {treatment.title}
              </li>
            </ol>
          </nav>
        </Reveal>

        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow">{treatment.titleEn}</p>
            </Reveal>

            <Reveal delay={80} blur>
              <h1 className="mt-5 font-serif text-[clamp(2.125rem,6vw,4rem)] font-light leading-[1.16] text-charcoal">
                {treatment.tagline}
              </h1>
            </Reveal>

            <Reveal delay={140}>
              <span className="rule-gold mt-7" aria-hidden="true" />
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-7 max-w-xl text-base leading-[2] text-ink-muted sm:text-[1.0625rem]">
                {treatment.longDescription[0]}
              </p>
            </Reveal>

            <Reveal delay={280}>
              <dl className="mt-9 flex flex-wrap gap-x-10 gap-y-5 border-t border-line pt-7">
                <div>
                  <dt className="text-[0.6875rem] tracking-[0.16em] text-ink-faint">
                    משך הטיפול
                  </dt>
                  <dd className="mt-1.5 font-serif text-lg font-light text-charcoal">
                    {treatment.duration}
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.6875rem] tracking-[0.16em] text-ink-faint">
                    משך התוצאה
                  </dt>
                  <dd className="mt-1.5 font-serif text-lg font-light text-charcoal">
                    {treatment.longevity}
                  </dd>
                </div>
              </dl>
            </Reveal>

            <Reveal delay={340}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <CTAButton href={consultationHref()} external>
                  קביעת פגישת ייעוץ
                </CTAButton>
                <CTAButton
                  href={treatmentInquiryHref(treatment.tagline)}
                  variant="outline"
                  external
                  icon={<WhatsAppIcon className="h-4 w-4 text-gold-deep" />}
                >
                  שאלה על הטיפול
                </CTAButton>
              </div>
            </Reveal>
          </div>

          <Reveal delay={160} blur>
            <figure className="relative">
              <span
                className="hairline-gold pointer-events-none absolute -bottom-5 -start-5 end-8 top-6 rounded-[18px] sm:-bottom-7 sm:-start-7"
                aria-hidden="true"
              />

              <div className="relative">
                {heroPair ? (
                  <BeforeAfterSlider
                    before={heroPair.before}
                    beforeAlt={heroPair.beforeAlt}
                    after={heroPair.after}
                    afterAlt={heroPair.afterAlt}
                    beforeLabel={beforeAfterSection.beforeLabel}
                    afterLabel={beforeAfterSection.afterLabel}
                    ariaLabel={`${beforeAfterSection.sliderLabel} — ${treatment.tagline}`}
                    sizes="(max-width: 1024px) 92vw, 42vw"
                    priority
                  />
                ) : (
                  <MediaFrame
                    src={treatment.image}
                    alt={treatment.imageAlt}
                    aspect="portrait"
                    sizes="(max-width: 1024px) 92vw, 42vw"
                    priority
                  />
                )}
              </div>

              {heroPair ? (
                <figcaption className="relative mt-4 text-center text-[0.75rem] tracking-[0.1em] text-ink-faint">
                  {beforeAfterSection.sliderHint}
                </figcaption>
              ) : null}
            </figure>
          </Reveal>
        </div>
      </div>

      <div className="container-agam relative mt-16 sm:mt-24">
        <Reveal>
          <Link
            href="/#results"
            className="group inline-flex min-h-11 items-center gap-2.5 text-[0.8125rem] tracking-[0.1em] text-gold-deep transition-colors duration-400 hover:text-charcoal"
          >
            לכל התוצאות בקליניקה
            <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-500 group-hover:-translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
