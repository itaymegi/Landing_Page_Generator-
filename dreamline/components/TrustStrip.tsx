import { site } from "@/config/site";

export function TrustStrip() {
  const { trustStrip } = site;

  return (
    <section className="bg-ivory py-8 sm:py-10">
      <div className="container-dreamline">
        <ul className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-10 lg:gap-14">
          {trustStrip.items.map((item, index) => (
            <li key={item.label} className="flex items-center gap-4 text-sm font-medium text-ink-soft sm:text-base">
              {index > 0 ? (
                <span className="hidden h-1.5 w-1.5 rounded-full bg-terracotta/40 sm:inline" aria-hidden="true" />
              ) : null}
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
