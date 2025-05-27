import { FaLocationDot } from 'react-icons/fa6'

interface CountyCityGridProps {
    cities: string[]
    countySlug: string
    countyName: string
}

export default function CountyCityGrid({
    cities,
    countySlug,
    countyName
}: CountyCityGridProps) {
    return (
        <section>
            <div className="section space-y-4 mx-auto">
                <h3>
                    We are currently servicing the following cities within{' '}
                    {countyName}
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {cities.map(city => (
                        <li key={city} className="flex items-center gap-3">
                            <FaLocationDot size={22} className="text-primary" />
                            {city}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
