# Westbrook Legal

A clean, professional marketing website for a full-service law firm — light theme,
navy + gold palette, built with Next.js, TypeScript, and Tailwind CSS v4.

This is a standalone project, separate from the Invictus Law site.

## Tech Stack

- **Next.js 16** (App Router, React 19) — static-rendered pages
- **TypeScript** (strict)
- **Tailwind CSS v4** — design tokens in `src/app/globals.css`
- **Lucide React** — icons
- Scroll-reveal animations via a small dependency-free IntersectionObserver component

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run start
npm run lint
```

## Pages

- **Home** — hero, stats, welcome intro, legal areas, why-us, testimonials, CTA
- **About** — story, mission, values, team
- **Legal Areas** — six practice areas with services (sticky quick-nav)
- **Consultation** — "how it works" + request form (localStorage demo)
- **Contact** — contact details, embedded map, message form (localStorage demo)
- Plus `sitemap.xml`, `robots.txt`, custom 404

## Design Tokens (`src/app/globals.css`)

| Token            | Value     | Use                  |
| ---------------- | --------- | -------------------- |
| `--color-paper`  | `#FFFFFF` | Primary background   |
| `--color-cream`  | `#FAF8F4` | Warm sections        |
| `--color-navy`   | `#16243D` | Headings / primary   |
| `--color-gold`   | `#B1893F` | Accent               |
| `--color-slate`  | `#4B5566` | Body copy            |

Headings use **Lora** (serif); body uses **Inter** (sans).

## Customizing

- Brand name, contact info, and nav: `src/lib/site.ts`
- Practice areas, team, testimonials, stats: `src/lib/content.ts`
- The consultation and contact forms persist to `localStorage`. Swap the
  `saveRequest` / `saveMessage` helpers for a real API or scheduler to go live.

## Notes

- Hero/office/team imagery are Unsplash placeholders (allowlisted in
  `next.config.ts`). Replace with licensed photography before launch.
- All content is fictional demo copy.
