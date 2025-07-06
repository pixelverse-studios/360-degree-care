import oceanCountyData from './seo/countyData/ocean-county'
import monmouthCountyData from './seo/countyData/monmouth-county'
import bergenCountyData from './seo/countyData/bergen-county'
import passaicCountyData from './seo/countyData/passaic-county'
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
    monmouthCountyData,
    oceanCountyData,
    passaicCountyData
]
