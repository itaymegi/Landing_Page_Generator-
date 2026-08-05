type TimelineStepProps = {
  index: number;
  title: string;
  text: string;
};

export function TimelineStep({ index, title, text }: TimelineStepProps) {
  return (
    <div className="process-step">
      <p className="font-serif-en text-xs tracking-[0.28em] text-gold-deep">
        {String(index).padStart(2, "0")}
      </p>
      <h3 className="mt-3 font-serif text-xl font-light text-charcoal sm:text-[1.35rem]">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-[1.85] text-ink-muted">{text}</p>
    </div>
  );
}
