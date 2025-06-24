import {
    generatePersonalCareData,
    personalCareCityConfigs
} from './personalCareTemplate'
import { ServiceSEOData } from '@/lib/counties'

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
 * Helper to quickly add personal care data to a city's serviceSpecificSEO
 * Usage in county files:
 *
 * serviceSpecificSEO: {
 *   'personal-care': addPersonalCare('hackensack', {
 *     customH1: 'Custom title override'
 *   }),
 *   // other services...
 * }
 */
export const addPersonalCare = applyPersonalCareTemplate
