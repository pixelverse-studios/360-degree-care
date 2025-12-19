import Link from 'next/link'
import { getCitySlugs } from '@/lib/content/city-slug-map'

type ServiceType =
    | 'companion-care'
    | 'personal-care'
    | 'elder-care'
    | 'home-health-aides'
    | 'nursing'
    | 'staffing'

interface BergenCountyCityLinksProps {
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

export default function BergenCountyCityLinks({
    serviceSlug,
    serviceName
}: BergenCountyCityLinksProps) {
    const activeCitySlugs = getCitySlugs(serviceSlug, 'bergen-county')
    const linkBase = `/services/${serviceSlug}/bergen-county`

    if (activeCitySlugs.length === 0) {
        return null
    }

    return (
        <section className="py-16 px-4 bg-primary/5">
            <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 font-merriweather">
                        {serviceName} Services by City
                    </h2>
                    <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                        Find {serviceName.toLowerCase()} services in your Bergen
                        County community. Click below for location-specific
                        information.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {activeCitySlugs.map(slug => {
                        const cityName = BERGEN_COUNTY_CITIES[slug]
                        if (!cityName) return null

                        return (
                            <Link
                                key={slug}
                                href={`${linkBase}/${slug}`}
                                className="group block p-5 bg-white rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-primary/20"
                            >
                                <span className="text-primary font-semibold group-hover:underline text-lg">
                                    {serviceName} in {cityName}, NJ
                                </span>
                                <p className="text-gray-600 text-sm mt-2">
                                    Professional {serviceName.toLowerCase()}{' '}
                                    services for {cityName} families
                                </p>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
