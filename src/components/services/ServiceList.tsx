'use client'

import { ServiceListProps } from '@/lib/types'
import { SlideInSection, StaggeredSection } from '../animations'
import * as FA6Icons from 'react-icons/fa6'

type LegacyServiceListProps = {
    title: string
    description?: string
    servicesList: string[]
}

type CombinedServiceListProps = ServiceListProps | LegacyServiceListProps

function isModernServiceListProps(
    props: CombinedServiceListProps
): props is ServiceListProps {
    return 'items' in props
}

const DEFAULT_ICON = 'FaCircleCheck'

export default function ServiceList(props: CombinedServiceListProps) {
    const isModern = isModernServiceListProps(props)

    const header = isModern ? props.header : props.title
    const description = isModern ? undefined : props.description

    const items = isModern
        ? props.items
        : props.servicesList.map(title => ({
              title,
              description: '',
              Icon: DEFAULT_ICON
          }))

    return (
        <section className="gradient-left">
            <section className="page-section text-white">
                <SlideInSection direction="down">
                    <h2 className="text-white mb-8 text-center">{header}</h2>
                    {description && (
                        <p className="max-w-2xl mx-auto text-center text-blue-50">
                            {description}
                        </p>
                    )}
                </SlideInSection>
                <StaggeredSection className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {items.map(({ title, description, Icon }) => {
                        const IconComponent =
                            typeof Icon === 'string'
                                ? FA6Icons[Icon as keyof typeof FA6Icons] ||
                                  (() => null)
                                : Icon

                        return (
                            <li
                                key={title}
                                className="grid grid-cols-[2rem_1fr] gap-6 items-start"
                            >
                                <div className="bg-primary rounded-full flex items-center justify-center h-8 w-8">
                                    <IconComponent size={20} className="" />
                                </div>
                                <article className="space-y-2">
                                    <h4 className="text-white font-bold">
                                        {title}
                                    </h4>
                                    <p className="text-xs">{description}</p>
                                </article>
                            </li>
                        )
                    })}
                </StaggeredSection>
            </section>
        </section>
    )
}
