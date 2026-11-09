# Super Agent Blog

A small, dependency-free blog about building AI agents that get real work done.

The site is plain HTML, CSS, and a little JavaScript. There is no build step, no package
manager, and no trackers. The files in this repository are the site.

## Local preview

Serve the repository root with any static file server:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

Opening `index.html` directly in a browser mostly works, but a server is recommended so
relative links behave exactly as they will in production.

## Structure

```text
.
├── index.html          # Home page and post index
├── about.html          # About the blog and colophon
├── 404.html            # Not-found page
├── posts/              # One HTML file per post
│   ├── introducing-the-super-agent-blog.html
│   ├── what-makes-an-agent-super.html
│   ├── why-this-blog-has-no-build-step.html
│   └── is-hexo-still-needed-in-the-ai-era.html
└── assets/
    ├── css/style.css   # Complete design system and responsive layout
    ├── js/main.js      # Theme toggle, system-theme sync, footer year
    └── favicon.svg
```

## Adding a post

1. Copy an existing file in `posts/` and rename it with a lowercase, hyphenated slug.
2. Update the `<title>`, meta description, Open Graph tags, and `article:published_time`.
3. Replace the article header, prose, and footer. Keep the page shell and theme script.
4. Add a new row to the post list in `index.html`, then update the post count and the
   "Updated" label in the hero.
5. Update the previous/next links at the bottom of the neighboring posts.

The home page index and post navigation are maintained by hand on purpose. If the
archive grows large enough that this becomes error-prone, that is the point to introduce
a small generator.

## Deploying

The site can be served from the repository root by any static host. For GitHub Pages:

1. Open **Settings → Pages**.
2. Choose **Deploy from a branch**.
3. Select the `main` branch and the `/ (root)` folder.

No Actions workflow is required.

## Design notes

- Warm paper and near-black ink, with a burnt orange accent; dark mode is a full second
  palette rather than an inverted filter.
- System fonts only, so there are no third-party requests.
- Responsive from small phones through wide desktops.
- Theme preference is stored in `localStorage`; with no saved preference the site follows
  the operating system setting.
- Respects `prefers-reduced-motion` and includes a skip link, semantic landmarks, and
  visible focus styles.
