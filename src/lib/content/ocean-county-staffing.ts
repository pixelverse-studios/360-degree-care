import { Metadata } from 'next'
import { CountyPageContent } from './county-service-types'

export const oceanCountyStaffingContent: CountyPageContent = {
    metadata: {
        title: 'Healthcare Staffing Ocean County NJ | 360 Degree Care',
        description:
            'Reliable healthcare staffing for Ocean County providers and households. Rapid placement of companions, CHHAs, nurses, and concierge personnel.',
        keywords:
            'healthcare staffing ocean county, medical staffing agency ocean county nj, senior care staffing toms river, brick nj caregiver staffing, ocean county nurse staffing'
    } as Metadata,

    schemaData: {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: '360 Degree Care Staffing',
        url: 'https://www.360degreecare.net',
        telephone: '+1-800-338-7786',
        areaServed: 'Ocean County, NJ',
        description:
            'Healthcare staffing agency providing caregivers, certified aides, nurses, and concierge support teams for Ocean County facilities and private-duty clients.'
    },

    hero: {
        title: 'Healthcare Staffing Solutions for Ocean County',
        subtitle:
            'Concierge-Level™ recruiting and deployment for senior living communities, medical practices, and private households.',
        description:
            'From Toms River to Long Beach Island, we maintain a vetted workforce ready to cover census spikes, seasonal needs, and specialty requests.',
        ctaButtonLabel: 'Request Staffing Support',
        ctaValue: '800-338-7786',
        imageSrc: 'staffing-services-hero',
        imageAlt: 'Healthcare staffing professionals serving Ocean County NJ'
    },

    intro: {
        title: 'Staffing Tailored to Ocean County Operations',
        content: [
            'Our staffing division partners with assisted living communities, sub-acute centers, medical offices, and concierge clients across the Jersey Shore. We screen for credentials, experience, and cultural fit before presenting candidates.',
            'Coastal communities experience unique ebb-and-flow: seasonal tourism, snowbird schedules, and continuing care expansion. We offer per diem, contract, and direct hire options so organizations can scale confidently.',
            'Concierge-Level™ account management handles scheduling, payroll, compliance, and 24/7 coverage so your team can prioritize resident experience and outcomes.'
        ]
    },

    regionalSections: [
        {
            title: 'Northern Shore Deployments',
            content: [
                'Point Pleasant, Bay Head, and Brick partners rely on us for bilingual staff, dementia-trained companions, and vacation coverage during the summer surge.',
                'Personnel receive orientation on local facility policies, boardwalk safety, and marina proximity requirements.'
            ]
        },
        {
            title: 'Central Mainland Workforce',
            content: [
                'In Toms River, Lakewood, Jackson, and Manchester we support skilled nursing facilities, assisted living communities, and large home care agencies with predictable staffing pipelines.',
                'Local talent pools reduce commute-related callouts and support culturally aligned placement.'
            ]
        },
        {
            title: 'Southern Shore & Long Beach Island',
            content: [
                'Stafford, Barnegat, Waretown, and LBI clients count on us for concierge coverage, post-operative recovery teams, and rapid staffing during seasonal influxes.',
                'We maintain teams comfortable navigating barrier-island logistics, bridge schedules, and emergency preparedness plans.'
            ]
        }
    ],

    serviceAreas: {
        title: 'Ocean County Staffing Coverage',
        subtitle:
            'Rapid deployment with transparent performance reporting and attendance tracking.',
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
        title: 'Roles We Staff',
        description:
            'Healthcare professionals ready for per diem, contract, or direct placement assignments.',
        servicesList: [
            'Certified Home Health Aides (CHHAs) and companions for facility or private duty coverage',
            'Licensed Practical Nurses (LPNs) for medication passes, wellness clinics, and sub-acute support',
            'Registered Nurses (RNs) for supervisory visits, assessments, and high-acuity programs',
            'Concierge caregivers for post-op recovery, VIP visitors, and short-term rentals along the shore',
            'Memory care specialists and activity coordinators for adult day and respite programs',
            'Administrative and concierge staff to enhance resident services and family communication'
        ]
    },

    servicesBenefits: [
        {
            title: 'Thorough Vetting',
            description:
                'Background checks, references, skill demonstrations, and competency exams exceed state requirements.'
        },
        {
            title: 'Local Expertise',
            description:
                'Staff live within Ocean County or neighboring areas, reducing travel issues during peak tourism or storms.'
        },
        {
            title: 'Flexible Agreements',
            description:
                'Per diem, recurring block coverage, and contract-to-hire options adapt to census swings.'
        },
        {
            title: '24/7 Staffing Desk',
            description:
                'Live coordinators handle callouts, schedule changes, and emergencies any time of day.'
        }
    ],

    whyChoose: {
        title: 'Why Providers Choose 360 Degree Care Staffing',
        content: [
            'Concierge-Level™ onboarding includes orientation, policy review, and shadow shifts for seamless integration.',
            'We deliver attendance tracking, compliance documentation, and performance feedback for every placement.',
            'Strategic partnerships feature workforce planning, census forecasting, and marketing collaboration when new programs launch.'
        ]
    },

    cta: {
        title: 'Secure Reliable Healthcare Staffing in Ocean County',
        description: [
            'Share your coverage requirements and we will present vetted professionals who match your culture and timeline.',
            'Our staffing specialists can launch support within 24 hours for urgent needs or develop a long-term pipeline for growth.'
        ],
        buttonLabel: 'Connect With Staffing Specialist',
        value: '800-338-7786'
    }
}
