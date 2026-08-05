"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { ClinicSection } from "@/components/ui/ClinicSection";
import { ResultImage } from "@/components/ui/ResultImage";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowIcon } from "@/components/ui/icons";
import {
  beforeAfterSection,
  resultItems,
  type ResultItem,
  type ResultPair,
} from "@/config/media";
import { treatmentHref } from "@/config/treatments";

const ALL = "all";

function ResultCaption({
  treatment,
  interval,
  summary,
  slug,
}: {
  treatment: string;
  interval: string;
  summary: string;
  slug: string;
}) {
  return (
    <>
      <div className="mt-5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1.5">
        <h3 className="font-serif text-lg font-light text-charcoal">
          {treatment}
        </h3>
        <span className="text-[0.75rem] tracking-[0.1em] text-gold-deep">
          {interval}
        </span>
      </div>

      <p className="mt-2 text-[0.9375rem] leading-[1.85] text-ink-muted">
        {summary}
      </p>

      <Link
        href={treatmentHref(slug)}
        className="mt-3 inline-flex min-h-11 items-center gap-2 text-[0.75rem] tracking-[0.12em] text-gold-deep transition-colors duration-400 hover:text-charcoal"
      >
        {beforeAfterSection.treatmentLinkLabel}
        <ArrowIcon className="h-3 w-3 transition-transform duration-500 group-hover:-translate-x-1" />
      </Link>
    </>
  );
}

/** The one case shot as two separate frames, so it can be compared by dragging. */
function FeaturedCase({ item }: { item: ResultPair }) {
  return (
    <Reveal blur>
      <div className="group grid items-center gap-8 rounded-[24px] border border-gold/20 bg-marble/70 p-5 sm:p-7 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:gap-12 lg:p-9">
        <BeforeAfterSlider
          before={item.before}
          beforeAlt={item.beforeAlt}
          after={item.after}
          afterAlt={item.afterAlt}
          beforeLabel={beforeAfterSection.beforeLabel}
          afterLabel={beforeAfterSection.afterLabel}
          ariaLabel={`${beforeAfterSection.sliderLabel} — ${item.treatment}`}
          sizes="(max-width: 1023px) 88vw, 40vw"
        />

        <div>
          <p className="eyebrow">{beforeAfterSection.featuredEyebrow}</p>

          <h3 className="mt-4 font-serif text-[clamp(1.5rem,3.4vw,2.25rem)] font-light leading-[1.25] text-charcoal">
            {item.treatment}
          </h3>

          <p className="mt-5 text-base leading-[1.95] text-ink-muted">
            {item.summary}
          </p>

          <dl className="mt-7 flex flex-wrap gap-x-10 gap-y-4 border-t border-line pt-6">
            <div>
              <dt className="text-[0.6875rem] tracking-[0.16em] text-ink-faint">
                {beforeAfterSection.intervalLabel}
              </dt>
              <dd className="mt-1.5 text-[0.9375rem] text-charcoal">
                {item.interval}
              </dd>
            </div>
            <div>
              <dt className="text-[0.6875rem] tracking-[0.16em] text-ink-faint">
                {beforeAfterSection.categoryLabel}
              </dt>
              <dd className="mt-1.5 text-[0.9375rem] text-charcoal">
                {item.categoryLabel}
              </dd>
            </div>
          </dl>

          <Link
            href={treatmentHref(item.categorySlug)}
            className="mt-6 inline-flex min-h-11 items-center gap-2 text-[0.8125rem] tracking-[0.1em] text-gold-deep transition-colors duration-400 hover:text-charcoal"
          >
            {beforeAfterSection.treatmentLinkLabel}
            <ArrowIcon className="h-3 w-3" />
          </Link>        </div>
      </div>
    </Reveal>
  );
}

function ResultCard({ item, delay }: { item: ResultItem; delay: number }) {
  return (
    <Reveal delay={delay} className="results-item">
      <div className="group">
        {item.kind === "pair" ? (
          <BeforeAfterSlider
            before={item.before}
            beforeAlt={item.beforeAlt}
            after={item.after}
            afterAlt={item.afterAlt}
            beforeLabel={beforeAfterSection.beforeLabel}
            afterLabel={beforeAfterSection.afterLabel}
            ariaLabel={`${beforeAfterSection.sliderLabel} — ${item.treatment}`}
            sizes="(max-width: 639px) 92vw, (max-width: 1023px) 44vw, 30vw"
          />
        ) : (
          <ResultImage
            src={item.src}
            alt={item.alt}
            width={item.width}
            height={item.height}
            sizes="(max-width: 639px) 92vw, (max-width: 1023px) 44vw, 30vw"
          />
        )}

        <ResultCaption
          treatment={item.treatment}
          interval={item.interval}
          summary={item.summary}
          slug={item.categorySlug}
        />
      </div>
    </Reveal>
  );
}

export function BeforeAfter() {
  const [active, setActive] = useState(ALL);

  const filters = useMemo(() => {
    const seen = new Map<string, string>();
    resultItems.forEach((item) => {
      if (!seen.has(item.categoryId)) {
        seen.set(item.categoryId, item.categoryLabel);
      }
    });
    return Array.from(seen, ([id, label]) => ({ id, label }));
  }, []);

  const visible =
    active === ALL
      ? resultItems
      : resultItems.filter((item) => item.categoryId === active);

  const featured = visible.find(
    (item): item is ResultPair => item.kind === "pair",
  );
  const rest = visible.filter((item) => item !== featured);

  return (
    <ClinicSection id="results" tone="sand">
      <div className="container-agam">
        <SectionHeader
          eyebrow={beforeAfterSection.eyebrow}
          title={beforeAfterSection.title}
          subtitle={beforeAfterSection.subtitle}
        />

        <Reveal delay={120}>
          <div
            role="group"
            aria-label={beforeAfterSection.filterLabel}
            className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-2.5"
          >
            {[{ id: ALL, label: beforeAfterSection.allLabel }, ...filters].map(
              (filter) => {
                const isActive = active === filter.id;

                return (
                  <button
                    key={filter.id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActive(filter.id)}
                    className={`inline-flex min-h-11 items-center rounded-full border px-5 text-[0.8125rem] tracking-[0.06em] transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isActive
                        ? "border-charcoal bg-charcoal text-ivory"
                        : "border-gold/30 bg-marble/70 text-ink-muted hover:border-gold hover:text-charcoal"
                    }`}
                  >
                    {filter.label}
                  </button>
                );
              },
            )}
          </div>
        </Reveal>

        {featured ? (
          <div className="mt-12 lg:mt-16">
            <FeaturedCase item={featured} />
          </div>
        ) : null}

        {rest.length > 0 ? (
          <div className="results-grid mt-12 lg:mt-16">
            {rest.map((item, index) => (
              <ResultCard key={item.id} item={item} delay={(index % 3) * 80} />
            ))}
          </div>
        ) : null}

        {!featured && rest.length === 0 ? (
          <p className="mt-14 text-center text-[0.9375rem] text-ink-muted">
            {beforeAfterSection.emptyLabel}
          </p>
        ) : null}

        <Reveal delay={120}>
          <p className="mx-auto mt-10 max-w-2xl border-t border-line pt-6 text-center text-[0.8125rem] leading-[1.85] text-ink-faint">
            {beforeAfterSection.disclaimer}
          </p>
        </Reveal>
      </div>
    </ClinicSection>
  );
}
