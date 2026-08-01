---
title: 'Markdown reference'
description: 'Every formatting feature this blog supports, rendered so you can see what it looks like.'
pubDate: 2026-07-28
tags: ['meta', 'reference']
---

A scratch page for checking how things render. Keep it around while you're
tuning the design, delete it when you're happy.

## Headings

### Third level

#### Fourth level

## Text

Regular text with **bold**, _italic_, `inline code`, ~~strikethrough~~, and a
[link to the archive](../). Footnotes work too.[^1]

[^1]: Like this one.

## Lists

1. Ordered items
2. Keep their numbering
   - And nest
   - Cleanly

- [x] Task lists render
- [ ] Including unchecked boxes

## Code

```python
def fib(n: int) -> int:
    a, b = 0, 1
    for _ in range(n):
        a, b = b, a + b
    return a
```

```bash
npm run dev
```

Long lines wrap rather than forcing the page sideways.

## Table

| Command           | What it does                          |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Local preview with live reload        |
| `npm run build`   | Production build into `dist/`         |
| `npm run preview` | Serve the built site exactly as it is |
| `npm run check`   | Type-check pages and content schemas  |

## Quote

> Simplicity is prerequisite for reliability.
>
> — Edsger W. Dijkstra

---

That's everything.
