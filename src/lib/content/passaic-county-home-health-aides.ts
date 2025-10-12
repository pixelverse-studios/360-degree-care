import { Metadata } from 'next'
import { CountyPageContent } from './county-service-types'

export const passaicCountyHomeHealthAidesContent: CountyPageContent = {
    metadata: {
        title: 'Home Health Aides Passaic County NJ | 360 Degree Care',
        description:
            'Certified home health aides serving Passaic County, NJ. Daily living support, chronic condition monitoring, and nurse oversight for seniors at home.',
        keywords:
            'home health aides passaic county, chha passaic nj, paterson home health aide, clifton chha services, wayne nj home health care'
    } as Metadata,

    schemaData: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Home Health Aide Services in Passaic County',
        provider: {
            '@type': 'HomeHealthCareService',
            name: '360 Degree Care',
            url: 'https://www.360degreecare.net',
            logo: 'https://www.360degreecare.net/logo.png',
            telephone: '+1-800-338-7786',
            areaServed: 'Passaic County, NJ',
            availableLanguage: 'en'
        },
        areaServed: [
            'Passaic County, NJ',
            'Paterson, NJ',
            'Clifton, NJ',
            'Wayne, NJ',
            'Passaic, NJ',
            'Totowa, NJ',
            'Little Falls, NJ',
            'Haledon, NJ',
            'Woodland Park, NJ',
            'Ringwood, NJ',
            'West Milford, NJ',
            'Pompton Lakes, NJ'
        ],
        description:
            'Licensed and insured Certified Home Health Aides delivering personal care, health monitoring, and family communication across Passaic County.',
        serviceType: 'Home Health Aide',
        availableChannel: {
            '@type': 'ServiceChannel',
            serviceUrl:
                'https://www.360degreecare.net/home-health-aides-passaic-county',
            servicePhone: '+1-800-338-7786',
            availableLanguage: 'en'
        }
    },

    hero: {
        title: 'Certified Home Health Aides Throughout Passaic County',
        subtitle:
            'Hands-on care, nurse-led supervision, and flexible scheduling for every neighborhood from Paterson to Ringwood.',
        description:
            'Our Concierge-Level™ CHHAs support bathing, mobility, medication reminders, and chronic condition monitoring so seniors can thrive safely at home.',
        ctaButtonLabel: 'Schedule a CHHA Assessment',
        ctaValue: '800-338-7786',
        imageSrc: 'home-health-aides-hero',
        imageAlt: 'Home health aide providing care in Passaic County NJ'
    },

    intro: {
        title: 'Consistent CHHA Support Backed by Nurses',
        content: [
            'Every home health aide assignment begins with an RN assessment that evaluates mobility, medication schedules, nutrition, and home safety. We adapt care plans to match city apartments, suburban single-family homes, and rural properties throughout Passaic County.',
            'Our aides are bonded, insured, and trained in infection control, dementia support, and Concierge-Level™ hospitality. Coordinators monitor attendance, provide backup coverage, and ensure continuity during holidays or caregiver vacations.',
            'Families receive transparent communication, skillful care, and 24/7 access to our clinical leadership for urgent questions or plan changes.'
        ]
    },

    regionalSections: [
        {
            title: 'Paterson, Passaic & Clifton Coverage',
            content: [
                'CHHAs familiar with elevator buildings, limited parking, and densely populated neighborhoods arrive prepared with equipment and supplies.',
                'We partner with local pharmacies, visiting physicians, and rehab centers to keep clinical recommendations current.'
            ]
        },
        {
            title: 'Suburban Services',
            content: [
                'Wayne, Totowa, Woodland Park, Hawthorne, and Little Falls families rely on us for morning/evening routines, transfer assistance, and medication management.',
                'Care plans integrate therapy exercises and physician instructions, with nurses reviewing progress regularly.'
            ]
        },
        {
            title: 'Northern Highlands Expertise',
            content: [
                'Ringwood, West Milford, and Pompton Lakes households receive aides comfortable navigating longer commutes, rural roads, and lakefront properties.',
                'We coordinate around seasonal weather, generator access, and emergency plans to ensure care is uninterrupted.'
            ]
        }
    ],

    serviceAreas: {
        title: 'Home Health Aide Service Areas',
        subtitle:
            'Hourly, 12-hour, and live-in scheduling options with rapid starts available after hospital discharge.',
        regions: [
            {
                name: 'Urban Centers',
                cities: ['Paterson', 'Passaic', 'Clifton', 'Totowa']
            },
            {
                name: 'Suburban Communities',
                cities: ['Wayne', 'Little Falls', 'Woodland Park', 'Haledon']
            },
            {
                name: 'Northern Highlands',
                cities: ['Ringwood', 'West Milford', 'Pompton Lakes', 'Wanaque']
            }
        ]
    },

    services: {
        title: 'Home Health Aide Services',
        description:
            'Comprehensive in-home care coordinated under RN supervision.',
        servicesList: [
            'Bathing, grooming, dressing, and toileting assistance',
            'Vital sign monitoring, medication reminders, and symptom reporting',
            'Meal preparation, feeding assistance, and hydration tracking',
            'Mobility support, transfer help, and fall-prevention coaching',
            'Light housekeeping, laundry, and organization aligned with the care plan',
            'Specialized dementia and Parkinson’s support with behavior tracking'
        ]
    },

    servicesBenefits: [
        {
            title: 'Clinical Oversight',
            description:
                'Registered nurses write and review the care plan, ensuring aides follow physician directives.'
        },
        {
            title: 'Staffing Continuity',
            description:
                'Backup aides, shadow shifts, and transition planning keep relationships stable even when schedules change.'
        },
        {
            title: 'Flexible Coverage',
            description:
                'Adjust hours quickly to accommodate rehabilitation progress, respite needs, or travel schedules.'
        },
        {
            title: 'Real-Time Communication',
            description:
                'Families receive immediate updates on changes in condition, supplies, or care goals.'
        }
    ],

    whyChoose: {
        title: 'Why Choose Our Passaic County CHHAs',
        content: [
            'We match aides based on clinical skill, personality, language, and commute to support long-term consistency.',
            'All CHHAs receive ongoing training in dementia care, infection control, and cultural sensitivity.',
            'Concierge-Level™ coordinators handle logistics, from PPE delivery to medical appointment scheduling.'
        ]
    },

    cta: {
        title: 'Arrange Certified Home Health Aide Care Today',
        description: [
            'Call to schedule your home assessment and receive a tailored CHHA plan designed for your loved one’s needs.',
            'Our team manages onboarding, introductions, and supervision so you experience effortless, dependable care at home.'
        ],
        buttonLabel: 'Get CHHA Support',
        value: '800-338-7786'
    }
}
