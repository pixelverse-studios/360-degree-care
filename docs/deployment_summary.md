# Deployment Summary

<!-- This file is automatically sent via email on successful deployment, then reset for the next cycle -->

## Latest deploy summary
- Added Mixpanel analytics integration to compare with SiteBehaviour side-by-side
- All existing tracked events (page views, ad source attribution, bounce tracking) now mirror to Mixpanel
- Reviewed Google Ads tracking setup and added cache-busting parameters to ensure conversion tags fire correctly
- Verified form submission and phone click conversion events are properly configured

## Notes for internal team
- New environment variable required: `NEXT_PUBLIC_MIXPANEL_TOKEN`
- Mixpanel mirrors existing events: Page View, Ad Source (Google/Meta), bounce
- Debug logging visible in dev mode console with `[Mixpanel]` prefix
- Files added/modified: `src/lib/mixpanel.ts`, `src/lib/analytics.ts`
- Google Ads tag ID: `AW-17090471122` (production only)
- Google Ads form conversion ID: `AW-17090471122/KWXmCPy67MsaENLJr9U_`
- Google Ads phone conversion ID: `AW-17090471122/bfUXCJzCydMaENLJr9U_`
- Files modified: `src/app/layout.tsx`, `src/lib/analytics.ts`, `src/components/contact/ContactForm.tsx`

## Changed URLs
- https://www.360degreecare.net
- https://www.360degreecare.net/contact
- https://www.360degreecare.net/contact/services
- https://www.360degreecare.net/contact/employment
