import { Metadata } from 'next'
import { CountyPageContent } from './county-service-types'

export const monmouthCountyNursingContent: CountyPageContent = {
    metadata: {
        title: 'Private Duty Nursing Monmouth County NJ | 360 Degree Care',
        description:
            'Skilled private duty nurses serving Monmouth County, NJ. Post-hospital care, medication management, wound care, and chronic disease oversight at home or bedside.',
        keywords:
            'private duty nursing monmouth county, rn home care monmouth county nj, skilled nursing red bank nj, wound care nurse long branch, in home nursing middletown'
    } as Metadata,

    schemaData: {
        '@context': 'https://schema.org',
        '@type': 'MedicalBusiness',
        name: 'Private Duty Nursing Services in Monmouth County',
        url: 'https://www.360degreecare.net',
        telephone: '+1-800-338-7786',
        areaServed: 'Monmouth County, NJ',
        description:
            'Registered nurses providing complex medical care, medication management, and care coordination throughout Monmouth County, New Jersey.'
    },

    hero: {
        title: 'Private Duty Nursing Across Monmouth County',
        subtitle:
            'RN-led care plans supporting complex conditions from Riverview Medical Center discharges to long-term chronic management.',
        description:
            'Our nursing team delivers bedside support, advanced monitoring, and family education so clinical care continues seamlessly at home.',
        ctaButtonLabel: 'Request RN Support',
        ctaValue: '800-338-7786',
        imageSrc: 'nursing-services-hero',
        imageAlt: 'Private duty nurse visiting patient in Monmouth County NJ'
    },

    intro: {
        title: 'Hospital-Grade Nursing for Monmouth County Homes',
        content: [
            'When a loved one is discharged from Jersey Shore University Medical Center, Riverview Medical Center, or Bayshore Medical Center, families need skilled clinicians who can implement physician orders without delay. Our private duty nurses arrive equipped to handle wound care, IV therapy, ventilator support, and medication reconciliation from day one.',
            'Nurses remain in close contact with attending physicians and specialists, updating care plans as labs, mobility, and vital signs evolve. We collaborate with physical therapists, infusion pharmacies, and DME providers to ensure supplies and treatments stay on schedule.',
            'Whether care happens in a coastal condo or a countryside estate, we manage infection control, documentation, and family training so the home environment feels safe and sustainable.',
            'Monmouth County’s 2024 Senior Needs Assessment emphasized that nearly half of older adults fear storm-related outages will disrupt medical care. Our nursing protocols reflect that reality with generator readiness checklists, redundant medication storage, and evacuation planning for Bayshore and barrier-island households.',
            'Families validate the approach: Steve D. highlighted that our aide “did exactly what the agency said she would do” during a Long Branch recovery, while JoAnn C. praised our ability to staff a live-in aide in under 36 hours. Those same Concierge-Level™ standards apply to every private duty nursing assignment.'
        ]
    },

    regionalSections: [
        {
            title: 'Bayshore & River Communities',
            content: [
                'Middletown, Holmdel, and Atlantic Highlands families rely on us for ventilator management, tracheostomy care, and neurological case oversight.',
                'We coordinate around ferry schedules, bridge traffic, and home accessibility to maintain punctual clinical visits.'
            ]
        },
        {
            title: 'Central Monmouth Skilled Care',
            content: [
                'In Freehold, Marlboro, Colts Neck, and Manalapan we support post-operative clients, cardiac recovery, and complex medication regimens.',
                'Nurses deliver in-home infusions, lab draws, and chronic disease education while liaising with cardiologists and primary care teams.'
            ]
        },
        {
            title: 'Coastal & Southern Shore Expertise',
            content: [
                'Red Bank, Long Branch, Asbury Park, Neptune, and Manasquan residents receive respiratory, oncology, and palliative-focused nursing with 24/7 on-call coverage.',
                'We manage seasonal population changes and coordinate with local hospice organizations when care needs shift.'
            ]
        }
    ],

    serviceAreas: {
        title: 'Where Our Nurses Serve',
        subtitle:
            'Available for hourly shifts, 24-hour coverage, or intermittent visits depending on physician orders.',
        regions: [
            {
                name: 'Bayshore & Northern Towns',
                cities: [
                    'Middletown',
                    'Holmdel',
                    'Atlantic Highlands',
                    'Rumson',
                    'Fair Haven',
                    'Sea Bright'
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
                    'Neptune',
                    'Belmar',
                    'Manasquan'
                ]
            }
        ]
    },

    services: {
        title: 'Private Duty Nursing Services',
        description:
            'Registered nurses and LPNs delivering hospital-level care in the comfort of home.',
        servicesList: [
            'Comprehensive nursing assessments and plan-of-care management',
            'Medication administration, medication reconciliation, and infusion therapy',
            'Advanced wound care, negative pressure therapy, and post-surgical monitoring',
            'Ventilator, tracheostomy, and respiratory therapy oversight',
            'Enteral and parenteral nutrition management with caregiver education',
            'Palliative and hospice collaboration focused on symptom control and comfort'
        ]
    },

    servicesBenefits: [
        {
            title: 'Prevent Readmissions',
            description:
                'Close monitoring and proactive interventions reduce hospital readmissions and emergency visits.'
        },
        {
            title: 'Seamless Physician Collaboration',
            description:
                'Our nurses communicate with doctors, therapists, and pharmacists to keep treatment plans aligned.'
        },
        {
            title: 'Family Training & Support',
            description:
                'We coach family members on clinical tasks, equipment operation, and warning signs to watch between visits.'
        },
        {
            title: 'Flexible Staffing Models',
            description:
                'Shift-based, intermittent, and live-in nursing options adapt as acuity changes over time.'
        }
    ],

    whyChoose: {
        title: 'Why Choose 360 Degree Care Nurses',
        content: [
            'All private duty nurses undergo rigorous credentialing, skill validation, and ongoing education tailored to complex home care.',
            'Our Concierge-Level™ coordinators manage scheduling, supplies, and interdisciplinary communication, freeing families from administrative burden.',
            'Emergency-ready protocols guarantee rapid-response coverage with on-call clinical leadership 24/7.'
        ]
    },

    cta: {
        title: 'Secure Skilled Nursing at Home in Monmouth County',
        description: [
            'Call to review your discharge plan or ongoing clinical needs with our nursing leadership team.',
            'We will build a customized schedule, coordinate with physicians, and launch services as early as the next day.'
        ],
        buttonLabel: 'Arrange Private Duty Nursing',
        value: '800-338-7786'
    }
}
