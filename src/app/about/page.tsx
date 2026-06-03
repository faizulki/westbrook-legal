import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CTA } from "@/components/CTA";
import { attorneys } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Westbrook Legal — our story, our values, and the people who provide trusted, practical legal counsel.",
};

const values = [
  { title: "Integrity", text: "Honest, straightforward advice — always in your best interest." },
  { title: "Clarity", text: "We explain the law in plain language so you can decide with confidence." },
  { title: "Diligence", text: "Thorough preparation and careful attention to every detail of your matter." },
  { title: "Care", text: "We treat every client with respect, discretion, and genuine concern." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="A firm dedicated to your peace of mind"
        intro="For more than two decades, Westbrook Legal has helped clients navigate life's most important legal decisions with confidence."
      />

      {/* Overview */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Our Story"
              title="Experienced counsel, a personal touch"
            />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-slate">
              <p>
                {site.name} was founded on a simple idea: that everyone deserves
                a lawyer who listens. We combine the depth of a full-service firm
                with the attentiveness of a trusted advisor who knows you by name.
              </p>
              <p>
                Our team advises individuals, families, and businesses across six
                areas of law. Whatever brings you to us, you can expect clear
                guidance, honest counsel, and a steady partner at every step.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line shadow-xl shadow-navy/5">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80"
                alt="The Westbrook Legal office"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Mission */}
      <Section className="bg-navy">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow text-xs font-semibold text-gold-soft">
            Our Mission
          </span>
          <p className="mt-6 font-serif text-2xl font-medium leading-snug text-white sm:text-3xl">
            To provide legal counsel that is clear, dependable, and genuinely
            personal — so every client can move forward with confidence and peace
            of mind.
          </p>
        </Reveal>
      </Section>

      {/* Values */}
      <Section>
        <SectionHeading
          eyebrow="Our Values"
          title="The principles behind our work"
          align="center"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 70}>
              <div className="h-full rounded-xl border border-line bg-cream p-6">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <Check size={18} />
                </span>
                <h3 className="mt-4 font-serif text-lg font-semibold text-navy">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section className="bg-cream">
        <SectionHeading
          eyebrow="Our Team"
          title="Meet the people behind the firm"
          intro="Accomplished lawyers who treat your goals as their own."
          align="center"
        />
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {attorneys.map((a, i) => (
            <Reveal key={a.name} delay={i * 80}>
              <article className="group overflow-hidden rounded-xl border border-line bg-paper">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={a.image}
                    alt={`Portrait of ${a.name}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-navy">
                    {a.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-gold">{a.role}</p>
                  <p className="mt-1 text-sm text-slate">{a.focus}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}
