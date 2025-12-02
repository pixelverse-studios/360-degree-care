import { CityServicePageContent } from '../../city-service-types'
import { HOME_HEALTH_AIDES_FAQS } from '@/utils/faqs'
import { DescriptiveItem, buildSchema, mapItems } from './helpers'

const SERVICE_NAME = 'Home Health Aides'
const SERVICE_SLUG = 'home-health-aides'
const CTA_ORIGIN = 'Home Health Aides' as const

const baseServiceItems: DescriptiveItem[] = [
    {
        title: 'Hands-on personal care',
        Icon: 'FaUserNurse',
        description: '',
        buildDescription: city =>
            `Certified aides in ${city} manage bathing, grooming, toileting, and dressing with dignity.`
    },
    {
        title: 'Medication & vitals monitoring',
        Icon: 'FaCapsules',
        description: '',
        buildDescription: city =>
            `We coordinate reminders, observe for side effects, and track vitals so ${city} clinicians stay informed.`
    },
    {
        title: 'Mobility & transfers',
        Icon: 'FaPersonWalking',
        description: '',
        buildDescription: city =>
            `From bed transfers to elevator logistics, aides keep ${city} residents moving safely.`
    },
    {
        title: 'Respite and overnight coverage',
        Icon: 'FaBed',
        description: '',
        buildDescription: city =>
            `We deliver dependable aide coverage during the night or when ${city} caregivers travel.`
    }
]

const baseBenefits: DescriptiveItem[] = [
    {
        title: 'RN oversight',
        Icon: 'FaHouseChimneyMedical',
        description: '',
        buildDescription: () =>
            'Registered nurses supervise every case, ensuring aides follow clinical protocols and escalate changes quickly.'
    },
    {
        title: 'Hospital-to-home coordination',
        Icon: 'FaHospital',
        description: '',
        buildDescription: city =>
            `We partner with discharge planners at ${city} hospitals so recoveries remain on schedule at home.`
    },
    {
        title: 'Consistent staffing',
        Icon: 'FaUserShield',
        description: '',
        buildDescription: () =>
            'We prioritize continuity so your loved one sees familiar faces who understand their preferences.'
    },
    {
        title: 'Real-time communication',
        Icon: 'FaPhone',
        description: '',
        buildDescription: city =>
            `Families receive quick updates and thorough visit recaps to stay connected to care in ${city}.`
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
    const canonical = `https://www.360degreecare.net/services/${SERVICE_SLUG}/passaic-county/${citySlug}`

    return {
        slug: `/services/${SERVICE_SLUG}/passaic-county/${citySlug}`,
        metadata: {
            title: `${SERVICE_NAME} in ${cityName}, NJ | 360 Degree Care`,
            description: options.heroDescription,
            keywords: `home health aides ${cityName}, CHHA ${cityName}, in-home care ${cityName}`,
            alternates: { canonical }
        },
        schemaData: buildSchema(
            SERVICE_NAME,
            cityName,
            HOME_HEALTH_AIDES_FAQS,
            {
                serviceSlug: SERVICE_SLUG,
                description: options.heroDescription
            }
        ),
        hero: {
            header: `Experienced Home Health Aides in ${cityName}`,
            description: options.heroDescription,
            cta: 'Request a home health aide',
            imageKey: 'home-health-aides-hero',
            imageFallback: '/images/home-health-aide-hero.jpg',
            imageAlt: `Home health aide services in ${cityName}, NJ`
        },
        overview: {
            header: `Clinical aide support tailored to ${cityName}`,
            description: options.overviewDescription
        },
        services: mapItems(
            cityName,
            `What Our ${cityName} Home Health Aides Provide`,
            baseServiceItems
        ),
        benefits: mapItems(cityName, options.benefitsHeader, baseBenefits),
        faqs: {
            header: `${cityName} Home Health Aide FAQs`,
            items: HOME_HEALTH_AIDES_FAQS
        },
        cta: {
            header: `Need dependable aide coverage in ${cityName}?`,
            description: options.ctaDescription,
            cta: 'Talk with our nursing team',
            origin: CTA_ORIGIN
        }
    }
}

export const passaicCountyHomeHealthAideCities: Record<
    string,
    CityServicePageContent
> = {
    paterson: buildCityContent('Paterson', 'paterson', {
        heroDescription:
            'Paterson families count on our aides to manage hands-on care after St. Joseph’s discharges and long-term chronic conditions.',
        overviewDescription:
            'We navigate crowded multi-family homes, coordinate with bilingual clinicians, and maintain consistent routines despite hectic schedules.',
        benefitsHeader:
            'Why Paterson residents trust our home health aide coverage',
        ctaDescription:
            'Tell us about your Paterson support needs—we’ll structure aide shifts that keep progress steady.'
    }),
    clifton: buildCityContent('Clifton', 'clifton', {
        heroDescription:
            'Clifton households rely on certified aides for personal care, dementia support, and reliable respite coverage.',
        overviewDescription:
            'We coordinate with St. Joseph’s Wayne, Hackensack Meridian, and Mountainside physicians while supporting clients across Clifton’s neighborhoods.',
        benefitsHeader: 'How Clifton families benefit from our CHHAs',
        ctaDescription:
            'Share your Clifton care plan and we’ll match aides who can manage every task with professionalism and heart.'
    }),
    passaic: buildCityContent('Passaic', 'passaic', {
        heroDescription:
            'City of Passaic residents receive culturally sensitive aide support that respects family rhythms, language, and faith.',
        overviewDescription:
            'We assist residents in high-rise apartments, multi-generational homes, and senior housing while coordinating with St. Mary’s General Hospital and community health clinics.',
        benefitsHeader: 'Benefits Passaic households see with our aides',
        ctaDescription:
            'Let’s plan aide coverage in Passaic that keeps your loved one safe, comfortable, and on schedule.'
    }),
    wayne: buildCityContent('Wayne', 'wayne', {
        heroDescription:
            'Home health aides support Wayne residents recovering from orthopedic surgeries, cardiac events, or chronic conditions.',
        overviewDescription:
            'We manage medication boxes, therapy routines, and snow-day logistics across Packanack, Pines Lake, and high-traffic corridors so families maintain peace of mind.',
        benefitsHeader: 'Why Wayne counts on our aides',
        ctaDescription:
            'Tell us about your Wayne care plan and we will staff it.'
    }),
    totowa: buildCityContent('Totowa', 'totowa', {
        heroDescription:
            'Totowa residents receive dependable aides who can handle steep steps, tight driveways, and short-notice schedule changes.',
        overviewDescription:
            'We coordinate with St. Joseph’s Home for the Elderly, outpatient clinics, and township EMTs to keep plans proactive.',
        benefitsHeader: 'Why Totowa trusts our CHHAs',
        ctaDescription:
            'Describe your Totowa coverage needs and we will arrange aides quickly.'
    }),
    'west-milford': buildCityContent('West Milford', 'west-milford', {
        heroDescription:
            'Reliable aides brave Route 23 hills, private dirt roads, and winter weather to keep West Milford clients safe at home.',
        overviewDescription:
            'We build schedules with backup coverage, stock emergency supplies, and coordinate with paramedics or Atlantic Health partners so care never pauses.',
        benefitsHeader: 'Why West Milford trusts our CHHAs',
        ctaDescription:
            'Describe your West Milford environment and we will assign aides equipped for it.'
    })
}
