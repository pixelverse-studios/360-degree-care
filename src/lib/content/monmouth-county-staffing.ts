import { Metadata } from 'next'
import { CountyPageContent } from './county-service-types'

export const monmouthCountyStaffingContent: CountyPageContent = {
    metadata: {
        title: 'Healthcare Staffing Monmouth County NJ | 360 Degree Care',
        description:
            'Reliable healthcare staffing for Monmouth County facilities and communities. Rapid placement of companions, aides, nurses, and specialized personnel.',
        keywords:
            'healthcare staffing monmouth county, medical staffing agency nj, senior care staffing middletown, long branch healthcare staffing, monmouth county caregiver staffing'
    } as Metadata,

    schemaData: {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: '360 Degree Care Staffing',
        url: 'https://www.360degreecare.net',
        telephone: '+1-800-338-7786',
        areaServed: 'Monmouth County, NJ',
        description:
            'Healthcare staffing agency providing companions, certified aides, private duty nurses, and concierge support personnel for Monmouth County clients.'
    },

    hero: {
        title: 'Healthcare Staffing Solutions Across Monmouth County',
        subtitle:
            'Concierge-Level™ recruiting and deployment for senior living communities, medical practices, and private households.',
        description:
            'From Red Bank to Sea Girt, we supply vetted caregivers, companions, CHHAs, LPNs, and RNs ready to support fluctuating census and specialized care requests.',
        ctaButtonLabel: 'Request Staffing Support',
        ctaValue: '800-338-7786',
        imageSrc: 'staffing-services-hero',
        imageAlt: 'Healthcare staffing professionals in Monmouth County NJ'
    },

    intro: {
        title: 'Staffing Tailored to Monmouth County Providers',
        content: [
            'Our staffing division partners with home care agencies, assisted living communities, post-acute centers, and concierge households to solve coverage gaps quickly. We maintain a Monmouth County cadre of credentialed professionals who understand local standards, facility layouts, and client expectations.',
            'Every placement undergoes rigorous screening, skill verification, and cultural alignment to ensure a seamless fit. We handle scheduling, payroll, compliance audits, and rapid replacements so administrators can focus on resident experience and clinical quality.',
            'Flexible contract options—per diem, block scheduling, and direct hire—make it easy to ramp staffing up or down for seasonal schedules, new program launches, and census surges.',
            'The 2024 Monmouth County Senior Needs Assessment noted that 52% of local providers struggle to maintain staffing during summer tourism spikes and coastal evacuation events. Our shore-season surge teams, Bayshore-ready caregiver pool, and on-call nurse managers absorb that volatility so resident care never skips a beat.',
            'Administrators echo the difference: a Red Bank memory care director credited our bilingual CHHAs with preventing agency transfers last July, and Steve D. praised how our temporary aide “did exactly what the agency said she would do” throughout a Long Branch assignment. Those testimonials drive the service standards we bring to every Monmouth partner.'
        ]
    },

    regionalSections: [
        {
            title: 'Staffing Support for Bayshore & Northern Communities',
            content: [
                'We serve senior living communities and medical groups in Middletown, Holmdel, Hazlet, and Atlantic Highlands with short-notice coverage and long-term assignments.',
                'All personnel are trained on local facility procedures, including access controls, emergency preparedness, and waterfront evacuation plans.'
            ]
        },
        {
            title: 'Central Monmouth Workforce Partners',
            content: [
                'Freehold, Marlboro, Manalapan, and Colts Neck partners rely on us for predictable staffing during expansions, renovations, and peak census periods.',
                'Our recruiters maintain a deep pipeline of aides, LPNs, and RNs who reside nearby, reducing commute-related callouts and improving punctuality.'
            ]
        },
        {
            title: 'Coastal & Southern Shore Deployments',
            content: [
                'Communities in Red Bank, Long Branch, Asbury Park, and the southern shore benefit from our ability to scale teams during summer influxes and special events.',
                'We support boutique concierge households, continuing care communities, and post-op rental properties seeking short-term recovery staff.'
            ]
        }
    ],

    serviceAreas: {
        title: 'Monmouth County Staffing Coverage',
        subtitle:
            'Rapid deployment across the county with payroll and HR handled entirely by our Concierge-Level™ staffing team.',
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
                name: 'Shore Communities',
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
        title: 'Roles We Staff in Monmouth County',
        description:
            'Healthcare professionals ready for immediate or scheduled placement.',
        servicesList: [
            'Certified Home Health Aides (CHHAs) and companions for private duty shifts',
            'Licensed Practical Nurses (LPNs) for medication passes, wellness checks, and community support',
            'Registered Nurses (RNs) for clinical oversight, assessments, and specialized care programs',
            'Concierge caregivers for post-operative recovery, VIP visitors, and short-term rentals',
            'Staffing for memory care neighborhoods, respite programs, and adult day centers',
            'Administrative and concierge coordinators to support resident engagement and family communication'
        ]
    },

    servicesBenefits: [
        {
            title: 'Thorough Vetting',
            description:
                'Background checks, references, skills testing, and competency demonstrations exceed state requirements.'
        },
        {
            title: 'Local Talent Pipeline',
            description:
                'We cultivate Monmouth County professionals who understand community expectations and arrive on time.'
        },
        {
            title: 'Flexible Contracts',
            description:
                'Per diem, contract-to-hire, and project-based solutions match fluctuating operational needs.'
        },
        {
            title: '24/7 Staffing Desk',
            description:
                'Reach live coordinators day or night for callouts, census changes, and escalations.'
        }
    ],

    whyChoose: {
        title: 'Why Providers Choose 360 Degree Care Staffing',
        content: [
            'Our Concierge-Level™ process includes detailed onboarding, policy orientations, and shadowing to integrate staff smoothly.',
            'We maintain transparent communication, attendance tracking, and performance reporting for each assignment.',
            'Partnership agreements can include marketing collaboration, emergency workforce planning, and annual census forecasting.'
        ]
    },

    cta: {
        title: 'Secure Reliable Healthcare Staffing in Monmouth County',
        description: [
            'Tell us about your coverage requirements and we will present qualified professionals who match your timeline and culture.',
            'Our staffing specialists can launch support within 24 hours for urgent needs or build a strategic pipeline for long-term growth.'
        ],
        buttonLabel: 'Connect With Staffing Specialist',
        value: '800-338-7786'
    }
}
