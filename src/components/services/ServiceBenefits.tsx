import { ServiceListProps } from '@/lib/types'

export default function ServiceBenefits({ header, items }: ServiceListProps) {
    return (
        <section className="page-section text-black">
            <h2 className="text-primary mb-8 text-center">{header}</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {items.map(({ title, description, Icon }) => (
                    <li
                        key={title}
                        className="flex flex-col gap-4 items-start border-1 border-gray-light shadow-lg rounded-xl p-6"
                    >
                        <Icon size={32} className="text-primary" />
                        <article className="space-y-2">
                            <h4 className="text-black font-bold">{title}</h4>
                            <p className="text-xs text-gray-dark">
                                {description}
                            </p>
                        </article>
                    </li>
                ))}
            </ul>
        </section>
    )
}
