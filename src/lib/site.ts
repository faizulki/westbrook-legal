/** Single source of truth for brand, navigation, and contact details. */

export const site = {
  name: "Westbrook Legal",
  initials: "WL",
  tagline: "Trusted counsel. Lasting results.",
  description:
    "Westbrook Legal is a full-service law firm providing clear, practical, and dependable legal counsel to individuals, families, and businesses.",
  url: "https://westbrooklegal.com",
  email: "hello@westbrooklegal.com",
  phone: "(212) 555-0188",
  phoneHref: "tel:+12125550188",
  address: {
    line1: "200 Wall Street, Suite 1400",
    line2: "New York, NY 10005",
  },
  hours: "Monday – Friday · 9:00 AM – 6:00 PM",
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Legal Areas", href: "/legal-areas" },
  { label: "Consultation", href: "/consultation" },
  { label: "Contact", href: "/contact" },
] as const;
