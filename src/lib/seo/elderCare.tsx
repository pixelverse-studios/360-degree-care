'use client'

import Head from 'next/head'
import Script from 'next/script'
import React from 'react'

const ElderCareSeoHead = () => {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Elder Care Consulting Services',
        serviceType: 'Elder Care',
        provider: {
            '@type': 'HomeHealthCareService',
            name: '360 Degree Care',
            url: 'https://www.360degreecare.net/',
            logo: 'https://www.360degreecare.net/assets/logo.png',
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
            '360 Degree Care provides specialized elder care consulting services to help families navigate senior care options. Our certified consultants create personalized care plans that address unique needs while preserving independence and dignity.',
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

    return (
        <>
            <Head>
                {/* Primary Meta Tags */}
                <title>
                    Elder Care Consulting Services in New Jersey | 360 Degree
                    Care
                </title>
                <meta
                    name="title"
                    content="Elder Care Consulting Services in New Jersey | 360 Degree Care"
                />
                <meta
                    name="description"
                    content="Expert elder care consulting from CHAP-certified specialists. Personalized care plans, family guidance, and resource coordination to help seniors maintain independence with 24/7 support."
                />
                <meta
                    name="keywords"
                    content="elder care consulting, senior care planning, geriatric care management, New Jersey elder care, Ridgewood NJ, aging in place"
                />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    content="https://www.360degreecare.net/services/elder-care"
                />
                <meta
                    property="og:title"
                    content="Elder Care Consulting Services in New Jersey | 360 Degree Care"
                />
                <meta
                    property="og:description"
                    content="Expert elder care consulting from CHAP-certified specialists. Personalized care plans, family guidance, and resource coordination to help seniors maintain independence with 24/7 support."
                />
                <meta
                    property="og:image"
                    content="https://www.360degreecare.net/assets/elder-care-image.jpg"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:site_name" content="360 Degree Care" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta
                    property="twitter:url"
                    content="https://www.360degreecare.net/services/elder-care"
                />
                <meta
                    property="twitter:title"
                    content="Elder Care Consulting Services in New Jersey | 360 Degree Care"
                />
                <meta
                    property="twitter:description"
                    content="Expert elder care consulting from CHAP-certified specialists. Personalized care plans, family guidance, and resource coordination to help seniors maintain independence with 24/7 support."
                />
                <meta
                    property="twitter:image"
                    content="https://www.360degreecare.net/assets/elder-care-image.jpg"
                />

                {/* Canonical & Additional Meta Tags */}
                <link
                    rel="canonical"
                    href="https://www.360degreecare.net/services/elder-care"
                />
                <meta name="robots" content="index, follow" />
                <meta name="geo.region" content="US-NJ" />
                <meta name="geo.placename" content="Ridgewood" />
            </Head>

            <Script
                id="ld-json-elder-care"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
        </>
    )
}

export default ElderCareSeoHead
