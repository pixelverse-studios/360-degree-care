interface ServiceAreaGridProps {
    title?: string
    subtitle?: string
    regions: Array<{
        name: string
        cities: string[]
    }>
}

export default function ServiceAreaGrid({
    title,
    subtitle,
    regions
}: ServiceAreaGridProps) {
    const heading = title ?? 'Service Areas We Serve'

    return (
        <section className="py-16 px-4 bg-white">
            <div className="container mx-auto max-w-5xl space-y-6">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl lg:text-4xl font-bold text-primary font-merriweather">
                        {heading}
                    </h2>
                    {subtitle && (
                        <p className="text-gray-700 text-lg">{subtitle}</p>
                    )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {regions.map(region => (
                        <div
                            key={region.name}
                            className="bg-gray-50 rounded-xl shadow p-5"
                        >
                            <h3 className="text-lg font-semibold text-primary mb-3">
                                {region.name}
                            </h3>
                            <ul className="space-y-2 text-gray-700 text-sm">
                                {region.cities.map(city => (
                                    <li key={city}>• {city}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
