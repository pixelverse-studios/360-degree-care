import { Metadata } from 'next'
import { CountyPageContent } from './county-service-types'

export const monmouthCountyHomeHealthAidesContent: CountyPageContent = {
    metadata: {
        title: 'Home Health Aides Monmouth County NJ | 360 Degree Care',
        description:
            'Certified home health aides supporting Monmouth County seniors with skilled personal care, chronic condition monitoring, and nurse oversight.',
        keywords:
            'home health aides monmouth county, certified home health aide nj, chha monmouth county, long branch home health aide, middletown nj home health services'
    } as Metadata,

    schemaData: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Home Health Aide Services in Monmouth County',
        provider: {
            '@type': 'HomeHealthCareService',
            name: '360 Degree Care',
            url: 'https://www.360degreecare.net',
            logo: 'https://www.360degreecare.net/logo.png',
            telephone: '+1-800-338-7786',
            areaServed: 'Monmouth County, NJ',
            availableLanguage: 'en'
        },
        areaServed: [
            'Monmouth County, NJ',
            'Middletown, NJ',
            'Holmdel, NJ',
            'Freehold, NJ',
            'Marlboro, NJ',
            'Long Branch, NJ',
            'Red Bank, NJ',
            'Asbury Park, NJ',
            'Belmar, NJ',
            'Rumson, NJ',
            'Sea Girt, NJ',
            'Manasquan, NJ'
        ],
        description:
            'Licensed and bonded Certified Home Health Aides delivering daily living support, chronic condition monitoring, and family communication throughout Monmouth County.',
        serviceType: 'Home Health Aide',
        availableChannel: {
            '@type': 'ServiceChannel',
            serviceUrl:
                'https://www.360degreecare.net/services/home-health-aides/monmouth-county',
            servicePhone: '+1-800-338-7786',
            availableLanguage: 'en'
        }
    },

    hero: {
        title: 'Certified Home Health Aides Across Monmouth County',
        subtitle:
            'Hands-on care, medication support, and RN oversight tailored to shore towns, suburban neighborhoods, and estate properties.',
        description:
            'Our CHHA team delivers Concierge-Level™ care, helping Monmouth County adults age comfortably at home with clinical oversight and compassionate service.',
        ctaButtonLabel: 'Request a CHHA Match',
        ctaValue: '800-338-7786',
        imageSrc: 'home-health-aides-hero',
        imageAlt: 'Home health aide assisting senior in Monmouth County NJ'
    },

    intro: {
        title: 'Consistent CHHA Support Led by Nurses',
        content: [
            'Every home health aide assignment begins with an RN assessment that considers mobility, medication routines, nutrition, and the layout of your Monmouth County home. From Highlands walk-ups to Colts Neck estates, we craft a safety-first plan that fits everyday life.',
            'Our aides are carefully vetted, licensed, and trained in Concierge-Level™ hospitality. They provide daily personal care, monitor changes, and escalate concerns to our nursing team so families get real-time updates without coordinating multiple vendors.',
            'We maintain backup staffing, vacation coverage, and 24/7 clinical availability to keep care uninterrupted. Families can focus on relationships knowing professional support is always in place.',
            'Monmouth County’s 2024 Senior Needs Assessment highlighted that 52% of providers struggle to maintain staffing during summer tourism spikes and coastal evacuations. Our CHHA schedules incorporate those findings with dedicated shore-season teams, generator-readiness checklists, and Ocean Ride coordination.',
            'Families frequently share their relief: Steve D. noted that our aide “did exactly what the agency said she would do” in Long Branch, and JoAnn C. praised how we secured a live-in aide within 36 hours after a hospital discharge. That same level of responsiveness guides every Monmouth County CHHA plan.'
        ]
    },

    regionalSections: [
        {
            title: 'Bayshore & Northern Coverage',
            content: [
                'Serving Middletown, Holmdel, Atlantic Highlands, and nearby communities with aides experienced in multi-level homes and waterfront living.',
                'We coordinate with local physicians and therapy partners to maintain continuity during rehab or chronic condition management.'
            ]
        },
        {
            title: 'Central Monmouth Clinical Support',
            content: [
                'In Freehold, Marlboro, Manalapan, and Colts Neck we provide consistent teams familiar with gated communities, long driveways, and estate security protocols.',
                'Our aides manage medication reminders, ostomy support, and catheter care under direct RN supervision.'
            ]
        },
        {
            title: 'Coastal Shore Town Expertise',
            content: [
                'Long Branch, Red Bank, Asbury Park, Belmar, and Manasquan families depend on us during busy summer seasons when logistics and visitor schedules shift.',
                'We adjust to shore traffic, coordinate with local pharmacies, and maintain privacy in condo and townhouse settings.'
            ]
        }
    ],

    serviceAreas: {
        title: 'Home Health Aide Service Areas',
        subtitle:
            'Available for hourly, split-shift, and live-in coverage with rapid-start options following hospital discharge.',
        regions: [
            {
                name: 'Bayshore Communities',
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
                name: 'Shore Towns',
                cities: [
                    'Red Bank',
                    'Long Branch',
                    'Asbury Park',
                    'Belmar',
                    'Sea Girt',
                    'Manasquan'
                ]
            }
        ]
    },

    services: {
        title: 'Home Health Aide Services',
        description:
            'Comprehensive in-home care, coordinated under RN supervision, to support medical and personal needs.',
        servicesList: [
            'Bathing, dressing, grooming, and toileting assistance',
            'Medication reminders, vitals monitoring, and symptom reporting',
            'Nutritional support including meal prep, feeding assistance, and hydration tracking',
            'Mobility support, transfer assistance, and range-of-motion exercises',
            'Household tasks tied to the care plan: laundry, linens, light housekeeping',
            'Specialized dementia and Parkinson’s care with behavior tracking'
        ]
    },

    servicesBenefits: [
        {
            title: 'Clinical Oversight',
            description:
                'Registered nurses develop and monitor each plan of care, keeping aides aligned with physician orders.'
        },
        {
            title: 'Flexible Scheduling',
            description:
                'Adjust visit length and frequency to cover morning routines, full-day supervision, or live-in support.'
        },
        {
            title: 'Continuity of Care',
            description:
                'We prioritize consistent staffing and provide introductions, shadow shifts, and backup aides when needed.'
        },
        {
            title: 'Transparent Communication',
            description:
                'Families receive regular updates and can reach on-call nurses 24/7 to review changes or concerns.'
        }
    ],

    whyChoose: {
        title: 'Why Choose Our Monmouth County CHHAs',
        content: [
            'Every aide is carefully matched with families based on skill set, personality, and commute preferences to support long-term relationships.',
            'We maintain rigorous credentialing, continuing education, and competency checks focused on chronic illness, dementia, and post-acute needs.',
            'Our Concierge-Level™ operations team handles scheduling, supply coordination, and interdisciplinary communication so care runs smoothly.'
        ]
    },

    cta: {
        title: 'Arrange Certified Home Health Aide Support Today',
        description: [
            'Call to start your in-home assessment and receive a customized CHHA plan tailored to your loved one’s care needs.',
            'We handle the introductions, onboarding, and ongoing supervision so families experience effortless, professional care at home.'
        ],
        buttonLabel: 'Schedule CHHA Assessment',
        value: '800-338-7786'
    }
}
