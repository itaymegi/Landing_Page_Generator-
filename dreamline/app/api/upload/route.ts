import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const MAX_FILES = 3;
const MAX_BYTES = 10 * 1024 * 1024;

const ALLOWED_TYPES = new Set([
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "image/heic",
  "image/heif",
]);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const files = formData.getAll("files").filter((f): f is File => f instanceof File);

    if (files.length === 0) {
      return NextResponse.json({ error: "לא נשלחו קבצים" }, { status: 400 });
    }

    if (files.length > MAX_FILES) {
      return NextResponse.json({ error: `ניתן להעלות עד ${MAX_FILES} תמונות` }, { status: 400 });
    }

    for (const file of files) {
      if (!ALLOWED_TYPES.has(file.type.toLowerCase())) {
        return NextResponse.json({ error: "סוג קובץ לא נתמך" }, { status: 400 });
      }
      if (file.size > MAX_BYTES) {
        return NextResponse.json({ error: "קובץ גדול מדי" }, { status: 400 });
      }
    }

    const urls: string[] = [];
    for (const file of files) {
      const blob = await put(`orders/${file.name}`, file, {
        access: "public",
        addRandomSuffix: true,
      });
      urls.push(blob.url);
    }

    return NextResponse.json({ urls });
  } catch (err) {
    console.error("[upload]", err);
    return NextResponse.json({ error: "שגיאה בהעלאת התמונות" }, { status: 500 });
  }
}
