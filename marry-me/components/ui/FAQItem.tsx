"use client";

import { ChevronIcon } from "@/components/ui/icons";

type FAQItemProps = {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
};

export function FAQItem({ question, answer, open, onToggle }: FAQItemProps) {
  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-4 text-start sm:py-5"
      >
        <span className="font-serif text-base font-light text-charcoal sm:text-lg">
          {question}
        </span>
        <span
          className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold-deep transition-transform duration-400 ${
            open ? "rotate-180" : ""
          }`}
        >
          <ChevronIcon />
        </span>
      </button>
      <div className="accordion-panel" data-open={open ? "true" : "false"}>
        <div>
          <p className="pb-4 text-sm leading-[1.8] text-ink-muted sm:pb-5">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
