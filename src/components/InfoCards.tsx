import Image from 'next/image'
import { IconType } from 'react-icons'

import AnimatedSection from './animated-section'
import { cn } from '@/lib/utils'
import { getImgSrc } from '@/lib/images'

interface CardProps {
    icon: IconType
    iconPath?: string
    title: string
    description: string
    bgColor: string
}

interface InfoCardProps {
    header?: string
    cards: CardProps[]
    styles: string
}

export default function InfoCards({ cards, header, styles }: InfoCardProps) {
    return (
        <section className={`${styles} py-8`}>
            {header != null ? (
                <h1 className="text-center max-w-custom mx-auto py-2 px-6 text-black text-3xl font-bold">
                    {header}
                </h1>
            ) : null}
            <ul
                className={cn(
                    'max-w-custom mx-auto p-6 grid gap-8',
                    cards.length <= 3
                        ? 'grid-cols-1 xl:grid-cols-3'
                        : 'grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 3xl:grid-cols-4'
                )}
            >
                {cards.map(card => {
                    const Icon = card.icon
                    const iconSrc =
                        card.iconPath != null
                            ? getImgSrc(card.iconPath)
                            : undefined
                    return (
                        <AnimatedSection
                            animation="zoom"
                            key={card.title}
                            className="bg-white-bright rounded-xl shadow-xl transition-shadow duration-300 transform p-6 border border-gray-200"
                        >
                            <div className="">
                                {iconSrc == null ? (
                                    <Icon className="text-4xl mb-4 text-primary" />
                                ) : (
                                    <Image
                                        src={iconSrc}
                                        alt={card.title}
                                        width={64}
                                        height={64}
                                        className="mb-4 h-12 w-auto"
                                        sizes="64px"
                                    />
                                )}
                            </div>
                            <h2 className="">{card.title}</h2>
                            <p>{card.description}</p>
                        </AnimatedSection>
                    )
                })}
            </ul>
        </section>
    )
}
