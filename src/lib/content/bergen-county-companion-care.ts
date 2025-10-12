import { Metadata } from 'next'
import { CountyPageContent } from './county-service-types'

export const bergenCountyCompanionCareContent: CountyPageContent = {
    metadata: {
        title: 'Companion Care Services Bergen County NJ | 360 Degree Care',
        description:
            'Compassionate companion care throughout Bergen County. Reduce isolation, enhance quality of life with trusted companions in Fort Lee, Hackensack, Ridgewood & 70+ towns. Available 24/7.',
        keywords:
            'companion care bergen county, companion care services bergen county nj, elderly companion care, senior companion services, bergen county companion care, fort lee companion care, hackensack companion care, ridgewood companion care'
    } as Metadata,

    schemaData: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Companion Care Services in Bergen County',
        provider: {
            '@type': 'Organization',
            name: '360 Degree Care',
            url: 'https://www.360degreecare.com',
            logo: 'https://www.360degreecare.com/logo.png',
            contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-856-874-0067',
                contactType: 'customer service',
                availableLanguage: 'en'
            }
        },
        areaServed: [
            'Bergen County, NJ',
            'Fort Lee, NJ',
            'Hackensack, NJ',
            'Ridgewood, NJ',
            'Westwood, NJ',
            'Paramus, NJ',
            'Teaneck, NJ',
            'Fair Lawn, NJ',
            'Englewood, NJ',
            'Bergenfield, NJ',
            'Cliffside Park, NJ',
            'Palisades Park, NJ'
        ],
        description:
            'Professional companion care services throughout Bergen County, NJ. Our compassionate companions provide social interaction, emotional support, and assistance with daily activities to enhance quality of life and reduce isolation.',
        serviceType: 'Companion Care Services',
        availableChannel: {
            '@type': 'ServiceChannel',
            serviceUrl:
                'https://360degreecare.net/services/companion-care/bergen-county',
            servicePhone: '+1-856-874-0067',
            availableLanguage: 'en'
        }
    },

    hero: {
        title: 'Companion Care Services Throughout Bergen County',
        subtitle:
            'Reducing Isolation, Enriching Lives Across 70 Bergen County Communities',
        description:
            'Professional companion care services from Fort Lee to Franklin Lakes, Hackensack to Ho-Ho-Kus. Our compassionate companions help seniors stay engaged, active, and connected in their beloved Bergen County communities.',
        ctaButtonLabel: 'Find Your Companion',
        ctaValue: '856-874-0067',
        imageSrc: 'companion-care-hero',
        imageAlt: 'Companion care services in Bergen County NJ'
    },

    intro: {
        title: 'Trusted Companion Care Services Across Bergen County Communities',
        content: [
            "Loneliness and social isolation can significantly impact the health and wellbeing of seniors living in Bergen County. Whether in the bustling high-rises of Fort Lee or the quiet neighborhoods of Allendale, many older adults find themselves spending too much time alone, missing the social connections that bring joy and meaning to life. That's where 360 Degree Care's companion care services make all the difference.",
            'Our compassionate companions serve families throughout Bergen County, from the urban centers of Hackensack and Englewood to the suburban communities of Ridgewood and Wyckoff. We understand that every senior has unique social needs—some may want a companion for weekly trips to Garden State Plaza, others might need someone to share morning coffee and conversation, and many benefit from having a trusted friend to accompany them to appointments at Valley Hospital or Holy Name Medical Center.',
            'What sets our Bergen County companion care apart is our deep understanding of local communities. Our companions know the best walking paths in Saddle River County Park, the quietest times to visit the Shops at Riverside, and which libraries host the most engaging senior programs. This local expertise, combined with genuine compassion, helps us match each client with the perfect companion who shares their interests and understands their neighborhood.'
        ]
    },

    regionalSections: [
        {
            title: 'Companion Care in Fort Lee & Southeast Bergen County',
            content: [
                "Fort Lee's unique vertical living environment creates special companionship needs for seniors in high-rise communities along the Palisades. Our companions understand the dynamics of buildings like The Palisades, Horizon House, and The Modern, where neighbors may live just feet away yet feel disconnected. We help bridge these gaps, encouraging participation in building activities, facilitating friendships with neighbors, and ensuring no one feels isolated despite being surrounded by others.",
                'The diverse cultural landscape of Fort Lee and neighboring Palisades Park offers rich opportunities for meaningful companionship. Many of our companions speak multiple languages, allowing them to connect with Korean, Japanese, and Russian-speaking seniors who may struggle with language barriers. Whether accompanying clients to cultural events at the Fort Lee Community Center, shopping at ethnic markets along Lemoine Avenue, or enjoying traditional meals at local restaurants, our companions help seniors maintain vital connections to their cultural heritage.',
                "Access to Manhattan is one of Fort Lee's greatest assets, and our companions regularly accompany clients on trips across the George Washington Bridge for medical appointments, cultural events, or visits with family. We understand the logistics of these journeys—from navigating Port Authority buses to managing taxi services—ensuring seniors can safely enjoy all that the metropolitan area offers without the stress of traveling alone.",
                'The Fort Lee Historic Park, Constitution Park, and the Hudson River Waterfront Walkway provide wonderful venues for companionship activities. Our companions enjoy exploring these spaces with clients, sharing local history, enjoying river views, and maintaining physical activity in safe, accessible environments. These outings become cherished routines that clients look forward to each week.'
            ]
        },
        {
            title: 'Companion Care in Hackensack & Central Bergen County',
            content: [
                "As Bergen County's seat, Hackensack offers a wealth of resources and activities perfect for companion care services. Our companions regularly accompany clients to cultural events at the Bergen Performing Arts Center, shopping trips to the Shops at Riverside, and recreational programs at the YMCA. We help seniors navigate the busy downtown area, ensuring they can enjoy all Hackensack has to offer while feeling safe and supported.",
                'The proximity to Hackensack University Medical Center makes our companion services especially valuable for seniors with regular medical appointments. Our companions provide reassuring presence during visits, help communicate with healthcare providers, take notes on important instructions, and ensure follow-up care is properly managed. This support extends to nearby communities like River Edge, New Milford, and Oradell, where many seniors travel to Hackensack for specialized care.',
                "Westwood's charming downtown, just minutes from Hackensack, offers a perfect setting for companion activities. Our companions enjoy strolling down Westwood Avenue with clients, stopping at local cafes, browsing boutique shops, and attending community events. The Westwood Train Station also provides convenient access to other parts of Bergen County and beyond, opening up possibilities for day trips and adventures.",
                "Central Bergen County's rich tapestry of parks, libraries, and community centers provides endless opportunities for engagement. Whether it's attending lectures at the Hackensack Library, enjoying concerts at the Borg's Woods preserve, or participating in senior programs at area community centers, our companions ensure that isolation never limits our clients' participation in community life."
            ]
        },
        {
            title: 'Companion Care in Paramus & Northern Bergen County',
            content: [
                "Paramus, with its extensive shopping and dining options, serves as a social hub for many Bergen County seniors. Our companions transform routine shopping trips to Garden State Plaza or Paramus Park into enjoyable social outings, complete with lunch at favorite restaurants and leisurely browsing through stores. We understand that these excursions are about more than errands—they're opportunities for social interaction, exercise, and maintaining independence.",
                "In Ridgewood and the surrounding communities of Fair Lawn, Glen Rock, and Midland Park, companion care takes on a more intimate, neighborhood feel. Our companions become familiar faces at local coffee shops, regular attendees at library programs, and walking partners on tree-lined streets. We help seniors maintain their connections to these close-knit communities, whether it's attending village council meetings, participating in church activities, or enjoying concerts in Veterans Field.",
                "Valley Hospital's comprehensive senior programs complement our companion services perfectly. Our companions accompany clients to wellness classes, support groups, and educational seminars, helping them stay engaged with their health while building social connections with peers. The hospital's Center for Healthy Aging often becomes a regular destination, where companionship and health maintenance go hand in hand.",
                "Northern Bergen County's natural beauty provides a therapeutic backdrop for companionship. From walks around the Glen Rock Duck Pond to picnics in Van Saun Park, from bird watching at the Celery Farm to attending outdoor concerts at Memorial Field, our companions help seniors stay connected to nature and community throughout the seasons. These shared experiences create lasting bonds and cherished memories."
            ]
        },
        {
            title: 'Companion Care in Teaneck & Western Bergen County',
            content: [
                "Teaneck's diverse, multigenerational community creates unique opportunities for meaningful companionship. Our companions help seniors participate in the rich cultural life of the township, from attending events at the Teaneck Cultural Arts Center to joining activities at one of the four branches of the Teaneck Library. We understand the importance of maintaining connections across cultural and generational lines, helping our clients feel valued and included in this vibrant community.",
                "The neighboring communities of Bergenfield, Englewood, and Bogota each offer their own special character and resources. In Englewood, our companions might accompany clients to performances at the Bergen PAC, shopping trips to downtown, or medical appointments at Englewood Health. In Bergenfield's tight-knit neighborhoods, companionship often centers around local parks, diners, and community gatherings that have been traditions for decades.",
                "Western Bergen County's excellent transportation options, including multiple NJ Transit bus lines and proximity to the George Washington Bridge, allow our companions to help clients maintain connections beyond their immediate neighborhoods. Whether it's visiting family in New York, attending religious services at a longtime congregation, or maintaining medical care with trusted specialists, our companions ensure distance never becomes a barrier to important relationships.",
                'The Teaneck Creek Conservancy, Overpeck County Park, and numerous neighborhood parks provide peaceful settings for companion activities. Our companions understand that for many seniors, a simple walk in familiar surroundings, feeding ducks at the pond, or sitting on a favorite bench watching the world go by can be the highlight of their day. These quiet moments of companionship often become the most meaningful, providing comfort, consistency, and connection in an ever-changing world.'
            ]
        }
    ],

    serviceAreas: {
        title: 'Complete Bergen County Companion Care Coverage',
        subtitle:
            '360 Degree Care provides companion care services throughout Bergen County, including:',
        regions: [
            {
                name: 'Northern Bergen County',
                cities: [
                    'Allendale',
                    'Alpine',
                    'Franklin Lakes',
                    'Ho-Ho-Kus',
                    'Mahwah',
                    'Midland Park',
                    'Oakland',
                    'Ramsey',
                    'Saddle River',
                    'Upper Saddle River',
                    'Waldwick',
                    'Wyckoff'
                ]
            },
            {
                name: 'Central Bergen County',
                cities: [
                    'Fair Lawn',
                    'Glen Rock',
                    'Hackensack',
                    'Maywood',
                    'Paramus',
                    'Ridgewood',
                    'River Edge',
                    'Rochelle Park',
                    'Saddle Brook',
                    'Westwood'
                ]
            },
            {
                name: 'Southern Bergen County',
                cities: [
                    'Bogota',
                    'Bergenfield',
                    'Cliffside Park',
                    'Englewood',
                    'Englewood Cliffs',
                    'Fort Lee',
                    'Leonia',
                    'Palisades Park',
                    'Ridgefield',
                    'Teaneck',
                    'Tenafly'
                ]
            },
            {
                name: 'Eastern Bergen County',
                cities: [
                    'Carlstadt',
                    'East Rutherford',
                    'Edgewater',
                    'Little Ferry',
                    'Lyndhurst',
                    'Moonachie',
                    'North Arlington',
                    'Ridgefield Park',
                    'Rutherford',
                    'South Hackensack',
                    'Wood-Ridge'
                ]
            },
            {
                name: 'Western Bergen County',
                cities: [
                    'Demarest',
                    'Dumont',
                    'Emerson',
                    'Harrington Park',
                    'Haworth',
                    'Hillsdale',
                    'Montvale',
                    'New Milford',
                    'Northvale',
                    'Old Tappan',
                    'Oradell',
                    'Park Ridge',
                    'River Vale',
                    'Washington Township',
                    'Westwood'
                ]
            }
        ]
    },

    services: {
        title: 'Our Companion Care Services',
        description:
            'Comprehensive companion care services designed to reduce isolation and enhance quality of life for Bergen County seniors.',
        servicesList: [
            'Social interaction and conversation',
            'Transportation to appointments and errands',
            'Accompaniment to social events and activities',
            'Meal planning and preparation assistance',
            'Light housekeeping and organization',
            'Medication reminders',
            'Hobby and interest engagement',
            'Technology assistance',
            'Pet care support',
            'Overnight companionship',
            'Respite care for family caregivers',
            'Holiday and weekend coverage'
        ]
    },

    servicesBenefits: [
        {
            title: 'Reduced Isolation',
            description:
                'Regular companionship combats loneliness and social isolation, improving mental and emotional wellbeing.'
        },
        {
            title: 'Enhanced Safety',
            description:
                'Having a trusted companion reduces risks associated with living alone and provides peace of mind for families.'
        },
        {
            title: 'Maintained Independence',
            description:
                'Companions enable seniors to continue enjoying activities and outings they might otherwise have to give up.'
        },
        {
            title: 'Cognitive Stimulation',
            description:
                'Engaging conversation and activities help maintain cognitive function and mental sharpness.'
        }
    ],

    whyChoose: {
        title: 'Why Choose 360 Degree Care for Companion Care in Bergen County?',
        content: [
            "With over a decade of service in Bergen County, we've built a reputation for providing companions who become trusted friends. Our CHAP certification ensures the highest standards of care, while our local roots mean we understand the unique character of each Bergen County community. We carefully match companions based on shared interests, personality, and cultural background, creating relationships that enrich lives.",
            "Our companions are more than just friendly faces—they're carefully selected, thoroughly trained professionals who understand the importance of their role. Each undergoes comprehensive background checks, receives ongoing training in senior care best practices, and is matched based on compatibility with clients. Many of our companion-client relationships last for years, becoming cherished friendships.",
            "We recognize that companion care needs vary greatly. Some clients need a few hours of companionship weekly, while others benefit from daily visits or overnight support. Our flexible scheduling accommodates changing needs, and we're available 24/7 for both regular companionship and emergency coverage. This reliability gives families peace of mind knowing their loved ones are never truly alone."
        ]
    },

    cta: {
        title: 'Find the Perfect Companion for Your Loved One',
        description: [
            "Whether you're searching for companion care in Ridgewood, need social support in Fort Lee, or want to reduce isolation for a loved one anywhere in Bergen County, we're here to help. Our care coordinators take time to understand your needs, preferences, and interests to create the perfect companion match.",
            "Every companionship journey begins with a free consultation where we listen to your story, assess your needs, and introduce you to potential companions. There's no obligation, just an opportunity to discover how the right companion can transform daily life from lonely to lively, from isolated to engaged."
        ],
        buttonLabel: 'Start Your Companion Match',
        value: '856-874-0067'
    }
}
