import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ArrowIcon } from "@/components/ui/icons";
import { collectionHref, collections } from "@/config/collections";
import { site } from "@/config/site";

const CARD_SIZES = "(max-width: 640px) 46vw, (max-width: 1024px) 44vw, 30vw";

export function Collections() {
  const copy = site.collections;

  return (
    <SectionShell id="collections" tone="champagne" hairline>
      <div className="container-marry">
        <Reveal>
          <SectionTitle
            eyebrow={copy.eyebrow}
            title={copy.title}
            subtitle={copy.subtitle}
          />
        </Reveal>

        <ul className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4 lg:mt-12 lg:grid-cols-3 lg:gap-5">
          {collections.map((collection, index) => (
            <Reveal
              key={collection.id}
              delay={(index % 3) * 60}
              className="h-full"
            >
              <li className="h-full">
                <Link
                  href={collectionHref(collection.id)}
                  className="group flex h-full flex-col overflow-hidden rounded-[16px] border border-gold/15 bg-warm-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-gold/45 hover:shadow-[0_26px_58px_rgba(42,38,34,0.1)]"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-sand">
                    <Image
                      src={collection.image}
                      alt={collection.imageAlt}
                      fill
                      sizes={CARD_SIZES}
                      quality={90}
                      className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-3.5 text-start sm:p-5">
                    <h3 className="font-serif text-[1.05rem] font-light leading-snug text-charcoal sm:text-xl">
                      {collection.name}
                    </h3>

                    <p className="mt-2 line-clamp-2 text-[0.75rem] leading-[1.65] text-ink-muted sm:line-clamp-3 sm:text-[0.8125rem] sm:leading-[1.75]">
                      {collection.description}
                    </p>

                    <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-[0.6875rem] tracking-[0.12em] text-gold-deep">
                      {copy.cta}
                      <ArrowIcon className="h-3 w-3 transition-transform duration-500 group-hover:-translate-x-1" />
                    </span>
                  </div>
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}
