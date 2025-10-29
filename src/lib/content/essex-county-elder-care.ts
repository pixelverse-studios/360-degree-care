import { Metadata } from 'next'
import { CountyPageContent } from './county-service-types'

export const essexCountyElderCareContent: CountyPageContent = {
    metadata: {
        title: 'Elder Care Consulting Essex County NJ | 360 Degree Care',
        description:
            'RN-led elder care consulting for Essex County families. Build confident care plans around hospital discharges, safety concerns, and long-term support needs.',
        keywords:
            'elder care consulting essex county, newark care planning, montclair geriatric care manager, east orange senior care roadmap'
    } as Metadata,

    schemaData: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Elder Care Consulting in Essex County',
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
            'Essex County, NJ',
            'Newark, NJ',
            'East Orange, NJ',
            'Montclair, NJ',
            'Orange, NJ',
            'Irvington, NJ',
            'Bloomfield, NJ',
            'West Orange, NJ',
            'South Orange, NJ',
            'Maplewood, NJ',
            'Livingston, NJ'
        ],
        description:
            'Registered nurse consultants guiding Essex County families through senior care decisions, resource coordination, and crisis planning.',
        serviceType: 'Elder Care Consulting',
        availableChannel: {
            '@type': 'ServiceChannel',
            serviceUrl:
                'https://www.360degreecare.net/services/elder-care/essex-county',
            servicePhone: '+1-800-338-7786',
            availableLanguage: 'en'
        }
    },

    hero: {
        title: 'RN-Led Elder Care Consulting Across Essex County',
        subtitle:
            'Objective clinical guidance that balances hospital recommendations, family expectations, and cultural traditions.',
        description:
            'Our Concierge-Level™ consultants help you navigate hospital discharges, home safety concerns, dementia planning, and long-term support options with clarity and confidence.',
        ctaButtonLabel: 'Book an Elder Care Consultation',
        ctaValue: '800-338-7786',
        imageSrc: 'elder-care-hero',
        imageAlt: 'Elder care consultant meeting with Essex County family'
    },

    intro: {
        title: 'Clarity for Complex Care Decisions',
        content: [
            'Whether a loved one is recovering from a stay at University Hospital or experiencing new memory changes, Essex County families often need objective, clinically informed guidance. We evaluate the full picture—medical status, home environment, family dynamics, financial considerations, and personal goals.',
            'Our RN consultants translate doctor recommendations into practical action steps tailored to Newark walk-ups, West Orange split-level homes, or Montclair brownstones. We ensure you understand available services, eligibility requirements, and the true cost of each option.',
            'Concierge-Level™ coordination continues after the consultation. We help prioritize tasks, introduce vetted partners, and stay on call to revise the plan when needs evolve.'
        ]
    },

    regionalSections: [
        {
            title: 'City Transitions & Safety Planning',
            content: [
                'Newark, East Orange, and Irvington families face unique challenges after hospital discharges, including elevator reliability, building access, and limited parking.',
                'We coordinate with University Hospital, CareWell Health, and community health workers to ensure the right services arrive on time.'
            ]
        },
        {
            title: 'Suburban Care Coordination',
            content: [
                'In Montclair, Bloomfield, and West Orange, we help adult children balance demanding careers with complex care decisions for parents.',
                'Consultants evaluate multi-story homes, recommend modifications, and outline in-home support that preserves routines.'
            ]
        },
        {
            title: 'South Mountain & Livingston Planning',
            content: [
                'For Maplewood, South Orange, and Livingston households, we integrate synagogue or parish connections, adult day programs, and private duty nursing into proactive plans.',
                'We collaborate with Cooperman Barnabas specialists, Saint Barnabas outpatient services, and trusted local therapists.'
            ]
        }
    ],

    serviceAreas: {
        title: 'Serving Families Throughout Essex County',
        subtitle:
            'In-home consultations, hospital bedside visits, or virtual planning sessions available within 48 hours.',
        regions: [
            {
                name: 'Urban Communities',
                cities: ['Newark', 'East Orange', 'Irvington', 'Orange']
            },
            {
                name: 'Inner Suburbs',
                cities: ['Montclair', 'Bloomfield', 'Glen Ridge', 'Nutley']
            },
            {
                name: 'South Mountain Area',
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
        title: 'What an Elder Care Consultation Includes',
        description:
            'Each consultation blends clinical assessment with practical planning so every family member knows the next steps.',
        servicesList: [
            'RN-led clinical and functional assessment with onsite observation',
            'Home safety review and recommendations for modifications or supportive services',
            'Resource roadmap covering community programs, funding options, and vetted providers',
            'Facilitated family conversation to align decision-makers, budgets, and expectations'
        ]
    },

    servicesBenefits: [
        {
            title: 'Objective Clinical Guidance',
            description:
                'Decades of RN experience in geriatric care ensures recommendations are grounded in medical reality.'
        },
        {
            title: 'Culturally Responsive Planning',
            description:
                'We respect language, faith, and cultural traditions that shape how Essex County families make decisions.'
        },
        {
            title: 'Actionable Priorities',
            description:
                'Consultants deliver a step-by-step plan with timelines, responsible parties, and escalation pathways.'
        },
        {
            title: 'Ongoing Support',
            description:
                'Need help executing the plan? Our care team can coordinate services, provide aides, and revisit goals as needs evolve.'
        }
    ],

    whyChoose: {
        title: 'Concierge-Level™ Elder Care Consulting',
        content: [
            'Personalized intake ensures we understand family roles, physician relationships, and budget parameters.',
            'We attend care conferences, accompany families to key appointments, and advocate for client needs.',
            'Emergency check-ins and rapid plan updates give families peace of mind during hospitalizations or sudden changes.'
        ]
    },

    cta: {
        title: 'Start Your Essex County Care Plan Today',
        description: [
            'Schedule a consultation and receive a comprehensive care roadmap within 72 hours.',
            'Our RN consultants will answer every question, outline practical next steps, and stay by your side as the plan unfolds.'
        ],
        buttonLabel: 'Schedule Consultation',
        value: '800-338-7786'
    }
}
