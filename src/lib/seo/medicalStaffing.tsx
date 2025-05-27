'use client'

import Head from 'next/head'
import Script from 'next/script'
import React from 'react'

const MedicalStaffingSeoHead = () => {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Medical Staffing Services',
        serviceType: 'Healthcare Staffing',
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
            '360 Degree Care specializes in medical staffing, connecting healthcare facilities with experienced and qualified medical professionals. Our rigorous screening process ensures only the highest quality healthcare professionals join our team.',
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
                    Medical Staffing Services in New Jersey | 360 Degree Care
                </title>
                <meta
                    name="title"
                    content="Medical Staffing Services in New Jersey | 360 Degree Care"
                />
                <meta
                    name="description"
                    content="Connect with qualified healthcare professionals through our CHAP-certified medical staffing services. 24/7 access to experienced nurses, aides, and specialists for healthcare facilities across New Jersey."
                />
                <meta
                    name="keywords"
                    content="medical staffing, healthcare staffing, nursing staff, home health aides, New Jersey medical professionals, Ridgewood NJ"
                />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    content="https://www.360degreecare.net/services/staffing"
                />
                <meta
                    property="og:title"
                    content="Medical Staffing Services in New Jersey | 360 Degree Care"
                />
                <meta
                    property="og:description"
                    content="Connect with qualified healthcare professionals through our CHAP-certified medical staffing services. 24/7 access to experienced nurses, aides, and specialists for healthcare facilities across New Jersey."
                />
                <meta
                    property="og:image"
                    content="https://www.360degreecare.net/assets/staffing-image.jpg"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:site_name" content="360 Degree Care" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta
                    property="twitter:url"
                    content="https://www.360degreecare.net/services/staffing"
                />
                <meta
                    property="twitter:title"
                    content="Medical Staffing Services in New Jersey | 360 Degree Care"
                />
                <meta
                    property="twitter:description"
                    content="Connect with qualified healthcare professionals through our CHAP-certified medical staffing services. 24/7 access to experienced nurses, aides, and specialists for healthcare facilities across New Jersey."
                />
                <meta
                    property="twitter:image"
                    content="https://www.360degreecare.net/assets/staffing-image.jpg"
                />

                {/* Canonical & Additional Meta Tags */}
                <link
                    rel="canonical"
                    href="https://www.360degreecare.net/services/staffing"
                />
                <meta name="robots" content="index, follow" />
                <meta name="geo.region" content="US-NJ" />
                <meta name="geo.placename" content="Ridgewood" />
            </Head>

            <Script
                id="ld-json-medical-staffing"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
        </>
    )
}

export default MedicalStaffingSeoHead
