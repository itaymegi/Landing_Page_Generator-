import Link from "next/link";

const legalLinks = [
  { href: "/privacy", label: "מדיניות פרטיות" },
  { href: "/accessibility", label: "הצהרת נגישות" },
  { href: "/terms", label: "תנאי שימוש" },
] as const;

/**
 * Three footer links: Privacy Policy, Accessibility Statement, Terms of Use.
 * Drop this inside any footer. Styled via lp-footer-links / lp-footer-link CSS classes.
 */
export function FooterLegalLinks() {
  return (
    <nav className="lp-footer-links" aria-label="קישורים משפטיים">
      {legalLinks.map((link, index) => (
        <span key={link.href} className="inline-flex items-center gap-3">
          {index > 0 ? <span aria-hidden="true">·</span> : null}
          <Link href={link.href} className="lp-footer-link" prefetch>
            {link.label}
          </Link>
        </span>
      ))}
    </nav>
  );
}
