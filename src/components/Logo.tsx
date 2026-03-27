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

const sizeLogoIconClasses = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
    lg: 'h-10 w-10'
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
            Haven Home
            <Home
                className={cn('text-blue', sizeIconClasses[size])}
                strokeWidth={2.5}
                aria-hidden="true"
            />
            Health
        </span>
    )
}

const Logo = ({ invert = false, size = 'md', className }: LogoProps) => {
    return (
        <div
            className={cn(
                invert ? 'bg-primary' : 'bg-transparent',
                'flex items-center gap-2 py-2 px-4',
                className
            )}
        >
            <Home
                className={cn(
                    'flex-shrink-0',
                    sizeLogoIconClasses[size],
                    invert ? 'text-white' : 'text-blue'
                )}
                strokeWidth={2}
                aria-hidden="true"
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
