import Image from 'next/image'
import { RotateCw } from 'lucide-react'

import { cn } from '@/lib/utils'

interface LogoProps {
    invert?: boolean
    size?: 'sm' | 'md' | 'lg'
    className?: string
}

interface CompanyNameProps {
    invert?: boolean
    size?: 'sm' | 'md' | 'lg'
    className?: string
}

const sizeTextClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
}

const sizeIconClasses = {
    sm: 'h-[0.5em] w-[0.5em]',
    md: 'h-[0.6em] w-[0.6em]',
    lg: 'h-[0.7em] w-[0.7em]'
}

const sizeWidthClasses = {
    sm: 'w-28 md:w-32',
    md: 'w-1/2 max-w-[20rem]',
    lg: 'w-[22rem]'
}

export const CompanyName = ({
    invert = false,
    size = 'md',
    className
}: CompanyNameProps) => {
    const colorClass = invert ? 'text-white' : 'text-primary'

    return (
        <span
            className={cn(
                'inline-flex font-bold',
                colorClass,
                sizeTextClasses[size],
                className
            )}
        >
            360
            <span>
                <RotateCw
                    className={cn(
                        'flex items-start text-blue transition-all animate-spin-very-slow mt-[2px]',
                        sizeIconClasses[size]
                    )}
                    strokeWidth={4}
                />
            </span>
            Care
        </span>
    )
}

const Logo = ({ invert = false, size = 'md', className }: LogoProps) => {
    const widthClass = invert
        ? 'w-full md:w-fit md:max-w-[20rem]'
        : sizeWidthClasses[size]

    return (
        <div
            className={cn(
                invert ? 'bg-primary' : 'bg-transparent',
                widthClass,
                className
            )}
        >
            <Image
                src="/logo.png"
                alt="360 Care Logo"
                width={400}
                height={160}
                className={cn(
                    'h-auto w-full',
                    invert
                        ? 'drop-shadow-[0_0_4px_rgba(255,255,255,0.6)]'
                        : undefined
                )}
                priority
                sizes="(min-width: 1024px) 20rem, (min-width: 768px) 18rem, 60vw"
            />
        </div>
    )
}

export default Logo
