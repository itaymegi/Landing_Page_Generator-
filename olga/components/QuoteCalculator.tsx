"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  buildQuoteMessage,
  calculateQuoteRange,
  formatPriceRange,
  site,
  siteWhatsAppHref,
} from "@/config/site";
import {
  chuppahOptions,
  createEmptyTableGroup,
  designLevelLabels,
  extraOptions,
  tableShapeLabels,
  type ChuppahOption,
  type DesignLevel,
  type ExtraId,
  type QuoteSelection,
  type TableGroup,
  type TableShape,
} from "@/config/pricing";
import { Reveal } from "@/components/ui/Reveal";
import { PremiumSection } from "@/components/ui/PremiumSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { LuxuryCard } from "@/components/ui/LuxuryCard";
import { FormConsent } from "@landing-legal/core";

const TOTAL_STEPS = 5;

const stepVariants = {
  enter: { opacity: 0, x: 24 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -24 },
};

function StepProgress({
  current,
  labels,
}: {
  current: number;
  labels: string[];
}) {
  return (
    <div className="mb-8">
      <div className="mb-3 flex items-center justify-between text-xs text-text-muted">
        <span>
          שלב {current + 1} מתוך {TOTAL_STEPS}
        </span>
        <span>{labels[current]}</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-border">
        <motion.div
          className="h-full rounded-full bg-gradient-to-l from-accent to-sage"
          animate={{ width: `${((current + 1) / TOTAL_STEPS) * 100}%` }}
          transition={{ duration: 0.4 }}
        />
      </div>
      <div className="mt-3 hidden gap-2 sm:flex">
        {labels.map((label, i) => (
          <span
            key={label}
            className={`rounded-full px-3 py-1 text-xs ${
              i <= current
                ? "bg-accent/15 text-accent-deep"
                : "bg-background-beige text-text-muted"
            }`}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

function OptionCard({
  selected,
  onClick,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-2xl border px-4 py-4 text-start text-sm transition-all ${
        selected
          ? "border-accent-deep bg-accent/10 text-text shadow-[0_4px_16px_rgba(196,168,130,0.15)]"
          : "border-border bg-background-white text-text-muted hover:border-accent/40"
      }`}
    >
      {children}
    </button>
  );
}

function TableGroupEditor({
  group,
  onChange,
  onRemove,
  canRemove,
}: {
  group: TableGroup;
  onChange: (g: TableGroup) => void;
  onRemove: () => void;
  canRemove: boolean;
}) {
  return (
    <div className="rounded-2xl border border-border/80 bg-background-warm/60 p-4 sm:p-5">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm font-medium text-text">קבוצת שולחנות</span>
        {canRemove ? (
          <button
            type="button"
            onClick={onRemove}
            className="text-xs text-text-muted hover:text-floral"
          >
            הסרה
          </button>
        ) : null}
      </div>

      <div className="space-y-4">
        <fieldset>
          <legend className="mb-2 text-xs text-text-muted">סוג שולחן</legend>
          <div className="grid gap-2 sm:grid-cols-3">
            {(Object.keys(tableShapeLabels) as TableShape[]).map((shape) => (
              <OptionCard
                key={shape}
                selected={group.shape === shape}
                onClick={() => onChange({ ...group, shape })}
              >
                {tableShapeLabels[shape]}
              </OptionCard>
            ))}
          </div>
        </fieldset>

        <label className="block">
          <span className="mb-2 block text-xs text-text-muted">כמות</span>
          <input
            type="number"
            min={0}
            max={999}
            className="w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm"
            value={group.quantity}
            onChange={(e) =>
              onChange({
                ...group,
                quantity: Math.max(0, parseInt(e.target.value, 10) || 0),
              })
            }
          />
        </label>

        <fieldset>
          <legend className="mb-2 text-xs text-text-muted">רמת עיצוב</legend>
          <div className="grid gap-2 sm:grid-cols-2">
            {(Object.keys(designLevelLabels) as DesignLevel[]).map((level) => (
              <OptionCard
                key={level}
                selected={group.level === level}
                onClick={() => onChange({ ...group, level })}
              >
                {designLevelLabels[level]}
              </OptionCard>
            ))}
          </div>
        </fieldset>
      </div>
    </div>
  );
}

export function QuoteCalculator() {
  const { quoteCalculator } = site;
  const [step, setStep] = useState(0);
  const [selection, setSelection] = useState<QuoteSelection>({
    eventType: "",
    tableGroups: [createEmptyTableGroup()],
    chuppah: "none",
    extras: [],
  });

  const range = calculateQuoteRange(selection);
  const rangeLabel = formatPriceRange(range.min, range.max);

  const canNext =
    step === 0
      ? selection.eventType !== ""
      : step === 1
        ? selection.tableGroups.some((g) => g.quantity > 0)
        : true;

  const updateTableGroup = (index: number, group: TableGroup) => {
    setSelection((s) => ({
      ...s,
      tableGroups: s.tableGroups.map((g, i) => (i === index ? group : g)),
    }));
  };

  const toggleExtra = (id: ExtraId) => {
    setSelection((s) => ({
      ...s,
      extras: s.extras.includes(id)
        ? s.extras.filter((e) => e !== id)
        : [...s.extras, id],
    }));
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <PremiumSection id="calculator" tone="white" editorialWord="QUOTE">
      <div className="container-olga mx-auto max-w-2xl">
        <SectionHeader
          title={quoteCalculator.title}
          subtitle={quoteCalculator.subtitle}
        />

        <p className="mt-4 text-center text-xs text-text-muted sm:text-sm">
          {quoteCalculator.disclaimer}
        </p>

        <Reveal delay={100}>
          <LuxuryCard className="mt-8 p-6 sm:mt-10 sm:p-8">
            <StepProgress
              current={step}
              labels={[...quoteCalculator.stepLabels]}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                variants={stepVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35 }}
              >
                {step === 0 ? (
                  <fieldset>
                    <legend className="mb-4 font-serif text-lg text-text">
                      מה סוג האירוע?
                    </legend>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {quoteCalculator.eventTypes.map((type) => (
                        <OptionCard
                          key={type.value}
                          selected={selection.eventType === type.value}
                          onClick={() =>
                            setSelection((s) => ({
                              ...s,
                              eventType: type.value,
                            }))
                          }
                        >
                          <span className="font-medium">{type.label}</span>
                        </OptionCard>
                      ))}
                    </div>
                  </fieldset>
                ) : null}

                {step === 1 ? (
                  <div className="space-y-4">
                    <h3 className="font-serif text-lg text-text">שולחנות</h3>
                    <p className="text-sm text-text-muted">
                      הוסיפי קבוצות שולחנות לפי סוג ורמת עיצוב
                    </p>
                    {selection.tableGroups.map((group, index) => (
                      <TableGroupEditor
                        key={group.id}
                        group={group}
                        onChange={(g) => updateTableGroup(index, g)}
                        onRemove={() =>
                          setSelection((s) => ({
                            ...s,
                            tableGroups: s.tableGroups.filter(
                              (_, i) => i !== index,
                            ),
                          }))
                        }
                        canRemove={selection.tableGroups.length > 1}
                      />
                    ))}
                    <button
                      type="button"
                      onClick={() =>
                        setSelection((s) => ({
                          ...s,
                          tableGroups: [
                            ...s.tableGroups,
                            createEmptyTableGroup(),
                          ],
                        }))
                      }
                      className="text-sm font-medium text-accent-deep hover:text-floral"
                    >
                      + הוספת קבוצת שולחנות
                    </button>
                  </div>
                ) : null}

                {step === 2 ? (
                  <fieldset>
                    <legend className="mb-4 font-serif text-lg text-text">
                      חופה
                    </legend>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {chuppahOptions.map((option) => (
                        <OptionCard
                          key={option.value}
                          selected={selection.chuppah === option.value}
                          onClick={() =>
                            setSelection((s) => ({
                              ...s,
                              chuppah: option.value as ChuppahOption,
                            }))
                          }
                        >
                          <span className="font-medium">{option.label}</span>
                        </OptionCard>
                      ))}
                    </div>
                  </fieldset>
                ) : null}

                {step === 3 ? (
                  <fieldset>
                    <legend className="mb-4 font-serif text-lg text-text">
                      תוספות
                    </legend>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {extraOptions.map((extra) => (
                        <OptionCard
                          key={extra.id}
                          selected={selection.extras.includes(extra.id)}
                          onClick={() => toggleExtra(extra.id)}
                        >
                          {extra.label}
                        </OptionCard>
                      ))}
                    </div>
                  </fieldset>
                ) : null}

                {step === 4 ? (
                  <div className="text-center">
                    <p className="text-sm text-text-muted">
                      {quoteCalculator.resultTitle}
                    </p>
                    <p className="mt-3 font-serif text-3xl font-light text-floral sm:text-4xl">
                      {range.min > 0 ? rangeLabel : "בחרי פריטים לקבלת הערכה"}
                    </p>
                    <p className="mt-6 text-sm leading-relaxed text-text-muted">
                      {quoteCalculator.resultNote}
                    </p>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                      <a
                        href={siteWhatsAppHref(
                          buildQuoteMessage(selection, rangeLabel),
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-12 items-center justify-center rounded-full bg-accent-deep px-8 text-base font-serif font-medium text-white transition-all hover:bg-floral"
                      >
                        {quoteCalculator.whatsappCta}
                      </a>
                      <button
                        type="button"
                        onClick={scrollToContact}
                        className="inline-flex min-h-12 items-center justify-center rounded-full border border-accent/50 px-8 text-base font-medium text-accent-deep transition-colors hover:bg-accent/10"
                      >
                        {quoteCalculator.scheduleCta}
                      </button>
                    </div>
                    <div className="mt-6">
                      <FormConsent />
                    </div>
                  </div>
                ) : null}
              </motion.div>
            </AnimatePresence>

            {step < 4 ? (
              <div className="mt-8 flex items-center justify-between gap-4 border-t border-border pt-6">
                <button
                  type="button"
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  disabled={step === 0}
                  className="text-sm font-medium text-text-muted disabled:opacity-40"
                >
                  חזרה
                </button>
                <button
                  type="button"
                  onClick={() => setStep((s) => Math.min(TOTAL_STEPS - 1, s + 1))}
                  disabled={!canNext}
                  className="inline-flex min-h-11 items-center justify-center rounded-full bg-accent-deep px-8 text-sm font-medium text-white transition-all hover:bg-floral disabled:opacity-40"
                >
                  {step === 3 ? "לצפייה בהערכה" : "המשך"}
                </button>
              </div>
            ) : (
              <div className="mt-6 flex justify-center">
                <button
                  type="button"
                  onClick={() => {
                    setStep(0);
                    setSelection({
                      eventType: "",
                      tableGroups: [createEmptyTableGroup()],
                      chuppah: "none",
                      extras: [],
                    });
                  }}
                  className="text-sm text-text-muted hover:text-accent-deep"
                >
                  חישוב מחדש
                </button>
              </div>
            )}
          </LuxuryCard>
        </Reveal>
      </div>
    </PremiumSection>
  );
}
