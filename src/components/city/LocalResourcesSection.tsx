'use client'

import { SlideInSection, StaggeredSection } from '../animations'
import { LocalResource } from '@/lib/content/city-service-types'
import {
    FaHospital,
    FaUsers,
    FaCapsules,
    FaHouseUser,
    FaPhone,
    FaMapLocationDot
} from 'react-icons/fa6'

interface LocalResourcesSectionProps {
    header: string
    items: LocalResource[]
}

const resourceIcons = {
    hospital: FaHospital,
    'senior-center': FaUsers,
    pharmacy: FaCapsules,
    'community-center': FaHouseUser
}

const resourceLabels = {
    hospital: 'Hospital',
    'senior-center': 'Senior Center',
    pharmacy: 'Pharmacy',
    'community-center': 'Community Center'
}

export default function LocalResourcesSection({
    header,
    items
}: LocalResourcesSectionProps) {
    return (
        <section className="page-section bg-gray-50">
            <SlideInSection direction="up">
                <h2 className="text-primary mb-8 text-center">{header}</h2>
            </SlideInSection>
            <StaggeredSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {items.map(({ name, type, address, phone }) => {
                    const IconComponent = resourceIcons[type]
                    const typeLabel = resourceLabels[type]

                    return (
                        <div
                            key={name}
                            className="flex flex-col gap-3 bg-white border border-gray-200 shadow-md rounded-xl p-5"
                        >
                            <div className="flex items-center gap-3">
                                <div className="bg-primary/10 rounded-full p-2">
                                    <IconComponent
                                        size={20}
                                        className="text-primary"
                                    />
                                </div>
                                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                                    {typeLabel}
                                </span>
                            </div>
                            <h4 className="text-black font-bold text-base">
                                {name}
                            </h4>
                            <div className="flex items-start gap-2 text-gray-600">
                                <FaMapLocationDot
                                    size={14}
                                    className="mt-0.5 flex-shrink-0"
                                />
                                <span className="text-sm">{address}</span>
                            </div>
                            {phone && (
                                <div className="flex items-center gap-2 text-gray-600">
                                    <FaPhone
                                        size={12}
                                        className="flex-shrink-0"
                                    />
                                    <a
                                        href={`tel:${phone.replace(/[^0-9]/g, '')}`}
                                        className="text-sm text-primary hover:underline"
                                    >
                                        {phone}
                                    </a>
                                </div>
                            )}
                        </div>
                    )
                })}
            </StaggeredSection>
        </section>
    )
}
