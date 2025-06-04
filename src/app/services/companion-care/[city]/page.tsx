// src/app/services/companion-care/[city]/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { generateLocationSEO, cities } from '@/lib/locationSeo'
import CompanionCareView from '@/components/services/companionCare'

interface Props {
    params: {
        city: string
    }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { city } = params

    // Hardcode service to 'companion-care' since this is the companion-care city page
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

// Generate static params for all cities (only for companion-care)
export async function generateStaticParams() {
    console.log('Generating static params for companion-care cities:', cities)

    return cities.map(city => ({
        city
    }))
}

export default function CompanionCareCityPage({ params }: Props) {
    const { city } = params

    const seoData = generateLocationSEO('companion-care', city)

    if (!seoData) {
        notFound()
    }

    const {
        h1,
        description,
        location,
        service: serviceData,
        serviceSpecificData
    } = seoData

    // Structured data for local business
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
            {/* Structured Data */}
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
