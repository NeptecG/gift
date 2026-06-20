# Vet & Pet — Veterinary Clinic & Pet Shop

Bilingual (Greek / English) marketing site for Katerina's clinic, built with
Astro + Tailwind. Greek is the main site (`/`); English mirrors it under `/en`.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321  (live editing)
npm run build    # outputs static site to dist/
npm run preview  # serve the built dist/ locally
```

> Windows note: the project folder must stay named **`Kate`** (capital K). A
> casing mismatch between the folder and the path used to run it breaks the CSS
> build. See `tasks/lessons.md`.

## Swap the placeholder content before launch

Search the code for `[PLACEHOLDER]`. The real values to fill in:

| What | Where |
|------|-------|
| Address, phone, email | `src/components/Footer.astro`, `src/sections/ContactBody.astro`, `src/sections/HomeBody.astro` |
| Opening hours | `src/i18n/ui.ts` (`hours.*` keys) |
| Services list | `src/content/services/*.json` |
| Products + prices + photos | `src/content/products/*.json` (+ images in `public/images/products/`) |
| Map | placeholder block in Contact/Home — drop in a real embed later |
| Public site URL | `astro.config.mjs` (`site`) and `public/robots.txt` |

All page text lives in `src/i18n/ui.ts` (Greek + English side by side).

## Contact / waiting-list form

The contact and "notify me" forms post to `PUBLIC_FORM_ENDPOINT` if set,
otherwise they fall back to opening the visitor's email app (`mailto:`), so they
work even before a backend exists.

To collect submissions by email, create a free [Formspree](https://formspree.io)
form and add its endpoint:

```bash
# .env
PUBLIC_FORM_ENDPOINT=https://formspree.io/f/your-id
```

## Deploy

Static output — deploy `dist/` anywhere. For Vercel: import the repo, framework
**Astro**, build `npm run build`, output `dist`. Set `PUBLIC_FORM_ENDPOINT` in
the Vercel env vars and update `site` in `astro.config.mjs` to the real domain.

## Turning on a real online shop later

Today the shop is a showcase catalog with a waiting list. The product data is
already typed (`src/content.config.ts`), so when Katerina wants real online
orders: add a cart + a checkout provider (Stripe/Viva Wallet) + accounts
(Supabase), and switch the product card's "Ask in store" CTA to "Add to cart".
Nothing in the catalog needs rewriting.
