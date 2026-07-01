import type { LegalContext } from "../types";
import { formatDate } from "../utils/date";

export function TermsOfUseContent({ context }: { context: LegalContext }) {
  return (
    <div className="lp-prose">
      <section className="lp-section">
        <h2>ברוכים הבאים</h2>
        <p>
          ברוכים הבאים לאתר <strong>{context.businessName}</strong>.
          השימוש באתר זה מהווה הסכמה לתנאי השימוש המפורטים להלן.
          אם אינכם מסכימים לתנאים אלה, אנא הימנעו משימוש באתר.
        </p>
      </section>

      <section className="lp-section">
        <h2>מטרת האתר</h2>
        <p>
          אתר זה משמש לצורכי הצגת המוצרים והשירותים של{" "}
          {context.businessName} ויצירת קשר לצורך הזמנות ופניות.
          האתר אינו חנות אונליין עצמאית — ההזמנות מתבצעות ישירות
          מול בעלי העסק{context.usesWhatsApp ? " דרך WhatsApp" : ""}.
        </p>
      </section>

      <section className="lp-section">
        <h2>מידע באתר</h2>
        <ul>
          <li>
            התמונות באתר הן לצורכי המחשה בלבד; המוצרים עשויים להיות
            שונים מעט בהתאם לזמינות חומרי הגלם.
          </li>
          <li>
            המחירים, הזמינות ותנאי האספקה עשויים להשתנות מעת לעת ללא
            הודעה מוקדמת.
          </li>
          {context.deliveryAreas && (
            <li>
              אזורי הפעילות: {context.deliveryAreas}. פרטים מדויקים
              ייאמרו בעת ההזמנה.
            </li>
          )}
          <li>
            אנו שומרים את הזכות לעדכן, לשנות או להסיר תכנים מהאתר
            בכל עת.
          </li>
        </ul>
      </section>

      <section className="lp-section">
        <h2>ביצוע הזמנות</h2>
        <p>
          הזמנות מתבצעות ישירות מול הצוות שלנו.
          {context.usesWhatsApp
            ? " לחיצה על כפתורי ההזמנה תפנה אתכם לאפליקציית WhatsApp."
            : ""}
          {" "}הזמנה תיחשב כמאושרת רק לאחר אישור מפורש מצד הצוות.
        </p>
        <p>
          אנו עושים כמיטב יכולתנו לעמוד במועדי האספקה שנקבעו, אך
          תנאים חיצוניים (מזג אוויר, אספקה וכו') עשויים להשפיע על
          המועדים.
        </p>
      </section>

      <section className="lp-section">
        <h2>קניין רוחני</h2>
        <p>
          כל התכנים באתר — לרבות טקסטים, תמונות, לוגואים ועיצובים —
          הם רכושו של {context.businessName} או ניתנו לשימוש בהסכמה.
          אין להשתמש בהם ללא אישור מפורש בכתב.
        </p>
      </section>

      <section className="lp-section">
        <h2>הגבלת אחריות</h2>
        <p>
          {context.businessName} אינה אחראית לנזקים ישירים, עקיפים,
          מקריים או תוצאתיים הנובעים משימוש באתר זה. המידע מסופק
          &quot;כפי שהוא&quot; ללא אחריות מכל סוג שהוא.
        </p>
      </section>

      <section className="lp-section">
        <h2>שינויים בתנאי השימוש</h2>
        <p>
          אנו שומרים את הזכות לעדכן תנאים אלה מעת לעת. המשך השימוש
          באתר לאחר פרסום שינויים מהווה הסכמה לתנאים המעודכנים.
        </p>
      </section>

      <section className="lp-section">
        <h2>יצירת קשר</h2>
        <p>לכל שאלה בנושא תנאי השימוש ניתן לפנות אלינו:</p>
        <ul>
          {context.email && (
            <li>
              דואר אלקטרוני:{" "}
              <a href={`mailto:${context.email}`}>{context.email}</a>
            </li>
          )}
          {context.phone && <li>טלפון: {context.phone}</li>}
          {context.address && <li>כתובת: {context.address}</li>}
        </ul>
      </section>

      <section className="lp-section">
        <h2>דין חל</h2>
        <p>
          תנאי שימוש אלה כפופים לדיני מדינת ישראל. סמכות שיפוט
          ייחודית תהא לבתי המשפט המוסמכים בישראל.
        </p>
      </section>

      <p className="lp-updated">עודכן לאחרונה: {formatDate(context.lastUpdated)}</p>
    </div>
  );
}
