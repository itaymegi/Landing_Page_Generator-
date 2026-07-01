import type { LegalContext } from "../types";
import { formatDate } from "../utils/date";

export function AccessibilityStatementContent({
  context,
}: {
  context: LegalContext;
}) {
  return (
    <div className="lp-prose">
      <section className="lp-section">
        <h2>כללי</h2>
        <p>
          <strong>{context.businessName}</strong> מאמינה שכל אחד ואחת
          ראויים לגישה שווה למידע ולשירותים. האתר תוכנן תוך מאמץ לשמור
          על נגישות ושימושיות לקהל הרחב, לרבות אנשים עם מוגבלויות.
        </p>
        <p>
          נעשו מאמצים להנגיש את האתר בהתאם לתקן הנגישות הבינלאומי
          WCAG 2.1, ברמה AA. עם זאת, ייתכן שחלק מהתכנים אינם עומדים
          עדיין בכל הדרישות.
        </p>
      </section>

      <section className="lp-section">
        <h2>מאמצי נגישות שבוצעו</h2>
        <ul>
          <li>שימוש במבנה HTML סמנטי (כותרות, ניווט, אזורי עמוד מובחנים)</li>
          <li>היררכיית כותרות תקינה בכל עמוד — כותרת ראשית אחת H1 לכל עמוד</li>
          <li>טקסט חלופי (alt text) לתמונות משמעותיות; תמונות דקורטיביות מסומנות כנסתרות מקוראי מסך</li>
          <li>תוויות ARIA על כפתורים ועל אזורי ניווט</li>
          <li>ניווט מלא במקלדת, כולל אינדיקטור פוקוס ברור</li>
          <li>יחסי ניגודיות צבע מינימום 4.5:1 לטקסט רגיל</li>
          <li>תמיכה בפריסה מגיבה (Responsive) על מכשירי מובייל וטאבלט</li>
          <li>גופנים בגדל מינימום 16px לטקסט ראשי</li>
          <li>לחצנים ואזורים אינטראקטיביים בגודל מגע מינימלי של 44×44 פיקסל</li>
        </ul>
      </section>

      <section className="lp-section">
        <h2>מגבלות ידועות</h2>
        <p>
          מדי פעם מתווסף תוכן חדש לאתר ואין אנו יכולים להבטיח נגישות
          מלאה של כל תוכן בכל עת. אנו ממשיכים לשפר את הנגישות ומעדכנים
          את האתר בהתאם.
        </p>
      </section>

      <section className="lp-section">
        <h2>פנייה בנושאי נגישות</h2>
        <p>
          נתקלתם בבעיית נגישות? נשמח לשמוע ולסייע. לפניות בנושא
          נגישות:
        </p>
        <ul>
          {context.accessibilityContactName && (
            <li>שם רכז/ת הנגישות: {context.accessibilityContactName}</li>
          )}
          {context.accessibilityContactEmail && (
            <li>
              דואר אלקטרוני:{" "}
              <a href={`mailto:${context.accessibilityContactEmail}`}>
                {context.accessibilityContactEmail}
              </a>
            </li>
          )}
          {context.accessibilityContactPhone && (
            <li>טלפון: {context.accessibilityContactPhone}</li>
          )}
        </ul>
        <p>
          נשתדל להגיב תוך 5 ימי עסקים.
        </p>
      </section>

      <section className="lp-section">
        <h2>עדכוני הצהרה</h2>
        <p>
          הצהרת נגישות זו עודכנה בהתאם לתקנות שוויון זכויות לאנשים עם
          מוגבלות. אנו בוחנים ומעדכנים אותה מעת לעת בהתאם לשינויים
          באתר.
        </p>
      </section>

      <p className="lp-updated">עודכן לאחרונה: {formatDate(context.lastUpdated)}</p>
    </div>
  );
}
