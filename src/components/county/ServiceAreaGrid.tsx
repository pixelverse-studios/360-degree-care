import { FaCheckCircle } from 'react-icons/fa'

export interface ServiceAreaRegion {
    name: string
    bgColor?: string
    cities: string[]
    description?: string
}

export interface ServiceAreaGridProps {
    title?: string
    subtitle?: string
    regions: ServiceAreaRegion[]
}

export default function ServiceAreaGrid({
    title = 'Complete Service Area',
    subtitle,
    regions
}: ServiceAreaGridProps) {
    return (
        <section id="complete-service-area" className="py-16 px-4 bg-white">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8 text-center font-merriweather">
                    {title}
                </h2>
                {subtitle && (
                    <p className="text-xl text-center mb-12 text-gray-700 max-w-3xl mx-auto">
                        {subtitle}
                    </p>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {regions.map(region => (
                        <div
                            key={region.name}
                            className={`${region.bgColor || 'bg-gray-50'} rounded-lg p-6`}
                        >
                            <h3 className="font-bold text-lg text-secondary mb-4">
                                {region.name}
                            </h3>
                            <ul className="space-y-2 text-gray-700">
                                {region.cities.map(city => (
                                    <li
                                        key={city}
                                        className="flex items-start gap-2"
                                    >
                                        <FaCheckCircle className="text-green mt-1 flex-shrink-0" />
                                        <span>{city}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-4 text-sm text-gray-600">
                                {region.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
