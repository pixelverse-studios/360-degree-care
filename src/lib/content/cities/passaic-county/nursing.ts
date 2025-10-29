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
            `Licensed nurses in ${city} manage IV therapies, injections, and complex medication regimens accurately.`
    },
    {
        title: 'Wound and post-surgical care',
        Icon: 'FaBandage',
        description: '',
        buildDescription: city =>
            `We deliver meticulous wound care, ostomy support, and surgical recovery oversight for ${city} patients.`
    },
    {
        title: 'Chronic condition monitoring',
        Icon: 'FaHeartPulse',
        description: '',
        buildDescription: city =>
            `From heart failure to COPD and neurological diagnoses, we track symptoms and escalate changes for ${city} clinicians.`
    },
    {
        title: 'Care coordination & documentation',
        Icon: 'FaFileMedical',
        description: '',
        buildDescription: () =>
            'Our nurses maintain comprehensive records, attend care conferences, and keep physicians informed between visits.'
    }
]

const baseBenefits: DescriptiveItem[] = [
    {
        title: 'Hospital-level skill at home',
        Icon: 'FaBriefcaseMedical',
        description: '',
        buildDescription: () =>
            'Acute-care experienced nurses bring ventilator management, complex medication knowledge, and infection control into the home.'
    },
    {
        title: 'Rapid communication',
        Icon: 'FaPhone',
        description: '',
        buildDescription: city =>
            `Families in ${city} reach a nurse supervisor 24/7 for updates and urgent needs.`
    },
    {
        title: 'Aligned with your physicians',
        Icon: 'FaUserDoctor',
        description: '',
        buildDescription: city =>
            `We coordinate with hospitalists, specialists, and primary care providers serving ${city} residents.`
    },
    {
        title: 'Proactive escalation',
        Icon: 'FaShieldHeart',
        description: '',
        buildDescription: () =>
            'Continuous monitoring and rapid escalation protocols reduce preventable ER visits and readmissions.'
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

export const passaicCountyNursingCities: Record<
    string,
    CityServicePageContent
> = {
    paterson: buildCityContent('Paterson', 'paterson', {
        heroDescription:
            'Paterson residents transitioning from St. Joseph’s Health or rehab centers count on our nurses for hospital-level care at home.',
        overviewDescription:
            'We manage ventilators, PICC lines, and cardiac monitoring while coordinating with multilingual physicians and community health workers throughout Paterson.',
        benefitsHeader: 'How Paterson benefits from our private duty nurses',
        ctaDescription:
            'Tell us about your Paterson clinical needs—our nurses will keep care coordinated and proactive.'
    }),
    clifton: buildCityContent('Clifton', 'clifton', {
        heroDescription:
            'Clifton households rely on private duty nurses to manage complex cases while families balance NYC commutes and busy schedules.',
        overviewDescription:
            'We collaborate with Mountainside, Hackensack Meridian, and St. Joseph’s Wayne specialists, ensuring seamless communication and documentation.',
        benefitsHeader: 'Why Clifton families choose our nursing coverage',
        ctaDescription:
            'Share your Clifton nursing requirements and we’ll tailor coverage that keeps your loved one stable at home.'
    }),
    passaic: buildCityContent('Passaic', 'passaic', {
        heroDescription:
            'From high-acuity cardiac monitoring to complex diabetes management, Passaic residents receive skilled nursing that respects cultural traditions.',
        overviewDescription:
            'We coordinate with St. Mary’s General Hospital, local cardiology and pulmonary practices, and community nurses to maintain excellent outcomes.',
        benefitsHeader: 'Benefits Passaic households see with our nurses',
        ctaDescription:
            'Let us know your Passaic care goals—we’ll deploy nurses who align with family expectations and physician directives.'
    })
}
