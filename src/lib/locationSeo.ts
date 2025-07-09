import { counties } from './counties'
import { CountyData, CityData, ServiceSEOData } from './types'

export type { CountyData, CityData, ServiceSEOData }

export interface Service {
    name: string
    baseDescription: string
}

export const services: Record<string, Service> = {
    'personal-care': {
        name: 'Personal Care',
        baseDescription:
            'Professional personal care services to help you maintain independence and dignity'
    },
    'companion-care': {
        name: 'Companion Care',
        baseDescription:
            'Compassionate companion care services providing emotional support and social interaction'
    },
    'elder-care': {
        name: 'Elder Care',
        baseDescription:
            'Comprehensive elder care services designed to help seniors live safely and comfortably'
    },
    'home-health-aides': {
        name: 'Home Health Aides',
        baseDescription:
            'Certified home health aides providing skilled medical support and personal care assistance'
    },
    nursing: {
        name: 'Nursing',
        baseDescription:
            'Professional nursing services delivered by licensed nurses'
    },
    staffing: {
        name: 'Staffing',
        baseDescription:
            'Reliable healthcare staffing solutions providing qualified caregivers and medical professionals'
    }
}

// --- HELPER FUNCTIONS ---

// A map for O(1) lookups to find a city's data and its parent county.
// This is created once when the server starts.
const cityMap = new Map<string, { city: CityData; county: CountyData }>()
counties.forEach(county => {
    county.cities.forEach(city => {
        cityMap.set(city.slug, { city, county })
    })
})

/**
 * Gets all city slugs from all counties.
 * Perfect for generateStaticParams.
 * @returns {string[]} An array of all city slugs (e.g., ['ridgewood', 'hackensack', 'paterson'])
 */
export function getAllCitySlugs(): string[] {
    return Array.from(cityMap.keys())
}

/**
 * Retrieves the data for a specific city by its slug.
 * @param citySlug The slug of the city (e.g., 'ridgewood')
 * @returns An object containing the city's data and its parent county's data, or null if not found.
 */
export function getCityAndCountyData(citySlug: string) {
    return cityMap.get(citySlug) || null
}

export interface GeneratedSEO {
    title: string
    metaDescription: string
    h1: string
    description: string
    keywords: string
    location: CityData
    county: CountyData
    service: Service
    serviceSpecificData?: ServiceSEOData
}

/**
 * Generate SEO-optimized content for a specific service/location
 * @param serviceSlug The slug of the service (e.g., 'companion-care')
 * @param citySlug The slug of the city (e.g., 'ridgewood')
 * @returns {GeneratedSEO | null}
 */
export function generateLocationSEO(
    serviceSlug: string,
    citySlug: string
): GeneratedSEO | null {
    const service = services[serviceSlug]
    const locationInfo = getCityAndCountyData(citySlug)

    if (!service || !locationInfo) {
        return null
    }

    const { city: location, county } = locationInfo

    const serviceSpecificData = location.serviceSpecificSEO?.[serviceSlug]

    // Build H1, Title, and Description with smart fallbacks
    const h1 =
        serviceSpecificData?.customH1 ||
        `Professional ${service.name} Services in ${location.name}`

    const title =
        serviceSpecificData?.customTitle ||
        `${service.name} in ${location.name}, NJ | ${county.name} Care Services`

    const description =
        serviceSpecificData?.customDescription ||
        location.customDescriptions?.[serviceSlug] ||
        `${service.baseDescription} in ${location.name}, ${county.name}.`

    const baseMetaDescription = `${description} Serving ${location.name}, ${county.name}. Call for a free consultation.`
    const metaDescription =
        serviceSpecificData?.customMetaDescription || baseMetaDescription

    // Combine keywords from multiple sources for better targeting
    const serviceKeywords = serviceSpecificData?.localKeywords || []
    const allKeywords = new Set([
        `${service.name.toLowerCase()} ${location.name}`,
        `${service.name.toLowerCase()} ${county.name}`,
        `${location.name} ${service.name.toLowerCase()}`,
        `${county.name} ${service.name.toLowerCase()}`,
        ...location.localKeywords,
        ...serviceKeywords,
        ...(location.rankingFactors?.primaryKeywords || []),
        ...(location.rankingFactors?.secondaryKeywords || [])
    ])

    return {
        title,
        metaDescription,
        h1,
        description,
        keywords: Array.from(allKeywords).join(', '),
        location,
        county,
        service,
        serviceSpecificData
    }
}
