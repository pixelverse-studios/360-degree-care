# SEO Implementation Checklist: 360 Degree Care

> Progress: Phase 0 Complete | Phase 1 In Progress (On-page done, internal links missing)
>
> **Last Audit:** Dec 18, 2025 | **Score:** 58/100 (D) | **Next Audit:** Jan 18, 2025

---

## Phase 0: Foundation (COMPLETED)

### Technical SEO - Core
- [x] SSL configured (HTTPS)
- [x] Mobile-friendly (responsive design)
- [x] sitemap.xml present and auto-generated
- [x] robots.txt configured properly
- [x] Canonical URLs implemented (metadataBase in layout.tsx)
- [x] 404 page exists
- [x] Redirects for legacy URLs (50+ in next.config.mjs)

### Structured Data - Foundation
- [x] LocalBusiness schema (global, State-level areaServed)
- [x] Organization schema (MedicalOrganization)
- [x] FAQ schema on /faq page
- [x] Service schema on county pages

### NAP Consistency
- [x] Phone number standardized: (201) 299-4243
- [x] Address consistent: 27 Chestnut Street, Ridgewood, NJ 07450
- [x] Email consistent: info@360degreecare.net
- [x] BUSINESS_INFO constant centralized in src/lib/seo/local-business-schema.ts

### Sitemap & Indexing
- [x] Sitemap reduced to ~118 quality pages
- [x] Non-Bergen city pages excluded from sitemap
- [x] GSC URL removal requests submitted for old URLs
- [x] Manual indexing requests submitted for priority pages

---

## Phase 1: City Page Optimization (CURRENT)

### Fort Lee (Priority 1 - Affluent demographic)
- [x] Title tag: "[Service] in Fort Lee NJ | 360 Degree Care" *(verified Dec 18 audit)*
- [x] H1: "[Service] Services in Fort Lee, New Jersey" *(verified Dec 18 audit)*
- [x] Meta description mentions "Fort Lee" naturally *(verified Dec 18 audit)*
- [x] LocalBusiness schema with `areaServed: Fort Lee` *(verified Dec 18 audit)*
- [x] 2-3 Fort Lee-specific FAQ items *(all 6 services have Fort Lee FAQs)*
- [x] Unique intro paragraph mentioning Fort Lee landmarks/character *(verified Dec 18 audit)*
- [ ] Internal link from service hub page **← CRITICAL: Blocking indexing**
- [ ] Internal link from county hub page **← CRITICAL: Blocking indexing**
- [ ] Request indexing in GSC

### Ridgewood (Priority 2 - Home base)
- [x] Title tag optimized *(verified Dec 18 audit)*
- [x] H1 includes city name *(verified Dec 18 audit)*
- [x] Meta description mentions city *(verified Dec 18 audit)*
- [x] LocalBusiness schema with city areaServed *(verified Dec 18 audit)*
- [ ] City-specific FAQ items **← Missing (uses generic FAQs)**
- [x] Unique intro (mention: headquarters, local trust) *(verified Dec 18 audit)*
- [ ] Internal links from hub pages **← CRITICAL: Blocking indexing**
- [ ] Request indexing in GSC

### Paramus (Priority 3 - Quick win, position 18)
- [x] Title tag optimized *(verified Dec 18 audit)*
- [x] H1 includes city name *(verified Dec 18 audit)*
- [x] Meta description mentions city *(verified Dec 18 audit)*
- [x] LocalBusiness schema verified *(verified Dec 18 audit)*
- [ ] City-specific FAQ items **← Missing (uses generic FAQs)**
- [x] Unique intro paragraph *(verified Dec 18 audit)*
- [ ] Internal links established **← CRITICAL: Blocking indexing**
- [ ] Request indexing in GSC

### Hackensack (Priority 4 - Position 28)
- [x] Title tag optimized *(verified Dec 18 audit)*
- [x] H1 includes city name *(verified Dec 18 audit)*
- [x] Meta description mentions city *(verified Dec 18 audit)*
- [x] LocalBusiness schema verified *(verified Dec 18 audit)*
- [ ] City-specific FAQ items **← Missing (uses generic FAQs)**
- [x] Unique intro paragraph *(verified Dec 18 audit - hospital proximity content)*
- [ ] Internal links established **← CRITICAL: Blocking indexing**
- [ ] Request indexing in GSC

### Remaining Bergen Cities
- [~] Teaneck pages - on-page good, missing FAQs and internal links
- [~] Fair Lawn pages - on-page good, missing FAQs and internal links
- [~] Englewood pages - on-page good, missing FAQs and internal links
- [~] Westwood pages - on-page good, missing FAQs and internal links
- [~] River Vale pages - on-page good, missing FAQs and internal links

**Dec 18 Audit Note:** All city pages have proper metadata, H1s, unique intros, and schema. The missing elements are:
1. **Internal links** from service hubs and county hubs (P0)
2. **City-specific FAQs** for all cities except Fort Lee (P1)

---

## Phase 2: Internal Linking Architecture

### Service Hub → City Pages
Add "Service Areas in Bergen County" section to each service hub:

- [ ] src/components/services/companionCare.tsx
- [ ] src/components/services/personalCare.tsx
- [ ] src/components/services/elderCare.tsx
- [ ] src/components/services/homeHealthAides.tsx
- [ ] src/components/services/nursing.tsx
- [ ] src/components/services/staffing.tsx

### County Hub → City Pages
- [ ] Bergen County companion care hub links to all 9 cities
- [ ] Bergen County personal care hub links to all 9 cities
- [ ] Bergen County elder care hub links to all 9 cities
- [ ] Bergen County home health aides hub links to all 9 cities
- [ ] Bergen County nursing hub links to all 9 cities
- [ ] Bergen County staffing hub links to all 9 cities

### Cross-City Linking
- [ ] Each city page has "Also Serving Nearby" section
- [ ] Links use keyword-rich anchor text

---

## Phase 3: Schema Markup Completion

### BreadcrumbList Schema (Missing)
- [ ] Add BreadcrumbList schema to src/components/nav/Breadcrumbs.tsx
- [ ] Test with Google Rich Results Test
- [ ] Verify on service pages: Home > Services > [Service] > [County] > [City]

### City-Specific LocalBusiness Schema
Verify each city page has proper schema:
- [ ] Fort Lee - areaServed: City with PostalAddress
- [ ] Ridgewood - areaServed verified
- [ ] Paramus - areaServed verified
- [ ] Hackensack - areaServed verified
- [ ] Teaneck - areaServed verified
- [ ] Fair Lawn - areaServed verified
- [ ] Englewood - areaServed verified
- [ ] Westwood - areaServed verified
- [ ] River Vale - areaServed verified

### Article Schema for Blog (Missing)
- [ ] Add Article JSON-LD to src/app/blog/[slug]/page.tsx
- [ ] Include: author, datePublished, dateModified, image
- [ ] Test with Google Rich Results Test

---

## Phase 4: Content SEO

### Blog Content Calendar
- [ ] Create content calendar based on question keywords
- [ ] Publish: "How Much Does Home Care Cost in NJ?" (Priority)
- [ ] Publish: "How to Choose a Home Care Agency in Bergen County" (Priority)
- [ ] Publish: "Questions to Ask a Home Care Agency" (Priority)
- [ ] Publish: "Medicare vs Medicaid Coverage for Home Care NJ"
- [ ] Publish: "Signs Your Parent Needs Home Care"

### City-Specific Content Differentiation
- [ ] Fort Lee: unique intro, local landmarks, demographics
- [ ] Ridgewood: headquarters story, community connection
- [ ] Paramus: unique local content
- [ ] Hackensack: hospital proximity (Holy Name, Hackensack Meridian)
- [ ] Each city has 2-3 unique FAQ items

### Service Page Enhancement
- [ ] Each service page has comprehensive FAQ section
- [ ] Service pages link to relevant blog posts
- [ ] Service pages have clear CTAs

---

## Phase 5: Local SEO & Citations

### Google Business Profile
- [ ] Claim and verify listing (if not done)
- [ ] NAP matches website exactly
- [ ] Hours of operation updated
- [ ] Photos uploaded
- [ ] Services listed
- [ ] Posts published weekly

### Review Acquisition
- [ ] Google Business Profile reviews (target: 10+)
- [ ] Caring.com profile claimed and optimized
- [ ] A Place for Mom listing active
- [ ] Yelp listing claimed
- [ ] Review request process established

### Local Citations
- [ ] Bing Places for Business
- [ ] Apple Maps
- [ ] Yelp Business
- [ ] Yellow Pages
- [ ] Healthcare-specific directories

---

## Phase 6: Technical Optimization

### Core Web Vitals
- [ ] Lighthouse audit completed
- [ ] LCP (Largest Contentful Paint) < 2.5s
- [ ] FID (First Input Delay) < 100ms
- [ ] CLS (Cumulative Layout Shift) < 0.1
- [ ] Mobile performance score > 90

### Image Optimization
- [ ] All images use Next.js Image component
- [ ] Alt text on all images (descriptive, keyword-relevant)
- [ ] OG images properly sized (1200x630)
- [ ] Lazy loading implemented

### Page Speed
- [ ] Eliminate render-blocking resources
- [ ] Minimize main-thread work
- [ ] Reduce unused JavaScript

---

## Monitoring & Reporting

### Weekly Tasks (Every Monday)
- [ ] Check GSC for indexing status of priority pages
- [ ] Record keyword position changes
- [ ] Monitor impressions/clicks in GSC
- [ ] Check for new crawl errors
- [ ] Review competitor activity

### Monthly Tasks
- [ ] Full keyword ranking report
- [ ] Content gap analysis review
- [ ] Competitor monitoring update
- [ ] Blog content review
- [ ] Update SEO-CHANGELOG.md

### Quarterly Tasks
- [ ] Comprehensive technical audit
- [ ] Content audit
- [ ] Strategy review and adjustment
- [ ] Update SEO-SCOPE.md

---

## Quick Reference: File Locations

| Task | File Location |
|------|---------------|
| Sitemap config | next-sitemap.config.mjs |
| Redirects | next.config.mjs |
| Global schema | src/app/layout.tsx |
| LocalBusiness schema | src/lib/seo/local-business-schema.ts |
| FAQ schema | src/lib/seo/faq-schema.ts |
| County content | src/lib/content/[county]-[service].ts |
| City content | src/lib/content/cities/[county]/[service].ts |
| Breadcrumbs | src/components/nav/Breadcrumbs.tsx |
| Blog pages | src/app/blog/[slug]/page.tsx |
| Service components | src/components/services/*.tsx |

---

## Success Checkpoints

| Date | Check | Success Criteria | Status |
|------|-------|------------------|--------|
| Week 1 | Fort Lee page indexed | Shows "Indexed" in GSC | Pending |
| Week 2 | 5+ Bergen city pages indexed | URL Inspection confirms | Pending |
| Week 3 | Paramus keyword < position 15 | "companionship care paramus nj" | Pending |
| Month 1 | 15+ city pages indexed | First organic clicks | Pending |
| Month 2 | 3+ city keywords in top 10 | GSC Performance report | Pending |
| Month 3 | Regular organic traffic | 50+ clicks/week | Pending |

---

**Last Updated:** 2025-12-18
**Next Review:** Weekly on Mondays
