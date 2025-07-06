import { CountyServiceListProps } from '@/lib/types'

export default function CountyServiceList({
    services,
    countyName
    // slug
}: CountyServiceListProps) {
    return (
        <section>
            <div className="section">
                <h2 className="text-center">
                    Services we offer in {countyName}
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map(service => (
                        <li
                            className="bg-white-bright p-4 rounded-xl shadow-xl h-full flex flex-col gap-3"
                            key={service.slug}
                        >
                            <h3>{service.name}</h3>
                            <p>{service.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
