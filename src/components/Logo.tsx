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
    // Define sizes for the icon and text
    const sizeClasses = {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg'
    }

    const iconSizes = {
        sm: { size: 14 },
        md: { size: 18 },
        lg: { size: 22 }
    }

    // Set color based on invert prop
    const colorClass = invert ? 'text-white' : 'text-primary'

    return (
        <span
            className={cn(
                'inline-flex items-center align-middle font-bold mb-[5px]',
                colorClass,
                sizeClasses[size],
                className
            )}
        >
            360
            <RotateCw
                className="inline-block align-middle h-[16px] w-[16px] mt-[-0.5rem] text-secondary mr-0.5"
                {...iconSizes[size]}
                strokeWidth={4}
            />
            Care
        </span>
    )
}

const Logo = ({ invert = false, size = 'md' }: LogoProps) => {
    const sizeClasses = {
        sm: 'text-xl',
        md: 'text-3xl',
        lg: 'text-4xl'
    }

    return (
        <div>
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
            <div
                className={cn(
                    'flex items-center cursor-pointer transition-transform hover:scale-105',
                    invert ? 'text-white' : 'text-primary',
                    'font-bold'
                )}
            >
                <p className={cn('font-logo', sizeClasses[size])}>360</p>
                <RotateCw
                    className="text-secondary h-4 w-4 mt-[-1.75rem] mr-2 transition-all duration-300 ease-in-out transform hover:rotate-180 hover:scale-110"
                    strokeWidth={4}
                />
                <p className={cn('font-logo', sizeClasses[size])}>CARE</p>
            </div>
            {invert ? null : (
                <p className="text-secondary font-semibold font-logo text-xl italic text-right caring">
                    We <span className="font-bold text-xl italic">CARE</span>
                </p>
            )}
        </div>
    )
}

export default Logo
