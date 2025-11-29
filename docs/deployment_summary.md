# Deployment Summary

<!-- This file is automatically sent via email on successful deployment, then reset for the next cycle -->

## Latest deploy summary
- **SEO cleanup**: Streamlined sitemap from 235 pages to 120 focused, high-quality pages
- **Redirect fix**: Old URL `/bergen-county` now properly redirects to services page
- **Focus on Bergen County**: City-level pages now prioritized for Bergen County to improve local search rankings

## Notes for internal team
- Added redirect for `/bergen-county` → `/services` in `next.config.mjs`
- Updated `next-sitemap.config.mjs` to exclude non-Bergen county city pages from sitemap:
  - Essex, Monmouth, Passaic, Ocean county city pages excluded (pages still exist, just not in sitemap)
  - Added `COUNTIES_WITH_CITY_PAGES` constant to control which counties get city pages in sitemap
- Also excluded `/docs`, `/seo-review`, `/not-found`, `/test-tracking` from sitemap
- Created SEO remediation plan at `docs/seo-remediation-plan.md`
- GSC data analyzed and stored in `docs/gsc/` folder
- Next steps: GSC URL removals for old pages, add FAQ/LocalBusiness schemas

## Changed URLs
- https://www.360degreecare.net/services
- https://www.360degreecare.net/sitemap.xml
