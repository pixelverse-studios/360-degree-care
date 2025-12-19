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
            `Licensed nurses in ${city} administer medications, manage infusion therapy, and prevent adverse reactions.`
    },
    {
        title: 'Wound and post-surgical care',
        Icon: 'FaBandage',
        description: '',
        buildDescription: city =>
            `We deliver meticulous wound care, ostomy management, and surgical recovery oversight for ${city} patients.`
    },
    {
        title: 'Complex condition monitoring',
        Icon: 'FaHeartPulse',
        description: '',
        buildDescription: city =>
            `Cardiac, pulmonary, and neurological monitoring keeps ${city} physicians informed between office visits.`
    },
    {
        title: 'Care coordination & documentation',
        Icon: 'FaFileMedical',
        description: '',
        buildDescription: () =>
            'Nurses maintain detailed records, attend care conferences, and coordinate with interdisciplinary teams.'
    }
]

const baseBenefits: DescriptiveItem[] = [
    {
        title: 'Hospital-level skill at home',
        Icon: 'FaBriefcaseMedical',
        description: '',
        buildDescription: () =>
            'Our nurses bring ICU, med-surg, and step-down experience to the home, delivering advanced care safely.'
    },
    {
        title: 'Rapid communication',
        Icon: 'FaPhone',
        description: '',
        buildDescription: city =>
            `${city} families access a nurse supervisor 24/7 for updates and urgent clinical questions.`
    },
    {
        title: 'Aligned with your physicians',
        Icon: 'FaUserDoctor',
        description: '',
        buildDescription: city =>
            `We collaborate closely with hospitalists and specialists serving ${city} so plans stay cohesive.`
    },
    {
        title: 'Preventable readmission focus',
        Icon: 'FaShieldHeart',
        description: '',
        buildDescription: () =>
            'Proactive monitoring and escalation protocols reduce avoidable ER visits and hospital readmissions.'
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
    const canonical = `https://www.360degreecare.net/services/${SERVICE_SLUG}/essex-county/${citySlug}`

    return {
        slug: `/services/${SERVICE_SLUG}/essex-county/${citySlug}`,
        metadata: {
            title: `${SERVICE_NAME} in ${cityName}, NJ | 360 Degree Care`,
            description: options.heroDescription,
            keywords: `private duty nursing ${cityName}, in-home nurse ${cityName}, skilled nursing ${cityName}`,
            alternates: { canonical },
            robots: { index: false, follow: true }
        },
        schemaData: buildSchema(SERVICE_NAME, cityName, NURSING_SERVICES_FAQS, {
            serviceSlug: SERVICE_SLUG,
            description: options.heroDescription
        }),
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

export const essexCountyNursingCities: Record<string, CityServicePageContent> =
    {
        newark: buildCityContent('Newark', 'newark', {
            heroDescription:
                'Newark residents returning from University Hospital, Beth Israel, or Sloan Kettering rely on our nurses for hospital-level care at home.',
            overviewDescription:
                'We manage ventilators, cardiac monitors, and infusion therapy while coordinating with physicians across the city’s major health systems.',
            benefitsHeader: 'How Newark households benefit from our nurses',
            ctaDescription:
                'Tell us about your Newark care plan—we’ll deploy nurses who maintain stability and reduce readmissions.'
        }),
        'east-orange': buildCityContent('East Orange', 'east-orange', {
            heroDescription:
                'East Orange families count on our nurses to manage chronic conditions, post-acute care, and complex medication regimens.',
            overviewDescription:
                'We collaborate with CareWell Health, the VA Medical Center, and RWJBarnabas specialists to maintain continuity of care.',
            benefitsHeader: 'Why East Orange chooses our private duty nurses',
            ctaDescription:
                'Share your East Orange nursing requirements and we’ll tailor coverage that fits physician directives and family schedules.'
        }),
        montclair: buildCityContent('Montclair', 'montclair', {
            heroDescription:
                'Montclair households receive concierge-level nursing for oncology, cardiac, and neurological conditions without leaving home.',
            overviewDescription:
                'We partner with Mountainside Medical Center, Cooperman Barnabas campus, and Manhattan specialists commuting clients rely on.',
            benefitsHeader:
                'Benefits Montclair families notice with our nurses',
            ctaDescription:
                'Let’s align your Montclair clinical needs with a nursing schedule that keeps progress steady.'
        }),
        bloomfield: buildCityContent('Bloomfield', 'bloomfield', {
            heroDescription:
                'Skilled nurses manage IV therapies, wound care, and respiratory plans for Bloomfield patients recovering from hospital stays.',
            overviewDescription:
                'We collaborate with Clara Maass and Saint Barnabas teams, manage documentation, and monitor vitals so families avoid late-night ER runs.',
            benefitsHeader:
                'Bloomfield nursing advantages with 360 Degree Care',
            ctaDescription:
                'Tell us about your Bloomfield care plan and we will schedule nurses accordingly.'
        }),
        irvington: buildCityContent('Irvington', 'irvington', {
            heroDescription:
                'Private duty nurses support Irvington patients managing cardiac, respiratory, or wound-care needs after Beth Israel stays.',
            overviewDescription:
                'We make home visits across Springfield Avenue corridors, coordinate with local clinics, and keep families updated through text or WhatsApp as needed.',
            benefitsHeader: 'Clinical reassurance for Irvington households',
            ctaDescription:
                'Let us plan skilled nursing in Irvington so you are never alone with complex care.'
        }),
        'west-orange': buildCityContent('West Orange', 'west-orange', {
            heroDescription:
                'Advanced nurses support West Orange patients recovering from cardiology, oncology, or neuro care at Saint Barnabas.',
            overviewDescription:
                'We manage infusions, wound vacs, and ventilator checks while updating physicians and adult children who may live across the reservation.',
            benefitsHeader: 'Clinical assurance for West Orange families',
            ctaDescription:
                'Tell us about your West Orange nursing needs and we will build the right coverage.'
        })
    }
