export type ProductBrand = {
  id: string;
  slug: string;
  name: string;
  origin: string;
  category: string;
  packshot: string;
  packshotAlt: string;
  packshotWidth: number;
  packshotHeight: number;
  whatItDoes: string;
  whoItFits: string;
  benefits: string[];
  longevity: string;
  /** Medical pricing is set in consultation, so cards and pages never show a number. */
  priceNote: string;
  commonTreatments: string[];
  metaTitle: string;
  metaDescription: string;
};

export function productHref(slug: string): string {
  return `/products/${slug}`;
}

export const brandsSection = {
  eyebrow: "Our Products",
  title: "המוצרים שאנחנו מציעות",
  subtitle:
    "מותגים מובילים שנבחרו בקפידה — אפשר להזמין דרך הקליניקה ולקבל ייעוץ אישי בהתאמה לאזור ולתוצאה הרצויה.",
  editorialWord: "Trusted",
  ctaLabel: "לפרטים בקליניקה",
  longevityLabel: "משך התוצאה",
};

export const productPage = {
  breadcrumbLabel: "מוצרים",
  benefitsLabel: "יתרונות",
  whoItFitsLabel: "למי זה מתאים",
  longevityLabel: "משך התוצאה",
  priceLabel: "מחיר",
  commonTreatmentsLabel: "טיפולים נפוצים",
  orderLabel: "לפרטים בוואטסאפ",
  consultLabel: "קביעת פגישת ייעוץ",
  backLabel: "לכל המוצרים",
  disclaimer:
    "המוצרים מוזרקים בקליניקה בלבד, על ידי מטפלת מוסמכת ולאחר פגישת ייעוץ. אין מדובר במכירה לשימוש עצמי.",
};

export const productBrands: ProductBrand[] = [
  {
    id: "radiesse",
    slug: "radiesse",
    name: "Radiesse",
    origin: "Merz Aesthetics",
    category: "מעורר קולגן",
    packshot: "/media/products/radiesse.png",
    packshotAlt:
      "אריזת Radiesse על משטח שיש בקליניקה, לצד פירוט יתרונות החומר",
    packshotWidth: 892,
    packshotHeight: 1064,
    whatItDoes:
      "חומר על בסיס קלציום הידרוקסיאפטיט שמספק תמיכה מיידית ובמקביל מעורר את הגוף לייצר קולגן חדש באזור הטיפול.",
    whoItFits:
      "מתאים למי שמחפשת חיזוק מבני באזורים שדורשים תמיכה, ולא רק תוספת נפח.",
    benefits: [
      "תמיכה מבנית חזקה במיוחד",
      "עידוד ייצור קולגן טבעי",
      "שיפור שממשיך גם אחרי שהחומר מתפרק",
    ],
    longevity: "12–18 חודשים",
    priceNote: "מחיר לפי ייעוץ",
    commonTreatments: ["קו לסת", "עצמות לחיים", "הידוק ידיים", "רקות"],
    metaTitle: "Radiesse — מעורר קולגן",
    metaDescription:
      "Radiesse על בסיס קלציום הידרוקסיאפטיט — תמיכה מבנית מיידית ועידוד ייצור קולגן. מחיר לפי ייעוץ בקליניקת Agam Aesthetic.",
  },
  {
    id: "sculptra",
    slug: "sculptra",
    name: "Sculptra",
    origin: "Galderma",
    category: "מעורר קולגן",
    packshot: "/media/products/sculptra.png",
    packshotAlt: "אריזת Sculptra מקורית של Galderma בקליניקה",
    packshotWidth: 847,
    packshotHeight: 643,
    whatItDoes:
      "חומצה פולי-לקטית שאינה ממלאת נפח באופן מיידי, אלא מניעה תהליך הדרגתי של בניית קולגן לאורך חודשים.",
    whoItFits:
      "מתאים למי שמעדיפה שינוי איטי ולא מורגש, ומוכנה לסדרה של שניים עד שלושה טיפולים.",
    benefits: [
      "תוצאה הדרגתית שנראית טבעית לחלוטין",
      "שיפור כולל באיכות ובעובי העור",
      "משך תוצאה ארוך במיוחד",
    ],
    longevity: "עד 24 חודשים",
    priceNote: "מחיר לפי ייעוץ",
    commonTreatments: ["חידוש כללי של הפנים", "רקות", "אזור הלחיים", "צוואר"],
    metaTitle: "Sculptra — חומצה פולי-לקטית",
    metaDescription:
      "Sculptra של Galderma — בנייה הדרגתית של קולגן לאורך חודשים, לתוצאה טבעית וארוכת טווח. מחיר לפי ייעוץ.",
  },
  {
    id: "aesplla",
    slug: "aesplla",
    name: "aesPLLA",
    origin: "Regen Biotech",
    category: "מעורר קולגן",
    packshot: "/media/products/aesplla.png",
    packshotAlt:
      "אריזת aesPLLA על משטח שיש בקליניקה, לצד פירוט יתרונות החומר",
    packshotWidth: 913,
    packshotHeight: 1093,
    whatItDoes:
      "מעורר קולגן מדור חדש על בסיס חומצה פולי-לקטית בטכנולוגיית מיקרו-חלקיקים, המאפשרת פיזור אחיד וריפוי נוח.",
    whoItFits:
      "מתאים למי שמחפשת חידוש עור מבני עם תקופת התאוששות קצרה יחסית.",
    benefits: [
      "פיזור אחיד ותוצאה חלקה",
      "בניית קולגן מתמשכת",
      "נוחות גבוהה בזמן הטיפול",
    ],
    longevity: "18–24 חודשים",
    priceNote: "מחיר לפי ייעוץ",
    commonTreatments: ["חידוש עור", "הידוק אזור הלחיים", "שיפור מרקם"],
    metaTitle: "aesPLLA — מעורר קולגן מדור חדש",
    metaDescription:
      "aesPLLA בטכנולוגיית מיקרו-חלקיקים — פיזור אחיד, בניית קולגן מתמשכת והתאוששות נוחה. מחיר לפי ייעוץ.",
  },
];

export function getBrandsByIds(ids: string[]): ProductBrand[] {
  return ids
    .map((id) => productBrands.find((brand) => brand.id === id))
    .filter((brand): brand is ProductBrand => Boolean(brand));
}

export function getBrandBySlug(slug: string): ProductBrand | undefined {
  return productBrands.find((brand) => brand.slug === slug);
}
