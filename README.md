# Muhammad Anus Akhtar — Developer Portfolio

A premium, animated portfolio built with Next.js 15, TypeScript, Tailwind CSS 4, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing Content

Everything content-related lives in `src/data/` — edit these files to update the site, no component changes needed:

- `personal.ts` — name, title, bio, contact info, social links, nav links
- `projects.ts` — portfolio projects (append to the array to add more)
- `skills.ts` — skill categories and proficiency levels
- `services.ts` — services offered
- `testimonials.ts` — client testimonials
- `experience.ts` — career timeline and stat counters

Replace the placeholder assets in `public/` (`profile.svg`, `resume.pdf`, `projects/*.svg`, `testimonials/*.svg`, `og-image.svg`) with your real photo, resume, and project screenshots. `scripts/gen-placeholders.mjs` shows how the SVG placeholders were generated if you need to regenerate them.

## Structure

```
src/
  app/            # routes, layout, metadata, sitemap/robots
  components/     # shared UI, sections/, ui/, icons/
  data/           # site content (see above)
  hooks/          # custom hooks (active section, count-up, mounted)
  lib/            # utilities
  types/          # shared TypeScript types
```

## Stack

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · Framer Motion · Lucide Icons · next-themes
