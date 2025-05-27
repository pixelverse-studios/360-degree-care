'use client'

import Head from 'next/head'
import Script from 'next/script'
import React from 'react'

const HomeHealthAidesSeoHead = () => {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Home Health Aide Services',
        serviceType: 'Home Health Aide',
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
            '360 Degree Care provides certified home health aides who assist with daily activities, medication reminders, and personal care. Our highly trained aides support recovery and help maintain independence while providing 24/7 compassionate care in the comfort of your home.',
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
                    Certified Home Health Aide Services in New Jersey | 360
                    Degree Care
                </title>
                <meta
                    name="title"
                    content="Certified Home Health Aide Services in New Jersey | 360 Degree Care"
                />
                <meta
                    name="description"
                    content="Professional home health aides providing 24/7 assistance with daily activities, medication reminders, and personal care. CHAP-certified caregivers helping clients maintain independence at home."
                />
                <meta
                    name="keywords"
                    content="home health aides, certified HHA, personal care assistance, medication management, senior care, New Jersey, Ridgewood NJ"
                />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    content="https://www.360degreecare.net/services/home-health-aides"
                />
                <meta
                    property="og:title"
                    content="Certified Home Health Aide Services in New Jersey | 360 Degree Care"
                />
                <meta
                    property="og:description"
                    content="Professional home health aides providing 24/7 assistance with daily activities, medication reminders, and personal care. CHAP-certified caregivers helping clients maintain independence at home."
                />
                <meta
                    property="og:image"
                    content="https://www.360degreecare.net/assets/home-health-aides-image.jpg"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:site_name" content="360 Degree Care" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta
                    property="twitter:url"
                    content="https://www.360degreecare.net/services/home-health-aides"
                />
                <meta
                    property="twitter:title"
                    content="Certified Home Health Aide Services in New Jersey | 360 Degree Care"
                />
                <meta
                    property="twitter:description"
                    content="Professional home health aides providing 24/7 assistance with daily activities, medication reminders, and personal care. CHAP-certified caregivers helping clients maintain independence at home."
                />
                <meta
                    property="twitter:image"
                    content="https://www.360degreecare.net/assets/home-health-aides-image.jpg"
                />

                {/* Canonical & Additional Meta Tags */}
                <link
                    rel="canonical"
                    href="https://www.360degreecare.net/services/home-health-aides"
                />
                <meta name="robots" content="index, follow" />
                <meta name="geo.region" content="US-NJ" />
                <meta name="geo.placename" content="Ridgewood" />
            </Head>

            <Script
                id="ld-json-home-health-aides"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
        </>
    )
}

export default HomeHealthAidesSeoHead
