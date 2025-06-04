// lib/locationSEO.ts
// lib/locationSEO.ts

// lib/locationSEO.ts

// Types
export interface Service {
    name: string
    baseDescription: string
}

export interface LocationSEOContent {
    communityFocus: string
    serviceAreas: string
    localPartners: string
}

export interface ServiceSEOData {
    customDescription?: string
    customH1?: string
    customTitle?: string
    customMetaDescription?: string
    localKeywords?: string[]
    contentBlocks?: {
        whyChooseUs?: string
        serviceHighlights?: string[]
        localExpertise?: string
        emergencyInfo?: string
    }
}

export interface LocationData {
    name: string
    county: string
    zipCodes: string[]
    population: string
    demographics: string
    localKeywords: string[]
    nearbyAreas: string[]
    localLandmarks: string[]
    customDescriptions: Record<string, string> // Legacy support
    serviceSpecificSEO: Record<string, ServiceSEOData> // New granular control
    seoContent: LocationSEOContent
    rankingFactors?: {
        primaryKeywords: string[]
        secondaryKeywords: string[]
        competitionLevel: 'low' | 'medium' | 'high'
        focusAreas: string[]
    }
}

export interface GeneratedSEO {
    title: string
    metaDescription: string
    h1: string
    description: string
    keywords: string
    location: LocationData
    service: Service
    serviceSpecificData?: ServiceSEOData
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

// Location-specific SEO data for better local rankings
export const locationData: Record<string, LocationData> = {
    ridgewood: {
        name: 'Ridgewood',
        county: 'Bergen County',
        zipCodes: ['07450', '07451'],
        population: '25,000',
        demographics: 'affluent suburban community',
        localKeywords: [
            'Ridgewood NJ',
            'Bergen County',
            'downtown Ridgewood',
            'Ridgewood Village'
        ],
        nearbyAreas: ['Glen Rock', 'Wyckoff', 'Ho-Ho-Kus', 'Midland Park'],
        localLandmarks: [
            'Ridgewood Train Station',
            'Village Green',
            'Graydon Pool',
            'Ridgewood High School'
        ],
        customDescriptions: {
            'personal-care':
                "Trusted personal care services for Ridgewood families, supporting the community's commitment to quality senior care and independent living.",
            'companion-care':
                "Companion care services that understand Ridgewood's close-knit community values and family-oriented lifestyle.",
            'elder-care':
                "Elder care services designed for Ridgewood's discerning families who value excellence and personalized attention."
        },
        serviceSpecificSEO: {
            'personal-care': {
                customH1: 'Premium Personal Care Services in Ridgewood, NJ',
                customTitle:
                    'Personal Care Ridgewood NJ | Trusted Home Care Services',
                customMetaDescription:
                    'Premium personal care services in Ridgewood, NJ. Serving affluent families with personalized home care. Licensed, insured, 24/7 support.',
                localKeywords: [
                    'personal care Ridgewood NJ',
                    'home care Ridgewood',
                    'Ridgewood caregivers',
                    'Bergen County personal care'
                ],
                contentBlocks: {
                    whyChooseUs:
                        "Ridgewood families choose us because we understand the community's high standards for quality care and personalized service.",
                    serviceHighlights: [
                        'Licensed caregivers familiar with Ridgewood neighborhoods',
                        'Flexible scheduling around Ridgewood Train Station commutes',
                        'Coordination with Valley Hospital and local physicians',
                        "Understanding of Ridgewood's active senior community"
                    ],
                    localExpertise:
                        "Our team knows Ridgewood's tree-lined streets, from the Village area to Linwood neighborhoods, ensuring safe and familiar care.",
                    emergencyInfo:
                        'Quick response times throughout Ridgewood with 24/7 coordination with Valley Hospital emergency services.'
                }
            },
            'companion-care': {
                customH1: 'Companion Care Services in Ridgewood Village',
                customTitle:
                    'Companion Care Ridgewood NJ | Social Support & Friendship',
                customMetaDescription:
                    'Companion care in Ridgewood, NJ. Social support for seniors in this close-knit community. Transportation, activities, friendship.',
                localKeywords: [
                    'companion care Ridgewood',
                    'senior companionship Ridgewood NJ',
                    'Ridgewood elderly care'
                ],
                contentBlocks: {
                    whyChooseUs:
                        "We provide companionship that honors Ridgewood's strong community spirit and family values.",
                    localExpertise:
                        'Familiar with Ridgewood activities like Graydon Pool events, Village shopping, and community gatherings.'
                }
            }
        },
        rankingFactors: {
            primaryKeywords: [
                'personal care Ridgewood NJ',
                'home care Ridgewood',
                'Ridgewood caregivers'
            ],
            secondaryKeywords: [
                'Bergen County care',
                'Ridgewood Village care',
                'senior care 07450'
            ],
            competitionLevel: 'high',
            focusAreas: [
                'affluent demographics',
                'train station proximity',
                'Valley Hospital coordination'
            ]
        },
        seoContent: {
            communityFocus:
                'Ridgewood is known for its excellent schools, tree-lined streets, and strong community spirit. Our services reflect these values.',
            serviceAreas:
                'We serve all neighborhoods in Ridgewood including the Village area, Linwood, and surrounding residential communities.',
            localPartners:
                'We work closely with Valley Hospital, Ridgewood medical practices, and local senior centers.'
        }
    },
    'cliffside-park': {
        name: 'Cliffside Park',
        county: 'Bergen County',
        zipCodes: ['07010'],
        population: '25,400',
        demographics: 'diverse, family-friendly borough',
        localKeywords: [
            'Cliffside Park NJ',
            'Bergen County',
            'Palisades',
            'Fort Lee area'
        ],
        nearbyAreas: ['Fort Lee', 'Edgewater', 'Fairview', 'North Bergen'],
        localLandmarks: [
            'Palisades Interstate Park',
            'Cliffside Park School District',
            'Anderson Avenue'
        ],
        customDescriptions: {
            'personal-care':
                'Personal care services for Cliffside Park residents, bringing professional support to this vibrant Palisades community.',
            'companion-care':
                "Companion care that celebrates Cliffside Park's multicultural community and diverse family structures.",
            'elder-care':
                'Elder care services that honor the rich cultural heritage and strong family values of Cliffside Park.'
        },
        serviceSpecificSEO: {
            'personal-care': {
                customH1:
                    'Personal Care Services in Cliffside Park, Bergen County',
                customTitle:
                    'Personal Care Cliffside Park NJ | Palisades Home Care',
                customMetaDescription:
                    'Personal care services in Cliffside Park, NJ. Multicultural care team serving diverse families along the Palisades. Call today.',
                localKeywords: [
                    'personal care Cliffside Park',
                    'home care Palisades NJ',
                    'Cliffside Park caregivers',
                    'Bergen County care 07010'
                ],
                contentBlocks: {
                    whyChooseUs:
                        "Our multicultural team understands Cliffside Park's diverse community and provides culturally sensitive care.",
                    serviceHighlights: [
                        'Multilingual caregivers for diverse families',
                        'Familiar with Palisades medical facilities',
                        'Understanding of local transportation needs',
                        'Coordination with nearby Fort Lee services'
                    ],
                    localExpertise:
                        'We know Cliffside Park from Anderson Avenue to the Palisades waterfront, providing care throughout the borough.',
                    emergencyInfo:
                        'Quick response throughout Cliffside Park with connections to Palisades Medical Center.'
                }
            }
        },
        rankingFactors: {
            primaryKeywords: [
                'personal care Cliffside Park',
                'home care Palisades',
                'Cliffside Park elder care'
            ],
            secondaryKeywords: [
                'Bergen County care',
                'Fort Lee area care',
                'Palisades home care'
            ],
            competitionLevel: 'medium',
            focusAreas: [
                'multicultural community',
                'Palisades location',
                'diverse demographics'
            ]
        },
        seoContent: {
            communityFocus:
                'Cliffside Park offers stunning views of Manhattan and a strong sense of community along the Palisades.',
            serviceAreas:
                'Serving all areas of Cliffside Park from Anderson Avenue to the Palisades waterfront communities.',
            localPartners:
                'Connected with Palisades Medical Center, local community centers, and Cliffside Park senior services.'
        }
    },
    hackensack: {
        name: 'Hackensack',
        county: 'Bergen County',
        zipCodes: ['07601', '07602'],
        population: '46,000',
        demographics: 'diverse urban center and county seat',
        localKeywords: [
            'Hackensack NJ',
            'Bergen County seat',
            'Hackensack University Medical Center',
            'downtown Hackensack'
        ],
        nearbyAreas: ['Teaneck', 'Bogota', 'River Edge', 'Maywood'],
        localLandmarks: [
            'Hackensack University Medical Center',
            'Bergen County Courthouse',
            'Main Street',
            'Johnson Park'
        ],
        customDescriptions: {
            'personal-care':
                'Professional personal care services in Hackensack, the heart of Bergen County, providing trusted support for urban families.',
            'companion-care':
                'Companion care services that understand the fast-paced lifestyle and diverse needs of Hackensack residents.',
            'elder-care':
                'Comprehensive elder care in Hackensack, leveraging proximity to world-class medical facilities and urban conveniences.'
        },
        serviceSpecificSEO: {
            'personal-care': {
                customH1: 'Expert Personal Care Services in Hackensack, NJ',
                customTitle:
                    'Personal Care Hackensack NJ | Medical Center Area Home Care',
                customMetaDescription:
                    'Personal care services in Hackensack, NJ near University Medical Center. Urban home care with medical coordination. 24/7 availability.',
                localKeywords: [
                    'personal care Hackensack NJ',
                    'home care near HUMC',
                    'Hackensack caregivers',
                    'Bergen County seat care'
                ],
                contentBlocks: {
                    whyChooseUs:
                        "Located in Bergen County's seat, we provide urban-focused care with unmatched access to medical facilities.",
                    serviceHighlights: [
                        'Direct coordination with Hackensack University Medical Center',
                        'Urban care expertise for city living',
                        'Multilingual staff for diverse Hackensack community',
                        'Convenient downtown location access'
                    ],
                    localExpertise:
                        'We understand urban caregiving in Hackensack, from high-rise living to medical appointments at HUMC.',
                    emergencyInfo:
                        'Immediate access to Hackensack University Medical Center and Bergen County emergency services.'
                }
            }
        },
        rankingFactors: {
            primaryKeywords: [
                'personal care Hackensack',
                'home care HUMC area',
                'Hackensack elder care'
            ],
            secondaryKeywords: [
                'Bergen County care',
                'medical center home care',
                'urban senior care'
            ],
            competitionLevel: 'high',
            focusAreas: [
                'medical center proximity',
                'urban demographics',
                'county seat authority'
            ]
        },
        seoContent: {
            communityFocus:
                "As Bergen County's seat, Hackensack combines urban amenities with suburban comfort and excellent healthcare access.",
            serviceAreas:
                'Covering all Hackensack neighborhoods from downtown to residential areas near the Hackensack River.',
            localPartners:
                'Close partnerships with Hackensack University Medical Center, local physicians, and Bergen County social services.'
        }
    }
}

// Fallback data for cities not specifically configured
export const getLocationData = (citySlug: string): LocationData => {
    if (locationData[citySlug]) {
        return locationData[citySlug]
    }

    // Generate fallback data
    const cityName = citySlugToName(citySlug)
    return {
        name: cityName,
        county: 'Bergen County',
        zipCodes: [],
        population: '',
        demographics: 'community',
        localKeywords: [`${cityName} NJ`, 'Bergen County'],
        nearbyAreas: [],
        localLandmarks: [],
        customDescriptions: {},
        serviceSpecificSEO: {},
        seoContent: {
            communityFocus: `${cityName} is a wonderful community in Bergen County with strong family values.`,
            serviceAreas: `We proudly serve all areas of ${cityName} and surrounding neighborhoods.`,
            localPartners: `We work with local healthcare providers and community organizations in ${cityName}.`
        }
    }
}

export function citySlugToName(slug: string): string {
    return slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
}

// Generate SEO-optimized content for a specific service/location
export function generateLocationSEO(
    serviceSlug: string,
    citySlug: string
): GeneratedSEO | null {
    const service = services[serviceSlug]
    const location = getLocationData(citySlug)

    if (!service) return null

    // Get service-specific SEO data if available
    const serviceSpecificData = location.serviceSpecificSEO[serviceSlug]

    // Custom H1 with priority: service-specific > custom > default
    const h1 =
        serviceSpecificData?.customH1 ||
        `Professional ${service.name} Services in ${location.name}`

    // Custom title with priority: service-specific > default
    const title =
        serviceSpecificData?.customTitle ||
        `${service.name} in ${location.name}, NJ | Bergen County Care Services`

    // Custom description with priority: service-specific > legacy custom > default
    const description =
        serviceSpecificData?.customDescription ||
        location.customDescriptions[serviceSlug] ||
        `${service.baseDescription} in ${location.name}, ${location.county}.`

    // Custom meta description with priority: service-specific > generated
    const baseMetaDescription = `${description} Serving ${location.localKeywords.slice(0, 3).join(', ')}. Call for free consultation.`
    const metaDescription =
        serviceSpecificData?.customMetaDescription || baseMetaDescription

    // Enhanced keywords combining service-specific and location keywords
    const serviceKeywords = serviceSpecificData?.localKeywords || []
    const allKeywords = [
        `${service.name.toLowerCase()} ${location.name}`,
        `${service.name.toLowerCase()} ${location.county}`,
        ...location.localKeywords.map(
            keyword => `${service.name.toLowerCase()} ${keyword}`
        ),
        ...serviceKeywords,
        `${location.name} healthcare services`,
        `Bergen County ${service.name.toLowerCase()}`
    ]

    // Include ranking factors if available
    if (location.rankingFactors) {
        allKeywords.push(...location.rankingFactors.primaryKeywords)
        allKeywords.push(...location.rankingFactors.secondaryKeywords)
    }

    return {
        title,
        metaDescription,
        h1,
        description,
        keywords: Array.from(new Set(allKeywords)).join(', '), // Convert Set to Array first
        location,
        service,
        serviceSpecificData
    }
}

// All cities from your data
export const cities: string[] = [
    'allendale',
    'alpine',
    'bergenfield',
    'bogota',
    'carlstadt',
    'cliffside-park',
    'closter',
    'cresskill',
    'demarest',
    'dumont',
    'east-rutherford',
    'edgewater',
    'emerson',
    'englewood',
    'englewood-cliffs',
    'fair-lawn',
    'fairview',
    'fort-lee',
    'franklin-lakes',
    'garfield',
    'glen-rock',
    'hackensack',
    'harrington-park',
    'hasbrouck-heights',
    'haworth',
    'hillsdale',
    'ho-ho-kus',
    'leonia',
    'little-ferry',
    'lodi',
    'lyndhurst',
    'mahwah',
    'maywood',
    'midland-park',
    'montvale',
    'moonachie',
    'new-milford',
    'north-arlington',
    'northvale',
    'norwood',
    'oakland',
    'old-tappan',
    'oradell',
    'palisades-park',
    'paramus',
    'park-ridge',
    'ramsey',
    'ridgefield',
    'ridgefield-park',
    'ridgewood',
    'river-edge',
    'river-vale',
    'rochelle-park',
    'rockleigh',
    'rutherford',
    'saddle-brook',
    'saddle-river',
    'south-hackensack',
    'teaneck',
    'tenafly',
    'teterboro',
    'upper-saddle-river',
    'waldwick',
    'wallington',
    'washington-township',
    'westwood',
    'wood-ridge',
    'wyckoff'
]

// Add this debug code to your locationSeo.ts file temporarily

export function getAllServiceCityPaths(): Array<{
    params: { service: string; city: string }
}> {
    const paths: Array<{ params: { service: string; city: string } }> = []

    // Debug the data
    console.log('=== DEBUG INFO ===')
    console.log('Services object:', services)
    console.log('Services keys:', Object.keys(services))
    console.log('Cities array:', cities)
    console.log('Cities length:', cities.length)

    Object.keys(services).forEach(serviceSlug => {
        console.log(`Processing service: ${serviceSlug}`)
        cities.forEach(citySlug => {
            console.log(`  - Adding city: ${citySlug}`)
            paths.push({
                params: {
                    service: serviceSlug,
                    city: citySlug
                }
            })
        })
    })

    console.log('Final paths count:', paths.length)
    console.log('Sample paths:', paths.slice(0, 5))

    return paths
}

// Also add this debug function to test your data
export function debugLocationData() {
    console.log('=== LOCATION DATA DEBUG ===')
    console.log('Services:', services)
    console.log('Cities:', cities)
    console.log('LocationData keys:', Object.keys(locationData))

    // Test generateLocationSEO
    const testSEO = generateLocationSEO('companion-care', 'cliffside-park')
    console.log('Test SEO for companion-care + cliffside-park:', testSEO)
}
