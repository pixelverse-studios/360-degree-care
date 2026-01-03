'use client'

import Head from 'next/head'
import Script from 'next/script'
import { FaArrowRight } from 'react-icons/fa6'
import { getImgSrc } from '../images'
import { generateFAQSchema } from './faq-schema'
import { ELDER_CARE_CONSULTING_FAQS } from '@/utils/faqs'

const StaticElderCareConsultingData = {
    SeoHead: () => {
        const faqSchema = generateFAQSchema(ELDER_CARE_CONSULTING_FAQS)
        const schema = {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Elder Care Consulting Services',
            serviceType: 'Elder Care Consulting',
            provider: {
                '@type': 'Organization',
                name: '360 Degree Care',
                url: 'https://www.360degreecare.net/',
                logo: 'https://www.360degreecare.net/logo.png',
                description:
                    "For over 10 years, we've been providing expert guidance and care solutions to families across New Jersey.",
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
                '360 Degree Care provides professional elder care consulting services including comprehensive assessments, personalized care planning, and expert guidance for families navigating senior care decisions.',
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
        const canonicalUrl =
            'https://www.360degreecare.net/services/elder-care-consulting'

        return (
            <>
                <Head>
                    <title>
                        Elder Care Consulting Services in New Jersey | 360 Degree Care
                    </title>
                    <meta
                        name="title"
                        content="Elder Care Consulting Services in New Jersey | 360 Degree Care"
                    />
                    <meta
                        name="description"
                        content="Professional elder care consulting in New Jersey, helping families navigate care options, plan next steps, and make informed decisions with confidence."
                    />
                    <meta
                        name="keywords"
                        content="elder care consulting, senior care planning, care coordination, family guidance, New Jersey"
                    />

                    <meta property="og:type" content="website" />
                    <meta
                        property="og:url"
                        content="https://www.360degreecare.net/services/elder-care-consulting"
                    />
                    <meta
                        property="og:title"
                        content="Elder Care Consulting Services in New Jersey | 360 Degree Care"
                    />
                    <meta
                        property="og:description"
                        content="Professional elder care consulting in New Jersey, helping families navigate care options, plan next steps, and make informed decisions with confidence."
                    />
                    <meta
                        property="og:image"
                        content="https://www.360degreecare.net/assets/elder-care-consulting-image.jpg"
                    />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:site_name" content="360 Degree Care" />

                    <meta
                        property="twitter:card"
                        content="summary_large_image"
                    />
                    <meta
                        property="twitter:url"
                        content="https://www.360degreecare.net/services/elder-care-consulting"
                    />
                    <meta
                        property="twitter:title"
                        content="Elder Care Consulting Services in New Jersey | 360 Degree Care"
                    />
                    <meta
                        property="twitter:description"
                        content="Professional elder care consulting in New Jersey, helping families navigate care options, plan next steps, and make informed decisions with confidence."
                    />
                    <meta
                        property="twitter:image"
                        content="https://www.360degreecare.net/assets/elder-care-consulting-image.jpg"
                    />

                    <meta name="robots" content="index, follow" />
                    <meta name="geo.region" content="US-NJ" />
                    <meta name="geo.placename" content="Ridgewood" />
                    <link rel="canonical" href={canonicalUrl} />
                </Head>

                <Script
                    id="ld-json-elder-care-consulting"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
                <Script
                    id="ld-json-elder-care-consulting-faq"
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
                Request a Free Consultation{' '}
                <FaArrowRight size={24} className="ml-4" />
            </>
        ),
        description: (
            <>
                Expert guidance to help families navigate elder care decisions
                with clarity and confidence.
            </>
        ),
        header: 'Elder Care Consulting in New Jersey',
        img: {
            src: getImgSrc('elder-care-hero') ?? '',
            alt: 'elder care consulting services example'
        }
    },
    description: {
        header: 'What is Elder Care Consulting?',
        description:
            "Elder care consulting from 360 Degree Care supports families as they navigate complex decisions for aging loved ones. Our consultants help assess care needs, explore options, coordinate services, and create a clear plan aligned with each family's goals."
    },
    listItems: {
        header: "What's Included",
        items: [
            {
                title: 'Comprehensive assessment',
                description:
                    "Thorough evaluation of your loved one's current needs and situation",
                Icon: 'FaClipboardCheck'
            },
            {
                title: 'Personalized care plan',
                description:
                    'Customized roadmap based on individual needs and preferences',
                Icon: 'FaUserDoctor'
            },
            {
                title: 'Exploration of in-home and facility options',
                description:
                    'Review of all available care settings and service options',
                Icon: 'FaHouse'
            },
            {
                title: 'Legal/financial professional referrals',
                description:
                    'Connections to trusted professionals for comprehensive support',
                Icon: 'FaUsers'
            }
        ]
    },
    benefits: {
        header: 'Benefits of Elder Care Consulting',
        items: [
            {
                title: 'Local Expertise',
                description:
                    'In-depth knowledge of care options and resources in your area',
                Icon: 'FaMapLocationDot'
            },
            {
                title: 'Care Matching',
                description:
                    'Professional assessment to find the perfect care solution for your loved one',
                Icon: 'FaHandshake'
            },
            {
                title: 'Compassionate Guidance',
                description:
                    'Supportive, understanding approach during difficult decisions',
                Icon: 'FaHeart'
            },
            {
                title: 'Supportive Planning',
                description:
                    'Clear roadmap and next steps to reduce overwhelm and uncertainty',
                Icon: 'FaRoute'
            }
        ]
    }
}

export default StaticElderCareConsultingData
