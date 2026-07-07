import type { LegalContext } from "../types";
import { formatDate } from "../utils/date";

export function PrivacyPolicyContent({ context }: { context: LegalContext }) {
  return (
    <div className="lp-prose">
      <section className="lp-section">
        <h2>כללי</h2>
        <p>
          אתר זה מופעל על ידי <strong>{context.businessName}</strong>. מדיניות פרטיות זו מסבירה
          אילו פרטים עשויים להיאסף בעת השימוש באתר, כיצד הם משמשים,
          וכיצד ניתן לפנות אלינו בנושאי פרטיות.
        </p>
        <p>
          מסמך זה נועד למטרות מידע בלבד ואינו ייעוץ משפטי.
          מומלץ לפנות לייעוץ מקצועי בעניין דרישות הגנת הפרטיות
          הרלוונטיות לעסק שלכם.
        </p>
      </section>

      <section className="lp-section">
        <h2>מידע שעשוי להיאסף</h2>
        <p>בעת יצירת קשר דרך האתר, עשויים להיאסף הפרטים הבאים:</p>
        <ul>
          <li>שם</li>
          <li>מספר טלפון</li>
          <li>כתובת דואר אלקטרוני (אם סופקה)</li>
          <li>תוכן ההודעה שנשלחה</li>
        </ul>
        {context.usesAnalytics && (
          <p>
            האתר עושה שימוש בכלי אנליטיקה (כגון Google Analytics) אשר
            עשויים לאסוף מידע טכני, כגון סוג דפדפן, סוג מכשיר ועמודים שבהם ביקרתם.
            מידע זה נאסף בצורה מצטברת ואנונימית ומשמש לשיפור חוויית המשתמש באתר.
          </p>
        )}
      </section>

      <section className="lp-section">
        <h2>מטרות השימוש במידע</h2>
        <p>המידע שנמסר משמש למטרות הבאות בלבד:</p>
        <ul>
          <li>מענה לפניות ויצירת קשר</li>
          <li>מתן השירותים שהתבקשו</li>
          <li>שיפור ופיתוח האתר</li>
          <li>משלוח עדכונים שיווקיים — בהסכמת הלקוח בלבד</li>
        </ul>
      </section>

      <section className="lp-section">
        <h2>שיתוף מידע עם גורמים שלישיים</h2>
        <p>
          אנו אינם מוכרים, מעבירים או משכירים פרטים אישיים לגורמים
          שלישיים, אלא אם נדרש על פי דין.
        </p>
        {context.usesWhatsApp && (
          <p>
            חלק מהפניות מתבצעות דרך WhatsApp (בבעלות Meta). שימוש
            ב-WhatsApp כפוף{" "}
            <a
              href="https://www.whatsapp.com/legal/privacy-policy-eea"
              target="_blank"
              rel="noopener noreferrer"
            >
              למדיניות הפרטיות של WhatsApp
            </a>
            . אנו ממליצים לעיין במדיניות זו בנפרד.
          </p>
        )}
      </section>

      <section className="lp-section">
        <h2>אבטחת מידע</h2>
        <p>
          אנו נוקטים אמצעים סבירים לשמירה על אבטחת המידע שנמסר לנו.
          יחד עם זאת, אין שיטת שידור נתונים באינטרנט שהיא מאובטחת לחלוטין.
        </p>
      </section>

      <section className="lp-section">
        <h2>שמירת מידע</h2>
        <p>
          המידע שנמסר אלינו נשמר לפרק הזמן הנדרש למתן השירות ובהתאם
          לדרישות החוק. אין אנו שומרים מידע מעבר לנדרש.
        </p>
      </section>

      <section className="lp-section">
        <h2>זכויות לפי חוק הגנת הפרטיות</h2>
        <p>
          בהתאם לחוק הגנת הפרטיות, תשמ&quot;א-1981, יש לכם זכות לעיין
          במידע השמור עליכם ולבקש את תיקונו. לכל פנייה בנושא פרטיות ניתן
          לפנות אלינו:
        </p>
        <ul>
          {context.privacyContactEmail && (
            <li>
              דואר אלקטרוני:{" "}
              <a href={`mailto:${context.privacyContactEmail}`}>
                {context.privacyContactEmail}
              </a>
            </li>
          )}
          {context.phone && <li>טלפון: {context.phone}</li>}
          {context.address && <li>כתובת: {context.address}</li>}
        </ul>
      </section>

      <section className="lp-section">
        <h2>עדכונים למדיניות זו</h2>
        <p>
          אנו שומרים את הזכות לעדכן מדיניות פרטיות זו מעת לעת. תאריך
          העדכון האחרון מופיע בתחתית עמוד זה. שימוש מתמשך באתר לאחר
          עדכון מהווה הסכמה לגרסה המעודכנת.
        </p>
      </section>

      <p className="lp-updated">עודכן לאחרונה: {formatDate(context.lastUpdated)}</p>
    </div>
  );
}
