'use client'

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
                <h2 className="text-blue">{header}</h2>
                <p>{description}</p>
            </section>
        </section>
    )
}
