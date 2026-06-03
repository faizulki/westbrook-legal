import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center px-6 py-28 text-center">
      <div>
        <p className="eyebrow text-xs font-semibold text-gold">Error 404</p>
        <h1 className="mt-4 font-serif text-5xl font-semibold text-navy">
          Page not found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-slate">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button href="/">Return Home</Button>
          <Button href="/contact" variant="outline">Contact Us</Button>
        </div>
      </div>
    </section>
  );
}
