import { CityServicePageContent } from '../../city-service-types'
import { COMPANION_CARE_FAQS } from '@/utils/faqs'
import { DescriptiveItem, buildSchema, mapItems } from './helpers'

const SERVICE_NAME = 'Companion Care'
const SERVICE_SLUG = 'companion-care'
const CTA_ORIGIN = 'Companion Care' as const

const baseServiceItems: DescriptiveItem[] = [
    {
        title: 'Engaging social visits',
        Icon: 'FaUserGroup',
        description: '',
        buildDescription: city =>
            `Companions in ${city} tailor conversations, hobbies, and music to each person’s interests and culture.`
    },
    {
        title: 'Errands & escorting',
        Icon: 'FaCar',
        description: '',
        buildDescription: city =>
            `We handle transportation to appointments, worship services, and favorite shops throughout ${city}.`
    },
    {
        title: 'Cognitive stimulation',
        Icon: 'FaLightbulb',
        description: '',
        buildDescription: city =>
            `Memory prompts, word games, and gentle encouragement keep ${city} clients mentally active.`
    },
    {
        title: 'Meal and hydration check-ins',
        Icon: 'FaMugHot',
        description: '',
        buildDescription: city =>
            `Shared meals and hydration reminders help ${city} residents stay energized and healthy.`
    }
]

const baseBenefits: DescriptiveItem[] = [
    {
        title: 'Trusted Essex companions',
        Icon: 'FaHeart',
        description: '',
        buildDescription: city =>
            `We match companions who understand ${city} neighborhoods, transit, and community events.`
    },
    {
        title: 'Flexible scheduling',
        Icon: 'FaClock',
        description: '',
        buildDescription: city =>
            `Morning check-ins, afternoon outings, or evening support adapt to ${city} households.`
    },
    {
        title: 'Family communication',
        Icon: 'FaPhone',
        description: '',
        buildDescription: city =>
            `Families receive punctual updates detailing activities and mood after each ${city} visit.`
    },
    {
        title: 'Clinical collaboration',
        Icon: 'FaStethoscope',
        description: '',
        buildDescription: () =>
            'We alert nurses or physicians when companions notice changes in appetite, mobility, or cognition.'
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
            keywords: `companion care ${cityName}, senior companionship ${cityName}, social support ${cityName}`,
            alternates: { canonical }
        },
        schemaData: buildSchema(SERVICE_NAME, cityName),
        hero: {
            header: `Companion Care That Keeps ${cityName} Residents Connected`,
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

export const essexCountyCompanionCareCities: Record<
    string,
    CityServicePageContent
> = {
    newark: buildCityContent('Newark', 'newark', {
        heroDescription:
            'Companion care keeps Newark residents engaged with NJPAC performances, Branch Brook Park walks, and Ironbound cafés.',
        overviewDescription:
            'We manage NJ Transit schedules, Penn Station pickups, and multilingual households to make every visit comfortable and vibrant.',
        benefitsHeader: 'Why Newark trusts our companion team',
        ctaDescription:
            'Share your Newark loved one’s favorite routines and we’ll curate companion visits that feel authentic.'
    }),
    'east-orange': buildCityContent('East Orange', 'east-orange', {
        heroDescription:
            'East Orange seniors stay socially active with support for library programs, senior center activities, and Brick Church shopping trips.',
        overviewDescription:
            'Companions know how to navigate high-rises along South Harrison Street, coordinate faith-based events, and provide calm conversation throughout the day.',
        benefitsHeader: 'Benefits East Orange families notice quickly',
        ctaDescription:
            'Tell us how companionship can help in East Orange—we’ll tailor visits to your household’s rhythm.'
    }),
    montclair: buildCityContent('Montclair', 'montclair', {
        heroDescription:
            'Montclair residents enjoy art walks, Wellmont concerts, and Church Street dining with a reliable companion by their side.',
        overviewDescription:
            'We arrange safe transportation, accompany clients to Montclair Art Museum events, and keep track of busy calendars around Watchung Plaza and Upper Montclair.',
        benefitsHeader: 'Companion care designed for Montclair lifestyles',
        ctaDescription:
            'Let’s match your Montclair loved one with a companion who shares their interests and energy.'
    })
}
