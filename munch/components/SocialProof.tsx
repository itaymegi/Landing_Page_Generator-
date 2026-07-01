import { site } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`דירוג ${rating} מתוך 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < rating ? "text-gold" : "text-border"}`}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.8 6.2 20.9l1.1-6.5L2.6 9.8l6.5-.9L12 2.5z" />
        </svg>
      ))}
    </div>
  );
}

export function SocialProof() {
  const { reviews } = site;

  return (
    <section className="section-py bg-parchment">
      <div className="container-munch">
        <Reveal className="text-center">
          <p className="font-display text-sm uppercase tracking-[0.28em] text-gold-deep">
            {reviews.eyebrow}
          </p>
          <h2 className="mt-3 font-serif text-3xl font-light tracking-wide text-brown sm:text-4xl">
            {reviews.title}
          </h2>
          <span className="rule-gold rule-gold-center mt-6" aria-hidden="true" />
          <p className="mt-6 text-base leading-relaxed text-brown/60 sm:text-lg">
            {reviews.subtitle}
          </p>
          {reviews.placeholderNote ? (
            <p className="mt-3 text-xs italic text-brown/40">{reviews.placeholderNote}</p>
          ) : null}
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.items.map((review, index) => (
            <Reveal key={review.name} delay={index * 90}>
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-white p-7 shadow-sm shadow-brown/5">
                <Stars rating={review.rating} />
                <blockquote className="mt-4 flex-1 text-base leading-relaxed text-text/75 sm:text-lg">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/12 font-serif text-lg text-gold-deep">
                    {review.name.charAt(0)}
                  </span>
                  <span className="text-sm font-medium text-brown">{review.name}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
