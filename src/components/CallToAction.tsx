'use client'

import { useRouter } from 'next/navigation'

import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import { useRouteState } from '@/lib/providers'
import { ContactMap } from '@/utils/contact'

interface CallToActionProps {
    buttonLabel: string
    buttonClass?: string
    type: 'general' | 'services' | 'employment'
    variant?:
        | 'default'
        | 'destructive'
        | 'outline'
        | 'secondary'
        | 'ghost'
        | 'link'
        | 'cta'
        | 'glossy'
        | 'pillPrimary'
        | 'pillBlue'
        | 'pillGreen'
        | null
        | undefined
    value: string
}

export default function CallToAction({
    buttonLabel,
    buttonClass,
    type,
    value,
    variant
}: CallToActionProps) {
    const router = useRouter()
    const { setRouteState } = useRouteState()

    const onButtonClick = () => {
        if (type === 'general') {
            return router.push('/contact')
        }

        const config = ContactMap.get(type)
        config.initialValues = { ...config.initialValues, [type]: value }
        setRouteState({ type, value: config.initialValues })
        return router.push(`/contact/${type}`)
    }

    return (
        <Button
            variant={variant ?? 'cta'}
            className={cn(buttonClass)}
            onClick={onButtonClick}
        >
            {buttonLabel}
        </Button>
    )
}
