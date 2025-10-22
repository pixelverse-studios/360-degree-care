import { CityServicePageContent } from '../../city-service-types'
import { STAFFING_SERVICES_FAQS } from '@/utils/faqs'
import { DescriptiveItem, buildSchema, mapItems } from './helpers'

const SERVICE_NAME = 'Healthcare Staffing'
const SERVICE_SLUG = 'staffing'
const CTA_ORIGIN = 'Staffing' as const

const baseServiceItems: DescriptiveItem[] = [
    {
        title: 'Clinical staffing coverage',
        Icon: 'FaUserNurse',
        description: '',
        buildDescription: city =>
            `We supply credentialed nurses, aides, and companions ready to support ${city} facilities and private households.`
    },
    {
        title: 'Temp-to-perm evaluation',
        Icon: 'FaClipboardCheck',
        description: '',
        buildDescription: () =>
            'Trial field performance before extending offers — we manage payroll, onboarding, and compliance.'
    },
    {
        title: 'Rapid census surge support',
        Icon: 'FaBolt',
        description: '',
        buildDescription: city =>
            `When ${city} partners face seasonal demand or last-minute callouts, we mobilize coverage fast.`
    },
    {
        title: 'Specialized placements',
        Icon: 'FaUserDoctor',
        description: '',
        buildDescription: () =>
            'Nurse supervisors, dementia specialists, and administrative coordinators sourced to meet unique needs.'
    }
]

const baseBenefits: DescriptiveItem[] = [
    {
        title: 'Vetted Monmouth talent',
        Icon: 'FaShieldHeart',
        description: '',
        buildDescription: () =>
            'Background checks, skills validation, and competency reviews precede every assignment.'
    },
    {
        title: 'Local commute advantage',
        Icon: 'FaUsers',
        description: '',
        buildDescription: city =>
            `We maintain an active roster of clinicians who already commute comfortably to ${city}.`
    },
    {
        title: 'Operational insight',
        Icon: 'FaChartLine',
        description: '',
        buildDescription: () =>
            'Staffing leaders consult on scheduling, orientation, and retention best practices to stabilize your workforce.'
    },
    {
        title: 'Transparent partnership',
        Icon: 'FaHandshake',
        description: '',
        buildDescription: city =>
            `Expect proactive communication, performance reporting, and responsive adjustments for ${city} engagements.`
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
    const canonical = `https://360degreecare.net/services/${SERVICE_SLUG}/monmouth-county/${citySlug}`

    return {
        slug: `/services/${SERVICE_SLUG}/monmouth-county/${citySlug}`,
        metadata: {
            title: `${SERVICE_NAME} in ${cityName}, NJ | 360 Degree Care`,
            description: options.heroDescription,
            keywords: `healthcare staffing ${cityName}, medical staffing ${cityName}, clinical staffing ${cityName}`,
            alternates: { canonical }
        },
        schemaData: buildSchema(SERVICE_NAME, cityName),
        hero: {
            header: `Reliable Healthcare Staffing in ${cityName}`,
            description: options.heroDescription,
            cta: 'Request staffing support',
            imageKey: 'staffing-services-hero',
            imageFallback: '/images/staffing-hero.jpg',
            imageAlt: `Healthcare staffing in ${cityName}, NJ`
        },
        overview: {
            header: `Staffing coverage tailored to ${cityName}`,
            description: options.overviewDescription
        },
        services: mapItems(
            cityName,
            `Staffing services available in ${cityName}`,
            baseServiceItems
        ),
        benefits: mapItems(cityName, options.benefitsHeader, baseBenefits),
        faqs: {
            header: `${cityName} Staffing FAQs`,
            items: STAFFING_SERVICES_FAQS
        },
        cta: {
            header: `Need dependable staffing in ${cityName}?`,
            description: options.ctaDescription,
            cta: 'Schedule a staffing consult',
            origin: CTA_ORIGIN
        }
    }
}

export const monmouthCountyStaffingCities: Record<
    string,
    CityServicePageContent
> = {
    middletown: buildCityContent('Middletown', 'middletown', {
        heroDescription:
            'From Bayshore practices to concierge households overlooking the Navesink, Middletown partners count on our rapid staffing response.',
        overviewDescription:
            'We provide licensed clinicians familiar with ferry schedules, Route 35 corridors, and weekend coverage needs during the busy shore season.',
        benefitsHeader: 'Why Middletown organizations rely on our staffing',
        ctaDescription:
            'Describe your Middletown staffing gaps. We’ll mobilize vetted professionals ready to start immediately.'
    }),
    howell: buildCityContent('Howell', 'howell', {
        heroDescription:
            'Howell healthcare providers and private families access a deep bench of Monmouth-based clinicians through our staffing division.',
        overviewDescription:
            'We support practices along Route 9, assisted living communities, and in-home clients across expansive neighborhoods with credentialed caregivers.',
        benefitsHeader: 'Staffing advantages for Howell partners',
        ctaDescription:
            'Share your Howell coverage needs and we’ll build a dependable staffing pipeline.'
    }),
    marlboro: buildCityContent('Marlboro', 'marlboro', {
        heroDescription:
            'Marlboro concierge households and outpatient clinics trust us to deliver polished, professional staff who understand high-touch expectations.',
        overviewDescription:
            'We source clinicians comfortable with upscale residences, corporate campuses, and fast-paced practices along Route 9 and 520.',
        benefitsHeader: 'What Marlboro gains with 360 Degree Care Staffing',
        ctaDescription:
            'Let’s discuss your Marlboro staffing goals so we can pair you with the right caregivers, nurses, and coordinators.'
    })
}
