import { MediaFrame } from "@/components/ui/MediaFrame";
import { CTAButton } from "@/components/ui/CTAButton";
import type { Collection } from "@/config/collections";

type CollectionCardProps = {
  collection: Collection;
  href: string;
  ctaLabel: string;
};

export function CollectionCard({
  collection,
  href,
  ctaLabel,
}: CollectionCardProps) {
  return (
    <article className="group luxury-card overflow-hidden">
      <MediaFrame
        src={collection.image}
        alt={collection.imageAlt}
        aspect="portrait"
        sizes="(max-width: 768px) 90vw, (max-width: 1280px) 40vw, 28vw"
        zoomOnHover
        rounded="rounded-none"
        className="rounded-t-[1.25rem]"
      />
      <div className="px-6 py-7 sm:px-7 sm:py-8">
        <h3 className="font-serif text-xl font-light text-charcoal sm:text-2xl">
          {collection.name}
        </h3>
        <p className="mt-3 text-sm leading-[1.85] text-ink-muted sm:text-[0.95rem]">
          {collection.description}
        </p>
        <div className="mt-6">
          <CTAButton
            href={href}
            variant="outline"
            fullWidthOnMobile={false}
            className="min-h-11 px-6 text-xs tracking-[0.12em]"
          >
            {ctaLabel}
          </CTAButton>
        </div>
      </div>
    </article>
  );
}
