/** Formats an ISO date string (YYYY-MM-DD) as D.M.YYYY for Hebrew display. */
export function formatDate(iso: string): string {
  const parts = iso.split("-");
  if (parts.length !== 3) return iso;
  const [year, month, day] = parts;
  return `${Number(day)}.${Number(month)}.${year}`;
}
