# Pending Linear Tickets - SEO Technical Audit

> Created: 2025-12-18
> Status: Pending creation (Linear API timeout)
> Project: 360 Degree Care Website
> Team: Jeff DeJoseph

---

## Ticket 1: BreadcrumbList Schema (HIGH PRIORITY)

**Title:** Add BreadcrumbList JSON-LD schema to breadcrumbs component

**Labels:** Front End, Ticket, Improvement

**Description:**

### What
Inject BreadcrumbList structured data schema into the Breadcrumbs component.

### Why
Current breadcrumbs render visually but provide no structured data for search engines. Adding schema enables rich breadcrumb snippets in search results, improving CTR.

### Where
`src/components/nav/Breadcrumbs.tsx`

### Acceptance Criteria
- [ ] BreadcrumbList JSON-LD schema injected on all pages with breadcrumbs
- [ ] Schema follows path hierarchy: Home > Services > [Service] > [County] > [City]
- [ ] Schema validates in Google Rich Results Test
- [ ] Dynamic city/county names properly included in schema

### Implementation Notes
- Component already generates breadcrumb data from pathname (lines 55-94)
- Need to add `<script type="application/ld+json">` injection similar to CityServicePage.tsx
- Reference existing schema pattern in `src/lib/seo/local-business-schema.ts`
- Consider creating a `generateBreadcrumbSchema()` helper in `src/lib/seo/`

---

## Ticket 2: Article Schema (HIGH PRIORITY)

**Title:** Add Article JSON-LD schema to blog post pages

**Labels:** Front End, Ticket, Improvement

**Description:**

### What
Add Article (or BlogPosting) structured data schema to individual blog posts.

### Why
Blog pages have excellent metadata (OG, Twitter cards) but no Article schema. Missing rich results opportunity for articles in search.

### Where
- `src/app/blog/[slug]/page.tsx`
- Potentially `src/components/blog/BlogClientPage.tsx`

### Acceptance Criteria
- [ ] Article JSON-LD schema injected on all blog post pages
- [ ] Schema includes: headline, description, image, datePublished, dateModified
- [ ] Author information with `@type: Person`
- [ ] Publisher with Organization reference and logo
- [ ] Schema validates in Google Rich Results Test

### Implementation Notes
- Blog posts already have all needed data in the `BlogPost` type (title, excerpt, publishDate, author, featuredImage)
- Can inject schema in BlogClientPage.tsx or directly in page.tsx
- Follow pattern from `src/components/city/CityServicePage.tsx` for schema injection
- Consider adding `dateModified` field to blog post type if not present
- Reference `BUSINESS_INFO` from `src/lib/seo/local-business-schema.ts` for publisher info

---

## Ticket 3: City-Specific FAQs (MEDIUM PRIORITY)

**Title:** Add city-specific FAQs to all Bergen County service pages

**Labels:** Front End, Ticket, Feature

**Description:**

### What
Add 2-3 unique FAQ items per city for content differentiation across all Bergen County service pages.

### Why
Currently only Fort Lee has city-specific FAQs. Other cities use only generic service FAQs, risking thin/duplicate content signals from Google.

### Where
`src/lib/content/cities/bergen-county/*.ts` (6 service files)

### Acceptance Criteria
- [ ] Each of 9 Bergen cities has 2-3 city-specific FAQ items per service
- [ ] FAQs reference local landmarks, hospitals, senior centers, or community resources
- [ ] FAQs include `schemaAnswer` property for schema generation
- [ ] FAQ schema properly includes city FAQs in @graph output

### Implementation Notes
- Fort Lee pattern already exists in `src/lib/content/cities/bergen-county/companion-care.ts` (lines 40-49)
- Cities needing FAQs: Ridgewood, River Vale, Hackensack, Teaneck, Fair Lawn, Paramus, Englewood, Westwood
- Services: companion-care, personal-care, elder-care, home-health-aides, nursing, staffing
- Reference local resources already defined (hospitals, senior centers) for FAQ content
- Total scope: ~8 cities × 6 services × 2-3 FAQs = 96-144 new FAQ items
- Consider breaking into sub-tasks by service type if too large

---

## Ticket 4: SEO Documentation (LOW PRIORITY)

**Title:** Document SEO scope initialization in /docs/seo/

**Labels:** Front End, Ticket, Maintenance

**Description:**

### What
Track the newly created SEO documentation suite in version control.

### Why
Five SEO strategy documents were created during scope initialization. Need to commit them and update deployment summary for stakeholder notification.

### Where
`docs/seo/` directory (5 new files)

### Files Created
- `docs/seo/SEO-SCOPE.md` - Master SEO strategy document
- `docs/seo/SEO-KEYWORDS.md` - Keyword strategy with 90+ keywords
- `docs/seo/SEO-COMPETITORS.md` - Competitive analysis (9 competitors)
- `docs/seo/SEO-CHECKLIST.md` - Implementation tracker
- `docs/seo/SEO-CHANGELOG.md` - Change log

### Acceptance Criteria
- [ ] All 5 SEO documents committed to repository
- [ ] `docs/deployment_summary.md` updated with summary of SEO documentation
- [ ] Files reviewed for accuracy before commit

### Implementation Notes
- Files already created at `/docs/seo/`
- This is a documentation/chore ticket, no code changes
- Should be quick commit after review
- Complements existing `docs/seo-remediation-plan.md`

---

## How to Create These Tickets

When Linear is available, create tickets with:
- **Team:** Jeff DeJoseph
- **Project:** 360 Degree Care Website
- **Assignee:** me
- **Labels:** As specified per ticket (Front End + Ticket + [Type])

Or run `/make-ticket` again to retry automatic creation.
