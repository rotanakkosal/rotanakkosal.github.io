# Personal portfolio

Academic-style single-page portfolio. Next.js (App Router) + Tailwind v4, statically
exported and served from GitHub Pages. Typography and color follow GitHub's own
Primer tokens and system font stack.

## Editing content

All content lives in [`src/data/profile.ts`](src/data/profile.ts). Edit that file —
you should not need to touch the components. Placeholders are marked `TODO`:

```bash
grep -rn "TODO" src/data/profile.ts
```

To remove a section, empty its array. To reorder sections, reorder the JSX blocks in
[`src/app/page.tsx`](src/app/page.tsx).

Assets go in `public/`:

- `public/profile.svg` — placeholder avatar; replace with your own photo and update
  `profile.photo`
- `public/cv.pdf` — your CV (or set `profile.cv` to `""` to hide the link)
- `public/pubs/`, `public/projects/` — thumbnails

## Local development

```bash
npm run dev     # http://localhost:3000
npm run build   # static export into out/
```

## Theming

Colors are CSS variables in the `:root` block of
[`src/app/globals.css`](src/app/globals.css). Change the hex values there to re-theme
the whole site. The font stack is the same variable block (`--font-sans`).

## Deployment

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds and publishes `out/` to GitHub Pages.

One-time setup in the repo: **Settings → Pages → Build and deployment → Source →
GitHub Actions**.
