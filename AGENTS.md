# Red Arrow Flight Academy (Astro 4 + Firebase Hosting)

## Commands

```bash
npm run dev         # dev server at localhost:4321
npm run build       # production build

npm run deploy:dev      # preview channel (mise node@22 wrapped automatically)
npm run deploy          # live: hosting + functions
npm run deploy:hosting  # live: hosting only
```

## Deploy requirements

- Use **npm, not pnpm**. pnpm's symlinked node_modules breaks the deployed SSR
  function (channel URL hangs). Lockfile: package-lock.json.
- Deploy scripts wrap the Firebase CLI in **Node 22** via mise. Never run it on
  the system Node (26) — the functions analyzer crashes:
  ```bash
  mise exec node@22 -- ./node_modules/.bin/firebase hosting:channel:deploy dev
  ```
- Functions runtime is **nodejs22** (set in firebase.json + functions/package.json
  engines; root package.json engines pins the SSR backend's Node too).
- `sharp@0.33.5` is pinned — `firebase-frameworks` peer-conflicts with 0.34+.
- `@astrojs/sitemap` is pinned to `3.2.1` — 3.3+ requires Astro 5+ and crashes
  the build ("Cannot read properties of undefined (reading 'reduce')").
- `firebase experiments:enable webframeworks` is already enabled for this
  machine/account (required for Astro framework-aware hosting).
- `functions/` deps are not installed on a fresh clone — run
  `npm install --prefix functions` before deploying (the functions
  codebase fails trigger analysis otherwise).
- Dev channel URLs expire after 7 days; redeploy to refresh.
