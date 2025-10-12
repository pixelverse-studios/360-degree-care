import { Metadata } from 'next'
import { CountyPageContent } from './county-service-types'

export const monmouthCountyPersonalCareContent: CountyPageContent = {
    metadata: {
        title: 'Personal Care Services Monmouth County NJ | 360 Degree Care',
        description:
            'Discreet personal care for seniors across Monmouth County, NJ. Assistance with bathing, grooming, mobility, and daily routines from Middletown to Spring Lake.',
        keywords:
            'personal care monmouth county, in home care monmouth county nj, bathing assistance middletown nj, red bank personal care aides, long branch senior personal care'
    } as Metadata,

    schemaData: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Personal Care Services in Monmouth County',
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
            'Freehold, NJ',
            'Colts Neck, NJ',
            'Long Branch, NJ',
            'Red Bank, NJ',
            'Asbury Park, NJ',
            'Sea Bright, NJ',
            'Manalapan, NJ',
            'Howell, NJ',
            'Spring Lake, NJ'
        ],
        description:
            'Certified personal care professionals assisting with daily living tasks, mobility, and hygiene for Monmouth County seniors.',
        serviceType: 'Personal Care',
        availableChannel: {
            '@type': 'ServiceChannel',
            serviceUrl:
                'https://www.360degreecare.net/personal-care-monmouth-county',
            servicePhone: '+1-800-338-7786',
            availableLanguage: 'en'
        }
    },

    hero: {
        title: 'Personal Care That Respects Dignity Throughout Monmouth County',
        subtitle:
            'Certified aides delivering gentle, reliable support for daily routines at the shore, alongside the Navesink, and across our inland suburbs.',
        description:
            'Our Concierge-Level™ personal care team provides bathing assistance, mobility help, and hygiene support so Monmouth County seniors can live safely at home.',
        ctaButtonLabel: 'Book a Personal Care Assessment',
        ctaValue: '800-338-7786',
        imageSrc: 'personal-care-hero',
        imageAlt: 'Personal care services in Monmouth County NJ'
    },

    intro: {
        title: 'Trusted Personal Care for Monmouth County Families',
        content: [
            'Families in Middletown, Freehold, Rumson, and communities throughout Monmouth County rely on us when personal care tasks become overwhelming. We design respectful routines around bathing, dressing, grooming, and mobility that keep residents safe without sacrificing dignity.',
            'Each personal care plan begins with an in-home assessment led by a registered nurse who understands the unique layout and safety considerations of Monmouth County homes—from multistory colonials to coastal condos. We adapt schedules to tides, traffic, and community events so care remains consistent even during busy summer seasons.',
            'With ongoing communication, we ensure families feel confident about who is in their home, what services are provided, and how loved ones progress over time. Our team builds trust through punctuality, professionalism, and the Concierge-Level™ hospitality that defines 360 Degree Care.'
        ]
    },

    regionalSections: [
        {
            title: 'Personal Care Along the Bayshore',
            content: [
                'Residents in Middletown, Holmdel, Hazlet, and Atlantic Highlands receive caregivers skilled at navigating split-level homes, waterfront properties, and communities with limited parking.',
                'We coordinate with local physicians and therapy partners to keep personal care plans aligned with rehab goals and wellness recommendations.'
            ]
        },
        {
            title: 'Central Monmouth Daily Living Support',
            content: [
                'In Freehold, Marlboro, Colts Neck, and Manalapan we staff consistent aides who understand neighborhood associations, gated entries, and the routines of larger estates.',
                'Caregivers assist with morning and evening routines, bedside transfers, and daily mobility so residents can benefit from local amenities without strain.'
            ]
        },
        {
            title: 'Coastal & Southern Shore Coverage',
            content: [
                'Seniors in Red Bank, Long Branch, Asbury Park, Sea Bright, and Spring Lake receive flexible schedules that account for seasonal traffic and visitors.',
                'We maintain privacy in close-knit condo communities while ensuring bathing, grooming, and medication reminders remain on track every day.'
            ]
        }
    ],

    serviceAreas: {
        title: 'Serving Personal Care Needs Across Monmouth County',
        subtitle:
            'Available for hourly, daily, or live-in support with rapid start options when care needs change suddenly.',
        regions: [
            {
                name: 'Bayshore & Northern Towns',
                cities: [
                    'Middletown',
                    'Holmdel',
                    'Hazlet',
                    'Atlantic Highlands',
                    'Highlands',
                    'Keansburg'
                ]
            },
            {
                name: 'Central Communities',
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
                name: 'Coastal Shore Towns',
                cities: [
                    'Red Bank',
                    'Long Branch',
                    'Asbury Park',
                    'Rumson',
                    'Sea Bright',
                    'Spring Lake'
                ]
            }
        ]
    },

    services: {
        title: 'Core Personal Care Services',
        description:
            'Hands-on assistance and routine management provided by certified aides supervised by our nursing team.',
        servicesList: [
            'Bathing, showering, grooming, and oral hygiene assistance',
            'Toileting support, continence care, and discreet incontinence management',
            'Medication reminders and coordination with pharmacy deliveries',
            'Safe transfer support, ambulation, and mobility exercises',
            'Linen changes, bed-making, and wardrobe organization',
            'Meal preparation focused on nutritional guidelines and hydration reminders'
        ]
    },

    servicesBenefits: [
        {
            title: 'Maintain Independence',
            description:
                'Tailored assistance enables seniors to remain at home even when daily routines require hands-on help.'
        },
        {
            title: 'Reduce Fall Risk',
            description:
                'Trained aides provide steadying support, monitor wet surfaces, and encourage the use of assistive devices properly.'
        },
        {
            title: 'Preserve Dignity',
            description:
                'Respectful, same-gender matching and consistent caregivers build trust and comfort during personal care tasks.'
        },
        {
            title: 'Health Monitoring',
            description:
                'Regular documentation and nurse oversight highlight changes in skin integrity, appetite, or mobility early.'
        }
    ],

    whyChoose: {
        title: 'Why Monmouth County Families Trust Our Personal Care Team',
        content: [
            'Concierge-Level™ case management pairs each household with a dedicated coordinator who anticipates schedule changes, specialist visits, and seasonal needs.',
            'Our caregivers receive ongoing training in dementia-friendly bathing techniques, safe transfers, and infection control suited to home environments.',
            'We collaborate closely with local hospitals, rehab centers, and visiting physicians to keep care plans aligned with medical goals.'
        ]
    },

    cta: {
        title: 'Give Loved Ones the Dignified Personal Care They Deserve',
        description: [
            'Contact us to arrange an in-home assessment anywhere in Monmouth County and receive a customized personal care plan within 48 hours.',
            'Our Concierge-Level™ team coordinates schedules, introduces carefully matched aides, and keeps families updated every step of the way.'
        ],
        buttonLabel: 'Start Personal Care Planning',
        value: '800-338-7786'
    }
}
