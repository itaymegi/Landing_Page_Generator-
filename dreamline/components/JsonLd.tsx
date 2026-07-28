import { getSiteUrl, site } from "@/config/site";

const SCHEMA_CONTEXT = "https://schema.org";

export function JsonLd() {
  const siteUrl = getSiteUrl();
  const ogImageUrl = `${siteUrl}${site.meta.ogImage}`;
  const logoUrl = `${siteUrl}${site.brand.logoSrc}`;

  const organizationId = `${siteUrl}/#organization`;
  const websiteId = `${siteUrl}/#website`;
  const webPageId = `${siteUrl}/#webpage`;

  const sameAs = [site.contact.instagram, ...site.business.sameAs].filter(
    (url, index, arr) => arr.indexOf(url) === index,
  );

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
      about: { "@id": organizationId },
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
  ];

  const schema = {
    "@context": SCHEMA_CONTEXT,
    "@graph": graph,
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
