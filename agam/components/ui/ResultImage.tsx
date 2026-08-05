import Image from "next/image";

type ResultImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  priority?: boolean;
  rounded?: string;
  className?: string;
};

/**
 * Renders a photo at its own aspect ratio instead of cropping it into a frame.
 * The clinic's before/after photos already carry both states inside a single
 * frame, so any cover-crop would cut one of them away.
 */
export function ResultImage({
  src,
  alt,
  width,
  height,
  sizes,
  priority = false,
  rounded = "rounded-[18px]",
  className = "",
}: ResultImageProps) {
  return (
    <div className={`relative overflow-hidden bg-sand ${rounded} ${className}`}>
      <span
        className="absolute inset-0 bg-gradient-to-br from-sand via-cream to-sand"
        aria-hidden="true"
      />

      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        quality={90}
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        className="relative block h-auto w-full"
      />
    </div>
  );
}
