import { ServiceListProps } from '@/lib/types'

export default function ServiceList({ header, items }: ServiceListProps) {
    return (
        <section className="gradient-left">
            <section className="page-section text-white">
                <h2 className="text-white mb-8 text-center">{header}</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {items.map(({ title, description, Icon }) => (
                        <li
                            key={title}
                            className="grid grid-cols-[2rem_1fr] gap-6 items-start"
                        >
                            <div className="bg-primary rounded-full flex items-center justify-center h-8 w-8">
                                <Icon size={20} className="" />
                            </div>
                            <article className="space-y-2">
                                <h4 className="text-white font-bold">
                                    {title}
                                </h4>
                                <p className="text-xs">{description}</p>
                            </article>
                        </li>
                    ))}
                </ul>
            </section>
        </section>
    )
}
