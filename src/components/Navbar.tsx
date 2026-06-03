"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";
import { useLang } from "@/lib/i18n";
import { Logo } from "./Logo";

/** Brand glyphs — lucide no longer ships social marks. */
function Instagram({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 1.62c-3.15 0-3.5.01-4.74.07-.95.04-1.46.2-1.8.34-.46.18-.78.39-1.12.73-.34.34-.55.66-.73 1.12-.13.34-.3.85-.34 1.8-.06 1.24-.07 1.59-.07 4.74s.01 3.5.07 4.74c.04.95.2 1.46.34 1.8.18.46.39.78.73 1.12.34.34.66.55 1.12.73.34.13.85.3 1.8.34 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c.95-.04 1.46-.2 1.8-.34.46-.18.78-.39 1.12-.73.34-.34.55-.66.73-1.12.13-.34.3-.85.34-1.8.06-1.24.07-1.59.07-4.74s-.01-3.5-.07-4.74c-.04-.95-.2-1.46-.34-1.8a3.02 3.02 0 0 0-.73-1.12 3.02 3.02 0 0 0-1.12-.73c-.34-.13-.85-.3-1.8-.34-1.24-.06-1.59-.07-4.74-.07Zm0 2.76a5.3 5.3 0 1 1 0 10.6 5.3 5.3 0 0 1 0-10.6Zm0 1.62a3.68 3.68 0 1 0 0 7.36 3.68 3.68 0 0 0 0-7.36Zm5.48-2.9a1.24 1.24 0 1 1 0 2.48 1.24 1.24 0 0 1 0-2.48Z" />
    </svg>
  );
}
function Facebook({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6c-.3-.04-1.3-.13-2.46-.13-2.43 0-4.1 1.49-4.1 4.2v2.34H7.5V13h2.64v8h3.36Z" />
    </svg>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const { t, lang, setLang } = useLang();
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/legal-areas", label: t.nav.legal },
    { href: "/consultation", label: t.nav.book },
    { href: "/contact", label: t.nav.contact },
  ];

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-night">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Top row: logo + social + language */}
        <div className="flex items-center justify-between pt-5">
          <Logo />

          <div className="flex items-center gap-4">
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-8 w-8 place-items-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-gold hover:text-gold"
            >
              <Instagram size={15} />
            </a>
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="grid h-8 w-8 place-items-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-gold hover:text-gold"
            >
              <Facebook size={15} />
            </a>

            {/* Language toggle */}
            <div className="ms-1 flex overflow-hidden rounded-full border border-white/20 text-xs">
              <button
                type="button"
                onClick={() => setLang("en")}
                aria-pressed={lang === "en"}
                className={cn(
                  "px-3 py-1 transition-colors",
                  lang === "en" ? "bg-gold text-night" : "text-white/70 hover:text-white"
                )}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang("ar")}
                aria-pressed={lang === "ar"}
                className={cn(
                  "px-3 py-1 transition-colors",
                  lang === "ar" ? "bg-gold text-night" : "text-white/70 hover:text-white"
                )}
              >
                ع
              </button>
            </div>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="text-white lg:hidden"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Nav tabs (desktop) */}
        <nav className="hidden justify-end gap-1 pb-3 pt-4 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-4 py-2 text-sm tracking-wide transition-colors",
                isActive(item.href)
                  ? "bg-gold/90 text-night"
                  : "text-white/80 hover:bg-white/5 hover:text-white"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden pb-1 lg:block" />
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 bg-night lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "px-4 py-3 text-base transition-colors",
                  isActive(item.href)
                    ? "bg-gold/90 text-night"
                    : "text-white/80 hover:bg-white/5 hover:text-white"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
