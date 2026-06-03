"use client";

import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { branches } from "@/lib/site";
import { attorneys, pick } from "@/lib/content";
import { SectionBand } from "@/components/SectionBand";
import { TitleBar } from "@/components/TitleBar";
import { Reveal } from "@/components/ui/Reveal";

const portraits = [
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=300&q=80",
];

export function AboutView() {
  const { t, lang } = useLang();

  return (
    <>
      <SectionBand title={t.bands.about} />

      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_1fr]">
          {/* Left: text panel */}
          <Reveal>
            <TitleBar>{t.about.titleBar}</TitleBar>
            <div className="bg-paper px-7 py-8 lg:px-9">
              <span className="mb-6 block h-px w-full bg-gold/30" />
              <div className="space-y-5 text-justify text-[1.02rem] leading-relaxed text-slateblue">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
                <p>{t.about.p3}</p>
                <p>{t.about.p4}</p>
              </div>
            </div>
          </Reveal>

          {/* Right: image + navy branches panel */}
          <Reveal delay={120} className="flex flex-col gap-6">
            <div className="relative aspect-[5/4] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1589578527966-fdac0f44566c?auto=format&fit=crop&w=800&q=80"
                alt="Scales of justice"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>

            <div className="bg-navy px-7 py-8 lg:px-9">
              <h3 className="font-display text-xl font-semibold leading-snug text-gold-bright">
                {t.about.panelHeading}
              </h3>
              <h4 className="mt-7 text-sm font-semibold uppercase tracking-[0.18em] text-white">
                {t.about.branchesTitle}
              </h4>
              <ul className="mt-5 space-y-5">
                {branches.map((b) => (
                  <li key={b.city} className="border-t border-white/15 pt-4">
                    <p className="font-display text-base font-semibold text-gold-bright">
                      {b.city}
                    </p>
                    {b.lines.map((l) => (
                      <p key={l} className="text-sm text-white/80">
                        {l}
                      </p>
                    ))}
                    <p className="mt-1 text-sm text-white/80">
                      <span className="font-semibold">{t.contact.labels.phone}:</span>{" "}
                      {b.phone}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Team */}
        <Reveal className="mt-14">
          <h2 className="text-center font-display text-2xl font-semibold text-white">
            {t.about.teamTitle}
          </h2>
          <span className="mx-auto mt-4 block h-px w-16 bg-gold" />
          <div className="mt-10 grid gap-10 sm:grid-cols-3">
            {attorneys.map((a, i) => (
              <div key={pick(a.name, lang)} className="text-center">
                <div className="mx-auto h-32 w-32 overflow-hidden rounded-full border-2 border-gold/70 p-1">
                  <div className="relative h-full w-full overflow-hidden rounded-full">
                    <Image
                      src={portraits[i]}
                      alt={pick(a.name, lang)}
                      fill
                      sizes="128px"
                      className="object-cover grayscale"
                    />
                  </div>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">
                  {pick(a.name, lang)}
                </h3>
                <p className="text-sm text-mist">{pick(a.role, lang)}</p>
                <p className="text-sm italic text-gold">{pick(a.focus, lang)}</p>
                <div className="mt-3 space-y-1 text-sm text-mist">
                  <p className="flex items-center justify-center gap-2">
                    <Phone size={13} className="text-gold/80" /> {a.phone}
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <Mail size={13} className="text-gold/80" /> {a.email}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </>
  );
}
