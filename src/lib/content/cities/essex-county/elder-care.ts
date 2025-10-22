import { CityServicePageContent } from '../../city-service-types'
import { ELDER_CARE_CONSULTING_FAQS } from '@/utils/faqs'
import { DescriptiveItem, buildSchema, mapItems } from './helpers'

const SERVICE_NAME = 'Elder Care Consulting'
const SERVICE_SLUG = 'elder-care'
const CTA_ORIGIN = 'Elder Care Consulting' as const

const baseServiceItems: DescriptiveItem[] = [
    {
        title: 'Holistic assessments',
        Icon: 'FaClipboard',
        description: '',
        buildDescription: city =>
            `We evaluate medical history, home safety, and social networks to orient ${city} families around shared facts.`
    },
    {
        title: 'Actionable planning documents',
        Icon: 'FaMap',
        description: '',
        buildDescription: city =>
            `Every consultation ends with a written roadmap outlining services, timelines, and resources serving ${city}.`
    },
    {
        title: 'Family facilitation',
        Icon: 'FaHandshake',
        description: '',
        buildDescription: city =>
            `We moderate conversations so ${city} decision-makers align on the same goals and commitments.`
    },
    {
        title: 'Care coordination',
        Icon: 'FaUserDoctor',
        description: '',
        buildDescription: () =>
            'When invited, we coordinate with physicians, attorneys, and social workers to maintain continuity.'
    }
]

const baseBenefits: DescriptiveItem[] = [
    {
        title: 'RN-led expertise',
        Icon: 'FaScaleBalanced',
        description: '',
        buildDescription: () =>
            'Experienced registered nurses deliver objective insight informed by decades of geriatric practice.'
    },
    {
        title: 'Local Essex resources',
        Icon: 'FaMapLocationDot',
        description: '',
        buildDescription: city =>
            `We connect ${city} families with trusted rehab centers, community programs, and elder law partners.`
    },
    {
        title: 'Crisis-ready planning',
        Icon: 'FaLifeRing',
        description: '',
        buildDescription: city =>
            `If emergencies arise in ${city}, we adjust plans quickly so you can act without second-guessing.`
    },
    {
        title: 'Clear action steps',
        Icon: 'FaCheck',
        description: '',
        buildDescription: () =>
            'Each consultation concludes with prioritized next steps, responsible parties, and suggested timelines.'
    }
]

function buildCityContent(
    cityName: string,
    citySlug: string,
    options: {
        heroDescription: string
        overviewDescription: string
        benefitsHeader: string
        ctaDescription: string
    }
): CityServicePageContent {
    const canonical = `https://360degreecare.net/services/${SERVICE_SLUG}/essex-county/${citySlug}`

    return {
        slug: `/services/${SERVICE_SLUG}/essex-county/${citySlug}`,
        metadata: {
            title: `${SERVICE_NAME} in ${cityName}, NJ | 360 Degree Care`,
            description: options.heroDescription,
            keywords: `elder care consulting ${cityName}, care planning ${cityName}, senior guidance ${cityName}`,
            alternates: { canonical }
        },
        schemaData: buildSchema(SERVICE_NAME, cityName),
        hero: {
            header: `Navigate Senior Care Decisions in ${cityName}`,
            description: options.heroDescription,
            cta: 'Book an elder care consult',
            imageKey: 'elder-care-hero',
            imageFallback: '/images/elder-care-hero.jpg',
            imageAlt: `Elder care consulting in ${cityName}, NJ`
        },
        overview: {
            header: `Guidance for ${cityName} Families`,
            description: options.overviewDescription
        },
        services: mapItems(
            cityName,
            `${SERVICE_NAME} Services in ${cityName}`,
            baseServiceItems
        ),
        benefits: mapItems(cityName, options.benefitsHeader, baseBenefits),
        faqs: {
            header: `${cityName} Elder Care Consulting FAQs`,
            items: ELDER_CARE_CONSULTING_FAQS
        },
        cta: {
            header: `Ready for a Clear Plan in ${cityName}?`,
            description: options.ctaDescription,
            cta: 'Schedule a consultation',
            origin: CTA_ORIGIN
        }
    }
}

export const essexCountyElderCareCities: Record<
    string,
    CityServicePageContent
> = {
    newark: buildCityContent('Newark', 'newark', {
        heroDescription:
            'Newark families managing University Hospital discharges, Beth Israel follow-ups, or caregiver burnout lean on our RN consultants for clarity.',
        overviewDescription:
            'We review high-rise safety, coordinate with community health workers, and design plans that respect cultural traditions across the Ironbound, North Ward, and Weequahic.',
        benefitsHeader: 'Why Newark households trust our consultants',
        ctaDescription:
            'Share your Newark caregiving questions and we’ll outline the next steps, timelines, and resources you need.'
    }),
    'east-orange': buildCityContent('East Orange', 'east-orange', {
        heroDescription:
            'East Orange residents receive objective guidance for navigating VA benefits, East Orange General care, and multigenerational decision-making.',
        overviewDescription:
            'We evaluate home safety from Greenwood to Ampere, coordinate transportation plans, and connect families with supportive services in Essex County.',
        benefitsHeader: 'How East Orange families gain confidence with us',
        ctaDescription:
            'Tell us where you’re stuck in East Orange—we’ll deliver a practical, step-by-step roadmap.'
    }),
    montclair: buildCityContent('Montclair', 'montclair', {
        heroDescription:
            'Montclair families balancing demanding careers, out-of-state relatives, and complex diagnoses rely on our concierge-level consulting.',
        overviewDescription:
            'We coordinate with Mountainside Medical Center, customize plans for brownstones and condos, and surface vetted resources ranging from day programs to private duty nursing.',
        benefitsHeader: 'Benefits Montclair households see after a consult',
        ctaDescription:
            'Let’s discuss your Montclair care scenario and create an action plan that protects independence and wellbeing.'
    })
}
