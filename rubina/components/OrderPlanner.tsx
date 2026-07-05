"use client";

import { useMemo, useState } from "react";
import { site, whatsappHref, getProductPrice } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/ui/WhatsAppButton";
import { FormConsent } from "@landing-legal/core";

const inputClass =
  "mt-2 w-full rounded-xl border border-cream bg-white px-4 py-3 text-base text-brown shadow-sm outline-none transition-colors placeholder:text-brown/35 focus:border-gold focus:ring-2 focus:ring-gold/25";
const labelClass = "block text-sm font-medium text-brown";

type PackageRow = { id: string; boxType: string; quantity: string };

let _rowCounter = 0;
function newRow(defaultType: string): PackageRow {
  return { id: String(++_rowCounter), boxType: defaultType, quantity: "1" };
}

export function OrderPlanner() {
  const { planner, contact } = site;

  const firstOption = planner.boxTypeOptions[0]?.value ?? "";

  const [rows, setRows] = useState<PackageRow[]>([newRow(firstOption)]);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const addRow = () =>
    setRows((prev) => [...prev, newRow(firstOption)]);

  const removeRow = (id: string) =>
    setRows((prev) => prev.filter((r) => r.id !== id));

  const updateRow = (id: string, patch: Partial<PackageRow>) =>
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, ...patch } : r)));

  const lineItems = useMemo(() => {
    return rows.map((row) => {
      const qty = parseInt(row.quantity, 10);
      const unitPrice = getProductPrice(row.boxType);
      const isCustom = unitPrice == null;
      const lineTotal = !isCustom && qty >= 1 ? unitPrice * qty : undefined;
      return { ...row, qty, unitPrice, isCustom, lineTotal };
    });
  }, [rows]);

  const estimatedTotal = useMemo(
    () => lineItems.reduce((sum, li) => sum + (li.lineTotal ?? 0), 0),
    [lineItems],
  );

  const hasCustomItems = lineItems.some((li) => li.isCustom);
  const hasValidRows = lineItems.some((li) => !li.isCustom && (li.qty ?? 0) >= 1);

  const message = useMemo(() => {
    const breakdownLines = lineItems.map((li) => {
      if (li.isCustom) {
        return `- ${li.qty >= 1 ? li.qty + " × " : ""}${li.boxType} — ${planner.customPriceNote}`;
      }
      return `- ${li.qty} × ${li.boxType} — ${(li.lineTotal ?? 0).toLocaleString("he-IL")}₪`;
    });

    const parts = [
      "היי רובינה! הגעתי דרך דף הנחיתה.",
      "אשמח לקבל פרטים והצעת מחיר למארז.",
      `שם: ${name || "-"}`,
      "פירוט מארזים:",
      ...breakdownLines,
      hasCustomItems ? "* כולל מארזים לפי הצעת מחיר" : null,
      hasValidRows ? `סה״כ משוער: ${estimatedTotal.toLocaleString("he-IL")}₪` : null,
      `תאריך: ${date || "-"}`,
      `הערות: ${notes || "-"}`,
    ].filter(Boolean);

    return parts.join("\n");
  }, [lineItems, name, date, notes, hasCustomItems, hasValidRows, estimatedTotal, planner.customPriceNote]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const href = whatsappHref(contact.whatsappNumber, message);
    window.open(href, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="planner" className="section-py bg-cream/30">
      <div className="container-rubina mx-auto max-w-2xl">
        <Reveal className="text-center">
          <p className="text-sm uppercase tracking-[0.28em] text-gold-deep">
            {planner.eyebrow}
          </p>
          <h2 className="mt-3 font-serif text-3xl font-light tracking-wide text-brown sm:text-4xl">
            {planner.title}
          </h2>
          <span className="rule-gold rule-gold-center mt-6" aria-hidden="true" />
          <p className="mt-6 text-base leading-relaxed text-brown/60 sm:text-lg">
            {planner.subtitle}
          </p>
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={handleSubmit}
            className="mt-12 rounded-2xl border border-cream bg-white p-6 shadow-lg shadow-brown/8 sm:p-9"
          >
            {/* Package rows */}
            <fieldset className="mb-6 border-0 p-0">
              <legend className={`${labelClass} mb-3`}>
                {planner.calculatorLabel}
              </legend>

              <div className="flex flex-col gap-3">
                {rows.map((row, idx) => (
                  <div
                    key={row.id}
                    className="flex items-end gap-3"
                  >
                    <div className="flex-1">
                      {idx === 0 && (
                        <label className="mb-1 block text-xs text-brown/50">
                          {planner.boxTypeLabel}
                        </label>
                      )}
                      <select
                        value={row.boxType}
                        onChange={(e) =>
                          updateRow(row.id, { boxType: e.target.value })
                        }
                        className="w-full rounded-xl border border-cream bg-white px-4 py-3 text-base text-brown shadow-sm outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/25"
                        aria-label={planner.boxTypeLabel}
                      >
                        {planner.boxTypeOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="w-24 shrink-0">
                      {idx === 0 && (
                        <label className="mb-1 block text-xs text-brown/50">
                          כמות
                        </label>
                      )}
                      <input
                        type="number"
                        min={1}
                        inputMode="numeric"
                        value={row.quantity}
                        onChange={(e) =>
                          updateRow(row.id, { quantity: e.target.value })
                        }
                        className="w-full rounded-xl border border-cream bg-white px-4 py-3 text-center text-base text-brown shadow-sm outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/25"
                        aria-label="כמות"
                      />
                    </div>

                    {rows.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeRow(row.id)}
                        className="mb-[3px] shrink-0 rounded-lg px-3 py-3 text-sm text-brown/40 transition-colors hover:bg-cream/60 hover:text-brown/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                        aria-label={`${planner.removePackageLabel} שורה ${idx + 1}`}
                      >
                        {planner.removePackageLabel}
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={addRow}
                className="mt-4 inline-flex items-center gap-1.5 rounded-lg border border-dashed border-gold/40 px-4 py-2 text-sm text-gold-deep transition-colors hover:border-gold hover:bg-gold/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                {planner.addPackageLabel}
              </button>
            </fieldset>

            {/* Live breakdown panel */}
            {(hasValidRows || hasCustomItems) && (
              <div className="mb-6 rounded-xl bg-gold/8 px-5 py-4">
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-gold-deep">
                  {planner.breakdownLabel}
                </p>

                <div className="flex flex-col gap-1.5">
                  {lineItems.map((li) => (
                    <div key={li.id} className="flex items-baseline justify-between gap-4 text-sm">
                      <span className="text-brown/70">
                        {li.qty >= 1 ? `${li.qty} × ` : ""}{li.boxType}
                      </span>
                      {li.isCustom ? (
                        <span className="text-brown/50 italic">{planner.customPriceNote}</span>
                      ) : (
                        <span className="font-serif font-light tabular-nums text-gold-deep">
                          {(li.lineTotal ?? 0).toLocaleString("he-IL")}
                          <span className="mr-0.5 text-xs text-gold/75">₪</span>
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {hasValidRows && (
                  <>
                    <div className="my-3 border-t border-gold/20" aria-hidden="true" />
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-sm font-medium text-brown">
                        {planner.estimatedTotalLabel}
                      </span>
                      <span
                        className="font-serif text-2xl font-light tabular-nums text-gold-deep"
                        aria-label={`${planner.estimatedTotalLabel}: ${estimatedTotal.toLocaleString("he-IL")} שקלים`}
                      >
                        {estimatedTotal.toLocaleString("he-IL")}
                        <span className="mr-1 text-sm font-medium text-gold/75">₪</span>
                      </span>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-brown/45">
                      {planner.priceDisclaimer}
                    </p>
                  </>
                )}
              </div>
            )}

            {/* Name, date, notes */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
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

              <div className="sm:col-span-2">
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

              <div className="sm:col-span-2">
                <label className={labelClass} htmlFor="planner-notes">
                  {planner.notesLabel}
                </label>
                <textarea
                  id="planner-notes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className={`${inputClass} resize-none`}
                />
              </div>
            </div>

            {submitted ? (
              <p className="mt-6 rounded-xl bg-gold/12 px-4 py-3 text-center text-sm leading-relaxed text-gold-deep">
                {planner.successMessage}
              </p>
            ) : null}

            <button
              type="submit"
              className="mt-7 inline-flex min-h-14 w-full items-center justify-center gap-2.5 rounded-full bg-gold px-8 text-base font-medium text-white shadow-md shadow-gold/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-deep hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              <WhatsAppIcon />
              {planner.submitLabel}
            </button>
            <FormConsent />
          </form>
        </Reveal>
      </div>
    </section>
  );
}
