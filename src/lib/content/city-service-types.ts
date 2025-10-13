import { Metadata } from 'next'
import { FAQ } from '@/utils/faqs'
import { ServiceListProps } from '@/lib/types'
import { ServiceCtaProps } from '@/components/services/ServiceCta'

export interface CityServiceHero {
    header: string
    description: string
    cta: string
    imageKey?: string
    imageFallback?: string
    imageAlt: string
}

export interface CityServicePageContent {
    slug: string
    metadata: Metadata
    schemaData: any
    hero: CityServiceHero
    overview: {
        header: string
        description: string
    }
    services: ServiceListProps
    benefits: ServiceListProps
    faqs: {
        header: string
        items: FAQ[]
    }
    cta: {
        header: string
        description: string
        cta: string
        origin: ServiceCtaProps['origin']
    }
}
