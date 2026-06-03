import { type ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * TitleBar — the dark charcoal bar with a white serif heading used to label
 * content panels (e.g. "We are here for you.", "Warm welcome").
 */
export function TitleBar({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("bg-graphite px-6 py-4", className)}>
      <h2 className="font-display text-xl font-medium text-white">{children}</h2>
    </div>
  );
}
