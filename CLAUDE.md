# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager is pnpm (see `packageManager` in package.json).

```bash
pnpm dev     # start dev server (Next.js, Turbopack) at http://localhost:3000
pnpm build   # production build
pnpm start   # run production build
pnpm lint    # eslint (eslint-config-next core-web-vitals)
```

There is no test suite configured in this repo.

## Architecture

This is a Next.js 16 App Router site (JavaScript, not TypeScript) for "Victhaw Official" — a marketing/event site with several distinct sub-sites and a client dashboard, backed by an external API rather than a local database.

**Path alias:** `@/*` maps to `./src/*` (see `jsconfig.json`).

### Backend is external; Next API routes are thin proxies

There is no database or ORM in this repo. `process.env.BASE_URL` (set in `next.config.mjs`, currently `https://victhawofficial-api.onrender.com/api`) points at a separate backend service. Routes under `src/app/api/**/route.js` (e.g. `getTeams`, `login`, `register`, `payment`, `players`, `verify-account`, `tradfit/*`, `status`) mostly just forward the incoming request (headers/body) to `${BASE_URL}/<path>` via `axios` and pass the response straight back as `NextResponse.json(...)`. When working on data flows, look at the real logic in the external backend, not in these routes — the routes exist mainly to keep the API token/URL off the client and to reshape errors.

Auth: on login, the backend's `token` is stored in `localStorage` (`accessToken`) together with `userData`. Authenticated requests send this token back as a `token` header (not `Authorization: Bearer`) to the Next.js API routes, which forward it to the backend.

### Multiple site sections sharing one app

`src/app` (routes) and `src/components` (UI) are organized in parallel by section, each with its own layout/nav conventions:

- **Landing / marketing site** — `src/app/page.js`, `contact`, `news`, `policy`, `terms`, using `src/components/landing-page/*`. Root layout (`src/app/layout.js`) renders the global `Navbar`/`Footer` and site-wide SEO metadata (OpenGraph, JSON-LD org schema).
- **Tournament ("Unity Cup 2.0")** — `src/app/tournament/*` (about, faq, prizes, results, rules, schedule, sponsors, team) driven largely by static data in `src/data/unity-cup-2.js` (teams, fixtures, groups, prizes — some values are explicitly marked `(PLACEHOLDER)` pending real data) plus `src/components/unity-cup-2/*` and `src/components/tournament/*`.
- **Archive** — `src/app/archive/unity-cup-1.0`, historical content for the previous tournament edition.
- **Tradfit (Rhythms)** — `src/app/tradfit/*` and `src/app/admin/tradfit`, a self-contained sub-event (registration, tickets, gallery, sponsors, admin login/registrant management) under `src/components/tradfit/*`.
- **The Visionary** — `src/app/visionary/*` with `src/components/the-visionary/*`, a separate certification/services micro-site.
- **Dashboard** — `src/app/dashboard/*` (admin, payment, schedule, setup) with its own layout (`src/app/dashboard/layout.js` → `src/components/dashboard/AppWrapper.js`), sidebar/nav (`Sidebar.jsx`, `DashNav.jsx`), and its own light/dark mode toggle persisted to `localStorage`.
- **Auth** — the `src/app/(auth)` route group (login, register, forgot/reset password, verify-account, verify-email, setup, payment) with its own layout/wrapper in `src/components/(auth)/AppWrapper.jsx`, which conditionally shows `NavbarAuth` based on a hardcoded list of auth-related pathnames.

When adding a page, match the pattern of its section (route folder mirrored by a same-named folder under `src/components`, with one main `PascalCase.jsx` component per page pulling in local sub-components).

### Notable conventions

- Forms use `formik` + `yup` for validation; PDFs are generated client-side with `jspdf`; audio uses `howler`/`react-audio-player`; scroll-reveal animations use `aos`, richer animation uses `framer-motion`.
- Styling is Tailwind (`tailwind.config.mjs` scans `src/{pages,components,app}`), plus a global stylesheet at `src/app/globals.css`. Body font is "Open Sans" loaded via `@font-face` from `public/`.
- Several files in this codebase contain large blocks of commented-out previous implementations left in place above the active code (e.g. `src/app/layout.js`, `src/app/(auth)/layout.js`, `AppWrapper.jsx`) — don't assume commented code is dead/unused without checking; equally, don't feel obligated to preserve it when editing a file unless asked.
