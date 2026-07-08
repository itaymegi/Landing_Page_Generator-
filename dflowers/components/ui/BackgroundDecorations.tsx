type BackgroundDecorationsProps = {
  variant?: "corners" | "heading" | "none";
  className?: string;
};

export function BackgroundDecorations({
  variant = "corners",
  className = "",
}: BackgroundDecorationsProps) {
  if (variant === "none") return null;

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {variant === "corners" || variant === "heading" ? (
        <>
          <svg
            className="decor-breathe absolute -end-2 top-0 hidden h-48 w-48 opacity-[0.025] sm:block sm:h-56 sm:w-56 sm:opacity-[0.032]"
            viewBox="0 0 200 200"
            fill="none"
          >
            <path
              d="M160 20 C140 40 120 60 100 90 C80 120 60 150 40 180"
              stroke="#C8A86B"
              strokeWidth="0.8"
            />
            <path
              d="M100 90 C115 75 135 70 155 65 M100 90 C85 105 70 115 50 125"
              stroke="#C8A86B"
              strokeWidth="0.6"
            />
          </svg>
          <svg
            className="decor-breathe absolute -bottom-4 -start-2 h-40 w-40 opacity-[0.02] sm:h-52 sm:w-52 sm:opacity-[0.028]"
            viewBox="0 0 200 200"
            fill="none"
            style={{ animationDelay: "-4s" }}
          >
            <path
              d="M30 180 C50 150 70 120 95 95 C120 70 145 45 170 25"
              stroke="#C8A86B"
              strokeWidth="0.8"
            />
            <path
              d="M95 95 C80 85 65 78 48 72 M95 95 C108 108 122 118 138 128"
              stroke="#C8A86B"
              strokeWidth="0.6"
            />
          </svg>
        </>
      ) : null}
    </div>
  );
}
