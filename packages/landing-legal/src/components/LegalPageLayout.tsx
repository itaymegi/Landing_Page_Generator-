import Link from "next/link";
import type { LegalContext } from "../types";

type LegalPageLayoutProps = {
  title: string;
  context: LegalContext;
  children: React.ReactNode;
  /** Href for the back-to-home link. Defaults to "/". */
  backHref?: string;
  /** Label for the back link. Defaults to "חזרה לדף הבית". */
  backLabel?: string;
};

export function LegalPageLayout({
  title,
  children,
  backHref = "/",
  backLabel = "חזרה לדף הבית",
}: LegalPageLayoutProps) {
  return (
    <div className="lp-page">
      <main className="lp-container" id="main-content">
        <nav aria-label="ניווט חזרה">
          <Link href={backHref} className="lp-back-link">
            <BackArrow />
            <span>{backLabel}</span>
          </Link>
        </nav>

        <h1 className="lp-page-title">{title}</h1>
        <span className="lp-page-divider" aria-hidden="true" />

        <article>{children}</article>
      </main>
    </div>
  );
}

function BackArrow() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {/* Right-pointing arrow — visually "back" in RTL layouts */}
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
