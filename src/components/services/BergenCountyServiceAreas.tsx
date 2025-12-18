import Link from 'next/link'
import { getCitySlugs } from '@/lib/content/city-slug-map'
import AnimatedSection from '@/components/animated-section'

type ServiceType =
    | 'companion-care'
    | 'personal-care'
    | 'elder-care'
    | 'home-health-aides'
    | 'nursing'
    | 'staffing'

interface BergenCountyServiceAreasProps {
    serviceSlug: ServiceType
    serviceName: string
}

const BERGEN_COUNTY_CITIES: Record<string, string> = {
    'fort-lee': 'Fort Lee',
    ridgewood: 'Ridgewood',
    paramus: 'Paramus',
    hackensack: 'Hackensack',
    teaneck: 'Teaneck',
    'fair-lawn': 'Fair Lawn',
    englewood: 'Englewood',
    westwood: 'Westwood',
    'river-vale': 'River Vale'
}

export default function BergenCountyServiceAreas({
    serviceSlug,
    serviceName
}: BergenCountyServiceAreasProps) {
    const activeCitySlugs = getCitySlugs(serviceSlug, 'bergen-county')
    const linkBase = `/services/${serviceSlug}/bergen-county`

    return (
        <section className="py-12 bg-gradient-to-b from-blue-50 to-white">
            <AnimatedSection
                animation="zoom"
                className="max-w-5xl mx-auto px-4"
            >
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">
                        {serviceName} in Bergen County
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        We proudly serve families throughout Bergen County with
                        compassionate, professional {serviceName.toLowerCase()}{' '}
                        services.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {activeCitySlugs.map(slug => {
                        const cityName = BERGEN_COUNTY_CITIES[slug]
                        if (!cityName) return null

                        return (
                            <Link
                                key={slug}
                                href={`${linkBase}/${slug}`}
                                className="group block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                            >
                                <span className="text-primary font-medium group-hover:underline">
                                    {serviceName} in {cityName}, NJ
                                </span>
                            </Link>
                        )
                    })}
                </div>

                <div className="text-center mt-8">
                    <Link
                        href={linkBase}
                        className="inline-flex items-center text-primary font-medium hover:underline"
                    >
                        View all Bergen County {serviceName.toLowerCase()}{' '}
                        services
                        <svg
                            className="ml-2 w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </Link>
                </div>
            </AnimatedSection>
        </section>
    )
}
