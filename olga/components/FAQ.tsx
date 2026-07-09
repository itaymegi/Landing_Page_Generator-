"use client";

import { useState } from "react";
import { site } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";
import { PremiumSection } from "@/components/ui/PremiumSection";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function FAQ() {
  const { faq } = site;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <PremiumSection id="faq" tone="white">
      <div className="container-olga mx-auto max-w-3xl">
        <SectionHeader title={faq.title} />

        <div className="mt-10 divide-y divide-border sm:mt-12">
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            return (
              <Reveal key={item.question} delay={index * 50}>
                <div className="py-5">
                  <button
                    type="button"
                    id={`faq-trigger-${index}`}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-start justify-between gap-4 text-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    <span className="font-serif text-lg text-text sm:text-xl">
                      {item.question}
                    </span>
                    <span className="mt-1 shrink-0 text-accent-deep" aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen ? (
                    <p
                      id={panelId}
                      role="region"
                      aria-labelledby={`faq-trigger-${index}`}
                      className="mt-3 text-base leading-[1.75] text-text-muted"
                    >
                      {item.answer}
                    </p>
                  ) : null}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </PremiumSection>
  );
}
