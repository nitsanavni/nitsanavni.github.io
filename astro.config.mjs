// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { rougeMarkup, rougeTheme } from './src/code-theme';

export default defineConfig({
  site: 'https://nitsanavni.com',
  integrations: [sitemap()],
  server: { allowedHosts: true },
  markdown: {
    // rouge did not highlight jq, so the old site showed it as a bare <pre><code>.
    syntaxHighlight: { type: 'shiki', excludeLangs: ['jq'] },
    shikiConfig: {
      theme: rougeTheme,
      transformers: [rougeMarkup],
    },
  },
});
