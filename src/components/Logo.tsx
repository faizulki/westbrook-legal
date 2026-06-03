import Link from "next/link";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

/**
 * Logo — typographic monogram lockup. No image asset required, so the brand is
 * trivial to rename via site.ts. `tone` adapts it for light or dark backgrounds.
 */
export function Logo({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  const text = tone === "light" ? "text-white" : "text-navy";
  const sub = tone === "light" ? "text-white/70" : "text-muted";

  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-md border border-gold/60 bg-gold/5 font-serif text-lg font-semibold tracking-tight text-gold transition-colors group-hover:bg-gold/10">
        {site.initials}
      </span>
      <span className="flex flex-col leading-none">
        <span className={cn("font-serif text-lg font-semibold tracking-wide", text)}>
          {site.name}
        </span>
        <span className={cn("mt-1 text-[0.62rem] tracking-[0.28em] uppercase", sub)}>
          Attorneys at Law
        </span>
      </span>
    </Link>
  );
}
