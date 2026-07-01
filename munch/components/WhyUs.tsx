import { site } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";

const icons = [
  // handmade / whisk
  "M12 3v4m0 0a4 4 0 00-4 4c0 2.5 1.5 5 4 9 2.5-4 4-6.5 4-9a4 4 0 00-4-4z",
  // designed / sparkle
  "M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z",
  // gift
  "M4 9h16v11H4V9zm0 0V7a2 2 0 012-2h12a2 2 0 012 2v2M12 5v15",
  // heart / personal
  "M12 20s-7-4.5-7-9.5A3.5 3.5 0 0112 7a3.5 3.5 0 017 3.5C19 15.5 12 20 12 20z",
];

export function WhyUs() {
  const { whyUs } = site;

  return (
    <section className="section-py bg-cream">
      <div className="container-munch">
        <Reveal className="text-center">
          <h2 className="mx-auto max-w-2xl font-serif text-3xl font-light tracking-wide text-brown sm:text-4xl">
            {whyUs.title}
          </h2>
          <span className="rule-gold rule-gold-center mt-6" aria-hidden="true" />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <div className="flex h-full flex-col items-center rounded-xl border border-border bg-white px-6 py-9 text-center shadow-sm shadow-brown/5 transition-shadow duration-300 hover:shadow-md">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/12 text-gold-deep">
                  <svg
                    className="h-7 w-7"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={icons[index % icons.length]}
                    />
                  </svg>
                </span>
                <p className="mt-5 text-base font-medium leading-relaxed text-brown sm:text-lg">
                  {item.title}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
