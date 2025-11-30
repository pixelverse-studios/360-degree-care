# Deployment Summary

<!-- This file is automatically sent via email on successful deployment, then reset for the next cycle -->

## Latest deploy summary
- **FAQ page SEO enhancement**: Added structured FAQ schema for better search visibility and potential rich snippets
- **Local business signals improved**: Added LocalBusiness schema to Bergen County companion care page
- **Contact information standardized**: Updated all Bergen County pages to display consistent local phone number (201) 299-4243

## Notes for internal team
- Created `src/app/faq/layout.tsx` with FAQPage schema (14 Q&As from all categories)
- Created `src/lib/seo/local-business-schema.ts` utility for consistent schema generation
- Updated `bergen-county-companion-care.ts` with @graph schema (Service + LocalBusiness)
- Fixed NAP in all 6 Bergen County content files: companion-care, elder-care, nursing, staffing, personal-care, home-health-aides
- Fixed `cities/bergen-county/helpers.ts` provider schema phone
- Changed from (800) 338-7786 and (856) 874-0067 to (201) 299-4243

## Changed URLs
- https://www.360degreecare.net/faq
- https://www.360degreecare.net/services/companion-care/bergen-county
- https://www.360degreecare.net/services/elder-care/bergen-county
- https://www.360degreecare.net/services/nursing/bergen-county
- https://www.360degreecare.net/services/staffing/bergen-county
- https://www.360degreecare.net/services/personal-care/bergen-county
- https://www.360degreecare.net/services/home-health-aides/bergen-county
