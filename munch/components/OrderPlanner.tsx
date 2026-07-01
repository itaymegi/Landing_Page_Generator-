"use client";

import { useMemo, useState } from "react";
import { site, whatsappHref } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/ui/WhatsAppButton";
import { FormConsent } from "@landing-legal/core";

const inputClass =
  "mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-base text-text shadow-sm outline-none transition-colors placeholder:text-brown/35 focus:border-gold focus:ring-2 focus:ring-gold/25";
const labelClass = "block text-sm font-medium text-brown";

export function OrderPlanner() {
  const { planner, contact } = site;

  const [name, setName] = useState("");
  const [boxType, setBoxType] = useState(planner.boxTypeOptions[0]?.value ?? "");
  const [quantity, setQuantity] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const message = useMemo(() => {
    return [
      "היי לין, הגעתי דרך דף הנחיתה.",
      "אשמח לקבל הצעת מחיר למארז.",
      `שם: ${name || "-"}`,
      `סוג מארז: ${boxType || "-"}`,
      `כמות: ${quantity || "-"}`,
      `תאריך: ${date || "-"}`,
      `הערות: ${notes || "-"}`,
    ].join("\n");
  }, [name, boxType, quantity, date, notes]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const href = whatsappHref(contact.whatsappNumber, message);
    window.open(href, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="planner" className="section-py bg-parchment">
      <div className="container-munch mx-auto max-w-2xl">
        <Reveal className="text-center">
          <p className="font-display text-sm uppercase tracking-[0.28em] text-gold-deep">
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
            className="mt-12 rounded-2xl border border-border bg-white p-6 shadow-lg shadow-brown/8 sm:p-9"
          >
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

              <div>
                <label className={labelClass} htmlFor="planner-type">
                  {planner.boxTypeLabel}
                </label>
                <select
                  id="planner-type"
                  value={boxType}
                  onChange={(e) => setBoxType(e.target.value)}
                  className={inputClass}
                >
                  {planner.boxTypeOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className={labelClass} htmlFor="planner-quantity">
                  {planner.quantityLabel}
                </label>
                <input
                  id="planner-quantity"
                  type="number"
                  min={1}
                  inputMode="numeric"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className={inputClass}
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
