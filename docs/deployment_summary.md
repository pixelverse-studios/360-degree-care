# Deployment Summary

<!-- This file is automatically sent via email on successful deployment, then reset for the next cycle -->

## Latest deploy summary
- Added Mixpanel analytics integration to compare with SiteBehaviour side-by-side
- All existing tracked events (page views, ad source attribution, bounce tracking) now mirror to Mixpanel
- Added Google Ads conversion tracking (gtag.js) for ad campaign measurement
- Contact form submissions now trigger Google Ads "Website lead" conversion events

## Notes for internal team
- New environment variable required: `NEXT_PUBLIC_MIXPANEL_TOKEN`
- Mixpanel mirrors existing events: Page View, Ad Source (Google/Meta), bounce
- Debug logging visible in dev mode console with `[Mixpanel]` prefix
- Files added/modified: `src/lib/mixpanel.ts`, `src/lib/analytics.ts`
- Google Ads tag ID: `AW-17090471122` (production only)
- Google Ads conversion ID: `AW-17090471122/KWXmCPy67MsaENLJr9U_`
- Files modified: `src/app/layout.tsx`, `src/lib/analytics.ts`, `src/components/contact/ContactForm.tsx`

## Changed URLs
- All pages (site-wide tracking script)
- https://www.360degreecare.net/contact
- https://www.360degreecare.net/contact/services
- https://www.360degreecare.net/contact/employment
