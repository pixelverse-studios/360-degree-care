# Campaign Tracker (Source Code Focus)

This guide documents the trimmed-down campaign tracking system that only watches the `src` query parameter. The goal is to keep ad attribution lightweight for teams that exclusively route visitors from Google (`src=G`) or Meta (`src=M`) ads.

---

## 1. What Gets Tracked

| Parameter | Accepted Values | Purpose |
| --- | --- | --- |
| `src` | `G` = Google Ads<br>`M` = Meta Ads | Identifies which ad network delivered the visitor. |

Whenever a page loads with `?src=G` or `?src=M`, we fire a SiteBehaviour event such as “Ad Source: Google” or “Ad Source: Meta”. We send each unique ad source only once per session (controlled via `sessionStorage`). Every page view is still recorded separately.

---

## 2. CampaignTracker Component

`src/components/CampaignTracker.tsx` listens for URL changes and runs the tracking logic. The component is kept intentionally tiny:

```tsx
'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import analytics from '@/lib/analytics'

export function CampaignTracker() {
    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {
        const adSourceParam = searchParams.get('src')
        if (adSourceParam) {
            analytics.trackAdSource(adSourceParam, pathname)
        }
    }, [pathname, searchParams])

    useEffect(() => {
        analytics.trackPageView(pathname)
    }, [pathname])

    return null
}
```

---

## 3. Analytics Helper

`src/lib/analytics.ts` exposes three functions:

- `trackAdSource(code, landingPage)` – normalizes `G`/`M`, prevents duplicates per session, and emits the SiteBehaviour event.
- `trackPageView(pathname)` – pushes a “Page View” event with the current path.
- `trackEvent(name, payload)` – used by other trackers (e.g., BounceTracker) to send custom events.

This helper encapsulates retry logic in case SiteBehaviour is still loading.

---

## 4. Wiring It Into the Layout

The tracker is dynamically imported in `src/app/layout.tsx` so it only runs on the client:

```tsx
const CampaignTracker = dynamic(
    () =>
        import('@/components/CampaignTracker').then(module => ({
            default: module.CampaignTracker
        })),
    { ssr: false, loading: () => null }
)

// ...

<Suspense fallback={null}>
    <CampaignTracker />
    <BounceTracker />
</Suspense>
```

Be sure to wrap it near the root of the app so every navigation flows through the tracker.

---

## 5. URL Structure & QA

- Google Ads → append `?src=G`
- Meta Ads (Facebook/Instagram) → append `?src=M`

Example: `https://www.360degreecare.net/services/personal-care?src=G`

For quick validation, visit `/test-tracking?src=G` or `/test-tracking?src=M` in a non-production build and watch the browser console. You should see “Tracking ad source via SiteBehaviour …” once per session plus a page-view log on every route.

---

## 6. Implementation Checklist

1. ✅ Include `CampaignTracker` via dynamic import inside the root layout.
2. ✅ Ensure any paid media URLs add `?src=G` or `?src=M`.
3. ✅ Confirm SiteBehaviour (or your analytics endpoint) is available globally as `window.sbVisitorCustomEvent`.
4. ⚙️ Optional: expose additional short codes by extending `AD_SOURCE_MAP` in `src/lib/analytics.ts`.

That’s it—no UTM parsing, cookies, or attribution history. The system simply logs which ad platform delivered a visitor and keeps page views firing consistently.
