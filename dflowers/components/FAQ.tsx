"use client";

import { useState } from "react";
import { site } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";

export function FAQ() {
  const { faq } = site;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-py bg-card">
      <div className="container-dflowers mx-auto max-w-3xl">
        <Reveal>
          <h2 className="font-serif text-3xl font-light tracking-wide text-text sm:text-4xl">
            {faq.title}
          </h2>
          <span className="rule-gold mt-5" aria-hidden="true" />
        </Reveal>

        <div className="mt-10 divide-y divide-border sm:mt-12">
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={item.question} delay={index * 50}>
                <div className="py-5">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-start justify-between gap-4 text-start"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-lg text-text sm:text-xl">
                      {item.question}
                    </span>
                    <span className="mt-1 shrink-0 text-accent-deep">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen ? (
                    <p className="mt-3 text-base leading-relaxed text-text-muted">
                      {item.answer}
                    </p>
                  ) : null}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
