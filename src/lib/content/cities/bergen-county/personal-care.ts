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
            `Certified aides in ${city} provide respectful bathing, grooming, and dressing support so mornings start on time without stress.`
    },
    {
        title: 'Medication & wellness check-ins',
        Icon: 'FaCapsules',
        description: '',
        buildDescription: city =>
            `We coordinate reminders, hydration prompts, and light vitals tracking to keep ${city} clients aligned with physician instructions.`
    },
    {
        title: 'Meals and mobility',
        Icon: 'FaUtensils',
        description: '',
        buildDescription: city =>
            `From meal prep to safe transfers and short walks, our team keeps ${city} residents nourished and confidently mobile.`
    },
    {
        title: 'Reliable companionship',
        Icon: 'FaComments',
        description: '',
        buildDescription: city =>
            `Meaningful conversation, local outings, and appointment escorting ensure ${city} families know their loved ones feel seen and supported.`
    }
]

const baseBenefits: DescriptiveItem[] = [
    {
        title: 'Local Bergen expertise',
        Icon: 'FaMap',
        description: '',
        buildDescription: city =>
            `Caregivers live nearby and understand ${city}'s building logistics, parking rules, and neighborhood resources.`
    },
    {
        title: 'Nurse-led supervision',
        Icon: 'FaUserMd',
        description: '',
        buildDescription: () =>
            'Every plan is created and reviewed by registered nurses so families receive proactive guidance, not just task coverage.'
    },
    {
        title: 'Flexible scheduling',
        Icon: 'FaCalendarCheck',
        description: '',
        buildDescription: city =>
            `Short shifts, overnights, and 24/7 coverage are available to mirror the rhythms of ${city} households.`
    },
    {
        title: 'Transparent communication',
        Icon: 'FaPhone',
        description: '',
        buildDescription: city =>
            `Visit recaps and quick response times keep ${city} families informed even when they travel or live out of state.`
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
    const canonical = `https://360degreecare.net/services/${SERVICE_SLUG}/bergen-county/${citySlug}`

    return {
        slug: `/services/${SERVICE_SLUG}/bergen-county/${citySlug}`,
        metadata: {
            title: `${SERVICE_NAME} in ${cityName}, NJ | 360 Degree Care`,
            description: options.heroDescription,
            keywords: `${SERVICE_NAME.toLowerCase()} ${cityName}, ${SERVICE_NAME.toLowerCase()} Bergen County, in-home care ${cityName}`,
            alternates: { canonical }
        },
        schemaData: buildSchema(SERVICE_NAME, cityName),
        hero: {
            header: `Concierge-Level ${SERVICE_NAME} in ${cityName}`,
            description: options.heroDescription,
            cta: 'Schedule a personal care consult',
            imageKey: 'personal-care-hero',
            imageFallback: '/images/personal-care-hero.jpg',
            imageAlt: `Personal care services in ${cityName}, NJ`
        },
        overview: {
            header: `What Personal Care Looks Like in ${cityName}`,
            description: options.overviewDescription
        },
        services: mapItems(
            cityName,
            `${SERVICE_NAME} Tasks We Handle in ${cityName}`,
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

export const bergenCountyPersonalCareCities: Record<
    string,
    CityServicePageContent
> = {
    'fort-lee': buildCityContent('Fort Lee', 'fort-lee', {
        heroDescription:
            "Daily living support designed for Fort Lee's high-rise lifestyle — from elevator-friendly scheduling to escorting residents to the Hudson River waterfront.",
        overviewDescription:
            'Our Fort Lee team understands the nuances of co-op boards, parking garages, and busy hospital corridors. We keep loved ones engaged, nourished, and safe whether they prefer afternoons at the community center or quiet evenings overlooking the George Washington Bridge.',
        serviceHeader: 'Hands-on support tailored to Fort Lee households',
        benefitsHeader: 'Why Fort Lee Families Trust 360 Degree Care',
        ctaDescription:
            "Share what a typical day looks like in Fort Lee and we'll tailor a personal care schedule that respects apartment logistics, work commutes, and medical appointments."
    }),
    ridgewood: buildCityContent('Ridgewood', 'ridgewood', {
        heroDescription:
            'Discreet hometown caregivers helping Ridgewood residents enjoy tree-lined streets, downtown shops, and community events with confidence.',
        overviewDescription:
            'From Willard School neighborhoods to downtown apartments, we coordinate personal care around physical therapy sessions, local club meetings, and visits to The Valley Hospital. Families receive proactive updates so everyone stays aligned.',
        serviceHeader: 'Personal care services available in Ridgewood',
        benefitsHeader: 'Why Ridgewood Chooses Concierge-Level Personal Care',
        ctaDescription:
            "Let's match your loved one with a Ridgewood caregiver who knows local roads, community calendars, and the importance of preserving independence at home."
    }),
    'river-vale': buildCityContent('River Vale', 'river-vale', {
        heroDescription:
            'Compassionate personal care that keeps River Vale residents connected to golf outings, neighborhood walks, and close-knit community routines.',
        overviewDescription:
            'Whether supporting retirees near the River Vale Country Club or multigenerational households by Holdrum School, our aides arrive on time, document progress, and collaborate with physicians across Bergen County.',
        serviceHeader: 'Personal care coverage throughout River Vale',
        benefitsHeader: 'How River Vale families benefit from 360 Degree Care',
        ctaDescription:
            "Tell us about your River Vale household and we'll craft a visit plan that coordinates with family schedules, therapy sessions, and favorite local activities."
    })
}
