import { getSiteUrl, site } from "@/config/site";

export function JsonLd() {
  const siteUrl = getSiteUrl();
  const imageUrl = `${siteUrl}${site.meta.ogImage}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    name: site.brand.name,
    description: site.meta.description,
    image: imageUrl,
    url: siteUrl,
    telephone: `+${site.contact.whatsappNumber}`,
    sameAs: [site.contact.instagram],
    areaServed: site.business.deliveryAreas,
    servesCuisine: "Desserts",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+${site.contact.whatsappNumber}`,
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
