import { IconType } from 'react-icons'

import AnimatedSection from '../animated-section'
import { cn } from '@/lib/utils'

interface SimpleCardProps {
    title: string
    icon: IconType
    bg?: string
    description: string
}

export default function SimpleCard({
    bg = 'bg-white-bright',
    description,
    icon,
    title
}: SimpleCardProps) {
    const Icon = icon
    return (
        <AnimatedSection
            animation="zoom"
            key={title}
            className={cn(
                bg,
                'rounded-xl shadow-2xl transition-shadow duration-300 transform p-6 border border-gray-200 flex gap-4 flex-row items-center xl:flex-col xl:items-start'
            )}
        >
            <Icon className="text-4xl text-primary mb-0" />
            <article>
                <h2 className="">{title}</h2>
                <p>{description}</p>
            </article>
        </AnimatedSection>
    )
}
