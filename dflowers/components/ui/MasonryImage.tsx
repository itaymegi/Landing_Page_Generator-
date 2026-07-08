"use client";

import Image from "next/image";
import type { GalleryImage } from "@/config/site";

const heights = [
  "h-48",
  "h-56",
  "h-64",
  "h-52",
  "h-60",
  "h-48",
  "h-56",
  "h-72",
];

type MasonryImageProps = {
  image: GalleryImage;
  index: number;
  onClick: (index: number) => void;
  priority?: boolean;
  sizes?: string;
};

export function MasonryImage({
  image,
  index,
  onClick,
  priority = false,
  sizes = "(max-width: 768px) 50vw, 25vw",
}: MasonryImageProps) {
  const heightClass = heights[index % heights.length];

  return (
    <figure
      className={`masonry-item group relative cursor-pointer overflow-hidden bg-border ${heightClass}`}
    >
      <button
        type="button"
        onClick={() => onClick(index)}
        className="absolute inset-0 z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
        aria-label={`הגדל תמונה: ${image.alt}`}
      />
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        sizes={sizes}
        loading={priority ? "eager" : "lazy"}
        priority={priority}
        style={
          image.objectPosition
            ? { objectPosition: image.objectPosition }
            : undefined
        }
      />
      <div
        className="pointer-events-none absolute inset-0 bg-text/0 transition-colors duration-500 group-hover:bg-text/5"
        aria-hidden="true"
      />
    </figure>
  );
}
