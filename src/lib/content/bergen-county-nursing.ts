import { ServiceCountyPageContent } from './county-types'

export const bergenCountyNursingContent: ServiceCountyPageContent = {
    serviceName: 'Nursing',
    serviceSlug: 'nursing',

    metadata: {
        title: 'Nursing Services Bergen County NJ | RN & LPN Care | 360 Degree Care',
        description:
            'Professional RN & LPN nursing services throughout Bergen County, NJ. Skilled wound care, medication management & clinical expertise in all 70 communities. Free consultation.',
        keywords:
            'nursing services Bergen County, RN LPN care NJ, skilled nursing Bergen County, wound care Bergen County, clinical nursing NJ, Fort Lee nursing, Hackensack skilled nursing, Ridgewood nurse services',
        openGraph: {
            title: 'Nursing Services Bergen County NJ | RN & LPN Care | 360 Degree Care',
            description:
                'Professional RN & LPN nursing services throughout Bergen County, NJ. Skilled wound care, medication management & clinical expertise in all 70 communities.',
            type: 'website',
            locale: 'en_US',
            siteName: '360 Degree Care',
            url: 'https://360degreecare.net/services/nursing/bergen-county',
            images: [
                {
                    url: 'https://360degreecare.net/og-images/bergen-county-nursing.jpg',
                    width: 1200,
                    height: 630,
                    alt: 'Professional Nursing Services in Bergen County NJ'
                }
            ]
        },
        twitter: {
            card: 'summary_large_image',
            title: 'Nursing Services Bergen County NJ',
            description:
                'Professional RN & LPN nursing services serving all 70 municipalities of Bergen County. CHAP certified clinical expertise.',
            images: [
                'https://360degreecare.net/og-images/bergen-county-nursing.jpg'
            ]
        },
        alternates: {
            canonical:
                'https://360degreecare.net/services/nursing/bergen-county'
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
        name: 'Professional Nursing Services',
        serviceType: 'Skilled Nursing',
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
        title: 'Professional Nursing Services Bergen County NJ',
        description:
            "Expert RN and LPN nursing services delivering clinical excellence throughout Bergen County's 70 municipalities. From complex wound care in Fort Lee to post-surgical monitoring in Ridgewood, our CHAP-certified nurses provide hospital-quality care in the comfort of home.",
        ctaButtonLabel: 'Get Your Clinical Assessment',
        ctaValue: 'Nursing Services Bergen County',
        imageSrc: 'nursing-hero',
        imageAlt: 'Professional nursing services in Bergen County'
    },

    intro: {
        title: 'Clinical Excellence in Every Bergen County Community',
        content: [
            'When complex medical conditions require professional nursing expertise, skilled nursing services in Bergen County provide the clinical knowledge and experience needed for optimal health outcomes. At 360 Degree Care, our registered nurses (RNs) and licensed practical nurses (LPNs) deliver comprehensive medical care that allows clients to receive hospital-quality treatment while remaining in familiar surroundings.',
            'Our nursing team specializes in advanced clinical procedures including IV therapy, wound care management, ventilator care, and complex medication regimens. Working under physician orders, our nurses provide skilled assessments, patient education, and ongoing monitoring that ensures medical stability and promotes healing. This level of professional care is essential for clients recovering from serious illnesses, managing chronic conditions, or requiring ongoing medical supervision.',
            "Throughout Bergen County's diverse communities—from the medical hub surrounding Hackensack University Medical Center to the suburban neighborhoods of Ridgewood and Teaneck—our nurses understand that clinical expertise must be combined with compassionate care. We coordinate closely with physicians, specialists, and other healthcare providers to ensure seamless continuity of care that supports both immediate medical needs and long-term health goals."
        ]
    },

    regionalSections: [
        {
            title: 'Nursing Services in Fort Lee & Southeast Bergen County',
            content: [
                "Fort Lee's sophisticated medical infrastructure, with easy access to Manhattan specialists and New Jersey medical centers, makes it an ideal location for clients requiring ongoing skilled nursing care. Our registered nurses are experienced in coordinating complex care plans with physicians at Englewood Health, Holy Name Medical Center, and Manhattan medical centers, ensuring seamless communication and optimal outcomes.",
                'The high-rise living environment along the Hudson River requires nurses who understand the logistics of delivering clinical care in luxury residential buildings. Our nurses are familiar with buildings like The Modern, Horizon House, and The Palisades, working efficiently within building protocols while maintaining sterile techniques and managing medical equipment in residential settings.',
                "The diverse communities of Palisades Park, Ridgefield, and Cliffside Park each present unique clinical challenges and cultural considerations. Our nurses provide culturally sensitive care that respects family dynamics, language preferences, and traditional healing practices while maintaining the highest medical standards. This is particularly important in Palisades Park's Korean community and the multicultural areas along the Palisades.",
                'The proximity to major medical centers allows our nursing team to provide seamless transitions between hospital and home care. Whether managing post-surgical recovery, coordinating with oncology specialists, or providing ongoing cardiac monitoring, our nurses ensure that clients receive continuous, high-quality medical supervision while enjoying the comfort and familiarity of their Fort Lee area homes.'
            ]
        },
        {
            title: 'Nursing Services in Hackensack & Central Bergen County',
            content: [
                'As Bergen County\'s medical center, Hackensack provides unparalleled access to specialized healthcare resources. Our <a href="/services/nursing/hackensack">skilled nursing services in Hackensack</a> work in close collaboration with the extensive medical community at Hackensack University Medical Center, including coordination with the Cancer Center, Heart & Vascular Hospital, and numerous subspecialty clinics.',
                'The neighboring communities of Westwood, River Edge, New Milford, and Oradell benefit from this central medical hub while offering quieter residential environments ideal for recovery and ongoing care. Our nurses coordinate with Pascack Valley Hospital in Westwood and maintain relationships with primary care physicians throughout these established communities.',
                "Central Bergen County's mature healthcare infrastructure allows our nursing team to provide comprehensive clinical services including complex wound care, IV therapy, ventilator management, and specialized monitoring for clients with multiple medical conditions. The area's excellent emergency medical services and quick access to hospitals provide additional safety and peace of mind for families.",
                "The region's established neighborhoods, with their tree-lined streets and close-knit communities, create an ideal environment for skilled nursing care. Our nurses understand the importance of maintaining clients' connections to beloved community spaces—from the historic downtown areas to local libraries and community centers—while focusing on medical stability and health improvement goals."
            ]
        },
        {
            title: 'Nursing Services in Paramus & Northern Bergen County',
            content: [
                "Paramus, strategically located along major transportation corridors, provides excellent access to medical facilities throughout the region. Our nursing team serving Northern Bergen County coordinates care with Valley Hospital in Ridgewood, leveraging the hospital's comprehensive services including cardiac care, orthopedics, and rehabilitation medicine to provide seamless continuity of care.",
                "Our <a href=\"/services/nursing/ridgewood\">Ridgewood nursing services</a> benefit from the area's exceptional medical community and the sophisticated healthcare needs of the region's residents. Valley Hospital's Center for Healthy Aging, wound care center, and specialized clinics provide excellent resources for our skilled nursing team to coordinate complex care plans.",
                "The communities of Fair Lawn, Glen Rock, Midland Park, and Waldwick represent some of Bergen County's most health-conscious areas, where residents often prefer to age in place with professional medical support. Our nurses provide advanced clinical services including diabetes management, cardiac monitoring, respiratory care, and post-operative nursing that allows clients to remain in their familiar neighborhoods.",
                "Northern Bergen County's excellent recreational facilities and active senior community require nursing services that support both medical needs and quality of life. Our nurses incorporate appropriate therapeutic activities into care plans, whether that's coordinating with physical therapy programs at Van Saun Park, supporting participation in senior wellness programs, or ensuring safe mobility for community activities, always with clinical oversight and safety as priorities."
            ]
        },
        {
            title: 'Nursing Services in Teaneck & Western Bergen County',
            content: [
                "Teaneck's diverse community requires nursing services that understand and respect cultural differences in healthcare preferences, family involvement, and treatment approaches. Our skilled nurses are trained to provide culturally competent clinical care, whether coordinating with religious leaders regarding treatment decisions, accommodating dietary restrictions in medication timing, or understanding extended family dynamics in care planning.",
                'Holy Name Medical Center in Teaneck serves as a premier medical resource with specialized programs in cardiac care, wound healing, and comprehensive rehabilitation services. Our nursing team maintains close relationships with Holy Name physicians and specialists, ensuring that home-based clinical care aligns with hospital-based treatment plans and medical recommendations.',
                "The neighboring communities of Bergenfield, Englewood, and Englewood Cliffs each have distinct healthcare needs and resources. From Bergenfield's family-oriented neighborhoods to Englewood's historic medical community and the upscale residential areas of Englewood Cliffs, our nurses adapt their clinical approach while maintaining consistent professional standards and evidence-based care.",
                "Western Bergen County's strong community support systems enhance our nursing services by providing additional resources for client well-being. Our nurses collaborate with local senior services, transportation programs, and community health initiatives to ensure comprehensive care that addresses not only immediate medical needs but also social determinants of health that impact overall wellness and recovery outcomes."
            ]
        }
    ],

    serviceAreas: {
        title: 'Complete Bergen County Nursing Service Area',
        subtitle:
            '360 Degree Care provides professional RN and LPN nursing services throughout Bergen County, including:',
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
                    'Advanced clinical care with coordination to Manhattan medical specialists.'
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
                    'Direct collaboration with Hackensack University Medical Center specialists.'
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
                    'Comprehensive clinical services with Valley Hospital coordination.'
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
                    'Culturally competent clinical care with Holy Name Medical Center partnership.'
            }
        ]
    },

    services: {
        header: 'What Our Professional Nursing Services Include',
        items: [
            {
                title: 'IV Therapy & Infusion Services',
                description:
                    'Professional IV medication administration, hydration therapy, and infusion monitoring',
                Icon: 'FaSyringe'
            },
            {
                title: 'Advanced Wound Care',
                description:
                    'Complex wound assessment, specialized dressing changes, and healing progress monitoring',
                Icon: 'FaBandAid'
            },
            {
                title: 'Medication Management',
                description:
                    'Complex medication regimens, IV medications, and side effect monitoring',
                Icon: 'FaCapsules'
            },
            {
                title: 'Post-Surgical Nursing',
                description:
                    'Surgical site monitoring, drain management, and recovery coordination',
                Icon: 'FaStethoscope'
            },
            {
                title: 'Chronic Disease Management',
                description:
                    'Diabetes care, cardiac monitoring, respiratory therapy, and COPD management',
                Icon: 'FaHeartbeat'
            },
            {
                title: 'Ventilator & Trach Care',
                description:
                    'Ventilator management, tracheostomy care, and respiratory assessment',
                Icon: 'FaLungs'
            },
            {
                title: 'Clinical Assessments',
                description:
                    'Comprehensive health assessments, vital signs monitoring, and progress documentation',
                Icon: 'FaClipboardCheck'
            },
            {
                title: 'Patient & Family Education',
                description:
                    'Medical education, care technique training, and discharge planning support',
                Icon: 'FaGraduationCap'
            }
        ]
    },

    benefits: {
        header: 'Why Bergen County Families Choose Our Nursing Services',
        items: [
            {
                title: 'Licensed Professional Nurses',
                description:
                    'All RNs and LPNs are licensed, experienced, and receive ongoing clinical education',
                Icon: 'FaUserNurse'
            },
            {
                title: 'CHAP Certified Excellence',
                description:
                    'Nationally recognized accreditation ensuring highest clinical standards',
                Icon: 'FaMedal'
            },
            {
                title: 'Physician Collaboration',
                description:
                    'Direct coordination with your medical team and specialist physicians',
                Icon: 'FaUserMd'
            },
            {
                title: '24/7 Clinical Support',
                description:
                    'Round-the-clock nursing supervision and emergency clinical consultation',
                Icon: 'FaClock'
            }
        ]
    },

    cta: {
        title: 'Expert Clinical Care at Home in Bergen County',
        description: [
            'When you need skilled nursing care but want to avoid extended hospital stays or nursing facility placement, our professional nurses bring clinical expertise directly to your home. From complex wound care in Hackensack to post-surgical monitoring in Teaneck, we provide hospital-quality nursing services with the comfort of home.',
            'Our clinical coordinators work with your physician to develop comprehensive nursing care plans that meet your specific medical needs. We handle all insurance authorizations, maintain detailed clinical documentation, and provide regular progress reports to your medical team to ensure optimal health outcomes.'
        ],
        ctaButtonLabel: 'Schedule Your Clinical Evaluation',
        ctaValue: 'Nursing Services Bergen County CTA'
    }
}
