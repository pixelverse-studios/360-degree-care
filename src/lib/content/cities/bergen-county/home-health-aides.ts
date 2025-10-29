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
            `Certified aides in ${city} assist with bathing, grooming, toileting, and dressing while preserving dignity and comfort.`
    },
    {
        title: 'Medication & vitals monitoring',
        Icon: 'FaCapsules',
        description: '',
        buildDescription: city =>
            `We manage reminders, watch for side effects, and share vitals updates so ${city} families and physicians stay aligned.`
    },
    {
        title: 'Mobility & transfer support',
        Icon: 'FaPersonWalking',
        description: '',
        buildDescription: city =>
            `From bed-to-chair transfers to supervised walks, aides keep ${city} residents safely mobile throughout the day.`
    },
    {
        title: 'Overnight and respite coverage',
        Icon: 'FaBed',
        description: '',
        buildDescription: city =>
            `Need help during the night or while caregivers travel? We provide reliable aide coverage anywhere in ${city}.`
    }
]

const baseBenefits: DescriptiveItem[] = [
    {
        title: 'Nurse-supervised care',
        Icon: 'FaHouseChimneyMedical',
        description: '',
        buildDescription: () =>
            'Registered nurses supervise each case, making sure aides follow the care plan and escalate concerns quickly.'
    },
    {
        title: 'Hospital-to-home transitions',
        Icon: 'FaHospital',
        description: '',
        buildDescription: city =>
            `We coordinate with discharge planners so ${city} patients return home with the right supplies, schedule, and support.`
    },
    {
        title: 'Consistency you can trust',
        Icon: 'FaUserShield',
        description: '',
        buildDescription: () =>
            'We minimize caregiver turnover so your loved one builds rapport with a familiar, compassionate aide.'
    },
    {
        title: 'Thoughtful family updates',
        Icon: 'FaPhone',
        description: '',
        buildDescription: city =>
            `Real-time communication keeps ${city} families informed about progress, appetite, mood, and concerns.`
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
    const canonical = `https://www.360degreecare.net/services/${SERVICE_SLUG}/bergen-county/${citySlug}`

    return {
        slug: `/services/${SERVICE_SLUG}/bergen-county/${citySlug}`,
        metadata: {
            title: `${SERVICE_NAME} in ${cityName}, NJ | 360 Degree Care`,
            description: options.heroDescription,
            keywords: `home health aides ${cityName}, Bergen County CHHA ${cityName}, in-home medical support ${cityName}`,
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

export const bergenCountyHomeHealthAideCities: Record<
    string,
    CityServicePageContent
> = {
    'fort-lee': buildCityContent('Fort Lee', 'fort-lee', {
        heroDescription:
            'Elevator buildings, dense traffic, and quick hospital transfers demand responsive aides. We deliver Fort Lee coverage that keeps loved ones safe at home.',
        overviewDescription:
            'From The Modern to Horizon House, our aides navigate garages, concierge desks, and high-rise logistics with ease while communicating with Hackensack Meridian and NYC specialists as needed.',
        benefitsHeader: 'Why Fort Lee families choose our CHHAs',
        ctaDescription:
            'Share your Fort Lee care schedule and we will build rotating or live-in aide coverage that fits your routines.'
    }),
    ridgewood: buildCityContent('Ridgewood', 'ridgewood', {
        heroDescription:
            'Ridgewood families rely on our aides for discreet support after surgery, during chronic illness, and whenever daily tasks become overwhelming.',
        overviewDescription:
            'We coordinate with Valley Hospital, local pharmacies, and in-home therapists so every Ridgewood visit keeps care on track at home.',
        benefitsHeader:
            'How Ridgewood clients stay independent with 360 Degree Care',
        ctaDescription:
            'Tell us about your Ridgewood home and health goals. We’ll match you with a certified aide and nurse supervisor.'
    }),
    'river-vale': buildCityContent('River Vale', 'river-vale', {
        heroDescription:
            'Our aides support River Vale residents with chronic conditions, providing the hands-on care that keeps everyone comfortable at home.',
        overviewDescription:
            'Whether near the Country Club or along Rivervale Road, we manage mobility, nutrition, and medication routines while coordinating with Bergen County specialists.',
        benefitsHeader: 'Why River Vale families partner with 360 Degree Care',
        ctaDescription:
            'Let’s design an aide schedule for your River Vale household—days, nights, or 24/7 coverage available.'
    }),
    hackensack: buildCityContent('Hackensack', 'hackensack', {
        heroDescription:
            'Certified home health aides help Hackensack residents navigate HUMC discharges, Prospect Avenue specialists, and dense downtown living.',
        overviewDescription:
            'We handle bathing, wound care assistance, medication reminders, and safe mobility while coordinating updates with Hackensack Meridian physicians and managing high-rise building logistics.',
        benefitsHeader:
            'How Hackensack families gain confidence with our aides',
        ctaDescription:
            'Tell us about your Hackensack routines—we’ll align aide coverage with hospital follow-ups, courthouse visits, and family schedules.'
    }),
    teaneck: buildCityContent('Teaneck', 'teaneck', {
        heroDescription:
            'Teaneck households appreciate aides who balance clinical excellence with cultural awareness near Holy Name Medical Center.',
        overviewDescription:
            'From West Englewood to Glenpointe, we provide hands-on personal care, escort clients to Holy Name appointments, and respect observances that shape the rhythm of each home.',
        benefitsHeader: 'Benefits Teaneck families see with our CHHAs',
        ctaDescription:
            'Share your Teaneck care plan—we will assign aides who honor your traditions while keeping daily health routines on track.'
    }),
    'fair-lawn': buildCityContent('Fair Lawn', 'fair-lawn', {
        heroDescription:
            'Reliable home health aides keep Fair Lawn residents steady through therapy, chronic conditions, and respite needs.',
        overviewDescription:
            'We support clients across Radburn, River Road, and Broadway, coordinating with Valley Hospital clinicians and ensuring safe mobility inside split-level homes.',
        benefitsHeader: 'Why Fair Lawn chooses our aide coverage',
        ctaDescription:
            'Let us know your Fair Lawn schedule—we’ll arrange aide shifts that work around commuter hours, therapy sessions, and family commitments.'
    })
}
