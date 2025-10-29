import { Metadata } from 'next'
import { CountyPageContent } from './county-service-types'

export const oceanCountyElderCareContent: CountyPageContent = {
    metadata: {
        title: 'Elder Care Consulting Ocean County NJ | 360 Degree Care',
        description:
            'RN-led elder care consulting for Ocean County families. Navigate hospital discharges, long-term planning, and community resources with confidence.',
        keywords:
            'elder care consulting ocean county, care management ocean county nj, senior care planning toms river, brick nj geriatric care manager, ocean county care coordination'
    } as Metadata,

    schemaData: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Elder Care Consulting in Ocean County',
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
            'Ocean County, NJ',
            'Toms River, NJ',
            'Brick Township, NJ',
            'Lakewood, NJ',
            'Jackson Township, NJ',
            'Manchester Township, NJ',
            'Berkeley Township, NJ',
            'Point Pleasant, NJ',
            'Barnegat Township, NJ',
            'Stafford Township, NJ',
            'Long Beach Island, NJ'
        ],
        description:
            'Elder care consultants providing assessments, care coordination, and advocacy for Ocean County seniors and their families.',
        serviceType: 'Elder Care Consulting',
        availableChannel: {
            '@type': 'ServiceChannel',
            serviceUrl:
                'https://www.360degreecare.net/services/elder-care/ocean-county',
            servicePhone: '+1-800-338-7786',
            availableLanguage: 'en'
        }
    },
    hero: {
        title: 'Elder Care Consulting Tailored to Ocean County Families',
        subtitle:
            'Professional guidance to coordinate services, manage chronic conditions, and plan for the future.',
        description:
            'Our Concierge-Level™ consultants evaluate needs, design actionable plans, and stay by your side to implement every step.',
        ctaButtonLabel: 'Talk to a Care Consultant',
        ctaValue: '800-338-7786',
        imageSrc: 'elder-care-consulting-hero',
        imageAlt: 'Elder care consultant meeting with family in Ocean County'
    },

    intro: {
        title: 'Clarity During Every Stage of Aging',
        content: [
            'Hospital discharges, new diagnoses, and memory changes can create urgent decisions. Our Ocean County elder care consultants coordinate across providers, facilities, and family members so no detail is missed.',
            'We know the local healthcare landscape—from Community Medical Center and Ocean University Medical Center to regional rehab programs, VA clinics, and adult day services. Consultants manage communication, documentation, and follow-through.',
            'Whether you need a one-time assessment or ongoing care management, we provide proactive planning, transparent updates, and compassionate advocacy.'
        ]
    },

    regionalSections: [
        {
            title: 'Northern Shore & Barrier Island',
            content: [
                'Families in Point Pleasant, Bay Head, and Seaside Heights receive support managing seasonal transitions, emergency planning, and transportation.',
                'Consultants coordinate respite care and home modifications suited to shore homes and condo communities.'
            ]
        },
        {
            title: 'Central Mainland & 55+ Communities',
            content: [
                'Toms River, Lakewood, Jackson, and Manchester clients benefit from medication reviews, family meetings, and coordination with specialty providers.',
                'We align plans with community resources, senior centers, and faith-based organizations serving Ocean County’s diverse populations.'
            ]
        },
        {
            title: 'Southern Shore & Pine Barrens',
            content: [
                'Barnegat, Stafford, Waretown, and LBI households rely on us for transportation logistics, emergency preparedness, and coordination with home health teams.',
                'Consultants maintain relationships with municipal aging services and local EMS to ensure rapid response when needs escalate.'
            ]
        }
    ],

    serviceAreas: {
        title: 'Where Our Consultants Work',
        subtitle:
            'In-home assessments across Ocean County with virtual participation for out-of-state relatives.',
        regions: [
            {
                name: 'Northern Shore',
                cities: ['Point Pleasant', 'Bay Head', 'Lavallette', 'Seaside']
            },
            {
                name: 'Central Mainland',
                cities: ['Toms River', 'Lakewood', 'Jackson', 'Manchester']
            },
            {
                name: 'Southern Shore & LBI',
                cities: [
                    'Barnegat',
                    'Stafford',
                    'Waretown',
                    'Long Beach Island'
                ]
            }
        ]
    },

    services: {
        title: 'Elder Care Consulting Services',
        description:
            'Holistic support from geriatric care managers and registered nurses.',
        servicesList: [
            'Comprehensive assessments of medical, cognitive, home safety, and support needs',
            'Customized care roadmaps with prioritized recommendations and vetted referrals',
            'Coordination with physicians, therapists, home care providers, and legal advisors',
            'Family meeting facilitation, crisis planning, and 24/7 on-call availability',
            'Benefit navigation for Medicaid, VA Aid & Attendance, and long-term care insurance',
            'Transition planning for rehabilitation stays, assisted living moves, or hospice support'
        ]
    },

    servicesBenefits: [
        {
            title: 'Prevent Crisis Decisions',
            description:
                'Proactive planning gives families time to evaluate options, costs, and quality before emergencies arise.'
        },
        {
            title: 'Professional Advocacy',
            description:
                'Registered nurses ensure medical recommendations align with a client’s preferences and goals.'
        },
        {
            title: 'Coordinate the Entire Team',
            description:
                'We serve as the communication hub between providers, family members, and community resources.'
        },
        {
            title: 'Transparent Documentation',
            description:
                'Detailed visit notes, care plans, and progress updates keep everyone aligned and accountable.'
        }
    ],

    whyChoose: {
        title: 'Why Ocean County Families Partner With Us',
        content: [
            'Concierge-Level™ service provides a single point of contact who knows your family, lifestyle, and priorities.',
            'Our consultants stay current on Ocean County healthcare networks, senior housing, and municipal offerings, accelerating solutions.',
            'Flexible engagement models—hourly consulting, ongoing management, or hybrid support—scale as needs change.'
        ]
    },

    cta: {
        title: 'Start Building Your Ocean County Care Plan',
        description: [
            'Schedule an assessment to review current concerns, explore options, and receive a detailed roadmap.',
            'We remain involved to coordinate providers, monitor progress, and adjust plans whenever circumstances shift.'
        ],
        buttonLabel: 'Book a Consulting Session',
        value: '800-338-7786'
    }
}
