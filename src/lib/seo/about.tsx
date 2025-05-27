'use client'

import Head from 'next/head'
import Script from 'next/script'
import React from 'react'

const AboutSeoHead = () => {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        mainEntity: {
            '@type': 'Organization',
            name: '360 Degree Care',
            url: 'https://www.360degreecare.net/',
            logo: 'https://www.360degreecare.net/assets/logo.png',
            description:
                "For over 10 years, we've been proudly based in Ridgewood, NJ, offering compassionate and reliable care solutions to families across New Jersey. As a certified CHAP organization licensed by the State Attorney General, we provide 24/7 home health care services with highly trained caregivers.",
            foundingDate: '2013',
            foundingLocation: {
                '@type': 'Place',
                address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Ridgewood',
                    addressRegion: 'NJ'
                }
            },
            award: 'CHAP Certified Organization',
            hasCredential: 'Licensed by the State Attorney General',
            address: {
                '@type': 'PostalAddress',
                streetAddress: '27 Chestnut Street, Floor 1',
                addressLocality: 'Ridgewood',
                addressRegion: 'NJ',
                postalCode: '07450',
                addressCountry: 'US'
            },
            telephone: '(800) 338-7786',
            sameAs: [
                'https://www.facebook.com/profile.php?id=61574893462190',
                'https://www.instagram.com/360degreecarenj/'
            ],
            knowsAbout: [
                'Home Health Care',
                'Skilled Nursing',
                'Personal Care',
                'Live-in Care',
                'Medical Staffing',
                'Elder Care'
            ],
            diversityPolicy: 'Equal Opportunity Employer',
            slogan: 'Providing Concierge Level™ home care with compassion',
            serviceArea: {
                '@type': 'State',
                name: 'New Jersey'
            },
            employee: {
                '@type': 'Person',
                description: 'Certified and highly trained caregivers'
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
    }

    return (
        <>
            <Head>
                {/* Primary Meta Tags */}
                <title>
                    About Our CHAP Certified Home Health Care Agency | 360
                    Degree Care
                </title>
                <meta
                    name="title"
                    content="About Our CHAP Certified Home Health Care Agency | 360 Degree Care"
                />
                <meta
                    name="description"
                    content="For over 10 years, 360 Degree Care has provided 24/7 compassionate home health services across New Jersey. CHAP certified, State Attorney General licensed, with highly trained caregivers."
                />
                <meta
                    name="keywords"
                    content="home health care, New Jersey home care, certified caregivers, CHAP certified, 24/7 care, Ridgewood NJ, elder care, skilled nursing"
                />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    content="https://www.360degreecare.net/about"
                />
                <meta
                    property="og:title"
                    content="About Our CHAP Certified Home Health Care Agency | 360 Degree Care"
                />
                <meta
                    property="og:description"
                    content="For over 10 years, 360 Degree Care has provided 24/7 compassionate home health services across New Jersey. CHAP certified, State Attorney General licensed, with highly trained caregivers."
                />
                <meta
                    property="og:image"
                    content="https://www.360degreecare.net/assets/about-team-image.jpg"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:site_name" content="360 Degree Care" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta
                    property="twitter:url"
                    content="https://www.360degreecare.net/about"
                />
                <meta
                    property="twitter:title"
                    content="About Our CHAP Certified Home Health Care Agency | 360 Degree Care"
                />
                <meta
                    property="twitter:description"
                    content="For over 10 years, 360 Degree Care has provided 24/7 compassionate home health services across New Jersey. CHAP certified, State Attorney General licensed, with highly trained caregivers."
                />
                <meta
                    property="twitter:image"
                    content="https://www.360degreecare.net/assets/about-team-image.jpg"
                />

                {/* Canonical & Additional */}
                <link
                    rel="canonical"
                    href="https://www.360degreecare.net/about"
                />
                <meta name="author" content="360 Degree Care" />
                <meta name="robots" content="index, follow" />
                <meta name="revisit-after" content="7 days" />
                <meta name="language" content="English" />
                <meta name="geo.region" content="US-NJ" />
                <meta name="geo.placename" content="Ridgewood" />
            </Head>

            <Script
                id="ld-json-about"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
        </>
    )
}

export default AboutSeoHead
