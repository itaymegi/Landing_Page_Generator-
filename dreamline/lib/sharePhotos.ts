import { whatsappHref } from "@/config/site";

const MAX_UPLOAD_FILES = 3;

export type ShareOrderResult = {
  method: "share" | "whatsapp" | "whatsapp_with_upload";
  clipboardCopied: boolean;
  uploadFailed?: boolean;
};

async function copyTextToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

async function uploadPhotos(files: File[]): Promise<string[]> {
  const formData = new FormData();
  for (const file of files.slice(0, MAX_UPLOAD_FILES)) {
    formData.append("files", file);
  }

  const res = await fetch("/api/upload", {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    const body = (await res.json().catch(() => ({}))) as { error?: string };
    throw new Error(body.error ?? "Upload failed");
  }

  const data = (await res.json()) as { urls: string[] };
  return data.urls;
}

function openWhatsApp(number: string, message: string) {
  const href = whatsappHref(number, message);
  window.open(href, "_blank", "noopener,noreferrer");
}

/**
 * Delivers order + optional photos to WhatsApp.
 * 1. No photos → wa.me text link
 * 2. Photos + navigator.canShare(files) → native share sheet (phones)
 * 3. Else → upload to Vercel Blob, append URLs, open wa.me
 */
export async function shareOrderToWhatsApp(
  whatsappNumber: string,
  message: string,
  files: File[],
): Promise<ShareOrderResult> {
  if (files.length === 0) {
    openWhatsApp(whatsappNumber, message);
    return { method: "whatsapp", clipboardCopied: false };
  }

  const shareData: ShareData = {
    text: message,
    files: files.slice(0, MAX_UPLOAD_FILES),
  };

  if (typeof navigator !== "undefined" && navigator.canShare?.(shareData)) {
    let clipboardCopied = false;
    try {
      clipboardCopied = await copyTextToClipboard(message);
      await navigator.share(shareData);
      return { method: "share", clipboardCopied };
    } catch (err) {
      if (err instanceof DOMException && err.name === "AbortError") {
        throw err;
      }
      // Fall through to upload path
    }
  }

  try {
    const urls = await uploadPhotos(files);
    const messageWithPhotos =
      urls.length > 0
        ? `${message}\n\nקישורים לתמונות:\n${urls.map((url, i) => `${i + 1}. ${url}`).join("\n")}`
        : message;
    openWhatsApp(whatsappNumber, messageWithPhotos);
    return { method: "whatsapp_with_upload", clipboardCopied: false };
  } catch (err) {
    if (err instanceof DOMException && err.name === "AbortError") {
      throw err;
    }
    openWhatsApp(whatsappNumber, message);
    return { method: "whatsapp", clipboardCopied: false, uploadFailed: true };
  }
}
