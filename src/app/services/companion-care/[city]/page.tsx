// src/app/services/[service]/[city]/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
    generateLocationSEO,
    getAllServiceCityPaths,
    cities,
    services
} from '@/lib/locationSeo'

interface Props {
    params: {
        service: string
        city: string
    }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { service, city } = params

    const seoData = generateLocationSEO(service, city)

    if (!seoData) {
        return {
            title: 'Service Not Found',
            description: 'The requested service page could not be found.'
        }
    }

    const { title, metaDescription, location, serviceSpecificData } = seoData

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
            canonical: `/services/${service}/${city}`
        }
    }
}

// Generate static params for all service/city combinations
export async function generateStaticParams() {
    const paths = getAllServiceCityPaths()

    return paths.map(({ params }) => ({
        service: params.service,
        city: params.city
    }))
}

export default function ServiceCityPage({ params }: Props) {
    const { service, city } = params

    const seoData = generateLocationSEO(service, city)

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

            <div className="min-h-screen bg-white">
                {/* Header with SEO-Optimized H1 */}
                <header className="bg-blue-600 text-white py-12">
                    <div className="max-w-4xl mx-auto px-4">
                        <nav className="mb-6 text-sm">
                            <Link
                                href="/"
                                className="text-blue-200 hover:text-white"
                            >
                                Home
                            </Link>
                            <span className="mx-2">›</span>
                            <Link
                                href="/services"
                                className="text-blue-200 hover:text-white"
                            >
                                Services
                            </Link>
                            <span className="mx-2">›</span>
                            <Link
                                href={`/services/${service}`}
                                className="text-blue-200 hover:text-white"
                            >
                                {serviceData.name}
                            </Link>
                            <span className="mx-2">›</span>
                            <span>{location.name}</span>
                        </nav>

                        {/* Dynamic H1 from SEO data */}
                        <h1 className="text-4xl font-bold mb-4">{h1}</h1>

                        {/* Location-Specific Description */}
                        <p className="text-xl text-blue-100">{description}</p>

                        {/* Local Keywords Integration */}
                        <div className="mt-4 text-blue-200 text-sm">
                            Serving{' '}
                            {location.localKeywords.slice(0, 3).join(' • ')}
                            {location.population &&
                                ` • Population: ${location.population}`}
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="max-w-4xl mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Content with Service-Specific Blocks */}
                        <div className="lg:col-span-2">
                            <div className="prose prose-lg max-w-none">
                                {/* Community-Focused Introduction */}
                                <h2>
                                    Trusted {serviceData.name} Provider in{' '}
                                    {location.name}
                                </h2>
                                <p>
                                    {location.seoContent.communityFocus} Our{' '}
                                    {serviceData.name.toLowerCase()} services
                                    are specifically designed to meet the unique
                                    needs of {location.name} residents and their
                                    families.
                                </p>

                                {/* Custom Why Choose Us Section */}
                                {serviceSpecificData?.contentBlocks
                                    ?.whyChooseUs && (
                                    <>
                                        <h3>
                                            Why {location.name} Families Choose
                                            Our {serviceData.name} Services
                                        </h3>
                                        <p>
                                            {
                                                serviceSpecificData
                                                    .contentBlocks.whyChooseUs
                                            }
                                        </p>
                                    </>
                                )}

                                {/* Service Highlights */}
                                {serviceSpecificData?.contentBlocks
                                    ?.serviceHighlights && (
                                    <>
                                        <h3>
                                            Our {serviceData.name} Services in{' '}
                                            {location.name}
                                        </h3>
                                        <ul>
                                            {serviceSpecificData.contentBlocks.serviceHighlights.map(
                                                (highlight, index) => (
                                                    <li key={index}>
                                                        <strong>
                                                            {highlight}
                                                        </strong>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </>
                                )}

                                {/* Default service features if no custom highlights */}
                                {!serviceSpecificData?.contentBlocks
                                    ?.serviceHighlights && (
                                    <>
                                        <h3>
                                            Why Choose Our {serviceData.name}{' '}
                                            Services in {location.name}
                                        </h3>
                                        <ul>
                                            <li>
                                                <strong>
                                                    Local Knowledge:
                                                </strong>{' '}
                                                Deep understanding of{' '}
                                                {location.name} and{' '}
                                                {location.county}
                                            </li>
                                            <li>
                                                <strong>
                                                    Community Connections:
                                                </strong>{' '}
                                                Established relationships with
                                                local healthcare providers
                                            </li>
                                            <li>
                                                <strong>
                                                    Cultural Sensitivity:
                                                </strong>{' '}
                                                Respectful of{' '}
                                                {location.demographics}{' '}
                                                community values
                                            </li>
                                            <li>
                                                <strong>
                                                    Licensed Professionals:
                                                </strong>{' '}
                                                All caregivers licensed in New
                                                Jersey
                                            </li>
                                            <li>
                                                <strong>
                                                    Emergency Response:
                                                </strong>{' '}
                                                Quick response times throughout{' '}
                                                {location.name}
                                            </li>
                                        </ul>
                                    </>
                                )}

                                {/* Local Expertise */}
                                {serviceSpecificData?.contentBlocks
                                    ?.localExpertise && (
                                    <>
                                        <h3>
                                            Local Expertise in {location.name}
                                        </h3>
                                        <p>
                                            {
                                                serviceSpecificData
                                                    .contentBlocks
                                                    .localExpertise
                                            }
                                        </p>
                                    </>
                                )}

                                {/* Local Landmarks & Recognition */}
                                {location.localLandmarks.length > 0 && (
                                    <>
                                        <h3>
                                            Familiar with {location.name} Area
                                        </h3>
                                        <p>
                                            Our team knows {location.name} well,
                                            including key locations like{' '}
                                            {location.localLandmarks
                                                .slice(0, 3)
                                                .join(', ')}
                                            , and more. This local knowledge
                                            helps us provide better, more
                                            personalized care.
                                        </p>
                                    </>
                                )}

                                {/* Emergency Information */}
                                {serviceSpecificData?.contentBlocks
                                    ?.emergencyInfo && (
                                    <>
                                        <h3>
                                            Emergency Support in {location.name}
                                        </h3>
                                        <p>
                                            {
                                                serviceSpecificData
                                                    .contentBlocks.emergencyInfo
                                            }
                                        </p>
                                    </>
                                )}

                                {/* Local Healthcare Partnerships */}
                                <h3>Healthcare Network in {location.name}</h3>
                                <p>
                                    {location.seoContent.localPartners} This
                                    ensures seamless coordination of care and
                                    the best possible outcomes for our{' '}
                                    {location.name} clients.
                                </p>

                                {/* Nearby Areas Served */}
                                {location.nearbyAreas.length > 0 && (
                                    <>
                                        <h3>
                                            Also Serving Areas Near{' '}
                                            {location.name}
                                        </h3>
                                        <p>
                                            In addition to {location.name}, we
                                            provide{' '}
                                            {serviceData.name.toLowerCase()}{' '}
                                            services to:
                                        </p>
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 my-4">
                                            {location.nearbyAreas.map(area => (
                                                <div
                                                    key={area}
                                                    className="bg-gray-50 p-2 rounded text-center text-sm"
                                                >
                                                    {area}
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                )}

                                {/* Call to Action */}
                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
                                    <h4 className="text-lg font-semibold text-blue-900 mb-3">
                                        Ready to Start {serviceData.name} in{' '}
                                        {location.name}?
                                    </h4>
                                    <p className="text-blue-800 mb-4">
                                        Contact our {location.name} care team
                                        today for a free consultation. We're
                                        here to help you and your family access
                                        the best{' '}
                                        {serviceData.name.toLowerCase()}
                                        services in {location.county}.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                                            Free {location.name} Consultation
                                        </button>
                                        <button className="border border-blue-300 text-blue-700 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium">
                                            Call (555) 123-4567
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar with Local Information */}
                        <div className="lg:col-span-1">
                            <div className="bg-gray-50 rounded-lg p-6 sticky top-6">
                                <h3 className="text-lg font-semibold mb-4">
                                    {location.name} Contact Info
                                </h3>

                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-medium text-gray-900">
                                            Local Phone
                                        </h4>
                                        <p className="text-gray-600">
                                            (555) 123-4567
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="font-medium text-gray-900">
                                            Service Area
                                        </h4>
                                        <p className="text-gray-600">
                                            {location.name}, {location.county},
                                            NJ
                                        </p>
                                        {location.zipCodes.length > 0 && (
                                            <p className="text-gray-500 text-sm">
                                                ZIP:{' '}
                                                {location.zipCodes.join(', ')}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <h4 className="font-medium text-gray-900">
                                            Hours in {location.name}
                                        </h4>
                                        <div className="text-gray-600 text-sm space-y-1">
                                            <div>Mon-Fri: 8AM - 8PM</div>
                                            <div>Saturday: 9AM - 5PM</div>
                                            <div>Sunday: Emergency on-call</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Competition Level Indicator (for internal use) */}
                                {location.rankingFactors && (
                                    <div className="mt-6 pt-6 border-t border-gray-200">
                                        <h4 className="font-medium text-gray-900 mb-3">
                                            Service Focus
                                        </h4>
                                        <div className="flex flex-wrap gap-1">
                                            {location.rankingFactors.focusAreas
                                                .slice(0, 3)
                                                .map(area => (
                                                    <span
                                                        key={area}
                                                        className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded"
                                                    >
                                                        {area}
                                                    </span>
                                                ))}
                                        </div>
                                    </div>
                                )}

                                {/* Other Local Services */}
                                <div className="mt-6 pt-6 border-t border-gray-200">
                                    <h4 className="font-medium text-gray-900 mb-3">
                                        Other Services in {location.name}
                                    </h4>
                                    <div className="space-y-2">
                                        {Object.entries(services)
                                            .filter(
                                                ([slug]) => slug !== service
                                            )
                                            .slice(0, 3)
                                            .map(([slug, serviceInfo]) => (
                                                <Link
                                                    key={slug}
                                                    href={`/services/${slug}/${city}`}
                                                    className="block text-blue-600 hover:text-blue-800 text-sm"
                                                >
                                                    {serviceInfo.name} in{' '}
                                                    {location.name}
                                                </Link>
                                            ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}
