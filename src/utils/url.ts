/**
 * Build an internal link that respects Astro's configured `base`.
 *
 * Astro rewrites asset URLs for you, but plain `<a href="/blog">` is left
 * alone — so every internal link in this site goes through here. That way
 * switching between a project page (`base: '/blog'`) and a custom domain
 * (`base: '/'`) is a one-line config change.
 *
 *   path('/')          → '/blog/'       (or '/' on a custom domain)
 *   path('/about')     → '/blog/about'   (or '/about')
 *   path('posts/hi')   → '/blog/posts/hi'
 *
 * Note this only covers links written in .astro files. Inside a Markdown post,
 * link to other pages relatively (`[archive](../)`) — those resolve correctly
 * no matter what `base` is set to.
 */
export function path(to = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const rest = to.startsWith('/') ? to : `/${to}`;
  return rest === '/' ? `${base}/` : `${base}${rest}`;
}
