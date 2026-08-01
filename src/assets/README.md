Put images you reference from posts in this folder.

Importing them from Markdown or MDX runs them through Astro's image pipeline,
which resizes them, converts to modern formats, and adds width/height so the
page doesn't jump while they load:

    ![A diagram](../../assets/diagram.png)

Files that must be served byte-for-byte at a fixed URL (a PDF, an OG image, a
verification file) go in `public/` instead.
