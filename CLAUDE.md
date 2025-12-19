# 360 Degree Care - Claude Code Reference

## ⚠️ CRITICAL: Git Workflow Rules

**NEVER commit or push changes without explicit user approval.**

- Always ask before running `git commit`
- Always ask before running `git push`
- User must explicitly say "commit these changes" or "push to remote"
- After making code changes, STOP and wait for user review
- Only create commits when user explicitly requests it
- Do not batch commits - wait for approval after each set of changes
- Merging PRs into local main is fine, but pushing main to origin triggers deployment

### 🚨 ABSOLUTE RULE: Never Push to Main

**This rule is NEVER overridable by any command, workflow, or instruction.**

```
git push origin main    ← FORBIDDEN (triggers production deployment)
git push origin dev     ← OK with approval
git push origin feature ← OK with approval
```

- **NEVER push to `main` branch** unless user explicitly says "push main" or "push to main"
- This applies even when slash commands or other workflows request pushing
- Pushing to main triggers production deployment - this must be a planned release
- If a workflow instructs you to push and you're on main, STOP and ask for confirmation
- Feature branches and `dev` branch can be pushed with normal approval

### Exception: Slash Command Workflows
When the user explicitly invokes a slash command (e.g., `/ticket`), follow the workflow defined in that command. This includes:
- Creating feature branches
- Committing changes with proper ticket references
- Pushing to origin (**non-main branches only** - main is NEVER auto-pushed)
- Creating pull requests

The slash command invocation itself serves as explicit approval for its defined workflow, **except for pushing to main which always requires separate explicit approval**.

---

## ⚠️ CRITICAL: Development Server Management

**The user has a local server running at all times. NEVER leave dev servers running in the background.**

- **DO NOT** start `npm run dev` unless absolutely necessary for validation
- **ALWAYS** kill any dev servers you start immediately after validation
- Use `run_in_background: true` when starting servers for testing
- Store the shell ID and kill it with `KillShell` when done
- If you need to verify compilation, use a quick check and immediately close
- Prefer static analysis over running servers when possible

**Example Pattern:**
```bash
# Start server for validation
npm run dev (run_in_background: true, store shell_id)
# Wait for compilation (sleep 5-10s)
# Check BashOutput for success/errors
# IMMEDIATELY kill the shell: KillShell(shell_id)
```

---

## ⚠️ CRITICAL: Deployment Summary Updates (CLIENT COMMUNICATION)

**This is NON-NEGOTIABLE. The deployment summary powers automated client email notifications.**

### THE RULE:
**IMMEDIATELY after completing ANY work, APPEND to `docs/deployment_summary.md` BEFORE doing anything else.**

This is not optional. This is not an afterthought. This is the FIRST action after finishing work.

### Accumulation Workflow:
- **ADD** new bullet points below existing ones (don't replace previous entries)
- The summary accumulates across multiple PRs until `main` is pushed
- Think of it as a changelog for "everything since last deployment"
- The hook **only fires on pushes to `main`** (feature branches don't trigger it)
- After pushing to `main`: hook sends accumulated summary → file auto-resets

### Why This Matters:
- A Git pre-push hook reads this file and sends email notifications to Phil and Sami
- If the summary is empty, the notification is skipped silently
- The user trusts this automation to keep stakeholders informed
- **Skipping this step breaks that trust and leaves clients uninformed**

### Required Actions After EVERY Task:
1. **STOP** - Do not proceed to audit files or wait for commit approval
2. **APPEND** to `docs/deployment_summary.md` (add below existing entries):
   - `## Latest deploy summary` - Plain-language bullet points (what changed, not how)
   - `## Notes for internal team` - Technical details, ticket IDs (optional)
   - `## Changed URLs` - Full URLs affected (for Google re-indexing)
3. **THEN** create the audit file in `docs/audits/landing/`
4. **THEN** wait for user commit approval

### Quick Reference (Accumulated Example):
```markdown
## Latest deploy summary
- Shortened Englewood meta description for better search visibility
- Optimized H1 tags on Fort Lee, Hackensack, Paramus, Ridgewood pages
- Added business phone number to website footer and schema

## Notes for internal team
- PVS-126, PVS-127, PVS-128 completed
- Files: data/services-city-pages.ts, lib/structured-data.ts

## Changed URLs
- https://www.pixelversestudios.io/services/englewood
- https://www.pixelversestudios.io/services/fort-lee
- https://www.pixelversestudios.io/services/hackensack
- https://www.pixelversestudios.io/services/paramus
- https://www.pixelversestudios.io/services/ridgewood
```

**See "Documentation Requirements" section below for full formatting details.**

---

**Next.js 14 App Router marketing site for a New Jersey home-health agency**

---

## Quick Reference

### Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + class-variance-authority
- **UI Components:** Radix UI primitives
- **Forms:** React Hook Form + Zod validation
- **Notifications:** Sonner toasts
- **Analytics:** Google Tag Manager, SiteBehaviour, Umami

### Key Commands

```bash
npm install              # Install dependencies
npm run dev             # Start dev server (localhost:3000)
npm run build           # Production build + sitemap generation
npm run start           # Serve production build
npm run lint            # Run ESLint checks
```

### Environment Variables

```bash
# Required for contact forms
NEXT_PUBLIC_API_HOST    # CRM API base URL (e.g., https://api.yourdomain.com)
NEXT_PUBLIC_SLUG        # Client ID for contact-form endpoint

# Required for deployment tracking (local Git hooks only)
PVS_WEBSITE_ID          # Website UUID from PVS database
PVS_API_URL             # PVS API URL (https://pvs-server-62hx7.ondigitalocean.app)
PVS_BASE_URL            # Website base URL (https://www.360degreecare.net)
```

Store in `.env.local` (git-ignored). Only `NEXT_PUBLIC_*` variables are exposed to browser. `PVS_*` variables are only used by local Git hooks.

---

## Architecture Overview

### Core Layout Structure

`src/app/layout.tsx` provides global infrastructure:

- Injects fonts and global styles
- Mounts Google Tag Manager and SiteBehaviour scripts
- Wraps all pages with:
    - `RouteStateProvider` (route change tracking)
    - `CampaignTracker` (UTM attribution)
    - Shared navigation, breadcrumbs, footer
    - Toast notification system

### Project Structure

```
src/
├── app/                          # App Router pages
│   ├── page.tsx                 # Homepage
│   ├── services/[service]/      # Service hubs
│   ├── services/[service]/[county]/  # County-specific pages
│   ├── blog/                    # Blog index and articles
│   ├── contact/                 # Contact forms (services/employment/general)
│   └── docs/                    # Internal documentation
├── components/
│   ├── county/                  # County-specific landing components
│   ├── contact/                 # Contact form components
│   ├── ui/                      # Radix wrapper components
│   └── [feature]/               # Service modules, hero blocks, CTAs
├── lib/
│   ├── content/                 # Structured content (counties/services)
│   ├── blogs/articles/          # Blog post modules
│   ├── seo/                     # SEO component templates
│   └── analytics/               # Tracking helpers
├── utils/
│   ├── routes.ts               # Route metadata
│   ├── contact.ts              # ContactMap schemas
│   ├── constants.ts            # Phone/email/address
│   └── [feature].ts            # FAQ datasets, content helpers
└── middleware.ts               # Edge middleware (UTM capture)

public/
├── favicon.ico
├── manifest.json
└── [images]/

docs/                           # Markdown documentation
└── [guides]/
```

---

## Key Architectural Patterns

### 1. Server vs Client Components

**Default to Server Components:**

```tsx
// ✅ Server component (default)
export default function ServicePage({ params }) {
    return <ServiceHub service={params.service} />
}
```

**Only use `'use client'` when necessary:**

```tsx
// ✅ Client component (requires interactivity)
'use client'
import { useForm } from 'react-hook-form'
export default function ContactForm() { ... }
```

**When to use client components:**

- Forms with React Hook Form
- Browser APIs (localStorage, window)
- Interactive libraries (toasts, animations)
- Hooks (useState, useEffect, etc.)
- Analytics tracking functions

### 2. Content Architecture

**Centralized structured content:**

```
src/lib/content/
├── counties/           # County-specific data
├── services/           # Service definitions
└── testimonials/       # Customer testimonials

src/lib/blogs/articles/ # Blog posts as TypeScript modules
```

**When updating content:**

1. Update the TypeScript module in `src/lib/content/**`
2. Update corresponding component in `src/components/county/**` or `src/components/[feature]/**`
3. Keep data and UI in sync

### 3. Contact Form System

All contact forms use `ContactMap` in `src/utils/contact.ts`:

- Centralizes schemas, defaults, and copy
- Provides React Hook Form + Zod validation
- Maintains consistent form behavior

**When adding a new contact form:**

1. Add entry to `ContactMap` in `src/utils/contact.ts`
2. Create route under `src/app/contact/`
3. Use `ContactForm` component with appropriate props
4. Forms POST to: `${NEXT_PUBLIC_API_HOST}/v1/contact-forms/${NEXT_PUBLIC_SLUG}`

### 4. Analytics & Campaign Tracking

**UTM parameter flow:**

1. User visits with UTM params (e.g., `?utm_source=google&utm_campaign=spring2024`)
2. `src/middleware.ts` captures params → sets `campaign_data` cookie
3. `CampaignTracker` reads cookie → stores in `localStorage.campaign_history`
4. `analytics.ts` pushes events to:
    - `window.dataLayer` (Google Tag Manager)
    - `window.umami` (Umami Analytics)
    - SiteBehaviour custom events

**When touching analytics:**

- Thread changes through `RouteStateProvider`, `CampaignTracker`, and `analytics.ts`
- Preserve attribution reporting chain
- Test with UTM parameters and inspect cookies/localStorage

---

## Common Tasks & Patterns

### Adding a New Service Page

1. **Create structured content:**

    ```typescript
    // src/lib/content/services/new-service.ts
    export const newServiceContent = {
      name: "New Service",
      description: "Service description...",
      benefits: [...],
      faqs: [...]
    }
    ```

2. **Create the route:**

    ```tsx
    // src/app/services/new-service/page.tsx
    export default function NewServicePage() {
        return <ServiceHub service="new-service" />
    }
    ```

3. **Update navigation:**
    - Add to `src/utils/routes.ts`
    - Update `next-sitemap.config.ts`

4. **Build and verify:**
    ```bash
    npm run build  # Check sitemap generation
    npm run dev    # Manual verification
    ```

### Adding a County-Specific Service Page

1. **Create county content:**

    ```typescript
    // src/lib/content/counties/new-county.ts
    export const newCountyContent = {
      name: "New County",
      description: "...",
      services: [...],
      demographics: {...}
    }
    ```

2. **Create county component:**

    ```tsx
    // src/components/county/NewCountySection.tsx
    export function NewCountySection({ service }) {
        // County-specific UI
    }
    ```

3. **Create the route:**

    ```tsx
    // src/app/services/[service]/new-county/page.tsx
    export default function ServiceInNewCounty({ params }) {
        return <CountyServiceHub service={params.service} county="new-county" />
    }
    ```

4. **Update sitemap:**
    - Add route to `next-sitemap.config.ts`

### Adding a Blog Post

1. **Create article module:**

    ```typescript
    // src/lib/blogs/articles/new-post.ts
    export const newPost = {
        slug: 'new-post',
        title: 'Post Title',
        excerpt: 'Brief description...',
        content: 'Full content...',
        publishedAt: '2025-11-22',
        author: 'Author Name'
    }
    ```

2. **Export from index:**

    ```typescript
    // src/lib/blogs/articles/index.ts
    export * from './new-post'
    ```

3. **Route is automatic:**
    - Dynamic route exists: `src/app/blog/[slug]/page.tsx`
    - Sitemap auto-includes all blog posts

### Updating SEO Metadata

1. **Update page metadata:**

    ```tsx
    // src/app/services/[service]/page.tsx
    export async function generateMetadata({ params }) {
        return {
            title: 'Service Title - 360 Degree Care',
            description: 'Service description for SEO...',
            openGraph: {
                title: '...',
                description: '...',
                images: ['/og-image.jpg']
            }
        }
    }
    ```

2. **Document changes:**
    - Log SEO updates in `docs/seo/`
    - Keep `/docs/seo` page current

### Styling Components

**Use Tailwind utility classes:**

```tsx
<div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-md">
    <h2 className="text-2xl font-bold text-gray-900">Title</h2>
</div>
```

**For variants, use class-variance-authority:**

```tsx
import { cva } from 'class-variance-authority'

const buttonVariants = cva('px-4 py-2 rounded-md font-medium', {
    variants: {
        variant: {
            primary: 'bg-blue-600 text-white',
            secondary: 'bg-gray-200 text-gray-900'
        }
    }
})
```

**Reuse existing patterns:**

- Check `src/components/ui/` for existing components
- Follow established Radix wrapper patterns
- Maintain consistency with current design system

---

## Critical Guidelines

### DO:

- ✅ Default to server components
- ✅ Centralize content in `src/lib/content/**`
- ✅ Use `ContactMap` for all forms
- ✅ Update `next-sitemap.config.ts` when adding routes
- ✅ Update `src/utils/routes.ts` for navigation changes
- ✅ Document SEO changes in `docs/seo/`
- ✅ Test with `npm run lint` and `npm run build`
- ✅ Preserve campaign tracking chain
- ✅ **Update `docs/deployment_summary.md` after completing features**

### DON'T:

- ❌ Add `'use client'` unnecessarily
- ❌ Hardcode content in components (use content modules)
- ❌ Create forms without using `ContactMap`
- ❌ Skip sitemap updates
- ❌ Break analytics/tracking integration
- ❌ Modify route state providers without understanding impact
- ❌ Commit `.env.local` or secrets
- ❌ **Skip deployment summary updates when work is complete**

---

## Route Reference

| Route | Type | Purpose | Component |
| --- | --- | --- | --- |
| `/` | Static | Homepage with hero, services, testimonials | `src/app/page.tsx` |
| `/services/[service]` | Client | Service hub with benefits, FAQs | `src/app/services/[service]/page.tsx` |
| `/services/[service]/[county]` | Static | County-specific service landing pages | `src/app/services/[service]/[county]/page.tsx` |
| `/blog` | Static | Blog index | `src/app/blog/page.tsx` |
| `/blog/[slug]` | Dynamic | Individual blog posts | `src/app/blog/[slug]/page.tsx` |
| `/contact` | Client | General contact form | `src/app/contact/page.tsx` |
| `/contact/services` | Client | Service inquiry form | `src/app/contact/services/page.tsx` |
| `/contact/employment` | Client | Employment inquiry form | `src/app/contact/employment/page.tsx` |
| `/docs/**` | Static | Internal documentation viewer | `src/app/docs/**` |

---

## Data Flow

### Contact Form Submission

```
User fills form
  ↓
React Hook Form validation (Zod schema)
  ↓
POST to ${NEXT_PUBLIC_API_HOST}/v1/contact-forms/${NEXT_PUBLIC_SLUG}
  ↓
Success: Sonner toast + optional redirect
Failure: Error toast + field validation
```

### Campaign Attribution

```
User visits with UTM params
  ↓
middleware.ts captures params → campaign_data cookie
  ↓
CampaignTracker reads cookie
  ↓
localStorage.campaign_history updated (first/last touch)
  ↓
Events pushed to dataLayer, umami, SiteBehaviour
```

### Static Generation

```
Build time (npm run build)
  ↓
Next.js generates static HTML for:
  - Homepage
  - Service pages (generateStaticParams)
  - County service pages (generateStaticParams)
  - Blog posts (from articles modules)
  - Docs pages
  ↓
next-sitemap generates XML sitemap
  ↓
Static files ready for deployment
```

---

## Linear Ticket Creation

When creating Linear tickets for this project:

| Field    | Value                   |
| -------- | ----------------------- |
| Team     | Jeff DeJoseph           |
| Assignee | `me`                    |
| Project  | 360 Degree Care Website |
| Priority | Medium (3)              |

**Labels:** Always apply one from each sub-label group:

- **Environment:** `Front End`, `Fullstack`, `Server`
- **Scope:** `Ticket`, `Epic`
- **Task:** `Feature`, `Bug`, `Improvement`, `Refactor`, `Maintenance`, `Research`

## Testing & Validation

### Manual Testing Checklist

- [ ] `npm run dev` - Verify all pages render
- [ ] Service hubs and county pages load without 404s
- [ ] Contact forms submit successfully
- [ ] Sonner toasts show on form success/failure
- [ ] UTM parameters captured in cookie
- [ ] `localStorage.campaign_history` populated
- [ ] Navigation links work correctly
- [ ] Breadcrumbs update per route

### Build Validation

```bash
npm run lint           # Check TypeScript/ESLint
npm run build         # Verify build succeeds
# Check .next/ output and sitemap files
ls -la public/*.xml   # Verify sitemap generation
```

### Campaign Tracking Test

```bash
# Visit with UTM params
open "http://localhost:3000?utm_source=test&utm_medium=email&utm_campaign=test2024"

# Inspect in browser DevTools:
# 1. Application → Cookies → campaign_data
# 2. Console → localStorage.campaign_history
# 3. Network → Check dataLayer events
```

---

## Known Issues & TODOs

### Current Gaps

1. **Metadata placeholders** - `src/app/layout.tsx` has placeholder description and OG image marked `// TODO: UPDATE`
2. **SiteBehaviour/Umami guards** - Assumes global tracking functions exist; no fallbacks if scripts fail to load
3. **Temp credentials** - `src/utils/constants.ts` contains operational notes that should be scrubbed
4. **Environment validation** - No build-time checks for `NEXT_PUBLIC_API_HOST` and `NEXT_PUBLIC_SLUG`

### When Addressing TODOs

- Update root `layout.tsx` with final marketing copy
- Add guards for analytics globals (check `typeof window.dataLayer !== 'undefined'`)
- Remove sensitive comments from constants file
- Add environment variable validation in `next.config.mjs` or startup script

---

## SEO Remediation Plan

**IMPORTANT: Review `docs/seo-remediation-plan.md` before doing any SEO-related work.**

This site is undergoing active SEO remediation to recover from historical indexing issues. The plan documents:

- Current strategy: **Hyper-Local Town-First** (City → County → State)
- Phase-by-phase implementation checklist
- What's been completed vs what's pending
- Technical decisions made (redirects, sitemap exclusions, schema markup)

### Strategy: Win Town-by-Town

```
WIN FIRST:   City Pages     → "companion care fort lee nj"
THEN WIN:    County Hubs    → "companion care bergen county nj"
FUTURE:      Service Hubs   → "companion care nj" (keep broad)
```

**City Priority Order:** Fort Lee → Ridgewood → Paramus → Hackensack → remaining cities

### Current SEO Status (as of 2025-12-01)

**Completed (Phase 0 - Foundation):**

- ✅ Legacy URL redirects in `next.config.mjs`
- ✅ Sitemap reduced to ~118 quality pages (Bergen County focus)
- ✅ GSC URL prefix removals requested for old/dead URLs
- ✅ FAQ schema added to `/faq` page
- ✅ LocalBusiness schema framework added
- ✅ NAP consistency fixed: `(201) 299-4243` everywhere
- ✅ Manual indexing requested for priority Bergen County URLs

**In Progress (Week 1 Sprint - Dec 1-7):**

- City page optimization (Fort Lee first, then Ridgewood, Paramus)
- Internal linking from service hubs to city pages
- City-specific LocalBusiness schema verification

**Pending (Week 2+):**

- BreadcrumbList schema
- Cross-linking between city pages
- Content differentiation for city pages
- Expansion to other counties (only after Bergen is winning)

### Key SEO Files

| File | Purpose |
| --- | --- |
| `docs/seo-remediation-plan.md` | Master SEO strategy and progress tracking |
| `src/lib/seo/local-business-schema.ts` | Centralized business info for consistent NAP |
| `src/app/faq/layout.tsx` | FAQ page with FAQPage schema |
| `next-sitemap.config.mjs` | Controls which pages appear in sitemap |

### NAP (Name, Address, Phone) - Use Consistently

- **Phone:** (201) 299-4243
- **Address:** 27 Chestnut Street, Ridgewood, NJ 07450
- **Email:** info@360degreecare.net

### Service Area Schema Strategy

**CRITICAL: Follow this hierarchical approach for all service page structured data**

When implementing `areaServed` schema markup, use different specificity levels based on page type. This maximizes local SEO impact and helps search engines understand service coverage breadth and depth.

#### Schema Hierarchy Rules

| Page Type | Schema Type | Purpose |
| --- | --- | --- |
| **Main Service Pages**<br>`/services/[service]` | `AdministrativeArea` array | Signals broad geographic coverage across all regions |
| **County Pages**<br>`/services/[service]/[county]` | Single `AdministrativeArea` | Targets county-specific searches |
| **City Pages**<br>`/services/[service]/[county]/[city]` | `City` with `PostalAddress` | Hyper-local targeting with maximum detail |

#### Implementation Examples

**1. Main Service Page Schema:**

```json
{
    "@type": "Service",
    "areaServed": [
        { "@type": "AdministrativeArea", "name": "Bergen County, New Jersey" },
        {
            "@type": "AdministrativeArea",
            "name": "Monmouth County, New Jersey"
        },
        { "@type": "AdministrativeArea", "name": "Passaic County, New Jersey" },
        { "@type": "AdministrativeArea", "name": "Ocean County, New Jersey" }
    ]
}
```

**2. County Page Schema:**

```json
{
    "@type": "Service",
    "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Bergen County, New Jersey"
    }
}
```

**3. City Page Schema (CURRENT IMPLEMENTATION):**

```json
{
    "@type": "Service",
    "areaServed": {
        "@type": "City",
        "name": "Fort Lee",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Fort Lee",
            "addressRegion": "NJ",
            "addressCountry": "US"
        }
    }
}
```

#### When to Audit/Update

- [ ] **Main service pages** (`/services/personal-care`, etc.) should use `AdministrativeArea` array
- [ ] **County pages** (`/services/personal-care/bergen-county`, etc.) should use single `AdministrativeArea`
- [ ] **City pages** already correctly use `City` with full `PostalAddress` ✅
- [ ] Validate all schemas using Google Rich Results Test
- [ ] Update `docs/deployment_summary.md` with affected URLs when changing schemas

#### Why This Matters

1. **Geographic Targeting** - Search engines understand full service scope vs. specific coverage
2. **Local Search Rankings** - Appropriate schema granularity for each geographic level
3. **Breadth Signals** - Demonstrates established presence across regions
4. **Rich Results** - Better chance of location-based search features
5. **User Intent Matching** - Different schema matches different search intents

#### Schema Validation Checklist

Before marking schema work complete:

- [ ] All three page types use correct `areaServed` format
- [ ] No duplicate/conflicting `areaServed` declarations on same page
- [ ] `@id` links properly reference organization schema
- [ ] Provider organization referenced via `@id` link
- [ ] Validated in Google Rich Results Test
- [ ] Documented in `docs/deployment_summary.md`

---

### NAP (Name, Address, Phone) - Use Consistently

---

## Quick Commands Reference

```bash
# Development
npm run dev              # Start dev server on :3000
npm run lint             # Run ESLint checks
npm run build            # Production build + sitemap
npm run start            # Serve production build

# Testing
curl -X POST \
  ${NEXT_PUBLIC_API_HOST}/v1/contact-forms/${NEXT_PUBLIC_SLUG} \
  -H "Content-Type: application/json" \
  -d '{"fullname":"Test","email":"test@example.com","phone":"555-1234","message":"Test"}'

# Deployment
npm run build && npm run start
# Or deploy to Netlify/Vercel via Git integration

# Sitemap verification
cat public/sitemap.xml
cat public/sitemap-0.xml
```

---

## External Integrations

### CRM/Contact API

- **Endpoint:** `${NEXT_PUBLIC_API_HOST}/v1/contact-forms/${NEXT_PUBLIC_SLUG}`
- **Method:** POST
- **Headers:** Content-Type: application/json
- **Payload:** `{ fullname, email, phone, message, [contextual fields] }`
- **Requirements:** CORS enabled, HTTPS only
- **Response:** Expected 200 on success with optional redirect URL

### Analytics Services

- **Google Tag Manager** - Injected in `layout.tsx`, pushes to `window.dataLayer`
- **SiteBehaviour** - Custom event tracking for behavior analytics
- **Umami** - Privacy-focused analytics via `window.umami`
- **Configuration:** All tracking IDs managed in respective script tags in `layout.tsx`

### Sitemap & SEO

- **Generator:** `next-sitemap` package
- **Config:** `next-sitemap.config.ts`
- **Output:** `public/sitemap.xml` and `public/sitemap-*.xml`
- **Trigger:** Automatic on `npm run build` via postbuild hook
- **Includes:** All static pages, service hubs, county pages, blog posts

---

## File Change Impact Matrix

| When You Change... | Also Update... |
| --- | --- |
| Service content | `src/lib/content/services/**` + component + routes.ts + sitemap + deployment_summary |
| County content | `src/lib/content/counties/**` + component + route + sitemap + deployment_summary |
| Blog post | `src/lib/blogs/articles/**` + export from index + deployment_summary |
| Contact form | `ContactMap` in `src/utils/contact.ts` + route + deployment_summary |
| Navigation | `src/utils/routes.ts` + sitemap config + deployment_summary |
| SEO metadata | Page metadata + `docs/seo/` documentation + deployment_summary |
| Analytics | `analytics.ts` + `CampaignTracker` + `RouteStateProvider` |
| Environment vars | `.env.local` + deployment config + documentation |
| **Any visible change** | **`docs/deployment_summary.md` with affected URLs** |

---

## AI Agent Best Practices

### When Starting a Task

1. Read relevant content modules first (don't guess structure)
2. Check existing patterns in similar components
3. Verify route configuration before creating new pages
4. Review current analytics integration if touching tracking

### When Making Changes

1. Maintain server/client component boundaries
2. Keep content centralized (never hardcode in components)
3. Test forms end-to-end (validation + submission + toasts)
4. Run `npm run lint` before committing
5. Verify sitemap includes new routes after build
6. **Update `docs/deployment_summary.md` with client-facing summary and affected URLs**

### When Debugging

1. Check browser DevTools Console for errors
2. Verify environment variables are set
3. Inspect Network tab for failed API calls
4. Check campaign_data cookie and localStorage
5. Review middleware.ts for UTM capture logic
6. Validate ContactMap configuration for forms

### Code Review Checklist

- [ ] Server components used where possible
- [ ] No hardcoded content (uses content modules)
- [ ] Forms use ContactMap schemas
- [ ] Navigation updated in routes.ts
- [ ] Sitemap config includes new routes
- [ ] SEO metadata complete and accurate
- [ ] Analytics tracking preserved
- [ ] No secrets or credentials in code
- [ ] TypeScript types are correct
- [ ] Tailwind classes follow existing patterns
- [ ] Documentation updated in docs/
- [ ] **`docs/deployment_summary.md` updated with changes and affected URLs**

---

**Last Updated:** 2025-11-30 **Next.js Version:** 14 (App Router) **Node Version:** 18+ recommended
