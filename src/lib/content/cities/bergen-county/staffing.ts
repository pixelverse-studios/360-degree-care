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
            `Licensed nurses, aides, and companions arrive on time for ${city} facilities, concierge clients, and private households.`
    },
    {
        title: 'Temp-to-perm flexibility',
        Icon: 'FaClipboardCheck',
        description: '',
        buildDescription: () =>
            'Evaluate team members in the field before committing to permanent offers — we handle payroll, onboarding, and compliance.'
    },
    {
        title: 'Rapid surge support',
        Icon: 'FaBolt',
        description: '',
        buildDescription: city =>
            `We mobilize short-notice coverage for ${city} census spikes, seasonal demand, and last-minute callouts.`
    },
    {
        title: 'Specialized roles',
        Icon: 'FaUserDoctor',
        description: '',
        buildDescription: () =>
            'From nurse supervisors to administrative coordinators, we recruit niche clinicians and support staff when you need them most.'
    }
]

const baseBenefits: DescriptiveItem[] = [
    {
        title: 'Screened professionals',
        Icon: 'FaShieldHeart',
        description: '',
        buildDescription: () =>
            'Background checks, skills validation, and competency reviews ensure every hire reflects our high standards.'
    },
    {
        title: 'Local Bergen talent pool',
        Icon: 'FaUsers',
        description: '',
        buildDescription: city =>
            `We maintain an active roster of professionals who already commute to ${city} and surrounding Bergen County communities.`
    },
    {
        title: 'Operational insight',
        Icon: 'FaChartLine',
        description: '',
        buildDescription: () =>
            'Our staffing leads consult on scheduling models, orientation, and retention to stabilize your workforce.'
    },
    {
        title: 'Transparent partnership',
        Icon: 'FaHandshake',
        description: '',
        buildDescription: city =>
            `Whether you run a medical practice or concierge household in ${city}, you’ll receive proactive communication and measurable results.`
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

export const bergenCountyStaffingCities: Record<
    string,
    CityServicePageContent
> = {
    'fort-lee': buildCityContent('Fort Lee', 'fort-lee', {
        heroDescription:
            'Hospitals, concierge households, and medical practices in Fort Lee rely on our vetted clinicians to cover census spikes and specialty needs.',
        overviewDescription:
            'We understand the pace of the Palisades. From high-rise concierge clients to outpatient offices, our team delivers staffing that respects security protocols and building logistics.',
        benefitsHeader: 'Why Fort Lee partners with 360 Degree Care Staffing',
        ctaDescription:
            'Tell us about your Fort Lee staffing gaps. We will mobilize credentialed professionals who are ready to contribute immediately.'
    }),
    ridgewood: buildCityContent('Ridgewood', 'ridgewood', {
        heroDescription:
            'When Ridgewood facilities and private families need coverage, we source local professionals who already know the community.',
        overviewDescription:
            'We support medical offices near Ridgewood Avenue, provide in-home coverage for concierge clients, and coordinate seamlessly with Valley Hospital requirements.',
        benefitsHeader: 'Staffing solutions that fit Ridgewood operations',
        ctaDescription:
            'Share your Ridgewood census trends. We will develop a staffing pipeline that keeps your schedule filled.'
    }),
    'river-vale': buildCityContent('River Vale', 'river-vale', {
        heroDescription:
            'River Vale families and facilities count on our staffing experts for compassionate, credentialed professionals available on demand.',
        overviewDescription:
            'From short-term respite to long-term household coverage, we recruit caregivers who appreciate the close-knit River Vale community.',
        benefitsHeader: 'How River Vale benefits from 360 Degree Care Staffing',
        ctaDescription:
            'Let’s review your River Vale staffing requirements and assemble the right mix of caregivers, nurses, and support personnel.'
    }),
    hackensack: buildCityContent('Hackensack', 'hackensack', {
        heroDescription:
            'Hackensack practices, concierge households, and post-acute facilities count on our rapid-response staffing tied to HUMC’s demanding schedule.',
        overviewDescription:
            'We supply licensed nurses, aides, and companions who understand Prospect Avenue medical campuses, courthouse security protocols, and downtown parking challenges.',
        benefitsHeader: 'Staffing advantages for Hackensack partners',
        ctaDescription:
            'Describe your Hackensack coverage needs—we’ll deliver credentialed professionals ready to integrate with your workflows.'
    }),
    teaneck: buildCityContent('Teaneck', 'teaneck', {
        heroDescription:
            'Teaneck organizations receive culturally aware staffing support that aligns with Holy Name Medical Center standards and community expectations.',
        overviewDescription:
            'Our roster includes multilingual clinicians and companions who respect religious observances, Cedar Lane business rhythms, and Glenpointe corporate clientele.',
        benefitsHeader:
            'Why Teaneck facilities and families rely on our staffing',
        ctaDescription:
            'Share your Teaneck staffing puzzle—we’ll build a pipeline that honors your timelines, faith considerations, and patient goals.'
    }),
    'fair-lawn': buildCityContent('Fair Lawn', 'fair-lawn', {
        heroDescription:
            'From Radburn households to Broadway medical offices, Fair Lawn partners leverage our staffing team for dependable clinical coverage.',
        overviewDescription:
            'We recruit professionals familiar with Valley Health protocols, commuter scheduling, and the nuances of supporting clients in split-level or multi-generational homes.',
        benefitsHeader: 'Staffing outcomes Fair Lawn clients experience',
        ctaDescription:
            'Let us know what shifts you need to fill in Fair Lawn—we’ll assemble ready-to-work clinicians and caregivers.'
    })
}
