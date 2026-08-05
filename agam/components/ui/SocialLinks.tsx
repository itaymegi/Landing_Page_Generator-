import { site, siteWhatsAppHref } from "@/config/site";
import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  TikTokIcon,
  WhatsAppIcon,
} from "@/components/ui/icons";

type SocialLinksProps = {
  invert?: boolean;
};

export function SocialLinks({ invert = false }: SocialLinksProps) {
  const itemClass = `inline-flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-400 ${
    invert
      ? "border-ivory/25 text-ivory/80 hover:border-gold-soft hover:text-gold-soft"
      : "border-gold/30 text-ink-muted hover:border-gold hover:text-gold-deep"
  }`;

  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href={site.contact.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`אינסטגרם ${site.contact.instagramHandle}`}
        className={itemClass}
      >
        <InstagramIcon />
      </a>
      <a
        href={site.contact.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`פייסבוק ${site.brand.name}`}
        className={itemClass}
      >
        <FacebookIcon />
      </a>
      <a
        href={site.contact.tiktok}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`טיקטוק ${site.contact.tiktokHandle}`}
        className={itemClass}
      >
        <TikTokIcon />
      </a>
      <a
        href={siteWhatsAppHref()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="שיחה בוואטסאפ"
        className={itemClass}
      >
        <WhatsAppIcon />
      </a>
      <a
        href={`mailto:${site.contact.email}`}
        aria-label={`שליחת מייל אל ${site.contact.email}`}
        className={itemClass}
      >
        <MailIcon />
      </a>
    </div>
  );
}
