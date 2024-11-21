import { defineConfig } from 'astro/config'
import svelte from '@astrojs/svelte'
import mdx from '@astrojs/mdx'
import remarkGfm from 'remark-gfm'
import remarkSmartypants from 'remark-smartypants'
import rehypeExternalLinks from 'rehype-external-links'
import vercel from '@astrojs/vercel/static'
import redirects from './src/data/redirects.json' 

// Transform redirects from JSON to Astro's expected format
const transformedRedirects = Object.values(redirects).reduce((acc, redirect) => {
  acc[redirect.short] = redirect.long;
  return acc;
}, {});

// https://astro.build/config
export default defineConfig({
  site: 'https://alharkan.vercel.app',
  integrations: [mdx(), svelte()],
  adapter: vercel(),
  redirects: transformedRedirects,
  markdown: {
    shikiConfig: {
      theme: 'nord',
    },
    remarkPlugins: [remarkGfm, remarkSmartypants],
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: '_blank',
        },
      ],
    ],
  },
})