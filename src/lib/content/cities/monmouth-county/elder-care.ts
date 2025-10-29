import { CityServicePageContent } from '../../city-service-types'
import { ELDER_CARE_CONSULTING_FAQS } from '@/utils/faqs'
import { DescriptiveItem, buildSchema, mapItems } from './helpers'

const SERVICE_NAME = 'Elder Care Consulting'
const SERVICE_SLUG = 'elder-care'
const CTA_ORIGIN = 'Elder Care Consulting' as const

const baseServiceItems: DescriptiveItem[] = [
    {
        title: 'Comprehensive assessments',
        Icon: 'FaClipboard',
        description: '',
        buildDescription: city =>
            `We review medical history, safety risks, and family expectations to give ${city} households a clear starting point.`
    },
    {
        title: 'Actionable care roadmaps',
        Icon: 'FaMap',
        description: '',
        buildDescription: city =>
            `Every consult includes a written plan outlining in-home support, community programs, and next steps around ${city}.`
    },
    {
        title: 'Family facilitation',
        Icon: 'FaHandshake',
        description: '',
        buildDescription: city =>
            `We moderate conversations so ${city} siblings, spouses, and clinicians align on the same goals.`
    },
    {
        title: 'Clinical coordination',
        Icon: 'FaUserDoctor',
        description: '',
        buildDescription: () =>
            'When invited, we coordinate with physicians, attorneys, and social workers to keep the entire team informed.'
    }
]

const baseBenefits: DescriptiveItem[] = [
    {
        title: 'Objective nursing guidance',
        Icon: 'FaScaleBalanced',
        description: '',
        buildDescription: () =>
            'Consultations are led by experienced RNs who blend medical insight with practical recommendations.'
    },
    {
        title: 'Local Monmouth knowledge',
        Icon: 'FaMapLocationDot',
        description: '',
        buildDescription: city =>
            `We connect ${city} families with trusted rehab centers, adult day programs, and geriatric specialists nearby.`
    },
    {
        title: 'Crisis-ready support',
        Icon: 'FaLifeRing',
        description: '',
        buildDescription: city =>
            `If sudden hospitalizations or setbacks occur in ${city}, we help you pivot quickly with updated plans.`
    },
    {
        title: 'Prioritized next steps',
        Icon: 'FaCheck',
        description: '',
        buildDescription: () =>
            'Families leave each consultation with an ordered list of actions, resources, and timing guidance.'
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
    const canonical = `https://www.360degreecare.net/services/${SERVICE_SLUG}/monmouth-county/${citySlug}`

    return {
        slug: `/services/${SERVICE_SLUG}/monmouth-county/${citySlug}`,
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

export const monmouthCountyElderCareCities: Record<
    string,
    CityServicePageContent
> = {
    middletown: buildCityContent('Middletown', 'middletown', {
        heroDescription:
            'Middletown families lean on our consultants when Bayshore hospital stays, cardiology follow-ups, or dementia diagnoses create tough choices.',
        overviewDescription:
            'We evaluate split-level homes along Harmony Road, coordinate with Riverview and Bayshore Medical Centers, and map township programs that lighten caregiver load.',
        benefitsHeader: 'Why Middletown trusts our elder care consultants',
        ctaDescription:
            'Share your Middletown questions and we’ll deliver a roadmap that aligns medical guidance with what works at home.'
    }),
    howell: buildCityContent('Howell', 'howell', {
        heroDescription:
            'Howell households appreciate objective RN guidance when weighing in-home support, adult day programs, or moves to assisted living.',
        overviewDescription:
            'We review home safety from Candlewood to Ardena, coordinate with CentraState and Jersey Shore specialists, and surface community resources families may not know exist.',
        benefitsHeader: 'Clarity for Howell caregiving decisions',
        ctaDescription:
            'Tell us where you’re stuck in Howell—we’ll outline next steps, provider recommendations, and the timeline to follow.'
    }),
    marlboro: buildCityContent('Marlboro', 'marlboro', {
        heroDescription:
            'Marlboro residents juggling chronic conditions, work travel, and multigenerational households gain peace of mind with our consulting support.',
        overviewDescription:
            'We analyze home layouts in Morganville, plan for transportation to RWJ Old Bridge or CentraState, and mediate family expectations so everyone works from the same plan.',
        benefitsHeader: 'Benefits Marlboro families see after consulting',
        ctaDescription:
            'Let’s review your Marlboro situation and craft a step-by-step approach that protects safety and independence.'
    })
}
