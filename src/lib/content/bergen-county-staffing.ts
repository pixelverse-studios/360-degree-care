import { ServiceCountyPageContent } from './county-types'

export const bergenCountyStaffingContent: ServiceCountyPageContent = {
    serviceName: 'Healthcare Staffing',
    serviceSlug: 'staffing',
    slug: 'services/staffing/bergen-county',

    metadata: {
        title: 'Healthcare Staffing Bergen County NJ | Medical Staffing Solutions | 360 Degree Care',
        description:
            'Professional healthcare staffing solutions throughout Bergen County, NJ. Temporary nursing, CNA & medical staff for facilities in Fort Lee, Hackensack & all 70 communities.',
        keywords:
            'healthcare staffing Bergen County, medical staffing NJ, temporary nursing Bergen County, CNA staffing NJ, healthcare facility staffing, Bergen County medical staff, Fort Lee healthcare staffing, Hackensack medical staffing',
        openGraph: {
            title: 'Healthcare Staffing Bergen County NJ | Medical Staffing Solutions | 360 Degree Care',
            description:
                'Professional healthcare staffing solutions throughout Bergen County, NJ. Temporary nursing, CNA & medical staff for facilities in Fort Lee, Hackensack & all 70 communities.',
            type: 'website',
            locale: 'en_US',
            siteName: '360 Degree Care',
            url: 'https://360degreecare.net/services/staffing/bergen-county',
            images: [
                {
                    url: 'https://360degreecare.net/og-images/bergen-county-staffing.jpg',
                    width: 1200,
                    height: 630,
                    alt: 'Healthcare Staffing Solutions in Bergen County NJ'
                }
            ]
        },
        twitter: {
            card: 'summary_large_image',
            title: 'Healthcare Staffing Bergen County NJ',
            description:
                'Professional healthcare staffing solutions serving facilities across all 70 municipalities of Bergen County.',
            images: [
                'https://360degreecare.net/og-images/bergen-county-staffing.jpg'
            ]
        },
        alternates: {
            canonical:
                'https://360degreecare.net/services/staffing/bergen-county'
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
        name: 'Healthcare Staffing Solutions',
        serviceType: 'Healthcare Staffing',
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
        title: 'Healthcare Staffing Solutions Bergen County NJ',
        description:
            "Reliable healthcare staffing solutions for facilities throughout Bergen County's 70 municipalities. From temporary nursing coverage in Fort Lee to emergency staffing in Ridgewood, our CHAP-certified professionals ensure continuous, quality patient care when you need it most.",
        ctaButtonLabel: 'Get Staffing Quote',
        ctaValue: 'Healthcare Staffing Bergen County',
        imageSrc: 'staffing_hero',
        imageAlt: 'Professional healthcare staffing solutions in Bergen County'
    },

    intro: {
        title: 'Trusted Healthcare Professionals for Every Bergen County Facility',
        content: [
            'When your healthcare facility faces staffing challenges, professional healthcare staffing solutions in Bergen County provide the qualified personnel you need to maintain exceptional patient care. At 360 Degree Care, we understand that healthcare facilities across Bergen County—from acute care hospitals to assisted living communities—require reliable, skilled professionals who can seamlessly integrate into existing teams.',
            "Our comprehensive staffing solutions include registered nurses, licensed practical nurses, certified nursing assistants, and specialized healthcare professionals who are fully credentialed, experienced, and committed to maintaining the highest standards of patient care. Whether you need temporary coverage for unexpected absences, support during peak census periods, or specialized staff for unique patient needs, we provide qualified professionals who understand Bergen County's healthcare landscape.",
            "From the major medical centers in Hackensack to the specialty facilities in Ridgewood, from assisted living communities in Teaneck to rehabilitation centers in Fort Lee, our staffing solutions adapt to each facility's unique needs, protocols, and patient populations. We recognize that effective healthcare staffing goes beyond filling positions—it's about providing professionals who enhance care quality while supporting your existing team."
        ]
    },

    regions: [
        {
            title: 'Healthcare Staffing in Fort Lee & Southeast Bergen County',
            content: [
                "Fort Lee's unique healthcare landscape, with its proximity to Manhattan medical centers and high-rise senior communities, requires staffing solutions that understand both acute care and senior residential settings. Our healthcare professionals are experienced in working within the sophisticated residential buildings along the Palisades, providing staffing for on-site medical clinics, assisted living communities, and home health agencies serving these unique environments.",
                "The diverse communities of Palisades Park, Ridgefield, and Cliffside Park each have distinct healthcare facilities with specific staffing needs. From the multilingual requirements in Palisades Park's Korean community care centers to the specialized senior services along the Hudson River waterfront, our staffing solutions provide culturally competent professionals who can communicate effectively with diverse patient populations.",
                "Southeast Bergen County's proximity to major medical centers like Englewood Health and Holy Name Medical Center creates opportunities for our healthcare professionals to work in satellite clinics, specialty practices, and transitional care facilities. Our staff understand the coordination required between these facilities and the main hospital campuses, ensuring seamless patient care transitions.",
                "The area's mix of luxury senior communities and traditional healthcare facilities requires flexible staffing solutions that can adapt to different care models. Whether providing temporary nursing coverage for a high-end assisted living facility or emergency staffing for a neighborhood medical practice, our professionals bring the expertise and professionalism needed to maintain excellent patient care standards."
            ]
        },
        {
            title: 'Healthcare Staffing in Hackensack & Central Bergen County',
            content: [
                'As Bergen County\'s medical hub, Hackensack and the surrounding central region present numerous opportunities for healthcare staffing. Our <a href="/services/staffing/hackensack">healthcare staffing services in Hackensack</a> include support for the extensive medical community surrounding Hackensack University Medical Center, including satellite clinics, specialty practices, and outpatient facilities that require qualified temporary and per diem staff.',
                'The neighboring communities of Westwood, River Edge, New Milford, and Oradell host numerous healthcare facilities ranging from Pascack Valley Hospital to independent medical practices, rehabilitation centers, and senior care communities. Our staffing solutions provide qualified professionals who understand the collaborative relationships between these facilities and can adapt quickly to different healthcare environments.',
                "Central Bergen County's established healthcare infrastructure requires staffing professionals who can work effectively in both traditional hospital settings and modern outpatient facilities. Our nurses, CNAs, and healthcare technicians are experienced in electronic health records, current medical technologies, and the quality standards expected in Bergen County's premier healthcare facilities.",
                "The region's mature healthcare market demands staffing solutions that can provide both routine coverage and specialized expertise. Whether supporting a busy family practice during flu season, providing temporary nursing leadership during staff transitions, or offering specialized skills for unique patient populations, our healthcare professionals bring the experience and adaptability needed for successful placements."
            ]
        },
        {
            title: 'Healthcare Staffing in Paramus & Northern Bergen County',
            content: [
                'Paramus, strategically located along major transportation routes, serves as a healthcare hub for Northern Bergen County with numerous medical offices, outpatient clinics, and specialty practices requiring reliable staffing support. Our healthcare professionals understand the fast-paced environment of these facilities and can provide seamless coverage that maintains operational efficiency and patient satisfaction.',
                'Our <a href="/services/staffing/ridgewood">Ridgewood healthcare staffing</a> solutions support Valley Hospital and its extensive network of affiliated practices, rehabilitation facilities, and specialty clinics. The hospital\'s reputation for excellence requires staffing professionals who can meet the highest clinical standards while adapting to the institution\'s specific protocols and patient care philosophies.',
                'The communities of Fair Lawn, Glen Rock, Midland Park, and Waldwick feature numerous healthcare facilities including medical practices, urgent care centers, and senior care communities that require flexible staffing solutions. Our professionals are experienced in working with both large healthcare systems and independent practices, understanding the unique needs and expectations of each environment.',
                "Northern Bergen County's health-conscious population and emphasis on preventive care create opportunities for staffing in wellness centers, rehabilitation facilities, and specialized medical practices. Our healthcare professionals are trained in current wellness trends, preventive care protocols, and the patient education approaches that align with this region's healthcare preferences and expectations."
            ]
        },
        {
            title: 'Healthcare Staffing in Teaneck & Western Bergen County',
            content: [
                "Teaneck's diverse community and major medical facilities require healthcare staffing solutions that can provide culturally competent professionals who understand the varied backgrounds and healthcare preferences of the population. Our staffing includes professionals who can work effectively with diverse patient populations while maintaining clinical excellence and cultural sensitivity.",
                "Holy Name Medical Center in Teaneck and its affiliated facilities require staffing professionals who can integrate quickly into established care teams and maintain the institution's high standards for patient care and safety. Our healthcare professionals are experienced in working with major medical centers and understand the coordination and communication required in complex healthcare environments.",
                'The neighboring communities of Bergenfield, Englewood, and Englewood Cliffs host a variety of healthcare facilities including primary care practices, specialty clinics, and senior care communities. Each facility type requires different staffing approaches, from the family-oriented environment of Bergenfield practices to the sophisticated care expected in Englewood Cliffs senior communities.',
                "Western Bergen County's strong community networks and emphasis on patient-centered care require staffing professionals who can build rapport quickly with patients and families while providing excellent clinical care. Our healthcare professionals understand the importance of communication, empathy, and community connection in delivering healthcare that meets the expectations of this engaged and informed patient population."
            ]
        }
    ],

    serviceAreas: {
        title: 'Complete Bergen County Healthcare Staffing Coverage',
        subtitle:
            '360 Degree Care provides healthcare staffing solutions throughout Bergen County, including:',
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
                    'Specialized staffing for high-rise senior communities and multicultural healthcare facilities.'
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
                    'Major medical center support and established healthcare facility staffing.'
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
                    'Premier healthcare facility staffing and specialty practice support.'
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
                    'Culturally competent staffing and major medical center workforce support.'
            }
        ]
    },

    services: {
        header: 'What Our Healthcare Staffing Solutions Include',
        items: [
            {
                title: 'Registered Nurse (RN) Staffing',
                description:
                    'Licensed RNs for acute care, specialty units, and supervisory positions',
                Icon: 'FaUserNurse'
            },
            {
                title: 'Licensed Practical Nurse (LPN) Staff',
                description:
                    'Experienced LPNs for long-term care, clinics, and patient care support',
                Icon: 'FaStethoscope'
            },
            {
                title: 'Certified Nursing Assistant (CNA) Coverage',
                description:
                    'Trained CNAs for direct patient care and activities of daily living support',
                Icon: 'FaHandsHelping'
            },
            {
                title: 'Emergency & On-Call Staffing',
                description:
                    '24/7 emergency coverage for unexpected absences and urgent staffing needs',
                Icon: 'FaPhoneAlt'
            },
            {
                title: 'Temporary & Per Diem Staff',
                description:
                    'Flexible staffing solutions for short-term coverage and varying census needs',
                Icon: 'FaClock'
            },
            {
                title: 'Specialized Healthcare Professionals',
                description:
                    'Physical therapists, occupational therapists, and other specialty staff',
                Icon: 'FaUserMd'
            },
            {
                title: 'Administrative Healthcare Staff',
                description:
                    'Medical assistants, unit clerks, and healthcare administrative support',
                Icon: 'FaClipboardList'
            },
            {
                title: 'Long-Term Staffing Solutions',
                description:
                    'Extended placements for ongoing staffing needs and special projects',
                Icon: 'FaCalendarAlt'
            }
        ]
    },

    benefits: {
        header: 'Why Bergen County Healthcare Facilities Choose Our Staffing',
        items: [
            {
                title: 'Fully Credentialed Professionals',
                description:
                    'All staff are licensed, background-checked, and meet New Jersey healthcare requirements',
                Icon: 'FaCertificate'
            },
            {
                title: 'CHAP Certified Quality',
                description:
                    'Nationally recognized standards ensuring excellence in healthcare staffing',
                Icon: 'FaMedal'
            },
            {
                title: 'Rapid Response Capability',
                description:
                    '24/7 availability for emergency staffing needs with quick deployment',
                Icon: 'FaBolt'
            },
            {
                title: 'Local Healthcare Expertise',
                description:
                    'Deep understanding of Bergen County facilities, protocols, and patient populations',
                Icon: 'FaMapMarked'
            }
        ]
    },

    cta: {
        title: 'Reliable Healthcare Staffing When You Need It Most',
        description: [
            "When staffing challenges threaten to impact patient care, our healthcare professionals step in to ensure continuity and quality. From emergency coverage in Fort Lee to planned staffing support in Hackensack, we provide qualified professionals who integrate seamlessly into your facility's care team.",
            'Our staffing coordinators understand the unique needs of Bergen County healthcare facilities and can provide immediate solutions or planned coverage that meets your specific requirements. We handle all credentialing, insurance, and administrative details so you can focus on patient care.'
        ],
        ctaButtonLabel: 'Request Staffing Consultation',
        ctaValue: 'Healthcare Staffing Bergen County CTA'
    }
}
