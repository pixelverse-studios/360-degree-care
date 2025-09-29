import { FaMapMarkerAlt } from 'react-icons/fa'

export interface RegionalSectionProps {
    title: string
    iconColor?: string
    content: string[]
}

export default function RegionalSection({
    title,
    iconColor = 'text-primary',
    content
}: RegionalSectionProps) {
    return (
        <div className="mb-12 bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-secondary mb-4 flex items-center gap-2">
                <FaMapMarkerAlt className={iconColor} />
                {title}
            </h3>
            <div className="prose max-w-none text-gray-700">
                {content.map((paragraph, index) => (
                    <p
                        key={index}
                        className={index < content.length - 1 ? 'mb-4' : ''}
                        dangerouslySetInnerHTML={{ __html: paragraph }}
                    />
                ))}
            </div>
        </div>
    )
}
