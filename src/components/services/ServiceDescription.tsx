'use client'

import { SlideInSection } from '../animations'

interface ServiceDescriptionProps {
    header: string
    description: string
}

export default function ServiceDescription({
    header,
    description
}: ServiceDescriptionProps) {
    return (
        <section className="bg-gray-light">
            <section className="page-section flex flex-col gap-6 items-center max-w-3xl">
                <SlideInSection direction="up">
                    <h2 className="text-blue">{header}</h2>
                </SlideInSection>
                <SlideInSection direction="down">
                    <p>{description}</p>
                </SlideInSection>
            </section>
        </section>
    )
}
