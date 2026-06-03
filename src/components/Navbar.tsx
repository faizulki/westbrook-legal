"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/cn";
import { Logo } from "./Logo";
import { Button } from "./ui/Button";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-md">
      {/* Top utility bar */}
      <div className="hidden border-b border-line/70 bg-cream lg:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-8 py-2 text-xs text-slate">
          <span>{site.address.line1}, {site.address.line2}</span>
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 transition-colors hover:text-gold"
          >
            <Phone size={13} /> {site.phone}
          </a>
        </div>
      </div>

      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 lg:px-8">
        <Logo />

        <div className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative text-sm transition-colors",
                isActive(item.href)
                  ? "text-navy"
                  : "text-slate hover:text-navy"
              )}
            >
              {item.label}
              {isActive(item.href) && (
                <span className="absolute -bottom-1.5 left-0 h-0.5 w-full bg-gold" />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button href="/consultation">Book Consultation</Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="text-navy lg:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-line bg-paper lg:hidden">
          <div className="flex flex-col gap-1 px-6 py-5">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-4 py-3 text-base transition-colors",
                  isActive(item.href)
                    ? "bg-cream text-navy"
                    : "text-slate hover:bg-cream hover:text-navy"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button
              href="/consultation"
              size="lg"
              className="mt-3 w-full"
              onClick={() => setOpen(false)}
            >
              Book Consultation
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
