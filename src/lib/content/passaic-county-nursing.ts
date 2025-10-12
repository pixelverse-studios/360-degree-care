import { Metadata } from 'next'
import { CountyPageContent } from './county-service-types'

export const passaicCountyNursingContent: CountyPageContent = {
    metadata: {
        title: 'Private Duty Nursing Passaic County NJ | 360 Degree Care',
        description:
            'Skilled private duty nurses serving Passaic County homes. Post-hospital support, wound care, medication management, and complex clinical oversight.',
        keywords:
            'private duty nursing passaic county, rn home care passaic nj, paterson private nurse, clifton skilled nursing at home, wayne nj in home nurse'
    } as Metadata,

    schemaData: {
        '@context': 'https://schema.org',
        '@type': 'MedicalBusiness',
        name: 'Private Duty Nursing in Passaic County',
        url: 'https://www.360degreecare.net',
        telephone: '+1-800-338-7786',
        areaServed: 'Passaic County, NJ',
        description:
            'Registered nurses and LPNs providing complex medical care, chronic disease management, and family education across Passaic County.'
    },

    hero: {
        title: 'Private Duty Nursing Across Passaic County',
        subtitle:
            'RN-led care plans for post-acute recovery, chronic conditions, and high-acuity needs.',
        description:
            'We transform Passaic County homes into safe recovery environments with skilled nursing oversight, advanced monitoring, and family coaching.',
        ctaButtonLabel: 'Request RN Support',
        ctaValue: '800-338-7786',
        imageSrc: 'nursing-services-hero',
        imageAlt: 'Private duty nurse visiting a patient in Passaic County NJ'
    },

    intro: {
        title: 'Hospital-Level Care at Home',
        content: [
            'Families rely on our private duty nurses after discharges from St. Joseph’s University Medical Center, Chilton Medical Center, and neighboring hospitals. We ensure physician orders are implemented immediately, preventing gaps that can lead to readmissions.',
            'Our nurses manage wound care, IV therapies, ventilators, complex medication schedules, and chronic disease monitoring. They coordinate closely with cardiologists, neurologists, oncologists, and primary care teams across Passaic County.',
            'Concierge-Level™ support includes 24/7 clinical availability, supply coordination, and detailed charting so families and providers stay aligned.'
        ]
    },

    regionalSections: [
        {
            title: 'Urban Acute Care Support',
            content: [
                'In Paterson, Passaic, and Clifton we staff nurses comfortable with high-rise apartments, limited parking, and multi-disciplinary teams.',
                'RNs provide tracheostomy care, wound vac management, and medication reconciliation while educating families on home safety.'
            ]
        },
        {
            title: 'Suburban Clinical Services',
            content: [
                'Wayne, Totowa, Woodland Park, and Little Falls clients receive scheduled nursing visits for cardiac recovery, diabetes management, and complex medication administration.',
                'We coordinate with physical and occupational therapists to reinforce care plans and monitor progress.'
            ]
        },
        {
            title: 'Northern Highlands Expertise',
            content: [
                'Ringwood, West Milford, Pompton Lakes, and Wanaque households benefit from nurses trained to navigate longer commutes, rural access roads, and emergency preparedness.',
                'Our team develops customized contingency plans for power outages, severe weather, and seasonal travel.'
            ]
        }
    ],

    serviceAreas: {
        title: 'Where Our Nurses Serve',
        subtitle:
            'Shift-based, intermittent, and live-in nursing coverage tailored to physician directives.',
        regions: [
            {
                name: 'Urban Centers',
                cities: ['Paterson', 'Passaic', 'Clifton', 'Totowa']
            },
            {
                name: 'Suburban Communities',
                cities: ['Wayne', 'Woodland Park', 'Haledon', 'Little Falls']
            },
            {
                name: 'Northern Highlands',
                cities: ['Ringwood', 'West Milford', 'Pompton Lakes', 'Wanaque']
            }
        ]
    },

    services: {
        title: 'Private Duty Nursing Services',
        description:
            'Advanced clinical support delivered by experienced RNs and LPNs.',
        servicesList: [
            'Comprehensive nursing assessments and individualized care plans',
            'Medication administration, infusion therapy, and pain management',
            'Advanced wound care, wound vac management, and post-surgical monitoring',
            'Ventilator, tracheostomy, and respiratory therapy support',
            'Enteral/parental nutrition management with caregiver training',
            'Palliative and hospice collaboration focused on comfort and symptom control'
        ]
    },

    servicesBenefits: [
        {
            title: 'Prevent Readmissions',
            description:
                'Close monitoring, timely interventions, and proactive care coordination reduce hospital returns.'
        },
        {
            title: 'Physician Collaboration',
            description:
                'Our nurses communicate with treating physicians and specialists, providing real-time updates and advocating for patient goals.'
        },
        {
            title: 'Family Coaching',
            description:
                'We teach families to operate equipment, manage medications, and recognize warning signs between visits.'
        },
        {
            title: 'Adaptive Scheduling',
            description:
                'Shift lengths and visit frequency adjust as acuity changes, ensuring the right level of support every week.'
        }
    ],

    whyChoose: {
        title: 'Why Choose 360 Degree Care Nurses',
        content: [
            'All private duty nurses pass rigorous credentialing, skill competency evaluations, and ongoing education specific to home-based care.',
            'Concierge-Level™ coordinators handle staffing, supply chains, and interdisciplinary communication, freeing families from administrative tasks.',
            'On-call clinical leadership responds 24/7, offering guidance during medication changes, new symptoms, or emergencies.'
        ]
    },

    cta: {
        title: 'Secure Skilled Nursing at Home in Passaic County',
        description: [
            'Call today to review needs with our nursing leadership and launch services as soon as the next day.',
            'We align with hospital discharge teams, coordinate equipment, and design a plan that keeps loved ones safe and comfortable at home.'
        ],
        buttonLabel: 'Arrange Private Duty Nursing',
        value: '800-338-7786'
    }
}
