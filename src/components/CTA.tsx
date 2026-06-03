import { Reveal } from "./ui/Reveal";
import { Button } from "./ui/Button";

/** Closing call-to-action band, reused across pages. */
export function CTA({
  title = "Ready to discuss your matter?",
  subtitle = "Book a confidential consultation and get clear, practical advice on your next step.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-navy">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <Reveal className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-lg text-white/70">{subtitle}</p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Button
              href="/consultation"
              size="lg"
              className="bg-gold text-navy hover:bg-gold-soft"
            >
              Book Consultation
            </Button>
            <Button
              href="/contact"
              size="lg"
              className="border border-white/25 text-white hover:bg-white/10"
            >
              Contact Us
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
