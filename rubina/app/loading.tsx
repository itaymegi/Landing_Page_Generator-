export default function Loading() {
  return (
    <div className="min-h-screen bg-parchment" aria-busy="true" aria-label="טוען">
      <div className="container-rubina py-32">
        <div className="mx-auto max-w-xl animate-pulse space-y-6">
          <div className="mx-auto h-8 w-48 rounded bg-cream/70" />
          <div className="mx-auto h-4 w-72 rounded bg-cream/60" />
          <div className="mt-12 aspect-[16/10] w-full rounded-2xl bg-cream/60" />
        </div>
      </div>
    </div>
  );
}
