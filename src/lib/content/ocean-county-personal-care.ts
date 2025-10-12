import { Metadata } from 'next'
import { CountyPageContent } from './county-service-types'

export const oceanCountyPersonalCareContent: CountyPageContent = {
    metadata: {
        title: 'Personal Care Services Ocean County NJ | 360 Degree Care',
        description:
            'Respectful personal care support for Ocean County seniors. Certified aides assist with bathing, grooming, mobility, and daily routines from Toms River to Barnegat.',
        keywords:
            'personal care ocean county, in home care ocean county nj, bathing assistance toms river, brick nj personal care aides, senior hygiene support lbi'
    } as Metadata,

    schemaData: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Personal Care Services in Ocean County',
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
            'Ocean County, NJ',
            'Toms River, NJ',
            'Brick Township, NJ',
            'Jackson Township, NJ',
            'Lakewood, NJ',
            'Manchester Township, NJ',
            'Berkeley Township, NJ',
            'Point Pleasant, NJ',
            'Barnegat Township, NJ',
            'Stafford Township, NJ',
            'Long Beach Island, NJ'
        ],
        description:
            'Certified personal care professionals helping Ocean County seniors with daily living tasks, mobility support, and wellness monitoring.',
        serviceType: 'Personal Care',
        availableChannel: {
            '@type': 'ServiceChannel',
            serviceUrl:
                'https://www.360degreecare.net/personal-care-ocean-county',
            servicePhone: '+1-800-338-7786',
            availableLanguage: 'en'
        }
    },

    hero: {
        title: 'Personal Care That Respects Dignity Throughout Ocean County',
        subtitle:
            'Certified aides deliver hands-on support in shore condos, single-family homes, and active-adult communities.',
        description:
            'Our Concierge-Level™ personal care team provides bathing assistance, mobility support, and daily routine management so Ocean County residents can live safely at home.',
        ctaButtonLabel: 'Request a Personal Care Assessment',
        ctaValue: '800-338-7786',
        imageSrc: 'personal-care-hero',
        imageAlt: 'Personal care aide assisting senior in Ocean County NJ'
    },

    intro: {
        title: 'Dependable Personal Care for Shore-Town Families',
        content: [
            'When bathing, grooming, and mobility tasks become challenging, families across Toms River, Brick, Lakewood, and Jackson rely on our certified caregivers. We tailor care plans to each home’s layout, safety considerations, and cultural preferences.',
            'Registered nurses oversee every case, adjusting care plans as medical recommendations change. Our team coordinates with local physicians, rehabilitation centers, and pharmacy partners to keep routines on track.',
            'Families get reliable coverage—even during summer traffic or winter storms—thanks to local caregiver teams and Concierge-Level™ scheduling support.'
        ]
    },

    regionalSections: [
        {
            title: 'Northern Shore & Barrier Island',
            content: [
                'Point Pleasant, Sea Girt, and Bay Head residents receive caregivers experienced with coastal homes, limited parking, and multi-level properties.',
                'We schedule around bridge openings, summer events, and barrier-island access to keep visits punctual.'
            ]
        },
        {
            title: 'Central Mainland & 55+ Communities',
            content: [
                'Personal care in Toms River, Lakewood, Jackson, and Manchester focuses on morning and evening routines, transfer support, and medication reminders.',
                'Caregivers are familiar with community associations such as Holiday City, Leisure Village, and Westlake, respecting gate procedures and amenity schedules.'
            ]
        },
        {
            title: 'Southern Shore & Pine Barrens',
            content: [
                'Barnegat, Stafford, Waretown, and Berkeley clients receive flexible schedules designed around shore traffic and seasonal visitors.',
                'We coordinate with local senior centers and VA clinics to support veterans and long-time shore residents.'
            ]
        }
    ],

    serviceAreas: {
        title: 'Serving Personal Care Needs Across Ocean County',
        subtitle:
            'Hourly, daily, and live-in personal care available with rapid starts after hospital discharge.',
        regions: [
            {
                name: 'Northern Shore',
                cities: ['Point Pleasant', 'Bay Head', 'Lavallette', 'Seaside']
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
        title: 'Core Personal Care Services',
        description:
            'Hands-on assistance delivered by certified caregivers under nurse supervision.',
        servicesList: [
            'Bathing, showering, grooming, and oral hygiene support',
            'Toileting assistance, continence care, and discreet incontinence management',
            'Mobility aid, safe transfers, and balance encouragement',
            'Medication reminders and coordination with pharmacy deliveries',
            'Meal prep, hydration tracking, and nutritional support',
            'Laundry, linens, and tidy-up tasks tied to the care plan'
        ]
    },

    servicesBenefits: [
        {
            title: 'Promote Safety',
            description:
                'Caregivers monitor for fall risks, slippery decks, and cluttered hallways, especially in multi-level shore homes.'
        },
        {
            title: 'Respect Cultural Preferences',
            description:
                'We offer same-gender matching, bilingual caregivers, and sensitivity training aligned with Ocean County’s diverse communities.'
        },
        {
            title: 'Reduce Family Stress',
            description:
                'Consistent support allows family caregivers to work, travel, or rest knowing routines remain on schedule.'
        },
        {
            title: 'Support Aging in Place',
            description:
                'Regular documentation and RN oversight highlight changes early, enabling proactive adjustments.'
        }
    ],

    whyChoose: {
        title: 'Why Ocean County Families Trust 360 Degree Care',
        content: [
            'Concierge-Level™ scheduling ensures coverage even during peak tourist seasons or severe weather.',
            'We coordinate with local hospitals (Community Medical Center, Ocean University Medical Center) and rehab partners to keep care plans aligned.',
            'Our caregivers receive ongoing training in dementia-friendly bathing techniques, fall prevention, and infection control.'
        ]
    },

    cta: {
        title: 'Give Loved Ones the Dignified Personal Care They Deserve',
        description: [
            'Schedule an in-home assessment anywhere in Ocean County and receive a personalized care plan within 48 hours.',
            'We handle introductions, shadow shifts, and ongoing communication so your family always knows who is arriving and what to expect.'
        ],
        buttonLabel: 'Start Personal Care Planning',
        value: '800-338-7786'
    }
}
