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
            `Certified aides in ${city} handle bathing, grooming, and dressing so mornings feel calm and respectful.`
    },
    {
        title: 'Medication & wellness routines',
        Icon: 'FaCapsules',
        description: '',
        buildDescription: city =>
            `We coordinate reminders, hydration, and vitals checks to keep ${city} residents aligned with physician plans.`
    },
    {
        title: 'Mobility and meals',
        Icon: 'FaUtensils',
        description: '',
        buildDescription: city =>
            `From safe transfers to nutritious meals, our team keeps ${city} loved ones steady and nourished.`
    },
    {
        title: 'Reliable companionship',
        Icon: 'FaComments',
        description: '',
        buildDescription: city =>
            `Conversation, escorted appointments, and neighborhood outings ensure ${city} families feel supported.`
    }
]

const baseBenefits: DescriptiveItem[] = [
    {
        title: 'Essex County expertise',
        Icon: 'FaMap',
        description: '',
        buildDescription: city =>
            `Caregivers understand ${city}'s transit hubs, apartment buildings, and community resources.`
    },
    {
        title: 'Nurse-led oversight',
        Icon: 'FaUserMd',
        description: '',
        buildDescription: () =>
            'Registered nurses supervise every plan, anticipating needs before they become urgent issues.'
    },
    {
        title: 'Flexible scheduling',
        Icon: 'FaCalendarCheck',
        description: '',
        buildDescription: city =>
            `Hourly, overnight, or live-in support adapts to the pace of ${city} households.`
    },
    {
        title: 'Rapid communication',
        Icon: 'FaPhone',
        description: '',
        buildDescription: city =>
            `Families receive fast updates after each visit so decisions stay on track in ${city}.`
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
    const canonical = `https://www.360degreecare.net/services/${SERVICE_SLUG}/essex-county/${citySlug}`

    return {
        slug: `/services/${SERVICE_SLUG}/essex-county/${citySlug}`,
        metadata: {
            title: `${SERVICE_NAME} in ${cityName}, NJ | 360 Degree Care`,
            description: options.heroDescription,
            keywords: `${SERVICE_NAME.toLowerCase()} ${cityName}, essex county personal care, in-home care ${cityName}`,
            alternates: { canonical },
            robots: { index: false, follow: true }
        },
        schemaData: buildSchema(SERVICE_NAME, cityName, PERSONAL_CARE_FAQS, {
            serviceSlug: SERVICE_SLUG,
            description: options.heroDescription
        }),
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
            `${SERVICE_NAME} Tasks Covered in ${cityName}`,
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

export const essexCountyPersonalCareCities: Record<
    string,
    CityServicePageContent
> = {
    newark: buildCityContent('Newark', 'newark', {
        heroDescription:
            'Personal care support that keeps Newark residents thriving across Ironbound apartments, Weequahic homes, and downtown high-rises.',
        overviewDescription:
            'We coordinate around University Hospital and Newark Beth Israel appointments, NJPAC outings, and NJ Transit schedules so loved ones maintain independence without sacrificing safety.',
        serviceHeader: 'Personal care coverage across Newark neighborhoods',
        benefitsHeader: 'Why Newark families rely on our care team',
        ctaDescription:
            'Tell us about your Newark household—we’ll create a personal care rhythm that respects culture, language, and work schedules.'
    }),
    'east-orange': buildCityContent('East Orange', 'east-orange', {
        heroDescription:
            'Thoughtful personal care that supports East Orange’s historic homes, transit commuters, and extended families.',
        overviewDescription:
            'Caregivers navigate Brick Church high-rises, Elmwood neighborhoods, and apartment buildings along Central Avenue while coordinating with East Orange General Hospital and VA Medical Center appointments.',
        serviceHeader: 'Personal care services available in East Orange',
        benefitsHeader: 'Benefits East Orange households experience',
        ctaDescription:
            'Share your East Orange care goals and we’ll shape aide visits that keep routines steady and dignified.'
    }),
    montclair: buildCityContent('Montclair', 'montclair', {
        heroDescription:
            'Concierge-level personal care for Montclair residents who value arts, higher education, and walkable neighborhoods.',
        overviewDescription:
            'We align support with Mountainside Medical Center follow-ups, Montclair State events, and bustling downtown schedules. Caregivers respect brownstone layouts, condo associations, and active adult communities.',
        serviceHeader: 'Personal care services throughout Montclair',
        benefitsHeader: 'Why Montclair families choose 360 Degree Care',
        ctaDescription:
            'Let’s design a Montclair personal care plan that keeps your loved one connected to the community they love.'
    }),
    bloomfield: buildCityContent('Bloomfield', 'bloomfield', {
        heroDescription:
            'Personal care teams help Bloomfield seniors stay comfortable between Brookdale Park walks, Bloomfield Station errands, and Clara Maass appointments.',
        overviewDescription:
            'We navigate brownstone apartments and classic colonials, schedule around NJ Transit departures and church calendars, and keep hydration, meals, and mobility on track even during busy commuter hours.',
        serviceHeader: 'Personal care support across Bloomfield',
        benefitsHeader: 'Why Bloomfield households trust our caregivers',
        ctaDescription:
            'Tell us about your Bloomfield routine and we will build respectful coverage that keeps loved ones at home.'
    }),
    irvington: buildCityContent('Irvington', 'irvington', {
        heroDescription:
            'Personal care aides help Irvington seniors stay steady amid bustling Springfield Avenue blocks and Newark Beth Israel follow-ups.',
        overviewDescription:
            'We coordinate with church groups, senior centers, and bus routes, delivering respectful bathing, meals, and mobility support in walk-ups or single-family homes.',
        serviceHeader: 'Personal care coverage throughout Irvington',
        benefitsHeader: 'Why Irvington families lean on our caregivers',
        ctaDescription:
            'Tell us about your Irvington household and we will keep daily routines on track.'
    }),
    'west-orange': buildCityContent('West Orange', 'west-orange', {
        heroDescription:
            'Personal care services keep West Orange seniors confident on hilly streets near South Mountain, Llewellyn Park, and Saint Barnabas Medical Center.',
        overviewDescription:
            'We plan around synagogue and church calendars, coordinate transportation to Saint Barnabas, and adjust for multi-level homes common across the reservation ridge.',
        serviceHeader: 'Personal care coverage across West Orange',
        benefitsHeader: 'Why West Orange families partner with us',
        ctaDescription:
            'Tell us about your West Orange routine and we will tailor in-home support that works year-round.'
    })
}
