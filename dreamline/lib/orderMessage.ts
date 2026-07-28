import type { SiteConfig } from "@/config/site";

type PlannerCopy = SiteConfig["planner"];

export type OrderPackageRow = {
  id: string;
  boxType: string;
  quantity: string;
};

export type OrderLineItem = OrderPackageRow & {
  qty: number;
  unitPrice: number | null;
  isCustom: boolean;
  lineTotal: number | undefined;
};

export type BuildOrderMessageInput = {
  planner: PlannerCopy;
  brandName: string;
  lineItems: OrderLineItem[];
  name: string;
  date: string;
  notes: string;
  estimatedTotal: number;
  hasCustomItems: boolean;
  hasValidRows: boolean;
  photoUrls?: string[];
};

export function computeLineItems(
  rows: OrderPackageRow[],
  getPrice: (title: string) => number | undefined,
): OrderLineItem[] {
  return rows.map((row) => {
    const qty = parseInt(row.quantity, 10);
    const unitPrice = getPrice(row.boxType);
    const isCustom = unitPrice == null;
    const lineTotal = !isCustom && qty >= 1 ? unitPrice * qty : undefined;
    return {
      ...row,
      qty,
      unitPrice: unitPrice ?? null,
      isCustom,
      lineTotal,
    };
  });
}

export function buildOrderMessage({
  planner,
  brandName,
  lineItems,
  name,
  date,
  notes,
  estimatedTotal,
  hasCustomItems,
  hasValidRows,
  photoUrls = [],
}: BuildOrderMessageInput): string {
  const breakdownLines = lineItems.map((li) => {
    if (li.isCustom) {
      return `- ${li.qty >= 1 ? `${li.qty} × ` : ""}${li.boxType} — ${planner.customPriceNote}`;
    }
    return `- ${li.qty} × ${li.boxType} — ${(li.lineTotal ?? 0).toLocaleString("he-IL")}₪`;
  });

  const parts = [
    `היי ${brandName}! הגעתי דרך דף הנחיתה.`,
    "אשמח לקבל פרטים והצעת מחיר.",
    `שם: ${name || "-"}`,
    "פירוט הזמנה:",
    ...breakdownLines,
    hasCustomItems ? "* כולל פריטים לפי הצעת מחיר" : null,
    hasValidRows ? `סה״כ משוער: ${estimatedTotal.toLocaleString("he-IL")}₪` : null,
    `תאריך: ${date || "-"}`,
    `הערות: ${notes || "-"}`,
    photoUrls.length > 0 ? "קישורים לתמונות:" : null,
    ...photoUrls.map((url, i) => `${i + 1}. ${url}`),
  ].filter(Boolean);

  return parts.join("\n");
}
