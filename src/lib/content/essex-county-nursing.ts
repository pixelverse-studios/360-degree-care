import { Metadata } from 'next'
import { CountyPageContent } from './county-service-types'

export const essexCountyNursingContent: CountyPageContent = {
    metadata: {
        title: 'Private Duty Nursing Essex County NJ | 360 Degree Care',
        description:
            'Skilled private duty nurses deliver hospital-level care at home for Essex County residents. Post-acute recovery, complex chronic management, and concierge clinical oversight.',
        keywords:
            'private duty nursing essex county, newark in-home nurse, montclair skilled nursing, east orange rn home care'
    } as Metadata,

    schemaData: {
        '@context': 'https://schema.org',
        '@type': 'MedicalBusiness',
        name: 'Private Duty Nursing in Essex County',
        url: 'https://www.360degreecare.net',
        telephone: '+1-800-338-7786',
        areaServed: 'Essex County, NJ',
        description:
            'Registered nurses and LPNs providing complex medical oversight, infusion therapy, wound care, and chronic disease management across Essex County.'
    },

    hero: {
        title: 'Private Duty Nursing Across Essex County',
        subtitle:
            'RN-led care plans for high-acuity needs, surgical recoveries, and long-term stability.',
        description:
            'We transform Essex County homes into safe clinical environments, managing ventilators, infusions, and complex medications while keeping families fully informed.',
        ctaButtonLabel: 'Request RN Support',
        ctaValue: '800-338-7786',
        imageSrc: 'nursing-services-hero',
        imageAlt: 'Private duty nurse providing care in Essex County NJ'
    },

    intro: {
        title: 'Hospital-Level Care Without Leaving Home',
        content: [
            'After discharges from University Hospital, Newark Beth Israel, Cooperman Barnabas, or NYC medical centers, families turn to us for seamless transitions home. Our nurses implement physician orders immediately, preventing the gaps that cause readmissions.',
            'We manage IV therapies, complex wound care, ventilators, tracheostomies, enteral feeding, and strict medication regimens. Detailed communication keeps cardiologists, oncologists, neurologists, and primary care physicians aligned with home progress.',
            'Concierge-Level™ coordination includes supply management, pharmacy liaison, and rapid staffing adjustments as acuity changes.',
            'The 2024 Essex County Community Health Assessment highlighted a rise in rehospitalizations tied to medication errors and delayed wound care. Our private-duty nurses were trained on those findings—implementing dual medication verification, photo documentation for wound consults, and discharge huddles with University Hospital and Cooperman Barnabas teams to keep health stabilized.',
            'Families see the difference: Debbie V. praised how we staffed an overnight hospital companion within hours on a weekend before shifting to skilled nursing, and Amanda S. pointed to our ongoing nurse check-ins that keep aides, clients, and families aligned. Their reviews mirror our commitment to clinical transparency.'
        ]
    },

    regionalSections: [
        {
            title: 'Newark & Urban Complex Care',
            content: [
                'Our nurses support clients returning to Newark high-rises and brownstones, navigating elevator logistics, security protocols, and limited parking to provide consistent care.',
                'We collaborate closely with University Hospital specialty teams, visiting physicians, and community health workers focused on chronic disease management.'
            ]
        },
        {
            title: 'Montclair, Glen Ridge & Bloomfield',
            content: [
                'Suburban households benefit from nurses experienced with post-operative orthopedic care, neurological disorders, and advanced cardiac monitoring.',
                'We coordinate with Mountainside Medical Center, Cooperman Barnabas, and NYU/Langone specialists serving commuters.'
            ]
        },
        {
            title: 'West Orange, Livingston & South Mountain',
            content: [
                'Families balancing demanding careers rely on us for concierge-level nursing coverage that keeps loved ones safe while they manage travel and school schedules.',
                'Our nurses integrate with Saint Barnabas Medical Center, Kessler Institute therapists, and local home health agencies to maintain continuity.'
            ]
        }
    ],

    serviceAreas: {
        title: 'Skilled Nursing Coverage Throughout Essex County',
        subtitle:
            'Hourly RN visits, extended shifts, or 24/7 coverage available based on acuity and physician orders.',
        regions: [
            {
                name: 'Urban Clinical Needs',
                cities: ['Newark', 'East Orange', 'Irvington', 'Orange']
            },
            {
                name: 'Northern Suburbs',
                cities: ['Montclair', 'Bloomfield', 'Glen Ridge', 'Nutley']
            },
            {
                name: 'South Mountain & Livingston',
                cities: [
                    'West Orange',
                    'South Orange',
                    'Maplewood',
                    'Livingston'
                ]
            }
        ]
    },

    services: {
        title: 'What Our Essex County Nurses Provide',
        description:
            'Skilled RNs and LPNs deliver advanced clinical care tailored to physician directives and family goals.',
        servicesList: [
            'Medication and infusion management including IV therapies and complex dosing schedules',
            'Advanced wound, ostomy, and post-surgical care with infection control expertise',
            'Monitoring for cardiac, pulmonary, and neurological conditions with detailed physician reporting',
            'Family coaching, medication reconciliation, and advocacy during medical appointments'
        ]
    },

    servicesBenefits: [
        {
            title: 'Experienced Clinical Leadership',
            description:
                'Our nurses bring ICU, med-surg, and rehab backgrounds along with ongoing specialty certifications.'
        },
        {
            title: 'Continuous Communication',
            description:
                'Daily progress notes, secure messaging, and on-call nurse supervision keep families informed 24/7.'
        },
        {
            title: 'Collaborative Care Coordination',
            description:
                'We interface with physicians, pharmacists, hospice teams, and therapists to maintain a unified plan.'
        },
        {
            title: 'Rapid Response Staffing',
            description:
                'Backup nurses and on-call support ensure uninterrupted care during vacations or emergent needs.'
        }
    ],

    whyChoose: {
        title: 'Concierge-Level™ Nursing at Home',
        content: [
            'Care coordinators handle orders, equipment logistics, and insurance paperwork so you can focus on your loved one.',
            'Nurse supervisors review documentation, assess outcomes, and mentor field nurses for consistent excellence.',
            'Emergency escalation protocols connect you with clinical leadership any time of day or night.'
        ]
    },

    cta: {
        title: 'Secure Skilled Nursing Support in Essex County',
        description: [
            'Request an in-home assessment and receive a tailored nursing schedule aligned with physician directives within 48 hours.',
            'Our team will assemble the right mix of RNs and LPNs to stabilize health, prevent complications, and support your entire family.'
        ],
        buttonLabel: 'Plan Nursing Coverage',
        value: '800-338-7786'
    }
}
