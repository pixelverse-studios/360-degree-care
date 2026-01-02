# Deployment Summary

<!-- This file is automatically sent via email on successful deployment, then reset for the next cycle -->

## Latest deploy summary
- Fixed service page schemas: Changed areaServed from State to AdministrativeArea array (5 NJ counties) for improved local SEO
- Added Article/BlogPosting JSON-LD schema to all blog post pages for rich snippet eligibility
- Added internal links from all 6 service hub pages to Bergen County city pages
- New "Service Areas in Bergen County" section now appears on Companion Care, Personal Care, Elder Care, Home Health Aides, Nursing, and Staffing service pages
- Each section links to all 9 Bergen County cities with keyword-rich anchor text (e.g., "Companion Care in Fort Lee, NJ")
- Added internal links from all 6 Bergen County hub pages to city-specific service pages
- New "Services by City" section on county hub pages provides prominent links to Fort Lee, Ridgewood, Paramus, Hackensack, Teaneck, Fair Lawn, Englewood, Westwood, and River Vale pages
- Links use keyword-rich anchor text (e.g., "Personal Care in Fort Lee, NJ") for SEO benefit
- Added noindex meta tags to 126 non-Bergen County city pages (Essex, Monmouth, Passaic counties) to focus Google's crawl budget on priority Bergen County pages
- Fixed 43 legacy URL 404 errors with permanent redirects (51 reported, 8 were stale GSC data for pages that now exist)
- Added BreadcrumbList JSON-LD schema to all pages with breadcrumb navigation for rich snippet eligibility
- Added 11 more redirects for legacy /{county}/{city} URL patterns found in GSC crawled-not-indexed report
- Created 9 new SEO-optimized blog article modules (staged, not yet published)
- Blog articles are staged for scheduled release: 2 per week starting Jan 6, 2026
- Added publish schedule comments to blogs index.ts for tracking
- No new blog URLs are live yet - articles will be published according to Linear tickets
- Fixed favicon not appearing in Google search results - switched from Cloudinary CDN to same-origin local files
- Added unique SEO metadata to Homepage, About, and Contact pages with page-specific titles and descriptions
- Migrated About page from legacy client-side Head API to modern Next.js 14 metadata export
- Updated homepage hero copy: new H1, subheadline, and aligned meta title/description for SEO
- Updated About page hero copy: new H1, added subheadline, refreshed body copy for SEO alignment
- Updated Contact page with SEO-optimized meta tags, hero copy, and contact card descriptions
- Published new blog article: "What Does a Home Health Aide Do?" - SEO-optimized content for home health aide searches

## Notes for internal team
- Branching model changed: now using `dev/v1.0-seo-foundation` milestone branch instead of single `dev` branch
- This allows parallel work on multiple milestones when needed
- PRs now target milestone-specific dev branches, which merge to main when milestone is complete
- 360C-158 completed
- 360C-160 completed: Added `robots: { index: false, follow: true }` to all non-Bergen county city page metadata
- SEO improvement: Internal linking from service hubs to city pages helps Google understand site structure and should improve indexing of city pages
- SEO improvement: Noindexing non-priority pages reduces crawl budget waste and helps Google focus on Bergen County content
- Created reusable `BergenCountyServiceAreas` component for consistency across all service pages
- Files changed for 360C-160: 18 content files in src/lib/content/cities/{essex,monmouth,passaic}-county/
- 360C-161 completed: Added 43 redirects to next.config.mjs for legacy URL patterns:
  - `/home` → `/`
  - `/careers` → `/contact/employment`
  - `/{county}/{city}` patterns → `/services`
  - `/services/{service}/{city}` (missing county) → correct county path or hub
  - `/services/staffing-services/*` → `/services/staffing/*`
  - `/services/elder-care-consulting/*` → `/services/elder-care/*`
- 8 URLs from GSC 404 list are now valid pages (stale data) - will resolve on re-crawl
- 360C-150 completed: BreadcrumbList schema added to breadcrumb navigation component
  - Schema auto-generated based on current page path
  - Includes Home and all visible breadcrumb items with absolute URLs
  - Files: src/lib/seo/breadcrumb-schema.ts (new), src/components/nav/Breadcrumbs.tsx
- 360C-159 completed: Added internal links from Bergen County hub pages to city pages
  - New `BergenCountyCityLinks` component provides prominent city links section
  - Added to all 6 Bergen County hub pages (companion-care, personal-care, elder-care, home-health-aides, nursing, staffing)
  - Each link uses keyword-rich anchor text: "[Service Name] in [City], NJ"
- 9 new blog TypeScript modules created in `src/lib/blogs/articles/2025/`
- Blogs are NOT exported in index.ts yet (staged for scheduled publishing)
- Linear tickets 360C-167 through 360C-174 track the publish schedule
- Each ticket due date = publish date (Tue/Thu alternating)

**Staged blog files:**
- `whatDoesHomeHealthAideDo.ts` → PUBLISHED (360C-167)
- `questionsToAskHomeCareAgency.ts` → Jan 8, 2026 (360C-168)
- `homeCareVsHomeHealthCare.ts` → Jan 13, 2026 (360C-169)
- `signsParentNeedsHomeCare.ts` → Jan 15, 2026 (360C-170)
- `chooseHomeCareAgencyBergenCounty.ts` → Jan 20, 2026 (360C-171)
- `whatIsRespiteCare.ts` → Jan 22, 2026 (360C-172)
- `doesMedicareCoverHomeCareNJ.ts` → Jan 27, 2026 (360C-173)
- `homeCareVsAssistedLivingNJ.ts` → Jan 29, 2026 (360C-174)
- `howToPayForHomeCareNJ.ts` → No ticket yet (future)

**Files modified:**
- src/lib/blogs/index.ts (added schedule comments, no new exports)

360C-166 completed: Fixed favicon for Google search results
  - Added local favicon files: favicon.ico, favicon-16x16.png, favicon-32x32.png, favicon-64x64.png, apple-touch-icon.png
  - Updated src/app/layout.tsx to use local paths instead of Cloudinary CDN
  - Updated public/manifest.json to use local paths
  - Google crawler requires same-origin favicons for reliable SERP display

360C-165 completed: Added unique SEO metadata to base pages
  - Homepage: Added metadata export with designer-provided title/description
  - Contact: Created layout.tsx with page-specific metadata including phone number
  - About: Created layout.tsx with modern metadata export + preserved JSON-LD schema
  - Deleted orphaned src/lib/seo/home.tsx and src/lib/seo/about.tsx

360C-175 completed: Homepage SEO copy optimization
  - Updated SITE_TITLE and SITE_DESCRIPTION in layout.tsx
  - H1: "In-Home Care & Home Health Services Across New Jersey"
  - Subheadline: Changed from H2 to paragraph for proper heading hierarchy
  - Files: src/app/layout.tsx, src/components/hero/HomeHero.tsx

360C-176 completed: About page hero copy optimization
  - H1: "About 360 Degree Care" (replaced CompanyName component with plain text)
  - Added subheadline: "A trusted New Jersey in-home care team..."
  - Updated body copy for SEO alignment
  - Files: src/components/hero/AboutHero.tsx

360C-178 completed: Contact page SEO copy optimization
  - Meta title: "Contact 360 Degree Care | New Jersey In-Home Care Services"
  - Meta description updated for services, employment, and general inquiries
  - H1: "Get in Touch with 360 Degree Care"
  - Added subheadline and intro body copy
  - Updated all three contact card descriptions (Services, Employment, General Inquiry)
  - Files: src/app/contact/layout.tsx, src/app/contact/page.tsx

360C-167 completed: Published blog "What Does a Home Health Aide Do?"
  - Added import and export to src/lib/blogs/index.ts
  - Blog now live at /blog/what-does-home-health-aide-do
  - Fixed SVG avatar rendering in BlogTemplate (uses native img for SVGs)
  - Submit to Google Search Console for indexing

## Changed URLs
- https://www.360degreecare.net/contact
- https://www.360degreecare.net/blog/what-does-home-health-aide-do (NEW)

(After deployment: Request favicon re-crawl in Google Search Console)
