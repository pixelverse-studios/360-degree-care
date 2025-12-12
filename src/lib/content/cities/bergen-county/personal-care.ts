import { CityServicePageContent, LocalResource } from '../../city-service-types'
import { FAQ, PERSONAL_CARE_FAQS } from '@/utils/faqs'
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

// Fort Lee city-specific FAQs for Personal Care
const FORT_LEE_PERSONAL_CARE_FAQS: FAQ[] = [
    {
        question:
            'Do your aides help with high-rise building logistics in Fort Lee?',
        answer: "Yes, our caregivers are experienced with elevator schedules, doorman protocols, and parking garage access common in Fort Lee's high-rise buildings."
    },
    {
        question: 'Can you coordinate care with Holy Name Medical Center?',
        answer: 'Absolutely. We regularly coordinate with Holy Name and other Fort Lee-area hospitals for discharge planning and follow-up care.'
    }
]

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
            keywords: `${SERVICE_NAME.toLowerCase()} ${cityName}, ${SERVICE_NAME.toLowerCase()} Bergen County, in-home care ${cityName}`,
            alternates: { canonical }
        },
        schemaData: buildSchema(SERVICE_NAME, cityName, PERSONAL_CARE_FAQS, {
            serviceSlug: SERVICE_SLUG,
            description: options.heroDescription,
            cityFaqs: options.cityFaqs
        }),
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
            items: PERSONAL_CARE_FAQS,
            cityItems: options.cityFaqs
        },
        ...(options.localResources && {
            localResources: {
                header: `${cityName} Healthcare Resources`,
                items: options.localResources
            }
        }),
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
            "Share what a typical day looks like in Fort Lee and we'll tailor a personal care schedule that respects apartment logistics, work commutes, and medical appointments.",
        cityFaqs: FORT_LEE_PERSONAL_CARE_FAQS,
        localResources: FORT_LEE_LOCAL_RESOURCES
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
    }),
    hackensack: buildCityContent('Hackensack', 'hackensack', {
        heroDescription:
            'Personal care specialists supporting Hackensack residents who rely on HUMC, downtown Main Street amenities, and the county’s busiest service corridors.',
        overviewDescription:
            'As the Bergen County seat, Hackensack offers world-class care at Hackensack University Medical Center, vibrant churches, and high-density apartment living near the bus transit center. We coordinate schedules around clinic visits, courthouse appointments, and traffic on River Street so loved ones stay confident at home.',
        serviceHeader: 'Hands-on support tailored to Hackensack households',
        benefitsHeader: 'Why Hackensack families call 360 Degree Care first',
        ctaDescription:
            'Let’s align your Hackensack care plan with hospital follow-ups, Main Street errands, and family work schedules so daily routines stay on track.'
    }),
    teaneck: buildCityContent('Teaneck', 'teaneck', {
        heroDescription:
            'Culturally sensitive personal care that keeps Teaneck seniors thriving near Holy Name Medical Center, Cedar Lane, and Queen Anne Road congregations.',
        overviewDescription:
            'We understand Teaneck’s walkable neighborhoods, Sabbath observance considerations, and the importance of timely support for Holy Name appointments. From Glenpointe high-rises to single-family homes by Votee Park, caregivers follow personalized care plans while respecting each household’s traditions.',
        serviceHeader: 'Personal care services delivered across Teaneck',
        benefitsHeader: 'Benefits Teaneck families experience with our team',
        ctaDescription:
            'Share your Teaneck household’s routines and cultural needs—we’ll design personal care visits that honor them while keeping your loved one safe.'
    }),
    'fair-lawn': buildCityContent('Fair Lawn', 'fair-lawn', {
        heroDescription:
            'Reliable personal care for Fair Lawn, from Radburn’s historic district to the Route 4 medical corridor and commuter rail neighborhoods.',
        overviewDescription:
            'Our aides help Fair Lawn residents stay connected to houses of worship, Trader Joe’s, and recreation at Memorial Park while managing mobility changes. Coordinated support around Valley Health facilities and the Broadway train station ensures families never miss important appointments.',
        serviceHeader: 'Personal care coverage for every corner of Fair Lawn',
        benefitsHeader: 'Why Fair Lawn trusts our concierge-level care',
        ctaDescription:
            'Tell us about your Fair Lawn routine and we’ll match you with caregivers who know local traffic, apartment layouts, and community resources.'
    })
}
