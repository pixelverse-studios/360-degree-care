import { CityServicePageContent } from '../../city-service-types'
import { COMPANION_CARE_FAQS } from '@/utils/faqs'
import { DescriptiveItem, buildSchema, mapItems } from './helpers'

const SERVICE_NAME = 'Companion Care'
const SERVICE_SLUG = 'companion-care'
const CTA_ORIGIN = 'Companion Care' as const

const baseServiceItems: DescriptiveItem[] = [
    {
        title: 'Meaningful social hours',
        Icon: 'FaUserGroup',
        description: '',
        buildDescription: city =>
            `Companions in ${city} plan conversation, games, and hobbies that match each person’s interests and energy.`
    },
    {
        title: 'Local errands & escorting',
        Icon: 'FaCar',
        description: '',
        buildDescription: city =>
            `From senior center programs to shoreline errands, we handle transportation and mobility throughout ${city}.`
    },
    {
        title: 'Cognitive engagement',
        Icon: 'FaLightbulb',
        description: '',
        buildDescription: city =>
            `Memory prompts, storytelling, and brain games keep ${city} clients stimulated without feeling overwhelmed.`
    },
    {
        title: 'Meal and hydration check-ins',
        Icon: 'FaMugHot',
        description: '',
        buildDescription: city =>
            `Shared meals and gentle hydration reminders help ${city} residents maintain healthy routines.`
    }
]

const baseBenefits: DescriptiveItem[] = [
    {
        title: 'Trusted Monmouth companions',
        Icon: 'FaHeart',
        description: '',
        buildDescription: city =>
            `Carefully matched companions already know ${city} neighborhoods, worship communities, and recreation spots.`
    },
    {
        title: 'Flexible scheduling',
        Icon: 'FaClock',
        description: '',
        buildDescription: city =>
            `Morning wellness checks, afternoon outings, or full-day coverage — visits flex to ${city} households.`
    },
    {
        title: 'Family communication',
        Icon: 'FaPhone',
        description: '',
        buildDescription: city =>
            `Real-time updates keep ${city} families informed, especially for adult children commuting into New York or Philadelphia.`
    },
    {
        title: 'Clinical collaboration',
        Icon: 'FaStethoscope',
        description: '',
        buildDescription: () =>
            'We share observations with nurses and therapists when we notice new mobility, mood, or nutrition needs.'
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
            keywords: `companion care ${cityName}, senior companionship ${cityName}, social support ${cityName}`,
            alternates: { canonical }
        },
        schemaData: buildSchema(SERVICE_NAME, cityName),
        hero: {
            header: `Companion Care That Keeps ${cityName} Seniors Connected`,
            description: options.heroDescription,
            cta: 'Book a companion introduction',
            imageKey: 'companion-care-hero',
            imageFallback: '/images/companion-care-hero.jpg',
            imageAlt: `Companion care in ${cityName}, NJ`
        },
        overview: {
            header: `How Companion Care Works in ${cityName}`,
            description: options.overviewDescription
        },
        services: mapItems(
            cityName,
            `What Our ${cityName} Companions Assist With`,
            baseServiceItems
        ),
        benefits: mapItems(cityName, options.benefitsHeader, baseBenefits),
        faqs: {
            header: `${cityName} Companion Care FAQs`,
            items: COMPANION_CARE_FAQS
        },
        cta: {
            header: `Let’s Plan Companionship in ${cityName}`,
            description: options.ctaDescription,
            cta: 'Schedule a conversation',
            origin: CTA_ORIGIN
        }
    }
}

export const monmouthCountyCompanionCareCities: Record<
    string,
    CityServicePageContent
> = {
    middletown: buildCityContent('Middletown', 'middletown', {
        heroDescription:
            'Companions help Middletown seniors enjoy Bay Shore Waterfront Park, the Arts Center, and senior programs without worrying about transportation.',
        overviewDescription:
            'We coordinate NJ Transit rides, ferry schedules, and family commutes so loved ones can keep long-standing routines in Belford, Lincroft, or Navesink. Every visit blends social connection with practical support.',
        benefitsHeader: 'Why Middletown chooses our companion team',
        ctaDescription:
            'Tell us what lights up your Middletown loved one’s day — we’ll match those interests with a dedicated companion.'
    }),
    howell: buildCityContent('Howell', 'howell', {
        heroDescription:
            'Howell seniors stay active with outings to the Senior Center, Manasquan Reservoir trails, and Freehold Raceway Mall with a trusted companion.',
        overviewDescription:
            'We handle wide-ranging drives across Howell, plan coffee meetups on Route 9, and escort clients to worship services or physical therapy. Families receive timely updates after each visit.',
        benefitsHeader: 'Companion care that feels native to Howell',
        ctaDescription:
            'Share your Howell household’s schedule and we’ll keep favorite routines going strong.'
    }),
    marlboro: buildCityContent('Marlboro', 'marlboro', {
        heroDescription:
            'Vibrant companion care for Marlboro residents who enjoy Union Hill shopping, township recreation, and neighborhood social clubs.',
        overviewDescription:
            'We map visits around Route 520 traffic, adult community calendars, and doctor visits in Freehold or Old Bridge. Companions bring energy, conversation, and reassurance to every appointment and outing.',
        benefitsHeader: 'Benefits Marlboro families notice quickly',
        ctaDescription:
            'Let’s curate a Marlboro companion plan that keeps your loved one engaged, mobile, and connected.'
    })
}
