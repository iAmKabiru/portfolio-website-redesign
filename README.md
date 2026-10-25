# Kabiru.net — Portfolio Redesign

A responsive, hand-built single-page portfolio for Kabiru Abdulhamid.

## Start locally

You do not need to install Node.js, npm, or any framework. Open `index.html` directly in your browser, or start a local HTTP server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Structure

- `index.html` — all portfolio sections and SEO metadata
- `styles.css` — design tokens, colors, illustrations, layout, and responsive breakpoints
- `script.js` — mobile navigation, project filters, project details dialog, dynamic year, reveal effects
- `assets/favicon.svg` — editable brand favicon
- `assets/og-cover.jpg` — share-preview image
- `robots.txt` and `sitemap.xml` — basic indexing setup

## Customize

1. In `index.html`, edit your headline, biography, email address, experience dates, and project descriptions.
2. In `script.js`, edit the `projects` object to update case studies shown in the details dialogs. Make sure IDs match each project's `data-open` attribute in `index.html`.
3. In `styles.css`, edit `--accent`, `--ink`, `--paper`, and other tokens under `:root` to rebrand.
4. Check the Deep Work Clock live URL, your LinkedIn link, company spellings, and any metrics before publishing.
5. The app-style project images are made entirely with editable HTML/CSS; they are conceptual previews, not screenshots of the actual products.

## Deploy

This is a static site. Drag the folder into Netlify or use Vercel static deployment, Cloudflare Pages, GitHub Pages, or standard web hosting. Upload the files as-is, with `index.html` at your web root. No build command is needed.

To replace the current **kabiru.net** website, back up your existing site, point your hosting document root or new static deployment at these files, and confirm your domain's DNS/SSL configuration. The current production site is *not* changed by these files.

## Built-in accessibility

Includes semantic landmarks, skip link, keyboard-operable project dialog and filter controls, navigation labels, visible focus outlines, and reduced-motion handling.

## Notes

Fonts are requested from Google Fonts, falling back to system fonts if unavailable. No analytics, cookies, tracking, backend, or build tools.
