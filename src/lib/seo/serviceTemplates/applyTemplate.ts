import {
    generatePersonalCareData,
    personalCareCityConfigs
} from './personalCareTemplate'
import {
    generateElderCareConsultingData,
    elderCareConsultingCityConfigs
} from './elderCareConsultingTemplate'
import {
    generateStaffingServicesData,
    staffingServicesCityConfigs
} from './staffingServicesTemplate'
import {
    generateHomeHealthAidesData,
    homeHealthAidesCityConfigs
} from './homeHealthAidesTemplate'
import {
    generateNursingServicesData,
    nursingServicesCityConfigs
} from './nursingServicesTemplate'
import {
    generateCompanionCareData,
    companionCareCityConfigs
} from './companionCareTemplate'
import { ServiceSEOData } from '@/lib/types'

/**
 * Applies personal care template data to a city
 * @param citySlug - The city slug (e.g., 'hackensack', 'ridgewood')
 * @param customOverrides - Optional custom data to override template defaults
 * @returns ServiceSEOData for personal-care service
 */
export function applyPersonalCareTemplate(
    citySlug: string,
    customOverrides?: Partial<ServiceSEOData>
): ServiceSEOData {
    // Get city config or create basic one
    const cityConfig = personalCareCityConfigs[citySlug] || {
        cityName:
            citySlug.charAt(0).toUpperCase() +
            citySlug.slice(1).replace(/-/g, ' ')
    }

    // Generate base template data
    const templateData = generatePersonalCareData(cityConfig)

    // Merge with any custom overrides
    if (customOverrides) {
        return {
            ...templateData,
            ...customOverrides,
            // Deep merge nested objects
            SeoHead: {
                ...templateData.SeoHead,
                ...customOverrides.SeoHead,
                schema: {
                    ...templateData.SeoHead?.schema,
                    ...customOverrides.SeoHead?.schema
                }
            },
            hero: {
                ...templateData.hero,
                ...customOverrides.hero
            },
            description: {
                ...templateData.description,
                ...customOverrides.description
            },
            cta: {
                ...templateData.cta,
                ...customOverrides.cta
            },
            listItems: {
                ...templateData.listItems,
                ...customOverrides.listItems
            },
            benefits: {
                ...templateData.benefits,
                ...customOverrides.benefits
            }
        }
    }

    return templateData
}

/**
 * Applies elder care consulting template data to a city
 */
export function applyElderCareConsultingTemplate(
    citySlug: string,
    customOverrides?: Partial<ServiceSEOData>
): ServiceSEOData {
    const cityConfig = elderCareConsultingCityConfigs[citySlug] || {
        cityName:
            citySlug.charAt(0).toUpperCase() +
            citySlug.slice(1).replace(/-/g, ' ')
    }

    const templateData = generateElderCareConsultingData(cityConfig)

    if (customOverrides) {
        return {
            ...templateData,
            ...customOverrides,
            SeoHead: {
                ...templateData.SeoHead,
                ...customOverrides.SeoHead,
                schema: {
                    ...templateData.SeoHead?.schema,
                    ...customOverrides.SeoHead?.schema
                }
            },
            hero: {
                ...templateData.hero,
                ...customOverrides.hero
            },
            description: {
                ...templateData.description,
                ...customOverrides.description
            },
            cta: {
                ...templateData.cta,
                ...customOverrides.cta
            },
            listItems: {
                ...templateData.listItems,
                ...customOverrides.listItems
            },
            benefits: {
                ...templateData.benefits,
                ...customOverrides.benefits
            }
        }
    }

    return templateData
}

/**
 * Applies staffing services template data to a city
 */
export function applyStaffingServicesTemplate(
    citySlug: string,
    customOverrides?: Partial<ServiceSEOData>
): ServiceSEOData {
    const cityConfig = staffingServicesCityConfigs[citySlug] || {
        cityName:
            citySlug.charAt(0).toUpperCase() +
            citySlug.slice(1).replace(/-/g, ' ')
    }

    const templateData = generateStaffingServicesData(cityConfig)

    if (customOverrides) {
        return {
            ...templateData,
            ...customOverrides,
            SeoHead: {
                ...templateData.SeoHead,
                ...customOverrides.SeoHead,
                schema: {
                    ...templateData.SeoHead?.schema,
                    ...customOverrides.SeoHead?.schema
                }
            },
            hero: {
                ...templateData.hero,
                ...customOverrides.hero
            },
            description: {
                ...templateData.description,
                ...customOverrides.description
            },
            cta: {
                ...templateData.cta,
                ...customOverrides.cta
            },
            listItems: {
                ...templateData.listItems,
                ...customOverrides.listItems
            },
            benefits: {
                ...templateData.benefits,
                ...customOverrides.benefits
            }
        }
    }

    return templateData
}

/**
 * Applies home health aides template data to a city
 */
export function applyHomeHealthAidesTemplate(
    citySlug: string,
    customOverrides?: Partial<ServiceSEOData>
): ServiceSEOData {
    const cityConfig = homeHealthAidesCityConfigs[citySlug] || {
        cityName:
            citySlug.charAt(0).toUpperCase() +
            citySlug.slice(1).replace(/-/g, ' ')
    }

    const templateData = generateHomeHealthAidesData(cityConfig)

    if (customOverrides) {
        return {
            ...templateData,
            ...customOverrides,
            SeoHead: {
                ...templateData.SeoHead,
                ...customOverrides.SeoHead,
                schema: {
                    ...templateData.SeoHead?.schema,
                    ...customOverrides.SeoHead?.schema
                }
            },
            hero: {
                ...templateData.hero,
                ...customOverrides.hero
            },
            description: {
                ...templateData.description,
                ...customOverrides.description
            },
            cta: {
                ...templateData.cta,
                ...customOverrides.cta
            },
            listItems: {
                ...templateData.listItems,
                ...customOverrides.listItems
            },
            benefits: {
                ...templateData.benefits,
                ...customOverrides.benefits
            }
        }
    }

    return templateData
}

/**
 * Applies nursing services template data to a city
 */
export function applyNursingServicesTemplate(
    citySlug: string,
    customOverrides?: Partial<ServiceSEOData>
): ServiceSEOData {
    const cityConfig = nursingServicesCityConfigs[citySlug] || {
        cityName:
            citySlug.charAt(0).toUpperCase() +
            citySlug.slice(1).replace(/-/g, ' ')
    }

    const templateData = generateNursingServicesData(cityConfig)

    if (customOverrides) {
        return {
            ...templateData,
            ...customOverrides,
            SeoHead: {
                ...templateData.SeoHead,
                ...customOverrides.SeoHead,
                schema: {
                    ...templateData.SeoHead?.schema,
                    ...customOverrides.SeoHead?.schema
                }
            },
            hero: {
                ...templateData.hero,
                ...customOverrides.hero
            },
            description: {
                ...templateData.description,
                ...customOverrides.description
            },
            cta: {
                ...templateData.cta,
                ...customOverrides.cta
            },
            listItems: {
                ...templateData.listItems,
                ...customOverrides.listItems
            },
            benefits: {
                ...templateData.benefits,
                ...customOverrides.benefits
            }
        }
    }

    return templateData
}

/**
 * Applies companion care template data to a city
 */
export function applyCompanionCareTemplate(
    citySlug: string,
    customOverrides?: Partial<ServiceSEOData>
): ServiceSEOData {
    const cityConfig = companionCareCityConfigs[citySlug] || {
        cityName:
            citySlug.charAt(0).toUpperCase() +
            citySlug.slice(1).replace(/-/g, ' ')
    }

    const templateData = generateCompanionCareData(cityConfig)

    if (customOverrides) {
        return {
            ...templateData,
            ...customOverrides,
            SeoHead: {
                ...templateData.SeoHead,
                ...customOverrides.SeoHead,
                schema: {
                    ...templateData.SeoHead?.schema,
                    ...customOverrides.SeoHead?.schema
                }
            },
            hero: {
                ...templateData.hero,
                ...customOverrides.hero
            },
            description: {
                ...templateData.description,
                ...customOverrides.description
            },
            cta: {
                ...templateData.cta,
                ...customOverrides.cta
            },
            listItems: {
                ...templateData.listItems,
                ...customOverrides.listItems
            },
            benefits: {
                ...templateData.benefits,
                ...customOverrides.benefits
            }
        }
    }

    return templateData
}

/**
 * Helper functions to quickly add service data to a city's serviceSpecificSEO
 * Usage in county files:
 *
 * serviceSpecificSEO: {
 *   'personal-care': addPersonalCare('hackensack', {
 *     customH1: 'Custom title override'
 *   }),
 *   'elder-care-consulting': addElderCareConsulting('hackensack'),
 *   'staffing-services': addStaffingServices('hackensack'),
 *   'home-health-aides': addHomeHealthAides('hackensack'),
 *   'nursing-services': addNursingServices('hackensack'),
 *   'companion-care': addCompanionCare('hackensack'),
 *   // other services...
 * }
 */
export const addPersonalCare = applyPersonalCareTemplate
export const addElderCareConsulting = applyElderCareConsultingTemplate
export const addStaffingServices = applyStaffingServicesTemplate
export const addHomeHealthAides = applyHomeHealthAidesTemplate
export const addNursingServices = applyNursingServicesTemplate
export const addCompanionCare = applyCompanionCareTemplate
