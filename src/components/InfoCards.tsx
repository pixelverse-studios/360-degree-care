import { IconType } from 'react-icons'

import { cn } from '@/lib/utils'

interface CardProps {
    icon: IconType
    title: string
    description: string
    bgColor: string
}

interface InfoCardProps {
    header?: string
    cards: CardProps[]
    bgColor: string
}

export default function InfoCards({ cards, header, bgColor }: InfoCardProps) {
    return (
        <section className={`${bgColor} py-8`}>
            {header != null ? (
                <h1 className="max-w-custom mx-auto p-6 flex gap-8 text-black text-3xl font-bold">
                    {header}
                </h1>
            ) : null}
            <ul className="max-w-custom mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                {cards.map(card => {
                    const Icon = card.icon

                    return (
                        <li
                            key={card.title}
                            className={cn(
                                'p-6 rounded-xl flex flex-col gap-4 shadow-md',
                                card.bgColor
                            )}
                        >
                            <div className="rounded-full bg-primary h-[3rem] w-[3rem] flex items-center justify-center">
                                {<Icon className="text-2xl text-white" />}
                            </div>
                            <h2 className="font-bold text-black-muted text-xl">
                                {card.title}
                            </h2>
                            <p>{card.description}</p>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}
