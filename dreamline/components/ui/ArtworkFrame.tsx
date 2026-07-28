import Image from "next/image";
import { aspectRatioClass, type AspectRatio, type CreationItem } from "@/config/site";
import { IMAGE_QUALITY } from "@/lib/image";
import { PlaceholderArtwork } from "@/components/ui/PlaceholderArtwork";

type ArtworkFrameProps = {
  item: CreationItem;
  sizes?: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
  rounded?: string;
  fit?: "cover" | "contain";
  aspectRatioOverride?: AspectRatio;
};

/**
 * Renders a CreationItem consistently everywhere on the site: same aspect
 * ratio, same rounding, same treatment whether it's a real photo or an
 * elegant placeholder. Swapping data never requires touching this component.
 */
export function ArtworkFrame({
  item,
  sizes = "(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw",
  priority = false,
  className = "",
  imageClassName = "",
  rounded = "rounded-[1.75rem]",
  fit = "cover",
  aspectRatioOverride,
}: ArtworkFrameProps) {
  return (
    <div
      className={`relative overflow-hidden ${rounded} ${aspectRatioClass[aspectRatioOverride ?? item.aspectRatio]} ${className}`}
    >
      {item.isPlaceholder || !item.image ? (
        <PlaceholderArtwork category={item.category} label={item.title} />
      ) : (
        <Image
          src={item.image}
          alt={item.imageAlt ?? item.title}
          fill
          className={`${fit === "cover" ? "object-cover" : "object-contain"} ${imageClassName}`}
          style={item.objectPosition ? { objectPosition: item.objectPosition } : undefined}
          sizes={sizes}
          quality={IMAGE_QUALITY}
          priority={priority}
          loading={priority ? undefined : "lazy"}
        />
      )}
    </div>
  );
}
