// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const isGHPages = process.env.GITHUB_PAGES === 'true';

// https://astro.build/config
export default defineConfig({
  site: isGHPages ? 'https://e2c-receto.github.io' : 'https://www.receto.fr',
  base: isGHPages ? '/receto-www' : '/',
  output: 'static',
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'fr', locales: { fr: 'fr-FR' } },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ['requesting-plans-latin-boys.trycloudflare.com'],
    },
  },
});
