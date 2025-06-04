import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { generateLocationSEO, cities } from '@/lib/locationSeo'
import NursingView from '@/components/services/nursing'

interface Props {
    params: {
        city: string
    }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { city } = params
    const seoData = generateLocationSEO('nursing', city)

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
            canonical: `/services/nursing/${city}`
        }
    }
}

export async function generateStaticParams() {
    return cities.map(city => ({
        city
    }))
}

export default function NursineCityPage({ params }: Props) {
    const { city } = params

    const seoData = generateLocationSEO('nursing', city)

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

            <NursingView header={h1} />
        </>
    )
}
