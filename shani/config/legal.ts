import { resolveLegalContext } from "@landing-legal/core";
import { site, getSiteUrl } from "./site";

export const legalContext = resolveLegalContext({
  legal: site.legal,
  contact: {
    instagram: site.contact.instagram,
    whatsappNumber: site.contact.whatsappNumber,
  },
  websiteUrl: getSiteUrl(),
});
