interface RegionalSectionProps {
    title: string
    content: string[]
    iconColor?: string
}

export default function RegionalSection({
    title,
    content,
    iconColor = 'text-primary'
}: RegionalSectionProps) {
    return (
        <article className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-primary mb-3">{title}</h3>
            <ul className="space-y-3 text-gray-700">
                {content.map((paragraph, index) => (
                    <li key={index} className="flex gap-3">
                        <span className={`${iconColor} mt-1`}>•</span>
                        <span>{paragraph}</span>
                    </li>
                ))}
            </ul>
        </article>
    )
}
