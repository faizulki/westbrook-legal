"use client";

import { useState } from "react";
import { CheckCircle2, FileText, Loader2 } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { site } from "@/lib/site";
import { SectionBand } from "@/components/SectionBand";
import { TitleBar } from "@/components/TitleBar";
import { Reveal } from "@/components/ui/Reveal";

type Form = { name: string; phone: string; email: string; message: string };

function save(data: Form) {
  if (typeof window === "undefined") return;
  const key = "westbrook_messages";
  const prev = JSON.parse(window.localStorage.getItem(key) ?? "[]");
  window.localStorage.setItem(
    key,
    JSON.stringify([{ ...data, at: new Date().toISOString() }, ...prev])
  );
}

export function ContactView() {
  const { t, dir } = useLang();
  const [form, setForm] = useState<Form>({ name: "", phone: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) || !form.message.trim())
      return;
    setSending(true);
    await new Promise((r) => setTimeout(r, 700));
    save(form);
    setSending(false);
    setSent(true);
  }

  const L = t.contact.labels;

  return (
    <>
      <SectionBand title={t.bands.contact} />

      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.05fr]">
          {/* Left: details + documents */}
          <Reveal>
            <TitleBar>{t.contact.titleBar}</TitleBar>
            <div className="space-y-5 bg-paper px-7 py-8 text-[0.96rem] text-slateblue lg:px-9">
              <p className="font-display text-lg font-semibold text-ink underline decoration-gold/60 underline-offset-4">
                {t.contact.office}
              </p>

              <div>
                <p className="font-semibold text-ink underline decoration-gold/40 underline-offset-4">
                  {t.contact.headOffice}
                </p>
                <p>{site.headOffice.line1}</p>
                <p>{site.headOffice.line2}</p>
              </div>

              <div>
                <p className="font-semibold text-ink underline decoration-gold/40 underline-offset-4">
                  {t.contact.secondOffice}
                </p>
                <p>{site.secondOffice.line1}</p>
                <p>{site.secondOffice.line2}</p>
                <p className="italic text-slateblue/80">{t.contact.secondNote}</p>
              </div>

              <div className="space-y-1 pt-1">
                <p><b>{L.phone}:</b> {site.phone}</p>
                <p><b>{L.email}:</b> {site.email}</p>
                <p><b>{L.messenger}:</b> {site.messenger}</p>
                <p><b>{L.whatsapp}:</b> {site.whatsapp}</p>
              </div>

              <div className="space-y-1 pt-1">
                <p><b>{L.org}:</b> {site.org}</p>
                <p><b>{L.vat}:</b> {site.vat}</p>
              </div>

              <div className="space-y-1 pt-1">
                <p><b>{L.bank}:</b> {site.bank}</p>
                <p><b>{L.zelle}:</b> {site.zelle}</p>
              </div>
            </div>

            {/* Documents / Forms */}
            <div className="mt-6">
              <TitleBar className="bg-navy">{t.contact.docsTitle}</TitleBar>
              <div className="space-y-4 bg-paper px-7 py-7 lg:px-9">
                {t.contact.docs.map((doc) => (
                  <a
                    key={doc}
                    href="#"
                    className="group block"
                    onClick={(e) => e.preventDefault()}
                  >
                    <p className="flex items-center gap-2 font-semibold text-ink transition-colors group-hover:text-gold">
                      <FileText size={15} className="text-gold" /> {doc}
                    </p>
                    <p className="ms-6 text-xs text-slateblue/70">{t.contact.docsLangs}</p>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right: form + map */}
          <Reveal delay={120}>
            <h2 className="font-display text-2xl font-semibold text-white">
              {t.contact.formTitle}
            </h2>

            {sent ? (
              <div className="mt-5 bg-paper px-8 py-12 text-center">
                <CheckCircle2 size={42} className="mx-auto text-gold" />
                <p className="mt-4 font-display text-lg font-semibold text-ink">
                  {t.contact.form.success}
                </p>
              </div>
            ) : (
              <form onSubmit={submit} dir={dir} className="mt-5 space-y-4">
                <input
                  aria-label={t.contact.form.name}
                  placeholder={t.contact.form.name}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="ct-input"
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    aria-label={t.contact.form.phone}
                    placeholder={t.contact.form.phone}
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="ct-input"
                  />
                  <input
                    aria-label={t.contact.form.email}
                    type="email"
                    placeholder={t.contact.form.email}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="ct-input"
                  />
                </div>
                <textarea
                  aria-label={t.contact.form.message}
                  placeholder={t.contact.form.message}
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="ct-input resize-none"
                />
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center gap-2 bg-navy px-10 py-3 font-display font-medium text-white transition-colors hover:bg-navy/85 disabled:opacity-50"
                >
                  {sending ? <Loader2 size={16} className="animate-spin" /> : null}
                  {t.contact.form.send}
                </button>
              </form>
            )}

            <div className="mt-6 overflow-hidden border border-white/10">
              <div className="relative aspect-[16/10] w-full">
                <iframe
                  title="Office location map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-74.0150%2C40.7030%2C-74.0020%2C40.7110&layer=mapnik"
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        .ct-input {
          width: 100%;
          border: none;
          background: #e9e9e9;
          padding: 0.85rem 1rem;
          color: var(--color-ink);
          outline: none;
        }
        .ct-input::placeholder { color: #8a8a8a; }
        .ct-input:focus { box-shadow: inset 0 -2px 0 var(--color-gold); }
      `}</style>
    </>
  );
}
