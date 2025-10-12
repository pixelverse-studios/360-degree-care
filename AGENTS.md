# AGENTS

## Overview

- 360 Degree Care is a Next.js 14 App Router marketing site for a New Jersey home-health agency, built with TypeScript, Tailwind CSS, and Radix-based UI primitives.
- `src/app/layout.tsx` injects global fonts, Google Tag Manager (`GTM-PGDVF5CR`), the SiteBehaviour tracker, and wraps every page with `RouteStateProvider`, `CampaignTracker`, shared navigation, breadcrumbs, footer, and toast notifications.
- Service and county experiences stitch together structured content from `src/lib/content/**` and purpose-built county components under `src/components/county/**` to deliver rich landing pages per service and geography.
- Interactive flows (contact, campaign attribution, FAQ accordions, animations) live in client components that lean on React Hook Form, Zod, and Sonner while reusing constants and helpers from `src/utils`.

## Local Development

1. Install dependencies:
    ```bash
    npm install
    ```
2. Create `.env.local` with the variables listed under **Environment Variables** (Next.js only exposes variables prefixed with `NEXT_PUBLIC_` to the browser).
3. Start the development server:
    ```bash
    npm run dev
    ```
    The app serves on `http://localhost:3000` with automatic reloads.
4. Production build steps:
    ```bash
    npm run build   # generates `.next/` and triggers sitemap generation via the postbuild hook
    npm run start   # serves the built app
    npm run lint    # optional: run ESLint checks
    ```

## Project Layout

- `src/app/` – App Router pages, including service hubs, county-specific service pages (e.g. `/services/personal-care/bergen-county`), blog pages, documentation views, legal pages, and contact funnels.
- `src/components/` – Reusable UI: service modules, county landing components, contact form pieces, hero/CTA blocks, navigation, accordions, and Radix wrappers under `ui/`.
- `src/lib/` – Data and infrastructure: static content modules for counties/services, testimonial/catalog data, analytics helpers, React context providers, and SEO component templates.
- `src/utils/` – Route metadata, contact form schemas (`ContactMap`), constants (phone/email/address), FAQ datasets, and ancillary content helpers.
- `public/` – Static assets (favicon, manifest, images). Sitemaps are generated during build via `next-sitemap`.
- `docs/` – Markdown references (blog guidelines, campaign tracking walkthroughs) surfaced under `/docs`.
- `src/middleware.ts` – Edge middleware that captures UTM parameters and sets a `campaign_data` cookie for downstream analytics.

## UI Surface

| Route | Type | Description | Source |
| --- | --- | --- | --- |
| `/` | Static | Homepage with hero, service cards, testimonials, and CTA content pulled from `src/utils/home.ts`. | `src/app/page.tsx` |
| `/services/[service]` | Client page | Service hubs render static SEO heads plus reusable service modules (hero, benefits, FAQs). | `src/app/services/<service>/page.tsx` |
| `/services/personal-care/bergen-county` (and similar) | Static | County-specific service hubs powered by structured content in `src/lib/content/**` and county section components. | `src/app/services/<service>/<county>/page.tsx` |
| `/blog`, `/blog/[slug]` | Static + Dynamic | Blog index and article pages source content modules from `src/lib/blogs/articles/**`. | `src/app/blog/page.tsx`, `src/app/blog/[slug]/page.tsx` |
| `/contact`, `/contact/(services|employment|general)` | Client | Route-scoped contact forms configured via `ContactMap`, posting to the external CRM endpoint. | `src/app/contact/*/page.tsx`, `src/components/contact/ContactForm.tsx` |
| `/docs/**` | Static | In-app documentation pages that render Markdown from the `docs/` folder for operations teams. | `src/app/docs` |

## Data + External Services

- **Contact CRM** – `src/components/contact/ContactForm.tsx` posts to `${process.env.NEXT_PUBLIC_API_HOST}/v1/contact-forms/${process.env.NEXT_PUBLIC_SLUG}` with validated payloads; ensure the host supports CORS and HTTPS.
- **Campaign tracking** – `src/middleware.ts` serializes UTM parameters into a `campaign_data` cookie; `CampaignTracker` and `analytics.ts` read cookies/URL params, store attribution history in `localStorage`, and push events into `window.dataLayer`, `window.umami`, and SiteBehaviour when available.
- **Analytics scripts** – `src/app/layout.tsx` mounts Google Tag Manager and SiteBehaviour; extend this file for any additional third-party scripts to keep CSP/ordering consistent.
- **Sitemaps & robots** – `next-sitemap.config.ts` enumerates first-party service pages and county hubs after each build (`npm run build` automatically runs `next-sitemap`).
- **Static content** – Services, county hubs, testimonials, and blog entries live as TypeScript modules (`src/lib/content/**`, `src/lib/blogs/articles/**`), enabling static generation without external CMS calls.

## Coding Guidelines for Agents

- Default to server components in the App Router; only add `'use client'` where hooks, browser APIs, or interactive libraries are required (forms, toasts, analytics).
- Keep county/service data centralized: update the relevant module in `src/lib/content/**` in tandem with the county components when introducing new geographies or offerings.
- Reuse `ContactMap` in `src/utils/contact.ts` whenever adding a new contact flow so schemas, defaults, and copy stay synchronized with the form.
- Styling relies on Tailwind CSS with utility classes and `class-variance-authority`; prefer existing patterns in `src/components/ui`.
- When touching analytics, route state, or marketing pixels, thread changes through `RouteStateProvider`, `CampaignTracker`, and `analytics.ts` to keep attribution reporting intact.
- Update `next-sitemap.config.ts`, navigation definitions in `src/utils/routes.ts`, and any relevant docs under `docs/` when exposing new public pages.

## Environment Variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_API_HOST` | Base URL for the CRM/contact-form API the frontend submits to (e.g., `https://api.yourdomain.com`). |
| `NEXT_PUBLIC_SLUG` | Client identifier appended to the contact-form endpoint (`/v1/contact-forms/{slug}`). |

Store secrets in `.env.local` (ignored by Git). Only `NEXT_PUBLIC_*` values are exposed to the browser; backend keys should live in deployment configs if/when API routes are added.

## Testing & Validation

- `npm run dev` for manual verification; ensure service hubs and county pages render without 404s.
- `npm run lint` to catch TypeScript/ESLint violations; resolve Radix/Tailwind-specific lint rules before shipping.
- Exercise contact flows against the configured CRM host and confirm Sonner toasts reflect success/failure states.
- Validate campaign attribution by appending UTM parameters, then inspecting the `campaign_data` cookie and `localStorage.campaign_history`.
- After production builds, confirm `next-sitemap` emits updated XML files that include any new routes.

## Known Gaps / TODOs

- `src/app/layout.tsx` still uses placeholder metadata (`description: 'Your description here'`) and an Open Graph image marked `// TODO: UPDATE`; replace with final marketing copy/assets.
- SiteBehaviour and Umami tracking assume global functions exist; add the corresponding script tags or guard against missing trackers if instrumentation changes.
- `src/utils/constants.ts` contains a temporary credential comment; scrub or relocate any sensitive operational notes before publishing.
- Contact form submissions depend on both `NEXT_PUBLIC_API_HOST` and `NEXT_PUBLIC_SLUG`; add build-time validation or fallbacks to avoid posting to `undefined` endpoints in non-configured environments.

## Audit Trail

- UTM parameters are persisted in the `campaign_data` cookie by `src/middleware.ts` and mirrored to `localStorage.campaign_history` through `analytics.storeCampaignData`, providing first/last-touch attribution history per device.
- `analytics.trackCampaign` pushes structured events into Google Tag Manager (`window.dataLayer`) and SiteBehaviour custom events, assisting marketing teams with external reporting.
- Contact form POSTs include `fullname`, `email`, `phone`, and contextual data fields; rely on the downstream CRM logs for compliance-level retention.

## When Adding Features

1. Define or update structured content in `src/lib/content/**`, `src/lib/seo/**`, and `src/utils/**` so new pages can reuse existing components.
2. Wire new routes under `src/app/`, preferring server components and static generation for SEO where possible, and register the paths in `src/utils/routes.ts` plus `next-sitemap.config.ts`.
3. Extend forms through `ContactMap` and React Hook Form schemas to maintain consistent validation/toast handling.
4. Document new environment or operational requirements in this file and any relevant Markdown under `docs/`.
5. Run `npm run lint` and `npm run build` (verifying sitemap output) before handoff or deployment.
