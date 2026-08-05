import { getSiteUrl, site } from "@/config/site";
import { treatmentCategories, treatmentHref } from "@/config/treatments";

function parseAddress(address: string) {
  const [streetAddress, addressLocality] = address
    .split(",")
    .map((part) => part.trim());

  return {
    streetAddress: streetAddress || address,
    addressLocality: addressLocality || "",
  };
}

export function JsonLd() {
  const siteUrl = getSiteUrl();
  const { streetAddress, addressLocality } = parseAddress(
    site.contact.address,
  );

  const graph = [
    {
      "@type": "MedicalClinic",
      "@id": `${siteUrl}#clinic`,
      name: site.brand.name,
      legalName: site.business.legalName,
      description: site.business.description,
      url: siteUrl,
      image: `${siteUrl}${site.meta.ogImage}`,
      email: site.contact.email,
      telephone: `+${site.contact.whatsappNumber}`,
      areaServed: site.business.areaServed,
      sameAs: site.business.sameAs,
      medicalSpecialty: "Dermatology",
      address: {
        "@type": "PostalAddress",
        streetAddress,
        addressLocality,
        addressCountry: "IL",
      },
      availableService: treatmentCategories.map((treatment) => ({
        "@type": "MedicalProcedure",
        name: treatment.tagline,
        description: treatment.metaDescription,
        url: `${siteUrl}${treatmentHref(treatment.slug)}`,
      })),
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      url: siteUrl,
      name: site.brand.name,
      description: site.meta.description,
      inLanguage: "he-IL",
      publisher: { "@id": `${siteUrl}#clinic` },
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  );
}
