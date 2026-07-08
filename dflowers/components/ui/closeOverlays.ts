export const CLOSE_OVERLAYS_EVENT = "dflowers:close-overlays";

export function requestCloseOverlays() {
  window.dispatchEvent(new CustomEvent(CLOSE_OVERLAYS_EVENT));
}
