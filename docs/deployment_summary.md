# Deployment Summary

<!-- This file is automatically sent via email on successful deployment, then reset for the next cycle -->

## Latest deploy summary
- Added internal links from all 6 service hub pages to Bergen County city pages
- New "Service Areas in Bergen County" section now appears on Companion Care, Personal Care, Elder Care, Home Health Aides, Nursing, and Staffing service pages
- Each section links to all 9 Bergen County cities with keyword-rich anchor text (e.g., "Companion Care in Fort Lee, NJ")
- Added noindex meta tags to 126 non-Bergen County city pages (Essex, Monmouth, Passaic counties) to focus Google's crawl budget on priority Bergen County pages

## Notes for internal team
- 360C-158 completed
- 360C-160 completed: Added `robots: { index: false, follow: true }` to all non-Bergen county city page metadata
- SEO improvement: Internal linking from service hubs to city pages helps Google understand site structure and should improve indexing of city pages
- SEO improvement: Noindexing non-priority pages reduces crawl budget waste and helps Google focus on Bergen County content
- Created reusable `BergenCountyServiceAreas` component for consistency across all service pages
- Files changed for 360C-160: 18 content files in src/lib/content/cities/{essex,monmouth,passaic}-county/

## Changed URLs
- https://www.360degreecare.net/services/companion-care
- https://www.360degreecare.net/services/personal-care
- https://www.360degreecare.net/services/elder-care
- https://www.360degreecare.net/services/home-health-aides
- https://www.360degreecare.net/services/nursing
- https://www.360degreecare.net/services/staffing
- All 108 non-Bergen city pages now have noindex (Essex, Monmouth, Passaic counties)
