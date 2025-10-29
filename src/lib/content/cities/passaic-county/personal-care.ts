import { CityServicePageContent } from '../../city-service-types'
import { PERSONAL_CARE_FAQS } from '@/utils/faqs'
import { DescriptiveItem, buildSchema, mapItems } from './helpers'

const SERVICE_NAME = 'Personal Care'
const SERVICE_SLUG = 'personal-care'
const CTA_ORIGIN = 'Personal Care' as const

const baseServiceItems: DescriptiveItem[] = [
    {
        title: 'Morning dignity and hygiene',
        Icon: 'FaBath',
        description: '',
        buildDescription: city =>
            `Aides in ${city} handle bathing, grooming, and dressing routines so mornings stay calm and respectful.`
    },
    {
        title: 'Medication & wellness routines',
        Icon: 'FaCapsules',
        description: '',
        buildDescription: city =>
            `We manage reminders, hydration, and vitals checks to keep ${city} loved ones aligned with doctor’s orders.`
    },
    {
        title: 'Safe mobility and meals',
        Icon: 'FaUtensils',
        description: '',
        buildDescription: city =>
            `From meal prep to transfers and supervised walks, our team keeps ${city} residents nourished and steady.`
    },
    {
        title: 'Compassionate companionship',
        Icon: 'FaComments',
        description: '',
        buildDescription: city =>
            `Conversation, neighborhood outings, and appointment escorting ensure ${city} families feel supported every day.`
    }
]

const baseBenefits: DescriptiveItem[] = [
    {
        title: 'Local Passaic County expertise',
        Icon: 'FaMap',
        description: '',
        buildDescription: city =>
            `Caregivers navigate ${city}'s apartment buildings, parking rules, and community resources with ease.`
    },
    {
        title: 'Nurse-led supervision',
        Icon: 'FaUserMd',
        description: '',
        buildDescription: () =>
            'Registered nurses oversee every plan of care, anticipating needs before they escalate.'
    },
    {
        title: 'Flexible scheduling',
        Icon: 'FaCalendarCheck',
        description: '',
        buildDescription: city =>
            `Hourly, overnight, or live-in coverage adapts to the rhythm of ${city} households.`
    },
    {
        title: 'Transparent communication',
        Icon: 'FaPhone',
        description: '',
        buildDescription: city =>
            `Families receive prompt updates, even when relatives commute or live outside ${city}.`
    }
]

function buildCityContent(
    cityName: string,
    citySlug: string,
    options: {
        heroDescription: string
        overviewDescription: string
        serviceHeader: string
        benefitsHeader: string
        ctaDescription: string
    }
): CityServicePageContent {
    const canonical = `https://www.360degreecare.net/services/${SERVICE_SLUG}/passaic-county/${citySlug}`

    return {
        slug: `/services/${SERVICE_SLUG}/passaic-county/${citySlug}`,
        metadata: {
            title: `${SERVICE_NAME} in ${cityName}, NJ | 360 Degree Care`,
            description: options.heroDescription,
            keywords: `${SERVICE_NAME.toLowerCase()} ${cityName}, passaic county personal care, in-home care ${cityName}`,
            alternates: { canonical }
        },
        schemaData: buildSchema(SERVICE_NAME, cityName),
        hero: {
            header: `Personal Care Support in ${cityName}`,
            description: options.heroDescription,
            cta: 'Schedule a personal care consult',
            imageKey: 'personal-care-hero',
            imageFallback: '/images/personal-care-hero.jpg',
            imageAlt: `Personal care services in ${cityName}, NJ`
        },
        overview: {
            header: `How Personal Care Works in ${cityName}`,
            description: options.overviewDescription
        },
        services: mapItems(
            cityName,
            `${SERVICE_NAME} Services for ${cityName} Households`,
            baseServiceItems
        ),
        benefits: mapItems(cityName, options.benefitsHeader, baseBenefits),
        faqs: {
            header: `${cityName} Personal Care FAQs`,
            items: PERSONAL_CARE_FAQS
        },
        cta: {
            header: `Ready to Support a Loved One in ${cityName}?`,
            description: options.ctaDescription,
            cta: 'Talk with a care advisor',
            origin: CTA_ORIGIN
        }
    }
}

export const passaicCountyPersonalCareCities: Record<
    string,
    CityServicePageContent
> = {
    paterson: buildCityContent('Paterson', 'paterson', {
        heroDescription:
            'Personal care tailored to Paterson’s high-density neighborhoods, historic mills, and St. Joseph’s Health appointments.',
        overviewDescription:
            'We schedule around Main Street traffic, Great Falls outings, and the multicultural fabric of Paterson. Aides support clients in multi-story walk-ups, brownstones, and senior housing communities with equal compassion.',
        serviceHeader: 'Personal care services available across Paterson',
        benefitsHeader: 'Why Paterson families depend on our care team',
        ctaDescription:
            'Share your Paterson household’s routine and we’ll create personal care visits that respect culture, language, and clinician guidance.'
    }),
    clifton: buildCityContent('Clifton', 'clifton', {
        heroDescription:
            'Reliable personal care for Clifton residents balancing Route 3 commutes, dialysis schedules, and neighborhood traditions.',
        overviewDescription:
            'From Richfield to Albion, we navigate apartment complexes, single-family homes, and gated communities. Caregivers coordinate with Hackensack Meridian Mountainside Medical Center, St. Mary’s Passaic, and local specialists.',
        serviceHeader: 'Comprehensive personal care coverage in Clifton',
        benefitsHeader: 'Benefits Clifton families see with our team',
        ctaDescription:
            'Tell us about your Clifton care goals—our aides will help maintain independence while managing daily tasks with dignity.'
    }),
    passaic: buildCityContent('Passaic', 'passaic', {
        heroDescription:
            'Culturally attuned personal care that supports Passaic’s close-knit neighborhoods, high-rise buildings, and riverfront communities.',
        overviewDescription:
            'We partner with St. Mary’s General Hospital, local synagogue and parish networks, and community centers so residents receive care that honors their traditions.',
        serviceHeader: 'Personal care services across the City of Passaic',
        benefitsHeader: 'Why Passaic households choose 360 Degree Care',
        ctaDescription:
            'Let us match your Passaic household with caregivers who understand language preferences, building logistics, and family expectations.'
    })
}
