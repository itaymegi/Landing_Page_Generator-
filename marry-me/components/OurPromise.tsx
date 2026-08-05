import Image from "next/image";
import type { ComponentType } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";
import {
  FeatherIcon,
  HeartIcon,
  SparkIcon,
} from "@/components/ui/icons";
import { site } from "@/config/site";

const cardIcons: Record<
  (typeof site.promise.cards)[number]["icon"],
  ComponentType<{ className?: string }>
> = {
  heart: HeartIcon,
  spark: SparkIcon,
  guide: FeatherIcon,
};

export function OurPromise() {
  const { promise } = site;

  return (
    <SectionShell id="promise" tone="ivory" hairline>
      <div className="container-marry">
        <Reveal blur>
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">{promise.eyebrow}</p>
            <h2 className="mt-4 font-serif text-[clamp(1.85rem,5.5vw,3.25rem)] font-light leading-[1.2] text-charcoal">
              {promise.title.split("\n").map((line, i) => (
                <span key={line} className={i > 0 ? "mt-1 block" : "block"}>
                  {line}
                </span>
              ))}
            </h2>
            <span className="rule-gold mx-auto mt-5" aria-hidden="true" />
          </div>
        </Reveal>

        <Reveal delay={80} className="mt-8 sm:mt-10">
          <div className="relative mx-auto aspect-[4/5] max-w-3xl overflow-hidden rounded-[1.35rem] bg-sand sm:aspect-[16/10]">
            <Image
              src={promise.image}
              alt={promise.imageAlt}
              fill
              sizes="(max-width: 768px) 92vw, 720px"
              quality={90}
              className="object-cover"
              priority
            />
          </div>
        </Reveal>

        <div className="mx-auto mt-8 max-w-3xl text-center sm:mt-10">
          <Reveal delay={100}>
            <p className="eyebrow">{promise.philosophyEyebrow}</p>
            <h3 className="mt-3 font-serif text-[clamp(1.55rem,4.6vw,2.55rem)] font-light leading-[1.25] text-charcoal">
              {promise.philosophyTitle.split("\n").map((line, i) => (
                <span key={line} className={i > 0 ? "mt-1 block" : "block"}>
                  {line}
                </span>
              ))}
            </h3>
          </Reveal>

          <Reveal delay={140}>
            <div className="mx-auto mt-4 max-w-xl space-y-3 text-[0.95rem] leading-[1.85] text-ink-muted sm:mt-5">
              {promise.philosophyLead.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>

        <ul className="mt-8 grid gap-3 sm:mt-9 sm:gap-4 lg:grid-cols-3 lg:gap-5">
          {promise.cards.map((card, index) => {
            const Icon = cardIcons[card.icon];

            return (
              <Reveal key={card.title} delay={160 + index * 80} className="h-full">
                <li className="h-full">
                  <article className="group flex h-full flex-col rounded-[1.25rem] border border-gold/20 bg-warm-white/90 px-5 py-6 text-start shadow-[0_14px_36px_rgba(42,38,34,0.05)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_22px_48px_rgba(42,38,34,0.09)] sm:px-6 sm:py-7">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/25 bg-champagne/60 text-gold-deep transition-colors duration-500 group-hover:border-gold/45 group-hover:bg-champagne">
                      <Icon className="h-[1.15rem] w-[1.15rem]" />
                    </span>

                    <h4 className="mt-5 font-serif text-[1.2rem] font-light leading-snug text-charcoal sm:text-[1.3rem]">
                      {card.title}
                    </h4>

                    <p className="mt-3 text-[0.875rem] leading-[1.8] text-ink-muted">
                      {card.text}
                    </p>
                  </article>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </SectionShell>
  );
}
