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
            `Companions in ${city} bring conversation, hobbies, and cultural touchpoints that make each visit feel personal.`
    },
    {
        title: 'Local errands & escorting',
        Icon: 'FaCar',
        description: '',
        buildDescription: city =>
            `We handle transportation to markets, parks, and appointments throughout ${city} safely and on schedule.`
    },
    {
        title: 'Cognitive engagement',
        Icon: 'FaLightbulb',
        description: '',
        buildDescription: city =>
            `Memory games, music, and storytelling keep ${city} clients stimulated without adding stress.`
    },
    {
        title: 'Meal and hydration prompts',
        Icon: 'FaMugHot',
        description: '',
        buildDescription: city =>
            `Shared meals, hydration reminders, and light meal prep help ${city} residents maintain healthy routines.`
    }
]

const baseBenefits: DescriptiveItem[] = [
    {
        title: 'Trusted Passaic companions',
        Icon: 'FaHeart',
        description: '',
        buildDescription: city =>
            `We thoughtfully match companions from ${city} and surrounding towns for cultural fit and shared interests.`
    },
    {
        title: 'Flexible scheduling',
        Icon: 'FaClock',
        description: '',
        buildDescription: city =>
            `Morning wellness checks, afternoon outings, or full-day coverage adjust to ${city} households.`
    },
    {
        title: 'Family communication',
        Icon: 'FaPhone',
        description: '',
        buildDescription: city =>
            `Families receive timely updates about mood, activities, and needs after every ${city} visit.`
    },
    {
        title: 'Clinical collaboration',
        Icon: 'FaStethoscope',
        description: '',
        buildDescription: () =>
            'We escalate concerns to nurses or physicians if companions observe health changes.'
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
    const canonical = `https://360degreecare.net/services/${SERVICE_SLUG}/passaic-county/${citySlug}`

    return {
        slug: `/services/${SERVICE_SLUG}/passaic-county/${citySlug}`,
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

export const passaicCountyCompanionCareCities: Record<
    string,
    CityServicePageContent
> = {
    paterson: buildCityContent('Paterson', 'paterson', {
        heroDescription:
            'Companion care that celebrates Paterson’s rich heritage—from Great Falls walks to library programs and neighborhood gatherings.',
        overviewDescription:
            'We coordinate safe outings along Market Street, join clients for Paterson Museum visits, and stay mindful of multilingual households. Families receive consistent updates after every visit.',
        benefitsHeader: 'Why Paterson families love our companions',
        ctaDescription:
            'Share what keeps your Paterson loved one smiling and we’ll match those interests with a dedicated companion.'
    }),
    clifton: buildCityContent('Clifton', 'clifton', {
        heroDescription:
            'Clifton seniors enjoy movie nights at Clifton Commons, Van Houten Avenue cafes, and park strolls with our companions.',
        overviewDescription:
            'We manage transportation around Routes 3 and 46, attend faith services, and escort clients to medical visits in Montclair, Passaic, or Paramus.',
        benefitsHeader: 'Companionship that feels natural in Clifton',
        ctaDescription:
            'Tell us about your Clifton household’s routines—we’ll arrange companion visits that keep daily life meaningful.'
    }),
    passaic: buildCityContent('Passaic', 'passaic', {
        heroDescription:
            'Passaic residents stay engaged with neighborhood markets, Prospect Street shops, and community centers thanks to our companion team.',
        overviewDescription:
            'We respect cultural traditions, coordinate with local congregations, and facilitate safe outings along the Passaic River or to Third Ward parks.',
        benefitsHeader: 'How Passaic households benefit from companionship',
        ctaDescription:
            'Let’s design a Passaic companion plan that keeps your loved one connected, social, and supported.'
    })
}
