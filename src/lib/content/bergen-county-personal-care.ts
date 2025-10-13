import { ServiceCountyPageContent } from './county-types'

export const bergenCountyPersonalCareContent: ServiceCountyPageContent = {
    serviceName: 'Personal Care',
    serviceSlug: 'personal-care',

    metadata: {
        title: 'Personal Care Services Bergen County NJ | 360 Degree Care',
        description:
            'Trusted personal care services throughout Bergen County, NJ. Professional caregivers in Fort Lee, Hackensack, Westwood & 40+ communities. Free consultation.',
        keywords:
            'personal care Bergen County, personal care near me, in home personal care NJ, Bergen County caregivers, senior care Bergen County, Fort Lee personal care, Hackensack home care, Westwood elder care',
        openGraph: {
            title: 'Personal Care Services Bergen County NJ | 360 Degree Care',
            description:
                'Trusted personal care services throughout Bergen County, NJ. Professional caregivers in Fort Lee, Hackensack, Westwood & 40+ communities.',
            type: 'website',
            locale: 'en_US',
            siteName: '360 Degree Care',
            url: 'https://360degreecare.net/services/personal-care/bergen-county',
            images: [
                {
                    url: 'https://360degreecare.net/og-images/bergen-county-personal-care.jpg',
                    width: 1200,
                    height: 630,
                    alt: 'Personal Care Services in Bergen County NJ'
                }
            ]
        },
        twitter: {
            card: 'summary_large_image',
            title: 'Personal Care Services Bergen County NJ',
            description:
                'Professional caregivers serving all 70 municipalities of Bergen County. CHAP certified.',
            images: [
                'https://360degreecare.net/og-images/bergen-county-personal-care.jpg'
            ]
        },
        alternates: {
            canonical:
                'https://360degreecare.net/services/personal-care/bergen-county'
        },
        robots: {
            index: true,
            follow: true
        },
        other: {
            'geo.region': 'US-NJ',
            'geo.placename': 'Bergen County',
            'geo.position': '40.9263;-74.0770',
            ICBM: '40.9263, -74.0770'
        }
    },

    schemaData: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Personal Care Services',
        serviceType: 'Personal Care',
        provider: {
            '@type': 'HomeHealthCareService',
            name: '360 Degree Care',
            url: 'https://360degreecare.net',
            logo: 'https://360degreecare.net/logo.png',
            telephone: '(800) 338-7786',
            address: {
                '@type': 'PostalAddress',
                streetAddress: '27 Chestnut Street, Floor 1',
                addressLocality: 'Ridgewood',
                addressRegion: 'NJ',
                postalCode: '07450',
                addressCountry: 'US'
            },
            areaServed: [
                {
                    '@type': 'AdministrativeArea',
                    name: 'Bergen County',
                    geoContains: [
                        'Fort Lee, NJ',
                        'Hackensack, NJ',
                        'Westwood, NJ',
                        'Ridgewood, NJ',
                        'Paramus, NJ',
                        'Teaneck, NJ',
                        'Fair Lawn, NJ',
                        'Englewood, NJ',
                        'Bergenfield, NJ',
                        'Palisades Park, NJ'
                    ]
                }
            ],
            priceRange: '$$',
            award: 'CHAP Certified',
            hasCredential: [
                {
                    '@type': 'EducationalOccupationalCredential',
                    credentialCategory: 'certification',
                    name: 'CHAP Certification'
                }
            ]
        },
        offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
            availableDeliveryMethod: 'https://schema.org/OnSiteService',
            areaServed: {
                '@type': 'GeoCircle',
                geoMidpoint: {
                    '@type': 'GeoCoordinates',
                    latitude: 40.9263,
                    longitude: -74.077
                },
                geoRadius: '15 miles'
            }
        }
    },

    hero: {
        title: 'Personal Care Services Bergen County NJ',
        description:
            "Trusted in-home personal care services throughout Bergen County's 70 municipalities. From Fort Lee to Westwood, our CHAP-certified caregivers provide compassionate support that helps seniors maintain independence and dignity at home.",
        ctaButtonLabel: 'Get Your Free Consultation',
        ctaValue: 'Personal Care Bergen County',
        imageSrc: 'personal-care-hero',
        imageAlt: 'Compassionate personal care services in Bergen County'
    },

    intro: {
        title: 'Compassionate Personal Care Across All of Bergen County',
        content: [
            "When you search for personal care near me in Bergen County, you're looking for more than just assistance—you're seeking a trusted partner who understands the unique needs of your loved one and your community. At 360 Degree Care, we've been that partner for thousands of Bergen County families for over a decade.",
            'Our personal care team serves families throughout Bergen County, including bustling urban centers like Hackensack and Fort Lee, charming suburban communities like Ridgewood and Westwood, and every neighborhood in between. We understand that each community has its own character—from the high-rise senior communities along the Hudson River to the tree-lined streets of Teaneck and Bergenfield.',
            "Whether you're in Fort Lee, Westwood, or anywhere in Bergen County, our certified caregivers provide personalized support that goes beyond basic assistance. We help with daily activities like bathing, dressing, and meal preparation, while also offering the companionship and emotional support that makes a real difference in quality of life. Our goal is simple: to help your loved one maintain their independence, dignity, and connection to the community they love."
        ]
    },

    regionalSections: [
        {
            title: 'Personal Care in Fort Lee & Southeast Bergen County',
            content: [
                'Fort Lee stands as the gateway to Bergen County, with its distinctive skyline of high-rise residences overlooking the Hudson River and the iconic George Washington Bridge. Our Fort Lee personal care team understands the unique needs of seniors living in high-rise communities along the Palisades, where elevator access, parking logistics, and building protocols require special consideration.',
                "This vibrant area, including Palisades Park with its thriving Korean community, Ridgefield's quiet residential streets, and Cliffside Park's stunning river views, presents both opportunities and challenges for aging in place. Many seniors here have chosen high-rise living for its convenience and security, but may need additional support to fully enjoy their independence. Our caregivers are familiar with popular buildings like The Palisades, Horizon House, and The Modern, and work seamlessly within their environments.",
                'The proximity to world-class medical facilities is a significant advantage for Fort Lee residents. We regularly assist clients with transportation to nearby Englewood Health, Holy Name Medical Center, and specialists in Manhattan. Our caregivers know the quickest routes to avoid Bridge Plaza traffic and understand the importance of timing appointments around rush hour congestion.',
                "Local landmarks like Fort Lee Historic Park, the bustling Main Street shopping district, and Overpeck County Park provide wonderful opportunities for our clients to stay engaged with their community. Whether it's a morning walk along the Hudson River Waterfront Walkway, shopping at Mitsuwa Marketplace, or dining at one of the many international restaurants along Lemoine Avenue, our personal care services help seniors maintain their connection to the vibrant Fort Lee community they've come to love."
            ]
        },
        {
            title: 'Personal Care in Hackensack & Central Bergen County',
            content: [
                "As the county seat and heart of Bergen County, Hackensack serves as a central hub for medical care, government services, and urban conveniences that benefit seniors throughout the region. Our <a href='/services/personal-care/hackensack'>personal care services in Hackensack</a> leverage the city's exceptional resources, including the renowned Hackensack University Medical Center, one of New Jersey's largest and most comprehensive healthcare facilities.",
                "Just minutes from Hackensack, we serve Westwood families near Pascack Valley Hospital, providing the same level of dedicated care to this charming downtown area known for its walkable streets and community spirit. The communities of River Edge, New Milford, Oradell, and Emerson each offer their own unique suburban character, from River Edge's historic neighborhoods to Oradell's tree-lined streets near the Oradell Reservoir.",
                'The Bergen County Courthouse area in Hackensack provides easy access to essential services, while the nearby Shops at Riverside and downtown Main Street offer convenient shopping and dining options. Our caregivers are familiar with navigating the busy medical district around HUMC, including the Cancer Center, Heart & Vascular Hospital, and numerous medical office buildings where many specialists practice.',
                "For seniors in Central Bergen County, maintaining independence often means staying connected to longtime physicians, favorite restaurants, and familiar community spaces. Whether it's attending services at one of Hackensack's historic churches, shopping at the Whole Foods on Passaic Street, or enjoying a performance at the Bergen Performing Arts Center, our personal care team ensures that daily life remains fulfilling and connected to the community."
            ]
        },
        {
            title: 'Personal Care in Paramus & Northern Bergen County',
            content: [
                'Paramus, known as the shopping capital of Bergen County with Garden State Plaza, Paramus Park, and numerous shopping centers along Routes 4 and 17, serves as a commercial hub that draws families from throughout Northern Bergen. While famous for retail, Paramus is also home to quiet residential neighborhoods where many seniors have lived for decades, watching their communities grow and evolve.',
                'Our <a href="/services/personal-care/ridgewood">Ridgewood personal care services</a> extend to families throughout the Pascack Valley and surrounding areas. Ridgewood, with its picturesque downtown, excellent medical facilities at Valley Hospital, and strong sense of community, represents the best of suburban Bergen County living. The nearby communities of Fair Lawn, Glen Rock, Midland Park, and Waldwick share similar qualities—established neighborhoods, excellent services, and a commitment to supporting aging residents.',
                "Valley Hospital in Ridgewood serves as a primary medical resource for the region, and our caregivers are well-versed in navigating its campus and coordinating with its extensive network of physicians and specialists. The hospital's senior services, including the Center for Healthy Aging, complement our in-home care to provide comprehensive support.",
                "Northern Bergen County's blend of suburban tranquility and urban convenience creates an ideal environment for aging in place. From the walking paths at Saddle River County Park to the cultural offerings at the Ridgewood Public Library, from the Bergen County Zoo in Van Saun Park to the shops along Ridgewood Avenue, our personal care services help seniors enjoy all that this vibrant region has to offer while maintaining their independence and safety at home."
            ]
        },
        {
            title: 'Personal Care in Teaneck & Western Bergen County',
            content: [
                "Teaneck stands out as one of Bergen County's most diverse communities, where cultural richness and community solidarity create a unique environment for senior care. Our personal care team in Teaneck understands and respects the varied cultural backgrounds, dietary preferences, and religious observances that make this community special. From kosher meal preparation to coordinating care around Sabbath observances, we adapt our services to honor each family's traditions.",
                "The neighboring communities of Bergenfield and Englewood add to Western Bergen's diverse tapestry. Englewood's historic downtown and proximity to Englewood Health (formerly Englewood Hospital) make it a natural hub for senior services. Meanwhile, the Palisades communities of Englewood Cliffs and Leonia offer quieter, residential settings with easy access to both local amenities and New York City.",
                'Holy Name Medical Center in Teaneck provides another excellent healthcare resource for area seniors, with specialized programs in cardiac care, joint replacement, and senior health. Our caregivers frequently assist clients with appointments at Holy Name and the numerous medical offices along Cedar Lane and Teaneck Road. The Teaneck Shopping Center and Cedar Lane business district offer convenient access to pharmacies, grocery stores, and essential services.',
                "Western Bergen County's strong sense of community extends to its senior population. Whether it's participating in programs at the Teaneck Senior Center, attending events at the Bergen County Academies, or enjoying the green spaces at Overpeck County Park and the Teaneck Creek Conservancy, our personal care services ensure that seniors remain active participants in the rich community life that defines this special corner of Bergen County."
            ]
        }
    ],

    serviceAreas: {
        title: 'Complete Bergen County Service Area',
        subtitle:
            '360 Degree Care provides personal care services throughout Bergen County, including:',
        regions: [
            {
                name: 'Southeast Bergen County',
                bgColor: 'bg-blue-50',
                cities: [
                    'Fort Lee',
                    'Palisades Park',
                    'Ridgefield',
                    'Cliffside Park',
                    'Edgewater',
                    'North Bergen'
                ],
                description:
                    'Serving the Hudson River communities with specialized high-rise care and cultural sensitivity.'
            },
            {
                name: 'Central Bergen County',
                bgColor: 'bg-green-50',
                cities: [
                    'Hackensack',
                    'Westwood',
                    'River Edge',
                    'New Milford',
                    'Oradell',
                    'Emerson',
                    'Park Ridge'
                ],
                description:
                    "Central location near major medical facilities and the county seat's resources."
            },
            {
                name: 'Northern Bergen County',
                bgColor: 'bg-orange-50',
                cities: [
                    'Paramus',
                    'Ridgewood',
                    'Fair Lawn',
                    'Glen Rock',
                    'Midland Park',
                    'Waldwick',
                    'Ho-Ho-Kus'
                ],
                description:
                    'Suburban excellence with access to Valley Hospital and premier shopping districts.'
            },
            {
                name: 'Western Bergen County',
                bgColor: 'bg-purple-50',
                cities: [
                    'Teaneck',
                    'Bergenfield',
                    'Englewood',
                    'Englewood Cliffs',
                    'Leonia',
                    'Bogota'
                ],
                description:
                    'Diverse communities with culturally sensitive care and Holy Name Medical Center access.'
            }
        ]
    },

    services: {
        header: 'What Our Personal Care Services Include',
        items: [
            {
                title: 'Bathing, Dressing & Grooming',
                description:
                    'Compassionate assistance with personal hygiene and daily dressing routines to maintain dignity and comfort',
                Icon: 'FaBath'
            },
            {
                title: 'Mobility & Transfer Support',
                description:
                    'Safe assistance with walking, standing, and transfers to prevent falls and maintain independence',
                Icon: 'FaWheelchair'
            },
            {
                title: 'Meal Preparation & Nutrition',
                description:
                    'Nutritious meal planning, grocery shopping, and feeding assistance when needed',
                Icon: 'FaUtensils'
            },
            {
                title: 'Medication Reminders',
                description:
                    'Timely prompts and organization to ensure medications are taken as prescribed',
                Icon: 'FaCapsules'
            },
            {
                title: 'Light Housekeeping',
                description:
                    'Maintaining a clean, safe, and comfortable living environment',
                Icon: 'FaBroom'
            },
            {
                title: 'Transportation Services',
                description:
                    'Safe rides to medical appointments, shopping, and social activities',
                Icon: 'FaCar'
            },
            {
                title: 'Companionship & Social Support',
                description:
                    'Meaningful conversation and emotional support to reduce isolation',
                Icon: 'FaHeart'
            },
            {
                title: 'Incontinence Care',
                description:
                    'Dignified and respectful assistance with toileting and hygiene needs',
                Icon: 'FaToilet'
            }
        ]
    },

    benefits: {
        header: 'Why Bergen County Families Choose 360 Degree Care',
        items: [
            {
                title: 'CHAP Certified Excellence',
                description:
                    'Nationally recognized for quality care standards and continuous improvement',
                Icon: 'FaMedal'
            },
            {
                title: 'Local Bergen County Expertise',
                description:
                    'Deep knowledge of local resources, from Hackensack UMC to Valley Hospital',
                Icon: 'FaMapMarked'
            },
            {
                title: '24/7 Availability',
                description:
                    'Round-the-clock support for families throughout Bergen County',
                Icon: 'FaClock'
            },
            {
                title: 'Personalized Care Plans',
                description:
                    "Customized services tailored to each client's unique needs and preferences",
                Icon: 'FaNotesMedical'
            }
        ]
    },

    cta: {
        title: 'Getting Started with Personal Care in Your Area',
        description: [
            "Whether you're searching for \"personal care near me\" in Westwood, need immediate assistance in Fort Lee, or are planning ahead for a loved one in Ridgewood, we're here to help. Our care coordinators understand Bergen County's unique communities and can match you with the perfect caregiver for your specific needs.",
            "Every journey begins with a free consultation where we listen to your needs, assess your situation, and create a personalized care plan. We handle all the details—from caregiver matching to scheduling to ongoing support—so you can focus on what matters most: your loved one's wellbeing."
        ],
        ctaButtonLabel: 'Schedule Your Free Consultation',
        ctaValue: 'Personal Care Bergen County CTA'
    }
}
