import { Metadata } from 'next'
import { CountyPageContent } from './county-service-types'

export const oceanCountyCompanionCareContent: CountyPageContent = {
    metadata: {
        title: 'Companion Care Services Ocean County NJ | 360 Degree Care',
        description:
            'Concierge-Level™ companion care across Ocean County, NJ. Keep loved ones engaged from Toms River to Long Beach Island with companions who understand each shore-town lifestyle.',
        keywords:
            'companion care ocean county, senior companionship ocean county nj, toms river companion care, brick nj senior companion, lbi elder companionship'
    } as Metadata,

    schemaData: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Companion Care Services in Ocean County',
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
            'Barnegat Township, NJ',
            'Point Pleasant, NJ',
            'Seaside Heights, NJ',
            'Manchester Township, NJ',
            'Berkeley Township, NJ',
            'Long Beach Island, NJ'
        ],
        description:
            'Professional companion caregivers providing social engagement, meaningful activities, and lifestyle support for Ocean County seniors.',
        serviceType: 'Companion Care',
        availableChannel: {
            '@type': 'ServiceChannel',
            serviceUrl:
                'https://www.360degreecare.net/companion-care-ocean-county',
            servicePhone: '+1-800-338-7786',
            availableLanguage: 'en'
        }
    },

    hero: {
        title: 'Companion Care That Keeps Ocean County Seniors Connected',
        subtitle:
            'Meaningful routines and joyful outings across shore towns, active-adult communities, and inland neighborhoods.',
        description:
            'From bayfront boardwalks to quiet pine barrens, our companions help Ocean County seniors stay social, active, and supported in the places they love.',
        ctaButtonLabel: 'Schedule a Companion Visit',
        ctaValue: '800-338-7786',
        imageSrc: 'companion-care-hero',
        imageAlt: 'Companion care services for seniors in Ocean County NJ'
    },

    intro: {
        title: 'Local Companions for the Jersey Shore Lifestyle',
        content: [
            'Ocean County offers an unbeatable mix of shore living, resort towns, and 55+ active-adult communities. We pair each client with a companion who understands local traditions—from summer concerts in Seaside Heights to morning walks along Barnegat Bay.',
            'Our Concierge-Level™ team builds customized calendars around favorite routines, religious services, club meetings, and community amenities. Whether loved ones live in Holiday City, Greenbriar, or a beachfront home, we adapt visit frequency and activities to match energy level and health goals.',
            'Families receive after-visit summaries highlighting wins, concerns, and ideas for future outings so everyone stays aligned.'
        ]
    },

    regionalSections: [
        {
            title: 'Northern Barrier Island & Mainland',
            content: [
                'Point Pleasant, Bay Head, Brick, and Mantoloking residents enjoy shorefront strolls, local festivals, and marina visits with companions who know seasonal traffic patterns.',
                'We coordinate safe transportation to doctors, shopping, and community centers along Route 35 and Route 88.'
            ]
        },
        {
            title: 'Central Mainland Communities',
            content: [
                'Toms River, Lakewood, Jackson, and Manchester seniors benefit from structured schedules that include senior center programs, synagogue or church services, and wellness classes.',
                'Companions manage transportation along Routes 9, 37, and the Garden State Parkway, keeping errands and appointments on time.'
            ]
        },
        {
            title: 'Southern Shore & Long Beach Island',
            content: [
                'Families in Barnegat, Stafford, Waretown, and LBI receive support tailored to coastal living, seasonal visitors, and barrier-island logistics.',
                'Our companions plan scenic drives, lighthouse tours, and boardwalk outings while prioritizing hydration and mobility safety.'
            ]
        }
    ],

    serviceAreas: {
        title: 'Where We Provide Companion Care',
        subtitle:
            'Flexible visit options, including same-week starts and evening or weekend companionship.',
        regions: [
            {
                name: 'Northern Shore',
                cities: ['Point Pleasant', 'Bay Head', 'Brick', 'Mantoloking']
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
        title: 'Companion Care Services',
        description:
            'Concierge-Level™ companionship focused on emotional wellbeing and community engagement.',
        servicesList: [
            'Conversation, games, and hobby-based engagement tailored to personal interests',
            'Accompaniment to appointments, clubs, and community events',
            'Transportation for errands, shoreline excursions, and entertainment',
            'Meal companionship, light meal prep, and dining out support',
            'Technology assistance for video calls, telehealth, and digital hobbies',
            'Wellness check-ins with timely communication to family members'
        ]
    },

    servicesBenefits: [
        {
            title: 'Reduce Isolation',
            description:
                'Regular visits keep seniors socially connected, especially during off-season months when shore towns feel quieter.'
        },
        {
            title: 'Preserve Traditions',
            description:
                'Companions help maintain beloved activities like fishing on the bay, attending local markets, or visiting boardwalk attractions.'
        },
        {
            title: 'Encourage Activity',
            description:
                'Gentle walks, stretching, and community outings support physical health and confidence.'
        },
        {
            title: 'Family Peace of Mind',
            description:
                'Detailed visit notes ensure loved ones know how each day went and what outings are planned next.'
        }
    ],

    whyChoose: {
        title: 'Why Ocean County Families Choose 360 Degree Care',
        content: [
            'Our companion matching considers personality, shared interests, language, and commute to create natural friendships.',
            'We collaborate with shore-town senior centers, faith communities, and local organizations to expand activity options.',
            'Concierge-Level™ coordination means families make one call to adjust schedules, add personal care, or arrange transportation.'
        ]
    },

    cta: {
        title: 'Keep Loved Ones Engaged with Ocean County Companions',
        description: [
            'Talk with a Concierge-Level™ advisor to design a companion schedule that fits your family’s goals.',
            'We coordinate introductions, confirm visits, and provide ongoing updates so you feel confident every step of the way.'
        ],
        buttonLabel: 'Plan Companion Support',
        value: '800-338-7786'
    }
}
