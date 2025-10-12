import { Metadata } from 'next'
import { CountyPageContent } from './county-service-types'

export const passaicCountyStaffingContent: CountyPageContent = {
    metadata: {
        title: 'Healthcare Staffing Passaic County NJ | 360 Degree Care',
        description:
            'Dependable healthcare staffing for Passaic County. Rapid placement of companions, CHHAs, nurses, and concierge personnel for communities and private households.',
        keywords:
            'healthcare staffing passaic county, medical staffing agency passaic nj, senior care staffing paterson, clifton caregiver staffing, wayne nj healthcare staffing'
    } as Metadata,

    schemaData: {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: '360 Degree Care Staffing',
        url: 'https://www.360degreecare.net',
        telephone: '+1-800-338-7786',
        areaServed: 'Passaic County, NJ',
        description:
            'Healthcare staffing agency providing caregivers, certified aides, nurses, and concierge support teams to Passaic County facilities and private clients.'
    },

    hero: {
        title: 'Healthcare Staffing Solutions for Passaic County',
        subtitle:
            'Concierge-Level™ recruiting and deployment for senior living, post-acute facilities, and private duty households.',
        description:
            'We maintain a vetted local workforce ready to cover census spikes, new programs, and VIP care across Passaic County.',
        ctaButtonLabel: 'Request Staffing Support',
        ctaValue: '800-338-7786',
        imageSrc: 'staffing-services-hero',
        imageAlt: 'Healthcare staffing professionals serving Passaic County NJ'
    },

    intro: {
        title: 'Staffing Tailored to Passaic County Providers',
        content: [
            'Our staffing division partners with assisted living communities, rehab centers, medical practices, and concierge households to solve workforce gaps fast. We screen for credentials, experience, and cultural fit before any assignment begins.',
            'Whether you need per diem coverage for a Paterson memory care community or long-term support for a Wayne concierge client, we handle scheduling, payroll, and compliance. Our specialists remain on-call 24/7 for callouts and last-minute census changes.',
            'Flexible agreements—per diem, recurring block coverage, or direct hire—enable organizations to scale confidently without sacrificing resident experience.'
        ]
    },

    regionalSections: [
        {
            title: 'Urban & Riverside Staffing',
            content: [
                'We support Paterson, Passaic, and Clifton communities with bilingual professionals and staff accustomed to high-acuity urban environments.',
                'All placements receive onboarding to site-specific policies, security procedures, and infection control standards.'
            ]
        },
        {
            title: 'Suburban Workforce Partners',
            content: [
                'Facilities and home care agencies in Wayne, Totowa, Little Falls, and Woodland Park rely on us for predictable coverage during census fluctuations.',
                'Local talent pipelines reduce commute-related callouts and keep schedules stable.'
            ]
        },
        {
            title: 'Northern Highlands Deployments',
            content: [
                'Ringwood, West Milford, Pompton Lakes, and Wanaque providers count on us for seasonal scaling, respite staffing, and concierge visitor support.',
                'We maintain teams comfortable navigating longer drive times and rural service areas.'
            ]
        }
    ],

    serviceAreas: {
        title: 'Passaic County Staffing Coverage',
        subtitle:
            'Rapid deployment with Concierge-Level™ account management and transparent performance reporting.',
        regions: [
            {
                name: 'Urban Centers',
                cities: ['Paterson', 'Passaic', 'Clifton', 'Totowa']
            },
            {
                name: 'Suburban Communities',
                cities: ['Wayne', 'Little Falls', 'Woodland Park', 'Haledon']
            },
            {
                name: 'Northern Highlands',
                cities: ['Ringwood', 'West Milford', 'Pompton Lakes', 'Wanaque']
            }
        ]
    },

    services: {
        title: 'Roles We Staff',
        description:
            'Healthcare professionals available for per diem, contract, and direct placement assignments.',
        servicesList: [
            'Certified Home Health Aides (CHHAs) and companions for private duty or facility shifts',
            'Licensed Practical Nurses (LPNs) for medication passes, wellness clinics, and staffing support',
            'Registered Nurses (RNs) for assessments, supervisory visits, and complex care programs',
            'Concierge caregivers for post-operative recovery, VIP visitors, and hotel/residence care',
            'Memory care, respite, and adult day staffing including activity coordinators',
            'Administrative and concierge support staff to manage resident relations and family communication'
        ]
    },

    servicesBenefits: [
        {
            title: 'Rigorous Vetting',
            description:
                'Background checks, competency exams, and reference verification ensure every professional arrives ready to work.'
        },
        {
            title: 'Local Workforce',
            description:
                'Passaic County talent pools mean shorter commutes, culturally aligned staff, and higher retention.'
        },
        {
            title: 'Flexible Contracts',
            description:
                'Per diem, contract-to-hire, and project-based arrangements adapt to changing census and service lines.'
        },
        {
            title: '24/7 Staffing Desk',
            description:
                'Live coordinators respond to callouts, schedule changes, and emergencies any time of day.'
        }
    ],

    whyChoose: {
        title: 'Why Providers Choose 360 Degree Care Staffing',
        content: [
            'Concierge-Level™ onboarding includes orientation, policy review, and shadow shifts for seamless integration.',
            'We deliver attendance tracking, compliance documentation, and performance notes for every placement.',
            'Strategic partnerships include workforce planning, census forecasting, and marketing collaboration when new programs launch.'
        ]
    },

    cta: {
        title: 'Secure Reliable Healthcare Staffing in Passaic County',
        description: [
            'Share your staffing requirements and we will present vetted professionals who match your timeline, culture, and budget.',
            'We can launch support within 24 hours for urgent needs or build a customized pipeline for long-term growth.'
        ],
        buttonLabel: 'Connect With Staffing Specialist',
        value: '800-338-7786'
    }
}
