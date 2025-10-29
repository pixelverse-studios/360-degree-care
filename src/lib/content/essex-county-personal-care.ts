import { Metadata } from 'next'
import { CountyPageContent } from './county-service-types'

export const essexCountyPersonalCareContent: CountyPageContent = {
    metadata: {
        title: 'Personal Care Services Essex County NJ | 360 Degree Care',
        description:
            'Concierge-level personal care for seniors across Essex County, NJ. Certified aides assist with bathing, grooming, mobility, and wellness from Newark to Montclair.',
        keywords:
            'personal care essex county, newark personal care aides, east orange bathing assistance, montclair in-home caregivers'
    } as Metadata,

    schemaData: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Personal Care Services in Essex County',
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
            'Essex County, NJ',
            'Newark, NJ',
            'East Orange, NJ',
            'Montclair, NJ',
            'Orange, NJ',
            'Irvington, NJ',
            'Bloomfield, NJ',
            'West Orange, NJ',
            'South Orange, NJ',
            'Nutley, NJ'
        ],
        description:
            'Certified personal care professionals supporting Essex County seniors with daily living tasks, mobility, and wellness routines.',
        serviceType: 'Personal Care',
        availableChannel: {
            '@type': 'ServiceChannel',
            serviceUrl:
                'https://www.360degreecare.net/services/personal-care/essex-county',
            servicePhone: '+1-800-338-7786',
            availableLanguage: 'en'
        }
    },

    hero: {
        title: 'Personal Care That Honors Every Essex County Household',
        subtitle:
            'Certified aides who understand city high-rises, brownstone walk-ups, and tree-lined suburban neighborhoods.',
        description:
            'Our Concierge-Level™ personal care team helps seniors remain safe and independent with bathing, mobility, and daily routine assistance delivered with dignity.',
        ctaButtonLabel: 'Request a Personal Care Assessment',
        ctaValue: '800-338-7786',
        imageSrc: 'personal-care-hero',
        imageAlt: 'Personal care aide assisting senior in Essex County NJ'
    },

    intro: {
        title: 'Trusted Personal Care for Essex County Families',
        content: [
            'Families from Newark’s Ironbound to Montclair’s boutique downtown rely on us when daily tasks become overwhelming. We design respectful care plans supervised by registered nurses who understand the unique pace, transit patterns, and building logistics of Essex County living.',
            'Whether your loved one resides in a Weequahic apartment, a historic Glen Ridge colonial, or a Maplewood split-level, our caregivers arrive prepared with customized safety protocols and equipment. We coordinate schedules around medical appointments at University Hospital, Cooperman Barnabas, CareWell Health, and local private practices.',
            'Concierge-Level™ coordination means families receive real-time visit recaps, health updates, and quick adjustments when physicians recommend changes. You can focus on quality time while we handle the day-to-day care details.'
        ]
    },

    regionalSections: [
        {
            title: 'City & Transit-Centered Care',
            content: [
                'In Newark, East Orange, and Irvington, we support seniors living in high-rises, multi-family homes, and senior towers. Caregivers manage elevator logistics, limited parking, and multilingual households with professionalism.',
                'We coordinate personal care around NJ Transit schedules, Penn Station trips, and worship services while keeping communication open with out-of-state family members.'
            ]
        },
        {
            title: 'Suburban Daily Living Support',
            content: [
                'Montclair, Bloomfield, and West Orange families receive consistent aides who respect historic home layouts, condo associations, and active community calendars.',
                'Care routines align with outpatient therapy at Mountainside Medical Center, Cooperman Barnabas, and Atlantic Health partners throughout the county.'
            ]
        },
        {
            title: 'Southern & University Communities',
            content: [
                'In South Orange, Maplewood, and the Seton Hall University area, we help seniors stay connected to neighborhood cafés, faith communities, and campus events while maintaining safe personal care routines.',
                'Our aides provide companionship, mobility support, and discreet assistance that fits busy commuter lifestyles.'
            ]
        }
    ],

    serviceAreas: {
        title: 'Serving Personal Care Needs Across Essex County',
        subtitle:
            'Hourly, daily, and 24/7 personal care coverage with rapid start options after hospital discharge.',
        regions: [
            {
                name: 'Urban Centers',
                cities: ['Newark', 'East Orange', 'Irvington', 'Orange']
            },
            {
                name: 'Inner Suburbs',
                cities: ['Bloomfield', 'Montclair', 'Glen Ridge', 'Nutley']
            },
            {
                name: 'South Mountain Communities',
                cities: [
                    'West Orange',
                    'South Orange',
                    'Maplewood',
                    'Livingston'
                ]
            }
        ]
    },

    services: {
        title: 'Core Personal Care Services',
        description:
            'Hands-on support designed for high-rise apartments, historic homes, and suburban residences throughout Essex County.',
        servicesList: [
            'Bathing, grooming, and dressing routines delivered with dignity and privacy',
            'Mobility support, wheelchair transfers, and elevator navigation to reduce fall risk',
            'Meal preparation, hydration reminders, and culturally familiar nutrition plans',
            'Medication prompting, vital checks, and symptom observation with nurse escalation'
        ]
    },

    servicesBenefits: [
        {
            title: 'Nurse-Led Oversight',
            description:
                'Registered nurses supervise every case, train caregivers, and communicate directly with physicians after hospital or rehab stays.'
        },
        {
            title: 'Multilingual Caregivers',
            description:
                'We staff aides fluent in Spanish, Portuguese, Creole, and additional languages to reflect Essex County’s diversity.'
        },
        {
            title: 'Flexible Scheduling',
            description:
                'Short shifts, overnight coverage, or live-in support adapt to work schedules and travel demands.'
        },
        {
            title: 'Detailed Communication',
            description:
                'Concierge-Level™ updates keep relatives informed in real time, even when managing care from out of state.'
        }
    ],

    whyChoose: {
        title: 'Concierge-Level™ Personal Care Coordination',
        content: [
            'Dedicated care coordinators anticipate weather, transit, and appointment changes that impact daily routines.',
            'We collaborate with home health agencies, hospice teams, and outpatient therapists to maintain continuity of care.',
            'Emergency coverage and weekend support ensure families always have a trusted professional to call.'
        ]
    },

    cta: {
        title: 'Protect Dignity and Independence for Your Loved One',
        description: [
            'Schedule a complimentary in-home personal care assessment anywhere in Essex County and receive a tailored plan within 48 hours.',
            'Our Concierge-Level™ team will match your family with a carefully screened aide, handle onboarding, and provide ongoing nurse supervision.'
        ],
        buttonLabel: 'Start Personal Care Planning',
        value: '800-338-7786'
    }
}
