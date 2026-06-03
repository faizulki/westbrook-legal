"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle2, Clock, Loader2, User } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/cn";
import { SectionBand } from "@/components/SectionBand";
import { TitleBar } from "@/components/TitleBar";
import { Reveal } from "@/components/ui/Reveal";

type Form = { service: string; name: string; email: string; phone: string; message: string };

function save(data: Form) {
  if (typeof window === "undefined") return;
  const key = "westbrook_bookings";
  const prev = JSON.parse(window.localStorage.getItem(key) ?? "[]");
  window.localStorage.setItem(
    key,
    JSON.stringify([{ ...data, at: new Date().toISOString() }, ...prev])
  );
}

export function BookView() {
  const { t, dir } = useLang();
  const [service, setService] = useState<string | null>(null);
  const [form, setForm] = useState<Form>({ service: "", name: "", email: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  function choose(label: string) {
    setService(label);
    setForm((f) => ({ ...f, service: label }));
    if (typeof document !== "undefined") {
      requestAnimationFrame(() =>
        document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" })
      );
    }
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return;
    setSending(true);
    await new Promise((r) => setTimeout(r, 700));
    save(form);
    setSending(false);
    setDone(true);
  }

  return (
    <>
      <SectionBand title={t.bands.book} />

      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_1fr]">
          {/* Left: terms */}
          <Reveal>
            <TitleBar>{t.book.titleBar}</TitleBar>
            <div className="bg-paper px-7 py-8 lg:px-9">
              <p className="font-display text-lg font-semibold text-ink">{t.book.intro}</p>
              <ul className="mt-6 space-y-3">
                {t.book.terms.map((term, i) => (
                  <li key={i} className="flex gap-3 text-[0.98rem] leading-relaxed text-slateblue">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    <span>{term}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-7 font-display text-base font-semibold text-ink">
                {t.book.dontHesitate}
              </p>
              <p className="mt-2 text-[0.98rem] leading-relaxed text-slateblue">
                {t.book.closing}
              </p>
            </div>
          </Reveal>

          {/* Right: image + navy note */}
          <Reveal delay={120} className="flex flex-col gap-6">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80"
                alt="Signing a legal document"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="bg-navy px-7 py-8 lg:px-9">
              <h3 className="font-display text-xl font-semibold text-gold-bright">
                {t.home.cta}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/80">{t.book.intro}</p>
            </div>
          </Reveal>
        </div>

        {/* Booking tiers */}
        <Reveal className="mt-10 grid gap-5 sm:grid-cols-2">
          <TierRow
            title={t.book.personalMeeting}
            duration={t.book.personalDuration}
            price={t.book.personalPrice}
            icon={User}
            label={t.common.bookNow}
            onBook={() => choose(t.book.personalMeeting)}
            active={service === t.book.personalMeeting}
          />
          <TierRow
            title={t.book.phoneAdvice}
            duration={t.book.phoneDuration}
            price={t.book.phonePrice}
            icon={Clock}
            label={t.common.bookNow}
            onBook={() => choose(t.book.phoneAdvice)}
            active={service === t.book.phoneAdvice}
          />
        </Reveal>

        {/* Booking form (revealed on choose) */}
        {service && (
          <div id="booking-form" className="mt-10 scroll-mt-28">
            {done ? (
              <div className="bg-paper px-8 py-12 text-center">
                <CheckCircle2 size={44} className="mx-auto text-gold" />
                <p className="mt-5 font-display text-xl font-semibold text-ink">
                  {t.contact.form.success}
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="bg-paper px-7 py-8 lg:px-9" dir={dir}>
                <p className="font-display text-lg font-semibold text-ink">
                  {service} — {t.bands.book}
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <input
                    aria-label={t.contact.form.name}
                    placeholder={t.contact.form.name}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="bk-input"
                  />
                  <input
                    aria-label={t.contact.form.phone}
                    placeholder={t.contact.form.phone}
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="bk-input"
                  />
                  <input
                    aria-label={t.contact.form.email}
                    type="email"
                    placeholder={t.contact.form.email}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="bk-input sm:col-span-2"
                  />
                  <textarea
                    aria-label={t.contact.form.message}
                    placeholder={t.contact.form.message}
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="bk-input resize-none sm:col-span-2"
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className={cn(
                    "mt-6 inline-flex items-center gap-2 bg-gold px-8 py-3 font-display font-medium text-night transition-colors hover:bg-gold-bright disabled:opacity-50"
                  )}
                >
                  {sending ? <Loader2 size={16} className="animate-spin" /> : null}
                  {t.common.bookNow}
                </button>
                <style>{`
                  .bk-input {
                    width: 100%;
                    border: 1px solid #d8d2c4;
                    background: #faf9f5;
                    padding: 0.7rem 0.9rem;
                    color: var(--color-ink);
                    outline: none;
                  }
                  .bk-input::placeholder { color: #9a958a; }
                  .bk-input:focus { border-color: var(--color-gold); }
                `}</style>
              </form>
            )}
          </div>
        )}
      </div>
    </>
  );
}

function TierRow({
  title,
  duration,
  price,
  icon: Icon,
  label,
  onBook,
  active,
}: {
  title: string;
  duration: string;
  price: string;
  icon: typeof User;
  label: string;
  onBook: () => void;
  active: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-between gap-4 bg-paper px-6 py-6 transition-shadow",
        active ? "ring-2 ring-gold" : ""
      )}
    >
      <div className="flex items-center gap-4">
        <span className="grid h-11 w-11 place-items-center rounded-full bg-navy/5 text-navy">
          <Icon size={20} />
        </span>
        <div>
          <p className="font-display text-lg font-semibold text-ink">{title}</p>
          <p className="text-sm text-slateblue">
            {duration} · <span className="text-gold">{price}</span>
          </p>
        </div>
      </div>
      <button
        type="button"
        onClick={onBook}
        className="bg-gold px-6 py-2.5 font-display text-sm font-medium text-night transition-colors hover:bg-gold-bright"
      >
        {label}
      </button>
    </div>
  );
}
