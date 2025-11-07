import { CityServicePageContent } from '../../city-service-types'
import { NURSING_SERVICES_FAQS } from '@/utils/faqs'
import { DescriptiveItem, buildSchema, mapItems } from './helpers'

const SERVICE_NAME = 'Private Duty Nursing'
const SERVICE_SLUG = 'nursing'
const CTA_ORIGIN = 'Nursing Services' as const

const baseServiceItems: DescriptiveItem[] = [
    {
        title: 'Intravenous & medication management',
        Icon: 'FaSyringe',
        description: '',
        buildDescription: city =>
            `Licensed nurses in ${city} administer medications, manage IV therapies, and monitor for adverse reactions.`
    },
    {
        title: 'Wound and post-surgical care',
        Icon: 'FaBandage',
        description: '',
        buildDescription: city =>
            `Complex wound care, drains, and catheter management are handled meticulously so ${city} recoveries stay on track.`
    },
    {
        title: 'Chronic condition monitoring',
        Icon: 'FaHeartPulse',
        description: '',
        buildDescription: city =>
            `Vital signs, oxygen saturation, and symptom trends are tracked and relayed to physicians caring for ${city} residents.`
    },
    {
        title: 'Care coordination & documentation',
        Icon: 'FaFileMedical',
        description: '',
        buildDescription: () =>
            'We complete thorough notes, coordinate with therapists, and keep physicians informed between office visits.'
    }
]

const baseBenefits: DescriptiveItem[] = [
    {
        title: 'Hospital-level skill at home',
        Icon: 'FaBriefcaseMedical',
        description: '',
        buildDescription: () =>
            'Our nurses have acute care backgrounds and adapt advanced skills to the home environment.'
    },
    {
        title: 'Rapid response communication',
        Icon: 'FaPhone',
        description: '',
        buildDescription: city =>
            `Families in ${city} can reach their nurse supervisor 24/7 for updates, concerns, or emergent changes.`
    },
    {
        title: 'Coordinated with your physicians',
        Icon: 'FaUserDoctor',
        description: '',
        buildDescription: city =>
            `We integrate seamlessly with local specialists and hospital teams caring for ${city} patients.`
    },
    {
        title: 'Protective oversight',
        Icon: 'FaShieldHeart',
        description: '',
        buildDescription: () =>
            'Nursing leadership reviews every case to ensure protocols, infection control, and documentation meet the highest standards.'
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
            header: `Why families in ${cityName} rely on our nurses`,
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

export const bergenCountyNursingCities: Record<string, CityServicePageContent> =
    {
        'fort-lee': buildCityContent('Fort Lee', 'fort-lee', {
            heroDescription:
                'Hospital-level skill delivered at home — our Fort Lee nurses manage complex cases for residents who prefer the comfort of their high-rise apartments.',
            overviewDescription:
                'We support recoveries after Hackensack Meridian discharges, coordinate with Manhattan specialists, and handle equipment in Fort Lee apartments without disrupting routines.',
            benefitsHeader: 'Why Fort Lee patients trust our nursing team',
            ctaDescription:
                'Tell us about your Fort Lee care needs and we will assemble a nursing schedule that fits physician orders and family expectations.'
        }),
        ridgewood: buildCityContent('Ridgewood', 'ridgewood', {
            heroDescription:
                'Ridgewood families lean on our nurses for post-operative care, chronic disease management, and complex medication regimens.',
            overviewDescription:
                'We collaborate with Valley Hospital clinicians, coordinate with local pharmacies, and provide meticulous documentation so every Ridgewood household feels confident.',
            benefitsHeader: 'Clinical excellence close to home',
            ctaDescription:
                'Share your Ridgewood care plan. We’ll match you with nurses who understand the community and your medical team.'
        }),
        'river-vale': buildCityContent('River Vale', 'river-vale', {
            heroDescription:
                'From ventilator support to cardiac monitoring, River Vale households receive the skilled care they need without leaving home.',
            overviewDescription:
                'Our nurses coordinate with Bergen County specialists, manage complex equipment, and keep River Vale families informed every shift.',
            benefitsHeader: 'River Vale nursing services with 360 Degree Care',
            ctaDescription:
                'Let’s design a River Vale nursing schedule that respects physician directives and family routines.'
        }),
        hackensack: buildCityContent('Hackensack', 'hackensack', {
            heroDescription:
                'Hackensack residents returning from HUMC, rehab centers, or dialysis clinics count on our nurses for hospital-level oversight at home.',
            overviewDescription:
                'We support infusion therapy, complex wound care, and cardiology orders while communicating directly with physicians along Prospect Avenue and coordinating with family caregivers.',
            benefitsHeader: 'Why Hackensack chooses our private duty nurses',
            ctaDescription:
                'Tell us about your Hackensack care plan—we’ll deploy nurses who keep you connected to specialists without constant readmissions.'
        }),
        teaneck: buildCityContent('Teaneck', 'teaneck', {
            heroDescription:
                'Teaneck households balancing Holy Name Medical Center care plans and home comfort rely on our culturally aware nursing team.',
            overviewDescription:
                'We manage ventilators, trachs, cardiac monitors, and diabetic care while respecting observances and coordinating with Holy Name physicians and community supports.',
            benefitsHeader: 'How Teaneck families benefit from our nurses',
            ctaDescription:
                'Share your Teaneck nursing requirements and we’ll tailor coverage that honors your household’s routines and clinical goals.'
        }),
        'fair-lawn': buildCityContent('Fair Lawn', 'fair-lawn', {
            heroDescription:
                'From Route 208 commuters to Radburn residents, Fair Lawn families count on our nurses for post-surgical and chronic condition expertise.',
            overviewDescription:
                'We coordinate with Valley Health specialists, manage complex medication setups, and keep meticulous records so physicians and families stay aligned.',
            benefitsHeader: 'Why Fair Lawn trusts our nursing coverage',
            ctaDescription:
                'Let’s map out skilled nursing in Fair Lawn that keeps your loved one stable at home and out of the ER.'
        }),
        paramus: buildCityContent('Paramus', 'paramus', {
            heroDescription:
                'Skilled nurses bridge Valley Hospital, HUMC, and rehab discharges so Paramus patients heal at home without repeat admissions.',
            overviewDescription:
                'We manage IV antibiotics, complex wound care, and cardiac monitoring while coordinating with specialists along Route 17 and keeping families updated even when they commute into Manhattan.',
            benefitsHeader: 'Why Paramus households trust our nurses',
            ctaDescription:
                'Let us plan private duty nursing in Paramus that keeps your loved one safe between appointments.'
        }),
        englewood: buildCityContent('Englewood', 'englewood', {
            heroDescription:
                'Englewood residents recovering from cardiac, oncology, or orthopedic procedures trust our nurses for hospital-level oversight at home.',
            overviewDescription:
                'We collaborate with Englewood Health and Columbia specialists, manage infusion pumps, and relay vitals to physicians so families avoid unnecessary returns to the city.',
            benefitsHeader: 'Why Englewood patients rely on our nurses',
            ctaDescription:
                'Let us coordinate Englewood nursing coverage that keeps complex care on track.'
        }),
        westwood: buildCityContent('Westwood', 'westwood', {
            heroDescription:
                'Private duty nurses support Westwood patients managing cardiac, respiratory, or neurologic conditions at home.',
            overviewDescription:
                'We integrate with Pascack Valley specialists, oversee IV therapies, and track vitals while updating adult children who commute via NJ Transit.',
            benefitsHeader: 'Clinical peace of mind for Westwood families',
            ctaDescription:
                'Let us plan skilled nursing in Westwood that keeps your loved one out of the hospital.'
        })
    }
