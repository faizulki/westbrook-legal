import { type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";

/** Page section wrapper with consistent rhythm and max width. */
export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-16 sm:py-20 lg:py-24", className)}>
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">{children}</div>
    </section>
  );
}

/** Eyebrow + serif heading + optional intro, with a gold accent rule. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
}) {
  const centered = align === "center";
  return (
    <Reveal className={cn("max-w-2xl", centered && "mx-auto text-center")}>
      {eyebrow && (
        <div
          className={cn(
            "mb-4 flex items-center gap-3",
            centered && "justify-center"
          )}
        >
          <span className="h-px w-8 bg-gold" />
          <span className="eyebrow text-xs font-semibold text-gold">{eyebrow}</span>
        </div>
      )}
      <h2 className="font-serif text-3xl font-semibold leading-tight text-navy sm:text-4xl">
        {title}
      </h2>
      {intro && <p className="mt-5 text-lg leading-relaxed text-slate">{intro}</p>}
    </Reveal>
  );
}
