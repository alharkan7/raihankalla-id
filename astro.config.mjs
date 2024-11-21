import { defineConfig } from 'astro/config'
import svelte from '@astrojs/svelte'
import mdx from '@astrojs/mdx'
import remarkGfm from 'remark-gfm'
import remarkSmartypants from 'remark-smartypants'
import rehypeExternalLinks from 'rehype-external-links'
import vercel from '@astrojs/vercel/static'
import redirects from './public/redirects.json';

export default defineConfig({
  site: 'https://alharkan.vercel.app',
  integrations: [mdx(), svelte()],
  adapter: vercel(),
  redirects: Object.fromEntries(
    Object.values(redirects).map(r => [r.short, r.long])
  ),
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
