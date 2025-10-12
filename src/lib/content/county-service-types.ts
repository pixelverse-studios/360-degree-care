import { Metadata } from 'next'

// Updated interface that matches our actual Bergen County service pages
export interface CountyPageContent {
    // SEO & Meta
    metadata: Metadata
    schemaData: any

    // Hero Section
    hero: {
        title: string
        subtitle?: string
        description: string
        ctaButtonLabel: string
        ctaValue: string
        imageSrc?: string
        imageAlt: string
    }

    // Introduction
    intro: {
        title: string
        content: string[]
    }

    // Regional Sections - this was missing!
    regionalSections: Array<{
        title: string
        content: string[]
    }>

    // Service Areas
    serviceAreas: {
        title: string
        subtitle?: string
        regions: Array<{
            name: string
            cities: string[]
        }>
    }

    // Services List
    services: {
        title: string
        description: string
        servicesList: string[]
    }

    // Service Benefits - optional
    servicesBenefits?: Array<{
        title: string
        description: string
    }>

    // Why Choose Us - optional
    whyChoose?: {
        title: string
        content: string[]
    }

    // CTA Section
    cta: {
        title: string
        description: string[]
        buttonLabel: string
        value: string
    }
}
