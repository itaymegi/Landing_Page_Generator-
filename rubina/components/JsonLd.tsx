import { getSiteUrl, site } from "@/config/site";

const SCHEMA_CONTEXT = "https://schema.org";

export function JsonLd() {
  const siteUrl = getSiteUrl();
  const logoUrl = `${siteUrl}${site.business.logo}`;
  const ogImageUrl = `${siteUrl}${site.meta.ogImage}`;

  const organizationId = `${siteUrl}/#organization`;
  const localBusinessId = `${siteUrl}/#localbusiness`;
  const websiteId = `${siteUrl}/#website`;
  const webPageId = `${siteUrl}/#webpage`;

  const sameAs = [
    site.contact.instagram,
    site.contact.tiktok,
    ...site.business.sameAs,
  ].filter((url, index, arr) => arr.indexOf(url) === index);

  const products = site.products.items
    .filter((item) => item.id !== "custom")
    .map((item) => {
      const product: Record<string, unknown> = {
        "@type": "Product",
        "@id": `${siteUrl}/#product-${item.id}`,
        name: item.title,
        description: item.description,
        image: `${siteUrl}${item.image}`,
        brand: { "@id": organizationId },
      };

      if (item.price != null) {
        product.offers = {
          "@type": "Offer",
          price: item.price,
          priceCurrency: "ILS",
          availability: `${SCHEMA_CONTEXT}/InStock`,
          url: `${siteUrl}/#products`,
        };
      }

      return product;
    });

  const graph = [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: site.business.name,
      legalName: site.business.legalName,
      url: siteUrl,
      logo: logoUrl,
      image: ogImageUrl,
      description: site.business.description,
      email: site.business.email,
      telephone: site.business.phone,
      sameAs,
    },
    {
      "@type": "LocalBusiness",
      "@id": localBusinessId,
      name: site.business.name,
      description: site.business.description,
      url: siteUrl,
      image: ogImageUrl,
      logo: logoUrl,
      email: site.business.email,
      telephone: site.business.phone,
      sameAs,
      address: {
        "@type": "PostalAddress",
        addressLocality: site.business.pickupLocality,
        addressCountry: "IL",
      },
      areaServed: site.business.areaServed.map((name) => ({
        "@type": "Place",
        name,
      })),
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: site.business.phone,
        email: site.business.email,
        availableLanguage: ["Hebrew", "English"],
        areaServed: "IL",
      },
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      name: site.brand.name,
      url: siteUrl,
      inLanguage: "he",
      publisher: { "@id": organizationId },
    },
    {
      "@type": "WebPage",
      "@id": webPageId,
      url: siteUrl,
      name: site.meta.title,
      description: site.meta.description,
      inLanguage: "he",
      isPartOf: { "@id": websiteId },
      about: { "@id": localBusinessId },
      primaryImageOfPage: ogImageUrl,
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${siteUrl}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "דף הבית",
          item: siteUrl,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: site.faq.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
    ...products,
  ];

  const schema = {
    "@context": SCHEMA_CONTEXT,
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
