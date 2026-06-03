"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { cn } from "@/lib/cn";
import { Button } from "./ui/Button";
import { legalAreas } from "@/lib/content";

/**
 * ConsultationForm — simple, professional booking request. Persists to
 * localStorage for the demo; swap `saveRequest` for a real API/scheduler later.
 */

type Form = {
  area: string;
  type: string;
  date: string;
  name: string;
  email: string;
  phone: string;
  message: string;
};

const TYPES = ["In-person meeting", "Phone call", "Video call"];

function saveRequest(data: Form) {
  if (typeof window === "undefined") return;
  const key = "westbrook_consultations";
  const prev = JSON.parse(window.localStorage.getItem(key) ?? "[]");
  window.localStorage.setItem(
    key,
    JSON.stringify([{ ...data, at: new Date().toISOString() }, ...prev])
  );
}

export function ConsultationForm() {
  const [form, setForm] = useState<Form>({
    area: legalAreas[0].title,
    type: TYPES[0],
    date: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  function set<K extends keyof Form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function validate() {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Please enter a valid email.";
    if (!form.phone.trim()) next.phone = "Please enter a phone number.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSending(true);
    await new Promise((r) => setTimeout(r, 700));
    saveRequest(form);
    setSending(false);
    setDone(true);
  }

  if (done) {
    return (
      <div className="rounded-2xl border border-line bg-cream p-10 text-center">
        <CheckCircle2 size={44} className="mx-auto text-gold" />
        <h2 className="mt-5 font-serif text-2xl font-semibold text-navy">
          Request received
        </h2>
        <p className="mx-auto mt-3 max-w-md text-slate">
          Thank you, {form.name.split(" ")[0]}. We&apos;ve recorded your request
          for a {form.type.toLowerCase()} regarding {form.area}. A member of our
          team will contact you at {form.email} to confirm a time.
        </p>
        <Button
          variant="outline"
          className="mt-7"
          onClick={() => {
            setForm({
              area: legalAreas[0].title,
              type: TYPES[0],
              date: "",
              name: "",
              email: "",
              phone: "",
              message: "",
            });
            setDone(false);
          }}
        >
          Submit another request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-line bg-paper p-7 shadow-sm sm:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Legal area">
          <select
            value={form.area}
            onChange={(e) => set("area", e.target.value)}
            className="input"
          >
            {legalAreas.map((a) => (
              <option key={a.slug}>{a.title}</option>
            ))}
          </select>
        </Field>

        <Field label="Consultation type">
          <select
            value={form.type}
            onChange={(e) => set("type", e.target.value)}
            className="input"
          >
            {TYPES.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </Field>

        <Field label="Preferred date">
          <input
            type="date"
            value={form.date}
            onChange={(e) => set("date", e.target.value)}
            className="input"
          />
        </Field>

        <Field label="Phone number" error={errors.phone}>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => set("phone", e.target.value)}
            autoComplete="tel"
            className={cn("input", errors.phone && "input-error")}
          />
        </Field>

        <Field label="Full name" error={errors.name}>
          <input
            type="text"
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
            autoComplete="name"
            className={cn("input", errors.name && "input-error")}
          />
        </Field>

        <Field label="Email address" error={errors.email}>
          <input
            type="email"
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
            autoComplete="email"
            className={cn("input", errors.email && "input-error")}
          />
        </Field>

        <div className="sm:col-span-2">
          <Field label="How can we help? (optional)">
            <textarea
              rows={4}
              value={form.message}
              onChange={(e) => set("message", e.target.value)}
              placeholder="Briefly describe your matter so we can prepare."
              className="input resize-none"
            />
          </Field>
        </div>
      </div>

      <p className="mt-5 text-xs leading-relaxed text-muted">
        Submitting this request does not create an attorney–client relationship.
        We will contact you to confirm your appointment.
      </p>

      <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto" disabled={sending}>
        {sending ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Sending…
          </>
        ) : (
          "Request Consultation"
        )}
      </Button>

      <style>{`
        .input {
          width: 100%;
          border-radius: 0.625rem;
          border: 1px solid var(--color-line);
          background: var(--color-paper);
          padding: 0.7rem 0.9rem;
          font-size: 0.95rem;
          color: var(--color-ink);
          outline: none;
          transition: border-color 0.2s;
        }
        .input::placeholder { color: var(--color-muted); }
        .input:focus { border-color: var(--color-gold); }
        .input-error { border-color: #dc2626; }
      `}</style>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-navy">{label}</span>
      {children}
      {error && <span className="mt-1.5 block text-xs text-red-600">{error}</span>}
    </label>
  );
}
