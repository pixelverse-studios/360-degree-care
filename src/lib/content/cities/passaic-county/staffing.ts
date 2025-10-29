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
            `We provide credentialed nurses, aides, and companions ready to support ${city} facilities and private clients.`
    },
    {
        title: 'Temp-to-perm flexibility',
        Icon: 'FaClipboardCheck',
        description: '',
        buildDescription: () =>
            'Evaluate personnel in the field before hiring permanently — we handle payroll, compliance, and onboarding.'
    },
    {
        title: 'Rapid surge support',
        Icon: 'FaBolt',
        description: '',
        buildDescription: city =>
            `When ${city} partners face callouts, seasonal demand, or growth, we mobilize coverage quickly.`
    },
    {
        title: 'Specialized placements',
        Icon: 'FaUserDoctor',
        description: '',
        buildDescription: () =>
            'Nurse supervisors, bilingual caregivers, and administrative staff sourced for unique program requirements.'
    }
]

const baseBenefits: DescriptiveItem[] = [
    {
        title: 'Vetted Passaic talent',
        Icon: 'FaShieldHeart',
        description: '',
        buildDescription: () =>
            'Background checks, skills validation, and competency assessments precede every assignment.'
    },
    {
        title: 'Local commute advantage',
        Icon: 'FaUsers',
        description: '',
        buildDescription: city =>
            `We maintain an active roster of professionals already commuting to ${city} and neighboring towns.`
    },
    {
        title: 'Operational insight',
        Icon: 'FaChartLine',
        description: '',
        buildDescription: () =>
            'Staffing leaders consult on scheduling models, orientation, and retention to stabilize your workforce.'
    },
    {
        title: 'Transparent partnership',
        Icon: 'FaHandshake',
        description: '',
        buildDescription: city =>
            `Expect proactive communication, performance feedback, and measurable outcomes for ${city} engagements.`
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

export const passaicCountyStaffingCities: Record<
    string,
    CityServicePageContent
> = {
    paterson: buildCityContent('Paterson', 'paterson', {
        heroDescription:
            'Paterson providers, adult day programs, and concierge households count on our staffing team for bilingual, culturally aware clinicians.',
        overviewDescription:
            'We deploy professionals experienced with St. Joseph’s Health systems, Great Falls tourism, and dense urban neighborhoods.',
        benefitsHeader: 'Staffing strengths we deliver to Paterson partners',
        ctaDescription:
            'Describe your Paterson staffing needs—we’ll send vetted professionals ready to support your program.'
    }),
    clifton: buildCityContent('Clifton', 'clifton', {
        heroDescription:
            'Clifton practices and private residences gain access to a deep roster of North Jersey clinicians through our staffing program.',
        overviewDescription:
            'We support campuses near Route 3, long-term care communities, and high-touch concierge homes with dependable coverage.',
        benefitsHeader: 'Why Clifton organizations rely on our staffing arm',
        ctaDescription:
            'Share your Clifton coverage priorities— we’ll assemble the mix of caregivers, nurses, and companions you need.'
    }),
    passaic: buildCityContent('Passaic', 'passaic', {
        heroDescription:
            'City of Passaic facilities and families leverage our staffing team for professionals who honor cultural and linguistic expectations.',
        overviewDescription:
            'We recruit caregivers comfortable with high-density apartment living, synagogue and parish schedules, and hospital partnerships with St. Mary’s.',
        benefitsHeader: 'Benefits Passaic partners experience with us',
        ctaDescription:
            'Let’s discuss your Passaic staffing plan so we can fill shifts with committed, community-rooted clinicians.'
    })
}
