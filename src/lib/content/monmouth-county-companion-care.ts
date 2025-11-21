import { Metadata } from 'next'
import { CountyPageContent } from './county-service-types'

export const monmouthCountyCompanionCareContent: CountyPageContent = {
    metadata: {
        title: 'Companion Care Services Monmouth County NJ | 360 Degree Care',
        description:
            'Concierge-Level™ companion care available across Monmouth County, NJ. Keep loved ones socially engaged from Middletown to Manasquan with trusted companions who understand each community.',
        keywords:
            'companion care monmouth county, senior companionship monmouth county nj, middletown nj companion services, red bank senior companion, long branch elder companion care'
    } as Metadata,

    schemaData: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Companion Care Services in Monmouth County',
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
            'Long Branch, NJ',
            'Freehold, NJ',
            'Marlboro, NJ',
            'Manasquan, NJ',
            'Rumson, NJ',
            'Asbury Park, NJ',
            'Sea Girt, NJ',
            'Atlantic Highlands, NJ'
        ],
        description:
            'Companion care professionals providing social engagement, meaningful activities, and lifestyle support for seniors throughout Monmouth County, New Jersey.',
        serviceType: 'Companion Care',
        availableChannel: {
            '@type': 'ServiceChannel',
            serviceUrl:
                'https://www.360degreecare.net/services/companion-care/monmouth-county',
            servicePhone: '+1-800-338-7786',
            availableLanguage: 'en'
        }
    },

    hero: {
        title: 'Companion Care Covering Every Corner of Monmouth County',
        subtitle:
            'Meaningful connection and joyful routines for seniors living along the Bayshore, inland suburbs, and Jersey Shore towns.',
        description:
            'From coffee in Red Bank to sunset strolls on the Asbury Park boardwalk, our companions help seniors stay engaged with the Monmouth County communities they love.',
        ctaButtonLabel: 'Schedule a Companion Visit',
        ctaValue: '800-338-7786',
        imageSrc: 'companion-care-hero',
        imageAlt: 'Companion care services for seniors in Monmouth County NJ'
    },

    intro: {
        title: 'Local Companions Who Understand Monmouth County Life',
        content: [
            'Monmouth County seniors deserve more than a quick visit—they deserve a companion who knows the rhythms of Bayshore boardwalks, downtown art walks, and the best route to Thompson Park. Our Concierge-Level™ approach pairs each family with a trained companion who shares interests and understands the community amenities that keep older adults active and fulfilled.',
            'Whether loved ones are aging in place along the Navesink River, within an active adult community in Marlboro, or in the coastal neighborhoods of Long Branch, we tailor schedules and outings to match their energy level, mobility, and preferences. Shopping at local farmers’ markets, attending worship services, and staying in touch with friends becomes simple with reliable transportation and heartfelt friendship.',
            'Every engagement plan includes comprehensive safety checks and close collaboration with families. We communicate the highlights of each visit, celebrate progress, and quickly flag changes in mood or health so your family can make informed decisions together.',
            'The Monmouth County Office on Aging’s 2024 Senior Needs Assessment reported that 69% of older adults plan to age in place and nearly half worry that severe weather could interrupt support. Our companions plan around those realities—scheduling Ocean Ride transportation, aligning with senior center calendars, and building backup indoor activities so isolation doesn’t creep in when storms roll through.',
            'Testimonials reinforce the difference: Steve D. shared how our aide “did exactly what the agency said she would do” during a Long Branch assignment, while JoAnn C. praised our ability to secure a live-in aide within 36 hours for her father. That same reliability fuels our companion program.'
        ]
    },

    regionalSections: [
        {
            title: 'Bayshore & Northern Monmouth Companions',
            content: [
                'Our companions support seniors throughout Middletown, Holmdel, Hazlet, Atlantic Highlands, and Highlands—communities where waterfront living meets tight-knit neighborhoods.',
                'We coordinate scenic drives along Route 36, coffee meetups at favorite Bayshore cafes, and gentle walks through Hartshorne Woods Park to keep mind and body active.'
            ]
        },
        {
            title: 'Central Monmouth Engagement',
            content: [
                'Inland families across Freehold, Marlboro, Manalapan, and Colts Neck count on us for structured weekly schedules that include fitness classes, errands, and social clubs.',
                'Companions plan outings to the Count Basie Center, Freehold Raceway Mall, and local senior centers, ensuring routines feel familiar yet vibrant.'
            ]
        },
        {
            title: 'Coastal & Southern Shore Support',
            content: [
                'Seniors in Red Bank, Long Branch, Asbury Park, Belmar, and Manasquan enjoy companionship that celebrates the shore lifestyle while prioritizing safety.',
                'Beachfront strolls, music on the promenade, and art events become accessible with companions trained to assist with mobility, hydration, and sun-safe practices.'
            ]
        }
    ],

    serviceAreas: {
        title: 'Where We Provide Companion Care in Monmouth County',
        subtitle:
            'Flexible scheduling throughout the county, with same-day support available for urgent situations.',
        regions: [
            {
                name: 'Bayshore Communities',
                cities: [
                    'Middletown',
                    'Holmdel',
                    'Hazlet',
                    'Keansburg',
                    'Atlantic Highlands',
                    'Highlands'
                ]
            },
            {
                name: 'Central Monmouth',
                cities: [
                    'Freehold',
                    'Marlboro',
                    'Colts Neck',
                    'Manalapan',
                    'Howell',
                    'Tinton Falls'
                ]
            },
            {
                name: 'Coastal Towns',
                cities: [
                    'Red Bank',
                    'Long Branch',
                    'Asbury Park',
                    'Rumson',
                    'Belmar',
                    'Manasquan'
                ]
            }
        ]
    },

    services: {
        title: 'What Monmouth County Companion Care Includes',
        description:
            'Concierge-Level™ services designed to strengthen emotional wellbeing and preserve independence.',
        servicesList: [
            'Conversation, games, and shared hobbies tailored to personal interests',
            'Accompaniment to appointments, social clubs, worship, and local events',
            'Meal planning, light meal prep, and shared dining to encourage nutrition',
            'Transportation for shopping, errands, and shoreline excursions',
            'Technology support for video calls, online classes, and telehealth visits',
            'Safety reminders, hydration checks, and fall-prevention awareness'
        ]
    },

    servicesBenefits: [
        {
            title: 'Reduce Isolation',
            description:
                'Regular visits encourage seniors to engage with friends, family, and beloved Monmouth County attractions.'
        },
        {
            title: 'Consistent Observation',
            description:
                'Trained companions notice subtle changes in mood or cognition and share updates with families quickly.'
        },
        {
            title: 'Customized Outings',
            description:
                'We design local experiences that match each person’s energy—from quiet library trips to lively community concerts.'
        },
        {
            title: 'Family Peace of Mind',
            description:
                'Loved ones receive detailed visit notes so they know daily routines are meaningful, safe, and on schedule.'
        }
    ],

    whyChoose: {
        title: 'Why Families Choose 360 Degree Care for Monmouth Companions',
        content: [
            'Our matching process looks beyond schedules to personality, interests, and communication style, ensuring every companion relationship feels natural and supportive.',
            'We remain actively involved with each case, coordinating with families, physicians, and preferred community programs to help seniors stay rooted in their routine.',
            'Every companion receives specialized training in dementia-friendly communication, fall prevention, and Shore-specific safety so outings stay comfortable year-round.'
        ]
    },

    cta: {
        title: 'Keep Loved Ones Connected to the Monmouth County Lifestyle They Treasure',
        description: [
            'Speak with a Concierge-Level™ care advisor today to design a companion schedule that keeps your family engaged, active, and safe.',
            'We can arrange introductions, same-week starts, and specialized companionship tailored to memory care, mobility challenges, or simply a need for meaningful friendship.'
        ],
        buttonLabel: 'Plan Companion Support',
        value: '800-338-7786'
    }
}
