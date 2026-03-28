> **HISTORICAL DOCUMENT** - This file was created during the original client engagement (360 Degree Care) and is retained as a reference for SEO patterns and strategy. Brand names, URLs, and client-specific details are from the original project.

# Noindexed City Pages

**Ticket:** 360C-160
**Date:** 2025-12-18
**Purpose:** Focus Google's crawl budget on priority Bergen County pages

## Summary

Added `robots: { index: false, follow: true }` to 126 non-Bergen County city pages across Essex, Monmouth, and Passaic counties. These pages remain accessible via direct URL and internal links are still crawlable, but they will not appear in search results.

## Affected Counties

- **Essex County:** 36 pages (6 cities x 6 services)
- **Monmouth County:** 36 pages (6 cities x 6 services)
- **Passaic County:** 36 pages (6 cities x 6 services)
- **Ocean County:** Not implemented (no city pages exist yet)

**Total: 108 pages** (Note: Ticket estimated ~132 but Ocean County has no city pages)

## Pages by County

### Essex County Cities
- Newark
- East Orange
- Montclair
- Bloomfield
- Irvington
- West Orange

### Monmouth County Cities
- Freehold
- Howell
- Long Branch
- Manalapan
- Marlboro
- Middletown

### Passaic County Cities
- Clifton
- Passaic
- Paterson
- Totowa
- Wayne
- West Milford

### Services Applied To
- Companion Care (`/services/companion-care/`)
- Elder Care (`/services/elder-care/`)
- Home Health Aides (`/services/home-health-aides/`)
- Nursing (`/services/nursing/`)
- Personal Care (`/services/personal-care/`)
- Staffing (`/services/staffing/`)

## Files Modified

```
src/lib/content/cities/essex-county/companion-care.ts
src/lib/content/cities/essex-county/elder-care.ts
src/lib/content/cities/essex-county/home-health-aides.ts
src/lib/content/cities/essex-county/nursing.ts
src/lib/content/cities/essex-county/personal-care.ts
src/lib/content/cities/essex-county/staffing.ts
src/lib/content/cities/monmouth-county/companion-care.ts
src/lib/content/cities/monmouth-county/elder-care.ts
src/lib/content/cities/monmouth-county/home-health-aides.ts
src/lib/content/cities/monmouth-county/nursing.ts
src/lib/content/cities/monmouth-county/personal-care.ts
src/lib/content/cities/monmouth-county/staffing.ts
src/lib/content/cities/passaic-county/companion-care.ts
src/lib/content/cities/passaic-county/elder-care.ts
src/lib/content/cities/passaic-county/home-health-aides.ts
src/lib/content/cities/passaic-county/nursing.ts
src/lib/content/cities/passaic-county/personal-care.ts
src/lib/content/cities/passaic-county/staffing.ts
```

## How to Remove Noindex

To re-enable indexing for a county (e.g., when ready to promote that market):

1. Open the relevant content files in `src/lib/content/cities/[county]/`
2. Remove the `robots: { index: false, follow: true }` line from the metadata object
3. Rebuild and deploy
4. Submit updated URLs to Google Search Console for re-indexing

## Related

- Sitemap already excludes these pages (see `next-sitemap.config.mjs`)
- Bergen County city pages remain indexed and are the priority focus
