import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
// Astro 7 ships Zod v4, whose `z` namespace object is deprecated as a named
// re-export — importing the module namespace is the current form.
import * as z from 'astro/zod';

/**
 * The `blog` collection reads every Markdown/MDX file in src/content/blog.
 * The filename becomes the URL slug: `hello-world.md` → /posts/hello-world
 *
 * The schema below is enforced at build time — a post with a missing title or
 * a malformed date fails the build instead of shipping broken.
 */
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    /** Publish date. Accepts `2026-08-01` or a full timestamp. */
    pubDate: z.coerce.date(),
    /** Optional — shown as "Updated ..." when present. */
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    /** Set to true to keep a post out of listings, RSS, and the sitemap. */
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
