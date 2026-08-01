# blog

Personal blog built with [Astro](https://astro.build), deployed to GitHub Pages.
Write Markdown, push to `main`, and a GitHub Action publishes the site.

## Quick start

Requires **Node 24** (the active LTS). The version lives in `.nvmrc`, so
`nvm use` picks it up and CI reads the same file — there's one place to change it.

```bash
nvm use          # or: fnm use
npm install
npm run dev      # http://localhost:4321/blog
```

| Command           | What it does                                          |
| ----------------- | ----------------------------------------------------- |
| `npm run dev`     | Local dev server with live reload; drafts are visible |
| `npm run build`   | Production build into `dist/`                         |
| `npm run preview` | Serve the built site exactly as GitHub Pages will     |
| `npm run check`   | Type-check pages, components, and post front matter   |
| `npm run format`  | Format everything with Prettier                       |

## Writing a post

Add a Markdown (or `.mdx`) file to `src/content/blog/`. The filename becomes the
URL: `why-i-left-vim.md` → `/posts/why-i-left-vim`.

```markdown
---
title: 'Why I left Vim'
description: 'A short, honest accounting of my failures.'
pubDate: 2026-08-14
tags: ['editors', 'regret']
draft: false
---

Your words here.
```

| Field         | Required | Notes                                                                                                |
| ------------- | -------- | ---------------------------------------------------------------------------------------------------- |
| `title`       | yes      |                                                                                                      |
| `description` | yes      | Used in listings, `<meta>` tags, and the RSS feed                                                    |
| `pubDate`     | yes      | `2026-08-14` or a full timestamp; drives ordering                                                    |
| `updatedDate` | no       | Rendered as "Updated …" under the byline                                                             |
| `tags`        | no       | Defaults to `[]`; each tag gets its own page at `/tags/<tag>`                                        |
| `draft`       | no       | `true` shows the post in `npm run dev` but excludes it from the build, the RSS feed, and the sitemap |

The schema in `src/content.config.ts` is enforced at build time — a missing
title or a malformed date fails the build with the offending filename, rather
than publishing something broken.

**Linking between posts from Markdown:** use relative links (`[archive](../)`,
`[that post](../why-i-left-vim/)`). Those resolve correctly regardless of the
`base` setting. Links written inside `.astro` files should go through
`path()` from `src/utils/url.ts`, which applies `base` for you.

**Images:** put them in `src/assets/` and reference them relatively
(`![alt](../../assets/thing.png)`) to get automatic resizing and modern formats.
Files that must be served untouched at a fixed URL go in `public/`.

## Deploying

`.github/workflows/deploy.yml` builds and publishes on every push to `main`.
The built site is never committed — the Action uploads `dist/` straight to Pages.

One-time setup in the repo: **Settings → Pages → Build and deployment →
Source: GitHub Actions**. Push to `main` and watch the run under the **Actions**
tab; a green check means it's live.

## Using a custom domain

The site currently builds for the default project URL,
`https://niclego.github.io/blog`, so it works the moment Pages is enabled. To
move to your own domain:

1. In `astro.config.mjs`, set `site` to your domain and `base` to `'/'`:

   ```js
   site: 'https://blog.example.com',
   base: '/',
   ```

2. Create `public/CNAME` containing just the bare domain, nothing else:

   ```
   blog.example.com
   ```

3. Update the `Sitemap:` line in `public/robots.txt` to match.
4. Point DNS at GitHub Pages, then set the domain under
   **Settings → Pages → Custom domain**.

Nothing else needs to change — every internal link is built from `base`.

## Making it yours

| What                                       | Where                                                 |
| ------------------------------------------ | ----------------------------------------------------- |
| Site title, description, nav, social links | `src/consts.ts`                                       |
| Colors, fonts, spacing                     | the token block at the top of `src/styles/global.css` |
| About page copy                            | `src/pages/about.astro`                               |
| Home page layout                           | `src/pages/index.astro`                               |
| Favicon                                    | `public/favicon.svg`                                  |

## Layout

```
src/
├── components/     Header, Footer, theme toggle, post card, date
├── content/blog/   your posts live here
├── layouts/        BaseLayout (chrome) and BlogPost (article page)
├── pages/          routes — index, posts/, tags/, about, 404, rss.xml
├── styles/         global.css: design tokens + base typography
└── utils/          post queries and base-aware link helper
```

Light/dark follows the OS by default; the header toggle pins a choice in
`localStorage`. The theme is applied before first paint, so there's no flash.
