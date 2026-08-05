import Image from "next/image";
import type { GalleryItem } from "@/config/gallery";

const aspectClasses = {
  portrait: "aspect-[4/5]",
  tall: "aspect-[3/4.5]",
  square: "aspect-square",
  landscape: "aspect-[4/3]",
};

type GalleryCardProps = {
  item: GalleryItem;
  onOpen: () => void;
};

export function GalleryCard({ item, onOpen }: GalleryCardProps) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group masonry-item relative w-full overflow-hidden rounded-[1.1rem] bg-sand text-start focus-visible:outline-offset-4"
      aria-label={`פתיחת תמונה: ${item.alt}`}
    >
      <span
        className={`relative block w-full overflow-hidden ${aspectClasses[item.aspect]}`}
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
          quality={90}
          className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
        />
        <span
          className="absolute inset-0 bg-charcoal/0 transition-colors duration-500 group-hover:bg-charcoal/15"
          aria-hidden="true"
        />
      </span>
    </button>
  );
}
