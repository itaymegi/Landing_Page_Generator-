export function SectionDivider() {
  return (
    <div
      className="relative flex items-center justify-center px-6 py-6 sm:py-8"
      aria-hidden="true"
    >
      <div className="h-px flex-1 max-w-[8rem] bg-gradient-to-r from-transparent via-accent/45 to-transparent sm:max-w-[12rem]" />
      <svg
        className="mx-4 h-3 w-3 shrink-0 text-accent/40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
      >
        <path
          d="M12 3 C10 8 8 10 12 14 C16 10 14 8 12 3Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M12 14 L12 21" strokeLinecap="round" />
      </svg>
      <div className="h-px flex-1 max-w-[8rem] bg-gradient-to-l from-transparent via-accent/45 to-transparent sm:max-w-[12rem]" />
    </div>
  );
}
