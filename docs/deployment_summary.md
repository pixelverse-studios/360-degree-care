# Deployment Summary

<!-- This file is automatically sent via email on successful deployment, then reset for the next cycle -->

## Latest deploy summary
- Replaced all brand identity references from "360 Degree Care" to "Haven Home Health"
- Updated contact email, phone number, and address to generic placeholders
- Replaced social media links with placeholder values
- Updated logo component from image-based to text-based with Home icon
- Updated PWA manifest with new brand name
- Replaced all favicon and logo image assets with generic branded versions

## Notes for internal team
- DEV-536 completed
- Files: src/utils/constants.ts, src/components/Logo.tsx, public/manifest.json
- Assets: public/logo.png, public/favicon.ico, public/favicon-*.png, public/apple-touch-icon.png
- Logo component no longer uses /logo.png image — now renders text with lucide Home icon

## Changed URLs
- All pages affected (brand identity is global via layout, footer, and constants)
