// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import rehypeExternalLinks from 'rehype-external-links';

import react from '@astrojs/react';

export default defineConfig({
  site: 'https://renoklangvalley.my',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  // All external links inside markdown article bodies are auto-marked
  // nofollow + noopener so the only follow link to BINA+ remains the one
  // emitted by <BinaCta />. Internal links (/packages/) are unaffected.
  markdown: {
    rehypePlugins: [
      [rehypeExternalLinks, { rel: ['nofollow', 'noopener'], target: '_blank' }],
    ],
  },
  integrations: [mdx(), sitemap({
    filter: (page) => !page.includes('/admin') && !page.includes('/draft'),
    changefreq: 'weekly',
    priority: 0.7,
    i18n: {
      defaultLocale: 'en',
      locales: { en: 'en-MY', ms: 'ms-MY' },
    },
  }), react()],
  vite: {
    plugins: [tailwindcss()],
  },
  prefetch: { prefetchAll: true, defaultStrategy: 'viewport' },
});