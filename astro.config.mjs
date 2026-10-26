import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Endereço do site. No GitHub Pages, o workflow preenche SITE_URL e BASE_PATH sozinho
// (https://<usuario>.github.io e /<repositorio>). Com domínio próprio, troque SITE_URL
// pelo domínio e BASE_PATH por '/'.
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://example.com',
  base: process.env.BASE_PATH ?? '/',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'pt', locales: { pt: 'pt-BR', en: 'en' } },
    }),
  ],
});
