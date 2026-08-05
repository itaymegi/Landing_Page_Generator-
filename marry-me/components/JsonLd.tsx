import { getSiteUrl, site } from "@/config/site";

export function JsonLd() {
  const siteUrl = getSiteUrl();

  const graph = [
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}#business`,
      name: site.brand.name,
      legalName: site.business.legalName,
      description: site.business.description,
      url: siteUrl,
      image: `${siteUrl}${site.meta.ogImage}`,
      email: site.contact.email,
      telephone: `+${site.contact.whatsappNumber}`,
      areaServed: site.business.areaServed,
      sameAs: site.business.sameAs,
      address: {
        "@type": "PostalAddress",
        addressCountry: "IL",
        addressLocality: site.contact.address,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      url: siteUrl,
      name: site.brand.name,
      description: site.meta.description,
      inLanguage: "he-IL",
      publisher: { "@id": `${siteUrl}#business` },
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": graph,
        }),
      }}
    />
  );
}
