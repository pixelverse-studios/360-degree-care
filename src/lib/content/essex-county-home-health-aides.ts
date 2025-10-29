import { Metadata } from 'next'
import { CountyPageContent } from './county-service-types'

export const essexCountyHomeHealthAidesContent: CountyPageContent = {
    metadata: {
        title: 'Home Health Aides Essex County NJ | 360 Degree Care',
        description:
            'Certified home health aides deliver hands-on personal care, chronic condition monitoring, and nurse supervision across Essex County, NJ.',
        keywords:
            'home health aides essex county, newark chha, east orange home health aide, montclair certified aides'
    } as Metadata,

    schemaData: {
        '@context': 'https://schema.org',
        '@type': 'HomeHealthCareService',
        name: 'Home Health Aide Services in Essex County',
        provider: {
            '@type': 'Organization',
            name: '360 Degree Care',
            url: 'https://www.360degreecare.net',
            logo: 'https://www.360degreecare.net/logo.png',
            telephone: '+1-800-338-7786',
            areaServed: 'Essex County, NJ',
            availableLanguage: 'en'
        },
        areaServed: [
            'Essex County, NJ',
            'Newark, NJ',
            'East Orange, NJ',
            'Montclair, NJ',
            'Irvington, NJ',
            'Orange, NJ',
            'Bloomfield, NJ',
            'West Orange, NJ',
            'South Orange, NJ',
            'Maplewood, NJ',
            'Livingston, NJ'
        ],
        description:
            'Certified home health aides supporting Essex County seniors with bathing, mobility, wound care assistance, and wellness observation.',
        serviceType: 'Home Health Aides',
        availableChannel: {
            '@type': 'ServiceChannel',
            serviceUrl:
                'https://www.360degreecare.net/services/home-health-aides/essex-county',
            servicePhone: '+1-800-338-7786',
            availableLanguage: 'en'
        }
    },

    hero: {
        title: 'Nurse-Supervised Home Health Aides for Essex County',
        subtitle:
            'Certified aides trusted in Newark apartments, East Orange senior towers, and Montclair homes alike.',
        description:
            'Our Concierge-Level™ CHHA program provides hands-on personal care, mobility support, and clinical oversight so seniors can remain safe and independent at home.',
        ctaButtonLabel: 'Request Aide Coverage',
        ctaValue: '800-338-7786',
        imageSrc: 'home-health-aides-hero',
        imageAlt: 'Home health aide assisting senior in Essex County NJ'
    },

    intro: {
        title: 'Hands-On Support Families Can Trust',
        content: [
            'Complex health needs require attentive, well-trained aides. We recruit certified home health aides who understand the nuances of Essex County neighborhoods—from elevator buildings near Newark Penn Station to historic homes in Montclair and Maplewood.',
            'Every client receives a nurse-developed care plan covering personal hygiene, transfers, vitals monitoring, and meal preparation. Supervising RNs conduct routine visits, communicate with physicians, and provide coaching to caregivers and families.',
            'Concierge-Level™ scheduling ensures seamless coverage, quick replacements, and detailed visit recaps delivered to family portals and preferred communication channels.'
        ]
    },

    regionalSections: [
        {
            title: 'Urban In-Home Clinical Support',
            content: [
                'In Newark, East Orange, and Irvington, our aides navigate high-rise security procedures, limited parking, and multilingual households with professionalism.',
                'We coordinate with University Hospital, Beth Israel, and CareWell Health discharge teams to prevent rehospitalizations and maintain continuity.'
            ]
        },
        {
            title: 'Suburban Recovery & Chronic Care',
            content: [
                'Montclair, Bloomfield, and Glen Ridge residents receive consistent aides trained in post-surgical protocols, dementia care, and fall prevention for multi-story homes.',
                'We align visits with outpatient therapy schedules, physician appointments, and community support services.'
            ]
        },
        {
            title: 'South Mountain & Livingston Coverage',
            content: [
                'In South Orange, Maplewood, West Orange, and Livingston, aides collaborate with specialty clinics at Cooperman Barnabas and Saint Barnabas Medical Center.',
                'Families balancing work and caregiving rely on our transparent communication and rapid adjustments when needs change.'
            ]
        }
    ],

    serviceAreas: {
        title: 'Home Health Aide Coverage Throughout Essex County',
        subtitle:
            'Hourly, extended shift, and live-in CHHA options available within 48 hours of assessment.',
        regions: [
            {
                name: 'Urban Care Hubs',
                cities: ['Newark', 'East Orange', 'Irvington', 'Orange']
            },
            {
                name: 'North & Central Essex',
                cities: ['Montclair', 'Bloomfield', 'Glen Ridge', 'Nutley']
            },
            {
                name: 'South Mountain Communities',
                cities: [
                    'South Orange',
                    'Maplewood',
                    'West Orange',
                    'Livingston'
                ]
            }
        ]
    },

    services: {
        title: 'What Our Essex County CHHAs Provide',
        description:
            'Certified aides deliver hands-on care informed by nurse-developed plans and cultural awareness.',
        servicesList: [
            'Bathing, grooming, toileting, and dressing assistance delivered with discretion',
            'Mobility, positioning, and transfer support that reduces fall risk in elevators and stairwells',
            'Medication reminders, vital checks, and symptom observation with rapid nurse escalation',
            'Meal preparation, hydration reminders, and grocery coordination tailored to cultural preferences'
        ]
    },

    servicesBenefits: [
        {
            title: 'Nurse Oversight Every Visit',
            description:
                'RNs supervise cases, update care plans, and communicate directly with physicians and therapists.'
        },
        {
            title: 'Culturally Competent Care',
            description:
                'Aides reflect the diversity of Essex County and receive ongoing training in cultural humility and language support.'
        },
        {
            title: 'Flexible Staffing Models',
            description:
                'From two-hour blocks to 24/7 coverage, we customize staffing to your household’s schedule and budget.'
        },
        {
            title: 'Detailed Communication',
            description:
                'Family portals, phone updates, and secure messaging keep everyone informed in real time.'
        }
    ],

    whyChoose: {
        title: 'Concierge-Level™ Home Health Aide Coordination',
        content: [
            'Care coordinators anticipate transit delays, weather events, and cultural observances that impact scheduling.',
            'We maintain a ready bench of credentialed aides to cover vacations, illness, or changing acuity needs.',
            'Supervising nurses conduct quality assurance visits and mentor aides to deliver consistent excellence.'
        ]
    },

    cta: {
        title: 'Secure Dependable Aide Support in Essex County',
        description: [
            'Arrange an in-home assessment and receive a tailored aide schedule within 48 hours.',
            'Our team will match you with compassionate, credentialed professionals who keep your loved one safe at home.'
        ],
        buttonLabel: 'Start Home Health Aide Services',
        value: '800-338-7786'
    }
}
