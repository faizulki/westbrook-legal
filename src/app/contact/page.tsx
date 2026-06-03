import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Westbrook Legal. Visit our office, call, or send us a message — we respond within one business day.",
};

const details = [
  { icon: MapPin, label: "Office", lines: [site.address.line1, site.address.line2] },
  { icon: Phone, label: "Phone", lines: [site.phone], href: site.phoneHref },
  { icon: Mail, label: "Email", lines: [site.email], href: `mailto:${site.email}` },
  { icon: Clock, label: "Office hours", lines: [site.hours] },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        intro="Have a question or ready to begin? We're here to help and respond to every inquiry within one business day."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* Details + map */}
          <Reveal>
            <dl className="grid gap-6 sm:grid-cols-2">
              {details.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy/[0.04] text-navy">
                      <Icon size={18} strokeWidth={1.6} />
                    </span>
                    <div>
                      <dt className="text-sm font-semibold text-navy">{item.label}</dt>
                      <dd className="mt-1 text-sm leading-relaxed text-slate">
                        {item.href ? (
                          <a href={item.href} className="transition-colors hover:text-gold">
                            {item.lines.join(" ")}
                          </a>
                        ) : (
                          item.lines.map((l) => <div key={l}>{l}</div>)
                        )}
                      </dd>
                    </div>
                  </div>
                );
              })}
            </dl>

            <div className="mt-8 overflow-hidden rounded-2xl border border-line">
              <div className="relative aspect-[16/10] w-full">
                <iframe
                  title="Map showing the Westbrook Legal office"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-74.0150%2C40.7030%2C-74.0020%2C40.7110&layer=mapnik"
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
