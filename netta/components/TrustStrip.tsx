import { site } from "@/config/site";

export function TrustStrip() {
  const { trustStrip } = site;

  return (
    <section className="bg-parchment py-10 sm:py-12">
      <div className="container-rubina">
        {trustStrip.title ? (
          <p className="mb-6 text-center font-serif text-xl font-light tracking-wide text-brown/80 sm:mb-8 sm:text-2xl">
            {trustStrip.title}
          </p>
        ) : null}
        <ul className="flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-10 lg:gap-14">
          {trustStrip.items.map((item, index) => (
            <li
              key={item.label}
              className="flex items-center gap-5 text-base font-light tracking-wide text-brown/70 sm:text-lg"
            >
              {index > 0 ? (
                <span
                  className="hidden text-gold/50 sm:inline"
                  aria-hidden="true"
                >
                  ◆
                </span>
              ) : null}
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
