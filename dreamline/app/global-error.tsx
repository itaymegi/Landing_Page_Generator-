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
          background: "#FFF9F6",
          color: "#302B29",
          fontFamily: "system-ui, sans-serif",
          padding: "24px",
          textAlign: "center",
        }}
      >
        <div>
          <h1 style={{ fontSize: "1.75rem", fontWeight: 500, marginBottom: "1rem" }}>Dream Line — שגיאה כללית</h1>
          <p style={{ maxWidth: "28rem", lineHeight: 1.6, opacity: 0.8 }}>
            אירעה שגיאה בלתי צפויה. נסו לרענן את העמוד.
          </p>
          <div style={{ marginTop: "1.5rem", display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <button
              type="button"
              onClick={reset}
              style={{
                border: "1px solid #B5603E",
                background: "transparent",
                color: "#9C4E30",
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
                background: "#B5603E",
                color: "#fff",
                borderRadius: "9999px",
                padding: "12px 24px",
                textDecoration: "none",
              }}
            >
              דף הבית
            </a>
          </div>
          {error.digest ? <p style={{ marginTop: "1rem", fontSize: "0.75rem", opacity: 0.5 }}>{error.digest}</p> : null}
        </div>
      </body>
    </html>
  );
}
