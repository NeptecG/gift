# Vet & Pet — Veterinary Clinic Website (Design Spec)

Date: 2026-06-20
Owner: Neptec (for Katerina / "Vet & Pet" clinic)
Status: Approved to build

## 1. Purpose

A superb-quality marketing/presence website for Katerina's new veterinary
clinic, "Vet & Pet". Bilingual (Greek primary, English secondary). Showcases
services and a product catalog (toys, food, accessories, health). No real
online purchasing yet, but the door is left open: a waiting-list email capture
validates demand, and product/service data is structured so a real store can
be switched on later without a rewrite.

Tone: **warm + a touch playful** — cream editorial base (premium, trustworthy),
playful cat line-art accents, gentle motion. Refined, not cold; cute, not
childish. Reflects her deep love and respect for animals.

## 2. Goals & success criteria

- Looks hand-crafted, not templated. A staff designer would approve.
- Fully bilingual: EL at `/` (canonical), EN at `/en`. Language switch on every page.
- 5 pages: Home, Services, Shop, About, Contact — both languages.
- Catalog renders from structured data (future-store-ready).
- Waiting-list signup works (posts to email) with a safe fallback.
- Loads fast (static, near-zero JS), accessible, SEO-ready per locale.
- The IMG_4709 hand+paw image is featured, redrawn as crisp SVG line-art.
- Builds clean (`astro build`), verified with screenshots before "done".

## 3. Tech stack

- **Astro 5** (static output) + **Tailwind CSS**.
- Astro i18n routing; EL default (no prefix), EN under `/en`.
- **Content collections** for `products` and `services` (typed, bilingual fields).
- Minimal client JS: only for nav/language menu, scroll reveal, form submit.
- Deploy target later: Vercel (static). Not deployed in this build.

Rejected: Next.js (heavier, only justified with a real backend), plain HTML
(bilingual × 5 pages is unmaintainable by hand).

## 4. Visual design language

Derived from `Logo.png` (line-art vet + orange cat on cream, serif wordmark).

**Palette**
- Paper cream `#E8E6DA` — page background
- Ink `#1A1A1A` — text / line-art
- Warm orange `#D9531E` — primary accent (the cat)
- Sand `#DEDccc`-ish soft tone — cards/surfaces (tuned in build)
- White `#FCFBF7` — raised surfaces

**Type** (must have full Greek glyph coverage — verified at build, swapped if not)
- Headings: elegant serif echoing the wordmark (candidate: Cormorant Garamond).
- Body: clean humanist sans (candidate: Inter or Commissioner — both cover Greek).

**Motif & imagery**
- Everything leans line-art, like the logo.
- **Hand + paw (IMG_4709):** redrawn as a single-stroke SVG. Used big in About
  (centerpiece) and as a hero accent. Optional draw-on-scroll stroke animation.
- **Black cats (IMG_4710):** small playful silhouette accents — scroll-to-top
  button, footer flourish, section dividers. Ties to her real clinic decor.
- Logo used in header (small) and hero.

**Motion:** subtle and tasteful — fade/slide reveal on scroll, the line draw,
gentle card hover. Respects `prefers-reduced-motion`.

## 5. Site map & content (placeholder, both languages)

Placeholder content now; Neptec swaps real values later in one pass.
Marked placeholders: address, phone, email, hours, exact service/price lists.

1. **Home / Αρχική**
   - Hero: logo, name, tagline ("Φροντίδα με αγάπη για κάθε ζώο" / "Loving care
     for every animal"), CTA (Book a visit / Κλείστε ραντεβού), hand+paw accent.
   - Services preview (3–4 cards → link to Services).
   - "Meet Katerina" short intro + photo placeholder → link to About.
   - Shop teaser (a few products) → link to Shop.
   - Visit us: address + hours snippet + map.

2. **Services / Υπηρεσίες**
   - Intro line. Grid of service cards with icon + short description.
   - Placeholder services: clinical exam, vaccinations, microchip & passport,
     surgery, dental care, deworming/antiparasitic, nutrition advice, wellness
     check. CTA to contact for appointment.

3. **Shop / Κατάστημα**
   - Intro + **waiting-list banner** ("Online ordering coming soon — notify me").
   - Category filter: Τροφές/Food, Παιχνίδια/Toys, Αξεσουάρ/Accessories, Υγεία/Health.
   - Product cards: image, name, short desc, price (placeholder), category tag,
     "Ask in store / Ρωτήστε στο κατάστημα" → contact.
   - ~8–12 placeholder products across categories.

4. **About / Σχετικά**
   - Katerina's story: why she opened the clinic, philosophy of love & respect
     for animals. **Hand+paw SVG as centerpiece.** Values list. Clinic photos placeholder.

5. **Contact / Επικοινωνία**
   - Address, phone, email, opening hours (placeholders).
   - Map embed (placeholder coordinates).
   - Contact form (name, email, message) → form endpoint, mailto fallback.

Global: header (logo, nav, language switch), footer (mini-nav, hours, social
placeholders, cat accent, copyright).

## 6. Data model

`src/content/products/*.{json|md}` — fields:
`id, category (food|toys|accessories|health), name_el, name_en, desc_el, desc_en,
price (number, EUR) or price_label, image, featured (bool)`

`src/content/services/*` — fields:
`id, icon, title_el, title_en, desc_el, desc_en, order`

i18n strings: `src/i18n/el.json`, `src/i18n/en.json` (nav, buttons, section
headings, form labels, footer).

## 7. Forms (waiting-list + contact)

- Single reusable form component posting to a **configurable endpoint**
  (`PUBLIC_FORM_ENDPOINT`, e.g. Formspree free tier → Katerina's inbox).
- If endpoint unset, **degrade to `mailto:`** so it never breaks pre-launch.
- Client-side validation (required, email format). Success/error states, bilingual.
- `ponytail:` comment naming the upgrade path (real backend/checkout) when she
  commits to selling online.

## 8. Accessibility & SEO

- Semantic HTML, alt text on all imagery, visible focus, keyboard-navigable
  menu + language switch, color contrast AA.
- `prefers-reduced-motion` disables non-essential animation.
- Per-locale `<title>`/meta/OG, `lang` attr, `hreflang` alternates, sitemap,
  `robots.txt`. Greek as canonical.

## 9. Out of scope (deferred — switch on when she wants a store)

Supabase/auth, Viva Wallet/Stripe payments, cart, checkout, stock/inventory,
order management, user accounts. Product/service data layer is already shaped to
feed these later. Waiting-list captures demand in the meantime.

## 10. Verification

- `astro build` passes with no errors.
- Preview the built site; screenshot Home (EL + EN), Shop, About on desktop +
  mobile widths. Confirm: language switch works, catalog renders, forms validate,
  hand+paw art shows, Greek glyphs render correctly.
- No console errors. Lighthouse-ish sanity (fast, accessible).

## 11. Structure (target)

```
Kate/
  src/
    components/  (Header, Footer, Hero, ServiceCard, ProductCard, SignupForm, line-art SVGs)
    layouts/     (BaseLayout with locale + meta)
    pages/       (index, services, shop, about, contact)
    pages/en/    (English mirror)
    content/     (products/, services/)
    i18n/        (el.json, en.json, util)
    styles/
    assets/      (logo, redrawn SVGs, placeholder images)
  public/
  astro.config.mjs, tailwind, package.json
  docs/ tasks/
```
