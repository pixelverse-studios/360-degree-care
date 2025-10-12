import { Metadata } from 'next'
import { CountyPageContent } from './county-service-types'

export const passaicCountyPersonalCareContent: CountyPageContent = {
    metadata: {
        title: 'Personal Care Services Passaic County NJ | 360 Degree Care',
        description:
            'Respectful personal care for Passaic County seniors. Certified caregivers assist with bathing, grooming, mobility, and daily routines from Paterson to Ringwood.',
        keywords:
            'personal care passaic county, in home care passaic nj, bathing assistance clifton, wayne nj personal care aides, senior hygiene support passaic'
    } as Metadata,

    schemaData: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Personal Care Services in Passaic County',
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
            'Passaic County, NJ',
            'Paterson, NJ',
            'Clifton, NJ',
            'Wayne, NJ',
            'Passaic, NJ',
            'Totowa, NJ',
            'Hawthorne, NJ',
            'Little Falls, NJ',
            'West Milford, NJ',
            'Ringwood, NJ',
            'Pompton Lakes, NJ'
        ],
        description:
            'Certified personal care professionals assisting Passaic County seniors with daily living tasks, mobility support, and wellness monitoring.',
        serviceType: 'Personal Care',
        availableChannel: {
            '@type': 'ServiceChannel',
            serviceUrl:
                'https://www.360degreecare.net/personal-care-passaic-county',
            servicePhone: '+1-800-338-7786',
            availableLanguage: 'en'
        }
    },

    hero: {
        title: 'Personal Care That Protects Dignity Across Passaic County',
        subtitle:
            'Certified aides deliver hands-on assistance in city apartments, suburban homes, and tranquil lake communities.',
        description:
            'Our Concierge-Level™ personal care team helps seniors remain safe and independent with bathing support, mobility assistance, and daily routine management.',
        ctaButtonLabel: 'Request a Personal Care Assessment',
        ctaValue: '800-338-7786',
        imageSrc: 'personal-care-hero',
        imageAlt: 'Personal care aide supporting senior in Passaic County NJ'
    },

    intro: {
        title: 'Trusted Personal Care for Passaic County Families',
        content: [
            'Families in Paterson, Passaic, Clifton, and surrounding towns turn to us when daily routines become difficult to manage alone. We design respectful, reliable personal care plans supervised by registered nurses who understand the unique layouts and cultural diversity of Passaic County homes.',
            'Caregivers arrive prepared with safety protocols tailored to multi-story residences, condo communities, and rural properties. We handle scheduling, communication, and backup support so loved ones receive consistent care even during winter weather or summer travel.',
            'With Concierge-Level™ coordination, families receive detailed visit notes, condition updates, and quick adjustments when medical recommendations change.'
        ]
    },

    regionalSections: [
        {
            title: 'City & Riverside Care',
            content: [
                'Paterson, Passaic, and Clifton residents benefit from caregivers experienced with elevator buildings, limited parking, and bustling neighborhoods.',
                'We coordinate around busy schedules, local markets, and cultural calendars to keep routines familiar and stress-free.'
            ]
        },
        {
            title: 'Suburban Daily Living Support',
            content: [
                'In Wayne, Totowa, Hawthorne, and Little Falls we provide consistent aides who assist with morning and evening care, transportation, and household tasks.',
                'Care plans align with therapy recommendations from local rehab centers and hospital partners.'
            ]
        },
        {
            title: 'Northern Highlands Assistance',
            content: [
                'Families in Ringwood, Wanaque, Pompton Lakes, and West Milford receive personal care adapted to larger properties and seasonal travel routes.',
                'Caregivers focus on fall prevention, outdoor safety, and wellness monitoring in coordination with visiting physicians.'
            ]
        }
    ],

    serviceAreas: {
        title: 'Serving Personal Care Needs Across Passaic County',
        subtitle:
            'Hourly, daily, and live-in personal care solutions with rapid-start options after hospital discharge.',
        regions: [
            {
                name: 'Urban Neighborhoods',
                cities: ['Paterson', 'Passaic', 'Clifton']
            },
            {
                name: 'Suburban Communities',
                cities: ['Wayne', 'Totowa', 'Hawthorne', 'Little Falls']
            },
            {
                name: 'Northern Highlands',
                cities: ['Ringwood', 'West Milford', 'Pompton Lakes', 'Wanaque']
            }
        ]
    },

    services: {
        title: 'Core Personal Care Services',
        description:
            'Hands-on assistance provided by certified caregivers under nurse supervision.',
        servicesList: [
            'Bathing, showering, grooming, and oral hygiene support',
            'Toileting assistance, continence care, and discreet incontinence management',
            'Medication reminders and coordination with pharmacy deliveries',
            'Mobility assistance, transfer support, and range-of-motion encouragement',
            'Meal preparation, hydration tracking, and nutrition monitoring',
            'Laundry, linens, and tidy-up tasks tied to the care plan'
        ]
    },

    servicesBenefits: [
        {
            title: 'Promote Safety',
            description:
                'Caregivers monitor for fall risks, slippery surfaces, and environmental hazards inside and outside the home.'
        },
        {
            title: 'Maintain Dignity',
            description:
                'Respectful, culturally sensitive care ensures seniors feel comfortable during intimate routines.'
        },
        {
            title: 'Reduce Caregiver Burnout',
            description:
                'Family members gain respite and reliable support, especially during work hours or travel.'
        },
        {
            title: 'Support Health Goals',
            description:
                'Regular documentation and RN oversight highlight changes in mobility, appetite, or mood early.'
        }
    ],

    whyChoose: {
        title: 'Why Passaic County Families Trust Our Personal Care Team',
        content: [
            'Concierge-Level™ scheduling keeps visits on time—even during rush hour or inclement weather—thanks to local caregiver teams.',
            'We offer same-gender matching, bilingual caregivers, and cultural competency training to align with family preferences.',
            'Our nurses collaborate with local hospitals, rehabilitation centers, and physicians to keep care plans clinically aligned.'
        ]
    },

    cta: {
        title: 'Give Loved Ones the Dignified Personal Care They Deserve',
        description: [
            'Contact us for an in-home assessment anywhere in Passaic County and receive a customized care plan within 48 hours.',
            'We coordinate introductions, shadow shifts, and ongoing communication so your family always knows who is arriving and what is provided.'
        ],
        buttonLabel: 'Start Personal Care Planning',
        value: '800-338-7786'
    }
}
