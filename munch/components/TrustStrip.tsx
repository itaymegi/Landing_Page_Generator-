import { site } from "@/config/site";
import type { TrustItem } from "@/config/site";

const iconPaths: Record<TrustItem["icon"], string> = {
  // hand / artisan whisk
  hand: "M12 3v4m0 0a4 4 0 00-4 4c0 2.5 1.5 5 4 9 2.5-4 4-6.5 4-9a4 4 0 00-4-4z",
  // gift box
  gift: "M4 9h16v11H4V9zm0 0V7a2 2 0 012-2h12a2 2 0 012 2v2M12 5v15",
  // sparkle
  sparkle: "M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z",
};

function TrustIcon({ icon }: { icon: TrustItem["icon"] }) {
  return (
    <svg
      className="h-6 w-6 text-gold"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={iconPaths[icon]} />
    </svg>
  );
}

export function TrustStrip() {
  const { trustStrip } = site;

  return (
    <section className="border-y border-border/70 bg-cream py-8 sm:py-10">
      <div className="container-munch">
        <ul className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-12 lg:gap-20">
          {trustStrip.items.map((item, index) => (
            <li
              key={item.label}
              className="flex items-center gap-4 sm:gap-6"
            >
              {index > 0 ? (
                <span className="hidden text-gold/50 sm:inline" aria-hidden="true">
                  ◆
                </span>
              ) : null}
              <span className="flex items-center gap-3 text-base font-light tracking-wide text-brown/80 sm:text-lg">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/10">
                  <TrustIcon icon={item.icon} />
                </span>
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
