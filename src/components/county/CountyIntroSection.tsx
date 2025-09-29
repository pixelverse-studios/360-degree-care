export interface CountyIntroSectionProps {
    title: string
    content: string[]
}

export default function CountyIntroSection({
    title,
    content
}: CountyIntroSectionProps) {
    return (
        <section id="intro" className="py-16 px-4 bg-white">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8 text-center font-merriweather">
                    {title}
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                    {content.map((paragraph, index) => (
                        <p
                            key={index}
                            className={index < content.length - 1 ? 'mb-4' : ''}
                        >
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    )
}
