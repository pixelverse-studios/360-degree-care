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

## Notes for internal team
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
  - Files: src/components/county/BergenCountyCityLinks.tsx (new), 6 county hub page files
- 360C-163 completed: Added 11 redirects for legacy /{county}/{city} URLs from GSC crawled-not-indexed
  - Bergen County: /bergen-county/east-rutherford, /oakland, /teaneck, /englewood-cliffs, /river-edge
  - Passaic County: /passaic-county/totowa
  - Monmouth County: /monmouth-county/atlantic-highlands-borough, /matawan-borough, /long-branch-city, /red-bank-borough
  - Ocean County: /ocean-county/stafford-township
  - All redirect to /services (preserves any link equity from old site)
  - GSC removal submitted for 3 truly dead URLs: /blog/bergen-county, /blog/passaic-county, /services/live-in-care
- 360C-155 completed: Added BlogPosting JSON-LD schema to all blog posts
  - Schema includes: headline, description, image, datePublished, dateModified, author, publisher
  - Author typed as Person with worksFor organization reference
  - Publisher includes Organization with logo ImageObject
  - Files: src/lib/seo/local-business-schema.ts (generateArticleSchema), src/components/blog/BlogClientPage.tsx
- 360C-148 completed: Fixed areaServed schema on all service pages and root layout
  - Changed from `@type: State` to array of `@type: AdministrativeArea` for 5 counties
  - Counties: Bergen, Monmouth, Passaic, Essex, Ocean
  - Files: 6 service SEO files in src/lib/seo/, src/app/layout.tsx (LocalBusinessSchema)

## Changed URLs
- https://www.360degreecare.net/services/companion-care
- https://www.360degreecare.net/services/personal-care
- https://www.360degreecare.net/services/elder-care
- https://www.360degreecare.net/services/home-health-aides
- https://www.360degreecare.net/services/nursing
- https://www.360degreecare.net/services/staffing
- https://www.360degreecare.net/services/companion-care/bergen-county
- https://www.360degreecare.net/services/personal-care/bergen-county
- https://www.360degreecare.net/services/elder-care/bergen-county
- https://www.360degreecare.net/services/home-health-aides/bergen-county
- https://www.360degreecare.net/services/nursing/bergen-county
- https://www.360degreecare.net/services/staffing/bergen-county
