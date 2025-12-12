import { CityServicePageContent, LocalResource } from '../../city-service-types'
import { FAQ, COMPANION_CARE_FAQS } from '@/utils/faqs'
import { DescriptiveItem, buildSchema, mapItems } from './helpers'

// Fort Lee local resources - shared across all Fort Lee service pages
const FORT_LEE_LOCAL_RESOURCES: LocalResource[] = [
    {
        name: 'Holy Name Medical Center',
        type: 'hospital',
        address: '718 Teaneck Rd, Teaneck, NJ 07666',
        phone: '(201) 833-3000'
    },
    {
        name: 'Fort Lee Health Department',
        type: 'community-center',
        address: '309 Main St, Fort Lee, NJ 07024',
        phone: '(201) 592-3500'
    },
    {
        name: 'Fort Lee Senior Center',
        type: 'senior-center',
        address: '1355 Inwood Terrace, Fort Lee, NJ 07024',
        phone: '(201) 592-3670'
    },
    {
        name: 'CVS Pharmacy',
        type: 'pharmacy',
        address: '2165 Lemoine Ave, Fort Lee, NJ 07024',
        phone: '(201) 944-6060'
    },
    {
        name: 'Rite Aid',
        type: 'pharmacy',
        address: '1600 Lemoine Ave, Fort Lee, NJ 07024',
        phone: '(201) 592-8700'
    }
]

// Fort Lee city-specific FAQs for Companion Care
const FORT_LEE_COMPANION_CARE_FAQS: FAQ[] = [
    {
        question:
            'Can companions take clients to the Fort Lee Community Center?',
        answer: 'Yes, our companions regularly escort residents to the Fort Lee Community Center for activities, classes, and social events.'
    },
    {
        question: 'Do you offer companions who speak Korean or Spanish?',
        answer: "Yes, Fort Lee's diverse community means we maintain multilingual caregivers including Korean and Spanish speakers."
    }
]

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
        cityFaqs?: FAQ[]
        localResources?: LocalResource[]
    }
): CityServicePageContent {
    const canonical = `https://www.360degreecare.net/services/${SERVICE_SLUG}/bergen-county/${citySlug}`

    return {
        slug: `/services/${SERVICE_SLUG}/bergen-county/${citySlug}`,
        metadata: {
            title: `${SERVICE_NAME} in ${cityName}, NJ | 360 Degree Care`,
            description: options.heroDescription,
            keywords: `companion care ${cityName}, senior companionship ${cityName}, social support ${cityName}`,
            alternates: { canonical }
        },
        schemaData: buildSchema(SERVICE_NAME, cityName, COMPANION_CARE_FAQS, {
            serviceSlug: SERVICE_SLUG,
            description: options.heroDescription,
            cityFaqs: options.cityFaqs
        }),
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
            items: COMPANION_CARE_FAQS,
            cityItems: options.cityFaqs
        },
        ...(options.localResources && {
            localResources: {
                header: `${cityName} Healthcare Resources`,
                items: options.localResources
            }
        }),
        cta: {
            header: `Let's Plan Companionship in ${cityName}`,
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
            'Tell us what your Fort Lee loved one enjoys and we will match them with a companion who can keep pace with city views and calmer afternoons alike.',
        cityFaqs: FORT_LEE_COMPANION_CARE_FAQS,
        localResources: FORT_LEE_LOCAL_RESOURCES
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
    }),
    hackensack: buildCityContent('Hackensack', 'hackensack', {
        heroDescription:
            'Social, reliable companion care that keeps Hackensack residents connected to Johnson Public Library programs, HUMC follow-ups, and Main Street dining.',
        overviewDescription:
            'We plan outings to Foschini Park, shops at Riverside Square, and beloved faith communities while navigating River Street traffic and hospital parking. Each visit blends conversation, errands, and mobility support calibrated to city life.',
        benefitsHeader:
            'How our Hackensack companions brighten day-to-day routines',
        ctaDescription:
            'Tell us about your Hackensack loved one’s go-to spots—we’ll arrange companionship that keeps them engaged without logistical headaches.'
    }),
    teaneck: buildCityContent('Teaneck', 'teaneck', {
        heroDescription:
            'Warm, culturally aware companionship for Teaneck residents who cherish Cedar Lane businesses, Votee Park strolls, and Holy Name events.',
        overviewDescription:
            'Our companions respect Sabbath schedules, community center calendars, and multilingual households. We provide gentle reminders, meaningful conversation, and escorted outings that honor each family’s traditions.',
        benefitsHeader:
            'Benefits Teaneck families notice with our companion team',
        ctaDescription:
            'Share the routines and customs that matter most—our Teaneck companions will build visits that feel like an extension of family.'
    }),
    'fair-lawn': buildCityContent('Fair Lawn', 'fair-lawn', {
        heroDescription:
            'Friendly companions supporting Fair Lawn seniors from Radburn’s walking paths to Broadway’s cafes and community events.',
        overviewDescription:
            'We coordinate around Route 4 and 208 traffic, handle NJ Transit escorting, and plan engaging afternoons at the Fair Lawn Community Center or library. Every visit balances independence with dependable support.',
        benefitsHeader: 'Why Fair Lawn families rely on our companions',
        ctaDescription:
            'Let’s plan Fair Lawn companionship that keeps your loved one active, social, and confident in the routines they love.'
    }),
    paramus: buildCityContent('Paramus', 'paramus', {
        heroDescription:
            'Friendly companions help Paramus seniors enjoy Van Saun Park, neighborhood farmers markets, and errands along Route 17 without feeling rushed.',
        overviewDescription:
            "We build visits around Trader Joe's runs, library programs, and church schedules, providing transportation and conversation so Paramus loved ones stay social even when family members commute.",
        benefitsHeader: 'How companions brighten days in Paramus',
        ctaDescription:
            'Tell us what your Paramus loved one enjoys and we will match a companion who can navigate local traffic and favorite hangouts.'
    }),
    englewood: buildCityContent('Englewood', 'englewood', {
        heroDescription:
            'Companions keep Englewood residents engaged with bergenPAC shows, Flat Rock Brook strolls, and Palisade Avenue cafes.',
        overviewDescription:
            'We plan escorted outings, bilingual conversation, and transportation to Englewood senior programs so no one feels isolated even if relatives commute into the city.',
        benefitsHeader: 'How Englewood companions make life brighter',
        ctaDescription:
            'Share your Englewood wish list and we will introduce a companion who can keep up.'
    }),
    westwood: buildCityContent('Westwood', 'westwood', {
        heroDescription:
            'Companions help Westwood seniors enjoy boutique shopping, library lectures, and coffee near Veterans Park.',
        overviewDescription:
            'We organize NJ Transit escorting, drives along Kinderkamack Road, and visits with nearby family so Westwood residents stay social and confident.',
        benefitsHeader: 'Benefits Westwood residents see with our companions',
        ctaDescription:
            'Let us know what makes Westwood feel like home and we will match a companion who keeps pace.'
    })
}
