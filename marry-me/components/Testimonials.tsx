"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { StarIcon } from "@/components/ui/icons";
import { site } from "@/config/site";

export function Testimonials() {
  const { testimonials } = site;

  return (
    <SectionShell id="testimonials" tone="warm-white" hairline>
      <div className="container-marry">
        <Reveal>
          <SectionTitle
            eyebrow={testimonials.eyebrow}
            title={testimonials.title}
            subtitle={testimonials.subtitle}
          />
        </Reveal>
      </div>

      <div className="mt-8 sm:mt-10">
        <div className="snap-x-mandatory hide-scrollbar flex gap-4 overflow-x-auto px-[max(1.375rem,env(safe-area-inset-left))] pb-2 pe-[max(1.375rem,env(safe-area-inset-right))] lg:container-marry lg:justify-center lg:overflow-visible lg:px-0">
          {testimonials.items.map((item, index) => (
            <article
              key={item.name}
              className="snap-center w-[82vw] max-w-[20rem] shrink-0 overflow-hidden rounded-[1.35rem] border border-gold/20 bg-ivory shadow-[0_16px_48px_rgba(42,38,34,0.06)] transition-transform duration-500 lg:w-auto lg:max-w-none lg:flex-1 lg:hover:-translate-y-1"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 82vw, 30vw"
                  quality={90}
                  className="object-cover"
                />
              </div>
              <div className="p-5 sm:p-6">
                <div className="flex gap-0.5 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="h-3.5 w-3.5" />
                  ))}
                </div>
                <blockquote className="mt-3 font-serif text-lg font-light leading-[1.55] text-charcoal">
                  {item.quote}
                </blockquote>
                <div className="mt-5 border-t border-line/80 pt-4">
                  <p className="text-sm text-charcoal">{item.name}</p>
                  <p className="mt-0.5 text-xs tracking-[0.06em] text-ink-faint">
                    {item.eventType}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <p className="mx-auto mt-8 max-w-lg px-6 text-center text-[0.7rem] tracking-[0.1em] text-ink-faint">
        {testimonials.googlePlaceholder}
      </p>
    </SectionShell>
  );
}
