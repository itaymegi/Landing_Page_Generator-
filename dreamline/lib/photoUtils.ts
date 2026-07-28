export const MAX_PHOTOS = 3;
export const MAX_PHOTO_BYTES = 10 * 1024 * 1024;

const ALLOWED_TYPES = new Set([
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "image/heic",
  "image/heif",
]);

const EXT_RE = /\.(jpe?g|png|webp|heic|heif)$/i;

export function isAllowedPhotoType(type: string): boolean {
  return ALLOWED_TYPES.has(type.toLowerCase());
}

export type PhotoValidationError = "type" | "size" | "max";

export function validatePhotoFile(file: File): PhotoValidationError | null {
  const type = file.type.toLowerCase();
  const extOk = EXT_RE.test(file.name);

  // Mobile HEIC / some cameras send empty MIME — accept by extension or generic image/*
  if (type) {
    if (!isAllowedPhotoType(type) && !type.startsWith("image/")) return "type";
  } else if (!extOk) {
    return "type";
  }

  if (file.size > MAX_PHOTO_BYTES) return "size";
  return null;
}

/** Best-effort downscale for share/upload; returns original on failure (e.g. HEIC). */
export async function preparePhotoFile(file: File, maxEdge = 2000): Promise<File> {
  if (!file.type.startsWith("image/") || file.type.includes("heic") || file.type.includes("heif")) {
    return file;
  }

  try {
    const bitmap = await createImageBitmap(file);
    const scale = Math.min(1, maxEdge / Math.max(bitmap.width, bitmap.height));
    if (scale >= 1) {
      bitmap.close();
      return file;
    }

    const canvas = document.createElement("canvas");
    canvas.width = Math.round(bitmap.width * scale);
    canvas.height = Math.round(bitmap.height * scale);
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      bitmap.close();
      return file;
    }
    ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    bitmap.close();

    const blob = await new Promise<Blob | null>((resolve) =>
      canvas.toBlob(resolve, "image/jpeg", 0.88),
    );
    if (!blob) return file;

    const baseName = file.name.replace(/\.[^.]+$/, "") || "photo";
    return new File([blob], `${baseName}.jpg`, { type: "image/jpeg", lastModified: Date.now() });
  } catch {
    return file;
  }
}
