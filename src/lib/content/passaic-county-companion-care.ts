import { Metadata } from 'next'
import { CountyPageContent } from './county-service-types'

export const passaicCountyCompanionCareContent: CountyPageContent = {
    metadata: {
        title: 'Companion Care Services Passaic County NJ | 360 Degree Care',
        description:
            'Concierge-Level™ companion care for seniors throughout Passaic County, NJ. Keep loved ones engaged from Wayne to West Milford with trusted companions who understand each neighborhood.',
        keywords:
            'companion care passaic county, senior companionship passaic nj, paterson companion services, clifton senior companion, wayne nj elder companionship'
    } as Metadata,

    schemaData: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Companion Care Services in Passaic County',
        provider: {
            '@type': 'Organization',
            name: '360 Degree Care',
            url: 'https://www.360degreecare.net',
            logo: 'https://www.360degreecare.net/logo.png',
            contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-201-299-4243',
                contactType: 'customer service',
                availableLanguage: 'en'
            }
        },
        areaServed: [
            'Passaic County, NJ',
            'Paterson, NJ',
            'Clifton, NJ',
            'Wayne, NJ',
            'Totowa, NJ',
            'Passaic, NJ',
            'Little Falls, NJ',
            'Hawthorne, NJ',
            'West Milford, NJ',
            'Ringwood, NJ',
            'Pompton Lakes, NJ'
        ],
        description:
            'Professional companions providing social engagement, outings, and lifestyle support for older adults living throughout Passaic County, New Jersey.',
        serviceType: 'Companion Care',
        availableChannel: {
            '@type': 'ServiceChannel',
            serviceUrl:
                'https://www.360degreecare.net/services/companion-care/passaic-county',
            servicePhone: '+1-201-299-4243',
            availableLanguage: 'en'
        }
    },

    hero: {
        title: 'Companion Care That Keeps Passaic County Residents Connected',
        subtitle:
            'Joyful routines and meaningful companionship across city neighborhoods, suburban cul-de-sacs, and northern lake communities.',
        description:
            'From the Paterson Great Falls to the trails of Ringwood State Park, our companions help seniors stay active, social, and supported in the Passaic County places they love.',
        ctaButtonLabel: 'Schedule a Companion Visit',
        ctaValue: '201-299-4243',
        imageSrc: 'companion-care-hero',
        imageAlt: 'Companion care services in Passaic County NJ'
    },

    intro: {
        title: 'Local Companions for Every Passaic County Lifestyle',
        content: [
            'Passaic County seniors thrive when daily life includes conversation, community events, and personalized activities. We match clients with trained companions who share interests and know the best cafes in Clifton, festivals in Woodland Park, and walking paths along the Passaic River.',
            'Whether a loved one lives in a Paterson brownstone, a Wayne townhouse, or a lakefront home in West Milford, our Concierge-Level™ team crafts schedules that fit their energy levels and mobility. Shared meals, art workshops, and errands become enjoyable with safe transportation and a trusted friend.',
            'We communicate after every visit so families stay informed and confident. When needs change, our care coordinators adjust services quickly, adding outing support, memory-friendly engagement, or additional personal care as required.',
            'Passaic County’s 2024 Healthy Aging survey noted that 64% of seniors rely on unpaid relatives for daily tasks and 38% cite winter weather as a barrier to social connection. Our companions plan around those realities—layering Access Link transportation, county senior-center calendars, and snow-route contingencies into every weekly schedule.',
            'Families attest to the impact: Alejandra M. shared how our Clifton team “dedicated their time in making sure that my father was comfortable,” while JoAnn C. praised the speed at which we arranged aides after her father’s discharge. That same responsiveness powers our companion care.'
        ]
    },

    regionalSections: [
        {
            title: 'Urban & Riverside Neighborhoods',
            content: [
                'In Paterson, Clifton, Passaic, and Totowa we provide companions who understand multi-unit buildings, walk-up apartments, and busy downtown streets.',
                'Clients enjoy museum tours, cultural centers, and the famous Paterson Great Falls with companions skilled in city navigation and safety.'
            ]
        },
        {
            title: 'Suburban Corridors',
            content: [
                'Wayne, Little Falls, Woodland Park, and Hawthorne residents receive structured schedules that include senior center programs, shopping, and faith community visits.',
                'Companions coordinate transportation along Routes 23, 46, and Interstate 80, making regional appointments simple.'
            ]
        },
        {
            title: 'Northern Highlands & Lake Communities',
            content: [
                'Families in Ringwood, West Milford, and Pompton Lakes count on us for companions who enjoy outdoor recreation and understand the unique logistics of rural roads.',
                'Seasonal activities—lake outings, farmer’s markets, and foliage drives—help seniors stay connected to the natural beauty surrounding their homes.'
            ]
        }
    ],

    serviceAreas: {
        title: 'Where We Provide Companion Care in Passaic County',
        subtitle:
            'Flexible visits available seven days a week with same-week starts for urgent requests.',
        regions: [
            {
                name: 'Urban Centers',
                cities: ['Paterson', 'Passaic', 'Clifton', 'Totowa']
            },
            {
                name: 'Suburban Communities',
                cities: ['Wayne', 'Little Falls', 'Woodland Park', 'Hawthorne']
            },
            {
                name: 'Northern Highlands',
                cities: ['Ringwood', 'West Milford', 'Pompton Lakes', 'Wanaque']
            }
        ]
    },

    services: {
        title: 'Companion Care Services',
        description:
            'Concierge-Level™ companionship tailored to emotional wellbeing, daily structure, and long-term independence.',
        servicesList: [
            'Engaging conversation, games, and hobby-based activities',
            'Accompaniment to appointments, community events, and social clubs',
            'Transportation for errands, shopping, and scenic drives',
            'Meal companionship, light meal prep, and hydration reminders',
            'Technology assistance for virtual visits, telehealth, and digital entertainment',
            'Safety check-ins with prompt communication to families'
        ]
    },

    servicesBenefits: [
        {
            title: 'Combat Isolation',
            description:
                'Regular visits keep seniors socially connected and emotionally supported even when family lives far away.'
        },
        {
            title: 'Preserve Favorite Routines',
            description:
                'Customized calendars maintain beloved Passaic County traditions—from church gatherings to local sports events.'
        },
        {
            title: 'Encourage Activity',
            description:
                'Companions encourage gentle movement, safe walks, and active participation in hobby groups or exercise classes.'
        },
        {
            title: 'Transparent Updates',
            description:
                'Families receive notes after each visit outlining wins, concerns, and suggestions for future outings.'
        }
    ],

    whyChoose: {
        title: 'Why Passaic County Families Choose 360 Degree Care',
        content: [
            'Our matching process considers interests, language preferences, cultural background, and commute to ensure every relationship feels natural.',
            'We collaborate with senior centers, religious organizations, and municipal programs throughout Passaic County to expand activity options.',
            'Concierge-Level™ coordination means one call handles scheduling changes, additional services, and real-time support.'
        ]
    },

    cta: {
        title: 'Keep Loved Ones Engaged in the Passaic County Community They Cherish',
        description: [
            'Speak with a Concierge-Level™ care advisor to design a companion plan that fits your family’s goals.',
            'We arrange introductions, confirm schedules, and provide detailed updates so you feel confident every step of the way.'
        ],
        buttonLabel: 'Plan Companion Support',
        value: '201-299-4243'
    }
}
