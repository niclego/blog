// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SITE URL
 * ─────────────────────────────────────────────────────────────────────────────
 *  Right now this is configured for the default GitHub Pages project URL, so
 *  the site works the moment you enable Pages: https://niclego.github.io/blog
 *
 *  To move to a custom domain (e.g. https://blog.example.com):
 *    1. Change the two lines below to:
 *         site: 'https://blog.example.com',
 *         base: '/',
 *    2. Create `public/CNAME` containing just the bare domain, e.g.
 *         blog.example.com
 *    3. Point DNS at GitHub Pages, then set the domain in
 *       Settings → Pages → Custom domain.
 *
 *  Nothing else needs to change — internal links go through `path()` in
 *  src/utils/url.ts, which respects `base` automatically.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export default defineConfig({
  site: 'https://niclego.github.io',
  base: '/blog',

  integrations: [mdx(), sitemap()],

  markdown: {
    // Dual themes: Shiki emits both, and global.css picks one to match the
    // site theme — so highlighted code follows light/dark with no JS.
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      wrap: true,
    },
    // Give every heading an id, then a hover-revealed "#" link to it.
    processor: unified({
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: 'append',
            properties: { className: 'heading-anchor', ariaHidden: true, tabIndex: -1 },
            content: { type: 'text', value: '#' },
          },
        ],
      ],
    }),
  },
});
