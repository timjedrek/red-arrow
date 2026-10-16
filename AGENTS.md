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
- `firebase-admin` is `^14.x`, but `firebase-frameworks@0.11.8` (latest published)
  still declares a peer range of `^11 || ^12 || ^13`, so the framework-aware
  deploy's generated function package fails with ERESOLVE unless npm is told to
  ignore peer metadata. This is handled by **`.npmrc` at the repo root
  containing `legacy-peer-deps=true`**: the CLI copies the project-root `.npmrc`
  into `.firebase/<project>/functions/` before upload (firebase-tools
  `lib/frameworks/index.js`), so both the local prepare install and the Cloud
  Build install see it. The deploy scripts additionally carry a
  `npm_config_legacy_peer_deps=true` prefix, but that env var alone does NOT
  propagate into Cloud Build — the `.npmrc` is what fixes the remote build.
  The peer range is stale metadata only: the frameworks runtime imports just
  `{ initializeApp, getApps } from "firebase-admin/app"` and `getAuth` from
  `"firebase-admin/auth"`, all unchanged in admin 14 (which itself requires
  Node >= 22, matching our runtime).
- `sharp@0.33.5` is pinned — `firebase-frameworks` peer-conflicts with 0.34+.
- **Vite is 8**, pulled by Astro 7 and deduped (`vite@8.3.4`) across astro,
  `@astrojs/react`, `@vitejs/plugin-react` and `@tailwindcss/vite`. The old
  `overrides: { "vite": "^7" }` pin was removed in the Astro 7 upgrade: the
  `Missing field 'tsconfigPaths' on BindingViteResolvePluginConfig.resolveOptions`
  crash only happened on a mixed tree (Astro 6 with a hoisted Vite 8), and
  `@tailwindcss/vite` 4.3.3 runs fine on a uniform Vite 8. Do not re-add a `vite`
  override or a direct `vite` dependency.
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
- **On-demand image optimization does not work on this host.** The Astro
  `/_image` endpoint returns 500 on Firebase framework-aware hosting (the SSR
  function has no client dir to read sources from). Any page using `<Picture>`,
  `<Image>` or `getImage()` must therefore be **prerendered** (`export const
  prerender = true`) so images are emitted as static `/_astro/*` files — that is
  why `about/our-team.astro`, `blog/[...slug].astro` and `blog/index.astro` all
  set it. A plain `<img src={imported.src}>` is also safe (static asset).
- The contact form is a third-party Jotform embed whose iframe height is set at
  runtime by remote JS (it under-measures by ~16px, so `lg:min-h-[780px]` on the
  iframe stands in as the floor). Any visual-diff baseline containing that
  section will flake — exclude it or expect variance.
