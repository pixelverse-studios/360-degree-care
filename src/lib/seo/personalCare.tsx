'use client'

import Head from 'next/head'
import Script from 'next/script'
import { FaArrowRight } from 'react-icons/fa6'
import { getImgSrc } from '../images'
import { generateFAQSchema } from './faq-schema'
import { PERSONAL_CARE_FAQS } from '@/utils/faqs'

import { CompanyName } from '@/components/Logo'

const StaticPersonalCareData = {
    SeoHead: () => {
        const faqSchema = generateFAQSchema(PERSONAL_CARE_FAQS)
        const schema = {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Personal Care Services',
            serviceType: 'Personal Care',
            provider: {
                '@type': 'HomeHealthCareService',
                name: '360 Degree Care',
                url: 'https://www.360degreecare.net/',
                logo: 'https://www.360degreecare.net/logo.png',
                description:
                    "For over 10 years, we've been providing compassionate and reliable care solutions to families across New Jersey.",
                address: {
                    '@type': 'PostalAddress',
                    streetAddress: '27 Chestnut Street, Floor 1',
                    addressLocality: 'Ridgewood',
                    addressRegion: 'NJ',
                    postalCode: '07450',
                    addressCountry: 'US'
                },
                telephone: '(800) 338-7786',
                award: 'CHAP Certified Organization',
                hasCredential: 'Licensed by the State Attorney General'
            },
            areaServed: {
                '@type': 'State',
                name: 'New Jersey'
            },
            description:
                '360 Degree Care provides professional personal care services including assistance with daily activities, hygiene, and mobility support. Our certified caregivers help seniors maintain dignity and independence in their own homes.',
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
            'https://www.360degreecare.net/services/personal-care'

        return (
            <>
                <Head>
                    {/* Primary Meta Tags */}
                    <title>
                        Compassionate Personal Care in NJ | 360 Degree Care
                    </title>
                    <meta
                        name="title"
                        content="Compassionate Personal Care in NJ | 360 Degree Care"
                    />
                    <meta
                        name="description"
                        content="Arrange personal care in New Jersey with help for bathing, mobility, grooming, and meals delivered by 360 Degree Care caregivers to keep routines comfortable."
                    />
                    <meta
                        name="keywords"
                        content="personal care services, senior care, home health aide, hygiene assistance, mobility support, New Jersey, Ridgewood NJ"
                    />

                    {/* Open Graph / Facebook */}
                    <meta property="og:type" content="website" />
                    <meta
                        property="og:url"
                        content="https://www.360degreecare.net/services/personal-care"
                    />
                    <meta
                        property="og:title"
                        content="Compassionate Personal Care in NJ | 360 Degree Care"
                    />
                    <meta
                        property="og:description"
                        content="Arrange personal care in New Jersey with help for bathing, mobility, grooming, and meals delivered by 360 Degree Care caregivers to keep routines comfortable."
                    />
                    <meta
                        property="og:image"
                        content="https://www.360degreecare.net/assets/personal-care-image.jpg"
                    />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:site_name" content="360 Degree Care" />

                    {/* Twitter */}
                    <meta
                        property="twitter:card"
                        content="summary_large_image"
                    />
                    <meta
                        property="twitter:url"
                        content="https://www.360degreecare.net/services/personal-care"
                    />
                    <meta
                        property="twitter:title"
                        content="Compassionate Personal Care in NJ | 360 Degree Care"
                    />
                    <meta
                        property="twitter:description"
                        content="Arrange personal care in New Jersey with help for bathing, mobility, grooming, and meals delivered by 360 Degree Care caregivers to keep routines comfortable."
                    />
                    <meta
                        property="twitter:image"
                        content="https://www.360degreecare.net/assets/personal-care-image.jpg"
                    />

                    {/* Canonical URL & Extras */}
                    <meta name="robots" content="index, follow" />
                    <meta name="geo.region" content="US-NJ" />
                    <meta name="geo.placename" content="Ridgewood" />
                    <link rel="canonical" href={canonicalUrl} />
                </Head>

                <Script
                    id="ld-json-personal-care"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
                <Script
                    id="ld-json-personal-care-faq"
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
                Request a free consultation
                <FaArrowRight size={24} className="ml-4" />
            </>
        ),
        description: (
            <>
                Personal care services at <CompanyName /> are designed to help
                seniors and individuals with daily living tasks while preserving
                dignity, independence, and comfort.
            </>
        ),
        header: 'Personal Care Services in New Jersey',
        img: {
            src: getImgSrc('personal-care-hero') ?? '',
            alt: 'personal care services example'
        }
    },
    description: {
        header: 'What is Personal Care?',
        description:
            'Personal care includes non-medical assistance with essential daily routines — such as bathing, dressing, and grooming — so individuals can safely age in place and enjoy a higher quality of life. It’s ideal for seniors, people with disabilities, or anyone recovering from illness or surgery.'
    },
    listItems: {
        header: "What's Included",
        items: [
            {
                title: 'Bathing, dressing, and grooming',
                description:
                    'Assistance with personal hygiene and daily dressing routines',
                Icon: 'FaBath'
            },
            {
                title: 'Light housekeeping and laundry',
                description: 'Maintaining a clean, safe living environment',
                Icon: 'FaBroom'
            },
            {
                title: 'Transportation to appointments',
                description:
                    'Safe rides to medical visits and community activities',
                Icon: 'FaCar'
            },
            {
                title: 'Assistance with mobility and transfers',
                description: 'Help with safe movement around the home',
                Icon: 'FaWheelchair'
            },
            {
                title: 'Meal preparation and feeding assistance',
                description:
                    'Nutritious meal planning and help with eating when needed',
                Icon: 'FaUtensils'
            },
            {
                title: 'Medication reminders',
                description: 'Timely prompts for taking prescribed medications',
                Icon: 'FaCapsules'
            },
            {
                title: 'Companionship and conversation',
                description:
                    'Meaningful social interaction and emotional support',
                Icon: 'FaHeart'
            },
            {
                title: 'Incontinence care',
                description: 'Dignified assistance with toileting needs',
                Icon: 'FaToilet'
            }
        ]
    },
    benefits: {
        header: 'Benefits of Personal Care',
        items: [
            {
                title: 'Promotes Independence',
                description:
                    'Help seniors remain in their homes longer with dignity and comfort',
                Icon: 'FaHouseUser'
            },
            {
                title: 'Reduces Caregiver Stress',
                description:
                    'Offers relief for family members and prevents caregiver burnout',
                Icon: 'FaHeart'
            },
            {
                title: 'Improves Emotional Well-being',
                description:
                    'Consistent companionship and support reduces feelings of isolation',
                Icon: 'FaFaceSmile'
            },
            {
                title: 'Customizable Plans',
                description:
                    "Every client's needs and preferences are unique and fully accommodated",
                Icon: 'FaNotesMedical'
            }
        ]
    }
}

export default StaticPersonalCareData
