import Image from "next/image";
import { StarIcon } from "@/components/ui/icons";

type ReviewCardProps = {
  quote: string;
  name: string;
  eventType: string;
  image: string;
  imageAlt: string;
};

export function ReviewCard({
  quote,
  name,
  eventType,
  image,
  imageAlt,
}: ReviewCardProps) {
  return (
    <article className="overflow-hidden rounded-[1.35rem] border border-gold/20 bg-ivory">
      <div className="relative aspect-[4/3]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="320px"
          className="object-cover"
        />
      </div>
      <div className="p-5">
        <div className="flex gap-0.5 text-gold">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} className="h-3.5 w-3.5" />
          ))}
        </div>
        <blockquote className="mt-3 font-serif text-lg font-light text-charcoal">
          {quote}
        </blockquote>
        <p className="mt-4 text-sm text-charcoal">{name}</p>
        <p className="mt-0.5 text-xs text-ink-faint">{eventType}</p>
      </div>
    </article>
  );
}
