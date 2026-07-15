"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="he" dir="rtl">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#F5F0E8",
          color: "#5A4634",
          fontFamily: "Georgia, serif",
          padding: "24px",
          textAlign: "center",
        }}
      >
        <div>
          <h1 style={{ fontSize: "1.75rem", fontWeight: 300, marginBottom: "1rem" }}>
            Rubina — שגיאה כללית
          </h1>
          <p style={{ maxWidth: "28rem", lineHeight: 1.6, opacity: 0.8 }}>
            אירעה שגיאה בלתי צפויה. נסו לרענן את העמוד.
          </p>
          <div style={{ marginTop: "1.5rem", display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <button
              type="button"
              onClick={reset}
              style={{
                border: "1px solid #A67C52",
                background: "transparent",
                color: "#8B6340",
                borderRadius: "9999px",
                padding: "12px 24px",
                cursor: "pointer",
              }}
            >
              ניסיון נוסף
            </button>
            <a
              href="/"
              style={{
                background: "#A67C52",
                color: "#fff",
                borderRadius: "9999px",
                padding: "12px 24px",
                textDecoration: "none",
              }}
            >
              דף הבית
            </a>
          </div>
          {error.digest ? (
            <p style={{ marginTop: "1rem", fontSize: "0.75rem", opacity: 0.5 }}>
              {error.digest}
            </p>
          ) : null}
        </div>
      </body>
    </html>
  );
}
