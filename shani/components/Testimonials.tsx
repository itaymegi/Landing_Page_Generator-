import { site } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";

function Stars({ count }: { count: number }) {
  return (
    <span className="text-accent" aria-label={`${count} כוכבים`}>
      {"★".repeat(count)}
    </span>
  );
}

export function Testimonials() {
  const { testimonials } = site;

  return (
    <section id="testimonials" className="section-py bg-cream">
      <div className="container-shani">
        <Reveal>
          <h2 className="font-serif text-3xl font-light tracking-wide text-brown sm:text-4xl lg:text-5xl">
            {testimonials.title}
          </h2>
          <span className="rule-accent mt-5" aria-hidden="true" />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:mt-16 lg:grid-cols-3 lg:gap-8">
          {testimonials.items.map((item, index) => (
            <Reveal key={item.name} delay={index * 80}>
              <blockquote className="flex h-full flex-col rounded-xl bg-background p-6 shadow-[0_4px_20px_rgba(90,70,52,0.06)] sm:p-8">
                <Stars count={item.stars} />
                <p className="mt-4 flex-1 text-base leading-relaxed text-text/80">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="mt-6 text-sm font-medium text-brown">
                  — {item.name}
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
