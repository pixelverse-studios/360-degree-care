import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
    title: 'About 360 Degree Care | New Jersey In-Home Care Team',
    description:
        'Meet 360 Degree Care, a trusted New Jersey in-home care provider with experienced caregivers, strong retention, and over a decade of compassionate service.',
    openGraph: {
        title: 'About 360 Degree Care | New Jersey In-Home Care Team',
        description:
            'Meet 360 Degree Care, a trusted New Jersey in-home care provider with experienced caregivers, strong retention, and over a decade of compassionate service.',
        type: 'website'
    }
}

const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    mainEntity: {
        '@type': 'Organization',
        name: '360 Degree Care',
        url: 'https://www.360degreecare.net/',
        logo: 'https://www.360degreecare.net/logo.png',
        description:
            'Meet 360 Degree Care, a trusted New Jersey in-home care provider with experienced caregivers, strong retention, and over a decade of compassionate service.',
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
        knowsAbout: [
            'Home Health Care',
            'Skilled Nursing',
            'Personal Care',
            'Live-in Care',
            'Medical Staffing',
            'Elder Care'
        ],
        slogan: 'Providing Concierge Level home care with compassion',
        serviceArea: {
            '@type': 'State',
            name: 'New Jersey'
        }
    }
}

export default function AboutLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Script
                id="ld-json-about"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(aboutSchema)
                }}
            />
            {children}
        </>
    )
}
