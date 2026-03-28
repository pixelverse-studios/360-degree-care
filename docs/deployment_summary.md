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
- Debranded homepage hero: replaced "360 Degree Care" with "Haven Home Health", removed "concierge-level" and "formerly Interim Healthcare" references
- Debranded about page hero, layout metadata, and JSON-LD schema for Haven Home Health
- Replaced about page content: removed Interim Healthcare history, legacy review links, and ad carousel
- Replaced team member real names and bios with generic role-based placeholders
- Debranded HomeAboutSection: removed "formerly Interim Healthcare of Ridgewood" reference
- Debranded homepage service cards in src/utils/home.ts

## Notes for internal team
- DEV-536, DEV-537, DEV-538, DEV-539, DEV-540, DEV-541 completed
- Files: src/utils/constants.ts, src/components/Logo.tsx, public/manifest.json
- Assets: public/logo.png, public/favicon.ico, public/favicon-*.png, public/apple-touch-icon.png
- Logo component no longer uses /logo.png image — now renders text with lucide Home icon
- Stripped GTM (GTM-PGDVF5CR), Google Ads (AW-17090471122), and all conversion tracking from layout.tsx
- analytics.ts gutted to no-op stubs; ContactForm.tsx no longer calls tracking
- DEV-541: All 29 blog articles in src/lib/blogs/articles/ debranded
- DEV-539: Footer.tsx, GoogleReviewLink.tsx updated; Header.tsx, Breadcrumbs.tsx, routes.ts already clean
- DEV-540: HomeHero.tsx, AboutHero.tsx, AboutDetails.tsx, AboutTheTeam.tsx, HomeAboutSection.tsx, about/layout.tsx, utils/about.tsx, utils/home.ts debranded

## Changed URLs
- All pages affected (brand identity is global via layout, footer, and constants)
- All blog article pages affected by debranding
- https://haven-home-health.netlify.app/ (homepage hero)
- https://haven-home-health.netlify.app/about (about page and all sections)
