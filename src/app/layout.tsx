import type { Metadata } from "next";
import { Playfair_Display, EB_Garamond } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});
const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-garamond",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Attorneys at Law`,
    template: `%s — ${site.name}`,
  },
  description:
    "Westbrook Legal — business and human rights law advice and representation. A general-practice law firm serving individuals and businesses.",
  keywords: [
    "law firm",
    "lawyer",
    "business law",
    "family law",
    "migration law",
    "international law",
    "legal consultation",
  ],
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir="ltr" className={`${playfair.variable} ${garamond.variable}`}>
      <body className="flex min-h-screen flex-col bg-coal">
        <LanguageProvider>
          <Navbar />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
