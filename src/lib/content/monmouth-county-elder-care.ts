import { Metadata } from 'next'
import { CountyPageContent } from './county-service-types'

export const monmouthCountyElderCareContent: CountyPageContent = {
    metadata: {
        title: 'Elder Care Consulting Monmouth County NJ | 360 Degree Care',
        description:
            'Professional elder care consulting and care management for Monmouth County families. Navigate aging services, clinical coordination, and long-term plans with expert guidance.',
        keywords:
            'elder care consulting monmouth county, care management monmouth county nj, senior care planning middletown nj, red bank elder care advisor, monmouth care coordination'
    } as Metadata,

    schemaData: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Elder Care Consulting in Monmouth County',
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
            'Monmouth County, NJ',
            'Middletown, NJ',
            'Holmdel, NJ',
            'Red Bank, NJ',
            'Freehold, NJ',
            'Rumson, NJ',
            'Long Branch, NJ',
            'Sea Girt, NJ',
            'Marlboro, NJ',
            'Manalapan, NJ',
            'Asbury Park, NJ',
            'Deal, NJ'
        ],
        description:
            'Geriatric care managers delivering assessments, long-term care planning, and care coordination for older adults in Monmouth County.',
        serviceType: 'Elder Care Consulting',
        availableChannel: {
            '@type': 'ServiceChannel',
            serviceUrl:
                'https://www.360degreecare.net/services/elder-care/monmouth-county',
            servicePhone: '+1-800-338-7786',
            availableLanguage: 'en'
        }
    },

    hero: {
        title: 'Elder Care Consulting for Monmouth County Households',
        subtitle:
            'RN-led guidance to help families coordinate services, manage chronic conditions, and plan for long-term care.',
        description:
            'Navigate Monmouth County’s healthcare network with a dedicated advisor who oversees assessments, providers, and private-duty care through every stage of aging.',
        ctaButtonLabel: 'Talk to a Care Consultant',
        ctaValue: '800-338-7786',
        imageSrc: 'elder-care-consulting-hero',
        imageAlt: 'Elder care consulting meeting in Monmouth County NJ'
    },

    intro: {
        title: 'Clarity and Confidence for Every Aging Journey',
        content: [
            'Hospital discharges, new diagnoses, and family relocations can feel overwhelming—especially when they happen quickly. Our Monmouth County elder care consultants evaluate the full picture, create practical care roadmaps, and stay by your side to implement each step.',
            'We understand local resources from Meridian Health and Hackensack Meridian’s Riverview Medical Center to boutique rehab facilities and trusted assisted living communities. Whether you need short-term advocacy or a long-term care manager, we coordinate with physicians, therapists, and legal advisors to align goals and budgets.',
            'Families appreciate our transparent updates, thorough documentation, and warm communication style. We anticipate what comes next so you can make decisions before a crisis escalates.',
            'The Monmouth County Office on Aging’s 2024 Senior Needs Assessment reported that 69% of older adults plan to age in place and nearly half fear storm-related outages could interrupt care. We bake those realities into every plan—staging generator-friendly equipment, redundant medication reminders, and transportation contingencies for Parkway closures or Bayshore flooding.',
            'Local families validate the approach: Steve D. shared in June 2024 that our aide “did exactly what the agency said she would do” throughout a Long Branch engagement, while JoAnn C. described how we secured a live-in aide in less than 36 hours after her father’s hospital stay. Their stories mirror what Monmouth households experience when Concierge-Level™ consulting leads the process.'
        ]
    },

    regionalSections: [
        {
            title: 'Bayshore & Riverfront Planning',
            content: [
                'Clients in Middletown, Atlantic Highlands, Sea Bright, and Rumson receive support navigating waterfront property considerations, emergency preparedness, and municipal aging programs.',
                'We coordinate respite care, in-home services, and environmental modifications to maintain safe living spaces despite seasonal weather changes.',
                'After Hackensack Meridian Bayshore Medical Center opened its outpatient pavilion in 2024, we added tour days and caregiver training sessions so families understood the new entrances, valet stands, and therapy classrooms before discharge.'
            ]
        },
        {
            title: 'Central Monmouth Care Coordination',
            content: [
                'Inland communities like Freehold, Marlboro, Manalapan, and Colts Neck benefit from comprehensive medication reviews, chronic disease management plans, and family meeting facilitation.',
                'Our consultants align home care, transportation, and specialty appointments while helping families prepare for future transitions.'
            ]
        },
        {
            title: 'Coastal & Southern Shore Support',
            content: [
                'We assist households in Red Bank, Long Branch, Asbury Park, Neptune, and Deal with hospital navigation, discharge planning, and dementia support programs.',
                'Consultants maintain relationships with local senior centers, respite programs, and adult day services to keep loved ones engaged and supported.'
            ]
        }
    ],

    serviceAreas: {
        title: 'Where We Offer Elder Care Consulting',
        subtitle:
            'In-person visits across Monmouth County with virtual check-ins for traveling family members.',
        regions: [
            {
                name: 'Bayshore & River Towns',
                cities: [
                    'Middletown',
                    'Holmdel',
                    'Atlantic Highlands',
                    'Rumson',
                    'Fair Haven',
                    'Sea Bright'
                ]
            },
            {
                name: 'Central Monmouth',
                cities: [
                    'Freehold',
                    'Marlboro',
                    'Manalapan',
                    'Colts Neck',
                    'Howell',
                    'Tinton Falls'
                ]
            },
            {
                name: 'Coastal Communities',
                cities: [
                    'Red Bank',
                    'Long Branch',
                    'Asbury Park',
                    'Neptune',
                    'Belmar',
                    'Manasquan'
                ]
            }
        ]
    },

    services: {
        title: 'Core Elder Care Consulting Services',
        description:
            'Holistic support led by experienced geriatric care managers and registered nurses.',
        servicesList: [
            'Comprehensive care assessments covering medical, cognitive, and home safety needs',
            'Care plan development with prioritized recommendations and resource coordination',
            'Healthcare navigation including appointment scheduling and clinical advocacy',
            'Crisis support and 24/7 on-call availability for urgent family concerns',
            'Benefit and funding guidance spanning long-term care insurance, Medicaid, and VA resources',
            'Transition planning for rehabilitation stays, assisted living moves, or hospice coordination'
        ]
    },

    servicesBenefits: [
        {
            title: 'Avoid Crisis Decision-Making',
            description:
                'Proactive planning gives families time to evaluate options, costs, and quality indicators before urgent needs arise.'
        },
        {
            title: 'Professional Advocacy',
            description:
                'Registered nurses speak the language of physicians and ensure treatment plans match a client’s goals and values.'
        },
        {
            title: 'Coordinate the Full Care Network',
            description:
                'We serve as the central hub, managing communication between medical providers, home care teams, legal advisors, and family members.'
        },
        {
            title: 'Clear Documentation',
            description:
                'Detailed visit notes, care plans, and progress summaries keep everyone aligned and accountable.'
        }
    ],

    whyChoose: {
        title: 'Why Monmouth County Relies on Our Elder Care Consultants',
        content: [
            'Our Concierge-Level™ service model provides a single point of contact who learns family dynamics, logistics, and priorities in depth.',
            'We are deeply familiar with Monmouth County healthcare systems, specialists, and supportive services, enabling faster referrals and coordinated follow-up.',
            'Flexible engagement options let families choose hourly consulting, ongoing care management, or hybrid support as needs evolve.'
        ]
    },

    cta: {
        title: 'Start Your Monmouth County Care Plan with Confidence',
        description: [
            'Schedule an assessment to identify immediate needs and long-term priorities for your loved one.',
            'Within days you will receive a customized roadmap, resource introductions, and a dedicated consultant ready to guide implementation.'
        ],
        buttonLabel: 'Book a Consulting Session',
        value: '800-338-7786'
    }
}
