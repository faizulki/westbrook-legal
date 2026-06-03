"use client";

import Link from "next/link";
import { site } from "@/lib/site";
import { useT } from "@/lib/i18n";

/**
 * Logo — gold geometric monogram + wordmark, echoing the template's framed
 * monogram lockup. Pure CSS/SVG so the brand renames from config alone.
 */
export function Logo() {
  const t = useT();
  return (
    <Link href="/" aria-label={`${t.brand.name} — home`} className="group inline-flex items-center gap-3">
      <span className="relative grid h-12 w-12 place-items-center">
        {/* Thin gold frame */}
        <span className="absolute inset-0 rounded-sm border border-gold/70" />
        <span className="absolute inset-1.5 rounded-sm border border-gold/30" />
        <span className="font-display text-lg font-semibold tracking-tight text-gold-bright">
          {site.initials}
        </span>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-base font-semibold tracking-[0.16em] text-white">
          {t.brand.name}
        </span>
        <span className="mt-1 text-[0.55rem] uppercase tracking-[0.34em] text-gold/80">
          {t.brand.sub}
        </span>
      </span>
    </Link>
  );
}
