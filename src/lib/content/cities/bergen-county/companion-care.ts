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
            `Care partners in ${city} plan conversation, games, and shared hobbies that match each person’s interests and energy level.`
    },
    {
        title: 'Local errands & escorting',
        Icon: 'FaCar',
        description: '',
        buildDescription: city =>
            `Whether the day includes a coffee run, library visit, or doctor appointment, companions handle transportation and mobility safely in ${city}.`
    },
    {
        title: 'Cognitive engagement',
        Icon: 'FaLightbulb',
        description: '',
        buildDescription: city =>
            `Brain games, memory prompts, and gentle conversation keep ${city} clients stimulated without feeling overwhelmed.`
    },
    {
        title: 'Meal and hydration check-ins',
        Icon: 'FaMugHot',
        description: '',
        buildDescription: city =>
            `Shared meals and hydration reminders make sure loved ones in ${city} stay nourished throughout the day.`
    }
]

const baseBenefits: DescriptiveItem[] = [
    {
        title: 'Trusted Bergen companionship',
        Icon: 'FaHeart',
        description: '',
        buildDescription: city =>
            `Our companions are background-checked, trained, and paired thoughtfully with ${city} residents for personality fit.`
    },
    {
        title: 'Flexible scheduling',
        Icon: 'FaClock',
        description: '',
        buildDescription: city =>
            `Morning wellness checks, afternoon outings, or full-day coverage — visits flex to the rhythms of ${city} households.`
    },
    {
        title: 'Family communication',
        Icon: 'FaPhone',
        description: '',
        buildDescription: city =>
            `Visit notes and quick updates keep families informed even when they commute or live outside ${city}.`
    },
    {
        title: 'Collaboration with clinical care',
        Icon: 'FaStethoscope',
        description: '',
        buildDescription: () =>
            'We coordinate with nurses and therapists when companion observations point to new wellness needs.'
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

export const bergenCountyCompanionCareCities: Record<
    string,
    CityServicePageContent
> = {
    'fort-lee': buildCityContent('Fort Lee', 'fort-lee', {
        heroDescription:
            'From Main Street strolls to Trader Joe’s errands, companions make sure Fort Lee seniors feel connected to both neighbors and Manhattan-facing routines.',
        overviewDescription:
            'We coordinate visits around elevator schedules, parking garages, and preferred physicians. Whether it’s sharing lunch on Lemoine Avenue or escorting clients to the Fort Lee Community Center, companionship is tailored to each resident.',
        benefitsHeader: 'Why Fort Lee families choose our companions',
        ctaDescription:
            'Tell us what your Fort Lee loved one enjoys and we will match them with a companion who can keep pace with city views and calmer afternoons alike.'
    }),
    ridgewood: buildCityContent('Ridgewood', 'ridgewood', {
        heroDescription:
            'Thoughtful companions help Ridgewood residents enjoy downtown shops, church groups, and seasonal concerts without missing a beat.',
        overviewDescription:
            'We schedule around Bookends author events, YMCA activities, and Valley Hospital appointments. Your companion can handle transportation, errands, and even guidance on local events that spark joy.',
        benefitsHeader: 'Companionship designed for Ridgewood lifestyles',
        ctaDescription:
            'Share your favorite Ridgewood routines and we will pair your loved one with a companion who keeps every outing comfortable and meaningful.'
    }),
    'river-vale': buildCityContent('River Vale', 'river-vale', {
        heroDescription:
            'Neighbors helping neighbors — our companions keep River Vale residents engaged with clubs, golf outings, and quiet neighborhood walks.',
        overviewDescription:
            'From morning visits near the Country Club to afternoon coffee runs on River Vale Road, we tailor companionship to preferred activities and energy levels while keeping families fully in the loop.',
        benefitsHeader: 'The River Vale difference with 360 Degree Care',
        ctaDescription:
            'Let’s build a River Vale companion schedule that fits golf tee times, grandkid visits, and cherished routines.'
    })
}
