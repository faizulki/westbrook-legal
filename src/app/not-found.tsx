import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center px-6 py-24 text-center">
      <div>
        <p className="font-display text-sm uppercase tracking-[0.3em] text-gold">Error 404</p>
        <h1 className="mt-4 font-display text-5xl font-semibold text-white">Page not found</h1>
        <p className="mx-auto mt-4 max-w-md text-mist">
          The page you are looking for doesn&apos;t exist or has moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block bg-gold px-7 py-3 font-display font-medium text-night transition-colors hover:bg-gold-bright"
        >
          Return home
        </Link>
      </div>
    </section>
  );
}
