import { useRouter } from 'next/navigation'

import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import { useRouteState } from '@/lib/providers'
import { ContactMap } from '@/utils/contact'

interface CallToActionProps {
    buttonLabel: string
    buttonClass?: string
    round?: boolean
    type: 'general' | 'services' | 'employment'
    value: string
}

export default function CallToAction({
    buttonLabel,
    buttonClass,
    round,
    type,
    value
}: CallToActionProps) {
    const router = useRouter()
    const { setRouteState } = useRouteState()

    const onButtonClick = () => {
        if (type === 'general') {
            return router.push('/contact')
        }

        const config = ContactMap.get(type)
        config.initialValues = { ...config.initialValues, [type]: value }
        setRouteState({ type, value: config.initalValues })
        return router.push(`/contact/${type}`)
    }

    return (
        <Button
            variant="cta"
            className={cn(buttonClass, round ? 'roundButton shadow-xl' : '')}
            onClick={onButtonClick}
        >
            {buttonLabel}
        </Button>
    )
}
