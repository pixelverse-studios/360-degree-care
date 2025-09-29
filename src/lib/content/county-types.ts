import { Metadata } from 'next'

export interface CountyRegionalContent {
    title: string
    content: string[]
}

export interface CountyServiceArea {
    name: string
    bgColor: string
    cities: string[]
    description: string
}

export interface CountyPageContent {
    // SEO & Meta
    slug: string
    metadata: Metadata
    schemaData: any

    // Hero Section
    hero: {
        title: string
        subtitle?: string
        description: string
        ctaButtonLabel?: string
        ctaValue?: string
        imageSrc?: string
        imageAlt?: string
    }

    // Introduction
    intro: {
        title: string
        content: string[]
    }

    // Regional Sections
    regions: CountyRegionalContent[]

    // Service Areas
    serviceAreas: {
        title?: string
        subtitle?: string
        regions: CountyServiceArea[]
    }

    // Services List (using existing component)
    services: {
        header: string
        items: Array<{
            title: string
            description: string
            Icon: string
        }>
    }

    // Benefits (using existing component)
    benefits: {
        header: string
        items: Array<{
            title: string
            description: string
            Icon: string
        }>
    }

    // CTA Section
    cta: {
        title: string
        description: string[]
        ctaButtonLabel?: string
        ctaValue?: string
    }
}

export interface ServiceCountyPageContent extends CountyPageContent {
    serviceName: string
    serviceSlug: string
}
