import { resolveLegalContext } from "@landing-legal/core";
import { site, getSiteUrl } from "./site";

export const legalContext = resolveLegalContext({
  legal: site.legal,
  contact: site.contact,
  business: site.business,
  websiteUrl: getSiteUrl(),
});
