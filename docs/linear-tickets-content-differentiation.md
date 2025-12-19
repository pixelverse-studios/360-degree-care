# Linear Tickets: Bergen County Content Differentiation

**Goal:** Fix content duplication causing Google to not index city pages.
**Current Problem:** ~60-65% of city page content is template/duplicate
**Target:** Increase unique content to 70%+ per page

---

## Overview

### Ticket Summary
| Type | Count | Priority |
|------|-------|----------|
| Foundation (required first) | 2 | P0 |
| City tickets | 9 | P1 |
| **Total** | **11** | |

### Deployment Strategy
Deploy in this order:
1. Foundation tickets (both together)
2. Fort Lee (test city - verify indexing works)
3. Remaining cities in batches of 2-3

### URLs Per City (6 pages affected per city)
Each city ticket affects these URLs:
- `/services/personal-care/bergen-county/[city]`
- `/services/companion-care/bergen-county/[city]`
- `/services/elder-care/bergen-county/[city]`
- `/services/nursing/bergen-county/[city]`
- `/services/home-health-aides/bergen-county/[city]`
- `/services/staffing/bergen-county/[city]`

**Exception:** Personal care doesn't have pages for Paramus, Englewood, Westwood (redirected)

---

## FOUNDATION TICKETS

### TICKET F1: Add LocalResources component and type

**Priority:** P0 (blocker for all city tickets)
**Estimate:** S (2-4 hours)
**Labels:** `foundation`, `component`, `seo`

#### Description
Add new "Local Resources" section to city service pages. This creates truly unique content Google hasn't seen elsewhere.

#### Acceptance Criteria
- [ ] Add `LocalResource` interface to `src/lib/content/city-service-types.ts`
- [ ] Add optional `localResources` property to `CityServicePageContent`
- [ ] Create `src/components/city/LocalResourcesSection.tsx` component
- [ ] Update `src/components/city/CityServicePage.tsx` to render LocalResources between Benefits and FAQs
- [ ] Component renders as 3-column card grid (responsive)
- [ ] Each card shows: name, type (hospital/senior center/pharmacy), address, and optional phone

#### Technical Notes
```typescript
// Add to city-service-types.ts
interface LocalResource {
  name: string
  type: 'hospital' | 'senior-center' | 'pharmacy' | 'community-center'
  address: string
  phone?: string
}

// Add to CityServicePageContent
localResources?: {
  header: string
  items: LocalResource[]
}
```

#### Files to modify
- `src/lib/content/city-service-types.ts`
- `src/components/city/CityServicePage.tsx`
- Create: `src/components/city/LocalResourcesSection.tsx`

---

### TICKET F2: Enable city-specific FAQs

**Priority:** P0 (blocker for all city tickets)
**Estimate:** S (1-2 hours)
**Labels:** `foundation`, `faqs`, `seo`

#### Description
Modify FAQ system to allow city-specific FAQs while keeping service defaults. Currently all cities in a service share identical FAQs.

#### Acceptance Criteria
- [ ] Add optional `cityFaqs` property to CityServicePageContent
- [ ] Update buildCityContent() helper in bergen-county/helpers.ts to merge city FAQs with service FAQs
- [ ] City FAQs appear BEFORE service FAQs in the list
- [ ] FAQ schema includes city FAQs in JSON-LD
- [ ] Existing pages continue working with service-only FAQs

#### Technical Notes
```typescript
// In city-service-types.ts
faqs: {
  header: string
  items: FAQ[]       // Service-level FAQs (existing)
  cityItems?: FAQ[]  // City-specific FAQs (NEW)
}

// In helpers.ts buildSchema(), merge both arrays for schema
const allFaqs = [...(content.faqs.cityItems || []), ...content.faqs.items]
```

#### Files to modify
- `src/lib/content/city-service-types.ts`
- `src/lib/content/cities/bergen-county/helpers.ts`

---

## CITY TICKETS

### TICKET C1: Fort Lee content differentiation

**Priority:** P1 (test city - deploy first)
**Estimate:** M (4-6 hours)
**Labels:** `content`, `fort-lee`, `seo`
**Depends on:** F1, F2

#### Description
Add city-specific FAQs and Local Resources to all Fort Lee service pages. Fort Lee is the test city - verify Google indexes before proceeding with others.

#### City Context
- High-rise residential area with views of GW Bridge
- Heavy commuter population (NYC proximity)
- Key landmarks: Fort Lee Historic Park, Palisades Park, Main Street

#### Acceptance Criteria
- [ ] Add 2-3 city-specific FAQs per service (see FAQ suggestions below)
- [ ] Add Local Resources section with 4-6 local facilities
- [ ] Update all 6 service content files for fort-lee
- [ ] Verify schema includes new FAQs
- [ ] Test pages render correctly locally

#### City-Specific FAQs to Add

**Personal Care:**
- "Do your aides help with high-rise building logistics in Fort Lee?" → Yes, our caregivers are experienced with elevator schedules, doorman protocols, and parking garage access common in Fort Lee's high-rise buildings.
- "Can you coordinate care with Holy Name Medical Center?" → Absolutely. We regularly coordinate with Holy Name and other Fort Lee-area hospitals for discharge planning and follow-up care.

**Companion Care:**
- "Can companions take clients to the Fort Lee Community Center?" → Yes, our companions regularly escort residents to the Fort Lee Community Center for activities, classes, and social events.
- "Do you offer companions who speak Korean or Spanish?" → Yes, Fort Lee's diverse community means we maintain multilingual caregivers including Korean and Spanish speakers.

**Elder Care:**
- "How do you handle parking for visits in Fort Lee?" → Our caregivers plan ahead for Fort Lee's parking challenges, using building guest parking, nearby lots, or street parking based on your building's policies.

**Nursing:**
- "Can nurses coordinate with Hackensack Meridian physicians?" → Yes, our nurses frequently coordinate with Hackensack Meridian Health network physicians and specialists for Fort Lee clients.

**Home Health Aides:**
- "Do aides help with grocery runs to Fort Lee stores?" → Yes, our aides assist with errands to local stores including Trader Joe's, H Mart, and Main Street shops.

**Staffing:**
- "Do you staff facilities in the Fort Lee area?" → Yes, we provide qualified healthcare staff to facilities throughout Fort Lee and neighboring Bergen County communities.

#### Local Resources to Add
```typescript
localResources: {
  header: 'Fort Lee Healthcare Resources',
  items: [
    { name: 'Holy Name Medical Center', type: 'hospital', address: '718 Teaneck Rd, Teaneck, NJ 07666', phone: '(201) 833-3000' },
    { name: 'Fort Lee Health Department', type: 'community-center', address: '309 Main St, Fort Lee, NJ 07024', phone: '(201) 592-3500' },
    { name: 'Fort Lee Senior Center', type: 'senior-center', address: '1355 Inwood Terrace, Fort Lee, NJ 07024', phone: '(201) 592-3670' },
    { name: 'CVS Pharmacy', type: 'pharmacy', address: '2165 Lemoine Ave, Fort Lee, NJ 07024', phone: '(201) 944-6060' },
    { name: 'Rite Aid', type: 'pharmacy', address: '1600 Lemoine Ave, Fort Lee, NJ 07024', phone: '(201) 592-8700' }
  ]
}
```

#### Files to modify
- `src/lib/content/cities/bergen-county/personal-care.ts` (fort-lee entry)
- `src/lib/content/cities/bergen-county/companion-care.ts` (fort-lee entry)
- `src/lib/content/cities/bergen-county/elder-care.ts` (fort-lee entry)
- `src/lib/content/cities/bergen-county/nursing.ts` (fort-lee entry)
- `src/lib/content/cities/bergen-county/home-health-aides.ts` (fort-lee entry)
- `src/lib/content/cities/bergen-county/staffing.ts` (fort-lee entry)

#### URLs affected
- https://www.360degreecare.net/services/personal-care/bergen-county/fort-lee
- https://www.360degreecare.net/services/companion-care/bergen-county/fort-lee
- https://www.360degreecare.net/services/elder-care/bergen-county/fort-lee
- https://www.360degreecare.net/services/nursing/bergen-county/fort-lee
- https://www.360degreecare.net/services/home-health-aides/bergen-county/fort-lee
- https://www.360degreecare.net/services/staffing/bergen-county/fort-lee

#### Post-deploy
- Request indexing for all 6 URLs in GSC
- Monitor for 1-2 weeks before proceeding to next city

---

### TICKET C2: Ridgewood content differentiation

**Priority:** P1
**Estimate:** M (4-6 hours)
**Labels:** `content`, `ridgewood`, `seo`
**Depends on:** F1, F2

#### Description
Add city-specific FAQs and Local Resources to all Ridgewood service pages.

#### City Context
- Affluent suburban community with historic downtown
- Strong community involvement (YMCA, library, churches)
- Key landmarks: Van Neste Square, Ridgewood Duck Pond, downtown shops
- Valley Hospital nearby

#### Acceptance Criteria
- [ ] Add 2-3 city-specific FAQs per service
- [ ] Add Local Resources section with 4-6 local facilities
- [ ] Update all 6 service content files for ridgewood
- [ ] Verify schema includes new FAQs

#### City-Specific FAQs to Add

**Personal Care:**
- "Do caregivers help with Valley Hospital appointments?" → Yes, our Ridgewood caregivers frequently escort clients to Valley Hospital and assist with pre/post appointment care.
- "Can you coordinate care around Ridgewood community events?" → Absolutely. We schedule around YMCA activities, Bookends events, and downtown Ridgewood gatherings.

**Companion Care:**
- "Can companions accompany clients to Ridgewood library programs?" → Yes, our companions love taking residents to the Ridgewood Public Library for lectures, book clubs, and community programs.
- "Do you have companions familiar with Ridgewood churches?" → Many of our companions are familiar with Ridgewood's faith communities and can accompany clients to services.

**Elder Care:**
- "How do you handle Ridgewood's parking for home visits?" → Our caregivers know Ridgewood's residential streets well and plan parking ahead of visits, respecting permit zones and timing.

**Nursing:**
- "Can nurses coordinate with Valley Hospital discharge planning?" → Yes, we work closely with Valley Hospital case managers to ensure smooth transitions from hospital to home care.

**Home Health Aides:**
- "Do aides help with errands to downtown Ridgewood shops?" → Yes, our aides assist with trips to downtown Ridgewood shops, the farmers market, and local pharmacies.

**Staffing:**
- "Do you provide staff to medical offices in Ridgewood?" → Yes, we staff medical practices, therapy offices, and healthcare facilities throughout Ridgewood.

#### Local Resources to Add
```typescript
localResources: {
  header: 'Ridgewood Healthcare Resources',
  items: [
    { name: 'Valley Hospital', type: 'hospital', address: '223 N Van Dien Ave, Ridgewood, NJ 07450', phone: '(201) 447-8000' },
    { name: 'Ridgewood Senior Services', type: 'senior-center', address: '131 N Maple Ave, Ridgewood, NJ 07450', phone: '(201) 670-5500' },
    { name: 'Ridgewood YMCA', type: 'community-center', address: '112 Oak St, Ridgewood, NJ 07450', phone: '(201) 444-5600' },
    { name: 'CVS Pharmacy', type: 'pharmacy', address: '24 E Ridgewood Ave, Ridgewood, NJ 07450', phone: '(201) 652-0085' },
    { name: 'Ridgewood Pharmacy', type: 'pharmacy', address: '20 Chestnut St, Ridgewood, NJ 07450', phone: '(201) 652-6060' }
  ]
}
```

#### Files to modify
- `src/lib/content/cities/bergen-county/personal-care.ts` (ridgewood entry)
- `src/lib/content/cities/bergen-county/companion-care.ts` (ridgewood entry)
- `src/lib/content/cities/bergen-county/elder-care.ts` (ridgewood entry)
- `src/lib/content/cities/bergen-county/nursing.ts` (ridgewood entry)
- `src/lib/content/cities/bergen-county/home-health-aides.ts` (ridgewood entry)
- `src/lib/content/cities/bergen-county/staffing.ts` (ridgewood entry)

#### URLs affected
- https://www.360degreecare.net/services/personal-care/bergen-county/ridgewood
- https://www.360degreecare.net/services/companion-care/bergen-county/ridgewood
- https://www.360degreecare.net/services/elder-care/bergen-county/ridgewood
- https://www.360degreecare.net/services/nursing/bergen-county/ridgewood
- https://www.360degreecare.net/services/home-health-aides/bergen-county/ridgewood
- https://www.360degreecare.net/services/staffing/bergen-county/ridgewood

---

### TICKET C3: Hackensack content differentiation

**Priority:** P1
**Estimate:** M (4-6 hours)
**Labels:** `content`, `hackensack`, `seo`
**Depends on:** F1, F2

#### Description
Add city-specific FAQs and Local Resources to all Hackensack service pages.

#### City Context
- Bergen County seat with major medical center (HUMC)
- Urban/downtown area with diverse population
- Key landmarks: Hackensack University Medical Center, Johnson Library, Main Street, Foschini Park
- Major bus transit hub

#### Acceptance Criteria
- [ ] Add 2-3 city-specific FAQs per service
- [ ] Add Local Resources section with 4-6 local facilities
- [ ] Update all 6 service content files for hackensack

#### City-Specific FAQs to Add

**Personal Care:**
- "Do you coordinate with Hackensack University Medical Center?" → Yes, we have extensive experience coordinating with HUMC for discharge planning, follow-up care, and specialist appointments.
- "Can caregivers help navigate Hackensack's bus routes?" → Our Hackensack caregivers are familiar with NJ Transit routes and can assist with public transit if preferred.

**Companion Care:**
- "Can companions take clients to Hackensack's Main Street restaurants?" → Yes, our companions enjoy accompanying residents to Main Street dining, cafes, and local shops.
- "Do you have companions who speak Spanish?" → Yes, given Hackensack's diverse community, we have Spanish-speaking companions available.

**Elder Care:**
- "How do you handle parking near HUMC?" → Our caregivers know HUMC parking options well and plan visits to avoid hospital traffic and parking challenges.

**Nursing:**
- "Can nurses coordinate with HUMC specialists?" → Yes, our nurses regularly coordinate with Hackensack Meridian Health specialists for complex care management.

**Home Health Aides:**
- "Do aides help with errands in downtown Hackensack?" → Yes, our aides assist with trips to Riverside Square, local pharmacies, and downtown businesses.

**Staffing:**
- "Do you provide staffing for Hackensack medical facilities?" → Yes, we're a trusted staffing partner for healthcare facilities throughout Hackensack and Bergen County.

#### Local Resources to Add
```typescript
localResources: {
  header: 'Hackensack Healthcare Resources',
  items: [
    { name: 'Hackensack University Medical Center', type: 'hospital', address: '30 Prospect Ave, Hackensack, NJ 07601', phone: '(551) 996-2000' },
    { name: 'Hackensack Senior Center', type: 'senior-center', address: '320 Main St, Hackensack, NJ 07601', phone: '(201) 646-3850' },
    { name: 'Johnson Public Library', type: 'community-center', address: '274 Main St, Hackensack, NJ 07601', phone: '(201) 343-4169' },
    { name: 'Walgreens', type: 'pharmacy', address: '450 River St, Hackensack, NJ 07601', phone: '(201) 488-5105' },
    { name: 'CVS Pharmacy', type: 'pharmacy', address: '395 Main St, Hackensack, NJ 07601', phone: '(201) 488-2222' }
  ]
}
```

#### Files to modify
- `src/lib/content/cities/bergen-county/personal-care.ts` (hackensack entry)
- `src/lib/content/cities/bergen-county/companion-care.ts` (hackensack entry)
- `src/lib/content/cities/bergen-county/elder-care.ts` (hackensack entry)
- `src/lib/content/cities/bergen-county/nursing.ts` (hackensack entry)
- `src/lib/content/cities/bergen-county/home-health-aides.ts` (hackensack entry)
- `src/lib/content/cities/bergen-county/staffing.ts` (hackensack entry)

#### URLs affected
- https://www.360degreecare.net/services/personal-care/bergen-county/hackensack
- https://www.360degreecare.net/services/companion-care/bergen-county/hackensack
- https://www.360degreecare.net/services/elder-care/bergen-county/hackensack
- https://www.360degreecare.net/services/nursing/bergen-county/hackensack
- https://www.360degreecare.net/services/home-health-aides/bergen-county/hackensack
- https://www.360degreecare.net/services/staffing/bergen-county/hackensack

---

### TICKET C4: Teaneck content differentiation

**Priority:** P1
**Estimate:** M (4-6 hours)
**Labels:** `content`, `teaneck`, `seo`
**Depends on:** F1, F2

#### Description
Add city-specific FAQs and Local Resources to all Teaneck service pages.

#### City Context
- Diverse community with significant Orthodox Jewish population
- Near Holy Name Medical Center
- Key landmarks: Cedar Lane shopping, Votee Park, various synagogues and churches
- Strong cultural/religious awareness needed

#### Acceptance Criteria
- [ ] Add 2-3 city-specific FAQs per service (culturally sensitive)
- [ ] Add Local Resources section with 4-6 local facilities
- [ ] Update all 6 service content files for teaneck

#### City-Specific FAQs to Add

**Personal Care:**
- "Do your caregivers respect Sabbath observance?" → Yes, we carefully schedule caregivers around Shabbat and Jewish holidays for observant families in Teaneck.
- "Can you coordinate care with Holy Name Medical Center?" → Absolutely. We regularly coordinate with Holy Name for discharge planning and specialist follow-ups.

**Companion Care:**
- "Are your companions culturally aware of Teaneck's diverse community?" → Yes, our Teaneck companions are trained to respect religious observances, dietary requirements, and cultural traditions.
- "Can companions accompany clients to Cedar Lane shops?" → Yes, our companions regularly escort residents to Cedar Lane businesses, cafes, and community gatherings.

**Elder Care:**
- "Do you understand kosher meal requirements?" → Yes, our care plans can accommodate kosher dietary needs and we coordinate with kosher meal delivery services.

**Nursing:**
- "Can nurses work around Shabbat schedules?" → Yes, we schedule nursing visits to accommodate Sabbath observance and can arrange coverage accordingly.

**Home Health Aides:**
- "Do aides help with shopping at kosher grocery stores?" → Yes, our Teaneck aides are familiar with local kosher markets and can assist with grocery shopping.

**Staffing:**
- "Do you staff healthcare facilities in Teaneck?" → Yes, we provide qualified staff to medical offices, therapy practices, and healthcare facilities throughout Teaneck.

#### Local Resources to Add
```typescript
localResources: {
  header: 'Teaneck Healthcare Resources',
  items: [
    { name: 'Holy Name Medical Center', type: 'hospital', address: '718 Teaneck Rd, Teaneck, NJ 07666', phone: '(201) 833-3000' },
    { name: 'Teaneck Senior Citizens Center', type: 'senior-center', address: '1275 Windsor Rd, Teaneck, NJ 07666', phone: '(201) 837-4847' },
    { name: 'Teaneck Public Library', type: 'community-center', address: '840 Teaneck Rd, Teaneck, NJ 07666', phone: '(201) 837-4171' },
    { name: 'CVS Pharmacy', type: 'pharmacy', address: '481 Cedar Ln, Teaneck, NJ 07666', phone: '(201) 836-8801' },
    { name: 'Rite Aid', type: 'pharmacy', address: '1429 Teaneck Rd, Teaneck, NJ 07666', phone: '(201) 837-8866' }
  ]
}
```

#### Files to modify
- `src/lib/content/cities/bergen-county/personal-care.ts` (teaneck entry)
- `src/lib/content/cities/bergen-county/companion-care.ts` (teaneck entry)
- `src/lib/content/cities/bergen-county/elder-care.ts` (teaneck entry)
- `src/lib/content/cities/bergen-county/nursing.ts` (teaneck entry)
- `src/lib/content/cities/bergen-county/home-health-aides.ts` (teaneck entry)
- `src/lib/content/cities/bergen-county/staffing.ts` (teaneck entry)

#### URLs affected
- https://www.360degreecare.net/services/personal-care/bergen-county/teaneck
- https://www.360degreecare.net/services/companion-care/bergen-county/teaneck
- https://www.360degreecare.net/services/elder-care/bergen-county/teaneck
- https://www.360degreecare.net/services/nursing/bergen-county/teaneck
- https://www.360degreecare.net/services/home-health-aides/bergen-county/teaneck
- https://www.360degreecare.net/services/staffing/bergen-county/teaneck

---

### TICKET C5: Fair Lawn content differentiation

**Priority:** P1
**Estimate:** M (4-6 hours)
**Labels:** `content`, `fair-lawn`, `seo`
**Depends on:** F1, F2

#### Description
Add city-specific FAQs and Local Resources to all Fair Lawn service pages.

#### City Context
- Historic Radburn planned community
- Mix of residential areas with good transit access
- Key landmarks: Memorial Park, Fair Lawn Community Center, Broadway shopping, Radburn
- NJ Transit rail access

#### Acceptance Criteria
- [ ] Add 2-3 city-specific FAQs per service
- [ ] Add Local Resources section with 4-6 local facilities
- [ ] Update all 6 service content files for fair-lawn

#### City-Specific FAQs to Add

**Personal Care:**
- "Do caregivers help with NJ Transit trips from Fair Lawn?" → Yes, our Fair Lawn caregivers can escort clients to the train station and assist with transit trips when needed.
- "Can you coordinate care in the Radburn community?" → Absolutely. We're familiar with Radburn's unique layout and community structure.

**Companion Care:**
- "Can companions take clients to Fair Lawn Community Center events?" → Yes, our companions regularly accompany residents to Community Center programs, classes, and social events.
- "Do you offer companions for Memorial Park walks?" → Yes, our companions enjoy outdoor activities and can accompany clients for walks in Memorial Park.

**Elder Care:**
- "How do you navigate Fair Lawn's different neighborhoods?" → Our caregivers know Fair Lawn well, from Radburn to Broadway to residential areas near Route 4.

**Nursing:**
- "Can nurses coordinate with Fair Lawn medical offices?" → Yes, we coordinate with local physicians, Valley Health facilities, and specialists for comprehensive care management.

**Home Health Aides:**
- "Do aides help with shopping at Fair Lawn stores?" → Yes, our aides assist with errands to Trader Joe's, local groceries, and Broadway shops.

**Staffing:**
- "Do you provide staff to Fair Lawn healthcare facilities?" → Yes, we staff medical offices, therapy practices, and healthcare facilities throughout Fair Lawn.

#### Local Resources to Add
```typescript
localResources: {
  header: 'Fair Lawn Healthcare Resources',
  items: [
    { name: 'Valley Hospital', type: 'hospital', address: '223 N Van Dien Ave, Ridgewood, NJ 07450', phone: '(201) 447-8000' },
    { name: 'Fair Lawn Senior Center', type: 'senior-center', address: '10-10 20th St, Fair Lawn, NJ 07410', phone: '(201) 796-1400' },
    { name: 'Fair Lawn Community Center', type: 'community-center', address: '10-10 20th St, Fair Lawn, NJ 07410', phone: '(201) 796-1500' },
    { name: 'CVS Pharmacy', type: 'pharmacy', address: '17-19 Broadway, Fair Lawn, NJ 07410', phone: '(201) 796-3399' },
    { name: 'Walgreens', type: 'pharmacy', address: '14-40 River Rd, Fair Lawn, NJ 07410', phone: '(201) 797-8899' }
  ]
}
```

#### Files to modify
- `src/lib/content/cities/bergen-county/personal-care.ts` (fair-lawn entry)
- `src/lib/content/cities/bergen-county/companion-care.ts` (fair-lawn entry)
- `src/lib/content/cities/bergen-county/elder-care.ts` (fair-lawn entry)
- `src/lib/content/cities/bergen-county/nursing.ts` (fair-lawn entry)
- `src/lib/content/cities/bergen-county/home-health-aides.ts` (fair-lawn entry)
- `src/lib/content/cities/bergen-county/staffing.ts` (fair-lawn entry)

#### URLs affected
- https://www.360degreecare.net/services/personal-care/bergen-county/fair-lawn
- https://www.360degreecare.net/services/companion-care/bergen-county/fair-lawn
- https://www.360degreecare.net/services/elder-care/bergen-county/fair-lawn
- https://www.360degreecare.net/services/nursing/bergen-county/fair-lawn
- https://www.360degreecare.net/services/home-health-aides/bergen-county/fair-lawn
- https://www.360degreecare.net/services/staffing/bergen-county/fair-lawn

---

### TICKET C6: River Vale content differentiation

**Priority:** P1
**Estimate:** M (4-6 hours)
**Labels:** `content`, `river-vale`, `seo`
**Depends on:** F1, F2

#### Description
Add city-specific FAQs and Local Resources to all River Vale service pages.

#### City Context
- Small, affluent suburban township
- Near Pascack Valley area
- Key landmarks: River Vale Country Club, Holdrum School, River Vale Road
- Quiet residential character

#### Acceptance Criteria
- [ ] Add 2-3 city-specific FAQs per service
- [ ] Add Local Resources section with 4-6 local facilities
- [ ] Update all 6 service content files for river-vale

#### City-Specific FAQs to Add

**Personal Care:**
- "Do you serve the River Vale Country Club area?" → Yes, we provide personal care services throughout River Vale including the Country Club neighborhood and all residential areas.
- "How do you handle River Vale's quiet residential character?" → Our caregivers respect the peaceful atmosphere and work discreetly within the community.

**Companion Care:**
- "Can companions accompany clients to River Vale community events?" → Yes, our companions enjoy taking residents to local gatherings, church events, and community activities.
- "Do you offer companions for golf outings?" → Yes, our companions can accompany clients for recreational activities including golf at local courses.

**Elder Care:**
- "What hospitals do you coordinate with for River Vale residents?" → We primarily coordinate with Valley Hospital, Hackensack UMC, and Holy Name for River Vale families.

**Nursing:**
- "Can nurses provide care in River Vale's residential setting?" → Yes, our nurses provide professional care in River Vale homes while respecting the community's quiet character.

**Home Health Aides:**
- "Do aides help with errands to nearby towns?" → Yes, our River Vale aides assist with trips to Westwood, Hillsdale, and Park Ridge for shopping and appointments.

**Staffing:**
- "Do you staff healthcare facilities near River Vale?" → Yes, we provide staffing to medical practices and healthcare facilities in River Vale and the Pascack Valley area.

#### Local Resources to Add
```typescript
localResources: {
  header: 'River Vale Healthcare Resources',
  items: [
    { name: 'Valley Hospital', type: 'hospital', address: '223 N Van Dien Ave, Ridgewood, NJ 07450', phone: '(201) 447-8000' },
    { name: 'Pascack Valley Senior Center', type: 'senior-center', address: '110 Piermont Ave, Hillsdale, NJ 07642', phone: '(201) 358-0050' },
    { name: 'River Vale Municipal Building', type: 'community-center', address: '406 Rivervale Rd, River Vale, NJ 07675', phone: '(201) 664-2346' },
    { name: 'CVS Pharmacy Westwood', type: 'pharmacy', address: '460 Broadway, Westwood, NJ 07675', phone: '(201) 666-6700' },
    { name: 'Rite Aid Hillsdale', type: 'pharmacy', address: '55 Broadway, Hillsdale, NJ 07642', phone: '(201) 666-5511' }
  ]
}
```

#### Files to modify
- `src/lib/content/cities/bergen-county/personal-care.ts` (river-vale entry)
- `src/lib/content/cities/bergen-county/companion-care.ts` (river-vale entry)
- `src/lib/content/cities/bergen-county/elder-care.ts` (river-vale entry)
- `src/lib/content/cities/bergen-county/nursing.ts` (river-vale entry)
- `src/lib/content/cities/bergen-county/home-health-aides.ts` (river-vale entry)
- `src/lib/content/cities/bergen-county/staffing.ts` (river-vale entry)

#### URLs affected
- https://www.360degreecare.net/services/personal-care/bergen-county/river-vale
- https://www.360degreecare.net/services/companion-care/bergen-county/river-vale
- https://www.360degreecare.net/services/elder-care/bergen-county/river-vale
- https://www.360degreecare.net/services/nursing/bergen-county/river-vale
- https://www.360degreecare.net/services/home-health-aides/bergen-county/river-vale
- https://www.360degreecare.net/services/staffing/bergen-county/river-vale

---

### TICKET C7: Paramus content differentiation

**Priority:** P1
**Estimate:** M (4-6 hours)
**Labels:** `content`, `paramus`, `seo`
**Depends on:** F1, F2

#### Description
Add city-specific FAQs and Local Resources to Paramus service pages.

**Note:** Personal care page is redirected for Paramus - only 5 service pages affected.

#### City Context
- Major retail hub (Route 17, Route 4 malls)
- Suburban residential with good parks
- Key landmarks: Van Saun Park, Paramus Park Mall, Garden State Plaza, Bergen County Zoo
- High traffic area with blue laws (closed Sundays for retail)

#### Acceptance Criteria
- [ ] Add 2-3 city-specific FAQs per service
- [ ] Add Local Resources section with 4-6 local facilities
- [ ] Update 5 service content files for paramus (NOT personal-care)

#### City-Specific FAQs to Add

**Companion Care:**
- "Can companions take clients to Van Saun Park and the zoo?" → Yes, our companions enjoy accompanying residents to Van Saun Park, the Bergen County Zoo, and other Paramus recreational areas.
- "Do you navigate Paramus's busy retail traffic?" → Yes, our companions plan outings around Paramus traffic patterns and know the best times to visit stores and run errands.

**Elder Care:**
- "How do you handle Paramus's Sunday blue laws for care planning?" → We plan weekend activities around Paramus's blue laws, knowing which services are available on Sundays.

**Nursing:**
- "Can nurses coordinate with Paramus medical offices?" → Yes, we coordinate with local physicians and nearby hospitals including Valley Hospital and Hackensack UMC.

**Home Health Aides:**
- "Do aides help with shopping at Paramus stores?" → Yes, our aides assist with errands to Paramus retail areas, farmer's markets, and local grocery stores.

**Staffing:**
- "Do you staff medical facilities in Paramus?" → Yes, we provide qualified healthcare staff to medical offices and facilities throughout Paramus.

#### Local Resources to Add
```typescript
localResources: {
  header: 'Paramus Healthcare Resources',
  items: [
    { name: 'Valley Hospital', type: 'hospital', address: '223 N Van Dien Ave, Ridgewood, NJ 07450', phone: '(201) 447-8000' },
    { name: 'Paramus Senior Center', type: 'senior-center', address: '475 Farview Ave, Paramus, NJ 07652', phone: '(201) 265-5005' },
    { name: 'Van Saun County Park', type: 'community-center', address: '216 Forest Ave, Paramus, NJ 07652', phone: '(201) 262-2627' },
    { name: 'CVS Pharmacy', type: 'pharmacy', address: '425 NJ-17, Paramus, NJ 07652', phone: '(201) 262-0505' },
    { name: 'Walgreens', type: 'pharmacy', address: '575 NJ-17, Paramus, NJ 07652', phone: '(201) 265-0600' }
  ]
}
```

#### Files to modify
- `src/lib/content/cities/bergen-county/companion-care.ts` (paramus entry)
- `src/lib/content/cities/bergen-county/elder-care.ts` (paramus entry)
- `src/lib/content/cities/bergen-county/nursing.ts` (paramus entry)
- `src/lib/content/cities/bergen-county/home-health-aides.ts` (paramus entry)
- `src/lib/content/cities/bergen-county/staffing.ts` (paramus entry)

#### URLs affected
- https://www.360degreecare.net/services/companion-care/bergen-county/paramus
- https://www.360degreecare.net/services/elder-care/bergen-county/paramus
- https://www.360degreecare.net/services/nursing/bergen-county/paramus
- https://www.360degreecare.net/services/home-health-aides/bergen-county/paramus
- https://www.360degreecare.net/services/staffing/bergen-county/paramus

---

### TICKET C8: Englewood content differentiation

**Priority:** P1
**Estimate:** M (4-6 hours)
**Labels:** `content`, `englewood`, `seo`
**Depends on:** F1, F2

#### Description
Add city-specific FAQs and Local Resources to Englewood service pages.

**Note:** Personal care page is redirected for Englewood - only 5 service pages affected.

#### City Context
- Diverse urban community with cultural attractions
- Englewood Hospital and Medical Center
- Key landmarks: bergenPAC, Flat Rock Brook Nature Center, Palisade Avenue
- Mix of residential and commercial areas

#### Acceptance Criteria
- [ ] Add 2-3 city-specific FAQs per service
- [ ] Add Local Resources section with 4-6 local facilities
- [ ] Update 5 service content files for englewood (NOT personal-care)

#### City-Specific FAQs to Add

**Companion Care:**
- "Can companions take clients to bergenPAC shows?" → Yes, our companions love accompanying residents to performances at bergenPAC and other cultural events.
- "Do you offer bilingual companions in Englewood?" → Yes, given Englewood's diverse community, we have companions who speak Spanish and other languages.

**Elder Care:**
- "Do you coordinate with Englewood Hospital?" → Yes, we regularly coordinate with Englewood Hospital for discharge planning and follow-up care.

**Nursing:**
- "Can nurses manage complex care for Englewood residents?" → Yes, our nurses provide skilled care and coordinate with Englewood Hospital specialists.

**Home Health Aides:**
- "Do aides help with Palisade Avenue errands?" → Yes, our aides assist with trips to Palisade Avenue shops, pharmacies, and local businesses.

**Staffing:**
- "Do you staff Englewood healthcare facilities?" → Yes, we provide qualified staff to Englewood Hospital, medical offices, and healthcare facilities.

#### Local Resources to Add
```typescript
localResources: {
  header: 'Englewood Healthcare Resources',
  items: [
    { name: 'Englewood Hospital', type: 'hospital', address: '350 Engle St, Englewood, NJ 07631', phone: '(201) 894-3000' },
    { name: 'Englewood Senior Center', type: 'senior-center', address: '20 N Van Brunt St, Englewood, NJ 07631', phone: '(201) 568-5280' },
    { name: 'Flat Rock Brook Nature Center', type: 'community-center', address: '443 Van Nostrand Ave, Englewood, NJ 07631', phone: '(201) 567-1265' },
    { name: 'CVS Pharmacy', type: 'pharmacy', address: '45 Engle St, Englewood, NJ 07631', phone: '(201) 568-3535' },
    { name: 'Walgreens', type: 'pharmacy', address: '50 N Dean St, Englewood, NJ 07631', phone: '(201) 569-2244' }
  ]
}
```

#### Files to modify
- `src/lib/content/cities/bergen-county/companion-care.ts` (englewood entry)
- `src/lib/content/cities/bergen-county/elder-care.ts` (englewood entry)
- `src/lib/content/cities/bergen-county/nursing.ts` (englewood entry)
- `src/lib/content/cities/bergen-county/home-health-aides.ts` (englewood entry)
- `src/lib/content/cities/bergen-county/staffing.ts` (englewood entry)

#### URLs affected
- https://www.360degreecare.net/services/companion-care/bergen-county/englewood
- https://www.360degreecare.net/services/elder-care/bergen-county/englewood
- https://www.360degreecare.net/services/nursing/bergen-county/englewood
- https://www.360degreecare.net/services/home-health-aides/bergen-county/englewood
- https://www.360degreecare.net/services/staffing/bergen-county/englewood

---

### TICKET C9: Westwood content differentiation

**Priority:** P1
**Estimate:** M (4-6 hours)
**Labels:** `content`, `westwood`, `seo`
**Depends on:** F1, F2

#### Description
Add city-specific FAQs and Local Resources to Westwood service pages.

**Note:** Personal care page is redirected for Westwood - only 5 service pages affected.

#### City Context
- Small borough with charming downtown
- Near Pascack Valley area with good transit
- Key landmarks: Westwood downtown, Veterans Park, NJ Transit station
- Walkable shopping district on Westwood Avenue

#### Acceptance Criteria
- [ ] Add 2-3 city-specific FAQs per service
- [ ] Add Local Resources section with 4-6 local facilities
- [ ] Update 5 service content files for westwood (NOT personal-care)

#### City-Specific FAQs to Add

**Companion Care:**
- "Can companions accompany clients to downtown Westwood shops?" → Yes, our companions enjoy taking residents to Westwood's charming downtown for shopping, coffee, and local events.
- "Do you help with NJ Transit trips from Westwood?" → Yes, our companions can escort clients to the Westwood train station for trips into the city.

**Elder Care:**
- "What hospitals do you coordinate with for Westwood residents?" → We coordinate with Valley Hospital, Hackensack UMC, and Pascack Valley area facilities.

**Nursing:**
- "Can nurses provide care in Westwood's residential neighborhoods?" → Yes, our nurses serve Westwood homes and coordinate with local physicians.

**Home Health Aides:**
- "Do aides help with shopping on Westwood Avenue?" → Yes, our aides assist with trips to downtown Westwood shops, the library, and local pharmacies.

**Staffing:**
- "Do you provide staffing to Pascack Valley healthcare facilities?" → Yes, we staff medical offices and healthcare facilities throughout Westwood and the Pascack Valley area.

#### Local Resources to Add
```typescript
localResources: {
  header: 'Westwood Healthcare Resources',
  items: [
    { name: 'Valley Hospital', type: 'hospital', address: '223 N Van Dien Ave, Ridgewood, NJ 07450', phone: '(201) 447-8000' },
    { name: 'Pascack Valley Senior Center', type: 'senior-center', address: '110 Piermont Ave, Hillsdale, NJ 07642', phone: '(201) 358-0050' },
    { name: 'Westwood Public Library', type: 'community-center', address: '49 Park Ave, Westwood, NJ 07675', phone: '(201) 664-0583' },
    { name: 'CVS Pharmacy', type: 'pharmacy', address: '460 Broadway, Westwood, NJ 07675', phone: '(201) 666-6700' },
    { name: 'Westwood Pharmacy', type: 'pharmacy', address: '110 Westwood Ave, Westwood, NJ 07675', phone: '(201) 664-1717' }
  ]
}
```

#### Files to modify
- `src/lib/content/cities/bergen-county/companion-care.ts` (westwood entry)
- `src/lib/content/cities/bergen-county/elder-care.ts` (westwood entry)
- `src/lib/content/cities/bergen-county/nursing.ts` (westwood entry)
- `src/lib/content/cities/bergen-county/home-health-aides.ts` (westwood entry)
- `src/lib/content/cities/bergen-county/staffing.ts` (westwood entry)

#### URLs affected
- https://www.360degreecare.net/services/companion-care/bergen-county/westwood
- https://www.360degreecare.net/services/elder-care/bergen-county/westwood
- https://www.360degreecare.net/services/nursing/bergen-county/westwood
- https://www.360degreecare.net/services/home-health-aides/bergen-county/westwood
- https://www.360degreecare.net/services/staffing/bergen-county/westwood

---

## DEPLOYMENT & TRACKING

### GSC URL Tracking

After each city deployment, add these URLs to `docs/deployment_summary.md` for GSC re-indexing:

**Total URLs:** 51 pages across Bergen County
- Fort Lee: 6 URLs
- Ridgewood: 6 URLs
- Hackensack: 6 URLs
- Teaneck: 6 URLs
- Fair Lawn: 6 URLs
- River Vale: 6 URLs
- Paramus: 5 URLs (no personal-care)
- Englewood: 5 URLs (no personal-care)
- Westwood: 5 URLs (no personal-care)

### Rollout Order

1. **Week 1:** Foundation tickets (F1 + F2)
2. **Week 2:** Fort Lee (test city) - deploy and monitor
3. **Week 3:** Ridgewood + Hackensack (if Fort Lee indexes well)
4. **Week 4:** Teaneck + Fair Lawn
5. **Week 5:** River Vale + Paramus
6. **Week 6:** Englewood + Westwood

### Success Criteria

- [ ] Pages appear in GSC "Indexed" status within 2 weeks of deployment
- [ ] No increase in "Crawled - currently not indexed" count
- [ ] Unique content percentage increases to 65%+ per page
- [ ] FAQ schema validates in Google Rich Results Test
