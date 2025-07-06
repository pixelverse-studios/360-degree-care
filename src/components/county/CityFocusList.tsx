import { FaCity, FaMapLocationDot, FaHandshake } from 'react-icons/fa6'

interface CityFocusListProps {
    communityFocus: string
    serviceAreas: string
    localPartners: string
}

export default function CityFocusList({
    communityFocus,
    serviceAreas,
    localPartners
}: CityFocusListProps) {
    return (
        <section>
            <div className="section">
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <li>
                        <article className="flex gap-4 items-center mb-2">
                            <FaCity size={24} className="text-primary" />
                            <h3 className="text-black">Community Focus</h3>
                        </article>
                        <p>{communityFocus}</p>
                    </li>
                    <li>
                        <article className="flex gap-4 items-center mb-2">
                            <FaMapLocationDot
                                size={24}
                                className="text-primary"
                            />
                            <h3 className="text-black">Service Areas</h3>
                        </article>
                        <p>{serviceAreas}</p>
                    </li>
                    <li>
                        <article className="flex gap-4 items-center mb-2">
                            <FaHandshake size={24} className="text-primary" />
                            <h3 className="text-black">Local Partners</h3>
                        </article>
                        <p>{localPartners}</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}
