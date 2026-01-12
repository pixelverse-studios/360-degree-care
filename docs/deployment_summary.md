# Deployment Summary

<!-- This file is automatically sent via email on successful deployment, then reset for the next cycle -->

## Latest deploy summary
- Added Mixpanel analytics integration to compare with SiteBehaviour side-by-side
- All existing tracked events (page views, ad source attribution, bounce tracking) now mirror to Mixpanel

## Notes for internal team
- New environment variable required: `NEXT_PUBLIC_MIXPANEL_TOKEN`
- Mixpanel mirrors existing events: Page View, Ad Source (Google/Meta), bounce
- Debug logging visible in dev mode console with `[Mixpanel]` prefix
- Files added/modified: `src/lib/mixpanel.ts`, `src/lib/analytics.ts`

## Changed URLs
-
