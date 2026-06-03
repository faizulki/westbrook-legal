/** Marketing content for Westbrook Legal — realistic, professional placeholder copy. */

import {
  Briefcase,
  Users,
  Plane,
  Globe2,
  Home,
  Gavel,
  ShieldCheck,
  Clock,
  HeartHandshake,
  type LucideIcon,
} from "lucide-react";

export type LegalArea = {
  slug: string;
  title: string;
  icon: LucideIcon;
  tagline: string;
  description: string;
  services: string[];
};

export const legalAreas: LegalArea[] = [
  {
    slug: "business-law",
    title: "Business Law",
    icon: Briefcase,
    tagline: "Guidance for every stage of your business.",
    description:
      "We help founders and established companies form entities, draft and negotiate contracts, and stay compliant — so you can focus on growth with confidence.",
    services: [
      "Company formation & structuring",
      "Contract drafting and review",
      "Commercial agreements & negotiation",
      "Regulatory compliance",
    ],
  },
  {
    slug: "family-law",
    title: "Family Law",
    icon: Users,
    tagline: "Compassionate support for life's transitions.",
    description:
      "From divorce and custody to mediation and agreements, we guide families through difficult moments with discretion, clarity, and genuine care.",
    services: [
      "Divorce & separation",
      "Child custody & support",
      "Prenuptial agreements",
      "Mediation",
    ],
  },
  {
    slug: "migration-law",
    title: "Migration Law",
    icon: Plane,
    tagline: "A clear path to living and working abroad.",
    description:
      "Whether you are relocating to study, work, or join family, we handle applications and appeals with attention to detail and a steady hand.",
    services: [
      "Work & study visas",
      "Residence & citizenship",
      "Family reunification",
      "Appeals & representation",
    ],
  },
  {
    slug: "real-estate-law",
    title: "Real Estate Law",
    icon: Home,
    tagline: "Confidence in every transaction.",
    description:
      "We protect your interests across residential and commercial property — from purchase and sale to leasing and dispute resolution.",
    services: [
      "Purchases & sales",
      "Commercial leasing",
      "Title & boundary disputes",
      "Due diligence",
    ],
  },
  {
    slug: "international-law",
    title: "International Law",
    icon: Globe2,
    tagline: "Cross-border matters, handled with care.",
    description:
      "Our team manages matters with an international dimension, coordinating across jurisdictions to keep your case moving forward.",
    services: [
      "Cross-border contracts",
      "International disputes",
      "Jurisdiction & enforcement",
      "Foreign investment",
    ],
  },
  {
    slug: "litigation",
    title: "Litigation",
    icon: Gavel,
    tagline: "Determined advocacy when it matters most.",
    description:
      "When a dispute cannot be resolved through negotiation, we represent you with thorough preparation and clear, strategic advocacy.",
    services: [
      "Civil litigation",
      "Dispute resolution",
      "Settlement negotiation",
      "Court representation",
    ],
  },
];

export type Feature = { title: string; description: string; icon: LucideIcon };

export const whyUs: Feature[] = [
  {
    title: "Experienced Counsel",
    description:
      "Decades of combined experience across the areas of law that matter most to our clients.",
    icon: ShieldCheck,
  },
  {
    title: "Clear Communication",
    description:
      "Plain-language advice and prompt responses — you will always know where your matter stands.",
    icon: Clock,
  },
  {
    title: "A Personal Approach",
    description:
      "You work directly with your lawyer. We take the time to understand your goals and your situation.",
    icon: HeartHandshake,
  },
];

export type Stat = { value: string; label: string };

export const stats: Stat[] = [
  { value: "25+", label: "Years of practice" },
  { value: "1,200+", label: "Clients represented" },
  { value: "6", label: "Areas of law" },
  { value: "98%", label: "Would recommend" },
];

export type Attorney = {
  name: string;
  role: string;
  focus: string;
  image: string;
};

export const attorneys: Attorney[] = [
  {
    name: "Eleanor Westbrook",
    role: "Founding Partner",
    focus: "Business & Commercial Law",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "James Holloway",
    role: "Partner",
    focus: "Litigation & Dispute Resolution",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Priya Nair",
    role: "Senior Associate",
    focus: "Family & Migration Law",
    image:
      "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=600&q=80",
  },
];

export type Testimonial = { quote: string; name: string; role: string };

export const testimonials: Testimonial[] = [
  {
    quote:
      "Westbrook Legal made a complex business sale feel straightforward. Clear advice, no surprises, and a result we were thrilled with.",
    name: "Daniel Hughes",
    role: "Founder, Northvale Trading",
  },
  {
    quote:
      "They handled my family matter with such care and professionalism. I always felt informed and supported throughout.",
    name: "Maria Santos",
    role: "Private client",
  },
  {
    quote:
      "Responsive, knowledgeable, and genuinely on our side. I recommend them to anyone who needs dependable counsel.",
    name: "Robert Chen",
    role: "Managing Director, Atlas Property",
  },
];
