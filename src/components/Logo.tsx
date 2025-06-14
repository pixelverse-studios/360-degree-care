import { cn } from '@/lib/utils'
import { RotateCw } from 'lucide-react'

interface LogoProps {
    invert?: boolean
    size?: 'sm' | 'md' | 'lg'
}

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

export const CompanyName = ({
    invert = false,
    size = 'md',
    className
}: CompanyNameProps) => {
    const sizeClasses = {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg'
    }

    const iconClasses = {
        sm: 'h-[0.5em] w-[0.5em]',
        md: 'h-[0.6em] w-[0.6em]',
        lg: 'h-[0.7em] w-[0.7em]'
    }

    const colorClass = invert ? 'text-white' : 'text-primary'

    return (
        <p
            className={cn(
                'inline-flex font-bold',
                colorClass,
                sizeClasses[size],
                className
            )}
        >
            360
            <span className="">
                <RotateCw
                    className={cn(
                        'flex items-start text-blue transition-all animate-spin-very-slow mt-[2px]',
                        iconClasses[size]
                    )}
                    strokeWidth={4}
                />
            </span>
            Care
        </p>
    )
}

const Logo = ({ invert = false, size = 'md' }: LogoProps) => {
    const sizeClasses = {
        sm: 'text-xl',
        md: 'text-3xl',
        lg: 'text-6xl'
    }

    return (
        <div className="animate-fade-in">
            <div
                className={cn(
                    'flex items-center cursor-pointer transition-transform hover:scale-105 font-bold',
                    invert ? 'text-white' : 'text-primary'
                )}
            >
                <p className={cn('font-logo', sizeClasses[size])}>360</p>
                <RotateCw
                    className={cn(
                        'h-4 w-4 mt-[-1.75rem] mr-2 transition-all animate-spin-very-slow',
                        invert ? '' : 'text-blue'
                    )}
                    strokeWidth={4}
                />
                <p className={cn('font-logo', sizeClasses[size])}>CARE</p>
            </div>
        </div>
    )
}

export default Logo
