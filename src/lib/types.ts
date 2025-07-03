import { ReactNode } from 'react'
import { IconType } from 'react-icons'

export interface ImageProps {
    src: string
    alt: string
}

export interface ServiceItemProps {
    Icon: IconType | string
    title: string
    description: string
}

export interface ServiceListProps {
    header: string
    items: ServiceItemProps[]
}

export interface FaqItemProps {
    question: string
    answer: ReactNode
}

export interface FaqSectionProps {
    header: string
    faqs: FaqItemProps[]
    headerClass?: string
    bodyClass?: string
}
