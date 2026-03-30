import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
    title: 'About Haven Home Health | New Jersey In-Home Care Team',
    description:
        'Meet Haven Home Health, a trusted New Jersey in-home care provider with experienced caregivers, strong retention, and over a decade of compassionate service.',
    openGraph: {
        title: 'About Haven Home Health | New Jersey In-Home Care Team',
        description:
            'Meet Haven Home Health, a trusted New Jersey in-home care provider with experienced caregivers, strong retention, and over a decade of compassionate service.',
        type: 'website'
    }
}

const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    mainEntity: {
        '@type': 'Organization',
        name: 'Haven Home Health',
        url: 'https://haven-home-health.netlify.app/',
        logo: '/logo.png',
        description:
            'Meet Haven Home Health, a trusted New Jersey in-home care provider with experienced caregivers, strong retention, and over a decade of compassionate service.',
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
            streetAddress: '123 Main Street',
            addressLocality: 'Ridgewood',
            addressRegion: 'NJ',
            postalCode: '07450',
            addressCountry: 'US'
        },
        telephone: '(555) 123-4567',
        knowsAbout: [
            'Home Health Care',
            'Skilled Nursing',
            'Personal Care',
            'Live-in Care',
            'Medical Staffing',
            'Elder Care'
        ],
        slogan: 'Compassionate home care you can trust',
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
