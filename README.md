# Westbrook Legal — Template Edition

A faithful, professional recreation of the TM Juristbyrå law-firm template:
dark charcoal canvas, light content panels, gold accents, classic serif
typography, and a working **EN / AR language toggle with full RTL support**.

Built with Next.js, TypeScript, and Tailwind CSS v4.

## Tech Stack

- **Next.js 16** (App Router, React 19) — static-rendered pages
- **TypeScript** (strict)
- **Tailwind CSS v4** — design tokens in `src/app/globals.css`
- **Lucide React** — icons
- Lightweight IntersectionObserver scroll reveals (no animation library)

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run start
npm run lint
```

## Pages (mirrors the template)

- **Home** — WELCOME band + image/text welcome panel
- **About** — "We are here for you", scales image, navy **Our branches abroad**
  (Dubai / London / Muscat), and lawyer-circle team profiles
- **Legal areas** — five navy cards with circular images and gold titles
  (Business, Family, Migration, International, Plaintiff's counsel)
- **Book a consultation** — terms & pricing, Personal meeting / Telephone advice
  tiers, and a booking request form
- **Contact** — "Warm welcome" details, **Documents / Forms**, Send-message form,
  and an embedded map
- Plus `sitemap.xml`, `robots.txt`, custom 404

## Internationalization (EN / AR)

`src/lib/i18n.tsx` holds a single bilingual dictionary and a `LanguageProvider`
that persists the choice to `localStorage` and flips `<html dir>` to RTL for
Arabic. Components read strings via `useT()` / `useLang()`. List content
(legal areas, attorneys) carries `{ en, ar }` fields in `src/lib/content.ts`.

## Design Tokens (`src/app/globals.css`)

| Token            | Value     | Use                       |
| ---------------- | --------- | ------------------------- |
| `--color-night`  | `#0b0b0b` | Header / top bar          |
| `--color-coal`   | `#2e2e2e` | Page background           |
| `--color-stone`  | `#6e6e6e` | Section bands / footer    |
| `--color-navy`   | `#14233f` | Info / branch panels      |
| `--color-gold`   | `#b8975a` | Accent                    |

Display: **Playfair Display**; body: **EB Garamond**.

## Customizing

- Brand, contact values, branches: `src/lib/site.ts`
- All copy (both languages): `src/lib/i18n.tsx`
- Legal areas & attorneys: `src/lib/content.ts`
- Booking and message forms persist to `localStorage` — swap the `save`
  helpers for a real API/scheduler to go live.

## Notes

- Imagery is from Unsplash (allowlisted in `next.config.ts`). Replace with
  licensed photography before launch.
- All content is fictional demo copy; the design is modeled on the
  publicly viewable tmjurist.com template.
