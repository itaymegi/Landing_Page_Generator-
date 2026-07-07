"use client";

import { useMemo, useState } from "react";
import { site, whatsappHref } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/ui/WhatsAppButton";
import { FormConsent } from "@landing-legal/core";

const inputClass =
  "mt-2 w-full rounded-xl border border-cream bg-white px-4 py-3 text-base text-brown shadow-sm outline-none transition-colors placeholder:text-brown/35 focus:border-gold focus:ring-2 focus:ring-gold/25";
const labelClass = "block text-sm font-medium text-brown";

type ServiceRow = { id: string; boxType: string };

let _rowCounter = 0;
function newRow(defaultType: string): ServiceRow {
  return { id: String(++_rowCounter), boxType: defaultType };
}

export function OrderPlanner() {
  const { planner, contact } = site;

  const firstOption = planner.boxTypeOptions[0]?.value ?? "";

  const [rows, setRows] = useState<ServiceRow[]>([newRow(firstOption)]);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const addRow = () => setRows((prev) => [...prev, newRow(firstOption)]);

  const removeRow = (id: string) =>
    setRows((prev) => prev.filter((r) => r.id !== id));

  const updateRow = (id: string, boxType: string) =>
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, boxType } : r)));

  const selectedServices = useMemo(
    () => rows.map((row) => row.boxType).filter(Boolean),
    [rows],
  );

  const message = useMemo(() => {
    const parts = [
      `היי ${site.brand.name}! הגעתי דרך דף הנחיתה.`,
      "אשמח לקבל פרטים והצעת מחיר לעמדות לאירוע.",
      `שם: ${name || "-"}`,
      "השירותים שמעניינים אותי:",
      ...selectedServices.map((service) => `- ${service}`),
      `תאריך: ${date || "-"}`,
      `הערות: ${notes || "-"}`,
    ];

    return parts.join("\n");
  }, [selectedServices, name, date, notes]);

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
            <fieldset className="mb-6 border-0 p-0">
              <legend className={`${labelClass} mb-3`}>
                {planner.calculatorLabel}
              </legend>

              <div className="flex flex-col gap-3">
                {rows.map((row, idx) => (
                  <div key={row.id} className="flex items-end gap-3">
                    <div className="flex-1">
                      {idx === 0 && (
                        <label className="mb-1 block text-xs text-brown/50">
                          {planner.boxTypeLabel}
                        </label>
                      )}
                      <select
                        value={row.boxType}
                        onChange={(e) => updateRow(row.id, e.target.value)}
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

            {selectedServices.length > 0 && (
              <div className="mb-6 rounded-xl bg-gold/8 px-5 py-4">
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-gold-deep">
                  {planner.breakdownLabel}
                </p>
                <ul className="flex flex-col gap-1.5 text-sm text-brown/75">
                  {selectedServices.map((service, idx) => (
                    <li key={`${service}-${idx}`}>• {service}</li>
                  ))}
                </ul>
              </div>
            )}

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
