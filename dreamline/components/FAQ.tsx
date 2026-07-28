import { site } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";

function FaqToggleIcon() {
  return (
    <svg
      className="h-5 w-5 shrink-0 text-terracotta transition-transform duration-300 group-open:rotate-45"
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
    <section id="faq" className="section-py-tight bg-ivory">
      <div className="container-dreamline mx-auto max-w-2xl">
        <Reveal>
          <h2 className="text-center text-3xl font-medium tracking-tight text-ink sm:text-4xl">{faq.title}</h2>
          <p className="mt-3 text-center text-base text-ink-soft">{faq.subtitle}</p>
        </Reveal>

        <div className="mt-10 space-y-1 sm:mt-12">
          {faq.items.map((item, index) => (
            <Reveal key={item.question} delay={index * 50}>
              <details className="group border-b border-ink/10 py-5">
                <summary className="cursor-pointer list-none text-base font-medium text-ink transition-colors marker:content-none hover:text-terracotta-deep sm:text-lg [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {item.question}
                    <FaqToggleIcon />
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft sm:text-base">{item.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
