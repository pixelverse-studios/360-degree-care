// src/app/services/companion-care/[city]/page.tsx

import { Metadata } from 'next'
import { notFound } from 'next/navigation'
// Updated import
import { generateLocationSEO, getAllCitySlugs } from '@/lib/locationSeo'
import CompanionCareView from '@/components/services/companionCare'

interface Props {
    params: {
        city: string
    }
}

// ... generateMetadata function remains the same ...
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { city } = params
    const seoData = generateLocationSEO('companion-care', city)

    if (!seoData) {
        return {
            title: 'Service Not Found',
            description: 'The requested service page could not be found.'
        }
    }

    const { title, metaDescription, location } = seoData

    return {
        title,
        description: metaDescription,
        keywords: seoData.keywords,
        openGraph: {
            title,
            description: metaDescription,
            type: 'website',
            locale: 'en_US',
            siteName: 'Your Healthcare Services'
        },
        other: {
            'geo.region': 'US-NJ',
            'geo.placename': `${location.name}, New Jersey`,
            'geo.postal-code': location.zipCodes.join(', ')
        },
        alternates: {
            canonical: `/services/companion-care/${city}`
        }
    }
}

// This function now generates paths for ALL cities in ALL counties
export async function generateStaticParams() {
    const citySlugs = getAllCitySlugs()
    return citySlugs.map(city => ({
        city
    }))
}

// ... Default export component remains the same ...
export default function CompanionCareCityPage({ params }: Props) {
    const { city } = params

    const seoData = generateLocationSEO('companion-care', city)

    if (!seoData) {
        notFound()
    }

    const { h1, description, location, service: serviceData } = seoData
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: `${serviceData.name} Services`,
        description: description,
        address: {
            '@type': 'PostalAddress',
            addressLocality: location.name,
            addressRegion: 'NJ',
            addressCountry: 'US',
            postalCode: location.zipCodes[0] || ''
        },
        areaServed: {
            '@type': 'City',
            name: location.name
        },
        telephone: '(555) 123-4567',
        serviceArea: location.nearbyAreas.concat([location.name])
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData)
                }}
            />

            <CompanionCareView header={h1} />
        </>
    )
}
