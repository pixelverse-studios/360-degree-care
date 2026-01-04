'use client'

import Head from 'next/head'
import Script from 'next/script'
import { FaArrowRight } from 'react-icons/fa6'
import { getImgSrc } from '../images'
import { generateFAQSchema } from './faq-schema'
import { COMPANION_CARE_FAQS } from '@/utils/faqs'

const StaticCompanionCareData = {
    SeoHead: () => {
        const faqSchema = generateFAQSchema(COMPANION_CARE_FAQS)
        const schema = {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Companion Care Services',
            serviceType: 'Companion Care',
            provider: {
                '@type': 'HomeHealthCareService',
                name: '360 Degree Care',
                url: 'https://www.360degreecare.net/',
                logo: 'https://www.360degreecare.net/logo.png',
                description:
                    "For over 10 years, we've been providing compassionate companion care services to families across New Jersey.",
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
                '360 Degree Care provides professional companion care services including compassionate social support, emotional connection, and daily life assistance. Our companions provide meaningful interaction and trusted friendship.',
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
        const canonicalUrl =
            'https://www.360degreecare.net/services/companion-care'

        return (
            <>
                <Head>
                    <title>
                        Companion Care Services in New Jersey | 360 Degree Care
                    </title>
                    <meta
                        name="title"
                        content="Companion Care Services in New Jersey | 360 Degree Care"
                    />
                    <meta
                        name="description"
                        content="Companion care services in New Jersey providing social support, engagement, and companionship to help seniors stay connected and supported at home."
                    />
                    <meta
                        name="keywords"
                        content="companion care, companionship services, social support, emotional connection, senior companionship, New Jersey"
                    />

                    <meta property="og:type" content="website" />
                    <meta
                        property="og:url"
                        content="https://www.360degreecare.net/services/companion-care"
                    />
                    <meta
                        property="og:title"
                        content="Companion Care Services in New Jersey | 360 Degree Care"
                    />
                    <meta
                        property="og:description"
                        content="Companion care services in New Jersey providing social support, engagement, and companionship to help seniors stay connected and supported at home."
                    />
                    <meta
                        property="og:image"
                        content="https://www.360degreecare.net/assets/companion-care-image.jpg"
                    />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:site_name" content="360 Degree Care" />

                    <meta
                        property="twitter:card"
                        content="summary_large_image"
                    />
                    <meta
                        property="twitter:url"
                        content="https://www.360degreecare.net/services/companion-care"
                    />
                    <meta
                        property="twitter:title"
                        content="Companion Care Services in New Jersey | 360 Degree Care"
                    />
                    <meta
                        property="twitter:description"
                        content="Companion care services in New Jersey providing social support, engagement, and companionship to help seniors stay connected and supported at home."
                    />
                    <meta
                        property="twitter:image"
                        content="https://www.360degreecare.net/assets/companion-care-image.jpg"
                    />

                    <meta name="robots" content="index, follow" />
                    <meta name="geo.region" content="US-NJ" />
                    <meta name="geo.placename" content="Ridgewood" />
                    <link rel="canonical" href={canonicalUrl} />
                </Head>

                <Script
                    id="ld-json-companion-care"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
                <Script
                    id="ld-json-companion-care-faq"
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
                Contact Us <FaArrowRight size={24} className="ml-4" />
            </>
        ),
        description: (
            <>
                Social connection and everyday companionship to support
                emotional well-being and quality of life.
            </>
        ),
        header: 'Companion Care Services in New Jersey',
        img: {
            src: getImgSrc('companion-care-hero') ?? '',
            alt: 'companion care services example'
        }
    },
    description: {
        header: 'What is Companion Care?',
        description:
            'Companion care services from 360 Degree Care provide meaningful social support for seniors who benefit from regular interaction and engagement at home. Our caregivers offer companionship, conversation, and assistance with daily routines to help reduce isolation and promote emotional well-being.'
    },
    listItems: {
        header: "What's Included",
        items: [
            {
                title: 'Conversation and hobbies',
                description:
                    'Engaging discussions, shared interests, and meaningful activities',
                Icon: 'FaComments'
            },
            {
                title: 'Medication reminders',
                description: 'Gentle prompts for taking prescribed medications',
                Icon: 'FaCapsules'
            },
            {
                title: 'Light tidying',
                description:
                    'Assistance with maintaining a comfortable living space',
                Icon: 'FaBroom'
            },
            {
                title: 'Accompaniment to outings',
                description:
                    'Safe companionship for walks, shopping, and social activities',
                Icon: 'FaPersonWalking'
            },
            {
                title: 'Emotional presence and monitoring',
                description:
                    'Compassionate support and awareness of emotional well-being',
                Icon: 'FaHandHoldingHeart'
            }
        ]
    },
    benefits: {
        header: 'Benefits of Companion Care',
        items: [
            {
                title: 'Reduces Loneliness',
                description:
                    'Regular social interaction helps combat isolation and depression',
                Icon: 'FaFaceSmile'
            },
            {
                title: 'Supports Mental Health',
                description:
                    'Meaningful conversations and activities promote cognitive wellness',
                Icon: 'FaBrain'
            },
            {
                title: 'Builds Routine & Safety',
                description:
                    'Consistent presence creates structure and peace of mind for families',
                Icon: 'FaShieldHeart'
            },
            {
                title: 'Flexible Companionship',
                description:
                    'Services adapted to individual interests, needs, and schedules',
                Icon: 'FaRoute'
            }
        ]
    }
}

export default StaticCompanionCareData
