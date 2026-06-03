import { type ReactNode } from "react";
import { Reveal } from "./ui/Reveal";

/** Consistent page banner for inner pages. */
export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
}) {
  return (
    <header className="border-b border-line bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <Reveal className="max-w-2xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-gold" />
            <span className="eyebrow text-xs font-semibold text-gold">{eyebrow}</span>
          </div>
          <h1 className="font-serif text-4xl font-semibold leading-tight text-navy sm:text-5xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-5 text-lg leading-relaxed text-slate">{intro}</p>
          )}
        </Reveal>
      </div>
    </header>
  );
}
