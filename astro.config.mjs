import { defineConfig } from 'astro/config'
import svelte from '@astrojs/svelte'
import mdx from '@astrojs/mdx'
import remarkGfm from 'remark-gfm'
import remarkSmartypants from 'remark-smartypants'
import rehypeExternalLinks from 'rehype-external-links'
import netlify from '@astrojs/netlify'

export default defineConfig({
  site: import.meta.env.PROD ? 'https://raihankalla.id' : 'http://localhost:4321', // Or your dev port
  security: {
    directives: {
      'script-src': [
        "'self'",
        "'unsafe-inline'",
        "'unsafe-eval'",
        'platform.twitter.com',
        'apis.google.com',
        '*.firebaseapp.com',
        'localhost:4321',
        '*.googleapis.com'
      ],
      'frame-src': [
        "'self'",
        'platform.twitter.com',
        'accounts.google.com',
        '*.firebaseapp.com',
        'localhost:4321',
        '*.google.com'
      ],
      'connect-src': [
        "'self'",
        'identitytoolkit.googleapis.com',
        '*.firebaseio.com',
        '*.firebase.com',
        'localhost:4321',
        '*.googleapis.com',
        'securetoken.googleapis.com'
      ],
      'frame-ancestors': ["'self'"],
      'cross-origin-opener-policy': ['unsafe-none'],
      'cross-origin-embedder-policy': ['unsafe-none'],
      'cross-origin-resource-policy': ['cross-origin']
    }
  },
  output: 'server',
  integrations: [
    svelte(),
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
  ],
  // adapter: vercel(),
  adapter: netlify(),
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

