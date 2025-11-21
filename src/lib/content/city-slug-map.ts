import { bergenCountyCompanionCareCities } from '@/lib/content/cities/bergen-county/companion-care'
import { bergenCountyPersonalCareCities } from '@/lib/content/cities/bergen-county/personal-care'
import { bergenCountyElderCareCities } from '@/lib/content/cities/bergen-county/elder-care'
import { bergenCountyNursingCities } from '@/lib/content/cities/bergen-county/nursing'
import { bergenCountyHomeHealthAideCities } from '@/lib/content/cities/bergen-county/home-health-aides'
import { bergenCountyStaffingCities } from '@/lib/content/cities/bergen-county/staffing'
import { essexCountyCompanionCareCities } from '@/lib/content/cities/essex-county/companion-care'
import { essexCountyPersonalCareCities } from '@/lib/content/cities/essex-county/personal-care'
import { essexCountyElderCareCities } from '@/lib/content/cities/essex-county/elder-care'
import { essexCountyNursingCities } from '@/lib/content/cities/essex-county/nursing'
import { essexCountyHomeHealthAideCities } from '@/lib/content/cities/essex-county/home-health-aides'
import { essexCountyStaffingCities } from '@/lib/content/cities/essex-county/staffing'
import { monmouthCountyCompanionCareCities } from '@/lib/content/cities/monmouth-county/companion-care'
import { monmouthCountyPersonalCareCities } from '@/lib/content/cities/monmouth-county/personal-care'
import { monmouthCountyElderCareCities } from '@/lib/content/cities/monmouth-county/elder-care'
import { monmouthCountyNursingCities } from '@/lib/content/cities/monmouth-county/nursing'
import { monmouthCountyHomeHealthAideCities } from '@/lib/content/cities/monmouth-county/home-health-aides'
import { monmouthCountyStaffingCities } from '@/lib/content/cities/monmouth-county/staffing'
import { passaicCountyCompanionCareCities } from '@/lib/content/cities/passaic-county/companion-care'
import { passaicCountyPersonalCareCities } from '@/lib/content/cities/passaic-county/personal-care'
import { passaicCountyElderCareCities } from '@/lib/content/cities/passaic-county/elder-care'
import { passaicCountyNursingCities } from '@/lib/content/cities/passaic-county/nursing'
import { passaicCountyHomeHealthAideCities } from '@/lib/content/cities/passaic-county/home-health-aides'
import { passaicCountyStaffingCities } from '@/lib/content/cities/passaic-county/staffing'

const REDIRECTED_CITY_SLUGS: Record<string, Record<string, Set<string>>> = {
    'personal-care': {
        'bergen-county': new Set(['englewood', 'paramus', 'westwood'])
    }
}

const SERVICE_CITY_SLUGS: Record<string, Record<string, string[]>> = {
    'companion-care': {
        'bergen-county': Object.keys(bergenCountyCompanionCareCities),
        'essex-county': Object.keys(essexCountyCompanionCareCities),
        'monmouth-county': Object.keys(monmouthCountyCompanionCareCities),
        'passaic-county': Object.keys(passaicCountyCompanionCareCities)
    },
    'personal-care': {
        'bergen-county': Object.keys(bergenCountyPersonalCareCities),
        'essex-county': Object.keys(essexCountyPersonalCareCities),
        'monmouth-county': Object.keys(monmouthCountyPersonalCareCities),
        'passaic-county': Object.keys(passaicCountyPersonalCareCities)
    },
    'elder-care': {
        'bergen-county': Object.keys(bergenCountyElderCareCities),
        'essex-county': Object.keys(essexCountyElderCareCities),
        'monmouth-county': Object.keys(monmouthCountyElderCareCities),
        'passaic-county': Object.keys(passaicCountyElderCareCities)
    },
    nursing: {
        'bergen-county': Object.keys(bergenCountyNursingCities),
        'essex-county': Object.keys(essexCountyNursingCities),
        'monmouth-county': Object.keys(monmouthCountyNursingCities),
        'passaic-county': Object.keys(passaicCountyNursingCities)
    },
    'home-health-aides': {
        'bergen-county': Object.keys(bergenCountyHomeHealthAideCities),
        'essex-county': Object.keys(essexCountyHomeHealthAideCities),
        'monmouth-county': Object.keys(monmouthCountyHomeHealthAideCities),
        'passaic-county': Object.keys(passaicCountyHomeHealthAideCities)
    },
    staffing: {
        'bergen-county': Object.keys(bergenCountyStaffingCities),
        'essex-county': Object.keys(essexCountyStaffingCities),
        'monmouth-county': Object.keys(monmouthCountyStaffingCities),
        'passaic-county': Object.keys(passaicCountyStaffingCities)
    }
}

export function getCitySlugs(
    serviceSlug: string,
    countySlug: string
): string[] {
    const slugs = SERVICE_CITY_SLUGS[serviceSlug]?.[countySlug] ?? []
    const disabledCitySlugs = REDIRECTED_CITY_SLUGS[serviceSlug]?.[countySlug]

    if (!disabledCitySlugs?.size) {
        return slugs
    }

    return slugs.filter(slug => !disabledCitySlugs.has(slug))
}
