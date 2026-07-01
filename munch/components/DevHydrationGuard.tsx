import Script from "next/script";

/**
 * Strips data-cursor-ref attributes injected by dev tooling before React hydrates.
 * Prevents false-positive hydration mismatch errors in local preview environments.
 */
export function DevHydrationGuard() {
  if (process.env.NODE_ENV !== "development") return null;

  return (
    <Script id="dev-hydration-guard" strategy="beforeInteractive">
      {`
(function () {
  function stripCursorRefs() {
    document.querySelectorAll("[data-cursor-ref]").forEach(function (el) {
      el.removeAttribute("data-cursor-ref");
    });
  }

  stripCursorRefs();

  if (typeof MutationObserver === "undefined" || !document.documentElement) return;

  var observer = new MutationObserver(function () {
    stripCursorRefs();
  });

  observer.observe(document.documentElement, {
    attributes: true,
    subtree: true,
    attributeFilter: ["data-cursor-ref"],
  });

  window.__cursorRefObserver = observer;

  document.addEventListener("DOMContentLoaded", stripCursorRefs);
})();
`}
    </Script>
  );
}
