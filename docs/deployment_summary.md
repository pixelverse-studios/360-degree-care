# Deployment Summary

<!-- This file is automatically sent via email on successful deployment, then reset for the next cycle -->

## Latest deploy summary
- Added automated deployment tracking system that sends email notifications when code is pushed
- Deployment summaries and affected URLs are now tracked for Google Search Console re-indexing

## Notes for internal team
- New Git pre-push hook installed via `node scripts/install-hooks.js`
- Requires PVS_WEBSITE_ID, PVS_API_URL, PVS_BASE_URL in .env.local
- Old docs/deploy-summary.md removed in favor of new format

## Changed URLs
- https://www.360degreecare.net/
