import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Quote } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CTA } from "@/components/CTA";
import { legalAreas, whyUs, stats, testimonials } from "@/lib/content";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">
          <Reveal>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-gold" />
              <span className="eyebrow text-xs font-semibold text-gold">
                Westbrook Legal
              </span>
            </div>
            <h1 className="font-serif text-4xl font-semibold leading-[1.1] text-navy sm:text-5xl lg:text-6xl">
              Trusted counsel.
              <br />
              Lasting results.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate">
              We are a full-service law firm providing clear, practical, and
              dependable legal advice to individuals, families, and businesses —
              with a personal approach you can rely on.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/consultation" size="lg">
                Book a Consultation <ArrowRight size={18} />
              </Button>
              <Button href="/legal-areas" size="lg" variant="outline">
                Our Legal Areas
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120} className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line shadow-xl shadow-navy/5">
              <Image
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1000&q=80"
                alt="Two lawyers reviewing documents together"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Floating accent card */}
            <div className="absolute -bottom-6 -left-6 hidden rounded-xl border border-line bg-paper p-5 shadow-lg sm:block">
              <p className="font-serif text-3xl font-semibold text-navy">25+</p>
              <p className="text-sm text-slate">Years of trusted practice</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats strip */}
      <div className="border-y border-line bg-paper">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="px-2 py-8 text-center">
              <p className="font-serif text-3xl font-semibold text-navy sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-slate">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Welcome / intro */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            eyebrow="Welcome"
            title="A law firm built around clarity and care"
            intro="Legal matters can feel overwhelming. Our role is to make them clear — explaining your options in plain language and guiding you steadily toward the right outcome."
          />
          <Reveal delay={100} className="space-y-5 text-base leading-relaxed text-slate lg:pt-4">
            <p>
              At {site.name}, we believe excellent legal counsel should be
              approachable. Every client works directly with an experienced
              lawyer who takes the time to understand their goals.
            </p>
            <p>
              From a single contract to a complex dispute, we bring the same
              standard of preparation, judgment, and genuine commitment to your
              success.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 font-medium text-navy transition-colors hover:text-gold"
            >
              More about the firm <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>
      </Section>

      {/* Legal areas */}
      <Section className="bg-cream">
        <SectionHeading
          eyebrow="Legal Areas"
          title="How we can help you"
          intro="Focused expertise across the areas of law that matter most to our clients."
          align="center"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {legalAreas.map((area, i) => {
            const Icon = area.icon;
            return (
              <Reveal key={area.slug} delay={i * 70}>
                <Link
                  href={`/legal-areas#${area.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-line bg-paper p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-lg hover:shadow-navy/5"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-navy/[0.04] text-navy transition-colors group-hover:bg-gold/10 group-hover:text-gold">
                    <Icon size={22} strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-5 font-serif text-xl font-semibold text-navy">
                    {area.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">
                    {area.tagline}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-gold">
                    Learn more
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Why us */}
      <Section>
        <SectionHeading
          eyebrow="Why Westbrook"
          title="Counsel you can count on"
          align="center"
        />
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {whyUs.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 90} className="text-center">
                <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-gold/5 text-gold">
                  <Icon size={24} strokeWidth={1.6} />
                </span>
                <h3 className="mt-6 font-serif text-xl font-semibold text-navy">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">
                  {item.description}
                </p>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-cream">
        <SectionHeading eyebrow="Testimonials" title="What our clients say" align="center" />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <figure className="flex h-full flex-col rounded-xl border border-line bg-paper p-7">
                <Quote size={26} className="text-gold/50" />
                <blockquote className="mt-4 flex-1 leading-relaxed text-ink">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-line pt-4">
                  <p className="font-semibold text-navy">{t.name}</p>
                  <p className="text-sm text-slate">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}
