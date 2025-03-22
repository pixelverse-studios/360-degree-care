import { IconType } from 'react-icons'

import AnimatedSection from './animated-section'

interface CardProps {
    icon: IconType
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
                <h1 className="max-w-custom mx-auto p-6 flex gap-8 text-black text-3xl font-bold">
                    {header}
                </h1>
            ) : null}
            <ul className="max-w-custom mx-auto p-6 grid grid-cols-1 xl:grid-cols-3 gap-8">
                {cards.map(card => {
                    const Icon = card.icon

                    return (
                        <AnimatedSection
                            animation="slideLeft"
                            key={card.title}
                            className="bg-white rounded-xl shadow-2xl transition-shadow duration-300 transform p-6 border border-gray-200"
                        >
                            <div className="w-16 h-16 rounded-full bg-primary-muted flex items-center justify-center text-white text-3xl mb-6 mx-0">
                                <Icon className="text-2xl text-primary" />
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
