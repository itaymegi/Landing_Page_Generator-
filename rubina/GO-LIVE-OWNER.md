# Rubina — מה נשאר לעשות (עידן ורומי)

האתר **https://myrubina.com** כבר מוכן מבחינה טכנית לגוגל.  
נשארו רק שלבים ש**רק בעלי העסק** יכולים לבצע (חשבון גוגל אישי, אימות עסק, ביקורות).

---

## ✅ כבר מוכן (לא צריך לגעת)

- דומיין מחובר ל-Vercel
- כותרות SEO, תיאור, מילות מפתח
- `robots.txt` — גוגל ו-AI מורשים לסרוק
- `sitemap.xml` — מפת האתר לגוגל
- נתונים מובנים (JSON-LD) — עסק, מוצרים, שאלות נפוצות
- תמונת שיתוף ברשתות (Open Graph)
- נגישות בסיסית (דילוג לתוכן)

---

## 1️⃣ Google Search Console (חשוב — ~15 דקות)

**מי:** עידן או רומי — בחשבון Gmail **שלכם** (לא של המפתח).

1. היכנסו ל-[Google Search Console](https://search.google.com/search-console)
2. **הוסיפו נכס** → בחרו **Domain** → הזינו: `myrubina.com`
3. **אימות:**
   - **מומלץ:** DNS — העתיקו את רשומת ה-TXT לרשם הדומיין (איפה שקניתם את myrubina.com), שמרו, המתינו 5–30 דקות, לחצו **Verify**
   - **חלופה:** HTML tag — גוגל נותנים קוד. שלחו אותו למפתח או הוסיפו ב-Vercel:
     - Settings → Environment Variables
     - שם: `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
     - ערך: הקוד בלבד (בלי `content=` או תגיות)
     - Redeploy
4. אחרי אימות → **Sitemaps** → הוסיפו: `https://myrubina.com/sitemap.xml`
5. **URL Inspection** → הדביקו `https://myrubina.com/` → **Request indexing**

**תוצאה:** גוגל מתחיל לסרוק ולהוסיף את האתר לחיפוש (בדרך כלל ימים–שבועיים).

---

## 2️⃣ Google Business Profile (חשוב לחיפוש מקומי — ~30 דקות)

**מי:** בעלי העסק בלבד.

1. [business.google.com](https://business.google.com) → צרו/תבעו **Rubina**
2. מלאו:
   - **אתר:** `https://myrubina.com`
   - **קטגוריה:** חנות מתנות / משלוחי מזון (הכי קרוב)
   - **אזור שירות:** מרכז, גוש דן
   - **איסוף:** מושב עזריה (בלי חובה לפרסם רחוב מלא)
   - **טלפון / WhatsApp:** המספר שלכם
   - **תמונות:** מהאתר או מהטלפון
3. השלימו **אימות** (SMS, דואר, או שיחה — לפי מה שגוגל מציע)

**תוצאה:** מופיעים בחיפושים כמו "מארזי גבינות מרכז" + מפות + ביקורות.

---

## 3️⃣ אינסטagram (2 דקות)

בפרופיל [@rubina.cheese](https://www.instagram.com/rubina.cheese):

- **קישור באתר:** `https://myrubina.com`
- אופציונלי: ביוג "הזמנה באתר ↓"

---

## 4️⃣ Bing (אופציונלי — 10 דקות)

1. [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. אפשר **ייבוא מ-Google Search Console** (הכי קל)
3. או HTML tag → `NEXT_PUBLIC_BING_SITE_VERIFICATION` ב-Vercel + Redeploy

---

## ⏱️ מה לצפות

| מתי | מה |
|-----|-----|
| 1–3 ימים | גוגל מתחיל לסרוק |
| 1–2 שבועות | חיפוש "Rubina myrubina" / "Rubina מארזי גבינות" |
| שבועות–חודשים | דירוג למילים תחרותיות כמו "מארזי גבינות" — תלוי בביקורות וקישורים |

---

## 📋 רשימת בדיקה

- [ ] Search Console — נכס `myrubina.com` מאומת
- [ ] Sitemap נשלח: `https://myrubina.com/sitemap.xml`
- [ ] בקשת אינדוקס לדף הבית
- [ ] Google Business Profile — נוצר ומאומת
- [ ] קישור myrubina.com באינסטagram
- [ ] (אופציונלי) Bing Webmaster

---

## 🆘 עזרה

אם משהו נתקע — שלחו צילום מסך למפתח.  
**אל תפתחו Business Profile על שם המפתח** — רק על שם Rubina / עידן ורומי.
