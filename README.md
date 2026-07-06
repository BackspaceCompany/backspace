# Backspace

Venture studio site for **Backspace** — Claveira, Akaragi, Ivory Roots, and FREEDOM.

Built with **Astro**, **React islands**, **TypeScript**, and **Tailwind CSS**.

## Getting started

```bash
npm install
npm run dev
```

Site runs at `http://localhost:4321`

## Build

```bash
npm run build
npm run preview
```

## Structure

```
src/
├── components/        # Astro + React (interactive islands)
├── content/blog/      # Markdown blog posts
├── data/projects.ts   # Venture data
├── layouts/
└── pages/
    ├── index.astro
    ├── projects/[id].astro
    └── blog/
```

## Blog

Add markdown files to `src/content/blog/` with frontmatter:

```yaml
---
title: "Post title"
description: "Short summary"
pubDate: 2025-11-01
---
```
