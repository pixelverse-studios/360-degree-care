'use client'

import Head from 'next/head'
import Script from 'next/script'
import React from 'react'

const SkilledNursingSeoHead = () => {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Skilled Nursing Services',
        serviceType: 'Nursing Care',
        provider: {
            '@type': 'HomeHealthCareService',
            name: '360 Degree Care',
            url: 'https://www.360degreecare.net/',
            logo: 'https://www.360degreecare.net/logo.png',
            description:
                "For over 10 years, we've been providing compassionate and reliable care solutions to families across New Jersey.",
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
        areaServed: {
            '@type': 'State',
            name: 'New Jersey'
        },
        description:
            '360 Degree Care provides skilled nursing services delivered by licensed professionals. Our nursing team offers specialized care including medication administration, wound care, vital signs monitoring, and chronic disease management, all tailored to support recovery and maintain health.',
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
                {/* Primary Meta Tags */}
                <title>
                    Skilled Nursing Care Services in NJ | 360 Degree Care
                </title>
                <meta
                    name="title"
                    content="Skilled Nursing Care Services in NJ | 360 Degree Care"
                />
                <meta
                    name="description"
                    content="Secure nursing care in New Jersey for wound support, chronic disease management, and medication oversight delivered at home by 360 Degree Care's licensed team."
                />
                <meta
                    name="keywords"
                    content="skilled nursing, licensed nurses, home healthcare, wound care, medication management, chronic disease management, New Jersey, Ridgewood NJ"
                />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    content="https://www.360degreecare.net/services/nursing"
                />
                <meta
                    property="og:title"
                    content="Skilled Nursing Care Services in NJ | 360 Degree Care"
                />
                <meta
                    property="og:description"
                    content="Secure nursing care in New Jersey for wound support, chronic disease management, and medication oversight delivered at home by 360 Degree Care's licensed team."
                />
                <meta
                    property="og:image"
                    content="https://www.360degreecare.net/assets/nursing-services-image.jpg"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:site_name" content="360 Degree Care" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta
                    property="twitter:url"
                    content="https://www.360degreecare.net/services/nursing"
                />
                <meta
                    property="twitter:title"
                    content="Skilled Nursing Care Services in NJ | 360 Degree Care"
                />
                <meta
                    property="twitter:description"
                    content="Secure nursing care in New Jersey for wound support, chronic disease management, and medication oversight delivered at home by 360 Degree Care's licensed team."
                />
                <meta
                    property="twitter:image"
                    content="https://www.360degreecare.net/assets/nursing-services-image.jpg"
                />

                {/* Canonical & Additional Meta Tags */}
                <meta name="robots" content="index, follow" />
                <meta name="geo.region" content="US-NJ" />
                <meta name="geo.placename" content="Ridgewood" />
                <link rel="canonical" href={canonicalUrl} />
            </Head>

            <Script
                id="ld-json-skilled-nursing"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
        </>
    )
}

export default SkilledNursingSeoHead
