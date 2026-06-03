/**
 * SectionBand — the grey gradient banner with a centered, letter-spaced serif
 * title that sits beneath the header on every page (WELCOME, ABOUT, …).
 */
export function SectionBand({ title }: { title: string }) {
  return (
    <div className="bg-gradient-to-b from-stone/90 to-stone/70">
      <div className="mx-auto max-w-6xl px-6 py-4 text-center lg:px-8">
        <h1 className="band-title font-display text-lg font-medium text-white sm:text-xl">
          {title}
        </h1>
      </div>
    </div>
  );
}
