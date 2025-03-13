import React from 'react'
import { cn } from '@/lib/utils'
import { RotateCw } from 'lucide-react'

interface LogoProps {
    invert?: boolean
    size?: 'sm' | 'md' | 'lg'
}

export const CompanyName = ({ styles }: { styles: string }) => (
    <span className={cn('text-primary font-bold', styles)}>
        360 Degree Care
    </span>
)

const Logo = ({ invert = false, size = 'md' }: LogoProps) => {
    const sizeClasses = {
        sm: 'text-xl',
        md: 'text-3xl',
        lg: 'text-4xl'
    }

    return (
        <div
            className={cn(
                'flex items-center cursor-pointer transition-transform hover:scale-105',
                invert ? 'text-white' : 'text-primary',
                'font-bold'
            )}
        >
            {/* <div className={cn('flex font-logo', sizeClasses[size])}>
                360
                <div
                    className={cn(
                        'rounded-full border-4 bg-transparent',
                        invert ? 'border-white' : 'border-secondary',
                        size === 'sm'
                            ? 'h-3 w-3 mt-1 ml-0'
                            : size === 'md'
                              ? 'h-4 w-4 mt-2 ml-0'
                              : 'h-5 w-5 mt-2 ml-0'
                    )}
                />
            </div> */}
            <p className={cn('font-logo', sizeClasses[size])}>360</p>
            <RotateCw
                className="text-secondary h-4 w-4 mt-[-1.75rem] mr-2"
                strokeWidth={4}
            />
            <p className={cn('font-logo', sizeClasses[size])}>CARE</p>
        </div>
    )
}

export default Logo
