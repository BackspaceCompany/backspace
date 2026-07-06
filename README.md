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

## Deploy (Dokploy)

**Port 4321 is dev only** (`npm run dev`). Production uses a different port — using 4321 in Dokploy causes **502 Bad Gateway**.

### Nixpacks / Node (default)

| Setting | Value |
|---------|-------|
| **Container port** | `3000` |
| Build command | `npm run build` |
| Start command | `npm run start` |

Optional: set env `PORT=3000` (must match the port in Dokploy).

### Docker

| Setting | Value |
|---------|-------|
| **Container port** | `80` |
| Dockerfile | `./Dockerfile` |

Nginx serves the static `dist/` folder. SPA routes (`/projects/...`, `/blog/...`) are handled automatically.


Add markdown files to `src/content/blog/` with frontmatter:

```yaml
---
title: "Post title"
description: "Short summary"
pubDate: 2025-11-01
---
```
