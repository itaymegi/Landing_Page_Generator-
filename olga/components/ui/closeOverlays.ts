export const CLOSE_OVERLAYS_EVENT = "olga:close-overlays";

export function requestCloseOverlays() {
  window.dispatchEvent(new CustomEvent(CLOSE_OVERLAYS_EVENT));
}
