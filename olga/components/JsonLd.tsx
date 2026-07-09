import { getSiteUrl, site } from "@/config/site";

export function JsonLd() {
  const siteUrl = getSiteUrl();
  const imageUrl = site.meta.ogImage.startsWith("http")
    ? site.meta.ogImage
    : `${siteUrl}${site.meta.ogImage}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${site.brand.name} — ${site.brand.logoText}`,
    description: site.meta.description,
    image: imageUrl,
    url: siteUrl,
    sameAs: [site.contact.instagram],
    areaServed: {
      "@type": "Country",
      name: "Israel",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: site.contact.phones[0],
      availableLanguage: ["Hebrew", "English"],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
