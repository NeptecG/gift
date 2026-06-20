# Vet & Pet — build progress

Plan: `docs/superpowers/plans/2026-06-20-vet-and-pet-site.md`
Spec: `docs/superpowers/specs/2026-06-20-vet-and-pet-site-design.md`

## Tasks
- [x] 1. Scaffold Astro + Tailwind + i18n config
- [x] 2. Design tokens, self-hosted Greek fonts (Alegreya + Alegreya Sans)
- [x] 3. i18n dictionary + helpers (104 keys, assert self-check passes)
- [x] 4. Content collections (11 products, 8 services) with placeholder data
- [x] 5. Assets: logo, hand+paw photo component, cat/paw accents, product icons
- [x] (infra) Fix Windows path-casing CSS-build bug + pin tailwind/vite versions
- [x] 6. BaseLayout + Header (lang switch, mobile menu) + Footer
- [x] 7. Reusable components: Hero, reveal, ServiceCard, ProductCard, SignupForm
- [x] 8. Home page (EL + EN)
- [x] 9. Services page (EL + EN)
- [x] 10. Shop page + waiting list + category filter (EL + EN)
- [x] 11. About page + hand+paw centerpiece (EL + EN)
- [x] 12. Contact page (EL + EN)
- [x] 13. SEO: sitemap (10 urls), robots, OG/meta, hreflang
- [x] 14. Final verification + screenshots

## Review
Built a bilingual (EL canonical, EN under /en) Astro + Tailwind static site for
the Vet & Pet clinic. 5 pages × 2 languages, all verified in the production build
on desktop + mobile.

Verified working:
- Greek + English render correctly (self-hosted Alegreya superfamily, full Greek).
- Language switch keeps you on the same page; hreflang + per-locale OG/meta.
- Catalog from typed content collections; shop category filter (tested food → 3).
- Contact + waiting-list forms validate (required + email) with mailto fallback.
- Hand+paw photo (IMG_4709) featured in hero + as the About centerpiece.
- Scroll reveal, responsive header/mobile menu, accessible skip-link + focus.

Notable fixes (see tasks/lessons.md):
- Windows folder-casing mismatch silently dropped all CSS from the build.
- Pinned @tailwindcss/vite + tailwindcss to 4.1.13 (4.3.1 pulled vite 8).
- Removed backdrop-filter (hung headless screenshots).
- :global() so parent sizing reaches child-component SVGs.

Next (when ready): swap [PLACEHOLDER] content (address/phone/hours/prices/photos),
set PUBLIC_FORM_ENDPOINT, set real `site` URL, deploy dist/ to Vercel. Real online
shop = add cart + checkout (Stripe/Viva) + accounts (Supabase); data already typed.

## Placeholders to swap before launch
address · phone · email · opening hours · product photos & prices · map coords ·
`PUBLIC_FORM_ENDPOINT` (Formspree) · `site` URL in astro.config.mjs
