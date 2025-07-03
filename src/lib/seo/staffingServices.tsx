'use client'

import Head from 'next/head'
import Script from 'next/script'
import { FaArrowRight } from 'react-icons/fa6'
import { getImgSrc } from '../images'

const StaticStaffingServicesData = {
    SeoHead: () => {
        const schema = {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Medical Staffing Solutions',
            serviceType: 'Medical Staffing',
            provider: {
                '@type': 'Organization',
                name: '360 Degree Care',
                url: 'https://www.360degreecare.net/',
                logo: 'https://www.360degreecare.net/assets/logo.png',
                description:
                    "For over 10 years, we've been providing reliable staffing solutions to healthcare facilities across New Jersey.",
                address: {
                    '@type': 'PostalAddress',
                    streetAddress: '27 Chestnut Street, Floor 1',
                    addressLocality: 'Ridgewood',
                    addressRegion: 'NJ',
                    postalCode: '07450',
                    addressCountry: 'US'
                },
                telephone: '(800) 338-7786'
            },
            areaServed: {
                '@type': 'State',
                name: 'New Jersey'
            },
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

        return (
            <>
                <Head>
                    <title>
                        Medical Staffing Solutions for Healthcare Facilities in
                        New Jersey | 360 Degree Care
                    </title>
                    <meta
                        name="title"
                        content="Medical Staffing Solutions for Healthcare Facilities in New Jersey | 360 Degree Care"
                    />
                    <meta
                        name="description"
                        content="Professional medical staffing services in New Jersey. Credentialed RNs, LPNs, CNAs, therapists, and support staff for hospitals, rehab centers, and healthcare facilities."
                    />
                    <meta
                        name="keywords"
                        content="medical staffing, healthcare staffing, nursing staff, RN staffing, LPN staffing, CNA staffing, New Jersey"
                    />

                    <meta property="og:type" content="website" />
                    <meta
                        property="og:url"
                        content="https://www.360degreecare.net/services/staffing-services"
                    />
                    <meta
                        property="og:title"
                        content="Medical Staffing Solutions for Healthcare Facilities in New Jersey | 360 Degree Care"
                    />
                    <meta
                        property="og:description"
                        content="Professional medical staffing services in New Jersey. Credentialed professionals for hospitals, rehab centers, and healthcare facilities."
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
                        content="https://www.360degreecare.net/services/staffing-services"
                    />
                    <meta
                        property="twitter:title"
                        content="Medical Staffing Solutions for Healthcare Facilities in New Jersey | 360 Degree Care"
                    />
                    <meta
                        property="twitter:description"
                        content="Professional medical staffing services in New Jersey. Credentialed professionals for hospitals, rehab centers, and healthcare facilities."
                    />
                    <meta
                        property="twitter:image"
                        content="https://www.360degreecare.net/assets/staffing-services-image.jpg"
                    />

                    <link
                        rel="canonical"
                        href="https://www.360degreecare.net/services/staffing-services"
                    />
                    <meta name="robots" content="index, follow" />
                    <meta name="geo.region" content="US-NJ" />
                    <meta name="geo.placename" content="Ridgewood" />
                </Head>

                <Script
                    id="ld-json-staffing-services"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
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
        description: (
            <>
                Credentialed professionals for hospitals, rehab centers, and
                more.
            </>
        ),
        header: 'Medical Staffing Solutions for Healthcare Facilities in New Jersey',
        img: {
            src: getImgSrc('staffing_hero') ?? '',
            alt: 'medical staffing services example'
        }
    },
    description: {
        header: 'What is Medical Staffing?',
        description:
            'We match facilities with qualified RNs, LPNs, CNAs, therapists, and support staff. Every placement is vetted and ready to provide excellent care — without staffing disruptions.'
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
