"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { HydrationSafeButton } from "@/components/ui/HydrationSafeButton";
import {
  MAX_PHOTOS,
  MAX_PHOTO_BYTES,
  preparePhotoFile,
  validatePhotoFile,
} from "@/lib/photoUtils";

type PhotoUploadFieldProps = {
  files: File[];
  onChange: (files: File[]) => void;
  sectionLabel: string;
  sectionHint: string;
  galleryLabel: string;
  cameraLabel: string;
  maxHint: string;
  addedLabel?: string;
  replaceLabel?: string;
  removeLabel?: string;
  previewNote?: string;
  required?: boolean;
};

type PhotoEntry = {
  id: string;
  file: File;
  previewUrl: string;
};

let entryCounter = 0;

function errorMessage(code: ReturnType<typeof validatePhotoFile>): string | null {
  if (!code) return null;
  if (code === "type") return "סוג קובץ לא נתמך. ניתן לצרף JPG, PNG, WEBP או HEIC.";
  if (code === "size") return `הקובץ גדול מדי. מקסימום ${MAX_PHOTO_BYTES / (1024 * 1024)}MB.`;
  if (code === "max") return `ניתן לצרף עד ${MAX_PHOTOS} תמונות.`;
  return null;
}

export function PhotoUploadField({
  onChange,
  sectionLabel,
  sectionHint,
  galleryLabel,
  cameraLabel,
  maxHint,
  addedLabel = "התמונה נוספה",
  replaceLabel = "החלפת תמונה",
  removeLabel = "הסרה",
  previewNote = "תצוגה מקדימה במכשיר — התמונה תישלח עם ההזמנה.",
  required = false,
}: PhotoUploadFieldProps) {
  const [entries, setEntries] = useState<PhotoEntry[]>([]);
  const [error, setError] = useState<string | null>(null);
  const galleryRef = useRef<HTMLInputElement>(null);
  const cameraRef = useRef<HTMLInputElement>(null);
  const replaceTargetRef = useRef<string | null>(null);
  const onChangeRef = useRef(onChange);
  const entriesRef = useRef(entries);

  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  useEffect(() => {
    entriesRef.current = entries;
    onChangeRef.current(entries.map((e) => e.file));
  }, [entries]);

  useEffect(() => {
    return () => {
      for (const entry of entriesRef.current) {
        URL.revokeObjectURL(entry.previewUrl);
      }
    };
  }, []);

  const addFiles = useCallback(async (incoming: FileList | null, replaceId?: string | null) => {
    if (!incoming?.length) return;
    setError(null);

    const preparedList: PhotoEntry[] = [];
    for (const raw of Array.from(incoming)) {
      const prepared = await preparePhotoFile(raw);
      const validation = validatePhotoFile(prepared);
      if (validation) {
        setError(errorMessage(validation));
        continue;
      }
      preparedList.push({
        id: String(++entryCounter),
        file: prepared,
        previewUrl: URL.createObjectURL(prepared),
      });
    }

    if (preparedList.length === 0) return;

    setEntries((prev) => {
      if (replaceId) {
        const target = prev.find((e) => e.id === replaceId);
        if (target) URL.revokeObjectURL(target.previewUrl);
        const replacement = preparedList[0];
        const without = prev.filter((e) => e.id !== replaceId);
        return [...without, replacement];
      }

      const room = MAX_PHOTOS - prev.length;
      if (room <= 0) {
        setError(errorMessage("max"));
        for (const entry of preparedList) URL.revokeObjectURL(entry.previewUrl);
        return prev;
      }

      const accepted = preparedList.slice(0, room);
      const rejected = preparedList.slice(room);
      for (const entry of rejected) URL.revokeObjectURL(entry.previewUrl);
      if (rejected.length > 0) setError(errorMessage("max"));
      return [...prev, ...accepted];
    });
  }, []);

  const removeEntry = useCallback((id: string) => {
    setEntries((prev) => {
      const target = prev.find((e) => e.id === id);
      if (target) URL.revokeObjectURL(target.previewUrl);
      return prev.filter((e) => e.id !== id);
    });
  }, []);

  const openGallery = (replaceId?: string) => {
    replaceTargetRef.current = replaceId ?? null;
    galleryRef.current?.click();
  };

  const openCamera = () => {
    replaceTargetRef.current = null;
    cameraRef.current?.click();
  };

  const canAddMore = entries.length < MAX_PHOTOS;

  return (
    <fieldset className="border-0 p-0">
      <legend className="mb-2 block text-sm font-medium text-ink">
        {sectionLabel}
        {required ? <span className="text-terracotta-deep"> *</span> : null}
      </legend>
      <p className="mb-3 text-sm leading-relaxed text-ink-soft">{sectionHint}</p>
      <p className="mb-4 text-xs text-ink-soft/80">{maxHint}</p>

      {entries.length === 0 ? (
        <div className="flex flex-col gap-3 sm:flex-row">
          <HydrationSafeButton
            type="button"
            onClick={() => openGallery()}
            className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-2xl border border-dashed border-terracotta/40 bg-ivory/80 px-4 text-sm font-medium text-terracotta-deep transition-colors hover:border-terracotta hover:bg-terracotta/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
          >
            {galleryLabel}
          </HydrationSafeButton>
          <HydrationSafeButton
            type="button"
            onClick={openCamera}
            className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-2xl border border-dashed border-terracotta/40 bg-ivory/80 px-4 text-sm font-medium text-terracotta-deep transition-colors hover:border-terracotta hover:bg-terracotta/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
          >
            {cameraLabel}
          </HydrationSafeButton>
        </div>
      ) : null}

      <input
        ref={galleryRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/heic,image/heif,image/*"
        multiple
        className="sr-only"
        onChange={(e) => {
          void addFiles(e.target.files, replaceTargetRef.current);
          replaceTargetRef.current = null;
          e.target.value = "";
        }}
      />
      <input
        ref={cameraRef}
        type="file"
        accept="image/*"
        capture="environment"
        className="sr-only"
        onChange={(e) => {
          void addFiles(e.target.files, null);
          e.target.value = "";
        }}
      />

      {error ? (
        <p className="mt-3 text-sm text-terracotta-deep" role="alert">
          {error}
        </p>
      ) : null}

      {entries.length > 0 ? (
        <ul className="mt-2 flex flex-col gap-4">
          {entries.map((entry) => (
            <li
              key={entry.id}
              className="overflow-hidden rounded-2xl border border-black/5 bg-ivory/70 p-3 sm:p-4"
            >
              <div className="flex gap-3 sm:gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={entry.previewUrl}
                  alt=""
                  className="h-24 w-24 shrink-0 rounded-xl object-cover ring-1 ring-black/10 sm:h-28 sm:w-28"
                />
                <div className="flex min-w-0 flex-1 flex-col justify-center gap-2">
                  <p className="flex items-center gap-1.5 text-sm font-medium text-terracotta-deep">
                    <span aria-hidden="true">✓</span>
                    {addedLabel}
                  </p>
                  <p className="text-xs leading-relaxed text-ink-soft">{previewNote}</p>
                  <div className="mt-1 flex flex-wrap gap-2">
                    <HydrationSafeButton
                      type="button"
                      onClick={() => openGallery(entry.id)}
                      className="inline-flex min-h-11 items-center justify-center rounded-full border border-terracotta/40 px-4 text-sm font-medium text-terracotta-deep transition-colors hover:bg-terracotta/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
                    >
                      {replaceLabel}
                    </HydrationSafeButton>
                    <HydrationSafeButton
                      type="button"
                      onClick={() => removeEntry(entry.id)}
                      className="inline-flex min-h-11 items-center justify-center rounded-full px-4 text-sm font-medium text-ink-soft transition-colors hover:bg-blush/50 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
                    >
                      {removeLabel}
                    </HydrationSafeButton>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : null}

      {entries.length > 0 && canAddMore ? (
        <HydrationSafeButton
          type="button"
          onClick={() => openGallery()}
          className="mt-4 inline-flex min-h-11 w-full items-center justify-center rounded-xl border border-dashed border-terracotta/35 text-sm font-medium text-terracotta-deep transition-colors hover:bg-terracotta/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
        >
          {galleryLabel}
        </HydrationSafeButton>
      ) : null}
    </fieldset>
  );
}
