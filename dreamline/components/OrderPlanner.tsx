"use client";

import { useEffect, useMemo, useState } from "react";
import {
  site,
  getPlannerPackagePrice,
  plannerPackageNeedsPhoto,
  plannerPackagesForFamily,
  isPlannerServiceFamily,
  type PlannerServiceFamily,
} from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/Section";
import { HydrationSafeButton } from "@/components/ui/HydrationSafeButton";
import { PhotoUploadField } from "@/components/ui/PhotoUploadField";
import { FormConsent } from "@landing-legal/core";
import {
  buildOrderMessage,
  computeLineItems,
  type OrderPackageRow,
} from "@/lib/orderMessage";
import { shareOrderToWhatsApp } from "@/lib/sharePhotos";
import {
  consumePlannerService,
  peekPlannerServiceFromUrl,
} from "@/lib/plannerHandoff";

const inputClass =
  "mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-base text-ink shadow-sm outline-none transition-colors placeholder:text-ink-soft/40 focus:border-terracotta focus:ring-2 focus:ring-terracotta/25";
const labelClass = "block text-sm font-medium text-ink";

type StepId = "category" | "type" | "photo" | "personalize" | "notes" | "summary";

const FAMILIES: PlannerServiceFamily[] = ["illustration", "keepsake", "giftBox", "custom"];

function WhatsAppIcon() {
  return (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function ProgressTrack({ current, total, label }: { current: number; total: number; label: string }) {
  const filled = Math.max(0, Math.min(total, current));
  return (
    <div className="mb-8" aria-label={label}>
      <p className="mb-3 text-sm font-medium text-ink-soft">{label}</p>
      <div
        className="flex gap-1.5"
        role="progressbar"
        aria-valuenow={filled}
        aria-valuemin={1}
        aria-valuemax={total}
      >
        {Array.from({ length: total }, (_, i) => (
          <span
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
              i < filled ? "bg-terracotta-deep" : "bg-black/10"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function OptionChip({
  selected,
  label,
  sublabel,
  onClick,
}: {
  selected: boolean;
  label: string;
  sublabel?: string;
  onClick: () => void;
}) {
  return (
    <HydrationSafeButton
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`flex min-h-14 w-full flex-col items-start justify-center rounded-2xl border px-4 py-3 text-start transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta ${
        selected
          ? "border-terracotta bg-terracotta/8 shadow-sm shadow-terracotta/10"
          : "border-black/10 bg-white hover:border-terracotta/40 hover:bg-ivory/80"
      }`}
    >
      <span className="text-base font-medium text-ink">{label}</span>
      {sublabel ? <span className="mt-0.5 text-sm text-terracotta-deep">{sublabel}</span> : null}
    </HydrationSafeButton>
  );
}

export function OrderPlanner() {
  const { planner, contact, brand } = site;

  const [family, setFamily] = useState<PlannerServiceFamily | null>(null);
  const [boxType, setBoxType] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const [photos, setPhotos] = useState<File[]>([]);
  const [stepIndex, setStepIndex] = useState(0);
  const [stepError, setStepError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [statusNote, setStatusNote] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const applyService = (service: PlannerServiceFamily) => {
      setFamily(service);
      const pkgs = plannerPackagesForFamily(service);
      setBoxType(pkgs.length === 1 ? pkgs[0].title : "");
      setPhotos([]);
      setStepError(null);
      setSubmitted(false);
      setStatusNote(null);
      setStepIndex(1);
    };

    const onHandoff = (event: Event) => {
      const detail = (event as CustomEvent<{ service?: string }>).detail;
      if (isPlannerServiceFamily(detail?.service)) {
        applyService(detail.service);
      }
    };

    window.addEventListener("dreamline:planner-service", onHandoff);

    const fromUrl = peekPlannerServiceFromUrl();
    const fromStorage = consumePlannerService();
    const initial = fromUrl ?? fromStorage;
    if (initial) {
      const id = window.setTimeout(() => applyService(initial), 0);
      return () => {
        window.clearTimeout(id);
        window.removeEventListener("dreamline:planner-service", onHandoff);
      };
    }

    return () => window.removeEventListener("dreamline:planner-service", onHandoff);
  }, []);

  const needsPhoto = boxType ? plannerPackageNeedsPhoto(boxType) : false;

  const steps: StepId[] = useMemo(() => {
    const list: StepId[] = ["category", "type"];
    if (needsPhoto || family === "custom") list.push("photo");
    list.push("personalize", "notes", "summary");
    return list;
  }, [needsPhoto, family]);

  const safeStepIndex = Math.min(stepIndex, steps.length - 1);
  const currentStep = steps[safeStepIndex] ?? "category";
  const stepCopy = planner.steps[currentStep];
  const progressLabel = planner.stepOfLabel
    .replace("{current}", String(safeStepIndex + 1))
    .replace("{total}", String(steps.length));

  const packagesForFamily = family ? plannerPackagesForFamily(family) : [];

  const rows: OrderPackageRow[] = useMemo(() => {
    if (!boxType) return [];
    const qty = Math.max(1, parseInt(quantity, 10) || 1);
    return [{ id: "primary", boxType, quantity: String(qty) }];
  }, [boxType, quantity]);

  const lineItems = useMemo(
    () => computeLineItems(rows, getPlannerPackagePrice),
    [rows],
  );

  const estimatedTotal = useMemo(
    () => lineItems.reduce((sum, li) => sum + (li.lineTotal ?? 0), 0),
    [lineItems],
  );

  const hasCustomItems = lineItems.some((li) => li.isCustom);
  const hasValidRows = lineItems.some((li) => !li.isCustom && li.qty >= 1);

  const message = useMemo(
    () =>
      buildOrderMessage({
        planner,
        brandName: brand.name,
        lineItems,
        name,
        date,
        notes,
        estimatedTotal,
        hasCustomItems,
        hasValidRows,
      }),
    [planner, brand.name, lineItems, name, date, notes, estimatedTotal, hasCustomItems, hasValidRows],
  );

  const validateCurrent = (): boolean => {
    setStepError(null);
    if (currentStep === "category" && !family) {
      setStepError(planner.validationCategory);
      return false;
    }
    if (currentStep === "type" && !boxType) {
      setStepError(planner.validationType);
      return false;
    }
    if (currentStep === "photo" && needsPhoto && photos.length === 0) {
      setStepError(planner.validationPhoto);
      return false;
    }
    return true;
  };

  const goNext = () => {
    if (!validateCurrent()) return;
    setStepIndex((i) => {
      const current = Math.min(i, steps.length - 1);
      return Math.min(current + 1, steps.length - 1);
    });
  };

  const goBack = () => {
    setStepError(null);
    setStepIndex((i) => Math.max(Math.min(i, steps.length - 1) - 1, 0));
  };

  const handleSubmit = async () => {
    if (!boxType) {
      setStepError(planner.validationType);
      return;
    }
    if (needsPhoto && photos.length === 0) {
      setStepError(planner.validationPhoto);
      return;
    }

    setIsSubmitting(true);
    setStatusNote(null);

    try {
      const result = await shareOrderToWhatsApp(
        contact.whatsappNumber,
        message,
        needsPhoto || photos.length > 0 ? photos : [],
      );

      setSubmitted(true);

      if (result.method === "share" && result.clipboardCopied) {
        setStatusNote(planner.clipboardCopiedNote);
      } else if (result.uploadFailed) {
        setStatusNote(planner.shareFallbackNote);
      } else if (result.method === "whatsapp_with_upload") {
        setStatusNote(planner.shareFallbackNote);
      }
    } catch (err) {
      if (err instanceof DOMException && err.name === "AbortError") {
        setStatusNote(planner.cancelledShareNote);
        setSubmitted(false);
      } else {
        setStatusNote(planner.shareFallbackNote);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="planner" className="section-py relative overflow-x-clip bg-peach/15">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 20% 0%, color-mix(in oklab, var(--blush) 30%, transparent) 0%, transparent 60%)",
        }}
      />
      <div className="container-dreamline relative mx-auto max-w-2xl">
        <Reveal>
          <SectionHeading
            eyebrow={planner.eyebrow}
            title={planner.title}
            subtitle={planner.subtitle}
            align="center"
            className="mx-auto"
          />
          <span className="rule rule-center mx-auto mt-6" aria-hidden="true" />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 rounded-2xl border border-black/5 bg-white p-5 shadow-lg shadow-ink/8 sm:p-9">
            <ProgressTrack current={safeStepIndex + 1} total={steps.length} label={progressLabel} />

            <div className="mb-6">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-terracotta-deep">
                {String(safeStepIndex + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-1 font-display text-2xl font-medium text-ink sm:text-3xl">
                {stepCopy.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft sm:text-base">{stepCopy.hint}</p>
            </div>

            {currentStep === "category" ? (
              <div className="flex flex-col gap-3">
                {FAMILIES.map((id) => (
                  <OptionChip
                    key={id}
                    selected={family === id}
                    label={planner.familyLabels[id]}
                    onClick={() => {
                      setFamily(id);
                      const pkgs = plannerPackagesForFamily(id);
                      setBoxType(pkgs.length === 1 ? pkgs[0].title : "");
                      setPhotos([]);
                      setStepError(null);
                    }}
                  />
                ))}
              </div>
            ) : null}

            {currentStep === "type" ? (
              <div className="flex flex-col gap-3">
                {packagesForFamily.map((pkg) => {
                  const priceLabel =
                    pkg.price != null
                      ? `${pkg.price.toLocaleString("he-IL")}₪`
                      : planner.customPriceNote;
                  return (
                    <OptionChip
                      key={pkg.title}
                      selected={boxType === pkg.title}
                      label={pkg.title}
                      sublabel={priceLabel}
                      onClick={() => {
                        setBoxType(pkg.title);
                        setStepError(null);
                      }}
                    />
                  );
                })}
                <div className="mt-2">
                  <label className={labelClass} htmlFor="planner-qty">
                    כמות
                  </label>
                  <input
                    id="planner-qty"
                    type="number"
                    min={1}
                    inputMode="numeric"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className={`${inputClass} max-w-[8rem]`}
                  />
                </div>
              </div>
            ) : null}

            {currentStep === "photo" ? (
              <PhotoUploadField
                files={photos}
                onChange={setPhotos}
                sectionLabel={planner.photoSectionLabel}
                sectionHint={
                  needsPhoto ? planner.photoSectionHint : "אפשר לצרף תמונה אם יש לכם רפרנס — לא חובה."
                }
                galleryLabel={planner.photoGalleryLabel}
                cameraLabel={planner.photoCameraLabel}
                maxHint={planner.photoMaxHint}
                addedLabel={planner.photoAddedLabel}
                replaceLabel={planner.photoReplaceLabel}
                removeLabel={planner.photoRemoveLabel}
                previewNote={planner.photoPreviewNote}
                required={needsPhoto}
              />
            ) : null}

            {currentStep === "personalize" ? (
              <div className="grid grid-cols-1 gap-5">
                <div>
                  <label className={labelClass} htmlFor="planner-name">
                    {planner.nameLabel}
                  </label>
                  <input
                    id="planner-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={inputClass}
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="planner-date">
                    {planner.dateLabel}
                  </label>
                  <input
                    id="planner-date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className={inputClass}
                  />
                </div>
              </div>
            ) : null}

            {currentStep === "notes" ? (
              <div>
                <label className={labelClass} htmlFor="planner-notes">
                  {planner.notesLabel}
                </label>
                <textarea
                  id="planner-notes"
                  rows={4}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className={`${inputClass} resize-none`}
                />
              </div>
            ) : null}

            {currentStep === "summary" ? (
              <div className="flex flex-col gap-4">
                <div className="rounded-xl bg-blush/35 px-5 py-4">
                  <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-terracotta-deep">
                    {planner.breakdownLabel}
                  </p>
                  <dl className="flex flex-col gap-2 text-sm">
                    <div className="flex justify-between gap-4">
                      <dt className="text-ink-soft">קטגוריה</dt>
                      <dd className="font-medium text-ink">
                        {family ? planner.familyLabels[family] : "—"}
                      </dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-ink-soft">{planner.boxTypeLabel}</dt>
                      <dd className="text-end font-medium text-ink">{boxType || "—"}</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-ink-soft">כמות</dt>
                      <dd className="font-medium text-ink">{quantity}</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-ink-soft">{planner.nameLabel}</dt>
                      <dd className="font-medium text-ink">{name || "—"}</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-ink-soft">{planner.dateLabel}</dt>
                      <dd className="font-medium text-ink">{date || "—"}</dd>
                    </div>
                    {notes ? (
                      <div className="flex flex-col gap-1">
                        <dt className="text-ink-soft">{planner.notesLabel}</dt>
                        <dd className="text-ink">{notes}</dd>
                      </div>
                    ) : null}
                    <div className="flex justify-between gap-4">
                      <dt className="text-ink-soft">תמונות</dt>
                      <dd className="font-medium text-ink">
                        {photos.length > 0 ? `${photos.length} נבחרו (תצוגה מקדימה)` : "ללא"}
                      </dd>
                    </div>
                  </dl>

                  {hasValidRows ? (
                    <>
                      <div className="my-3 border-t border-terracotta/15" aria-hidden="true" />
                      <div className="flex items-baseline justify-between gap-4">
                        <span className="text-sm font-medium text-ink">{planner.estimatedTotalLabel}</span>
                        <span className="font-display text-2xl font-medium tabular-nums text-terracotta-deep">
                          {estimatedTotal.toLocaleString("he-IL")}
                          <span className="mr-1 text-sm font-medium text-terracotta/75">₪</span>
                        </span>
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-ink-soft/70">
                        {planner.priceDisclaimer}
                      </p>
                    </>
                  ) : hasCustomItems ? (
                    <p className="mt-3 text-sm italic text-ink-soft">{planner.customPriceNote}</p>
                  ) : null}
                </div>

                {submitted && statusNote ? (
                  <p className="rounded-xl bg-blush/40 px-4 py-3 text-center text-sm leading-relaxed text-terracotta-deep">
                    {statusNote}
                  </p>
                ) : null}

                {submitted && !statusNote ? (
                  <p className="rounded-xl bg-blush/40 px-4 py-3 text-center text-sm leading-relaxed text-terracotta-deep">
                    {planner.successMessage}
                  </p>
                ) : null}

                <HydrationSafeButton
                  type="button"
                  disabled={isSubmitting}
                  onClick={() => void handleSubmit()}
                  className="inline-flex min-h-14 w-full items-center justify-center gap-2.5 rounded-full bg-terracotta-deep px-8 text-base font-medium text-white shadow-md shadow-terracotta/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-terracotta hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:opacity-60"
                >
                  <WhatsAppIcon />
                  {isSubmitting ? planner.uploadingNote : planner.submitLabel}
                </HydrationSafeButton>
                <FormConsent />
              </div>
            ) : null}

            {stepError ? (
              <p className="mt-4 text-sm text-terracotta-deep" role="alert">
                {stepError}
              </p>
            ) : null}

            {currentStep !== "summary" ? (
              <div className="mt-8 flex items-center gap-3">
                {safeStepIndex > 0 ? (
                  <HydrationSafeButton
                    type="button"
                    onClick={goBack}
                    className="inline-flex min-h-12 min-w-12 flex-1 items-center justify-center rounded-full border border-black/10 bg-white px-5 text-base font-medium text-ink transition-colors hover:bg-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta sm:flex-none sm:px-7"
                  >
                    {planner.backLabel}
                  </HydrationSafeButton>
                ) : null}
                <HydrationSafeButton
                  type="button"
                  onClick={goNext}
                  className="inline-flex min-h-12 flex-[2] items-center justify-center rounded-full bg-terracotta-deep px-6 text-base font-medium text-white shadow-md shadow-terracotta/15 transition-all duration-300 hover:bg-terracotta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta sm:flex-1"
                >
                  {planner.nextLabel}
                </HydrationSafeButton>
              </div>
            ) : safeStepIndex > 0 ? (
              <div className="mt-6">
                <HydrationSafeButton
                  type="button"
                  onClick={goBack}
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-black/10 bg-white px-5 text-base font-medium text-ink transition-colors hover:bg-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
                >
                  {planner.backLabel}
                </HydrationSafeButton>
              </div>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
