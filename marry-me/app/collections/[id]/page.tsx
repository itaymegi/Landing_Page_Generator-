import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { CTAButton } from "@/components/ui/CTAButton";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { WhatsAppIcon } from "@/components/ui/icons";
import {
  collectionWhatsAppMessage,
  collections,
  getCollectionById,
} from "@/config/collections";
import { site, siteWhatsAppHref } from "@/config/site";

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return collections.map((collection) => ({ id: collection.id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const collection = getCollectionById(id);
  if (!collection) return {};

  return {
    title: `${collection.name} | ${site.brand.name}`,
    description: collection.description,
    alternates: { canonical: `/collections/${collection.id}` },
  };
}

export default async function CollectionPage({ params }: PageProps) {
  const { id } = await params;
  const collection = getCollectionById(id);
  if (!collection) notFound();

  return (
    <>
      <Header />
      <main
        id="main-content"
        className="bg-ivory pb-20 pt-[calc(var(--header-height)+2rem)] sm:pb-0"
      >
        <div className="container-marry py-12 sm:py-16 lg:py-20">
          <p className="eyebrow">Collection</p>
          <h1 className="mt-4 max-w-2xl font-serif text-3xl font-light text-charcoal sm:text-4xl lg:text-5xl">
            {collection.name}
          </h1>
          <span className="rule-gold mt-6" aria-hidden="true" />

          <div className="mt-10 grid items-start gap-10 lg:mt-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16">
            <MediaFrame
              src={collection.image}
              alt={collection.imageAlt}
              aspect="portrait"
              sizes="(max-width: 1024px) 90vw, 42vw"
              rounded="rounded-[1.5rem]"
              priority
            />

            <div>
              <p className="text-base leading-[1.95] text-ink-muted sm:text-lg">
                {collection.description}
              </p>

              <div className="mt-8 rounded-[1.25rem] border border-gold/25 bg-warm-white px-6 py-7 sm:px-8 sm:py-8">
                <p className="font-serif text-xl font-light leading-[1.6] text-charcoal sm:text-2xl">
                  כשנתקדם מהדמייה — נדאג לעוד תמונות וסרטונים מכל סוג ההצעות.
                </p>
                <p className="mt-4 text-sm leading-[1.85] text-ink-muted">
                  הדף הזה הוא תצוגה ראשונית של הקולקציה. בקרוב תמצאו כאן גלריה
                  מלאה, סרטונים ופרטים נוספים על ההפקה.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <CTAButton
                  href={siteWhatsAppHref(
                    collectionWhatsAppMessage(collection.name),
                  )}
                  variant="primary"
                  external
                  icon={<WhatsAppIcon />}
                >
                  לשאול על הקולקציה
                </CTAButton>
                <Link
                  href="/#collections"
                  className="inline-flex min-h-12 items-center justify-center px-4 text-sm tracking-[0.08em] text-gold-deep transition-colors hover:text-charcoal"
                >
                  חזרה לכל הקולקציות
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
