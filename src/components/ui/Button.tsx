import Link from "next/link";
import { type ComponentProps, type ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Button — gold-forward primitive matching the template's booking buttons. */

type Variant = "gold" | "navy" | "outline";

const base =
  "inline-flex items-center justify-center gap-2 font-display text-sm font-medium tracking-wide transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  gold: "bg-gold text-night hover:bg-gold-bright",
  navy: "bg-navy text-white hover:bg-navy/85",
  outline: "border border-gold/60 text-gold hover:bg-gold hover:text-night",
};

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

type AsLink = CommonProps & { href: string } & Omit<
    ComponentProps<typeof Link>,
    "href" | "className" | "children"
  >;
type AsButton = CommonProps & { href?: undefined } & Omit<
    ComponentProps<"button">,
    "className" | "children"
  >;

export function Button(props: AsLink | AsButton) {
  const { variant = "gold", className, children, ...rest } = props;
  const classes = cn(base, "px-7 py-3", variants[variant], className);

  if (rest.href !== undefined) {
    const { href, ...linkRest } = rest;
    return (
      <Link href={href} className={classes} {...linkRest}>
        {children}
      </Link>
    );
  }
  const { href: _href, ...buttonRest } = rest;
  void _href;
  return (
    <button className={classes} {...buttonRest}>
      {children}
    </button>
  );
}
