import { bergenCountyCompanionCareCities } from '@/lib/content/cities/bergen-county/companion-care'
import { bergenCountyPersonalCareCities } from '@/lib/content/cities/bergen-county/personal-care'
import { bergenCountyHomeHealthAideCities } from '@/lib/content/cities/bergen-county/home-health-aides'

const SERVICE_CITY_SLUGS: Record<string, Record<string, string[]>> = {
    'companion-care': {
        'bergen-county': Object.keys(bergenCountyCompanionCareCities)
    },
    'personal-care': {
        'bergen-county': Object.keys(bergenCountyPersonalCareCities)
    },
    'home-health-aides': {
        'bergen-county': Object.keys(bergenCountyHomeHealthAideCities)
    }
}

export function getCitySlugs(
    serviceSlug: string,
    countySlug: string
): string[] {
    return SERVICE_CITY_SLUGS[serviceSlug]?.[countySlug] ?? []
}
