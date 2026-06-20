# Vet & Pet Site — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a superb, bilingual (Greek/English) static marketing site for the "Vet & Pet" veterinary clinic, with a product showcase catalog and a waiting-list email capture, ready to deploy to Vercel.

**Architecture:** Astro static site. EL is the canonical locale at `/`, EN mirrors under `/en`. Page content is built from reusable section components that take a `locale` prop, so EL/EN pages stay DRY. Products and services come from typed content collections so a real store can be switched on later without a rewrite. Near-zero client JS (nav menu, scroll reveal, form submit only).

**Tech Stack:** Astro 5, Tailwind CSS v4 (via `@tailwindcss/vite`), Astro content collections, `@astrojs/sitemap`, Google Fonts (Greek-covering), Formspree (configurable) with `mailto:` fallback.

---

## File structure (target)

```
Kate/
  astro.config.mjs            # i18n (el default, en), sitemap, site url
  package.json
  tsconfig.json
  src/
    styles/global.css         # Tailwind import + @theme tokens + base
    i18n/
      ui.ts                   # el/en string dictionaries + t() helper + locales
    content.config.ts         # products + services collection schemas
    content/
      products/*.json         # ~10 placeholder products
      services/*.json         # ~8 placeholder services
    layouts/
      BaseLayout.astro        # html shell, meta, hreflang, fonts, header/footer
    components/
      Header.astro            # logo, nav, language switch (mobile menu)
      Footer.astro            # mini-nav, hours, cat accent, copyright
      Hero.astro
      SectionReveal.astro     # scroll-reveal wrapper (IntersectionObserver)
      ServiceCard.astro
      ProductCard.astro
      SignupForm.astro        # waiting-list + contact (validation, endpoint, mailto fallback)
      art/HandPaw.astro       # redrawn IMG_4709 single-line SVG
      art/CatAccent.astro     # black-cat silhouette accent
    pages/
      index.astro             # EL home
      services.astro
      shop.astro
      about.astro
      contact.astro
      en/index.astro          # EN mirror (renders same sections, locale="en")
      en/services.astro
      en/shop.astro
      en/about.astro
      en/contact.astro
    sections/                 # page-body components shared by EL/EN pages
      home/*.astro
      ...
  public/
    logo.png
    robots.txt
    images/...                # placeholder product/clinic images
```

---

## Task 1: Scaffold Astro + Tailwind

**Files:**
- Create: `package.json`, `astro.config.mjs`, `tsconfig.json`, `src/styles/global.css`, `src/pages/index.astro`

- [ ] **Step 1: Init Astro (empty template, npm, TypeScript) in the Kate folder**

Run (from `C:\Users\denno\Desktop\Kate`, which already has git + docs/):
```bash
npm create astro@latest . -- --template minimal --no-install --no-git --typescript strict --yes
npm install
npm install @tailwindcss/vite tailwindcss @astrojs/sitemap
```

- [ ] **Step 2: Configure `astro.config.mjs`** (i18n + tailwind vite plugin + sitemap)

```js
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://vetandpet.gr', // placeholder; update at deploy
  i18n: {
    locales: ['el', 'en'],
    defaultLocale: 'el',
    routing: { prefixDefaultLocale: false },
  },
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
```

- [ ] **Step 3: `src/styles/global.css`** — import Tailwind (theme tokens added in Task 2)

```css
@import "tailwindcss";
```

- [ ] **Step 4: Minimal `src/pages/index.astro`** to prove build

```astro
---
import '../styles/global.css';
---
<html lang="el"><head><meta charset="utf-8"><title>Vet & Pet</title></head>
<body><h1 class="text-3xl">Vet & Pet</h1></body></html>
```

- [ ] **Step 5: Verify build**

Run: `npm run build`
Expected: completes, `dist/index.html` exists, no errors.

- [ ] **Step 6: Commit**

```bash
git add -A && git commit -m "chore: scaffold Astro + Tailwind + i18n config"
```

---

## Task 2: Design tokens, fonts, base styles

**Files:**
- Modify: `src/styles/global.css`

- [ ] **Step 1: Add `@theme` tokens + fonts + base layer** to `global.css`

Fonts via Google Fonts `@import` (both cover Greek — verified in Step 2). Headings: Cormorant Garamond; body: Inter.

```css
@import "tailwindcss";
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@400;500;600;700&display=swap&subset=greek,greek-ext,latin');

@theme {
  --color-paper: #E8E6DA;
  --color-paper-raised: #FCFBF7;
  --color-sand: #DAD7C6;
  --color-ink: #1A1A1A;
  --color-ink-soft: #4A463E;
  --color-orange: #D9531E;
  --color-orange-soft: #F0D9CC; /* soft tint of orange for backgrounds */
  --font-serif: 'Cormorant Garamond', Georgia, serif;
  --font-sans: 'Inter', system-ui, sans-serif;
}

@layer base {
  html { scroll-behavior: smooth; }
  body { background: var(--color-paper); color: var(--color-ink);
         font-family: var(--font-sans); -webkit-font-smoothing: antialiased; }
  h1,h2,h3 { font-family: var(--font-serif); font-weight: 600; letter-spacing: .01em; }
  @media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } }
}
```

NOTE during execution: confirm Greek renders (render a Greek heading and screenshot); tune tints to taste.

- [ ] **Step 2: Verify** — `npm run build` passes; add a temporary Greek string "Καλώς ήρθατε" to index and confirm glyphs in preview, then revert.

- [ ] **Step 3: Commit** — `git commit -am "feat: design tokens, fonts, base styles"`

---

## Task 3: i18n dictionary + helper

**Files:**
- Create: `src/i18n/ui.ts`, `src/i18n/ui.test.mjs`

- [ ] **Step 1: Write `ui.ts`** — locales, dictionaries, `t()` and `localizedPath()` helpers

```ts
export const locales = ['el', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'el';

export const ui = {
  el: {
    'nav.home': 'Αρχική', 'nav.services': 'Υπηρεσίες', 'nav.shop': 'Κατάστημα',
    'nav.about': 'Σχετικά', 'nav.contact': 'Επικοινωνία',
    'cta.book': 'Κλείστε ραντεβού', 'cta.askStore': 'Ρωτήστε στο κατάστημα',
    'shop.soon': 'Το ηλεκτρονικό κατάστημα έρχεται σύντομα',
    'shop.notify': 'Ειδοποιήστε με', 'form.name': 'Όνομα', 'form.email': 'Email',
    'form.message': 'Μήνυμα', 'form.send': 'Αποστολή',
    'form.ok': 'Ευχαριστούμε! Θα επικοινωνήσουμε σύντομα.',
    'form.err': 'Κάτι πήγε στραβά. Δοκιμάστε ξανά.',
    // ...full set added during execution
  },
  en: {
    'nav.home': 'Home', 'nav.services': 'Services', 'nav.shop': 'Shop',
    'nav.about': 'About', 'nav.contact': 'Contact',
    'cta.book': 'Book a visit', 'cta.askStore': 'Ask in store',
    'shop.soon': 'Online store coming soon',
    'shop.notify': 'Notify me', 'form.name': 'Name', 'form.email': 'Email',
    'form.message': 'Message', 'form.send': 'Send',
    'form.ok': 'Thank you! We will be in touch soon.',
    'form.err': 'Something went wrong. Please try again.',
  },
} as const;

export function t(locale: Locale, key: keyof typeof ui['el']): string {
  return (ui[locale] as Record<string, string>)[key] ?? (ui.el as Record<string, string>)[key] ?? key;
}

// Map a route key to its localized URL. EL has no prefix, EN is /en.
export function localizedPath(locale: Locale, path: string): string {
  const clean = path.replace(/^\//, '');
  if (locale === 'en') return '/en/' + clean;
  return '/' + clean;
}
```

- [ ] **Step 2: Write self-check `ui.test.mjs`** (node, assert — real logic)

```js
import assert from 'node:assert';
import { t, localizedPath } from './ui.ts';
assert.equal(t('el', 'nav.home'), 'Αρχική');
assert.equal(t('en', 'nav.home'), 'Home');
assert.equal(localizedPath('en', '/shop'), '/en/shop');
assert.equal(localizedPath('el', '/shop'), '/shop');
console.log('i18n ok');
```

- [ ] **Step 3: Run check** — `npx tsx src/i18n/ui.test.mjs` (install tsx if needed: `npm i -D tsx`). Expected: `i18n ok`.

- [ ] **Step 4: Commit** — `git commit -am "feat: i18n dictionary + helpers with self-check"`

---

## Task 4: Content collections (products + services) + placeholder data

**Files:**
- Create: `src/content.config.ts`, `src/content/products/*.json`, `src/content/services/*.json`

- [ ] **Step 1: `src/content.config.ts`** schema

```ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const products = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/products' }),
  schema: ({ image }) => z.object({
    category: z.enum(['food', 'toys', 'accessories', 'health']),
    name_el: z.string(), name_en: z.string(),
    desc_el: z.string(), desc_en: z.string(),
    price: z.number().nullable().default(null),
    image: z.string(),            // path under /public/images
    featured: z.boolean().default(false),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/services' }),
  schema: z.object({
    icon: z.string(),
    title_el: z.string(), title_en: z.string(),
    desc_el: z.string(), desc_en: z.string(),
    order: z.number(),
  }),
});

export const collections = { products, services };
```

- [ ] **Step 2: Create ~10 product JSON files** across all four categories (placeholder names/prices/images). Example `src/content/products/royal-canin-kitten.json`:

```json
{
  "category": "food",
  "name_el": "Ξηρά Τροφή για Γατάκια",
  "name_en": "Kitten Dry Food",
  "desc_el": "Πλήρης τροφή για γατάκια έως 12 μηνών.",
  "desc_en": "Complete nutrition for kittens up to 12 months.",
  "price": 14.90,
  "image": "/images/products/placeholder-food.svg",
  "featured": true
}
```
(Repeat for toys, accessories, health — at least 2 each. Use placeholder SVG images from Task 5.)

- [ ] **Step 3: Create ~8 service JSON files.** Example `src/content/services/exam.json`:

```json
{ "icon": "stethoscope", "order": 1,
  "title_el": "Κλινική Εξέταση", "title_en": "Clinical Examination",
  "desc_el": "Πλήρης εξέταση υγείας για το κατοικίδιό σας.",
  "desc_en": "A complete health check-up for your pet." }
```
(Services: exam, vaccinations, microchip & passport, surgery, dental, antiparasitic, nutrition advice, wellness check.)

- [ ] **Step 4: Verify** — `npm run build` passes, no schema errors.

- [ ] **Step 5: Commit** — `git commit -am "feat: product + service content collections with placeholder data"`

---

## Task 5: Assets — logo, hand+paw SVG, cat accent, placeholder images

**Files:**
- Create: `public/logo.png` (copy), `src/components/art/HandPaw.astro`, `src/components/art/CatAccent.astro`, `public/images/products/placeholder-*.svg`, `public/images/clinic/*.svg`

- [ ] **Step 1: Copy the logo** into public:
```bash
cp "/c/Users/denno/Desktop/Ktin Project/Logo.png" "public/logo.png"
```

- [ ] **Step 2: `HandPaw.astro`** — redraw IMG_4709 as a single-stroke inline SVG. A human hand reaching from the right meeting a cat paw from the left, near-touching (Creation-of-Adam feel), one continuous black stroke, `stroke-linecap: round`. Accept `class` + `animate` props; when `animate`, use `stroke-dasharray`/`dashoffset` draw-in (disabled under reduced-motion). Reference image: `C:\Users\denno\Desktop\Ktin Project\IMG_4709.jpeg`. Trace it faithfully — hand fingers + paw pads as flowing line.

```astro
---
const { class: cls = '', animate = false } = Astro.props;
---
<svg class={cls} viewBox="0 0 1000 740" fill="none" xmlns="http://www.w3.org/2000/svg"
     stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"
     data-animate={animate ? '' : null} aria-hidden="true">
  <!-- paths traced from IMG_4709 during execution -->
</svg>
<style>
  svg[data-animate] path { stroke-dasharray: 2600; stroke-dashoffset: 2600; }
  /* IntersectionObserver adds .drawn to animate; see SectionReveal */
  @media (prefers-reduced-motion: reduce) { svg[data-animate] path { stroke-dashoffset: 0; } }
</style>
```

- [ ] **Step 3: `CatAccent.astro`** — small black-cat silhouette (sitting + climbing variants via `variant` prop), inspired by IMG_4710. Inline SVG, `fill: currentColor`, `aria-hidden`.

- [ ] **Step 4: Placeholder images** — create simple on-brand SVG placeholders (cream bg, line-art icon, label) for products (`placeholder-food.svg`, `-toys.svg`, `-accessories.svg`, `-health.svg`) and clinic photos. Keep them lightweight.

- [ ] **Step 5: Verify** — `npm run build` passes; HandPaw + CatAccent render on a scratch page, screenshot to confirm the hand+paw reads correctly. Refine paths until it looks like the reference.

- [ ] **Step 6: Commit** — `git commit -am "feat: logo, hand+paw SVG, cat accents, placeholder images"`

---

## Task 6: BaseLayout + Header + Footer

**Files:**
- Create: `src/layouts/BaseLayout.astro`, `src/components/Header.astro`, `src/components/Footer.astro`

- [ ] **Step 1: `BaseLayout.astro`** — props `locale`, `title`, `description`, `path` (route key for hreflang). Renders `<html lang={locale}>`, charset/viewport, per-locale `<title>`/meta/OG, `<link rel="alternate" hreflang>` for el/en + x-default, imports global.css, includes Header/Footer, `<slot/>`.

- [ ] **Step 2: `Header.astro`** — props `locale`, `path`. Logo (links home for locale), nav using `t()` + `localizedPath()`, active-link styling, **language switch** linking to the same page in the other locale (computed from `path`), accessible mobile hamburger (details/summary or minimal JS). Sticky, paper background, subtle border.

- [ ] **Step 3: `Footer.astro`** — mini-nav, opening-hours placeholder, address placeholder, social placeholders, a `CatAccent`, copyright with current year.

- [ ] **Step 4: Wire `index.astro`** (EL) to use BaseLayout+Header+Footer with `locale="el"`, and create `src/pages/en/index.astro` with `locale="en"`. Confirm language switch navigates el<->en.

- [ ] **Step 5: Verify** — `npm run build`; preview, click language switch on home, confirm it lands on the mirror page; check header nav links resolve.

- [ ] **Step 6: Commit** — `git commit -am "feat: BaseLayout, Header with language switch, Footer"`

---

## Task 7: Reusable components — Hero, SectionReveal, ServiceCard, ProductCard, SignupForm

**Files:**
- Create: `src/components/Hero.astro`, `SectionReveal.astro`, `ServiceCard.astro`, `ProductCard.astro`, `SignupForm.astro`

- [ ] **Step 1: `SectionReveal.astro`** — wrapper that adds a `reveal` class; a tiny inline script uses IntersectionObserver to add `is-visible` (and triggers HandPaw `.drawn`). No-op under `prefers-reduced-motion`.

- [ ] **Step 2: `Hero.astro`** — props `locale`. Big serif headline + tagline + primary CTA, logo, and a `HandPaw` accent. Generous whitespace, paper/orange palette.

- [ ] **Step 3: `ServiceCard.astro`** — props `service`, `locale`. Icon + localized title/desc, hover lift.

- [ ] **Step 4: `ProductCard.astro`** — props `product`, `locale`. Image, localized name/desc, formatted price (`formatPrice` helper: `€14,90` el / `€14.90` en; null → `t('cta.askStore')`), category tag, "Ask in store" link to contact. Put `formatPrice` in `src/i18n/ui.ts` and extend `ui.test.mjs` with an assert (`formatPrice('el', 14.9) === '14,90 €'`).

- [ ] **Step 5: `SignupForm.astro`** — props `locale`, `variant` ('waitlist' | 'contact'). Fields per variant. Posts via `fetch` to `import.meta.env.PUBLIC_FORM_ENDPOINT`; if unset, the form's `action` is a `mailto:` with prefilled subject/body so it still works. Client validation (required + email regex), bilingual success/error states, honeypot field for spam. `ponytail:` comment naming the upgrade path to a real backend/checkout.

- [ ] **Step 6: Verify** — extend and run `npx tsx src/i18n/ui.test.mjs` (expect formatPrice assert passes); `npm run build` passes.

- [ ] **Step 7: Commit** — `git commit -am "feat: Hero, reveal, ServiceCard, ProductCard, SignupForm"`

---

## Task 8: Home page (EL + EN)

**Files:**
- Create: `src/sections/home/*.astro` (HeroSection, ServicesPreview, MeetKaterina, ShopTeaser, VisitUs), update `src/pages/index.astro` and `src/pages/en/index.astro`

- [ ] **Step 1: Build home section components** (each takes `locale`): Hero, Services preview (first 3–4 services), Meet Katerina intro (+ photo placeholder, link to About), Shop teaser (featured products), Visit Us (address/hours placeholder + map embed placeholder). Wrap scroll sections in `SectionReveal`.

- [ ] **Step 2: Compose** both `index.astro` (el) and `en/index.astro` (en) from these sections via BaseLayout with correct `path="/"`.

- [ ] **Step 3: Verify** — `npm run build`; preview home EL + EN, screenshot desktop + mobile. Confirm hand+paw accent, sections reveal, links work, Greek renders.

- [ ] **Step 4: Commit** — `git commit -am "feat: home page (EL + EN)"`

---

## Task 9: Services page (EL + EN)

**Files:**
- Create: `src/pages/services.astro`, `src/pages/en/services.astro` (+ optional `src/sections/services/*`)

- [ ] **Step 1:** Page intro + responsive grid of `ServiceCard` from the `services` collection (sorted by `order`), CTA to contact. Both locales via shared section, `path="/services"`.
- [ ] **Step 2: Verify** — build + preview both locales, screenshot.
- [ ] **Step 3: Commit** — `git commit -am "feat: services page (EL + EN)"`

---

## Task 10: Shop page (EL + EN)

**Files:**
- Create: `src/pages/shop.astro`, `src/pages/en/shop.astro`, `src/sections/shop/CatalogGrid.astro`, waiting-list banner

- [ ] **Step 1:** Waiting-list banner at top using `SignupForm variant="waitlist"`. Category filter (Food/Toys/Accessories/Health) — accessible buttons toggling visibility via a small inline script (data-category attrs); works without JS (all shown). Grid of `ProductCard` from `products` collection. Both locales, `path="/shop"`.
- [ ] **Step 2: Verify** — build + preview both locales; test category filter; confirm waitlist form validates + mailto fallback. Screenshot.
- [ ] **Step 3: Commit** — `git commit -am "feat: shop page with catalog + waiting list (EL + EN)"`

---

## Task 11: About page (EL + EN)

**Files:**
- Create: `src/pages/about.astro`, `src/pages/en/about.astro`, `src/sections/about/*`

- [ ] **Step 1:** Katerina's story (placeholder copy about opening the clinic, love & respect for animals), values list, clinic photo placeholders, and the **`HandPaw` SVG as the centerpiece** (large, `animate`) with a caption. Both locales, `path="/about"`.
- [ ] **Step 2: Verify** — build + preview both locales; confirm hand+paw draw animation (and reduced-motion fallback). Screenshot.
- [ ] **Step 3: Commit** — `git commit -am "feat: about page with hand+paw centerpiece (EL + EN)"`

---

## Task 12: Contact page (EL + EN)

**Files:**
- Create: `src/pages/contact.astro`, `src/pages/en/contact.astro`, `src/sections/contact/*`

- [ ] **Step 1:** Address/phone/email/hours placeholders (clearly marked TODO for real values), map embed placeholder (OpenStreetMap iframe with placeholder coords), and `SignupForm variant="contact"`. Both locales, `path="/contact"`.
- [ ] **Step 2: Verify** — build + preview both locales; submit form (mailto fallback opens), screenshot.
- [ ] **Step 3: Commit** — `git commit -am "feat: contact page (EL + EN)"`

---

## Task 13: SEO polish — sitemap, robots, meta, OG

**Files:**
- Create: `public/robots.txt`; Modify: `BaseLayout.astro` (OG/Twitter tags, canonical)

- [ ] **Step 1:** `robots.txt` allowing all + sitemap URL. Confirm `@astrojs/sitemap` emits `sitemap-index.xml`. Add canonical + OG image (use logo) + per-locale OG title/description in BaseLayout.
- [ ] **Step 2: Verify** — `npm run build`; confirm `dist/sitemap-index.xml` and `dist/robots.txt` exist; view-source a page for correct hreflang + OG tags.
- [ ] **Step 3: Commit** — `git commit -am "feat: SEO — sitemap, robots, OG/meta per locale"`

---

## Task 14: Final verification pass

- [ ] **Step 1:** `npm run build` clean (no warnings/errors).
- [ ] **Step 2:** Preview the built site. Screenshot **Home (EL), Home (EN), Shop, About** at desktop (1280) and mobile (390) widths.
- [ ] **Step 3:** Manual checklist: language switch on every page; nav active states; catalog renders + filter; both forms validate + mailto fallback; hand+paw shows + animates; Greek glyphs correct everywhere; no console errors; reduced-motion respected; images have alt text; keyboard nav through header.
- [ ] **Step 4:** Write a short review section in `tasks/todo.md` (what was built, known placeholders to swap, how to deploy to Vercel, how to enable the real shop later).
- [ ] **Step 5: Commit** — `git commit -am "chore: final verification + project notes"`

---

## Notes for the implementer

- **Placeholders to swap before launch** (clearly comment each): address, phone, email, opening hours, real product photos + prices, map coordinates, `PUBLIC_FORM_ENDPOINT` (Formspree id), `site` URL in astro config.
- **Enable real shop later:** product data already typed; add cart state + a checkout provider (Stripe/Viva) + auth (Supabase) — the `ProductCard` "Ask in store" CTA becomes "Add to cart". This plan deliberately stops short of that.
- **Verification uses `astro build` + preview screenshots**, not unit tests, except the i18n/format helpers which have an assert self-check.
- Keep client JS minimal; prefer CSS + Astro. Respect `prefers-reduced-motion`.
