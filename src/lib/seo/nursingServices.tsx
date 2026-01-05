'use client'

import type { Metadata } from 'next'
import Head from 'next/head'
import Script from 'next/script'
import { FaArrowRight } from 'react-icons/fa6'
import { getImgSrc } from '../images'
import { generateFAQSchema } from './faq-schema'
import { NURSING_SERVICES_FAQS } from '@/utils/faqs'

export const nursingServicesMetadata: Metadata = {
    title: 'In-Home Nursing Services in New Jersey | 360 Degree Care',
    description:
        'In-home nursing services in New Jersey providing skilled clinical care, assessments, and medical support to help patients remain safely at home.',
    keywords:
        'in-home nursing, skilled nursing, wound care, medication management, home nursing, New Jersey',
    openGraph: {
        type: 'website',
        url: 'https://www.360degreecare.net/services/nursing',
        title: 'In-Home Nursing Services in New Jersey | 360 Degree Care',
        description:
            'In-home nursing services in New Jersey providing skilled clinical care, assessments, and medical support to help patients remain safely at home.',
        images: [
            {
                url: 'https://www.360degreecare.net/assets/nursing-services-image.jpg'
            }
        ],
        locale: 'en_US',
        siteName: '360 Degree Care'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'In-Home Nursing Services in New Jersey | 360 Degree Care',
        description:
            'In-home nursing services in New Jersey providing skilled clinical care, assessments, and medical support to help patients remain safely at home.',
        images: [
            'https://www.360degreecare.net/assets/nursing-services-image.jpg'
        ]
    },
    robots: { index: true, follow: true },
    alternates: {
        canonical: 'https://www.360degreecare.net/services/nursing'
    },
    other: {
        'geo.region': 'US-NJ',
        'geo.placename': 'Ridgewood'
    }
}

const StaticNursingServicesData = {
    SeoHead: () => {
        const faqSchema = generateFAQSchema(NURSING_SERVICES_FAQS)
        const schema = {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'In-Home Nursing Services',
            serviceType: 'Nursing Services',
            provider: {
                '@type': 'HomeHealthCareService',
                name: '360 Degree Care',
                url: 'https://www.360degreecare.net/',
                logo: 'https://www.360degreecare.net/logo.png',
                description:
                    "For over 10 years, we've been providing professional in-home nursing services to families across New Jersey.",
                address: {
                    '@type': 'PostalAddress',
                    streetAddress: '27 Chestnut Street',
                    addressLocality: 'Ridgewood',
                    addressRegion: 'NJ',
                    postalCode: '07450',
                    addressCountry: 'US'
                },
                telephone: '(201) 299-4243',
                award: 'CHAP Certified Organization',
                hasCredential: 'Licensed by the State Attorney General'
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
                '360 Degree Care provides professional in-home nursing services including licensed nurses for wound care, assessments, injections, and medication management. All care is coordinated with physicians and available 24/7.',
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
            },
            availableChannel: {
                '@type': 'ServiceChannel',
                name: '24/7 Customer Service',
                availableLanguage: {
                    '@type': 'Language',
                    name: 'English'
                }
            }
        }
        const canonicalUrl = 'https://www.360degreecare.net/services/nursing'

        return (
            <>
                <Head>
                    <title>
                        In-Home Nursing Services in New Jersey | 360 Degree Care
                    </title>
                    <meta
                        name="title"
                        content="In-Home Nursing Services in New Jersey | 360 Degree Care"
                    />
                    <meta
                        name="description"
                        content="In-home nursing services in New Jersey providing skilled clinical care, assessments, and medical support to help patients remain safely at home."
                    />
                    <meta
                        name="keywords"
                        content="in-home nursing, skilled nursing, wound care, medication management, home nursing, New Jersey"
                    />

                    <meta property="og:type" content="website" />
                    <meta
                        property="og:url"
                        content="https://www.360degreecare.net/services/nursing"
                    />
                    <meta
                        property="og:title"
                        content="In-Home Nursing Services in New Jersey | 360 Degree Care"
                    />
                    <meta
                        property="og:description"
                        content="In-home nursing services in New Jersey providing skilled clinical care, assessments, and medical support to help patients remain safely at home."
                    />
                    <meta
                        property="og:image"
                        content="https://www.360degreecare.net/assets/nursing-services-image.jpg"
                    />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:site_name" content="360 Degree Care" />

                    <meta
                        property="twitter:card"
                        content="summary_large_image"
                    />
                    <meta
                        property="twitter:url"
                        content="https://www.360degreecare.net/services/nursing"
                    />
                    <meta
                        property="twitter:title"
                        content="In-Home Nursing Services in New Jersey | 360 Degree Care"
                    />
                    <meta
                        property="twitter:description"
                        content="In-home nursing services in New Jersey providing skilled clinical care, assessments, and medical support to help patients remain safely at home."
                    />
                    <meta
                        property="twitter:image"
                        content="https://www.360degreecare.net/assets/nursing-services-image.jpg"
                    />

                    <meta name="robots" content="index, follow" />
                    <meta name="geo.region" content="US-NJ" />
                    <meta name="geo.placename" content="Ridgewood" />
                    <link rel="canonical" href={canonicalUrl} />
                </Head>

                <Script
                    id="ld-json-nursing-services"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
                <Script
                    id="ld-json-nursing-services-faq"
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
                Contact Us Today <FaArrowRight size={24} className="ml-4" />
            </>
        ),
        description:
            'Skilled clinical care delivered at home with professionalism, compassion, and continuity.',
        introBody:
            'In-home nursing services from 360 Degree Care provide professional medical support for individuals who require skilled clinical care in the comfort of their own homes. Our licensed nurses deliver personalized care plans, ongoing assessments, and hands-on medical support to promote safety, stability, and quality of life.',
        header: 'In-Home Nursing Services in New Jersey',
        img: {
            src: getImgSrc('nursing-hero') ?? '',
            alt: 'in-home nursing services example'
        }
    },
    description: {
        header: 'What is In-Home Nursing?',
        description:
            'In-home nursing services from 360 Degree Care provide professional medical support for individuals who require skilled clinical care in the comfort of their own homes. Our licensed nurses deliver personalized care plans, ongoing assessments, and hands-on medical support to promote safety, stability, and quality of life.'
    },
    listItems: {
        header: "What's Included",
        items: [
            {
                title: 'Physical exams and vitals',
                description:
                    'Comprehensive health assessments and vital sign monitoring',
                Icon: 'FaStethoscope'
            },
            {
                title: 'Care plan coordination',
                description:
                    'Working with your physician to implement treatment plans',
                Icon: 'FaClipboardList'
            },
            {
                title: 'Medication administration',
                description:
                    'Professional administration of injections and complex medications',
                Icon: 'FaSyringe'
            },
            {
                title: 'Advanced wound care',
                description:
                    'Specialized treatment for complex wounds and dressings',
                Icon: 'FaBandage'
            },
            {
                title: 'Health education for families',
                description:
                    'Teaching family members about care procedures and health management',
                Icon: 'FaGraduationCap'
            }
        ]
    },
    benefits: {
        header: 'Benefits of In-Home Nursing',
        items: [
            {
                title: 'Highly Qualified Nurses',
                description:
                    'Licensed RNs and LPNs with specialized training and experience',
                Icon: 'FaUserDoctor'
            },
            {
                title: 'Collaborative Care',
                description:
                    'Close coordination with your physician and healthcare team',
                Icon: 'FaHandshake'
            },
            {
                title: 'Round-the-Clock Availability',
                description: '24/7 nursing support when you need it most',
                Icon: 'FaClock'
            },
            {
                title: 'Comprehensive Education',
                description:
                    'Teaching and support for family members to continue care',
                Icon: 'FaGraduationCap'
            }
        ]
    }
}

export default StaticNursingServicesData
