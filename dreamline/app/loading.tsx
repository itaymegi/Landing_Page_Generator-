export default function Loading() {
  return (
    <div className="min-h-screen bg-ivory" aria-busy="true" aria-label="טוען">
      <div className="container-dreamline py-32">
        <div className="mx-auto max-w-xl animate-pulse space-y-6">
          <div className="mx-auto h-8 w-48 rounded bg-blush/40" />
          <div className="mx-auto h-4 w-72 rounded bg-blush/30" />
          <div className="mt-12 aspect-[4/5] w-full rounded-2xl bg-blush/30" />
        </div>
      </div>
    </div>
  );
}
