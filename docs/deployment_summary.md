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

## Notes for internal team
- DEV-536, DEV-537 completed
- Files: src/utils/constants.ts, src/components/Logo.tsx, public/manifest.json
- Assets: public/logo.png, public/favicon.ico, public/favicon-*.png, public/apple-touch-icon.png
- Logo component no longer uses /logo.png image — now renders text with lucide Home icon
- Stripped GTM (GTM-PGDVF5CR), Google Ads (AW-17090471122), and all conversion tracking from layout.tsx
- analytics.ts gutted to no-op stubs; ContactForm.tsx no longer calls tracking

## Changed URLs
- All pages affected (brand identity is global via layout, footer, and constants)
