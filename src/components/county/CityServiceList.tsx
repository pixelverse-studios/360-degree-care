'use client'
import { useRouter } from 'next/navigation'
import { allServices } from '@/lib/services'

interface CityServiceListProps {
    offeredServiceSlugs: string[]
    cityName: string
}

export default function CityServiceList({
    offeredServiceSlugs,
    cityName
}: CityServiceListProps) {
    const router = useRouter()

    const servicesToDisplay = allServices.filter(service =>
        offeredServiceSlugs.includes(service.slug)
    )

    if (servicesToDisplay.length === 0) {
        return null // Or a message indicating no services are offered
    }

    const onServiceClick = (route: string) => router.push(route)

    return (
        <section>
            <div className="section">
                <h2 className="text-center">Services we offer in {cityName}</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {servicesToDisplay.map(service => (
                        <li
                            className="bg-white-bright p-4 rounded-xl h-full flex flex-col gap-3 transition-all duration-300 hover:shadow-xl cursor-pointer"
                            key={service.slug}
                            onClick={() => onServiceClick(service.route)}
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
