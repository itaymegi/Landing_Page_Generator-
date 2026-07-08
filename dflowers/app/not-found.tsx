import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header variant="solid" />
      <main
        id="main-content"
        className="flex min-h-[80dvh] flex-col items-center justify-center bg-background px-6 pt-24 text-center"
      >
        <p className="text-sm tracking-[0.2em] text-accent uppercase">404</p>
        <h1 className="mt-4 font-serif text-3xl font-light text-text">
          הדף לא נמצא
        </h1>
        <p className="mt-3 max-w-md text-text-muted">
          נראה שהגעתם לעמוד שלא קיים. חזרו לדף הבית לגלות את העבודות שלנו.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-accent-deep px-8 text-base font-medium text-white transition-colors hover:bg-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
          חזרה לדף הבית
        </Link>
        <Footer />
      </main>
    </>
  );
}
