# Deployment Summary

<!-- This file is automatically sent via email on successful deployment, then reset for the next cycle -->

## Latest deploy summary
- Replaced all brand identity references from "360 Degree Care" to "Haven Home Health"
- Updated contact email, phone number, and address to generic placeholders
- Replaced social media links with placeholder values
- Updated logo component from image-based to text-based with Home icon
- Updated PWA manifest with new brand name
- Replaced all favicon and logo image assets with generic branded versions
- Removed all analytics and tracking code (Google Tag Manager, Google Ads conversion tracking)
- Contact form no longer fires conversion tracking on submission
- Updated root layout metadata, canonical URL, and JSON-LD schemas for Haven Home Health
- Removed client-specific OG image and social media sameAs references
- Trimmed service area schemas to Bergen County only for demo
- Debranded all 29 blog articles to Haven Home Health (replaced brand names, author names, phone numbers, emails, and URLs)
- Updated footer: removed "360 Degree Care Inc." copyright, replaced with "Haven Home Health"
- Removed franchise disclaimer from footer ("Each franchise is independently owned and operated.")
- Replaced client-specific Google Review link with placeholder
- Removed Google Review button from footer (still available on contact form)
- Updated legal disclaimer contact email from info@360degreecare.net to info@havenhomehealth.com
- Removed "Inc." suffix from company name reference on legal disclaimer page
- Updated local business schema helper with Haven Home Health branding (name, URL, phone, email, address, logo)
- Updated breadcrumb schema BASE_URL to haven-home-health.netlify.app
- Updated all service page SEO metadata files (companion care, elder care, home health aides, nursing, personal care, staffing) with Haven Home Health branding

## Notes for internal team
- DEV-536, DEV-537, DEV-538, DEV-539, DEV-541, DEV-548 completed
- Files: src/utils/constants.ts, src/components/Logo.tsx, public/manifest.json
- Assets: public/logo.png, public/favicon.ico, public/favicon-*.png, public/apple-touch-icon.png
- Logo component no longer uses /logo.png image — now renders text with lucide Home icon
- Stripped GTM (GTM-PGDVF5CR), Google Ads (AW-17090471122), and all conversion tracking from layout.tsx
- analytics.ts gutted to no-op stubs; ContactForm.tsx no longer calls tracking
- DEV-541: All 29 blog articles in src/lib/blogs/articles/ debranded
  - "360 Degree Care" / "360 Care" / "360DC" -> "Haven Home Health"
  - Author "Jeff DeJoseph" -> "Haven Health Editorial"
  - Author "360 Degree Care Team" -> "Haven Home Health Team"
  - Phone (201) 299-4243 -> (555) 123-4567
  - URLs 360degreecare.net -> haven-home-health.netlify.app
  - Avatar references updated from 360Logo to /logo.png
- DEV-539: Footer.tsx, GoogleReviewLink.tsx updated; Header.tsx, Breadcrumbs.tsx, routes.ts already clean
- DEV-548: Legal disclaimer email updated (info@360degreecare.net -> info@havenhomehealth.com)
- DEV-551: Updated all files in src/lib/seo/
  - local-business-schema.ts: name, url, phone, email, logo, address, sameAs
  - breadcrumb-schema.ts: BASE_URL
  - 6 service metadata files: titles, OG URLs, canonical URLs, siteName, body copy

## Changed URLs
- All pages affected (brand identity is global via layout, footer, and constants)
- All blog article pages affected by debranding
- https://haven-home-health.netlify.app/legal-disclaimer
- https://haven-home-health.netlify.app/privacy-policy
- https://haven-home-health.netlify.app/services/companion-care
- https://haven-home-health.netlify.app/services/elder-care
- https://haven-home-health.netlify.app/services/home-health-aides
- https://haven-home-health.netlify.app/services/nursing
- https://haven-home-health.netlify.app/services/personal-care
- https://haven-home-health.netlify.app/services/staffing
