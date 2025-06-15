import bergenCountyData from './seo/countyData/bergen-county'
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

export interface LocationSEOContent {
    communityFocus: string
    serviceAreas: string
    localPartners: string
}

type CompetitionLevel = 'low' | 'medium-low' | 'medium' | 'medium-high' | 'high'

export interface CityData {
    slug: string
    name: string
    zipCodes: string[]
    population: string
    demographics: string
    localKeywords: string[]
    nearbyAreas: string[]
    localLandmarks: string[]
    customDescriptions: { [key: string]: string | undefined }
    serviceSpecificSEO: { [key: string]: ServiceSEOData | undefined }
    seoContent: LocationSEOContent
    rankingFactors?: {
        primaryKeywords: string[]
        secondaryKeywords: string[]
        competitionLevel: CompetitionLevel
        focusAreas: string[]
    }
}

export interface CountyData {
    slug: string
    name: string
    heroTitle: string
    heroSubtitle: string
    introText: string
    services: Array<{
        slug: string
        name: string
        description: string
    }>
    cities: CityData[]
    cta: {
        heading: string
        subheading: string
        buttonText: string
    }
    ogImage: {
        url: string
        alt: string
    }
}

// --- DATA ASSEMBLY ---
// The data for each county is now self-contained and hard-coded for maximum flexibility.

export const counties: CountyData[] = [
    bergenCountyData,
    // Example for Passaic County - you can follow the same pattern here.
    {
        slug: 'passaic-county',
        name: 'Passaic County',
        heroTitle: 'Reliable In-Home Care in Passaic County, NJ',
        heroSubtitle:
            'Providing trusted home care services to families in Paterson, Clifton, Wayne, and throughout Passaic County.',
        introText:
            '360 Degree Care is proud to extend its compassionate in-home care services to the vibrant communities of Passaic County...',
        services: [
            /* ...services for Passaic... */
        ],
        cta: {
            heading: 'Looking for Care in Passaic County?',
            subheading:
                'Our care coordinators are ready to create a personalized plan...',
            buttonText: 'Get in Touch Today'
        },
        ogImage: {
            url: 'https://360degreecare.net/og-images/passaic-county.jpg',
            alt: 'A caregiver and senior in a Passaic County park.'
        },
        cities: [
            // ... hard-coded city data for Paterson, Clifton, etc. would go here ...
        ]
    }
]
