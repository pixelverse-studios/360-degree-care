'use client'

import { SlideInSection, StaggeredSection } from '../animations'
import { ServiceListProps } from '@/lib/types'
import { resolveIconComponent } from '@/lib/iconMap'

export default function ServiceBenefits({ header, items }: ServiceListProps) {
    return (
        <section className="page-section text-black">
            <SlideInSection direction="up">
                <h2 className="text-primary mb-8 text-center">{header}</h2>
            </SlideInSection>
            <StaggeredSection
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center max-w-4xl mx-auto h-full"
                childClass="h-full"
            >
                {items.map(({ title, description, Icon }) => {
                    const IconComponent = resolveIconComponent(Icon)
                    if (!IconComponent) return null
                    return (
                        <div
                            key={title}
                            className="flex flex-col gap-4 items-start border-1 border-gray-light shadow-lg rounded-xl p-6 h-full"
                        >
                            <IconComponent size={32} className="text-primary" />
                            <article className="space-y-2">
                                <h4 className="text-black font-bold">
                                    {title}
                                </h4>
                                <p className="text-xs text-gray-dark">
                                    {description}
                                </p>
                            </article>
                        </div>
                    )
                })}
            </StaggeredSection>
        </section>
    )
}
