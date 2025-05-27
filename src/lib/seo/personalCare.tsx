'use client'

import Head from 'next/head'
import Script from 'next/script'
import React from 'react'

const PersonalCareSeoHead = () => {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Personal Care Services',
        serviceType: 'Personal Care',
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

    return (
        <>
            <Head>
                {/* Primary Meta Tags */}
                <title>
                    Professional Personal Care Services in New Jersey | 360
                    Degree Care
                </title>
                <meta
                    name="title"
                    content="Professional Personal Care Services in New Jersey | 360 Degree Care"
                />
                <meta
                    name="description"
                    content="Compassionate personal care services from CHAP-certified caregivers. 24/7 assistance with hygiene, mobility, and daily living activities to help seniors maintain dignity and independence at home."
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
                    content="Professional Personal Care Services in New Jersey | 360 Degree Care"
                />
                <meta
                    property="og:description"
                    content="Compassionate personal care services from CHAP-certified caregivers. 24/7 assistance with hygiene, mobility, and daily living activities to help seniors maintain dignity and independence at home."
                />
                <meta
                    property="og:image"
                    content="https://www.360degreecare.net/assets/personal-care-image.jpg"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:site_name" content="360 Degree Care" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta
                    property="twitter:url"
                    content="https://www.360degreecare.net/services/personal-care"
                />
                <meta
                    property="twitter:title"
                    content="Professional Personal Care Services in New Jersey | 360 Degree Care"
                />
                <meta
                    property="twitter:description"
                    content="Compassionate personal care services from CHAP-certified caregivers. 24/7 assistance with hygiene, mobility, and daily living activities to help seniors maintain dignity and independence at home."
                />
                <meta
                    property="twitter:image"
                    content="https://www.360degreecare.net/assets/personal-care-image.jpg"
                />

                {/* Canonical URL & Extras */}
                <link
                    rel="canonical"
                    href="https://www.360degreecare.net/services/personal-care"
                />
                <meta name="robots" content="index, follow" />
                <meta name="geo.region" content="US-NJ" />
                <meta name="geo.placename" content="Ridgewood" />
            </Head>

            <Script
                id="ld-json-personal-care"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
        </>
    )
}

export default PersonalCareSeoHead
