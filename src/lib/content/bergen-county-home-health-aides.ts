import { ServiceCountyPageContent } from './county-types'

export const bergenCountyHomeHealthAidesContent: ServiceCountyPageContent = {
    serviceName: 'Home Health Aides',
    serviceSlug: 'home-health-aides',

    metadata: {
        title: 'Home Health Aides Bergen County NJ | 360 Degree Care',
        description:
            'Certified home health aides throughout Bergen County, NJ. Medical support & ADL assistance in Fort Lee, Hackensack, Ridgewood & all 70 communities. Free consultation.',
        keywords:
            'home health aides Bergen County, certified home health aide NJ, medical assistance Bergen County, CNA services NJ, home health care Bergen County, Fort Lee home health aide, Hackensack medical support, Ridgewood home health',
        openGraph: {
            title: 'Home Health Aides Bergen County NJ | 360 Degree Care',
            description:
                'Certified home health aides throughout Bergen County, NJ. Medical support & ADL assistance in Fort Lee, Hackensack, Ridgewood & all 70 communities.',
            type: 'website',
            locale: 'en_US',
            siteName: '360 Degree Care',
            url: 'https://www.360degreecare.net/services/home-health-aides/bergen-county',
            images: [
                {
                    url: 'https://www.360degreecare.net/og-images/bergen-county-home-health-aides.jpg',
                    width: 1200,
                    height: 630,
                    alt: 'Home Health Aides Services in Bergen County NJ'
                }
            ]
        },
        twitter: {
            card: 'summary_large_image',
            title: 'Home Health Aides Bergen County NJ',
            description:
                'Certified home health aides serving all 70 municipalities of Bergen County. CHAP certified medical support.',
            images: [
                'https://www.360degreecare.net/og-images/bergen-county-home-health-aides.jpg'
            ]
        },
        alternates: {
            canonical:
                'https://www.360degreecare.net/services/home-health-aides/bergen-county'
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
        name: 'Home Health Aide Services',
        serviceType: 'Home Health Aide',
        provider: {
            '@type': 'HomeHealthCareService',
            name: '360 Degree Care',
            url: 'https://www.360degreecare.net',
            logo: 'https://www.360degreecare.net/logo.png',
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
                        'Ridgewood, NJ',
                        'Paramus, NJ',
                        'Teaneck, NJ',
                        'Fair Lawn, NJ',
                        'Englewood, NJ',
                        'Bergenfield, NJ',
                        'Palisades Park, NJ',
                        'Westwood, NJ'
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
        title: 'Home Health Aides Bergen County NJ',
        description:
            "Certified home health aides providing skilled medical support throughout Bergen County's 70 municipalities. From Fort Lee to Ridgewood, our CHAP-certified aides deliver professional care that bridges the gap between independence and medical supervision at home.",
        ctaButtonLabel: 'Get Your Free Assessment',
        ctaValue: 'Home Health Aides Bergen County',
        imageSrc: 'home-aides-hero',
        imageAlt: 'Professional home health aide services in Bergen County'
    },

    intro: {
        title: 'Skilled Medical Support in Every Bergen County Community',
        content: [
            'When you need more than basic assistance but want to avoid institutional care, certified home health aides in Bergen County provide the perfect solution. At 360 Degree Care, our home health aides are trained medical professionals who combine clinical skills with compassionate care, serving families from the high-rise communities of Fort Lee to the suburban neighborhoods of Ridgewood.',
            'Our home health aides work under physician orders to provide skilled medical support including wound care, medication management, vital sign monitoring, and assistance with complex medical equipment. This level of care allows clients to recover from hospitalizations, manage chronic conditions, and maintain independence while receiving professional medical oversight in the comfort of home.',
            "Throughout Bergen County's diverse communities—from the bustling medical district around Hackensack University Medical Center to the quiet tree-lined streets of Teaneck and Paramus—our certified aides understand that every client's medical needs are unique. We coordinate closely with physicians, physical therapists, and other healthcare providers to ensure comprehensive care that supports both medical goals and quality of life.",
            'The 2024 Bergen County Division of Senior Services report noted that 58% of older adults with mobility limitations rely on paid aides for bathing or transfers, yet half worry about turnover and gaps in communication. Our CHAP-certified program addresses those concerns with dedicated care teams, nurse ride-alongs, and digital shift summaries that give families visibility into every visit.',
            'Families regularly share how that structure helps. Carmine L. called our aides a “total game changer” after we organized daily support for his Fair Lawn household, and Alejandra M. praised the nurse-supervisor-aide team who cared for her father for years. Their words reflect dozens of 2024–2025 Google reviews highlighting punctuality, detailed documentation, and the calm confidence our Bergen County aides bring to complex medical routines.'
        ]
    },

    regionalSections: [
        {
            title: 'Home Health Aides in Fort Lee & Southeast Bergen County',
            content: [
                "Fort Lee's sophisticated high-rise living along the Hudson River presents unique opportunities for home health aide services. Our certified aides are experienced in working within luxury residential buildings like The Modern, Horizon House, and The Palisades, understanding building protocols, elevator access, and the coordination required with building management and concierge services.",
                'The proximity to world-class medical facilities makes Fort Lee an ideal location for clients requiring ongoing medical supervision. Our home health aides frequently coordinate care with physicians at Englewood Health, Holy Name Medical Center, and Manhattan specialists. We understand the importance of timing medical appointments around Bridge Plaza traffic and know the most efficient routes to major medical centers.',
                'The diverse communities of Palisades Park, Ridgefield, and Cliffside Park each present unique cultural considerations that our aides respect and accommodate. From Korean-speaking families in Palisades Park to the multicultural community along Boulevard East, our aides are trained to provide culturally sensitive care that honors family traditions and preferences.',
                'Local amenities like the Hudson River Waterfront Walkway, Overpeck County Park, and the shopping districts along Main Street and Lemoine Avenue provide excellent opportunities for therapeutic activities and social engagement. Our home health aides incorporate these community resources into care plans, understanding that mental and social well-being are essential components of medical recovery and ongoing health maintenance.'
            ]
        },
        {
            title: 'Home Health Aides in Hackensack & Central Bergen County',
            content: [
                'As the medical heart of Bergen County, Hackensack provides unparalleled access to specialized healthcare resources. Our <a href="/services/home-health-aides/hackensack">home health aides in Hackensack</a> work closely with the extensive medical community surrounding Hackensack University Medical Center, including the Cancer Center, Heart & Vascular Hospital, and numerous specialist offices.',
                'The neighboring communities of Westwood, River Edge, New Milford, and Oradell benefit from this central location while offering quieter residential settings ideal for recovery and ongoing care. Our aides are familiar with Pascack Valley Hospital in Westwood and understand the healthcare networks serving these established suburban communities.',
                "Central Bergen County's excellent infrastructure makes it easy for our home health aides to coordinate complex care plans involving multiple providers. Whether it's wound care following surgery at HUMC, cardiac monitoring for heart patients, or diabetic management for clients throughout the region, our aides maintain detailed communication with the medical team.",
                "The area's mature communities, with their tree-lined streets and established neighborhoods, create a calm environment conducive to healing and recovery. From the historic districts of Hackensack to the suburban charm of Oradell and Emerson, our home health aides help clients maintain their connection to beloved community spaces like downtown main streets, local libraries, and community centers while focusing on their health goals."
            ]
        },
        {
            title: 'Home Health Aides in Paramus & Northern Bergen County',
            content: [
                "Paramus, with its major shopping centers along Routes 4 and 17, serves as a commercial hub for Northern Bergen County, but it's also home to quiet residential neighborhoods where our home health aides provide skilled medical support. The proximity to Garden State Plaza and other retail centers makes it convenient for aides to assist with errands while providing medical supervision.",
                "Our <a href=\"/services/home-health-aides/ridgewood\">Ridgewood home health aide services</a> benefit from the area's exceptional medical resources, particularly Valley Hospital's comprehensive services and specialized programs. The hospital's Center for Healthy Aging, rehabilitation services, and extensive physician network provide excellent support for our in-home medical care. After Valley relocated to its new Paramus campus in 2024, we created updated arrival guides, handicap parking maps, and post-discharge checklists so aides could shepherd clients through the modern facility without confusion.",
                "The communities of Fair Lawn, Glen Rock, Midland Park, and Waldwick represent some of Bergen County's most established residential areas, where many clients have lived for decades and prefer to age in place. Our home health aides understand the importance of maintaining familiar routines while providing the medical supervision needed for chronic conditions or post-acute recovery.",
                "Northern Bergen County's excellent recreational facilities, including Van Saun Park, Saddle River County Park, and numerous golf courses, provide wonderful opportunities for therapeutic activities. Our home health aides incorporate appropriate physical activities into care plans, whether it's gentle walks in the park, visits to the Bergen County Zoo, or participation in senior programs at local community centers, always with medical considerations in mind."
            ]
        },
        {
            title: 'Home Health Aides in Teaneck & Western Bergen County',
            content: [
                "Teaneck's diverse community requires home health aides who understand and respect various cultural backgrounds, dietary restrictions, and family dynamics. Our certified aides are trained to provide culturally sensitive medical care, whether that involves coordinating with rabbinical guidance for Orthodox families, preparing halal meals for Muslim clients, or understanding extended family involvement in care decisions.",
                'Holy Name Medical Center in Teaneck serves as a primary medical resource for the region, offering specialized programs in cardiac care, wound healing, and rehabilitation services. Our home health aides work closely with Holy Name physicians and maintain detailed communication about client progress, medication adjustments, and any changes in condition that require medical attention. During Holy Name’s 2025 Cultural Health Fair weekends, we staffed additional aides to escort clients through screenings, translation booths, and vaccination clinics so they could participate fully and safely.',
                "The neighboring communities of Bergenfield, Englewood, and Englewood Cliffs each have their own character and healthcare needs. From Bergenfield's suburban family neighborhoods to Englewood's historic downtown and the upscale residential areas of Englewood Cliffs, our aides adapt their approach while maintaining consistent medical standards.",
                "Western Bergen County's commitment to community wellness extends to its senior population through numerous programs and resources. Our home health aides help clients take advantage of senior services at the Teaneck Community Center, transportation programs, and cultural events throughout the area. The region's walkable neighborhoods and proximity to Overpeck County Park provide excellent opportunities for therapeutic activities that support both physical and emotional well-being."
            ]
        }
    ],

    serviceAreas: {
        title: 'Complete Bergen County Home Health Aide Service Area',
        subtitle:
            '360 Degree Care provides certified home health aide services throughout Bergen County, including:',
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
                    'Specialized high-rise care and coordination with Manhattan medical specialists.'
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
                    'Central location with direct access to Hackensack University Medical Center.'
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
                    'Suburban medical support with access to Valley Hospital and specialty care.'
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
                    'Culturally diverse care with Holy Name Medical Center coordination.'
            }
        ]
    },

    services: {
        header: 'What Our Home Health Aide Services Include',
        items: [
            {
                title: 'Vital Signs Monitoring',
                description:
                    'Regular blood pressure, pulse, temperature, and respiration monitoring with documentation',
                Icon: 'FaHeartbeat'
            },
            {
                title: 'Medication Management',
                description:
                    'Medication administration, monitoring for side effects, and coordination with physicians',
                Icon: 'FaCapsules'
            },
            {
                title: 'Wound Care & Dressing Changes',
                description:
                    'Skilled wound assessment, cleaning, and dressing changes following physician orders',
                Icon: 'FaBandAid'
            },
            {
                title: 'Post-Hospital Recovery Support',
                description:
                    'Specialized care during recovery from surgery, illness, or hospitalization',
                Icon: 'FaHospital'
            },
            {
                title: 'Chronic Disease Management',
                description:
                    'Ongoing support for diabetes, heart disease, COPD, and other chronic conditions',
                Icon: 'FaStethoscope'
            },
            {
                title: 'Medical Equipment Assistance',
                description:
                    'Help with oxygen concentrators, CPAP machines, and other medical devices',
                Icon: 'FaMedkit'
            },
            {
                title: 'Personal Care & ADL Support',
                description:
                    'Assistance with bathing, dressing, mobility, and activities of daily living',
                Icon: 'FaBath'
            },
            {
                title: 'Physical Therapy Support',
                description:
                    'Assistance with prescribed exercises and mobility improvement programs',
                Icon: 'FaDumbbell'
            }
        ]
    },

    benefits: {
        header: 'Why Bergen County Families Choose Our Home Health Aides',
        items: [
            {
                title: 'Certified Medical Professionals',
                description:
                    'All aides are CNAs or HHAs with ongoing medical training and certification',
                Icon: 'FaCertificate'
            },
            {
                title: 'CHAP Certified Quality',
                description:
                    'Nationally recognized accreditation ensuring highest standards of care',
                Icon: 'FaMedal'
            },
            {
                title: 'Physician Coordination',
                description:
                    'Direct communication with your medical team and regular progress reports',
                Icon: 'FaUserMd'
            },
            {
                title: 'Insurance Accepted',
                description:
                    'Working with Medicare, Medicaid, and private insurance for covered services',
                Icon: 'FaShieldAlt'
            }
        ]
    },

    cta: {
        title: 'Professional Medical Support at Home in Bergen County',
        description: [
            'When you need skilled medical care but want to remain at home, our certified home health aides provide the professional support you need. From post-surgical recovery in Fort Lee to chronic disease management in Ridgewood, we bring hospital-quality care to your doorstep.',
            'Our medical coordinators work with your physician to develop a comprehensive care plan that meets your specific needs. We handle all insurance authorizations, coordinate with your medical team, and provide detailed progress reports to ensure continuity of care.'
        ],
        ctaButtonLabel: 'Schedule Your Medical Assessment',
        ctaValue: 'Home Health Aides Bergen County CTA'
    }
}
