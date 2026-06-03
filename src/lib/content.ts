/**
 * Bilingual list content (legal areas, attorneys). Each translatable field is a
 * { en, ar } pair; components pick the active language via the `pick` helper.
 */

import type { Lang } from "./i18n";

export type L = { en: string; ar: string };

/** Pick the string for the active language. */
export function pick(value: L, lang: Lang): string {
  return value[lang];
}

export type LegalArea = {
  slug: string;
  image: string;
  title: L;
  tagline: L;
  description: L;
};

export const legalAreas: LegalArea[] = [
  {
    slug: "business-law",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80",
    title: { en: "Business law", ar: "قانون الأعمال" },
    tagline: {
      en: "Do you need help to interpret, draft, or negotiate a deal?",
      ar: "هل تحتاج مساعدة في تفسير صفقة أو صياغتها أو التفاوض عليها؟",
    },
    description: {
      en: "We help entrepreneurs and companies with formation and structure, employment and corporate law, intellectual property, commercial contracts, transactions, and disputes.",
      ar: "نساعد روّاد الأعمال والشركات في التأسيس والهيكلة، وقانون العمل والشركات، والملكية الفكرية، والعقود التجارية، والصفقات والنزاعات.",
    },
  },
  {
    slug: "family-law",
    image:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=400&q=80",
    title: { en: "Family law", ar: "قانون الأسرة" },
    tagline: { en: "Let us be your family lawyer.", ar: "دعنا نكون محاميك للأسرة." },
    description: {
      en: "We handle matters involving children, housing, and finances — always prioritizing the best interests of the child and a dignified path forward.",
      ar: "نتولّى المسائل المتعلقة بالأطفال والسكن والشؤون المالية — مع إعطاء الأولوية دائماً لمصلحة الطفل الفضلى وطريق كريم للمضيّ قدماً.",
    },
  },
  {
    slug: "migration-law",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=400&q=80",
    title: { en: "Migration law", ar: "قانون الهجرة" },
    tagline: {
      en: "Do you want to relocate — to live, study, or work?",
      ar: "هل ترغب في الانتقال — للعيش أو الدراسة أو العمل؟",
    },
    description: {
      en: "We specialize in citizenship, residence, and family-reunification matters, guiding you through applications and appeals with a steady hand.",
      ar: "نتخصّص في مسائل الجنسية والإقامة ولمّ شمل الأسرة، ونرشدك عبر الطلبات والطعون بثبات.",
    },
  },
  {
    slug: "international-law",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80",
    title: { en: "International law", ar: "القانون الدولي" },
    tagline: {
      en: "We handle most matters with an international connection.",
      ar: "نتولّى معظم المسائل ذات الصلة الدولية.",
    },
    description: {
      en: "From cross-border contracts to disputes across jurisdictions, we coordinate internationally to keep your matter moving forward.",
      ar: "من العقود العابرة للحدود إلى النزاعات بين الولايات القضائية، ننسّق دولياً لإبقاء قضيتك تتقدّم.",
    },
  },
  {
    slug: "plaintiffs-counsel",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=400&q=80",
    title: { en: "Plaintiff's counsel", ar: "محامي المدّعي" },
    tagline: { en: "Have you been a victim of crime? Hire us.", ar: "هل كنت ضحية جريمة؟ وكّلنا." },
    description: {
      en: "If you have suffered harm, we represent you as injured-party counsel — protecting your rights and pursuing the compensation you deserve.",
      ar: "إذا تعرّضت لضرر، نمثّلك بصفتنا محامي الطرف المتضرّر — نحمي حقوقك ونسعى للتعويض الذي تستحقه.",
    },
  },
];

export type Attorney = {
  name: L;
  role: L;
  focus: L;
  phone: string;
  email: string;
};

export const attorneys: Attorney[] = [
  {
    name: { en: "Eleanor Westbrook", ar: "إلينور ويستبروك" },
    role: { en: "Lawyer", ar: "محامية" },
    focus: { en: "Founder", ar: "المؤسِّسة" },
    phone: "+1 (212) 555-0188",
    email: "eleanor@westbrooklegal.com",
  },
  {
    name: { en: "James Holloway", ar: "جيمس هولواي" },
    role: { en: "Lawyer", ar: "محامٍ" },
    focus: { en: "Litigation / Disputes", ar: "التقاضي / النزاعات" },
    phone: "+1 (212) 555-0190",
    email: "james@westbrooklegal.com",
  },
  {
    name: { en: "Priya Nair", ar: "بريا ناير" },
    role: { en: "Lawyer", ar: "محامية" },
    focus: { en: "Family / Migration law", ar: "قانون الأسرة / الهجرة" },
    phone: "+1 (212) 555-0192",
    email: "priya@westbrooklegal.com",
  },
];
