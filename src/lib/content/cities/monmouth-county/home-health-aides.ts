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
            `Certified aides in ${city} manage bathing, grooming, toileting, and dressing while preserving dignity.`
    },
    {
        title: 'Medication & vitals monitoring',
        Icon: 'FaCapsules',
        description: '',
        buildDescription: city =>
            `We coordinate reminders, observe side effects, and share vitals so ${city} families and clinicians stay aligned.`
    },
    {
        title: 'Mobility & transfer support',
        Icon: 'FaPersonWalking',
        description: '',
        buildDescription: city =>
            `From bed-to-chair transitions to supervised walks, aides keep ${city} residents safely on the move.`
    },
    {
        title: 'Overnight and respite coverage',
        Icon: 'FaBed',
        description: '',
        buildDescription: city =>
            `Need coverage during the night or while caregivers travel? We provide dependable aide support across ${city}.`
    }
]

const baseBenefits: DescriptiveItem[] = [
    {
        title: 'RN supervision',
        Icon: 'FaHouseChimneyMedical',
        description: '',
        buildDescription: () =>
            'Registered nurses supervise every case, ensuring aides follow clinical protocols and escalate concerns quickly.'
    },
    {
        title: 'Hospital-to-home transitions',
        Icon: 'FaHospital',
        description: '',
        buildDescription: city =>
            `We coordinate with discharge planners so ${city} clients return home from hospital stays with the right plan in place.`
    },
    {
        title: 'Consistency you can trust',
        Icon: 'FaUserShield',
        description: '',
        buildDescription: () =>
            'We prioritize consistent scheduling so your loved one builds trust with familiar caregivers.'
    },
    {
        title: 'Transparent communication',
        Icon: 'FaPhone',
        description: '',
        buildDescription: city =>
            `Detailed visit notes and quick phone updates keep ${city} families in the loop at all times.`
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

export const monmouthCountyHomeHealthAideCities: Record<
    string,
    CityServicePageContent
> = {
    middletown: buildCityContent('Middletown', 'middletown', {
        heroDescription:
            'Licensed aides support Middletown residents returning from Riverview or Bayshore hospital stays, ensuring smooth recoveries at home.',
        overviewDescription:
            'We navigate Bayshore traffic, condo associations in Shadow Lake Village, and ferry-friendly schedules so daily care stays consistent for coastal and inland neighborhoods.',
        benefitsHeader:
            'Why Middletown families partner with our home health aides',
        ctaDescription:
            'Tell us about your Middletown needs—we’ll coordinate aide shifts that follow physician orders and respect family routines.'
    }),
    howell: buildCityContent('Howell', 'howell', {
        heroDescription:
            'Howell households count on our aides for post-surgical care, chronic disease monitoring, and reliable respite coverage.',
        overviewDescription:
            'We coordinate with CentraState, Jersey Shore University Medical Center, and in-home therapy teams while supporting clients across expansive Howell communities.',
        benefitsHeader: 'Benefits Howell families see with our CHHAs',
        ctaDescription:
            'Let us match you with Howell aides who can manage personal care, mobility, and medication support without missing a beat.'
    }),
    marlboro: buildCityContent('Marlboro', 'marlboro', {
        heroDescription:
            'Marlboro residents recovering from surgery or managing complex conditions receive steady, nurse-directed aide support.',
        overviewDescription:
            'We work throughout Morganville, Wickatunk, and adult communities near Route 9, aligning visits with CentraState and RWJ Old Bridge providers.',
        benefitsHeader: 'How Marlboro households benefit from our aides',
        ctaDescription:
            'Share your Marlboro care plan—we’ll assemble aide coverage that adapts to travel schedules and evolving health needs.'
    }),
    freehold: buildCityContent('Freehold', 'freehold', {
        heroDescription:
            'Freehold residents receive dependable aides who manage ADLs, therapy homework, and medication reminders between Route 9 appointments.',
        overviewDescription:
            'We collaborate with CentraState surgeons, outpatient PT, and cardiology groups to keep recoveries on schedule while families juggle work and commuting.',
        benefitsHeader: 'Why Freehold chooses our aides',
        ctaDescription:
            'Let us build your Freehold aide schedule with the coverage you need most.'
    }),
    manalapan: buildCityContent('Manalapan', 'manalapan', {
        heroDescription:
            'CHHAs serve Manalapan seniors who want consistent help in sprawling ranches, farms, and adult communities.',
        overviewDescription:
            'We coordinate with cardiology and oncology groups in Freehold or Marlboro, manage medication boxes, and ensure aides can access gated neighborhoods reliably.',
        benefitsHeader: 'Why Manalapan relies on our aides',
        ctaDescription:
            'Describe your Manalapan coverage needs and we will staff them.'
    }),
    'long-branch': buildCityContent('Long Branch', 'long-branch', {
        heroDescription:
            'Long Branch residents receive consistent aides who handle humidity, sand, and high-rise logistics while keeping care on track.',
        overviewDescription:
            'We escort clients to Monmouth Medical Center, manage hydration during boardwalk seasons, and stay vigilant about storm prep for beachfront homes.',
        benefitsHeader: 'Why Long Branch depends on our aides',
        ctaDescription:
            'Describe your Long Branch coverage needs and we will assign the right aides.'
    })
}
