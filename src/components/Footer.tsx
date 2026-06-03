"use client";

import { useT } from "@/lib/i18n";
import { site } from "@/lib/site";

export function Footer() {
  const t = useT();
  const year = new Date().getFullYear();
  return (
    <footer className="bg-stone/80">
      <div className="mx-auto max-w-6xl px-6 py-5 text-center lg:px-8">
        <p className="text-sm tracking-wide text-white/90">
          © {year} — {t.brand.name} · {site.org}
        </p>
        <p className="mt-1 text-xs text-white/60">{t.footer.rights}</p>
      </div>
    </footer>
  );
}
