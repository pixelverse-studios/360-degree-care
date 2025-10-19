import type { IconType } from 'react-icons'
import type { IconName } from './iconMap'

export interface ServiceListProps {
    header: string
    items: Array<{
        title: string
        description: string
        Icon: IconName | IconType | string
    }>
}

export interface ImageProps {
    src: string
    alt: string
}
