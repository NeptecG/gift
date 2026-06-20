# Lessons

## 2026-06-20 — Windows path casing silently broke the production CSS build
**Symptom:** `npm run dev` looked perfectly styled, but `npm run build` produced
HTML with **no `<link rel="stylesheet">` and no CSS file** at all. Tailwind
utilities, design tokens, even plain scoped `<style>` blocks — all dropped from
the build output. Hours-long red herring.

**Root cause:** The folder on disk was named `kate` (lowercase), but every tool
and command addressed it as `Kate`. Windows is case-insensitive for *access*, so
`cd Kate` works and `process.cwd()` echoes `Kate` — but vite/rollup also call
realpath/readdir, which return the true on-disk casing `kate`. The two casings
made vite treat the same files as **two different modules**, so the CSS module
never got associated with the page → no stylesheet linked. Dev mode injects CSS
at runtime regardless, which is why it masked the bug.

**Fix:** Make the on-disk casing match what everything uses. Renamed the folder
to a true `Kate` (temp-rename trick, from *outside* the folder since a shell cwd
or post-build AV scan locks it). After rename, `process.cwd()` casing ==
`Get-ChildItem` casing == import casing → build emits CSS.

**How to apply:**
- On Windows, ALWAYS verify the real folder casing with
  `Get-ChildItem <parent> -Directory | ? { $_.Name -ieq 'name' }` — do NOT trust
  `process.cwd()`, which just echoes the casing you typed.
- **Verify the BUILD output (`dist/`), not just the dev preview.** Dev injecting
  CSS hides a broken production build. Check for an actual `dist/_astro/*.css`
  and a `<link rel="stylesheet">` in the built HTML.

## 2026-06-20 — Astro 6.4.8 + @tailwindcss/vite version conflict
**Symptom:** `@tailwindcss/vite@4.3.1` pulled in brand-new `vite@8.0.16`
alongside Astro's `vite@7.3.5`. Two vite copies → build error
"Missing field `tsconfigPaths` on BindingViteResolvePluginConfig" or, worse,
a silent no-CSS build.

**Fix:** Pin `@tailwindcss/vite` and `tailwindcss` to `4.1.13` (predates the
vite-8 dependency) so vite dedupes onto Astro's `7.3.5`. Avoid the npm
`overrides: { vite }` sledgehammer — forcing the version there broke Astro's CSS
pipeline even when the number matched.

**How to apply:** When a vite plugin "stops emitting CSS" with no error, check
`npm ls vite` for multiple copies first. Keep one vite across the whole tree.
