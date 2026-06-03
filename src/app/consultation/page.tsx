import type { Metadata } from "next";
import { CalendarCheck, MessageSquareText, PhoneCall } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ConsultationForm } from "@/components/ConsultationForm";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description:
    "Request a consultation with Westbrook Legal. Tell us about your matter and we'll be in touch to confirm a time.",
};

const steps = [
  {
    icon: MessageSquareText,
    title: "Tell us about your matter",
    text: "Share a few details using the form so we can prepare for your consultation.",
  },
  {
    icon: PhoneCall,
    title: "We'll be in touch",
    text: "A member of our team will contact you to confirm a convenient time.",
  },
  {
    icon: CalendarCheck,
    title: "Meet your lawyer",
    text: "Get clear, practical advice and a recommended path forward.",
  },
];

export default function ConsultationPage() {
  return (
    <>
      <PageHeader
        eyebrow="Consultation"
        title="Book a consultation"
        intro="Tell us a little about your situation and we'll arrange a time to talk. Our initial consultation is the first step toward clarity."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          {/* How it works */}
          <Reveal>
            <h2 className="font-serif text-2xl font-semibold text-navy">
              How it works
            </h2>
            <ol className="mt-8 space-y-8">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <li key={step.title} className="flex gap-5">
                    <div className="flex flex-col items-center">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-gold/5 text-gold">
                        <Icon size={20} strokeWidth={1.6} />
                      </span>
                      {i < steps.length - 1 && (
                        <span className="mt-2 h-12 w-px bg-line" />
                      )}
                    </div>
                    <div className="pt-1.5">
                      <h3 className="font-serif text-lg font-semibold text-navy">
                        {step.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate">
                        {step.text}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>

            <div className="mt-10 rounded-xl border border-line bg-cream p-6">
              <p className="font-serif text-lg font-semibold text-navy">
                Prefer to call?
              </p>
              <p className="mt-2 text-sm text-slate">
                Our team is available Monday to Friday, 9:00 AM – 6:00 PM. We are
                always happy to answer your questions.
              </p>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={100}>
            <ConsultationForm />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
