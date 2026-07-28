import type { PlannerServiceFamily } from "@/config/site";
import { isPlannerServiceFamily } from "@/config/site";

const STORAGE_KEY = "dreamline-planner-service";

export function setPlannerService(service: PlannerServiceFamily) {
  try {
    sessionStorage.setItem(STORAGE_KEY, service);
  } catch {
    // Ignore storage failures (private mode, etc.)
  }
}

export function consumePlannerService(): PlannerServiceFamily | null {
  try {
    const value = sessionStorage.getItem(STORAGE_KEY);
    sessionStorage.removeItem(STORAGE_KEY);
    return isPlannerServiceFamily(value) ? value : null;
  } catch {
    return null;
  }
}

export function peekPlannerServiceFromUrl(): PlannerServiceFamily | null {
  if (typeof window === "undefined") return null;
  const params = new URLSearchParams(window.location.search);
  const value = params.get("service");
  return isPlannerServiceFamily(value) ? value : null;
}
