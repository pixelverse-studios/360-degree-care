import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
    'inline-flex items-center justify-center rounded-md text-md font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
    {
        variants: {
            variant: {
                default:
                    'bg-white text-black shadow hover:bg-primary hover:text-white',
                destructive:
                    'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
                outline:
                    'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
                secondary:
                    'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
                ghost: 'button-ghost border border-[var(--ghost-bg)]',
                link: 'text-primary underline-offset-4 hover:underline duration-300 ease-in-out',
                cta: 'px-6 py-3 border-2 font-bold transition-all duration-200 bg-primary text-secondary-foreground border-primary hover:bg-secondary-foreground hover:text-primary rounded-3xl'
            },
            size: {
                default: 'h-9 px-4 py-2',
                sm: 'h-8 px-3 text-xs',
                lg: 'h-10 px-8',
                icon: 'h-9 w-9'
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
