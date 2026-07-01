import { site } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";

function FaqToggleIcon() {
  return (
    <svg
      className="h-5 w-5 shrink-0 text-accent transition-transform duration-300 group-open:rotate-45"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <path strokeLinecap="round" d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function FAQ() {
  const { faq } = site;

  return (
    <section id="faq" className="section-py bg-background">
      <div className="container-shani mx-auto max-w-2xl">
        <Reveal>
          <h2 className="font-serif text-3xl font-light tracking-wide text-brown sm:text-4xl">
            {faq.title}
          </h2>
          <span className="rule-accent mt-5" aria-hidden="true" />
        </Reveal>

        <div className="mt-12 space-y-1">
          {faq.items.map((item, index) => (
            <Reveal key={item.question} delay={index * 60}>
              <details className="group border-b border-brown/10 py-5">
                <summary className="cursor-pointer list-none text-lg font-medium text-brown transition-colors marker:content-none hover:text-accent-deep sm:text-xl [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {item.question}
                    <FaqToggleIcon />
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-text/70 sm:text-base">
                  {item.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
