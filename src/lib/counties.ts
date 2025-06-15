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

export const counties: CountyData[] = [bergenCountyData, passaicCountyData]
