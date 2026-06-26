// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.vetandpet.gr',
  trailingSlash: 'always', // canonical + sitemap + internal links all agree (with slash)
  i18n: {
    locales: ['el', 'en'],
    defaultLocale: 'el',
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      // stamp every entry with the build date so crawlers see freshness
      serialize(item) {
        item.lastmod = new Date().toISOString();
        return item;
      },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
