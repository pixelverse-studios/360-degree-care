import { Metadata } from 'next'
import { CountyPageContent } from './county-service-types'

export const oceanCountyHomeHealthAidesContent: CountyPageContent = {
    metadata: {
        title: 'Home Health Aides Ocean County NJ | 360 Degree Care',
        description:
            'Certified home health aides supporting Ocean County seniors with personal care, chronic condition monitoring, and nurse oversight.',
        keywords:
            'home health aides ocean county, chha ocean county nj, toms river home health aide, brick nj chha services, jackson nj in home health aide'
    } as Metadata,

    schemaData: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Home Health Aide Services in Ocean County',
        provider: {
            '@type': 'HomeHealthCareService',
            name: '360 Degree Care',
            url: 'https://www.360degreecare.net',
            logo: 'https://www.360degreecare.net/logo.png',
            telephone: '+1-800-338-7786',
            areaServed: 'Ocean County, NJ',
            availableLanguage: 'en'
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
            'Licensed and bonded Certified Home Health Aides providing daily living support, health monitoring, and communication throughout Ocean County.',
        serviceType: 'Home Health Aide',
        availableChannel: {
            '@type': 'ServiceChannel',
            serviceUrl:
                'https://360degreecare.net/services/home-health-aides/ocean-county',
            servicePhone: '+1-800-338-7786',
            availableLanguage: 'en'
        }
    },

    hero: {
        title: 'Certified Home Health Aides Across Ocean County',
        subtitle:
            'Hands-on personal care with RN oversight tailored to shore living, 55+ communities, and inland neighborhoods.',
        description:
            'Our Concierge-Level™ CHHAs support bathing, mobility, medication reminders, and chronic condition management so seniors can safely remain at home.',
        ctaButtonLabel: 'Schedule a CHHA Assessment',
        ctaValue: '800-338-7786',
        imageSrc: 'home-health-aides-hero',
        imageAlt: 'Home health aide assisting senior in Ocean County NJ'
    },

    intro: {
        title: 'Consistent CHHA Support Backed by Nurses',
        content: [
            'Every CHHA plan starts with an RN assessment evaluating home safety, medical needs, and daily routines. We adapt the plan to shore homes, active adult communities, and rural properties alike.',
            'Our aides are licensed, insured, and trained in dementia care, fall prevention, and Concierge-Level™ hospitality. Schedulers provide reliable coverage—even when seasonal traffic or storms create delays.',
            'Families receive real-time communication, on-call clinical support, and backup staffing to keep care uninterrupted.'
        ]
    },

    regionalSections: [
        {
            title: 'Northern Shore & Barrier Island',
            content: [
                'Point Pleasant, Bay Head, and Seaside clients benefit from aides who navigate multi-level homes, limited parking, and bridge schedules.',
                'We coordinate with local physicians and pharmacies to ensure medications, supplies, and therapy orders stay aligned.'
            ]
        },
        {
            title: 'Central Mainland Communities',
            content: [
                'Toms River, Lakewood, Jackson, and Manchester families receive morning and evening support, medication reminders, and mobility assistance.',
                'CHHAs are familiar with community association protocols at Holiday City, Leisure Village, and similar developments.'
            ]
        },
        {
            title: 'Southern Shore & Long Beach Island',
            content: [
                'Barnegat, Stafford, and LBI households count on us to manage seasonal visitor schedules, hurricane preparedness, and evacuation plans.',
                'We tailor coverage to shoreline routines, including fishing excursions, boardwalk outings, and beach safety.'
            ]
        }
    ],

    serviceAreas: {
        title: 'Home Health Aide Coverage',
        subtitle:
            'Hourly, split-shift, and live-in CHHA schedules with rapid starts after hospital discharge.',
        regions: [
            {
                name: 'Northern Shore',
                cities: [
                    'Point Pleasant',
                    'Bay Head',
                    'Seaside Heights',
                    'Lavallette'
                ]
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
        title: 'Home Health Aide Services',
        description:
            'Comprehensive care coordinated under RN supervision to support health and independence.',
        servicesList: [
            'Bathing, grooming, dressing, and toileting assistance',
            'Vital sign monitoring, medication reminders, and symptom reporting',
            'Meal preparation, feeding assistance, and hydration tracking',
            'Mobility support, transfer assistance, and range-of-motion exercises',
            'Light housekeeping, laundry, and organization related to the care plan',
            'Specialized dementia, Parkinson’s, and chronic disease support'
        ]
    },

    servicesBenefits: [
        {
            title: 'Clinical Oversight',
            description:
                'Registered nurses develop and review care plans, ensuring aides follow physician directives.'
        },
        {
            title: 'Reliable Staffing',
            description:
                'We maintain backup aides, vacation coverage, and on-call coordinators to keep visits steady year-round.'
        },
        {
            title: 'Flexible Scheduling',
            description:
                'Adjust visit length and frequency as conditions improve, decline, or fluctuate seasonally.'
        },
        {
            title: 'Transparent Communication',
            description:
                'Families receive updates after each shift and can reach on-call nurses 24/7.'
        }
    ],

    whyChoose: {
        title: 'Why Choose Our Ocean County CHHAs',
        content: [
            'We match aides based on skills, personality, language, and commute to foster long-term relationships.',
            'Ongoing training focuses on dementia care, infection control, and shore-specific emergency preparedness.',
            'Concierge-Level™ coordination handles scheduling, supplies, and interdisciplinary communication.'
        ]
    },

    cta: {
        title: 'Arrange Certified Home Health Aide Support Today',
        description: [
            'Call to start your in-home assessment and receive a customized CHHA plan tailored to your loved one.',
            'We manage introductions, onboarding, and ongoing supervision so your family experiences effortless, professional care.'
        ],
        buttonLabel: 'Get CHHA Support',
        value: '800-338-7786'
    }
}
