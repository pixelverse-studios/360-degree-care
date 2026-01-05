'use client'

import Head from 'next/head'
import Script from 'next/script'
import { FaArrowRight } from 'react-icons/fa6'
import { getImgSrc } from '../images'
import { generateFAQSchema } from './faq-schema'
import { STAFFING_SERVICES_FAQS } from '@/utils/faqs'

const StaticStaffingServicesData = {
    SeoHead: () => {
        const faqSchema = generateFAQSchema(STAFFING_SERVICES_FAQS)
        const schema = {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Medical Staffing Solutions',
            serviceType: 'Medical Staffing',
            provider: {
                '@type': 'Organization',
                name: '360 Degree Care',
                url: 'https://www.360degreecare.net/',
                logo: 'https://www.360degreecare.net/logo.png',
                description:
                    "For over 10 years, we've been providing reliable staffing solutions to healthcare facilities across New Jersey.",
                address: {
                    '@type': 'PostalAddress',
                    streetAddress: '27 Chestnut Street',
                    addressLocality: 'Ridgewood',
                    addressRegion: 'NJ',
                    postalCode: '07450',
                    addressCountry: 'US'
                },
                telephone: '(201) 299-4243'
            },
            areaServed: [
                {
                    '@type': 'AdministrativeArea',
                    name: 'Bergen County, New Jersey'
                },
                {
                    '@type': 'AdministrativeArea',
                    name: 'Monmouth County, New Jersey'
                },
                {
                    '@type': 'AdministrativeArea',
                    name: 'Passaic County, New Jersey'
                },
                {
                    '@type': 'AdministrativeArea',
                    name: 'Essex County, New Jersey'
                },
                {
                    '@type': 'AdministrativeArea',
                    name: 'Ocean County, New Jersey'
                }
            ],
            description:
                '360 Degree Care provides professional medical staffing solutions including qualified RNs, LPNs, CNAs, therapists, and support staff for healthcare facilities. Every placement is vetted and ready to provide excellent care.',
            offers: {
                '@type': 'Offer',
                availability: 'https://schema.org/InStock',
                availabilityEnds: '2026-12-31T23:59',
                availableAtOrFrom: {
                    '@type': 'Place',
                    address: {
                        '@type': 'PostalAddress',
                        addressLocality: 'Ridgewood',
                        addressRegion: 'NJ'
                    }
                }
            }
        }
        const canonicalUrl = 'https://www.360degreecare.net/services/staffing'

        return (
            <>
                <Head>
                    <title>
                        Medical Staffing Solutions in New Jersey | 360 Degree
                        Care
                    </title>
                    <meta
                        name="title"
                        content="Medical Staffing Solutions in New Jersey | 360 Degree Care"
                    />
                    <meta
                        name="description"
                        content="Medical staffing solutions in New Jersey, providing credentialed nurses and healthcare professionals for hospitals, rehab centers, and care facilities."
                    />
                    <meta
                        name="keywords"
                        content="medical staffing, healthcare staffing, nursing staff, RN staffing, LPN staffing, CNA staffing, New Jersey"
                    />

                    <meta property="og:type" content="website" />
                    <meta
                        property="og:url"
                        content="https://www.360degreecare.net/services/staffing"
                    />
                    <meta
                        property="og:title"
                        content="Medical Staffing Solutions in New Jersey | 360 Degree Care"
                    />
                    <meta
                        property="og:description"
                        content="Medical staffing solutions in New Jersey, providing credentialed nurses and healthcare professionals for hospitals, rehab centers, and care facilities."
                    />
                    <meta
                        property="og:image"
                        content="https://www.360degreecare.net/assets/staffing-services-image.jpg"
                    />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:site_name" content="360 Degree Care" />

                    <meta
                        property="twitter:card"
                        content="summary_large_image"
                    />
                    <meta
                        property="twitter:url"
                        content="https://www.360degreecare.net/services/staffing"
                    />
                    <meta
                        property="twitter:title"
                        content="Medical Staffing Solutions in New Jersey | 360 Degree Care"
                    />
                    <meta
                        property="twitter:description"
                        content="Medical staffing solutions in New Jersey, providing credentialed nurses and healthcare professionals for hospitals, rehab centers, and care facilities."
                    />
                    <meta
                        property="twitter:image"
                        content="https://www.360degreecare.net/assets/staffing-services-image.jpg"
                    />

                    <meta name="robots" content="index, follow" />
                    <meta name="geo.region" content="US-NJ" />
                    <meta name="geo.placename" content="Ridgewood" />
                    <link rel="canonical" href={canonicalUrl} />
                </Head>

                <Script
                    id="ld-json-staffing-services"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
                <Script
                    id="ld-json-staffing-services-faq"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(faqSchema)
                    }}
                />
            </>
        )
    },
    hero: {
        cta: (
            <>
                Join the Team <FaArrowRight size={24} className="ml-4" />
            </>
        ),
        description:
            'Credentialed healthcare professionals to support facilities with short- and long-term staffing needs.',
        introBody:
            '360 Degree Care provides medical staffing solutions for healthcare facilities across New Jersey, including hospitals, rehabilitation centers, and long-term care environments. Our staffing services connect facilities with qualified, credentialed professionals to ensure consistent, reliable patient care.',
        header: 'Medical Staffing Solutions in New Jersey',
        img: {
            src: getImgSrc('staffing_hero') ?? '',
            alt: 'medical staffing services example'
        }
    },
    description: {
        header: 'What is Medical Staffing?',
        description:
            '360 Degree Care provides medical staffing solutions for healthcare facilities across New Jersey, including hospitals, rehabilitation centers, and long-term care environments. Our staffing services connect facilities with qualified, credentialed professionals to ensure consistent, reliable patient care.'
    },
    listItems: {
        header: "What's Included",
        items: [
            {
                title: 'RNs, LPNs, CNAs, PT/OT/SLP, medical admin staff',
                description:
                    'Comprehensive range of qualified healthcare professionals',
                Icon: 'FaUserNurse'
            },
            {
                title: 'Rigorous screening for skills and fit',
                description:
                    'Thorough vetting process to ensure quality placements',
                Icon: 'FaUserCheck'
            },
            {
                title: 'Flexible contracts: short- or long-term',
                description:
                    "Adaptable staffing solutions to meet your facility's needs",
                Icon: 'FaHandshake'
            },
            {
                title: 'Industries Served: Hospitals, clinics, assisted living, schools, correctional, SNFs, rehab',
                description:
                    'Wide range of healthcare settings and specialties covered',
                Icon: 'FaHospital'
            }
        ]
    },
    benefits: {
        header: 'Benefits of Our Staffing Services',
        items: [
            {
                title: 'Flexibility',
                description:
                    'Adaptable staffing solutions for temporary, permanent, and emergency coverage',
                Icon: 'FaClock'
            },
            {
                title: 'Quality Professionals',
                description:
                    'All staff are credentialed, experienced, and committed to excellence',
                Icon: 'FaAward'
            },
            {
                title: 'Cost-Efficient Coverage',
                description:
                    'Reduce recruitment costs and minimize staffing disruptions',
                Icon: 'FaDollarSign'
            },
            {
                title: 'Comprehensive Training',
                description:
                    'Ongoing education and skills development for all placed professionals',
                Icon: 'FaGraduationCap'
            }
        ]
    }
}

export default StaticStaffingServicesData
