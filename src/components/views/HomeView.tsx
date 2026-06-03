"use client";

import Image from "next/image";
import { useT } from "@/lib/i18n";
import { SectionBand } from "@/components/SectionBand";
import { Reveal } from "@/components/ui/Reveal";

export function HomeView() {
  const t = useT();
  return (
    <>
      <SectionBand title={t.bands.welcome} />

      <div className="mx-auto max-w-5xl px-6 py-12 lg:py-16">
        <Reveal>
          <div className="grid gap-0 bg-paper shadow-2xl shadow-black/30 md:grid-cols-2">
            {/* Image */}
            <div className="relative min-h-[300px] bg-night md:min-h-full">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80"
                alt="City skyline"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover grayscale"
              />
            </div>

            {/* Text */}
            <div className="px-8 py-10 text-center lg:px-10 lg:py-14">
              <h2 className="whitespace-pre-line font-display text-2xl font-semibold leading-snug text-ink lg:text-[1.7rem]">
                {t.home.heading}
              </h2>
              <span className="mx-auto mt-5 block h-px w-16 bg-gold" />
              <p className="mt-6 text-[1.02rem] leading-relaxed text-slateblue">
                {t.home.p1}
              </p>
              <p className="mt-5 text-[1.02rem] leading-relaxed text-slateblue">
                {t.home.p2}
              </p>
              <p className="mt-6 font-display text-lg font-semibold text-ink">
                {t.home.cta}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </>
  );
}
