import type { Metadata } from "next";
import type { LegalContext } from "../types";

type LegalPage = "privacy" | "accessibility" | "terms";

const PAGE_TITLES: Record<LegalPage, string> = {
  privacy: "מדיניות פרטיות",
  accessibility: "הצהרת נגישות",
  terms: "תנאי שימוש",
};

const PAGE_DESCRIPTIONS: Record<LegalPage, string> = {
  privacy: "מדיניות הפרטיות של",
  accessibility: "הצהרת הנגישות של",
  terms: "תנאי השימוש של",
};

/**
 * Returns a Next.js Metadata object for a legal page.
 * Legal pages are excluded from search index by default.
 */
export function createLegalMetadata(
  page: LegalPage,
  context: LegalContext,
): Metadata {
  const title = `${PAGE_TITLES[page]} — ${context.businessName}`;
  const description = `${PAGE_DESCRIPTIONS[page]} ${context.businessName}.`;
  return {
    title,
    description,
    robots: { index: false, follow: false },
    openGraph: {
      title,
      description,
    },
  };
}
