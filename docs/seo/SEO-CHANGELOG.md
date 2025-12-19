# SEO Changelog: 360 Degree Care

> Track all SEO changes and their impact

---

## How to Use This Log

Record every SEO change with:
- **Date:** When the change was made
- **Category:** Technical / On-Page / Content / Local / Off-Page / Schema
- **Change:** What was modified
- **Rationale:** Why the change was made
- **Files Affected:** List of files changed
- **Expected Impact:** What you hope to achieve
- **Actual Impact:** Fill in 2-4 weeks later with GSC data

---

## 2025 Changes

### December 18, 2025 - SEO Audit

**Type:** Full Technical Audit (Indexing Focus)
**Overall Score:** 58/100 (Grade: D)

**Scores by Category:**
| Category | Score | Notes |
|----------|-------|-------|
| Technical SEO | 72/100 | Strong foundation, missing BreadcrumbList schema |
| On-Page SEO | 75/100 | Good metadata, proper hierarchy |
| Content | 45/100 | City pages too similar, only Fort Lee differentiated |
| Local SEO | 85/100 | Excellent NAP consistency |
| Indexing Health | 35/100 | CRITICAL - 125 pages "crawled not indexed" |

**GSC Metrics (28 days):**
| Metric | Value |
|--------|-------|
| Impressions | 756 |
| Clicks | 17 |
| CTR | 2.2% |
| Avg Position | 27 |
| Indexed Pages | 34 |
| Not Indexed | 378 |

**Indexing Issue Breakdown:**
| Reason | Pages |
|--------|-------|
| Crawled - not indexed | 125 |
| Not found (404) | 51 |
| Page with redirect | 4 |
| Redirect error | 1 |

**Key Findings:**
1. **CRITICAL:** 125 pages "crawled but not indexed" - Google visiting but rejecting
2. **CRITICAL:** Impressions declining from ~1,300/day (Sept) to ~400/day (Dec)
3. **HIGH:** City pages lack internal links from service/county hubs (orphaned)
4. **HIGH:** Missing BreadcrumbList JSON-LD schema
5. **MEDIUM:** Only Fort Lee has city-specific FAQs (other 8 cities too similar)
6. **MEDIUM:** Missing Article schema for blog posts

**Root Cause Analysis:**
- City pages appear as thin/duplicate content to Google
- No internal linking structure to city pages
- Historical thin content penalty still affecting trust

**Priority Actions:**
- [ ] P0: Add internal links from service hubs to city pages
- [ ] P0: Add internal links from county hubs to city pages
- [ ] P1: Add BreadcrumbList JSON-LD schema (360C-154)
- [ ] P1: Add city-specific FAQs to all Bergen cities (360C-156)
- [ ] P2: Add Article schema to blog posts (360C-155)
- [ ] P2: Fix 51 remaining 404s with redirects or removal requests

**Next Audit:** 30 days (due to low score)

---

### December 18, 2025 - Documentation

**Category:** Documentation
**Change:** SEO Scope Initialized
**Rationale:** Create comprehensive SEO documentation to guide all future work
**Files Affected:**
- docs/seo/SEO-SCOPE.md (created)
- docs/seo/SEO-KEYWORDS.md (created)
- docs/seo/SEO-COMPETITORS.md (created)
- docs/seo/SEO-CHECKLIST.md (created)
- docs/seo/SEO-CHANGELOG.md (created)
**Expected Impact:** Standardized SEO process, better tracking, consistent strategy execution
**Actual Impact:** (Review in 4 weeks)

---

### [Previous Phase 0 Work - November 2025]

**Category:** Technical / Schema
**Changes Completed:**
- Added 50+ legacy URL redirects in next.config.mjs
- Reduced sitemap from 1,200+ pages to ~118 quality pages
- Submitted GSC URL removal requests for dead pages
- Added FAQ schema to /faq page
- Added LocalBusiness schema framework
- Fixed NAP consistency (201) 299-4243 everywhere
- Requested manual indexing for Bergen County URLs

**Rationale:** Site recovery from historical indexing issues (600+ old URLs causing noise)
**Files Affected:**
- next.config.mjs
- next-sitemap.config.mjs
- src/app/faq/layout.tsx
- src/lib/seo/local-business-schema.ts
- src/utils/constants.ts
**Expected Impact:** Clean slate for Google, priority pages indexed
**Actual Impact:** Baseline established, monitoring ongoing

---

## Entry Template

Copy this template for new entries:

```markdown
### [Date]

**Category:** [Technical / On-Page / Content / Local / Off-Page / Schema]
**Change:** [What was modified]
**Rationale:** [Why]
**Files Affected:**
- [file1.tsx]
- [file2.ts]
**Expected Impact:** [Prediction]
**Actual Impact:** (Fill in after 2-4 weeks)
```

---

## Milestones

| Date | Milestone | Metrics Before | Metrics After |
|------|-----------|----------------|---------------|
| Nov 30, 2025 | Phase 0 Complete (Foundation) | 643 not indexed, 114 404s | ~118 pages in sitemap |
| Dec 18, 2025 | SEO Scope Initialized | N/A | Documentation baseline |
| - | Phase 1: First city page indexed | - | - |
| - | Phase 1: 5 city pages indexed | - | - |
| - | "companionship care paramus nj" top 10 | Position 18 | - |
| - | First organic lead from city page | 0 leads | - |
| - | 50+ organic clicks/week | ~0 | - |

---

## Keyword Position History

Track major keyword movements here:

| Keyword | Dec 1 | Dec 8 | Dec 15 | Dec 22 | Dec 29 | Jan 5 | Jan 12 |
|---------|-------|-------|--------|--------|--------|-------|--------|
| companionship care paramus nj | 18 | - | - | - | - | - | - |
| senior care hackensack nj | 28 | - | - | - | - | - | - |
| companion care fort lee nj | 80+ | - | - | - | - | - | - |
| home care ridgewood nj | 80+ | - | - | - | - | - | - |
| elder care bergen county | 80+ | - | - | - | - | - | - |

---

## Indexation Progress

| Date | Total Indexed | Not Indexed | Bergen City Pages | Notes |
|------|---------------|-------------|-------------------|-------|
| Dec 1, 2025 | ~3 | 643 | ~3 | Baseline |
| Dec 18, 2025 | 34 | 378 | TBD | First audit - 125 "crawled not indexed" |
| - | - | - | - | - |

---

## Notes

- **Update weekly:** Every Monday, record any SEO changes made that week
- **Be specific:** Include file paths and exact changes
- **Track impact:** Return to entries after 2-4 weeks to record actual results
- **Link to PRs:** If changes are deployed via PR, include the PR link

---

**Last Updated:** 2025-12-18
**Maintained By:** Development team
