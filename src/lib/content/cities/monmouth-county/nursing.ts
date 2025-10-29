import { CityServicePageContent } from '../../city-service-types'
import { NURSING_SERVICES_FAQS } from '@/utils/faqs'
import { DescriptiveItem, buildSchema, mapItems } from './helpers'

const SERVICE_NAME = 'Private Duty Nursing'
const SERVICE_SLUG = 'nursing'
const CTA_ORIGIN = 'Nursing Services' as const

const baseServiceItems: DescriptiveItem[] = [
    {
        title: 'Medication & infusion management',
        Icon: 'FaSyringe',
        description: '',
        buildDescription: city =>
            `Licensed nurses in ${city} administer medications, manage infusions, and monitor for adverse reactions.`
    },
    {
        title: 'Wound and post-surgical care',
        Icon: 'FaBandage',
        description: '',
        buildDescription: city =>
            `We deliver meticulous wound care, dressing changes, and surgical recovery oversight for ${city} patients.`
    },
    {
        title: 'Chronic condition monitoring',
        Icon: 'FaHeartPulse',
        description: '',
        buildDescription: city =>
            `Vital signs, respiratory care, and cardiac assessments keep ${city} clinicians updated between office visits.`
    },
    {
        title: 'Care coordination & documentation',
        Icon: 'FaFileMedical',
        description: '',
        buildDescription: () =>
            'We complete detailed charting, coordinate with therapy teams, and share timely updates with physicians.'
    }
]

const baseBenefits: DescriptiveItem[] = [
    {
        title: 'Hospital-level skills at home',
        Icon: 'FaBriefcaseMedical',
        description: '',
        buildDescription: () =>
            'Our nurses bring acute-care experience to the home, managing complex equipment and protocols.'
    },
    {
        title: 'Rapid communication',
        Icon: 'FaPhone',
        description: '',
        buildDescription: city =>
            `Families in ${city} reach a nurse supervisor 24/7 for status updates and urgent questions.`
    },
    {
        title: 'Aligned with your physicians',
        Icon: 'FaUserDoctor',
        description: '',
        buildDescription: city =>
            `We collaborate closely with hospital teams, specialists, and primary care providers serving ${city}.`
    },
    {
        title: 'Preventable readmission focus',
        Icon: 'FaShieldHeart',
        description: '',
        buildDescription: () =>
            'Our proactive monitoring and escalation protocols reduce the risk of ER visits and rehospitalizations.'
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
    const canonical = `https://www.360degreecare.net/services/${SERVICE_SLUG}/monmouth-county/${citySlug}`

    return {
        slug: `/services/${SERVICE_SLUG}/monmouth-county/${citySlug}`,
        metadata: {
            title: `${SERVICE_NAME} in ${cityName}, NJ | 360 Degree Care`,
            description: options.heroDescription,
            keywords: `private duty nursing ${cityName}, in-home nurse ${cityName}, skilled nursing ${cityName}`,
            alternates: { canonical }
        },
        schemaData: buildSchema(SERVICE_NAME, cityName),
        hero: {
            header: `Skilled Nursing Support in ${cityName}`,
            description: options.heroDescription,
            cta: 'Request nursing coverage',
            imageKey: 'nursing-services-hero',
            imageFallback: '/images/nursing-hero.jpg',
            imageAlt: `Private duty nursing in ${cityName}, NJ`
        },
        overview: {
            header: `Why ${cityName} families rely on our nurses`,
            description: options.overviewDescription
        },
        services: mapItems(
            cityName,
            `Clinical nursing services available in ${cityName}`,
            baseServiceItems
        ),
        benefits: mapItems(cityName, options.benefitsHeader, baseBenefits),
        faqs: {
            header: `${cityName} Nursing Services FAQs`,
            items: NURSING_SERVICES_FAQS
        },
        cta: {
            header: `Need advanced clinical care in ${cityName}?`,
            description: options.ctaDescription,
            cta: 'Speak with a nurse supervisor',
            origin: CTA_ORIGIN
        }
    }
}

export const monmouthCountyNursingCities: Record<
    string,
    CityServicePageContent
> = {
    middletown: buildCityContent('Middletown', 'middletown', {
        heroDescription:
            'Middletown families rely on private duty nurses for complex cardiac, pulmonary, and oncology care after discharges from Riverview, Bayshore, and NYC hospitals.',
        overviewDescription:
            'We manage infusion pumps, PICC lines, and ventilator support while coordinating with specialists on the Bayshore, in Red Bank, or across the Hudson via the ferry.',
        benefitsHeader: 'How Middletown households benefit from our nurses',
        ctaDescription:
            'Tell us about your Middletown care plan—we’ll build coverage that keeps your loved one stable at home.'
    }),
    howell: buildCityContent('Howell', 'howell', {
        heroDescription:
            'Howell residents facing long-term ventilator support, ALS, or wound care trust our nurses to deliver hospital-level oversight.',
        overviewDescription:
            'We partner with CentraState and Jersey Shore University Medical Center teams, coordinate therapy visits, and maintain detailed documentation for physicians.',
        benefitsHeader: 'Why Howell chooses our private duty nurses',
        ctaDescription:
            'Share your Howell clinical needs and we’ll align nursing coverage with physician directives and family routines.'
    }),
    marlboro: buildCityContent('Marlboro', 'marlboro', {
        heroDescription:
            'From tracheostomy management to complex cardiac monitoring, Marlboro families count on our nurses for advanced home care.',
        overviewDescription:
            'We integrate with specialists at RWJ Old Bridge, CentraState, and NYU Langone commuting patients, ensuring medication reconciliation and rapid escalation paths.',
        benefitsHeader: 'Benefits Marlboro families see with our nurses',
        ctaDescription:
            'Let’s discuss your Marlboro nursing requirements so we can deploy the right clinical team without delay.'
    })
}
