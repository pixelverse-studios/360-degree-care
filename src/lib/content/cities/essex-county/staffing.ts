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
            `We supply credentialed nurses, aides, and companions prepared to support ${city} facilities and concierge clients.`
    },
    {
        title: 'Temp-to-perm pipelines',
        Icon: 'FaClipboardCheck',
        description: '',
        buildDescription: () =>
            'Evaluate team members in the field before extending permanent offers while we handle payroll and compliance.'
    },
    {
        title: 'Rapid surge support',
        Icon: 'FaBolt',
        description: '',
        buildDescription: city =>
            `When ${city} partners encounter callouts or census spikes, we mobilize immediate coverage.`
    },
    {
        title: 'Specialized placements',
        Icon: 'FaUserDoctor',
        description: '',
        buildDescription: () =>
            'From bilingual caregivers to nurse supervisors and care coordinators, we deliver talent for high-touch requirements.'
    }
]

const baseBenefits: DescriptiveItem[] = [
    {
        title: 'Vetted Essex professionals',
        Icon: 'FaShieldHeart',
        description: '',
        buildDescription: () =>
            'Credential checks, skills validation, and competency assessments underpin every placement.'
    },
    {
        title: 'Local commute knowledge',
        Icon: 'FaUsers',
        description: '',
        buildDescription: city =>
            `Our roster is composed of clinicians already commuting to ${city} and nearby towns.`
    },
    {
        title: 'Operational partnership',
        Icon: 'FaChartLine',
        description: '',
        buildDescription: () =>
            'We consult on scheduling models, onboarding, and retention to keep your workforce stable.'
    },
    {
        title: 'Transparent communication',
        Icon: 'FaHandshake',
        description: '',
        buildDescription: city =>
            `Expect proactive updates, performance reporting, and responsive adjustments for ${city} engagements.`
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

export const essexCountyStaffingCities: Record<string, CityServicePageContent> =
    {
        newark: buildCityContent('Newark', 'newark', {
            heroDescription:
                'Newark hospitals, home health programs, and concierge households count on our staffing team for bilingual, urban-savvy clinicians.',
            overviewDescription:
                'We source professionals familiar with University Hospital protocols, Prudential Center events, and Ironbound residencies to deliver polished service.',
            benefitsHeader: 'Staffing advantages Newark partners experience',
            ctaDescription:
                'Describe your Newark staffing goals—we’ll mobilize credentialed clinicians ready to support your operations.'
        }),
        'east-orange': buildCityContent('East Orange', 'east-orange', {
            heroDescription:
                'East Orange facilities and families tap into a dependable pipeline of aides, nurses, and companions ready for high-touch assignments.',
            overviewDescription:
                'We support CareWell Health, VA Medical Center programs, and private residences with professionals who already commute via NJ Transit and the Garden State Parkway.',
            benefitsHeader:
                'Why East Orange organizations rely on our staffing',
            ctaDescription:
                'Share your East Orange coverage needs and we’ll tailor a staffing plan that keeps shifts filled.'
        }),
        montclair: buildCityContent('Montclair', 'montclair', {
            heroDescription:
                'Montclair concierge households, outpatient clinics, and senior communities leverage our staffing team for service-oriented clinicians.',
            overviewDescription:
                'We deploy caregivers adept at upscale residencies, campus environments, and boutique medical practices along Bloomfield Avenue and Valley Road.',
            benefitsHeader: 'Benefits Montclair partners see with our staffing',
            ctaDescription:
                'Let’s discuss your Montclair staffing requirements so we can assemble the right mix of caregivers and nurses.'
        })
    }
