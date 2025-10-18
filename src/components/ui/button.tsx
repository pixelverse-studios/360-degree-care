import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const basePillStyles =
    'h-[3rem] font-bold border-b-8 shadow-lg hover:-translate-y-px active:translate-y-0.5 active:border-b-2 active:shadow-md rounded-3xl'

const buttonVariants = cva(
    'inline-flex items-center justify-center rounded-md text-md font-medium ring-offset-background transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-balance',
    {
        variants: {
            variant: {
                default: 'bg-white text-black shadow',
                destructive:
                    'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
                outline:
                    'border border-input bg-background shadow-sm hover:bg-blue',
                secondary:
                    'bg-blue text-blue-bright shadow-sm hover:bg-blue-muted',
                ghost: 'border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white transition-colors',
                link: 'text-primary underline-offset-4 hover:underline',
                cta: 'px-6 py-3 border-2 font-bold bg-primary text-white border-primary hover:bg-transparent hover:text-primary rounded-3xl',
                glossy: 'bg-gradient-to-b from-primary to-primary text-white border-b-4 border-primary-dark shadow-lg hover:-translate-y-px active:translate-y-0.5 active:border-b-2 active:shadow-md rounded-3xl',
                pillPrimary: cn(
                    'bg-primary text-white border-primary-dark',
                    basePillStyles
                ),
                pillBlue: cn(
                    'bg-blue text-white border-blue-dark',
                    basePillStyles
                ),
                pillGreen: cn(
                    'bg-green text-white border-green-dark',
                    basePillStyles
                )
            },
            size: {
                default: 'h-10 px-4 py-2', // Slightly increased height for better feel
                sm: 'h-9 rounded-md px-3', // Adjusted for consistency
                lg: 'h-11 rounded-md px-8',
                icon: 'h-10 w-10'
            }
        },
        defaultVariants: {
            variant: 'default',
            size: 'default'
        }
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button'

        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
