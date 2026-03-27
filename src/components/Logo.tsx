import { Home } from 'lucide-react'

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
    sm: 'h-[0.8em] w-[0.8em]',
    md: 'h-[0.9em] w-[0.9em]',
    lg: 'h-[1em] w-[1em]'
}

const sizeLogoTextClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl'
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
                'inline-flex items-center gap-1 font-bold',
                colorClass,
                sizeTextClasses[size],
                className
            )}
        >
            Haven
            <Home
                className={cn('text-blue', sizeIconClasses[size])}
                strokeWidth={2.5}
            />
            Health
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
                'flex items-center justify-center gap-2 py-2 px-4',
                widthClass,
                className
            )}
        >
            <Home
                className={cn(
                    'h-8 w-8 flex-shrink-0',
                    invert ? 'text-white' : 'text-blue'
                )}
                strokeWidth={2}
            />
            <span
                className={cn(
                    'font-bold leading-tight whitespace-nowrap',
                    sizeLogoTextClasses[size],
                    invert ? 'text-white' : 'text-primary'
                )}
            >
                Haven Home Health
            </span>
        </div>
    )
}

export default Logo
