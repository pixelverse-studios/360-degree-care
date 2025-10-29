import { Metadata } from 'next'
import { CountyPageContent } from './county-service-types'

export const essexCountyCompanionCareContent: CountyPageContent = {
    metadata: {
        title: 'Companion Care Services Essex County NJ | 360 Degree Care',
        description:
            'Engaging companion care throughout Essex County, NJ. Reduce isolation and keep seniors connected to community life in Newark, East Orange, Montclair, and beyond.',
        keywords:
            'companion care essex county, newark senior companionship, east orange companion services, montclair elderly companions'
    } as Metadata,

    schemaData: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Companion Care Services in Essex County',
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
            'Maplewood, NJ'
        ],
        description:
            'Certified companion care professionals supporting Essex County seniors with social connection, escorted outings, and daily engagement.',
        serviceType: 'Companion Care',
        availableChannel: {
            '@type': 'ServiceChannel',
            serviceUrl:
                'https://www.360degreecare.net/services/companion-care/essex-county',
            servicePhone: '+1-800-338-7786',
            availableLanguage: 'en'
        }
    },

    hero: {
        title: 'Companion Care That Keeps Essex County Seniors Connected',
        subtitle:
            'Trusted companions who understand city energy, suburban charm, and the cultural vibrancy of Essex County.',
        description:
            'From NJPAC performances to quiet afternoons in South Mountain Reservation, we tailor companion visits that match each person’s interests, energy level, and mobility.',
        ctaButtonLabel: 'Schedule a Companion Introduction',
        ctaValue: '800-338-7786',
        imageSrc: 'companion-care-hero',
        imageAlt:
            'Companion enjoying conversation with senior in Essex County NJ'
    },

    intro: {
        title: 'Purposeful Companionship for Every Essex County Neighborhood',
        content: [
            'Companion care restores joy and routine for seniors living across Newark, East Orange, Bloomfield, and Montclair. Our Concierge-Level™ team pairs each client with a thoughtfully matched companion who shares their interests, language, and preferred pace.',
            'We design visit plans that may include morning coffee in the Ironbound, art exhibits at the Montclair Art Museum, or wellness walks through Branch Brook Park. Families commuting to Manhattan or the suburbs appreciate knowing someone they trust is on hand when they cannot be.',
            'Every visit generates a detailed recap highlighting mood, appetite, activity participation, and any emerging needs. If something changes, our nurse supervisors coordinate quickly with family members and clinicians.'
        ]
    },

    regionalSections: [
        {
            title: 'Newark & East Orange Engagement',
            content: [
                'We support residents who love the rhythm of city life — shopping in the Ironbound, attending NJPAC performances, or visiting the Newark Public Library.',
                'Companions manage transit logistics, accompany clients to medical appointments, and keep safety top of mind in busy urban environments.'
            ]
        },
        {
            title: 'Montclair & Bloomfield Social Lifestyles',
            content: [
                'From Church Street cafés to evening concerts at the Wellmont Theater, we help Montclair seniors stay connected to the cultural scene.',
                'Companions coordinate with adult children, handle parking around bustling downtown districts, and ensure outings feel relaxed rather than rushed.'
            ]
        },
        {
            title: 'South Mountain & Township Communities',
            content: [
                'In Maplewood, South Orange, West Orange, and Livingston, we design visits around faith services, senior center programming, and scenic walks through South Mountain Reservation.',
                'Companions provide transportation and steadying support so loved ones can keep meaningful commitments without worry.'
            ]
        }
    ],

    serviceAreas: {
        title: 'Companion Care Coverage Throughout Essex County',
        subtitle:
            'Flexible visit lengths, from daily drop-ins to full-day social support, tailored to each household.',
        regions: [
            {
                name: 'Urban Neighborhoods',
                cities: ['Newark', 'East Orange', 'Irvington', 'Orange']
            },
            {
                name: 'Cultural Corridors',
                cities: ['Montclair', 'Bloomfield', 'Glen Ridge', 'Nutley']
            },
            {
                name: 'South Mountain Area',
                cities: [
                    'Maplewood',
                    'South Orange',
                    'West Orange',
                    'Livingston'
                ]
            }
        ]
    },

    services: {
        title: 'What Our Essex County Companions Provide',
        description:
            'Every visit is personalized to the household, balancing meaningful activity with practical support.',
        servicesList: [
            'Conversation, reminiscence, games, and brain fitness exercises tailored to personal interests',
            'Escorted outings for shopping, medical appointments, worship services, and cultural events',
            'Shared meals, hydration reminders, and light meal preparation that keep nutrition on track',
            'Wellness observations with prompt escalation to nurses when energy, appetite, or mood shifts'
        ]
    },

    servicesBenefits: [
        {
            title: 'Thoughtful Matching',
            description:
                'We pair companions based on language, interests, and personality so relationships feel natural from day one.'
        },
        {
            title: 'Concierge Coordination',
            description:
                'Scheduling, transportation, and back-up coverage are managed by our dedicated coordination team.'
        },
        {
            title: 'Multilingual Professionals',
            description:
                'Spanish, Portuguese, Haitian Creole, and additional language capabilities keep everyone comfortable.'
        },
        {
            title: 'Continuous Communication',
            description:
                'Families receive real-time updates and can review visit notes from any location.'
        }
    ],

    whyChoose: {
        title: 'Concierge-Level™ Companion Care Experience',
        content: [
            'Dedicated care coordinators learn each household’s preferences, calendars, and non-negotiables.',
            'Our team collaborates with physicians, social workers, and clergy to reinforce holistic well-being.',
            'We provide quick adjustments for hospitalizations, seasonal travel, or new interests that arise.'
        ]
    },

    cta: {
        title: 'Keep Your Loved One Connected to Essex County Life',
        description: [
            'Request a complimentary companion care consultation anywhere in Essex County and receive recommendations within 48 hours.',
            'We will match your family with a companion who brings warmth, reliability, and meaningful engagement to every visit.'
        ],
        buttonLabel: 'Plan Companion Visits',
        value: '800-338-7786'
    }
}
