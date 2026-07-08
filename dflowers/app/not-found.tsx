import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <p className="text-sm tracking-[0.2em] text-accent uppercase">404</p>
      <h1 className="mt-4 font-serif text-3xl font-light text-text">
        הדף לא נמצא
      </h1>
      <p className="mt-3 max-w-md text-text-muted">
        נראה שהגעתם לעמוד שלא קיים. חזרו לדף הבית לגלות את העבודות שלנו.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-12 items-center justify-center rounded-sm bg-accent px-8 text-base font-medium text-white transition-colors hover:bg-accent-deep"
      >
        חזרה לדף הבית
      </Link>
    </main>
  );
}
