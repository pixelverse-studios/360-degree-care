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
        <span
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
        </span>
    )
}

const Logo = ({ invert = false }: LogoProps) => {
    return (
        <div className={cn(invert ? 'bg-primary' : 'bg-transparent', 'flex-1')}>
            <img
                src="/logo.png"
                alt="360 Care Logo"
                className={cn(
                    invert
                        ? 'w-full md:w-fit md:max-w-[20rem] drop-shadow-[0_0_4px_rgba(255,255,255,0.6)]'
                        : 'w-1/2'
                )}
            />
        </div>
    )
}

export default Logo
