import Image from "next/image";
import { aspectRatioClass, type CreationItem } from "@/config/site";
import { IMAGE_QUALITY } from "@/lib/image";
import { PlaceholderArtwork } from "@/components/ui/PlaceholderArtwork";

type GalleryItemProps = {
  item: CreationItem;
  sizes?: string;
  className?: string;
};

/** Editorial gallery tile with restrained hover scale + caption reveal. */
export function GalleryItem({
  item,
  sizes = "(max-width: 640px) 78vw, (max-width: 1024px) 42vw, 26vw",
  className = "",
}: GalleryItemProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[1.5rem] ${aspectRatioClass[item.aspectRatio]} ${className}`}
    >
      {item.isPlaceholder || !item.image ? (
        <PlaceholderArtwork category={item.category} label={item.title} />
      ) : (
        <Image
          src={item.image}
          alt={item.imageAlt ?? item.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          style={item.objectPosition ? { objectPosition: item.objectPosition } : undefined}
          sizes={sizes}
          quality={IMAGE_QUALITY}
          loading="lazy"
        />
      )}

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden="true"
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <p className="text-sm font-medium text-white">{item.title}</p>
      </div>
    </div>
  );
}
