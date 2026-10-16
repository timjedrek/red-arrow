# Red Arrow Flight Academy (Astro 6 + Firebase Hosting)

## Commands

```bash
npm run dev         # dev server at localhost:4321
npm run build       # production build
npm run check       # astro check (types + diagnostics)

npm run deploy:dev      # preview channel (mise node@22 wrapped automatically)
npm run deploy          # live: hosting + functions
npm run deploy:hosting  # live: hosting only
```

`npm run deploy` lets the Firebase CLI run the Astro build itself
(framework-aware), so no separate build step is needed before deploying.

## Deploy requirements

- Use **npm, not pnpm**. pnpm's symlinked node_modules breaks the deployed SSR
  function (channel URL hangs). Lockfile: package-lock.json.
- Deploy scripts wrap the Firebase CLI in **Node 22** via mise. Never run it on
  the system Node (26) — the functions analyzer crashes:
  ```bash
  mise exec node@22 -- ./node_modules/.bin/firebase hosting:channel:deploy dev
  ```
- Astro 6 requires **Node >= 22.12** (mise node 22.23.3 satisfies this).
- Functions runtime is **nodejs22** (set in firebase.json + functions/package.json
  engines; root package.json engines pins the SSR backend's Node too).
- `firebase-tools` must be **>= 15.21** — that release preserves the `server/`
  directory when packaging Astro SSR behind framework-aware hosting
  (firebase-tools#10537). Without it, every SSR request 503s on
  `[@astrojs/node] Could not find the server directory "server"`. Current: ^15.34.
- `sharp@0.33.5` is pinned — `firebase-frameworks` peer-conflicts with 0.34+.
- **Vite is pinned to ^7** via package.json `overrides`. Astro 6 targets Vite 7;
  `@tailwindcss/vite` breaks on Vite 8 with
  `Missing field 'tsconfigPaths' on BindingViteResolvePluginConfig.resolveOptions`.
  Do not add a direct `vite` dependency next to the override (npm EOVERRIDE).
- Tailwind is **v4**, wired through `@tailwindcss/vite` in `astro.config.mjs`
  `vite.plugins` (there is no `@astrojs/tailwind`). The theme still comes from
  `tailwind.config.mjs` via the `@config` bridge in `src/styles/global.css`.
  v4 note: `space-y-*` puts margin-bottom on all but the last child — where a
  child is inline-level (e.g. an `<a>` wrapping an image), use `flex flex-col
  gap-*` instead (see `FooterContent.astro`).
- Icons: no `astro-icon`. SVGs live in `src/icons/<collection>/*.svg` and render
  through `src/components/reusable/Icon.astro` as `<Icon name="collection:icon" />`.
- `firebase experiments:enable webframeworks` is already enabled for this
  machine/account (required for Astro framework-aware hosting).
- `functions/` deps are not installed on a fresh clone — run
  `npm install --prefix functions` before deploying (the functions
  codebase fails trigger analysis otherwise).
- Dev channel URLs expire after 7 days; redeploy to refresh.
- The contact form is a third-party Jotform embed whose iframe height is set at
  runtime by remote JS (it under-measures by ~16px, so `lg:min-h-[780px]` on the
  iframe stands in as the floor). Any visual-diff baseline containing that
  section will flake — exclude it or expect variance.
