import { Metadata } from 'next'
import { CountyPageContent } from './county-service-types'

export const passaicCountyElderCareContent: CountyPageContent = {
    metadata: {
        title: 'Elder Care Consulting Passaic County NJ | 360 Degree Care',
        description:
            'RN-led elder care consulting for Passaic County families. Navigate hospital discharges, long-term planning, and community resources with expert guidance.',
        keywords:
            'elder care consulting passaic county, care management passaic nj, senior care planner paterson, wayne nj geriatric care manager, passaic county care coordination'
    } as Metadata,

    schemaData: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Elder Care Consulting in Passaic County',
        provider: {
            '@type': 'Organization',
            name: '360 Degree Care',
            url: 'https://www.360degreecare.net',
            logo: 'https://www.360degreecare.net/logo.png',
            contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-800-338-7786',
                contactType: 'customer service',
                availableLanguage: 'en'
            }
        },
        areaServed: [
            'Passaic County, NJ',
            'Paterson, NJ',
            'Clifton, NJ',
            'Wayne, NJ',
            'Passaic, NJ',
            'Totowa, NJ',
            'Haledon, NJ',
            'Little Falls, NJ',
            'Hawthorne, NJ',
            'West Milford, NJ',
            'Ringwood, NJ'
        ],
        description:
            'Elder care consultants providing assessments, care coordination, and long-term planning for families throughout Passaic County.',
        serviceType: 'Elder Care Consulting',
        availableChannel: {
            '@type': 'ServiceChannel',
            serviceUrl:
                'https://www.360degreecare.net/elder-care-passaic-county',
            servicePhone: '+1-800-338-7786',
            availableLanguage: 'en'
        }
    },

    hero: {
        title: 'Elder Care Consulting for Passaic County Families',
        subtitle:
            'Professional care managers guiding every step—from hospital discharge to long-term support planning.',
        description:
            'Our Concierge-Level™ consulting team evaluates needs, coordinates providers, and implements plans so aging adults receive the right care at the right time.',
        ctaButtonLabel: 'Talk to a Care Consultant',
        ctaValue: '800-338-7786',
        imageSrc: 'elder-care-consulting-hero',
        imageAlt: 'Elder care consultant meeting with family in Passaic County'
    },

    intro: {
        title: 'Clarity, Coordination, and Confidence',
        content: [
            'New diagnoses, cognitive changes, and hospitalizations can overwhelm even the most prepared families. Our Passaic County elder care consultants listen, assess, and design practical strategies that align medical recommendations with family goals.',
            'We understand the local healthcare system—from St. Joseph’s University Medical Center and Clara Maass Medical Center to outpatient therapy programs and adult day services across the county. Our team coordinates appointments, transportation, and communication so nothing falls through the cracks.',
            'Whether you need a single assessment or ongoing care management, we provide responsive support, detailed documentation, and compassionate advocacy.'
        ]
    },

    regionalSections: [
        {
            title: 'Urban Care Navigation',
            content: [
                'Families in Paterson, Passaic, and Clifton receive assistance managing complex medication regimens, specialist appointments, and home safety updates.',
                'Consultants coordinate language services, cultural preferences, and community-based supports to ensure plans are realistic and sustainable.'
            ]
        },
        {
            title: 'Suburban Planning & Coordination',
            content: [
                'Wayne, Totowa, Little Falls, and Hawthorne residents benefit from proactive care meetings, fall-prevention strategies, and coordination with visiting therapists.',
                'We review insurance, long-term care policies, and Veterans benefits to stretch resources and protect family finances.'
            ]
        },
        {
            title: 'Northern Highlands Support',
            content: [
                'In Ringwood, Wanaque, Pompton Lakes, and West Milford we focus on transportation, emergency preparedness, and access to specialty services that may sit outside town limits.',
                'Consultants maintain relationships with local EMS and municipal aging services, keeping loved ones safe during seasonal weather changes.'
            ]
        }
    ],

    serviceAreas: {
        title: 'Where Our Consultants Work',
        subtitle:
            'In-home assessments across Passaic County with virtual participation for out-of-state family members.',
        regions: [
            {
                name: 'Urban Centers',
                cities: ['Paterson', 'Passaic', 'Clifton', 'Totowa']
            },
            {
                name: 'Suburban Communities',
                cities: ['Wayne', 'Little Falls', 'Hawthorne', 'Haledon']
            },
            {
                name: 'Northern Highlands',
                cities: ['Ringwood', 'West Milford', 'Pompton Lakes', 'Wanaque']
            }
        ]
    },

    services: {
        title: 'Elder Care Consulting Services',
        description:
            'Guidance from geriatric care specialists who coordinate clinical, social, and financial aspects of aging.',
        servicesList: [
            'Comprehensive assessments covering medical, cognitive, home safety, and support networks',
            'Personalized care plans with prioritized next steps and vetted resource referrals',
            'Coordination with physicians, rehab providers, and home care teams',
            'Family meeting facilitation and decision-making support',
            'Crisis management, discharge planning, and 24/7 on-call availability',
            'Benefit navigation for Medicaid, VA Aid & Attendance, and long-term care insurance'
        ]
    },

    servicesBenefits: [
        {
            title: 'Prevent Crises',
            description:
                'Proactive planning and regular follow-up reduce emergency hospital visits and last-minute decisions.'
        },
        {
            title: 'Professional Advocacy',
            description:
                'Registered nurses speak the language of healthcare teams and ensure treatment aligns with a client’s preferences.'
        },
        {
            title: 'Family Alignment',
            description:
                'Structured communication keeps siblings, POAs, and support networks on the same page.'
        },
        {
            title: 'Resource Efficiency',
            description:
                'We recommend local programs, funding options, and community supports that stretch every dollar.'
        }
    ],

    whyChoose: {
        title: 'Why Passaic County Families Partner With Us',
        content: [
            'Concierge-Level™ service delivers a single point of contact who understands your family’s story, values, and priorities.',
            'We maintain up-to-date knowledge of Passaic County healthcare providers, senior housing, and municipal resources to accelerate solutions.',
            'Our consultants offer flexible engagement—from short-term projects to ongoing monthly management—allowing support to scale with changing needs.'
        ]
    },

    cta: {
        title: 'Start Building Your Passaic County Care Plan',
        description: [
            'Schedule a consultation to review current concerns, explore options, and receive a detailed roadmap tailored to your loved one.',
            'We remain by your side to coordinate providers, monitor progress, and adjust plans whenever circumstances change.'
        ],
        buttonLabel: 'Book a Consulting Session',
        value: '800-338-7786'
    }
}
