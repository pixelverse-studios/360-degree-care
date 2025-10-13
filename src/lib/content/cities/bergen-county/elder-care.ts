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
            `We review medical history, safety risks, and family goals to provide ${city} households with a clear understanding of next steps.`
    },
    {
        title: 'Care roadmaps',
        Icon: 'FaMap',
        description: '',
        buildDescription: city =>
            `Each consultation delivers a written plan outlining in-home support, community resources, and potential transitions tailored to ${city}.`
    },
    {
        title: 'Family facilitation',
        Icon: 'FaHandshake',
        description: '',
        buildDescription: city =>
            `We moderate conversations between siblings, spouses, and clinicians so every ${city} decision-maker stays aligned.`
    },
    {
        title: 'Clinical coordination',
        Icon: 'FaUserDoctor',
        description: '',
        buildDescription: () =>
            'When requested, we speak directly with physicians, therapists, and attorneys to make sure everyone is working from the same information.'
    }
]

const baseBenefits: DescriptiveItem[] = [
    {
        title: 'Objective guidance',
        Icon: 'FaScaleBalanced',
        description: '',
        buildDescription: () =>
            'Your consultant is an experienced RN who provides unbiased recommendations rooted in decades of geriatric expertise.'
    },
    {
        title: 'Local Bergen resources',
        Icon: 'FaMapLocationDot',
        description: '',
        buildDescription: city =>
            `We know the assisted living communities, rehabilitation centers, and specialty providers near ${city}.`
    },
    {
        title: 'Crisis-ready support',
        Icon: 'FaLifeRing',
        description: '',
        buildDescription: city =>
            `When hospitalizations or sudden changes occur in ${city}, we help families pivot quickly without losing momentum.`
    },
    {
        title: 'Actionable next steps',
        Icon: 'FaCheck',
        description: '',
        buildDescription: () =>
            'Every consultation ends with prioritized recommendations so you know exactly what to do after our meeting.'
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
    const canonical = `https://360degreecare.net/services/${SERVICE_SLUG}/bergen-county/${citySlug}`

    return {
        slug: `/services/${SERVICE_SLUG}/bergen-county/${citySlug}`,
        metadata: {
            title: `${SERVICE_NAME} in ${cityName}, NJ | 360 Degree Care`,
            description: options.heroDescription,
            keywords: `elder care consulting ${cityName}, care planning ${cityName}, senior guidance ${cityName}`,
            alternates: { canonical }
        },
        schemaData: buildSchema(SERVICE_NAME, cityName),
        hero: {
            header: `Navigate Senior Care Options in ${cityName}`,
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

export const bergenCountyElderCareCities: Record<
    string,
    CityServicePageContent
> = {
    'fort-lee': buildCityContent('Fort Lee', 'fort-lee', {
        heroDescription:
            'Hospital discharges and complex diagnoses demand quick decisions. Our Fort Lee consultants coordinate with Hackensack Meridian and NewYork-Presbyterian teams to chart the right course.',
        overviewDescription:
            'We review co-op requirements, insurance considerations, and community programs that help Fort Lee families balance high-rise living with reliable support.',
        benefitsHeader: 'Why Fort Lee families trust our guidance',
        ctaDescription:
            'Share your Fort Lee caregiving challenges and we will deliver a prioritized roadmap you can implement immediately.'
    }),
    ridgewood: buildCityContent('Ridgewood', 'ridgewood', {
        heroDescription:
            'From Valley Hospital transitions to long-term home support, Ridgewood families rely on our consultants to untangle complex decisions.',
        overviewDescription:
            'We evaluate home safety, introduce vetted resources, and coordinate with local physicians so your loved one receives consistent care in Ridgewood.',
        benefitsHeader: 'How Ridgewood families move forward with confidence',
        ctaDescription:
            'Let’s review your Ridgewood situation and design a realistic plan that respects both clinical needs and family dynamics.'
    }),
    'river-vale': buildCityContent('River Vale', 'river-vale', {
        heroDescription:
            'River Vale residents deserve a plan that protects independence while anticipating future needs. Our consultants deliver that clarity.',
        overviewDescription:
            'We assess home layouts, coordinate respite resources, and map medical providers across Bergen County so River Vale families are never left guessing.',
        benefitsHeader: 'How River Vale families benefit from a consult',
        ctaDescription:
            'Tell us what is working — and what isn’t — in River Vale. We’ll provide the next steps and resources you need.'
    })
}
