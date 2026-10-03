# nitsanavni.com

Personal blog. Astro static site, served by a Cloudflare Worker.

## Layout
- Posts: `src/content/posts/<Slug>.md`, frontmatter `title`, `date`.
  URL is the lowercased slug: `/<slug>/`.
- Drafts: `in-progress/` (not built).
- Images: `public/images/`.
- Look matches the old jekyll-now theme (`src/styles/`, `src/code-theme.ts`).

## Deploy
- Push to `master` → GitHub Action → `wrangler deploy` → nitsanavni.com.
- Never deploy from a local machine unless the Action is broken.
- Check locally first: `bun run build`, then `bun run preview`.

## Do not touch without asking
- `gh-pages` branch: redirect pages for nitsanavni.github.io. GitHub Pages serves it.
- Ruleset "Protect master and gh-pages": no force-push, no deletion.
- Actions: only GitHub-owned actions and `oven-sh/setup-bun` may run. Pin every action to a commit SHA; Dependabot updates the pins.
- Old post URLs: never rename a published slug; add a `public/_redirects` line instead.
- `wrangler.jsonc` routes and the www redirect in `src/worker.ts`.
- Secret `CLOUDFLARE_API_TOKEN` in the `production` environment (master only). Token name in Cloudflare:
  `nitsanavni-blog-deploy`.

## Writing
- Posts are in Nitsan's voice. Don't publish a post (move it out of
  `in-progress/` or push it) without Nitsan's OK.
