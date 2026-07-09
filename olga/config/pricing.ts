export type TableShape = "round" | "rectangle" | "head";
export type DesignLevel = "budvases" | "bouquet" | "low" | "high";
export type ChuppahOption =
  | "none"
  | "basic"
  | "classic"
  | "partial"
  | "full"
  | "premium"
  | "custom";
export type ExtraId =
  | "aisle-basic"
  | "aisle-rich"
  | "entrance-sign"
  | "bar"
  | "welcome"
  | "night-dismantle"
  | "logistics"
  | "special";

export type TableGroup = {
  id: string;
  shape: TableShape;
  quantity: number;
  level: DesignLevel;
};

export type QuoteSelection = {
  eventType: string;
  tableGroups: TableGroup[];
  chuppah: ChuppahOption;
  extras: ExtraId[];
};

export const tableShapeLabels: Record<TableShape, string> = {
  round: "עגול / מרובע",
  rectangle: "מלבני",
  head: "אבירים",
};

export const designLevelLabels: Record<DesignLevel, string> = {
  budvases: "מקבץ בקבוקונים",
  bouquet: "זר",
  low: "סידור נמוך",
  high: "סידור גבוה",
};

export const tablePrices: Record<
  TableShape,
  Record<DesignLevel, number>
> = {
  round: { budvases: 80, bouquet: 140, low: 220, high: 320 },
  rectangle: { budvases: 120, bouquet: 220, low: 350, high: 480 },
  head: { budvases: 180, bouquet: 350, low: 550, high: 750 },
};

export const chuppahOptions: {
  value: ChuppahOption;
  label: string;
  min: number;
  max: number;
}[] = [
  { value: "none", label: "ללא חופה", min: 0, max: 0 },
  { value: "basic", label: "חופה בסיסית", min: 2500, max: 4000 },
  { value: "classic", label: "חופה קלאסית", min: 4500, max: 6500 },
  { value: "partial", label: "חופה פרחונית חלקית", min: 7000, max: 9500 },
  { value: "full", label: "חופה פרחונית מלאה", min: 10000, max: 14000 },
  { value: "premium", label: "חופה פרימיום", min: 15000, max: 22000 },
  { value: "custom", label: "חופה בהתאמה מיוחדת", min: 18000, max: 35000 },
];

export const extraOptions: {
  id: ExtraId;
  label: string;
  min: number;
  max: number;
}[] = [
  { id: "aisle-basic", label: "שביל חופה בסיסי", min: 800, max: 1500 },
  { id: "aisle-rich", label: "שביל חופה עשיר", min: 2000, max: 4000 },
  { id: "entrance-sign", label: "שלט כניסה", min: 600, max: 1200 },
  { id: "bar", label: "סידור לבר", min: 500, max: 1800 },
  { id: "welcome", label: "עמדת קבלת פנים", min: 1200, max: 2800 },
  { id: "night-dismantle", label: "פירוק לילי", min: 800, max: 2000 },
  { id: "logistics", label: "לוגיסטיקה ונסיעות", min: 500, max: 2500 },
  { id: "special", label: "אלמנטים מיוחדים", min: 1500, max: 5000 },
];

function roundTo100(value: number): number {
  return Math.round(value / 100) * 100;
}

function getChuppahMid(option: ChuppahOption): number {
  const item = chuppahOptions.find((o) => o.value === option);
  if (!item || option === "none") return 0;
  return (item.min + item.max) / 2;
}

function getExtrasMid(extras: ExtraId[]): number {
  return extras.reduce((sum, id) => {
    const item = extraOptions.find((e) => e.id === id);
    if (!item) return sum;
    return sum + (item.min + item.max) / 2;
  }, 0);
}

function getTablesTotal(groups: TableGroup[]): number {
  return groups.reduce((sum, group) => {
    const unit = tablePrices[group.shape][group.level];
    return sum + unit * Math.max(0, group.quantity);
  }, 0);
}

export function calculateQuoteRange(selection: QuoteSelection): {
  min: number;
  max: number;
} {
  const tablesTotal = getTablesTotal(selection.tableGroups);
  const chuppahMid = getChuppahMid(selection.chuppah);
  const extrasMid = getExtrasMid(selection.extras);
  const mid = tablesTotal + chuppahMid + extrasMid;

  if (mid <= 0) {
    return { min: 0, max: 0 };
  }

  return {
    min: roundTo100(Math.floor(mid * 0.85)),
    max: roundTo100(Math.ceil(mid * 1.15)),
  };
}

export function formatPriceRange(min: number, max: number): string {
  const fmt = (n: number) => n.toLocaleString("he-IL");
  if (min <= 0 && max <= 0) return "—";
  return `${fmt(min)}–${fmt(max)} ₪`;
}

let tableGroupCounter = 0;

export function createEmptyTableGroup(): TableGroup {
  tableGroupCounter += 1;
  return {
    id: `table-${tableGroupCounter}`,
    shape: "round",
    quantity: 1,
    level: "bouquet",
  };
}
