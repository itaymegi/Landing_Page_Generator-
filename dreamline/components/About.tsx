import { site } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  const { about, trustStrip } = site;
  const [lead, ...rest] = about.paragraphs;

  return (
    <section
      id="about"
      className="section-bridge section-overlap-next section-py-tight bg-ivory"
    >
      <div className="container-dreamline">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-[1.85rem] font-medium leading-snug tracking-wide text-ink sm:text-4xl lg:text-[2.75rem]">
              {about.title}
            </h2>
            {lead ? (
              <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-ink-soft sm:mt-5 sm:text-lg">
                {lead}
              </p>
            ) : null}
            {rest.map((paragraph) => (
              <p
                key={paragraph.slice(0, 20)}
                className="mx-auto mt-4 hidden max-w-lg text-base leading-relaxed text-ink-soft sm:mt-5 sm:block sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
            <p className="mt-5 font-display text-2xl italic text-ink/80 sm:mt-7">{about.signatureLabel}</p>

            <ul className="mx-auto mt-6 flex max-w-md flex-col items-center gap-2 sm:mt-8 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-6 sm:gap-y-2">
              {trustStrip.items.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-2 text-sm font-medium text-ink-soft"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta/50" aria-hidden="true" />
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
