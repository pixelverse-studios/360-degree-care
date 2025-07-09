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
    SeoHead?: {
        title?: string
        metaDescription?: string
        keywords?: string
        ogTitle?: string
        ogDescription?: string
        ogImage?: string
        twitterTitle?: string
        twitterDescription?: string
        twitterImage?: string
        canonicalUrl?: string
        schema?: {
            name?: string
            serviceType?: string
            description?: string
            areaServed?: {
                name: string
                type: string
            }
            address?: {
                streetAddress?: string
                addressLocality?: string
                addressRegion?: string
                postalCode?: string
                addressCountry?: string
            }
            telephone?: string
        }
    }
    hero?: {
        cta?: string
        description?: string
        header?: string
        img?: {
            src: string
            alt: string
        }
    }
    description?: {
        header?: string
        description?: string
    }
    listItems?: {
        header?: string
        items?: Array<{
            title: string
            description: string
            Icon: any
        }>
    }
    benefits?: {
        header?: string
        items?: Array<{
            title: string
            description: string
            Icon: any
        }>
    }
    cta?: {
        header?: string
        description?: string
        cta?: string
        origin?: string
    }
}

export interface LocationSEOContent {
    communityFocus: string
    serviceAreas: string
    localPartners: string
}

export type CompetitionLevel =
    | 'low'
    | 'medium-low'
    | 'medium'
    | 'medium-high'
    | 'high'

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
    offeredServices?: string[] // Array of service slugs
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

export type ServiceProps = {
    slug: string
    name: string
    description: string
}

export interface CountyServiceListProps {
    services: ServiceProps[]
    slug: string
    countyName: string
}

export interface ServiceListProps {
    header: string
    items: Array<{
        title: string
        description: string
        Icon: any
    }>
}

export interface ImageProps {
    src: string
    alt: string
}

export const allServiceSlugs = [
    'personal-care',
    'elder-care-consulting',
    'staffing',
    'home-health-aides',
    'nursing-services',
    'companion-care'
]
