"use client";

import { useId, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

export type AccordionItem = {
  question: string;
  answer: string;
};

type AccordionProps = {
  items: AccordionItem[];
  /** Index open on first render; pass null to start fully collapsed. */
  defaultOpen?: number | null;
  className?: string;
};

export function Accordion({
  items,
  defaultOpen = 0,
  className = "",
}: AccordionProps) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);

  return (
    <div className={className}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <Reveal key={item.question} delay={index * 50}>
            <div className="border-b border-line">
              <h3>
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 py-4 text-start sm:gap-5 sm:py-5"
                >
                  <span
                    className={`font-serif text-[1.0625rem] font-light leading-[1.45] transition-colors duration-400 sm:text-lg sm:leading-[1.6] ${
                      isOpen ? "text-charcoal" : "text-ink"
                    }`}
                  >
                    {item.question}
                  </span>
                  <span
                    className="relative inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold/25 text-gold-deep"
                    aria-hidden="true"
                  >
                    <span className="absolute block h-px w-2.5 bg-current" />
                    <span
                      className={`absolute block h-2.5 w-px bg-current transition-transform duration-400 ${
                        isOpen ? "scale-y-0" : "scale-y-100"
                      }`}
                    />
                  </span>
                </button>
              </h3>

              <div className="accordion-panel" data-open={isOpen}>
                <div>
                  <p
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="mb-4 rounded-xl bg-cream/60 px-4 py-3 text-[0.9375rem] leading-[1.6] text-ink-muted sm:mb-5 sm:pe-10"
                  >
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
