"use client";

import { useState } from "react";
import { FAQItem } from "@/components/ui/FAQItem";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { site } from "@/config/site";

export function FAQ() {
  const { faq } = site;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionShell id="faq" tone="champagne" hairline>
      <div className="container-marry">
        <Reveal>
          <SectionTitle eyebrow={faq.eyebrow} title={faq.title} />
        </Reveal>

        <Reveal delay={80}>
          <div className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 sm:mt-10">
            {faq.items.map((item, index) => (
              <div
                key={item.question}
                className="overflow-hidden rounded-[1.15rem] border border-gold/20 bg-warm-white/80 px-4 sm:px-5"
              >
                <FAQItem
                  question={item.question}
                  answer={item.answer}
                  open={openIndex === index}
                  onToggle={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
