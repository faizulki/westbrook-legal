import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CTA } from "@/components/CTA";
import { legalAreas } from "@/lib/content";

export const metadata: Metadata = {
  title: "Legal Areas",
  description:
    "Explore Westbrook Legal's practice areas — business, family, migration, real estate, international law, and litigation.",
};

export default function LegalAreasPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal Areas"
        title="What we can help you with"
        intro="Focused, practical counsel across six areas of law. Whatever your situation, we will help you understand your options and move forward."
      />

      {/* Quick nav */}
      <div className="sticky top-20 z-30 border-b border-line bg-paper/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-2 px-6 py-4 lg:px-8">
          {legalAreas.map((area) => (
            <a
              key={area.slug}
              href={`#${area.slug}`}
              className="rounded-full border border-line px-4 py-1.5 text-sm text-slate transition-colors hover:border-gold/50 hover:text-navy"
            >
              {area.title}
            </a>
          ))}
        </div>
      </div>

      {legalAreas.map((area, index) => {
        const Icon = area.icon;
        const tinted = index % 2 === 1;
        return (
          <Section
            key={area.slug}
            id={area.slug}
            className={`scroll-mt-36 ${tinted ? "bg-cream" : ""}`}
          >
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <Reveal>
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-navy/[0.04] text-navy">
                  <Icon size={26} strokeWidth={1.6} />
                </span>
                <h2 className="mt-5 font-serif text-3xl font-semibold text-navy">
                  {area.title}
                </h2>
                <p className="mt-2 text-base font-medium text-gold">{area.tagline}</p>
                <p className="mt-5 text-base leading-relaxed text-slate">
                  {area.description}
                </p>
                <div className="mt-8">
                  <Button href="/consultation" variant="outline">
                    Discuss your matter
                  </Button>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className="rounded-xl border border-line bg-paper p-8">
                  <h3 className="eyebrow text-xs font-semibold text-gold">
                    How we help
                  </h3>
                  <ul className="mt-5 space-y-4">
                    {area.services.map((service) => (
                      <li key={service} className="flex items-start gap-3">
                        <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                          <Check size={13} strokeWidth={2.5} />
                        </span>
                        <span className="text-[0.95rem] text-ink">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </Section>
        );
      })}

      <CTA />
    </>
  );
}
