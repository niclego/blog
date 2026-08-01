import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getPosts } from '../utils/posts';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
import { path } from '../utils/url';

export const GET: APIRoute = async (context) => {
  const posts = await getPosts();

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    // `context.site` is the bare origin from astro.config.mjs, so fold in
    // `base` to get the actual homepage the feed should point readers at.
    site: new URL(import.meta.env.BASE_URL, context.site!),
    items: posts
      // Drafts are visible in dev but must never reach the feed.
      .filter((post) => !post.data.draft)
      .map((post) => ({
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.pubDate,
        categories: post.data.tags,
        link: path(`/posts/${post.id}`),
      })),
  });
};
