import { getSiteUrl, site } from "@/config/site";

export function JsonLd() {
  const siteUrl = getSiteUrl();
  const imageUrl = `${siteUrl}${site.meta.ogImage}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.brand.name,
    description: site.meta.description,
    image: imageUrl,
    url: siteUrl,
    sameAs: [site.contact.instagram],
    areaServed: {
      "@type": "Place",
      name: "גן יבנה והסביבה",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["Hebrew"],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
