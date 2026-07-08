"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  buildEventPlannerMessage,
  site,
} from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { FormConsent } from "@landing-legal/core";

type FormData = {
  eventType: string;
  guestCount: string;
  date: string;
  notes: string;
};

const initialForm: FormData = {
  eventType: "",
  guestCount: "",
  date: "",
  notes: "",
};

export function EventPlanner() {
  const { eventPlanner } = site;
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.eventType) return;
    setSubmitted(true);
  };

  const whatsappMessage = buildEventPlannerMessage(form);

  return (
    <section id="planner" className="section-py bg-background">
      <div className="container-dflowers mx-auto max-w-2xl">
        <Reveal>
          <h2 className="font-serif text-3xl font-light tracking-wide text-text sm:text-4xl">
            {eventPlanner.title}
          </h2>
          <span className="rule-gold mt-5" aria-hidden="true" />
          <p className="mt-4 text-base text-text-muted sm:text-lg">
            {eventPlanner.subtitle}
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 rounded-sm border border-border bg-card p-6 sm:mt-12 sm:p-8 card-shadow">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <fieldset>
                    <legend className="mb-3 text-sm font-medium text-text">
                      סוג אירוע
                    </legend>
                    <div className="flex flex-wrap gap-2">
                      {eventPlanner.eventTypes.map((type) => (
                        <label
                          key={type.value}
                          className={`cursor-pointer rounded-sm border px-4 py-2.5 text-sm transition-all ${
                            form.eventType === type.value
                              ? "border-accent bg-accent/10 text-accent-deep"
                              : "border-border bg-background text-text-muted hover:border-accent/40"
                          }`}
                        >
                          <input
                            type="radio"
                            name="eventType"
                            value={type.value}
                            checked={form.eventType === type.value}
                            onChange={(e) =>
                              setForm({ ...form, eventType: e.target.value })
                            }
                            className="sr-only"
                          />
                          {type.label}
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-2 block text-sm font-medium text-text">
                        {eventPlanner.guestCountLabel}
                      </span>
                      <input
                        type="number"
                        min="1"
                        value={form.guestCount}
                        onChange={(e) =>
                          setForm({ ...form, guestCount: e.target.value })
                        }
                        className="w-full rounded-sm border border-border bg-background px-4 py-3 text-base text-text outline-none transition-colors focus:border-accent"
                        placeholder="לדוגמה: 80"
                      />
                    </label>

                    <label className="block">
                      <span className="mb-2 block text-sm font-medium text-text">
                        {eventPlanner.dateLabel}
                      </span>
                      <input
                        type="date"
                        value={form.date}
                        onChange={(e) =>
                          setForm({ ...form, date: e.target.value })
                        }
                        className="w-full rounded-sm border border-border bg-background px-4 py-3 text-base text-text outline-none transition-colors focus:border-accent"
                      />
                    </label>
                  </div>

                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-text">
                      {eventPlanner.notesLabel}
                    </span>
                    <textarea
                      rows={3}
                      value={form.notes}
                      onChange={(e) =>
                        setForm({ ...form, notes: e.target.value })
                      }
                      className="w-full resize-none rounded-sm border border-border bg-background px-4 py-3 text-base text-text outline-none transition-colors focus:border-accent"
                      placeholder="ספרו לנו על החזון, המיקום והסגנון..."
                    />
                  </label>

                  <button
                    type="submit"
                    disabled={!form.eventType}
                    className="w-full min-h-12 rounded-sm bg-text px-6 py-3 text-base font-medium text-white transition-all hover:bg-text/90 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {eventPlanner.submitLabel}
                  </button>
                  <FormConsent />
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6 text-center"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-2xl text-accent-deep">
                    ✓
                  </div>
                  <p className="text-lg leading-relaxed text-text">
                    {eventPlanner.successMessage}
                  </p>
                  <WhatsAppButton
                    label={eventPlanner.whatsappCtaLabel}
                    message={whatsappMessage}
                    size="lg"
                    fullWidth
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setForm(initialForm);
                    }}
                    className="text-sm text-text-muted underline-offset-2 hover:text-accent hover:underline"
                  >
                    עריכת הפרטים
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
