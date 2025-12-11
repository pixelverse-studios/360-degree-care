import { Metadata } from 'next'
import { CountyPageContent } from './county-service-types'

export const oceanCountyNursingContent: CountyPageContent = {
    metadata: {
        title: 'Private Duty Nursing Ocean County NJ | 360 Degree Care',
        description:
            'Skilled private duty nurses delivering post-hospital care, wound management, and chronic disease oversight across Ocean County, NJ.',
        keywords:
            'private duty nursing ocean county, rn home care ocean county nj, toms river private nurse, brick nj skilled nursing at home, jackson nj in home nursing'
    } as Metadata,

    schemaData: {
        '@context': 'https://schema.org',
        '@type': 'MedicalBusiness',
        name: 'Private Duty Nursing in Ocean County',
        url: 'https://www.360degreecare.net',
        telephone: '+1-201-299-4243',
        areaServed: 'Ocean County, NJ',
        description:
            'Registered nurses and LPNs providing complex medical care, medication management, and family training throughout Ocean County.'
    },
    hero: {
        title: 'Private Duty Nursing Throughout Ocean County',
        subtitle: 'RN-led plans that extend hospital-level care into the home.',
        description:
            'Our nursing team manages complex conditions, medication regimens, and transitions so Ocean County residents recover safely at home.',
        ctaButtonLabel: 'Request RN Support',
        ctaValue: '201-299-4243',
        imageSrc: 'nursing-services-hero',
        imageAlt: 'Private duty nurse visiting patient in Ocean County NJ'
    },

    intro: {
        title: 'Hospital-Grade Expertise at Home',
        content: [
            'Following discharges from Community Medical Center, Ocean University Medical Center, or Hackensack Meridian facilities, families rely on our nurses to implement physician orders without delay.',
            'We handle wound care, IV therapies, tracheostomy management, ventilator oversight, and comprehensive medication administration. Nurses communicate with cardiologists, pulmonologists, and primary care teams to keep everyone aligned.',
            'Concierge-Level™ operations include 24/7 clinical availability, supply coordination, and meticulous documentation so families can focus on healing.',
            'Ocean County emergency planners emphasize coastal evacuation readiness and chronic-disease monitoring during extreme weather. Our private duty nurses build that guidance into every plan—staging backup power sources, pre-positioning medications, and coordinating with local EMS so high-acuity clients remain safe even when the Parkway or barrier-island bridges close.'
        ]
    },

    regionalSections: [
        {
            title: 'Northern Shore & Barrier Island',
            content: [
                'Point Pleasant, Bay Head, and Seaside Heights clients receive nurses trained to manage emergency preparedness, storm plans, and multi-story homes.',
                'RNs coordinate with local EMS, pharmacies, and therapy teams familiar with barrier-island logistics.'
            ]
        },
        {
            title: 'Central Mainland',
            content: [
                'In Toms River, Lakewood, Brick, and Jackson we support post-surgical recovery, cardiac care, and chronic disease management with shift-based or intermittent nursing.',
                'Nurses collaborate with rehab providers, infusion pharmacies, and religious communities to respect cultural needs.'
            ]
        },
        {
            title: 'Southern Shore & Pine Barrens',
            content: [
                'Barnegat, Stafford, Waretown, and LBI households benefit from nurses skilled in respiratory care, oncology support, and hospice collaboration.',
                'We adapt to seasonal population changes, long commutes, and coastal weather while keeping care consistent.'
            ]
        }
    ],

    serviceAreas: {
        title: 'Where Our Nurses Serve',
        subtitle:
            'Shift-based, intermittent, or live-in nursing coverage matched to acuity.',
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
                cities: ['Toms River', 'Brick', 'Lakewood', 'Jackson']
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
        title: 'Private Duty Nursing Services',
        description:
            'Advanced clinical support delivered by experienced RNs and LPNs.',
        servicesList: [
            'Comprehensive nursing assessments and individualized care plans',
            'Medication administration, infusion therapy, and pain management',
            'Advanced wound care, wound vac management, and post-surgical monitoring',
            'Ventilator, tracheostomy, and respiratory therapy oversight',
            'Enteral/parental nutrition management with caregiver training',
            'Palliative and hospice collaboration focused on comfort and symptom control'
        ]
    },

    servicesBenefits: [
        {
            title: 'Reduce Readmissions',
            description:
                'Proactive monitoring and rapid intervention lower the risk of emergency room visits or hospital returns.'
        },
        {
            title: 'Coordinate Providers',
            description:
                'Nurses communicate with physicians, therapists, and pharmacies to ensure continuity of care.'
        },
        {
            title: 'Educate Families',
            description:
                'We teach loved ones equipment use, medication schedules, and warning signs to watch between visits.'
        },
        {
            title: 'Adapt to Changing Needs',
            description:
                'Shift lengths and frequency adjust as acuity rises or stabilizes, providing the right support every time.'
        }
    ],

    whyChoose: {
        title: 'Why Ocean County Chooses 360 Degree Care Nurses',
        content: [
            'Every nurse passes rigorous credentialing, skill validation, and ongoing education designed for home settings.',
            'Concierge-Level™ coordinators manage staffing logistics, supplies, and interdisciplinary communication.',
            'Clinical leadership remains on call 24/7, guiding families through sudden changes or urgent concerns.'
        ]
    },

    cta: {
        title: 'Secure Skilled Nursing at Home in Ocean County',
        description: [
            'Connect with our nursing leadership to review needs and launch services—often within 24 hours.',
            'We coordinate equipment, align with discharge teams, and deliver a plan that keeps loved ones safe at home.'
        ],
        buttonLabel: 'Arrange Private Duty Nursing',
        value: '201-299-4243'
    }
}
