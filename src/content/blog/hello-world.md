---
title: 'Hello, world'
description: 'What this blog is, and how the whole thing works if you want to poke at it.'
pubDate: 2026-08-01
tags: ['meta']
---

First post. This one exists mostly to show what a post looks like — feel free to
delete it once you've written something real.

## Writing a post

Create a Markdown file in `src/content/blog/`. The filename becomes the URL, so
`why-i-left-vim.md` shows up at `/posts/why-i-left-vim`. Every post starts with a
block of front matter:

```yaml
---
title: 'Why I left Vim'
description: 'A short, honest accounting of my failures.'
pubDate: 2026-08-14
tags: ['editors', 'regret']
draft: false
---
```

Only `title`, `description`, and `pubDate` are required. `tags` defaults to
empty, and `draft: true` keeps a post visible in local dev while hiding it from
the built site, the RSS feed, and the sitemap.

If you get the front matter wrong — a missing title, a date that isn't a date —
the build fails with a message telling you which file and which field. That's
deliberate. Better to catch it locally than to publish a post dated `Invalid
Date`.

## What you get for free

Ordinary Markdown covers most of it. **Bold**, _italic_, [links](../), and
lists all work the way you'd expect:

- Nested bullets, ordered lists, task lists
- Footnotes and tables
- Blockquotes:

> The most disastrous thing that you can ever learn is your first programming
> language.
>
> — Alan Kay

Code blocks are syntax-highlighted at build time, so there's no JavaScript
shipped to do it in the browser, and the theme follows light/dark automatically:

```ts
function greet(name: string): string {
  return `Hello, ${name}`;
}
```

Images go in `src/assets/` and get optimized automatically when you reference
them, or in `public/` if you want them copied through untouched.

## Publishing

Commit to `main` and push. A GitHub Action builds the site and deploys it — no
build output is committed to the repo. Watch it run under the **Actions** tab;
a green check means it's live.

That's the whole workflow: write Markdown, push, done.
