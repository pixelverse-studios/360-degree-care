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
            `Certified aides in ${city} manage bathing, grooming, toileting, and dressing respectfully.`
    },
    {
        title: 'Medication & vitals monitoring',
        Icon: 'FaCapsules',
        description: '',
        buildDescription: city =>
            `We coordinate reminders, observe for side effects, and report vitals so ${city} clinicians stay informed.`
    },
    {
        title: 'Mobility & transfers',
        Icon: 'FaPersonWalking',
        description: '',
        buildDescription: city =>
            `From elevator logistics to walk-up apartments, aides keep ${city} residents moving safely.`
    },
    {
        title: 'Overnight and respite coverage',
        Icon: 'FaBed',
        description: '',
        buildDescription: city =>
            `We provide reliable aide coverage during the night or while ${city} caregivers travel.`
    }
]

const baseBenefits: DescriptiveItem[] = [
    {
        title: 'RN oversight',
        Icon: 'FaHouseChimneyMedical',
        description: '',
        buildDescription: () =>
            'Registered nurses supervise every case, ensuring aides follow care plans with clinical precision.'
    },
    {
        title: 'Hospital-to-home transitions',
        Icon: 'FaHospital',
        description: '',
        buildDescription: city =>
            `We coordinate with discharge planners at ${city} hospitals to keep recoveries on track.`
    },
    {
        title: 'Consistent staffing',
        Icon: 'FaUserShield',
        description: '',
        buildDescription: () =>
            'We minimize rotation so your loved one builds trust with familiar faces.'
    },
    {
        title: 'Transparent communication',
        Icon: 'FaPhone',
        description: '',
        buildDescription: city =>
            `Families receive quick updates and visit recaps to stay connected to care in ${city}.`
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
            keywords: `home health aides ${cityName}, CHHA ${cityName}, in-home care ${cityName}`,
            alternates: { canonical }
        },
        schemaData: buildSchema(SERVICE_NAME, cityName),
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

export const essexCountyHomeHealthAideCities: Record<
    string,
    CityServicePageContent
> = {
    newark: buildCityContent('Newark', 'newark', {
        heroDescription:
            'Licensed aides help Newark residents recover after University Hospital and Beth Israel stays while keeping routines stable at home.',
        overviewDescription:
            'We navigate high-rise security, manage multilingual households, and partner with community health workers to deliver consistent, compassionate care.',
        benefitsHeader: 'Why Newark families rely on our CHHAs',
        ctaDescription:
            'Share your Newark care plan—we’ll assign aides who respect your traditions and follow clinical directives.'
    }),
    'east-orange': buildCityContent('East Orange', 'east-orange', {
        heroDescription:
            'East Orange households count on our aides for post-surgical recovery, chronic condition support, and respite coverage.',
        overviewDescription:
            'We coordinate with CareWell Health (East Orange General), the VA Medical Center, and local specialists while supporting clients in historic homes and apartment towers alike.',
        benefitsHeader: 'How East Orange families benefit from our aides',
        ctaDescription:
            'Tell us about your East Orange routines—we’ll build reliable aide schedules that keep everything on track.'
    }),
    montclair: buildCityContent('Montclair', 'montclair', {
        heroDescription:
            'Montclair residents receive discreet, nurse-directed aide support after surgeries, during therapy, or for long-term daily care.',
        overviewDescription:
            'We coordinate with Mountainside Medical Center, outpatient practices along Valley Road, and in-home therapy teams while respecting upscale home expectations.',
        benefitsHeader: 'Benefits Montclair households see with our aides',
        ctaDescription:
            'Let’s develop a Montclair aide plan that protects independence and complements your family’s lifestyle.'
    }),
    bloomfield: buildCityContent('Bloomfield', 'bloomfield', {
        heroDescription:
            'Bloomfield residents receive CHHA support that respects narrow driveways, shared entrances, and busy commuter schedules.',
        overviewDescription:
            'We coordinate with Clara Maass and Mountainside surgeons, provide fall prevention inside multi-level homes, and keep families updated when they take NJ Transit into the city.',
        benefitsHeader: 'Why Bloomfield counts on our aides',
        ctaDescription:
            'Let us tailor Bloomfield aide coverage that fits your household.'
    }),
    irvington: buildCityContent('Irvington', 'irvington', {
        heroDescription:
            'Experienced aides keep Irvington seniors safe inside walk-ups and multifamily homes, following Beth Israel care plans to the letter.',
        overviewDescription:
            'We deliver consistent bathing, medication reminders, and overnight coverage while navigating parking restrictions and high-density living.',
        benefitsHeader: 'Why Irvington trusts our CHHAs',
        ctaDescription:
            'Describe your Irvington schedule and we will assemble dependable aide coverage.'
    }),
    'west-orange': buildCityContent('West Orange', 'west-orange', {
        heroDescription:
            'Home health aides help West Orange residents manage personal care and mobility despite steep driveways and multi-level layouts.',
        overviewDescription:
            'We coordinate with Saint Barnabas, RWJ, and Kessler teams, ensuring equipment, medication, and safety plans stay solid.',
        benefitsHeader: 'Why West Orange trusts our aides',
        ctaDescription:
            'Let us align your West Orange aide schedule with therapy sessions, weather patterns, and family travel.'
    })
}
