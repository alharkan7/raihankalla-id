import { defineConfig } from 'astro/config'
import svelte from '@astrojs/svelte'
import mdx from '@astrojs/mdx'
import remarkGfm from 'remark-gfm'
import remarkSmartypants from 'remark-smartypants'
import rehypeExternalLinks from 'rehype-external-links'
import vercel from '@astrojs/vercel/static'

export default defineConfig({
  site: 'https://alharkan.vercel.app',
  security: {
    directives: {
      'script-src': ["'self'", "'unsafe-inline'", 'platform.twitter.com'],
      'frame-src': ["'self'", 'platform.twitter.com'],
    },
  },
  integrations: [
    mdx(
      //   {
      //   remarkPlugins: [remarkGfm, remarkSmartypants],
      //   rehypePlugins: [
      //     [
      //       rehypeExternalLinks,
      //       {
      //         target: '_blank',
      //       },
      //     ],
      //   ],
      //   shikiConfig: {
      //     theme: 'nord',
      //   },
      // }
    ),
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

