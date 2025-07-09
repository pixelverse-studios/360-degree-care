import { FaLocationDot } from 'react-icons/fa6'
import { CityData } from '@/lib/types'
import Link from 'next/link'

interface CountyCityGridProps {
    cities: CityData[]
    countyName: string
    countySlug: string // Add countySlug to the props
}

export default function CountyCityGrid({
    cities,
    countyName,
    countySlug
}: CountyCityGridProps) {
    return (
        <section>
            <div className="section space-y-6 mx-auto">
                <div className="text-center">
                    <h3 className="text-2xl md:text-3xl font-bold">
                        We Are Proudly Serving Cities Within {countyName}
                    </h3>
                    <p className="mt-2 text-gray-600">
                        Click on a city to learn more about the services we
                        offer in your community.
                    </p>
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-4 pt-4 max-w-5xl mx-auto">
                    {cities.map(city => (
                        <li key={city.slug}>
                            <Link href={`/${countySlug}/${city.slug}`}>
                                <div className="flex items-center gap-3 font-semibold transition-all duration-300 p-2 rounded-lg hover:shadow-xl">
                                    <FaLocationDot
                                        size={20}
                                        className="text-primary flex-shrink-0"
                                    />
                                    {city.name}
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
