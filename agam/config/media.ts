type ResultBase = {
  id: string;
  /** Matches TreatmentCategory.id / .slug so results can be filtered per treatment. */
  categoryId: string;
  categorySlug: string;
  categoryLabel: string;
  treatment: string;
  summary: string;
  interval: string;
};

/**
 * Two separate frames of the same patient, shot from the same angle. Only this
 * kind can drive the draggable comparison slider.
 */
export type ResultPair = ResultBase & {
  kind: "pair";
  before: string;
  beforeAlt: string;
  after: string;
  afterAlt: string;
  width: number;
  height: number;
};

/**
 * A single photo that already holds both states side by side or stacked, so it
 * is always rendered whole rather than cropped into a frame.
 */
export type ResultComposite = ResultBase & {
  kind: "composite";
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ResultItem = ResultPair | ResultComposite;

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export const beforeAfterSection = {
  eyebrow: "Our Work",
  title: "גלריית העבודות שלנו",
  subtitle:
    "כל התמונות צולמו בקליניקה, מאותה זווית ובאותה תאורה, ומוצגות באישור המטופלות.",
  disclaimer:
    "התוצאות משתנות מאדם לאדם ותלויות במבנה הפנים, בסוג העור ובהיענות לטיפול. התמונות מוצגות באישור המטופלות ולא עברו עריכה.",
  sliderLabel: "השוואת לפני ואחרי",
  sliderHint: "גררו את הקו כדי להשוות",
  intervalLabel: "טווח זמן",
  categoryLabel: "תחום",
  featuredEyebrow: "Featured Case",
  beforeLabel: "לפני",
  afterLabel: "אחרי",
  allLabel: "הכל",
  filterLabel: "סינון תוצאות לפי תחום טיפול",
  treatmentLinkLabel: "לעמוד הטיפול",
  emptyLabel: "אין עדיין תוצאות בתחום הזה.",
};

export const resultItems: ResultItem[] = [
  {
    id: "ba-nose-pair",
    kind: "pair",
    categoryId: "nose",
    categorySlug: "nose",
    categoryLabel: "אף",
    treatment: "עיצוב אף ללא ניתוח",
    summary:
      "יישור קו הפרופיל והרמה עדינה של קצה האף, בטיפול אחד של כעשרים דקות.",
    interval: "מיד לאחר הטיפול",
    before: "/media/slider/nose-before.jpg",
    beforeAlt: "פרופיל האף לפני עיצוב ללא ניתוח",
    after: "/media/slider/nose-after.jpg",
    afterAlt: "פרופיל האף אחרי עיצוב ללא ניתוח",
    width: 600,
    height: 750,
  },
  {
    id: "ba-lips-pair",
    kind: "pair",
    categoryId: "lips",
    categorySlug: "lips",
    categoryLabel: "שפתיים",
    treatment: "עיצוב שפתיים",
    summary: "נפח מדוד שמאזן את הפנים כולן, ולא רק את השפתיים.",
    interval: "שבועיים לאחר הטיפול",
    before: "/media/slider/lips-before.jpg",
    beforeAlt: "השפתיים לפני עיצוב בחומצה היאלורונית",
    after: "/media/slider/lips-after.jpg",
    afterAlt: "השפתיים אחרי עיצוב בחומצה היאלורונית",
    width: 324,
    height: 405,
  },
  {
    id: "ba-botox-pair",
    kind: "pair",
    categoryId: "botox",
    categorySlug: "botox",
    categoryLabel: "בוטוקס",
    treatment: "ריכוך קמטי הבעה",
    summary: "מצח רגוע ומבט פתוח יותר, עם שמירה מלאה על ההבעה.",
    interval: "שבועיים לאחר הטיפול",
    before: "/media/slider/botox-before.jpg",
    beforeAlt: "קמטי הבעה במצח ובין הגבות לפני טיפול בבוטוקס",
    after: "/media/slider/botox-after.jpg",
    afterAlt: "מצח רגוע ומבט פתוח אחרי טיפול בבוטוקס",
    width: 348,
    height: 435,
  },
  {
    id: "ba-botox-1",
    kind: "composite",
    categoryId: "botox",
    categorySlug: "botox",
    categoryLabel: "בוטוקס",
    treatment: "ריכוך מצח וקמטי הבעה",
    summary: "מראה רגוע יותר במצח, בלי לאבד את ההבעה הטבעית.",
    interval: "שבועיים לאחר הטיפול",
    src: "/media/results/botox-1.png",
    alt: "לפני ואחרי טיפול בוטוקס במצח",
    width: 703,
    height: 649,
  },
  {
    id: "ba-anti-aging-pair",
    kind: "pair",
    categoryId: "anti-aging",
    categorySlug: "anti-aging",
    categoryLabel: "אנטי אייג׳ינג",
    treatment: "תכנית אנטי אייג׳ינג מלאה",
    summary:
      "שילוב של תמיכה מבנית, ריכוך קמטים ושיפור איכות העור לאורך חצי שנה.",
    interval: "שישה חודשים לאחר תחילת התכנית",
    before: "/media/slider/anti-aging-before.jpg",
    beforeAlt: "הפנים לפני תכנית אנטי אייג׳ינג מלאה",
    after: "/media/slider/anti-aging-after.jpg",
    afterAlt: "הפנים אחרי תכנית אנטי אייג׳ינג מלאה",
    width: 275,
    height: 344,
  },
  {
    id: "ba-nose-2",
    kind: "composite",
    categoryId: "nose",
    categorySlug: "nose",
    categoryLabel: "אף",
    treatment: "עיצוב אף ללא ניתוח",
    summary: "איזון קצה האף והגדרה נקייה יותר של קו הלסת בפרופיל.",
    interval: "מיד לאחר הטיפול",
    src: "/media/results/nose-2.png",
    alt: "לפני ואחרי עיצוב אף ללא ניתוח, מבט פרופיל",
    width: 601,
    height: 603,
  },
  {
    id: "ba-nose-3",
    kind: "composite",
    categoryId: "nose",
    categorySlug: "nose",
    categoryLabel: "אף",
    treatment: "עיצוב אף לגברים",
    summary: "ריכוך הגבנון ויישור קו הגשר, תוך שמירה על קו גברי.",
    interval: "מיד לאחר הטיפול",
    src: "/media/results/nose-3.png",
    alt: "לפני ואחרי עיצוב אף ללא ניתוח אצל מטופל",
    width: 586,
    height: 598,
  },
  {
    id: "ba-nose-4",
    kind: "composite",
    categoryId: "nose",
    categorySlug: "nose",
    categoryLabel: "אף",
    treatment: "יישור גשר האף",
    summary: "החלקת הגבנון והרמת הקצה, בלי לשנות את אופי הפנים.",
    interval: "מיד לאחר הטיפול",
    src: "/media/results/nose-4.png",
    alt: "לפני ואחרי יישור גשר האף בהזרקה",
    width: 587,
    height: 601,
  },
  {
    id: "ba-nose-5",
    kind: "composite",
    categoryId: "nose",
    categorySlug: "nose",
    categoryLabel: "אף",
    treatment: "עיצוב אף ללא ניתוח",
    summary: "הרמת קצה האף והגדרת המעבר בין האף לשפה העליונה.",
    interval: "מיד לאחר הטיפול",
    src: "/media/results/nose-5.png",
    alt: "לפני ואחרי הרמת קצה האף",
    width: 598,
    height: 600,
  },
  {
    id: "ba-lips-1",
    kind: "composite",
    categoryId: "lips",
    categorySlug: "lips",
    categoryLabel: "שפתיים",
    treatment: "עיצוב שפתיים",
    summary: "הגדרת קו המתאר והוספת נפח מדוד לשתי השפות.",
    interval: "שבועיים לאחר הטיפול",
    src: "/media/results/lips-1.png",
    alt: "לפני ואחרי עיצוב שפתיים, מבט קרוב",
    width: 598,
    height: 602,
  },
  {
    id: "ba-lips-2",
    kind: "composite",
    categoryId: "lips",
    categorySlug: "lips",
    categoryLabel: "שפתיים",
    treatment: "מילוי שפתיים עדין",
    summary: "איזון בין השפה העליונה לתחתונה, בתוספת נפח מינימלית.",
    interval: "שבועיים לאחר הטיפול",
    src: "/media/results/lips-2.png",
    alt: "לפני ואחרי מילוי שפתיים עדין",
    width: 450,
    height: 601,
  },
  {
    id: "ba-lips-3",
    kind: "composite",
    categoryId: "lips",
    categorySlug: "lips",
    categoryLabel: "שפתיים",
    treatment: "עיצוב שפתיים",
    summary: "הגדרת קשת הקופידון והרמה קלה של זוויות הפה.",
    interval: "שבועיים לאחר הטיפול",
    src: "/media/results/lips-3.png",
    alt: "לפני ואחרי עיצוב שפתיים, מבט חזיתי",
    width: 598,
    height: 601,
  },
  {
    id: "ba-lips-4",
    kind: "composite",
    categoryId: "lips",
    categorySlug: "lips",
    categoryLabel: "שפתיים",
    treatment: "בנייה מדורגת של השפתיים",
    summary: "שלושה שלבים, בשתי פגישות, עד לנפח שהתאים למטופלת.",
    interval: "לאורך שתי פגישות",
    src: "/media/results/lips-4.png",
    alt: "שלושה שלבים בבנייה מדורגת של השפתיים",
    width: 452,
    height: 601,
  },
  {
    id: "ba-lips-5",
    kind: "composite",
    categoryId: "lips",
    categorySlug: "lips",
    categoryLabel: "שפתיים",
    treatment: "עיצוב שפתיים",
    summary: "נפח עדין והגדרת מתאר, מותאם למבנה השפתיים הקיים.",
    interval: "שבועיים לאחר הטיפול",
    src: "/media/results/lips-5.png",
    alt: "לפני ואחרי עיצוב שפתיים נוסף",
    width: 656,
    height: 873,
  },
  {
    id: "ba-skin-1",
    kind: "composite",
    categoryId: "anti-aging",
    categorySlug: "anti-aging",
    categoryLabel: "אנטי אייג׳ינג",
    treatment: "הידוק קו הלסת",
    summary: "הגדרה מחודשת של קו הלסת ומעבר נקי יותר לצוואר.",
    interval: "חודשיים לאחר תחילת הסדרה",
    src: "/media/results/skin-1.png",
    alt: "לפני ואחרי הידוק קו הלסת, מבט פרופיל",
    width: 603,
    height: 601,
  },
  {
    id: "ba-skin-2",
    kind: "composite",
    categoryId: "anti-aging",
    categorySlug: "anti-aging",
    categoryLabel: "אנטי אייג׳ינג",
    treatment: "שיפור איכות העור",
    summary: "מראה רענן יותר באזור הלחיים וקו הלסת לאחר סדרת טיפולים.",
    interval: "לאחר סדרה של טיפולים",
    src: "/media/results/skin-2.png",
    alt: "לפני ואחרי שיפור איכות העור באזור הפנים",
    width: 557,
    height: 573,
  },
  {
    id: "ba-skin-3",
    kind: "composite",
    categoryId: "anti-aging",
    categorySlug: "anti-aging",
    categoryLabel: "אנטי אייג׳ינג",
    treatment: "חידוש עור הצוואר",
    summary: "שיפור במרקם ובגמישות העור באזור הצוואר וקו הלסת.",
    interval: "לאחר סדרה של שלושה טיפולים",
    src: "/media/results/skin-3.png",
    alt: "לפני ואחרי חידוש עור באזור הצוואר",
    width: 579,
    height: 602,
  },
];

export function getResultsByIds(ids: string[]): ResultItem[] {
  return ids
    .map((id) => resultItems.find((item) => item.id === id))
    .filter((item): item is ResultItem => Boolean(item));
}

/**
 * The comparison shown at the top of a treatment page and on its home-page card.
 * Every category has exactly one, so it is also the pair the results grid skips.
 */
export function getHeroPair(categoryId: string): ResultPair | undefined {
  return resultItems.find(
    (item): item is ResultPair =>
      item.kind === "pair" && item.categoryId === categoryId,
  );
}

export function getResultsByCategory(categoryId: string): ResultItem[] {
  return resultItems.filter((item) => item.categoryId === categoryId);
}

export function getResultById(id: string): ResultItem | undefined {
  return resultItems.find((item) => item.id === id);
}

export const gallerySection = {
  eyebrow: "The Clinic",
  title: "הקליניקה",
  subtitle:
    "חלל פרטי ושקט שתוכנן כדי שתרגישי בנוח — מהרגע שנכנסת ועד שיצאת.",
  editorialWord: "Sanctuary",
  lightboxLabel: "תצוגת תמונה מוגדלת",
};

export const galleryImages: GalleryImage[] = [
  {
    id: "g-treatment-room",
    src: "/media/clinic/treatment-room.png",
    alt: "חדר הטיפולים בקליניקה, עם כיסא טיפולים ותאורה רפואית",
    caption: "חדר הטיפולים",
    width: 450,
    height: 603,
  },
  {
    id: "g-lounge",
    src: "/media/clinic/lounge.png",
    alt: "פינת ההמתנה בקליניקה, עם ספה רכה ותאורת זהב",
    caption: "פינת ההמתנה",
    width: 452,
    height: 603,
  },
  {
    id: "g-injection-mapping",
    src: "/media/clinic/injection-mapping.png",
    alt: "סימון נקודות ההזרקה על פני המטופלת לפני תחילת הטיפול",
    caption: "תכנון הטיפול",
    width: 691,
    height: 687,
  },
];
