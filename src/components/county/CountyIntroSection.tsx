interface CountyIntroSectionProps {
    title: string
    content: string[]
}

export default function CountyIntroSection({
    title,
    content
}: CountyIntroSectionProps) {
    return (
        <section className="py-14 px-4 bg-white">
            <div className="container mx-auto max-w-4xl space-y-6 text-gray-700">
                <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center font-merriweather">
                    {title}
                </h2>
                <div className="space-y-5 text-lg leading-relaxed">
                    {content.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
            </div>
        </section>
    )
}
