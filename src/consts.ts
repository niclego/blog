/**
 * Site-wide settings. Edit these and the whole site follows.
 */

export const SITE_TITLE = 'Nick Le Gorrec';
export const SITE_DESCRIPTION = 'Notes on software, systems, and whatever else I am chewing on.';
export const AUTHOR = 'Nick Le Gorrec';

/** Shown in the footer. Delete any line you do not want. */
export const SOCIALS: { label: string; href: string }[] = [
  { label: 'GitHub', href: 'https://github.com/niclego' },
  // { label: 'Bluesky', href: 'https://bsky.app/profile/you' },
  // { label: 'LinkedIn', href: 'https://linkedin.com/in/you' },
];

/** Top navigation. `href` values are site-relative; `path()` adds the base. */
export const NAV: { label: string; href: string }[] = [
  { label: 'Posts', href: '/posts' },
  { label: 'About', href: '/about' },
];
