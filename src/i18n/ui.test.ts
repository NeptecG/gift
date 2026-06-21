// Self-check for the i18n helpers. Run: npx tsx src/i18n/ui.test.ts
import assert from 'node:assert';
import { t, localizedPath, altLocalePath, formatPrice, ui, locales } from './ui.ts';

// translation + fallback
assert.equal(t('el', 'nav.home'), 'Αρχική');
assert.equal(t('en', 'nav.home'), 'Home');

// every EL key must exist in EN (no missing translations)
for (const key of Object.keys(ui.el)) {
  assert.ok(key in ui.en, `missing EN translation for "${key}"`);
}
assert.equal(Object.keys(ui.el).length, Object.keys(ui.en).length, 'EL/EN key counts differ');

// localized paths: EL no prefix, EN under /en
assert.equal(localizedPath('el', '/'), '/');
assert.equal(localizedPath('en', '/'), '/en/');
assert.equal(localizedPath('el', '/shop'), '/shop');
assert.equal(localizedPath('en', '/shop'), '/en/shop');
assert.equal(localizedPath('en', 'shop'), '/en/shop'); // tolerates missing slash

// language switch links to the same page in the other locale
assert.equal(altLocalePath('el', '/shop'), '/en/shop');
assert.equal(altLocalePath('en', '/shop'), '/shop');
assert.equal(altLocalePath('el', '/'), '/en/');
assert.equal(altLocalePath('en', '/'), '/');

// price formatting per locale + null fallback.
// EL uses a non-breaking space before €; normalize it to a plain space for a stable assert.
const NBSP = String.fromCharCode(0x00a0);
assert.equal(formatPrice('el', 14.9, 'X'), '14,90' + NBSP + '€');
assert.equal(formatPrice('en', 14.9, 'X'), '€14.90');
assert.equal(formatPrice('el', null, 'Ρωτήστε'), 'Ρωτήστε');

assert.deepEqual([...locales], ['el', 'en']);

console.log('i18n ok - ' + Object.keys(ui.el).length + ' keys × 2 locales');
