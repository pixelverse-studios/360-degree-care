import { CityServicePageContent } from '../../city-service-types'
import { ELDER_CARE_CONSULTING_FAQS } from '@/utils/faqs'
import { DescriptiveItem, buildSchema, mapItems } from './helpers'

const SERVICE_NAME = 'Elder Care Consulting'
const SERVICE_SLUG = 'elder-care'
const CTA_ORIGIN = 'Elder Care Consulting' as const

const baseServiceItems: DescriptiveItem[] = [
    {
        title: 'Comprehensive assessments',
        Icon: 'FaClipboard',
        description: '',
        buildDescription: city =>
            `We review clinical history, home safety, and family goals to orient ${city} households around the same facts.`
    },
    {
        title: 'Actionable planning documents',
        Icon: 'FaMap',
        description: '',
        buildDescription: city =>
            `Each consult delivers a written roadmap covering in-home support, housing options, and community programs serving ${city}.`
    },
    {
        title: 'Family facilitation',
        Icon: 'FaHandshake',
        description: '',
        buildDescription: city =>
            `We mediate conversations so ${city} siblings, spouses, and clinicians align on next steps.`
    },
    {
        title: 'Care team coordination',
        Icon: 'FaUserDoctor',
        description: '',
        buildDescription: () =>
            'With permission, we coordinate with physicians, attorneys, and social services to keep everyone informed.'
    }
]

const baseBenefits: DescriptiveItem[] = [
    {
        title: 'RN-led insight',
        Icon: 'FaScaleBalanced',
        description: '',
        buildDescription: () =>
            'Every consultation is led by an experienced registered nurse who brings objective, clinical perspective.'
    },
    {
        title: 'Local Passaic resources',
        Icon: 'FaMapLocationDot',
        description: '',
        buildDescription: city =>
            `We connect ${city} families with trusted rehab centers, community programs, and specialty providers.`
    },
    {
        title: 'Crisis-ready planning',
        Icon: 'FaLifeRing',
        description: '',
        buildDescription: city =>
            `When emergencies arise in ${city}, we update plans quickly so you can act with confidence.`
    },
    {
        title: 'Concrete next steps',
        Icon: 'FaCheck',
        description: '',
        buildDescription: () =>
            'Consultations end with prioritized actions, timelines, and accountability assignments.'
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
            keywords: `elder care consulting ${cityName}, care planning ${cityName}, senior guidance ${cityName}`,
            alternates: { canonical }
        },
        schemaData: buildSchema(
            SERVICE_NAME,
            cityName,
            ELDER_CARE_CONSULTING_FAQS,
            {
                serviceSlug: SERVICE_SLUG,
                description: options.heroDescription
            }
        ),
        hero: {
            header: `Navigate Senior Care Decisions in ${cityName}`,
            description: options.heroDescription,
            cta: 'Book an elder care consult',
            imageKey: 'elder-care-hero',
            imageFallback: '/images/elder-care-hero.jpg',
            imageAlt: `Elder care consulting in ${cityName}, NJ`
        },
        overview: {
            header: `Guidance for ${cityName} Families`,
            description: options.overviewDescription
        },
        services: mapItems(
            cityName,
            `${SERVICE_NAME} Services in ${cityName}`,
            baseServiceItems
        ),
        benefits: mapItems(cityName, options.benefitsHeader, baseBenefits),
        faqs: {
            header: `${cityName} Elder Care Consulting FAQs`,
            items: ELDER_CARE_CONSULTING_FAQS
        },
        cta: {
            header: `Ready for a Clear Plan in ${cityName}?`,
            description: options.ctaDescription,
            cta: 'Schedule a consultation',
            origin: CTA_ORIGIN
        }
    }
}

export const passaicCountyElderCareCities: Record<
    string,
    CityServicePageContent
> = {
    paterson: buildCityContent('Paterson', 'paterson', {
        heroDescription:
            'Paterson families facing hospital discharges, rehab decisions, or dementia diagnoses rely on our RN consultants for clarity.',
        overviewDescription:
            'We review apartment building safety, coordinate with St. Joseph’s Health and neighborhood clinics, and map multilingual community programs that can help.',
        benefitsHeader: 'Why Paterson households trust our consulting team',
        ctaDescription:
            'Describe your Paterson care questions—we’ll deliver a prioritized plan you can act on immediately.'
    }),
    clifton: buildCityContent('Clifton', 'clifton', {
        heroDescription:
            'Clifton households balancing work commutes, cultural traditions, and complex medical needs gain direction through our consultations.',
        overviewDescription:
            'We assess bi-level homes from Montclair Heights to Athenia, coordinate with Mountainside and Hackensack Meridian physicians, and tailor community resource lists.',
        benefitsHeader: 'Clifton families gain confidence with our guidance',
        ctaDescription:
            'Share your Clifton situation and we’ll outline the next steps to stabilize care and reduce stress.'
    }),
    passaic: buildCityContent('Passaic', 'passaic', {
        heroDescription:
            'Passaic’s multigenerational families use our RN-led guidance to align siblings, manage hospital follow-ups, and plan for the future.',
        overviewDescription:
            'We incorporate language preferences, synagogue or parish support, and St. Mary’s General Hospital partnerships into realistic plans.',
        benefitsHeader: 'How Passaic families benefit from our consultants',
        ctaDescription:
            'Let’s discuss your Passaic caregiving decisions—we’ll provide the roadmap and resources you need.'
    }),
    wayne: buildCityContent('Wayne', 'wayne', {
        heroDescription:
            'Wayne families facing hospital discharges or memory changes lean on our consultants for step-by-step plans.',
        overviewDescription:
            'We evaluate split-level homes near Pines Lake, review benefits, and coordinate with St. Joseph’s Wayne or Chilton providers to keep transitions smooth.',
        benefitsHeader: 'How Wayne families gain clarity',
        ctaDescription:
            'Bring us your Wayne questions and we will outline the next moves.'
    }),
    totowa: buildCityContent('Totowa', 'totowa', {
        heroDescription:
            'Totowa families making fast decisions after rehab or hospital stays rely on our consulting team.',
        overviewDescription:
            'We assess narrow staircases, coordinate with Passaic County resources, and map respite or home care options that work for small-borough budgets.',
        benefitsHeader: 'Clarity Totowa households appreciate',
        ctaDescription:
            'Bring your Totowa care puzzle and we will solve it together.'
    }),
    'west-milford': buildCityContent('West Milford', 'west-milford', {
        heroDescription:
            'West Milford caregivers facing long drives to specialists and limited local services lean on our consultants for strategy.',
        overviewDescription:
            'We evaluate generator readiness, coordinate telehealth, and connect families with Passaic County resources so remote households still get timely support.',
        benefitsHeader: 'Guidance tuned to rural Passaic realities',
        ctaDescription:
            'Bring us your West Milford challenges and we will map practical solutions.'
    })
}
