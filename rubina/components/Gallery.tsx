import Image from "next/image";
import { site } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";

const layoutClasses = [
  "col-span-2 aspect-[16/10] sm:aspect-[16/9]",
  "col-span-1 aspect-[3/4]",
  "col-span-1 aspect-square",
  "col-span-1 aspect-[3/4]",
  "col-span-1 aspect-square",
  "col-span-2 aspect-[16/10] sm:aspect-[16/9]",
];

export function Gallery() {
  const { gallery } = site;

  return (
    <section id="gallery" className="bg-white py-16 sm:py-24 lg:py-28">
      <div className="container-rubina max-w-[96rem]">
        <Reveal>
          <h2 className="font-serif text-2xl font-light tracking-wide text-charcoal sm:text-3xl">
            {gallery.title}
          </h2>
          <span className="rule-gold mt-4" aria-hidden="true" />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 grid grid-cols-2 gap-2 sm:mt-14 sm:gap-3 lg:grid-cols-4 lg:gap-4">
            {gallery.images.map((image, index) => (
              <figure
                key={`${image.src}-${index}`}
                className={`group relative overflow-hidden bg-beige ${layoutClasses[index % layoutClasses.length]}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-charcoal/0 transition-colors duration-500 group-hover:bg-charcoal/15"
                  aria-hidden="true"
                />
              </figure>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
