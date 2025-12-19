# SEO Remediation Plan: Hyper-Local Town-First Strategy
**Created:** 2025-11-29
**Revised:** 2025-12-01
**Priority:** URGENT - Site not ranking due to indexing failures
**Strategy:** Town → County → State (bottom-up local dominance)

---

## Executive Summary

360 Degree Care has a **critical indexing problem**. Google is holding onto 600+ old URLs from previous thin-content city pages that no longer exist. These 404s have persisted for 4-5 months and Google hasn't dropped them. This noise is drowning out the current pages we want indexed.

**History:**
- Originally created ~1,200 thin template pages (every city x every service x 4 counties)
- 95% never indexed - Google saw them as thin/duplicate
- Shifted URL structure twice, landing on current `/services/[service]/[county]`
- Old pages deleted but Google still tracking them as 404s

**Current State (as of 2025-12-01):**
- 643 pages "not indexed" (mostly dead old pages Google won't forget)
- 114 404 errors (old thin pages that no longer exist)
- Bergen County keywords ranking position 80-100 (page 8-10)
- Homepage IS indexed and appearing in Google
- Current city pages NOT getting indexed

**Strategy Shift: Hyper-Local First**

Instead of trying to rank for broad terms like "companion care NJ" (unwinnable against national franchises), we will:

1. **Win town-by-town** - Dominate "companion care paramus nj", "elder care ridgewood nj", etc.
2. **Build up to county** - As city pages rank, county hub pages gain authority
3. **Eventually own state** - Once counties are strong, compete for NJ-wide terms

```
FUTURE TARGET:   /services/companion-care           → "Companion Care in NJ"
MEDIUM TARGET:   /services/companion-care/bergen-county → "Companion Care Bergen County NJ"
PRIMARY FOCUS:   /services/companion-care/bergen-county/paramus → "Companion Care Paramus NJ"
                 ↑ WIN HERE FIRST
```

---

## Phase 0: Foundation Work (COMPLETED)

### Cleanup & Indexing Prep ✅ Completed 2025-11-30

- [x] Added redirects for old URLs with traffic to `next.config.mjs`
- [x] Updated sitemap to ~118 quality pages (removed 500+ dead URLs)
- [x] Used GSC Removals tool to request removal of old URL prefixes
- [x] Resubmitted cleaned sitemap to GSC
- [x] Added FAQ schema to `/faq` page
- [x] Added LocalBusiness schema framework to Bergen County pages
- [x] Fixed NAP consistency (using (201) 299-4243 everywhere)
- [x] Requested manual indexing for Bergen County URLs in GSC

**Status:** Waiting for Google to process (typically 1-4 weeks)

---

## Phase 1: City Page Optimization (PRIMARY FOCUS)

**Timeline:** Immediate (Week 1)
**Impact:** CRITICAL - City pages are the tip of the spear

### Strategy
City pages are our primary SEO assets. Each city page should be optimized to WIN its specific "[service] + [city] + nj" keyword. Once a city page ranks, it proves the model works and we replicate.

### Priority City: Fort Lee (Strategic Focus)

**Rationale:** Affluent demographic with high-value potential clients. Strong local presence here builds premium brand positioning.

**Target Page:** `/services/companion-care/bergen-county/fort-lee`

**Optimizations Required:**
| Element | Current | Target |
|---------|---------|--------|
| Title Tag | Verify | "Companion Care in Fort Lee NJ | In-Home Caregivers | 360 Degree Care" |
| H1 | Verify | "Companion Care Services in Fort Lee, New Jersey" |
| Meta Description | Verify | Include "companion care fort lee" naturally |
| FAQ Section | Check if exists | Add 2-3 Fort Lee-specific questions |
| LocalBusiness Schema | Verify | `areaServed` must be "Fort Lee, NJ" |
| Internal Links | Weak | Add links FROM service hub and county hub |

### All 9 Bergen County Cities to Optimize

Optimize in this order, then replicate pattern to remaining cities:

| City | Priority | Rationale |
|------|----------|-----------|
| Fort Lee | 1 - NOW | Affluent demographic, high-value clients |
| Ridgewood | 2 | Home base city - brand recognition, local trust |
| Paramus | 3 | "companionship care paramus nj" (pos 18) - quick win |
| Hackensack | 4 | "senior care consultant hackensack" (pos 28) |
| Teaneck | 5 | High population density |
| Fair Lawn | 6 | |
| Englewood | 7 | |
| Westwood | 8 | |
| River Vale | 9 | |

### City Page Optimization Checklist (Per City)

For each city page, ensure:
- [ ] Title tag: "[Service] in [City] NJ | 360 Degree Care"
- [ ] H1: "[Service] Services in [City], New Jersey"
- [ ] Meta description mentions city name naturally
- [ ] LocalBusiness schema with `areaServed` set to specific city
- [ ] 2-3 city-specific FAQ items
- [ ] Unique introductory paragraph mentioning city landmarks/character
- [ ] Internal link from service hub page
- [ ] Internal link from county hub page
- [ ] Cross-links to nearby city pages ("Also serving: Teaneck, Hackensack")

---

## Phase 2: Internal Linking Architecture

**Timeline:** Week 1
**Impact:** HIGH - This is how authority flows to city pages

### Problem
City pages have weak internal link signals. Google doesn't see them as important because nothing links to them.

### Solution: Service Hub → City Pages

Add a "Service Areas in Bergen County" section to each service hub page:

**Files to modify:**
- `src/components/services/companionCare.tsx`
- `src/components/services/personalCare.tsx`
- `src/components/services/elderCare.tsx`
- `src/components/services/homeHealthAides.tsx`
- `src/components/services/nursing.tsx`
- `src/components/services/staffing.tsx`

**Section to add (example for Companion Care):**
```
## Companion Care Service Areas in Bergen County

We provide companion care services throughout Bergen County, New Jersey:

- [Companion care in Paramus](/services/companion-care/bergen-county/paramus)
- [Companion care in Ridgewood](/services/companion-care/bergen-county/ridgewood)
- [Companion care in Hackensack](/services/companion-care/bergen-county/hackensack)
- [Companion care in Teaneck](/services/companion-care/bergen-county/teaneck)
- [Companion care in Fort Lee](/services/companion-care/bergen-county/fort-lee)
- [Companion care in Fair Lawn](/services/companion-care/bergen-county/fair-lawn)
- [Companion care in Englewood](/services/companion-care/bergen-county/englewood)
- [Companion care in Westwood](/services/companion-care/bergen-county/westwood)
- [Companion care in River Vale](/services/companion-care/bergen-county/river-vale)
```

**Key:** Use keyword-rich anchor text (not "click here" or "learn more")

### Link Hierarchy Goal

```
/services/companion-care (Service Hub - NJ level)
    ↓ links to
/services/companion-care/bergen-county (County Hub)
    ↓ links to
/services/companion-care/bergen-county/paramus (City Page) ← PRIMARY TARGET
/services/companion-care/bergen-county/ridgewood
/services/companion-care/bergen-county/hackensack
... (all 9 cities)
```

Each level links DOWN to pass authority to city pages.

### Cross-Linking Between City Pages

On each city page, add "Also Serving Nearby" section:
```
Also serving nearby Bergen County communities:
[Teaneck](/services/companion-care/bergen-county/teaneck) |
[Hackensack](/services/companion-care/bergen-county/hackensack) |
[Paramus](/services/companion-care/bergen-county/paramus)
```

---

## Phase 3: NAP Consistency Verification

**Timeline:** Week 1
**Impact:** MEDIUM - Critical for local pack rankings

### Required NAP (Name, Address, Phone)
```
360 Degree Care
27 Chestnut Street
Ridgewood, NJ 07450
(201) 299-4243
info@360degreecare.net
```

### Verification Tasks

- [ ] Grep all files in `src/lib/seo/` for `(800) 338-7786` - should return 0 results
- [ ] Verify `src/utils/constants.ts` uses `(201) 299-4243`
- [ ] Verify all LocalBusiness schema uses correct phone
- [ ] Verify footer displays correct phone
- [ ] Verify Google Business Profile matches (external task)

---

## Phase 4: Schema Markup Completion

**Timeline:** Week 1-2
**Impact:** MEDIUM-HIGH - Rich snippets increase CTR

### Completed ✅
- [x] FAQ schema on `/faq` page
- [x] LocalBusiness schema framework

### Pending

#### 4.1 City-Specific LocalBusiness Schema
Each city page needs LocalBusiness schema with `areaServed` set to that specific city.

**Example for Paramus page:**
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "360 Degree Care",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "27 Chestnut Street",
    "addressLocality": "Ridgewood",
    "addressRegion": "NJ",
    "postalCode": "07450"
  },
  "telephone": "(201) 299-4243",
  "areaServed": {
    "@type": "City",
    "name": "Paramus",
    "containedInPlace": {
      "@type": "State",
      "name": "New Jersey"
    }
  },
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 40.9445,
      "longitude": -74.0754
    },
    "geoRadius": "10 miles"
  }
}
```

#### 4.2 BreadcrumbList Schema
- [ ] Add to breadcrumbs component for all pages

#### 4.3 Review/AggregateRating Schema (Lower Priority)
- [ ] Add to homepage and service pages
- Only if we have verifiable reviews to reference

---

## Phase 5: Content Differentiation

**Timeline:** Week 2-3
**Impact:** MEDIUM - Helps Google see pages as unique

### Problem
Google may see city pages as duplicate/thin content if they're too similar.

### Solution: City-Specific Content Elements

Each city page should have:

1. **Unique opening paragraph** mentioning:
   - City name and character
   - Local landmarks or neighborhoods
   - Demographics (elderly population, etc.)

2. **City-specific FAQ items** like:
   - "What areas of [City] do you serve?"
   - "How quickly can a caregiver arrive in [City]?"
   - "Do you provide overnight care in [City]?"

3. **Local trust signals:**
   - "Serving [City] families for over 10 years"
   - Mention of nearby hospitals, senior centers

### Example: Paramus-Specific Content
```
Paramus is home to many families caring for aging loved ones. With its
proximity to Valley Hospital and numerous assisted living facilities,
360 Degree Care provides companion care services that help Paramus
seniors maintain their independence at home.
```

---

## Phase 6: Ongoing Monitoring

**Timeline:** Weekly
**Impact:** Essential for measuring success

### Weekly Tracking (Every Monday)

#### GSC Checks
1. **URL Inspection** - Check indexing status of priority city pages
2. **Performance** - Filter by page, compare impressions week-over-week
3. **Coverage** - Monitor "Indexed" count trending up

#### SEOptimer Checks
1. Track position for target keywords:
   - "companionship care paramus nj"
   - "companion care ridgewood nj"
   - "senior care hackensack nj"
   - "home care bergen county nj"

#### Success Checkpoints

| Date | Check | Success Criteria |
|------|-------|------------------|
| Dec 7 | Week 1 | Paramus page shows "indexed" in GSC |
| Dec 14 | Week 2 | 5+ Bergen city pages indexed |
| Dec 21 | Week 3 | "companionship care paramus nj" position < 15 |
| Dec 31 | Month 1 | 15+ city pages indexed, first clicks recorded |
| Jan 31 | Month 2 | Position < 10 for 3+ city keywords |

---

## Implementation Checklist

### Completed ✅ (2025-11-30)
- [x] Phase 0: Foundation cleanup and indexing prep
- [x] Redirects for old URLs
- [x] Sitemap reduced to ~118 pages
- [x] GSC removals submitted
- [x] FAQ schema added
- [x] LocalBusiness schema framework
- [x] NAP consistency (partial - needs verification)
- [x] Manual indexing requests submitted

### Week 1 (Dec 1-7) - CURRENT SPRINT

#### Day 1: Verification & Paramus Optimization
- [ ] **Verify NAP fix:** Grep for old phone number `(800) 338-7786` - confirm 0 results
- [ ] **Optimize Paramus page:**
  - [ ] Verify/update title tag
  - [ ] Verify/update H1
  - [ ] Verify/update meta description
  - [ ] Add Paramus-specific FAQ items (if missing)
  - [ ] Verify LocalBusiness schema has `areaServed: Paramus`

#### Day 2-3: Internal Linking
- [ ] **Add "Service Areas" section to service hub pages:**
  - [ ] `src/components/services/companionCare.tsx`
  - [ ] `src/components/services/personalCare.tsx`
  - [ ] `src/components/services/elderCare.tsx`
  - [ ] `src/components/services/homeHealthAides.tsx`
  - [ ] `src/components/services/nursing.tsx`
  - [ ] `src/components/services/staffing.tsx`

#### Day 4-5: City Page Audit
- [ ] **Audit all 9 Bergen city pages for each service:**
  - [ ] Check title tags include city name
  - [ ] Check H1s include city name
  - [ ] Check LocalBusiness schema present with correct city
  - [ ] Document any gaps

#### Day 6-7: Deploy & Document
- [ ] Run `npm run build` - verify no errors
- [ ] Deploy changes
- [ ] Update `docs/deployment_summary.md`
- [ ] Request re-indexing for modified pages in GSC

### Week 2 (Dec 8-14)
- [ ] Replicate Paramus optimizations to Hackensack and Ridgewood
- [ ] Add BreadcrumbList schema
- [ ] Add cross-links between city pages
- [ ] First weekly metrics check

### Week 3+ (Dec 15+)
- [ ] Continue city page optimization across remaining cities
- [ ] Monitor indexing progress
- [ ] Adjust strategy based on what's working
- [ ] Only expand to non-Bergen counties once Bergen pages are ranking

---

## Success Metrics

### Hyper-Local KPIs

| Metric | Current | Week 2 | Month 1 | Month 2 |
|--------|---------|--------|---------|---------|
| Bergen city pages indexed | ~3 | 10+ | 30+ | All 54 |
| "companionship care paramus nj" position | 18 | 12 | 8 | 5 |
| City-level keywords in top 20 | 1 | 3 | 8 | 15+ |
| Bergen County impressions/day | 3-5 | 15+ | 50+ | 100+ |
| Bergen County clicks/day | 0 | 2+ | 10+ | 25+ |

### Leading Indicators (Early Signs of Success)
- More pages showing "Indexed" in URL Inspection
- Impressions trending up (even if clicks still 0)
- Position improvements from 80+ to 40-60 range
- Old 404 URLs dropping from GSC reports

### Warning Signs (Pivot if Seen After Week 4)
- Pages still showing "Discovered - not indexed"
- Impressions flat or declining
- No position movement on target keywords
- Google re-crawling but still not indexing

---

## Page Hierarchy Reference

### DO Optimize (City Pages - Primary Focus)
```
/services/companion-care/bergen-county/paramus    ← #1 Priority
/services/companion-care/bergen-county/ridgewood
/services/companion-care/bergen-county/hackensack
/services/companion-care/bergen-county/teaneck
/services/companion-care/bergen-county/fort-lee
/services/companion-care/bergen-county/fair-lawn
/services/companion-care/bergen-county/englewood
/services/companion-care/bergen-county/westwood
/services/companion-care/bergen-county/river-vale
(Repeat for all 6 services = 54 pages total)
```

### DO Support (County Hubs - Link to City Pages)
```
/services/companion-care/bergen-county
/services/personal-care/bergen-county
/services/elder-care/bergen-county
/services/home-health-aides/bergen-county
/services/nursing/bergen-county
/services/staffing/bergen-county
```

### DO NOT Change (Service Hubs - Keep Broad)
```
/services/companion-care     → Keep targeting "NJ" (future)
/services/personal-care      → Keep targeting "NJ" (future)
/services/elder-care         → Keep targeting "NJ" (future)
/services/home-health-aides  → Keep targeting "NJ" (future)
/services/nursing            → Keep targeting "NJ" (future)
/services/staffing           → Keep targeting "NJ" (future)
```

**Rationale:** Service hubs should remain NJ-focused to avoid keyword cannibalization with county hubs and to preserve future state-level targeting.

---

## Files to Modify

| File | Purpose | Phase |
|------|---------|-------|
| `src/app/services/companion-care/bergen-county/paramus/page.tsx` | Paramus optimization | 1 |
| `src/components/services/companionCare.tsx` | Add service areas section | 2 |
| `src/components/services/personalCare.tsx` | Add service areas section | 2 |
| `src/components/services/elderCare.tsx` | Add service areas section | 2 |
| `src/components/services/homeHealthAides.tsx` | Add service areas section | 2 |
| `src/components/services/nursing.tsx` | Add service areas section | 2 |
| `src/components/services/staffing.tsx` | Add service areas section | 2 |
| `src/lib/seo/*.tsx` | Verify phone numbers | 3 |
| `src/components/Breadcrumbs.tsx` | Add BreadcrumbList schema | 4 |
| City page files (54 total) | City-specific optimizations | 5 |

---

## Notes

- **Do NOT** change service hub titles from "NJ" to "Bergen County" - preserves hierarchy
- **Do NOT** create new pages until existing pages are indexed
- **Do NOT** expand to other counties until Bergen is winning
- **FOCUS** on winning one city keyword first (Paramus), then replicate
- **TRACK** weekly progress in GSC and SEOptimer
- **PATIENCE** - SEO changes take 4-8 weeks to show ranking impact

---

**Last Updated:** 2025-12-01
**Next Review:** 2025-12-07 (Week 1 checkpoint)
