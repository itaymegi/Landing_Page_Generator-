import Image from "next/image";

export type MediaAspect =
  | "portrait"
  | "tall"
  | "square"
  | "landscape"
  | "wide"
  | "cinematic";

const aspectClasses: Record<MediaAspect, string> = {
  portrait: "aspect-[4/5]",
  tall: "aspect-[3/4.6]",
  square: "aspect-square",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/10]",
  cinematic: "aspect-[21/9]",
};

type MediaFrameProps = {
  src: string;
  alt: string;
  aspect?: MediaAspect;
  sizes: string;
  priority?: boolean;
  rounded?: string;
  objectPosition?: string;
  overlay?: "none" | "soft" | "strong";
  zoomOnHover?: boolean;
  className?: string;
};

export function MediaFrame({
  src,
  alt,
  aspect = "portrait",
  sizes,
  priority = false,
  rounded = "rounded-[1.25rem]",
  objectPosition = "object-center",
  overlay = "none",
  zoomOnHover = false,
  className = "",
}: MediaFrameProps) {
  return (
    <div
      className={`relative overflow-hidden bg-sand ${aspectClasses[aspect]} ${rounded} ${className}`}
    >
      <span
        className="absolute inset-0 bg-gradient-to-br from-sand via-champagne to-sand"
        aria-hidden="true"
      />

      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        quality={90}
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        className={`object-cover ${objectPosition} ${
          zoomOnHover
            ? "transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.045]"
            : ""
        }`}
      />

      {overlay !== "none" ? (
        <span
          className={`absolute inset-0 ${
            overlay === "soft"
              ? "bg-gradient-to-t from-charcoal/45 via-charcoal/5 to-transparent"
              : "bg-gradient-to-t from-charcoal/80 via-charcoal/25 to-charcoal/5"
          }`}
          aria-hidden="true"
        />
      ) : null}
    </div>
  );
}
