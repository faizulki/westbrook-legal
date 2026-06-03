"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { cn } from "@/lib/cn";
import { Button } from "./ui/Button";

type Form = { name: string; email: string; phone: string; message: string };

function saveMessage(data: Form) {
  if (typeof window === "undefined") return;
  const key = "westbrook_messages";
  const prev = JSON.parse(window.localStorage.getItem(key) ?? "[]");
  window.localStorage.setItem(
    key,
    JSON.stringify([{ ...data, at: new Date().toISOString() }, ...prev])
  );
}

export function ContactForm() {
  const [form, setForm] = useState<Form>({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  function set<K extends keyof Form>(k: K, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  function validate() {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Please enter a valid email.";
    if (!form.message.trim()) next.message = "Please enter a message.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSending(true);
    await new Promise((r) => setTimeout(r, 700));
    saveMessage(form);
    setSending(false);
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-line bg-cream p-10 text-center">
        <CheckCircle2 size={44} className="text-gold" />
        <h3 className="mt-5 font-serif text-2xl font-semibold text-navy">
          Thank you
        </h3>
        <p className="mt-3 max-w-sm text-sm text-slate">
          Your message has been received, {form.name.split(" ")[0]}. We&apos;ll
          respond within one business day.
        </p>
        <Button
          variant="outline"
          className="mt-7"
          onClick={() => {
            setForm({ name: "", email: "", phone: "", message: "" });
            setSent(false);
          }}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-line bg-paper p-7 shadow-sm sm:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-navy">Full name</span>
          <input
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
            autoComplete="name"
            className={cn("cinput", errors.name && "cinput-error")}
          />
          {errors.name && <span className="mt-1.5 block text-xs text-red-600">{errors.name}</span>}
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-navy">Phone (optional)</span>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => set("phone", e.target.value)}
            autoComplete="tel"
            className="cinput"
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-2 block text-sm font-medium text-navy">Email address</span>
          <input
            type="email"
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
            autoComplete="email"
            className={cn("cinput", errors.email && "cinput-error")}
          />
          {errors.email && <span className="mt-1.5 block text-xs text-red-600">{errors.email}</span>}
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-2 block text-sm font-medium text-navy">Message</span>
          <textarea
            rows={5}
            value={form.message}
            onChange={(e) => set("message", e.target.value)}
            placeholder="How can we help you?"
            className={cn("cinput resize-none", errors.message && "cinput-error")}
          />
          {errors.message && (
            <span className="mt-1.5 block text-xs text-red-600">{errors.message}</span>
          )}
        </label>
      </div>

      <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto" disabled={sending}>
        {sending ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Sending…
          </>
        ) : (
          "Send Message"
        )}
      </Button>

      <style>{`
        .cinput {
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
        .cinput::placeholder { color: var(--color-muted); }
        .cinput:focus { border-color: var(--color-gold); }
        .cinput-error { border-color: #dc2626; }
      `}</style>
    </form>
  );
}
