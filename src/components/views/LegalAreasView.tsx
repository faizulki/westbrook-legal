"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { legalAreas, pick } from "@/lib/content";
import { SectionBand } from "@/components/SectionBand";
import { TitleBar } from "@/components/TitleBar";
import { Reveal } from "@/components/ui/Reveal";

export function LegalAreasView() {
  const { t, lang } = useLang();

  return (
    <>
      <SectionBand title={t.bands.legal} />

      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8 lg:py-16">
        <Reveal>
          <TitleBar>{t.legal.titleBar}</TitleBar>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {legalAreas.map((area) => (
              <article
                key={area.slug}
                className="group flex flex-col items-center bg-navy px-5 py-8 text-center transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="h-24 w-24 overflow-hidden rounded-full border border-gold/50 p-1">
                  <div className="relative h-full w-full overflow-hidden rounded-full">
                    <Image
                      src={area.image}
                      alt=""
                      fill
                      sizes="96px"
                      className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                    />
                  </div>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-gold-bright">
                  {pick(area.title, lang)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/80">
                  {pick(area.tagline, lang)}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-white/55">
                  {pick(area.description, lang)}
                </p>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="mx-auto mt-12 max-w-3xl text-center text-[1.02rem] leading-relaxed text-mist">
            {t.legal.footnote}
          </p>
          <div className="mt-6 text-center">
            <Link
              href="/consultation"
              className="font-display text-gold underline-offset-4 transition-colors hover:text-gold-bright hover:underline"
            >
              {t.nav.book} →
            </Link>
          </div>
        </Reveal>
      </div>
    </>
  );
}
