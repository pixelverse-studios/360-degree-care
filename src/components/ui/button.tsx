import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const basePillStyles =
    'h-[3rem] font-bold border-b-8 shadow-lg hover:-translate-y-px active:translate-y-0.5 active:border-b-2 active:shadow-md rounded-3xl'

const buttonVariants = cva(
    // ✨ Base styles updated for better transitions and focus states
    'inline-flex items-center justify-center rounded-md text-md font-medium ring-offset-background transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-balance',
    {
        variants: {
            variant: {
                default: 'bg-white text-black shadow',
                destructive:
                    'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
                outline:
                    'border border-input bg-background shadow-sm hover:bg-secondary',
                secondary:
                    'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
                ghost: 'button-ghost border border-[var(--ghost-bg)]',
                link: 'text-primary underline-offset-4 hover:underline',
                cta: 'px-6 py-3 border-2 font-bold bg-primary text-secondary-foreground border-primary hover:bg-transparent hover:text-primary rounded-3xl',
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
    ghostBg?: string
    ghostText?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            variant,
            size,
            asChild = false,
            ghostBg,
            ghostText,
            ...props
        },
        ref
    ) => {
        const Comp = asChild ? Slot : 'button'

        const dynamicStyles: React.CSSProperties =
            variant === 'ghost' && ghostBg && ghostText
                ? {
                      ['--ghost-bg' as any]: ghostBg,
                      ['--ghost-text' as any]: ghostText,
                      borderColor: ghostBg, // Border matches ghostBg
                      backgroundColor: 'transparent', // Default background transparent
                      color: ghostBg // Text starts as the border color
                  }
                : {}

        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                style={dynamicStyles}
                {...props}
            />
        )
    }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
