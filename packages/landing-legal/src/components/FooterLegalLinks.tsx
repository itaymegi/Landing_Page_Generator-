import Link from "next/link";

/**
 * Three footer links: Privacy Policy, Accessibility Statement, Terms of Use.
 * Drop this inside any footer. Styled via lp-footer-links / lp-footer-link CSS classes.
 */
export function FooterLegalLinks() {
  return (
    <nav className="lp-footer-links" aria-label="קישורים משפטיים">
      <Link href="/privacy" className="lp-footer-link">
        מדיניות פרטיות
      </Link>
      <span aria-hidden="true">·</span>
      <Link href="/accessibility" className="lp-footer-link">
        הצהרת נגישות
      </Link>
      <span aria-hidden="true">·</span>
      <Link href="/terms" className="lp-footer-link">
        תנאי שימוש
      </Link>
    </nav>
  );
}
