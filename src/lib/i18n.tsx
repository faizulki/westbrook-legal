"use client";

/**
 * Lightweight EN / AR internationalization.
 *
 * A single dictionary holds every translatable string. LanguageProvider keeps
 * the active language in React state (persisted to localStorage) and sets the
 * document <html dir/lang> so the whole layout flips to RTL for Arabic.
 * Components read strings via the useT() hook.
 */

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "ar";

export const dictionary = {
  en: {
    dir: "ltr" as const,
    brand: { name: "Westbrook Legal", sub: "Attorneys at Law" },
    nav: {
      home: "Home page",
      about: "About us",
      legal: "Legal areas",
      book: "Book a consultation",
      contact: "Contact",
    },
    common: {
      readMore: "Read more",
      learnMore: "Learn more",
      bookNow: "Book now",
      send: "Send",
      getInTouch: "Welcome to contact us",
      hours: "Monday – Friday · 9:00 AM – 6:00 PM",
    },
    bands: {
      welcome: "Welcome",
      about: "About the firm",
      legal: "Areas of law",
      book: "Book advice",
      contact: "Contact details",
    },
    home: {
      heading: "Business and human rights law\nadvice and representation.",
      p1: "We are a general-practice law firm that appears in court, provides clients with information on a wide range of issues, and prepares the documents they need. We work with both human and business law and serve private individuals as well as micro, small, and medium-sized enterprises.",
      p2: "The greatest difference with us is our personal approach, combined with a genuine drive to achieve success — your success.",
      cta: "Welcome to contact us",
    },
    about: {
      titleBar: "We are here for you.",
      p1: "We are a general-practice law firm that appears in court, advises clients on a wide range of matters, and prepares the documents they need. We work with both human and business law and primarily serve private individuals and small and medium-sized enterprises. Whatever your legal matter, you can be confident that we will provide the resources and guidance you need to succeed.",
      p2: "Legal services are often expensive and therefore available only to a few. Law does not have to be costly, and at Westbrook Legal we recognize this by keeping our prices fair. Our purpose is to offer high-quality legal services at accessible prices.",
      p3: "When we take on a matter, we work actively to create added value — value that exceeds our own fee. We achieve this in part by limiting risk, which increases the likelihood that our clients reach their goals.",
      p4: "We welcome and engage outside thinkers, organizations, and experts in our own development. Our team speaks many languages, including Arabic, English, French, and Spanish.",
      panelHeading: "We want to make the law easy to understand and accessible to all people.",
      branchesTitle: "Our branches abroad",
      teamTitle: "Our team",
      founder: "Founder",
      lawyer: "Lawyer",
    },
    legal: {
      titleBar: "What can we help you with?",
      footnote:
        "Don't hesitate to get in touch! Read more under Book a consultation about how we can help you move forward and achieve success in your case.",
    },
    book: {
      titleBar: "Book legal advice",
      intro:
        "We will conduct an investigation into what applies to your particular case and advise you on how best to proceed with your legal matter.",
      terms: [
        "Our hourly rate is $290 per hour worked.",
        "Because we want to make legal matters accessible to everyone, we also offer telephone advice: 15 minutes for $60, or 30 minutes for $110. Our lawyers determine how much advice you need based on your case.",
        "We never charge for any work without first agreeing with you, as the client, what we will do and how much it will cost.",
        "We always request a portion of the payment in advance. For fixed-cost matters, you pay half or all of the cost before we begin.",
        "If you have a limited income, you may be entitled to legal aid, meaning the state covers all or part of the cost. We can help you with the application.",
        "If we believe your case is especially urgent or compelling, we may take it on pro bono — without charging a fee.",
      ],
      dontHesitate: "Don't hesitate to contact us!",
      closing:
        "Please write a clear description of all the circumstances of your case so that we can handle it in the best way. We will then call you.",
      personalMeeting: "Personal meeting",
      personalDuration: "1 hour",
      personalPrice: "$290",
      phoneAdvice: "Telephone advice",
      phoneDuration: "15 / 30 minutes",
      phonePrice: "from $60",
    },
    contact: {
      titleBar: "Warm welcome",
      office: "Westbrook Legal LLP",
      headOffice: "New York, head office",
      secondOffice: "Brooklyn",
      secondNote: "Pre-booked appointments only",
      labels: {
        phone: "Phone",
        email: "Email",
        messenger: "Messenger",
        whatsapp: "Mobile / WhatsApp",
        org: "Organization number",
        vat: "VAT registration number",
        bank: "Bank transfer",
        zelle: "Zelle",
      },
      docsTitle: "Documents / Forms",
      docs: [
        "1. Business description",
        "2. Work environment policy",
        "3. Environmental policy",
      ],
      docsLangs: "English · Arabic · French · Spanish",
      formTitle: "Send message",
      form: {
        name: "First and last name",
        phone: "Phone number",
        email: "E-mail",
        message: "Add a message",
        send: "Send",
        success: "Thank you — your message has been received. We will call you.",
      },
    },
    footer: { rights: "All rights reserved." },
  },

  ar: {
    dir: "rtl" as const,
    brand: { name: "ويستبروك ليجال", sub: "محامون ومستشارون قانونيون" },
    nav: {
      home: "الصفحة الرئيسية",
      about: "من نحن",
      legal: "المجالات القانونية",
      book: "احجز استشارة",
      contact: "اتصل بنا",
    },
    common: {
      readMore: "اقرأ المزيد",
      learnMore: "اعرف المزيد",
      bookNow: "احجز الآن",
      send: "إرسال",
      getInTouch: "نرحب بتواصلكم معنا",
      hours: "الإثنين – الجمعة · 9:00 ص – 6:00 م",
    },
    bands: {
      welcome: "مرحباً",
      about: "عن المكتب",
      legal: "مجالات القانون",
      book: "احجز استشارة",
      contact: "بيانات الاتصال",
    },
    home: {
      heading: "استشارات وتمثيل قانوني\nفي قانون الأعمال وحقوق الإنسان.",
      p1: "نحن مكتب محاماة للممارسة العامة نترافع أمام المحاكم، ونزوّد عملاءنا بالمعلومات في مجموعة واسعة من القضايا، ونعدّ المستندات التي يحتاجونها. نعمل في القانون الإنساني وقانون الأعمال ونخدم الأفراد والمنشآت الصغيرة والمتوسطة.",
      p2: "أكبر ما يميّزنا هو نهجنا الشخصي إلى جانب سعينا الصادق لتحقيق النجاح — نجاحكم أنتم.",
      cta: "نرحب بتواصلكم معنا",
    },
    about: {
      titleBar: "نحن هنا من أجلك.",
      p1: "نحن مكتب محاماة للممارسة العامة نترافع أمام المحاكم، ونقدّم المشورة في طيف واسع من المسائل، ونعدّ المستندات اللازمة. نخدم بالدرجة الأولى الأفراد والمنشآت الصغيرة والمتوسطة. أيًا كانت مسألتك القانونية، كن واثقاً أننا سنوفّر لك الموارد والإرشاد اللازمين للنجاح.",
      p2: "كثيراً ما تكون الخدمات القانونية باهظة ومتاحة لقلّة فقط. القانون لا ينبغي أن يكون مكلفاً، وفي ويستبروك ليجال ندرك ذلك ونحافظ على أسعار عادلة. هدفنا تقديم خدمات قانونية عالية الجودة بأسعار في متناول الجميع.",
      p3: "عندما نتولّى قضية، نعمل بفاعلية على خلق قيمة مضافة تتجاوز أتعابنا. نحقّق ذلك جزئياً عبر الحدّ من المخاطر، مما يرفع احتمال بلوغ عملائنا لأهدافهم.",
      p4: "نرحّب بالمفكّرين والمنظمات والخبراء ونشركهم في تطويرنا. يتحدّث فريقنا لغات عدّة منها العربية والإنجليزية والفرنسية والإسبانية.",
      panelHeading: "نريد أن نجعل القانون سهل الفهم ومتاحاً لجميع الناس.",
      branchesTitle: "فروعنا في الخارج",
      teamTitle: "فريقنا",
      founder: "المؤسس",
      lawyer: "محامٍ",
    },
    legal: {
      titleBar: "كيف يمكننا مساعدتك؟",
      footnote:
        "لا تتردّد في التواصل معنا! اقرأ المزيد ضمن صفحة حجز الاستشارة حول كيفية مساعدتك على المضيّ قدماً وتحقيق النجاح في قضيتك.",
    },
    book: {
      titleBar: "احجز استشارة قانونية",
      intro:
        "سنجري دراسة لما ينطبق على حالتك تحديداً ونرشدك إلى أفضل طريقة للمضيّ في مسألتك القانونية.",
      terms: [
        "أجرنا بالساعة هو 290 دولاراً عن كل ساعة عمل.",
        "لأننا نريد أن نجعل المسائل القانونية في متناول الجميع، نقدّم أيضاً استشارة هاتفية: 15 دقيقة مقابل 60 دولاراً، أو 30 دقيقة مقابل 110 دولارات. يحدّد محامونا حجم الاستشارة التي تحتاجها بناءً على قضيتك.",
        "لا نتقاضى أبداً مقابل أي عمل دون الاتفاق معك مسبقاً، بصفتك العميل، على ما سنقوم به وكم سيكلّف.",
        "نطلب دائماً جزءاً من الدفعة مقدماً. في القضايا ذات التكلفة الثابتة، تدفع نصف أو كامل التكلفة قبل أن نبدأ.",
        "إذا كان دخلك محدوداً، فقد تكون مؤهلاً للمساعدة القانونية، أي أن تتحمّل الدولة كل التكلفة أو جزءاً منها. ويمكننا مساعدتك في التقديم.",
        "إذا رأينا أن قضيتك ملحّة أو وجيهة بشكل خاص، فقد نتولّاها دون مقابل (مجاناً).",
      ],
      dontHesitate: "لا تتردّد في الاتصال بنا!",
      closing:
        "يرجى كتابة وصف واضح لكل ملابسات قضيتك حتى نتمكّن من معالجتها على أفضل وجه. وسنتصل بك بعد ذلك.",
      personalMeeting: "لقاء شخصي",
      personalDuration: "ساعة واحدة",
      personalPrice: "290 دولاراً",
      phoneAdvice: "استشارة هاتفية",
      phoneDuration: "15 / 30 دقيقة",
      phonePrice: "من 60 دولاراً",
    },
    contact: {
      titleBar: "أهلاً وسهلاً",
      office: "ويستبروك ليجال",
      headOffice: "نيويورك، المكتب الرئيسي",
      secondOffice: "بروكلين",
      secondNote: "بمواعيد مسبقة فقط",
      labels: {
        phone: "هاتف",
        email: "البريد الإلكتروني",
        messenger: "ماسنجر",
        whatsapp: "جوال / واتساب",
        org: "رقم المنشأة",
        vat: "رقم التسجيل الضريبي",
        bank: "تحويل بنكي",
        zelle: "زيل",
      },
      docsTitle: "المستندات / النماذج",
      docs: [
        "1. وصف النشاط التجاري",
        "2. سياسة بيئة العمل",
        "3. السياسة البيئية",
      ],
      docsLangs: "الإنجليزية · العربية · الفرنسية · الإسبانية",
      formTitle: "أرسل رسالة",
      form: {
        name: "الاسم الأول واسم العائلة",
        phone: "رقم الهاتف",
        email: "البريد الإلكتروني",
        message: "اكتب رسالتك",
        send: "إرسال",
        success: "شكراً لك — تم استلام رسالتك وسنتصل بك.",
      },
    },
    footer: { rights: "جميع الحقوق محفوظة." },
  },
} as const;

export type Dict = (typeof dictionary)["en"];

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict; dir: "ltr" | "rtl" };

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  // One-time hydration: restore the saved language after mount (localStorage is
  // unavailable during SSR, so this can't be a lazy initializer).
  useEffect(() => {
    const saved = window.localStorage.getItem("wl_lang") as Lang | null;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (saved === "en" || saved === "ar") setLangState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dictionary[lang].dir;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    window.localStorage.setItem("wl_lang", l);
  }, []);

  const value: Ctx = {
    lang,
    setLang,
    t: dictionary[lang] as Dict,
    dir: dictionary[lang].dir,
  };

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLang(): Ctx {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}

/** Convenience hook — returns the active dictionary. */
export function useT(): Dict {
  return useLang().t;
}
