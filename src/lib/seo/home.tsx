'use client'

import Head from 'next/head'
import Script from 'next/script'
import React from 'react'

const HomeSeoHead = () => {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'HomeHealthCareService',
        name: '360 Degree Care',
        url: 'https://www.360degreecare.net/',
        logo: 'https://www.360degreecare.net/assets/logo.png',
        description:
            'Providing Concierge Level™ home care with compassion that allows seniors to maintain their independence and dignity at home.',
        slogan: 'The Finest Nurses and Home Aides in New Jersey',
        address: {
            '@type': 'PostalAddress',
            streetAddress: '27 Chestnut Street',
            addressLocality: 'Ridgewood',
            addressRegion: 'NJ',
            postalCode: '07450',
            addressCountry: 'US'
        },
        telephone: '(201) 299-4243',
        sameAs: [
            'https://www.facebook.com/profile.php?id=61574893462190',
            'https://www.instagram.com/360degreecarenj/'
        ],
        openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday'
            ],
            opens: '00:00',
            closes: '23:59'
        },
        areaServed: {
            '@type': 'State',
            name: 'New Jersey'
        },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Home Health Care Services',
            itemListElement: [
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Personal Care',
                        url: 'https://www.360degreecare.net/services/personal-care'
                    }
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Elder Care Consulting',
                        url: 'https://www.360degreecare.net/services/elder-care'
                    }
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Staffing',
                        url: 'https://www.360degreecare.net/services/staffing'
                    }
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Home Health Aides',
                        url: 'https://www.360degreecare.net/services/home-health-aides'
                    }
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Nursing Services',
                        url: 'https://www.360degreecare.net/services/nursing'
                    }
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Companion Care',
                        url: 'https://www.360degreecare.net/services/companion-care'
                    }
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Live-In Care',
                        url: 'https://www.360degreecare.net/services/live-in-care'
                    }
                }
            ]
        },
        review: [
            {
                '@type': 'Review',
                author: { '@type': 'Person', name: 'Lubna Salehe' },
                reviewRating: {
                    '@type': 'Rating',
                    ratingValue: '5',
                    bestRating: '5'
                },
                reviewBody:
                    "I am a care giver ..i work with this company. Excellent treatment and respect for the person's ability to work and they pay on time and keep in touch to make sure everything is going well. If u need a home care to ur parents or anyone from ur family no place better than a 360 Degree Care"
            },
            {
                '@type': 'Review',
                author: { '@type': 'Person', name: 'Debbie Viar' },
                reviewRating: {
                    '@type': 'Rating',
                    ratingValue: '5',
                    bestRating: '5'
                },
                reviewBody:
                    "360 Degree Care staff worked hard to arrange for the exact care my father needed. As my father's dementia evolved, his caregivers adapted accordingly. They were always patient, kind and attentive. The peace of mind they provided to our family cannot be measured."
            },
            {
                '@type': 'Review',
                author: { '@type': 'Person', name: 'Diane Lynch' },
                reviewRating: {
                    '@type': 'Rating',
                    ratingValue: '5',
                    bestRating: '5'
                },
                reviewBody:
                    'I was very pleased with the care my husband recently received from 360 Degree Care. I called in the afternoon of a weekend day requesting someone to help care for my husband overnight while he was hospitalized. They were able to find a very kind and caring woman who was a companion to him until I arrived in the morning. I am very grateful for that.'
            }
        ]
    }

    return (
        <>
            <Head>
                {/* Primary Meta Tags */}
                <title>
                    Concierge Level Home Health Care in New Jersey | 360 Degree
                    Care
                </title>
                <meta
                    name="title"
                    content="Concierge Level Home Health Care in New Jersey | 360 Degree Care"
                />
                <meta
                    name="description"
                    content="360 Degree Care provides 24/7 certified caregivers and personalized home health services in New Jersey. Helping seniors maintain independence with dignity in their own homes."
                />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    content="https://www.360degreecare.net/"
                />
                <meta
                    property="og:title"
                    content="Concierge Level Home Health Care in New Jersey | 360 Degree Care"
                />
                <meta
                    property="og:description"
                    content="Providing compassionate in-home care services with certified caregivers available 24/7. Personalized care plans for seniors in New Jersey."
                />
                <meta
                    property="og:image"
                    content="https://www.360degreecare.net/assets/happy%20couple%201.jpg"
                />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta
                    property="twitter:url"
                    content="https://www.360degreecare.net/"
                />
                <meta
                    property="twitter:title"
                    content="Concierge Level Home Health Care in New Jersey | 360 Degree Care"
                />
                <meta
                    property="twitter:description"
                    content="Providing compassionate in-home care services with certified caregivers available 24/7. Personalized care plans for seniors in New Jersey."
                />
                <meta
                    property="twitter:image"
                    content="https://www.360degreecare.net/assets/happy%20couple%201.jpg"
                />

                {/* Canonical URL */}
                <link rel="canonical" href="https://www.360degreecare.net/" />
            </Head>

            <Script
                id="ld-json-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
        </>
    )
}

export default HomeSeoHead
