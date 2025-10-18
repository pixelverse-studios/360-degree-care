import type { ReactNode } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'

import { Button, type ButtonProps } from './ui/button'
import { cn } from '@/lib/utils'
import { navLinks } from '@/utils/routes'

const CallToAction = dynamic(() => import('./CallToAction'), {
    ssr: false
})

type CallToActionButtonProps = Pick<ButtonProps, 'variant' | 'size'> & {
    className?: string
    href: string
    children: ReactNode
}

export function CallToActionButton({
    className,
    variant = 'pillBlue',
    size,
    href,
    children
}: CallToActionButtonProps) {
    const serviceLink = navLinks.find(link => link.route === href)

    const buttonClass = cn('flex gap-2', className)

    if (serviceLink) {
        return (
            <CallToAction
                buttonLabel={children}
                type="services"
                value={serviceLink.label}
                variant={variant}
                buttonClass={buttonClass}
            />
        )
    }

    return (
        <Button variant={variant} size={size} asChild className={buttonClass}>
            <Link href={href}>{children}</Link>
        </Button>
    )
}
