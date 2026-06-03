/** Non-translatable structural config: contact values, links, images. */

export const site = {
  name: "Westbrook Legal",
  initials: "WL",
  url: "https://westbrooklegal.com",
  email: "hello@westbrooklegal.com",
  phone: "+1 (212) 555-0188",
  phoneHref: "tel:+12125550188",
  whatsapp: "+1 (212) 555-0042",
  messenger: "m.me/westbrooklegal",
  org: "88-1234567",
  vat: "US881234567",
  bank: "021000021 · 5601-3030",
  zelle: "212 555 0188",
  headOffice: { line1: "200 Wall Street, Suite 1400", line2: "New York, NY 10005" },
  secondOffice: { line1: "55 Prospect Street", line2: "Brooklyn, NY 11201" },
  social: {
    instagram: "https://instagram.com/westbrooklegal",
    facebook: "https://facebook.com/westbrooklegal",
    linkedin: "https://linkedin.com/company/westbrooklegal",
  },
} as const;

/** Branch offices abroad (matches the template's "Our branches abroad"). */
export const branches = [
  {
    city: "Dubai",
    lines: ["Emaar Square, Building 3", "Downtown Dubai, UAE"],
    phone: "+971 4 555 7774",
  },
  {
    city: "London",
    lines: ["28 Queen Street, Mayfair", "London W1J 5PD, UK"],
    phone: "+44 20 7555 1917",
  },
  {
    city: "Muscat",
    lines: ["Al Khuwair Business Center", "6th Floor, Muscat, Oman"],
    phone: "+968 2 555 1691",
  },
] as const;
