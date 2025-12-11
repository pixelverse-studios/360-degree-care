# Deployment Summary

<!-- This file is automatically sent via email on successful deployment, then reset for the next cycle -->

## Latest deploy summary
- **Optimized robots.txt for better search and AI visibility** - Updated crawler permissions to allow AI chatbots (ChatGPT, Claude, etc.) and improve how search engines access the site

## Notes for internal team
- Removed `/_next/` from robots.txt Disallow rules via `next-sitemap.config.mjs`
- The static `public/robots.txt` is overwritten during build by next-sitemap - config file is the source of truth
- Also removed duplicate User-agent blocks and simplified `/docs/` rule
- AI bots are allowed (no blocking rules added)

## Changed URLs
- https://www.360degreecare.net/robots.txt
