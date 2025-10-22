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
            `Certified aides in ${city} assist with bathing, grooming, and dressing so loved ones begin the day refreshed.`
    },
    {
        title: 'Medication & wellness routines',
        Icon: 'FaCapsules',
        description: '',
        buildDescription: city =>
            `We manage reminders, hydration, and light vitals tracking to keep ${city} families aligned with physician guidance.`
    },
    {
        title: 'Mobility and mealtime support',
        Icon: 'FaUtensils',
        description: '',
        buildDescription: city =>
            `From safe transfers to heart-healthy meals, our team helps ${city} residents stay nourished and confident on their feet.`
    },
    {
        title: 'Reliable companionship',
        Icon: 'FaComments',
        description: '',
        buildDescription: city =>
            `Conversation, neighborhood outings, and appointment escorting ensure ${city} households feel supported every shift.`
    }
]

const baseBenefits: DescriptiveItem[] = [
    {
        title: 'Local Monmouth experts',
        Icon: 'FaMap',
        description: '',
        buildDescription: city =>
            `Caregivers live nearby and understand ${city}'s shore traffic, senior centers, and township resources.`
    },
    {
        title: 'Nurse-led planning',
        Icon: 'FaUserMd',
        description: '',
        buildDescription: () =>
            'Registered nurses design and oversee every plan of care, anticipating changes before they become crises.'
    },
    {
        title: 'Flexible scheduling',
        Icon: 'FaCalendarCheck',
        description: '',
        buildDescription: city =>
            `Short visits, overnights, or 24/7 coverage — we adapt to the rhythms of ${city} families.`
    },
    {
        title: 'Clear communication',
        Icon: 'FaPhone',
        description: '',
        buildDescription: city =>
            `Visit recaps and quick updates keep ${city} families confident even when relatives commute or live out of state.`
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
    const canonical = `https://360degreecare.net/services/${SERVICE_SLUG}/monmouth-county/${citySlug}`

    return {
        slug: `/services/${SERVICE_SLUG}/monmouth-county/${citySlug}`,
        metadata: {
            title: `${SERVICE_NAME} in ${cityName}, NJ | 360 Degree Care`,
            description: options.heroDescription,
            keywords: `${SERVICE_NAME.toLowerCase()} ${cityName}, monmouth county personal care, in-home care ${cityName}`,
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
            header: `What Personal Care Looks Like in ${cityName}`,
            description: options.overviewDescription
        },
        services: mapItems(
            cityName,
            `${SERVICE_NAME} Included with Every ${cityName} Visit`,
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

export const monmouthCountyPersonalCareCities: Record<
    string,
    CityServicePageContent
> = {
    middletown: buildCityContent('Middletown', 'middletown', {
        heroDescription:
            'Shoreline seniors count on us for personal care that fits Bayshore traffic patterns, Port Monmouth apartments, and family commutes to NYC.',
        overviewDescription:
            'We coordinate around Middletown’s NJ Transit station, Riverview Medical Center appointments, and visits to Poricy Park or the Senior Center. Caregivers respect the blend of waterfront living and quiet neighborhoods stretching from Lincroft to Leonardo.',
        serviceHeader: 'Personal care services tailored to Middletown life',
        benefitsHeader: 'Why Middletown families rely on 360 Degree Care',
        ctaDescription:
            'Share your Middletown routine and we’ll build a personal care schedule that keeps loved ones comfortable and engaged.'
    }),
    howell: buildCityContent('Howell', 'howell', {
        heroDescription:
            'Compassionate personal care for Howell households navigating I-195 commutes, Freehold medical specialists, and Manasquan Reservoir outings.',
        overviewDescription:
            'From Ramtown to Adelphia, aides arrive on time for sprawling neighborhoods and planned communities alike. We align care with CentraState follow-ups, senior center calendars, and church events throughout Howell Township.',
        serviceHeader: 'Personal care coverage throughout Howell',
        benefitsHeader: 'How Howell residents benefit from our care team',
        ctaDescription:
            'Tell us about your Howell home and we’ll create a visit cadence that complements therapy, family schedules, and favorite local activities.'
    }),
    marlboro: buildCityContent('Marlboro', 'marlboro', {
        heroDescription:
            'Discreet personal care that supports Marlboro’s Route 9 professionals, Morganville households, and active adult communities.',
        overviewDescription:
            'Caregivers understand gated neighborhoods, robust HOA guidelines, and frequent travel schedules. We coordinate with CentraState and RWJ Old Bridge providers while helping residents enjoy Big Brook Park, shopping corridors, and cultural events.',
        serviceHeader: 'Personal care services available across Marlboro',
        benefitsHeader: 'Benefits Marlboro families see with our support',
        ctaDescription:
            'Let’s customize a Marlboro personal care plan that fits your home layout, commute, and wellness goals.'
    })
}
