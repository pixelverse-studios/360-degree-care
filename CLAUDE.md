# 360 Degree Care - Claude Code Reference

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
NEXT_PUBLIC_API_HOST    # CRM API base URL (e.g., https://api.yourdomain.com)
NEXT_PUBLIC_SLUG        # Client ID for contact-form endpoint
```

Store in `.env.local` (git-ignored). Only `NEXT_PUBLIC_*` variables are exposed to browser.

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
     return <CountyServiceHub
       service={params.service}
       county="new-county"
     />
   }
   ```

4. **Update sitemap:**
   - Add route to `next-sitemap.config.ts`

### Adding a Blog Post

1. **Create article module:**
   ```typescript
   // src/lib/blogs/articles/new-post.ts
   export const newPost = {
     slug: "new-post",
     title: "Post Title",
     excerpt: "Brief description...",
     content: "Full content...",
     publishedAt: "2025-11-22",
     author: "Author Name"
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
       title: "Service Title - 360 Degree Care",
       description: "Service description for SEO...",
       openGraph: {
         title: "...",
         description: "...",
         images: ["/og-image.jpg"]
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

const buttonVariants = cva(
  "px-4 py-2 rounded-md font-medium",
  {
    variants: {
      variant: {
        primary: "bg-blue-600 text-white",
        secondary: "bg-gray-200 text-gray-900"
      }
    }
  }
)
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

### DON'T:
- ❌ Add `'use client'` unnecessarily
- ❌ Hardcode content in components (use content modules)
- ❌ Create forms without using `ContactMap`
- ❌ Skip sitemap updates
- ❌ Break analytics/tracking integration
- ❌ Modify route state providers without understanding impact
- ❌ Commit `.env.local` or secrets

---

## Route Reference

| Route | Type | Purpose | Component |
|-------|------|---------|-----------|
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
|-------------------|---------------|
| Service content | `src/lib/content/services/**` + component + routes.ts + sitemap |
| County content | `src/lib/content/counties/**` + component + route + sitemap |
| Blog post | `src/lib/blogs/articles/**` + export from index |
| Contact form | `ContactMap` in `src/utils/contact.ts` + route |
| Navigation | `src/utils/routes.ts` + sitemap config |
| SEO metadata | Page metadata + `docs/seo/` documentation |
| Analytics | `analytics.ts` + `CampaignTracker` + `RouteStateProvider` |
| Environment vars | `.env.local` + deployment config + documentation |

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

---

**Last Updated:** 2025-11-22
**Next.js Version:** 14 (App Router)
**Node Version:** 18+ recommended
