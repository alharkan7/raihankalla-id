import { defineConfig } from 'astro/config'
import svelte from '@astrojs/svelte'
import mdx from '@astrojs/mdx'
import remarkGfm from 'remark-gfm'
import remarkSmartypants from 'remark-smartypants'
import rehypeExternalLinks from 'rehype-external-links'
import vercel from '@astrojs/vercel/static'
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://alharkan.vercel.app',
  integrations: [
    mdx({
      remarkPlugins: [remarkGfm, remarkSmartypants],
      rehypePlugins: [
        [
          rehypeExternalLinks,
          {
            target: '_blank',
          },
        ],
      ],
      shikiConfig: {
        theme: 'nord',
      },
    }),
    react(),
    svelte()
  ],
  adapter: vercel(),
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

