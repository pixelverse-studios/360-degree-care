import { ServiceListProps } from '@/lib/types'
import { SlideInSection, StaggeredSection } from '../animations'

export default function ServiceList({ header, items }: ServiceListProps) {
    return (
        <section className="gradient-left">
            <section className="page-section text-white">
                <SlideInSection direction="down">
                    <h2 className="text-white mb-8 text-center">{header}</h2>
                </SlideInSection>
                <StaggeredSection className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
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
                </StaggeredSection>
            </section>
        </section>
    )
}
