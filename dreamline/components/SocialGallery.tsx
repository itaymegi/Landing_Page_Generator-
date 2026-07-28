import { site, creationItem } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/Section";
import { ArtworkFrame } from "@/components/ui/ArtworkFrame";
import { CTAButton } from "@/components/ui/CTAButton";

function InstagramIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

export function SocialGallery() {
  const { socialGallery, contact } = site;
  const items = socialGallery.itemIds.map((id) => creationItem(id));

  return (
    <section className="section-py bg-butter/20">
      <div className="container-dreamline">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading eyebrow={socialGallery.eyebrow} title={socialGallery.title} subtitle={socialGallery.subtitle} />
            <CTAButton
              href={contact.instagram}
              label={socialGallery.ctaLabel}
              external
              variant="outline"
              size="sm"
              showArrow={false}
              className="hidden sm:inline-flex"
            />
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
          {items.map((item, index) => (
            <Reveal key={item.id} delay={index * 60}>
              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-[1.1rem]"
                aria-label={`${item.title} — עוד באינסטגרם`}
              >
                <ArtworkFrame item={item} aspectRatioOverride="square" rounded="rounded-[1.1rem]" sizes="(max-width:640px) 45vw, 16vw" />
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-ink/0 text-white opacity-0 transition-all duration-300 group-hover:bg-ink/35 group-hover:opacity-100">
                  <InstagramIcon className="h-6 w-6" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 flex justify-center sm:hidden">
          <CTAButton href={contact.instagram} label={socialGallery.ctaLabel} external variant="outline" size="sm" showArrow={false} />
        </div>
      </div>
    </section>
  );
}
