import type { ButtonHTMLAttributes } from "react";

/**
 * Button wrapper that suppresses hydration warnings caused by browser
 * extensions injecting attributes (e.g. fdprocessedid) before React hydrates.
 */
export function HydrationSafeButton(
  props: ButtonHTMLAttributes<HTMLButtonElement>,
) {
  return <button suppressHydrationWarning {...props} />;
}
