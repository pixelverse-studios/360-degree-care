'use client'

import Head from 'next/head'
import Script from 'next/script'
import { FaArrowRight } from 'react-icons/fa6'
import { getImgSrc } from '../images'
import { generateFAQSchema } from './faq-schema'
import { HOME_HEALTH_AIDES_FAQS } from '@/utils/faqs'

const StaticHomeHealthAidesData = {
    SeoHead: () => {
        const faqSchema = generateFAQSchema(HOME_HEALTH_AIDES_FAQS)
        const schema = {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Home Health Aide Services',
            serviceType: 'Home Health Aide',
            provider: {
                '@type': 'HomeHealthCareService',
                name: '360 Degree Care',
                url: 'https://www.360degreecare.net/',
                logo: 'https://www.360degreecare.net/logo.png',
                description:
                    "For over 10 years, we've been providing Concierge-Level™ home health aide services to families across New Jersey.",
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
                '360 Degree Care provides Concierge-Level™ home health aide services including certified aides for daily living support, hygiene assistance, and companionship. All services are supervised by nurses.',
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
            'https://www.360degreecare.net/services/home-health-aides'

        return (
            <>
                <Head>
                    <title>
                        Home Health Aide Services in New Jersey | 360 Degree
                        Care
                    </title>
                    <meta
                        name="title"
                        content="Home Health Aide Services in New Jersey | 360 Degree Care"
                    />
                    <meta
                        name="description"
                        content="Certified home health aides in New Jersey providing hands-on support with daily living, personal care, and in-home assistance for seniors."
                    />
                    <meta
                        name="keywords"
                        content="home health aide, certified home health aide, daily living support, hygiene assistance, companionship, New Jersey"
                    />

                    <meta property="og:type" content="website" />
                    <meta
                        property="og:url"
                        content="https://www.360degreecare.net/services/home-health-aides"
                    />
                    <meta
                        property="og:title"
                        content="Home Health Aide Services in New Jersey | 360 Degree Care"
                    />
                    <meta
                        property="og:description"
                        content="Certified home health aides in New Jersey providing hands-on support with daily living, personal care, and in-home assistance for seniors."
                    />
                    <meta
                        property="og:image"
                        content="https://www.360degreecare.net/assets/home-health-aides-image.jpg"
                    />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:site_name" content="360 Degree Care" />

                    <meta
                        property="twitter:card"
                        content="summary_large_image"
                    />
                    <meta
                        property="twitter:url"
                        content="https://www.360degreecare.net/services/home-health-aides"
                    />
                    <meta
                        property="twitter:title"
                        content="Home Health Aide Services in New Jersey | 360 Degree Care"
                    />
                    <meta
                        property="twitter:description"
                        content="Certified home health aides in New Jersey providing hands-on support with daily living, personal care, and in-home assistance for seniors."
                    />
                    <meta
                        property="twitter:image"
                        content="https://www.360degreecare.net/assets/home-health-aides-image.jpg"
                    />

                    <meta name="robots" content="index, follow" />
                    <meta name="geo.region" content="US-NJ" />
                    <meta name="geo.placename" content="Ridgewood" />
                    <link rel="canonical" href={canonicalUrl} />
                </Head>

                <Script
                    id="ld-json-home-health-aides"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
                <Script
                    id="ld-json-home-health-aides-faq"
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
                Get In Touch <FaArrowRight size={24} className="ml-4" />
            </>
        ),
        description:
            'Certified aides providing reliable, compassionate in-home support for daily living.',
        introBody:
            'Home health aide services from 360 Degree Care support seniors and individuals who need assistance with daily activities while remaining safely at home. Our certified aides help with personal care, mobility support, routine tasks, and companionship, always with respect, professionalism, and attention to individual needs.',
        header: 'Home Health Aide Services in New Jersey',
        img: {
            src: getImgSrc('home-aides-hero') ?? '',
            alt: 'home health aide services example'
        }
    },
    description: {
        header: 'What is Home Health Aide Support?',
        description:
            'Home health aide services from 360 Degree Care support seniors and individuals who need assistance with daily activities while remaining safely at home. Our certified aides help with personal care, mobility support, routine tasks, and companionship, always with respect, professionalism, and attention to individual needs.'
    },
    listItems: {
        header: "What's Included",
        items: [
            {
                title: 'Fall prevention',
                description:
                    'Safety assessments and mobility assistance to prevent accidents',
                Icon: 'FaShield'
            },
            {
                title: 'Dressing assistance',
                description:
                    'Help with clothing selection and dressing routines',
                Icon: 'FaShirt'
            },
            {
                title: 'Blood pressure monitoring',
                description:
                    'Regular vital sign checks and health status monitoring',
                Icon: 'FaStethoscope'
            },
            {
                title: 'Light housekeeping',
                description: 'Maintaining a clean, safe living environment',
                Icon: 'FaBroom'
            },
            {
                title: 'Grooming and hygiene',
                description:
                    'Personal care assistance with dignity and respect',
                Icon: 'FaBath'
            },
            {
                title: 'Meal planning and cooking',
                description: 'Nutritious meal preparation and dietary support',
                Icon: 'FaUtensils'
            },
            {
                title: 'Medication reminders',
                description: 'Timely prompts for taking prescribed medications',
                Icon: 'FaCapsules'
            },
            {
                title: 'Companionship',
                description:
                    'Meaningful social interaction and emotional support',
                Icon: 'FaHeart'
            },
            {
                title: 'Appointment scheduling',
                description: 'Coordination of medical visits and activities',
                Icon: 'FaCalendarDays'
            },
            {
                title: 'Emotional support',
                description: 'Compassionate presence during daily challenges',
                Icon: 'FaHandHoldingHeart'
            }
        ]
    },
    benefits: {
        header: 'Benefits of Home Health Aides',
        items: [
            {
                title: 'Experienced & Certified Staff',
                description:
                    'All aides are state-certified with extensive training and experience',
                Icon: 'FaUserCheck'
            },
            {
                title: 'Nurse-Supervised Care',
                description:
                    'Professional oversight ensures quality and continuity of care',
                Icon: 'FaUserDoctor'
            },
            {
                title: 'Personalized Plans',
                description:
                    'Customized care plans tailored to individual needs and preferences',
                Icon: 'FaHeart'
            },
            {
                title: 'Flexible Scheduling',
                description:
                    'From 2-hour shifts to 24/7 live-in support based on your needs',
                Icon: 'FaClock'
            }
        ]
    }
}

export default StaticHomeHealthAidesData
