const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.86 1.21 3.06c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
      <path d="M12.04 2C6.6 2 2.18 6.42 2.18 11.86c0 1.74.46 3.44 1.32 4.94L2 22l5.34-1.4a9.82 9.82 0 0 0 4.7 1.2h.01c5.43 0 9.85-4.42 9.85-9.86A9.79 9.79 0 0 0 12.04 2Zm0 17.98h-.01a8.2 8.2 0 0 1-4.16-1.14l-.3-.18-3.1.81.83-3.02-.2-.31a8.14 8.14 0 0 1-1.25-4.35c0-4.52 3.68-8.19 8.2-8.19a8.14 8.14 0 0 1 5.79 2.4 8.11 8.11 0 0 1 2.4 5.79c0 4.52-3.68 8.19-8.2 8.19Z" />
    </svg>
  );
}

export function InstagramIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg {...base} className={className} strokeWidth={1.2}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function CloseIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg {...base} className={className} strokeWidth={1.2}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function MenuIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg {...base} className={className} strokeWidth={1.2}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function HeartIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg {...base} className={className} strokeWidth={1.15}>
      <path d="M12 20s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 10c0 5.65-7 10-7 10Z" />
    </svg>
  );
}

export function SparkIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg {...base} className={className} strokeWidth={1.15}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />
    </svg>
  );
}

export function RingIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg {...base} className={className} strokeWidth={1.15}>
      <circle cx="12" cy="14" r="5.5" />
      <path d="M9.5 9.5 12 5l2.5 4.5" />
    </svg>
  );
}

export function CameraIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg {...base} className={className} strokeWidth={1.15}>
      <path d="M4 8.5h3l1.5-2h7l1.5 2h3v10H4Z" />
      <circle cx="12" cy="13" r="3.2" />
    </svg>
  );
}

export function FeatherIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg {...base} className={className} strokeWidth={1.15}>
      <path d="M20 4c-6 1-10 5-12 11l-3 5 5-3c6-2 10-6 11-12Z" />
      <path d="M8 16c2-2 5-5 9-7" />
    </svg>
  );
}

export function CalmIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg {...base} className={className} strokeWidth={1.15}>
      <circle cx="12" cy="12" r="8" />
      <path d="M8 13c1.2 1.4 2.6 2 4 2s2.8-.6 4-2" />
      <path d="M9 9.5h.01M15 9.5h.01" />
    </svg>
  );
}

export function ChevronIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg {...base} className={className} strokeWidth={1.3}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg {...base} className={className} strokeWidth={1.2}>
      <path d="M15 5.5 8.5 12l6.5 6.5" />
    </svg>
  );
}

export function StarIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="m12 3.2 2.4 4.86 5.36.78-3.88 3.78.92 5.34L12 15.5l-4.8 2.46.92-5.34L4.24 8.84l5.36-.78L12 3.2Z" />
    </svg>
  );
}
