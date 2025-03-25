'use client'

import * as React from 'react'
import { useState } from 'react'
import * as PopoverPrimitive from '@radix-ui/react-popover'

import { cn } from '@/lib/utils'

const Popover = PopoverPrimitive.Root

const PopoverTrigger = PopoverPrimitive.Trigger

const PopoverAnchor = PopoverPrimitive.Anchor

const PopoverContent = React.forwardRef<
    React.ElementRef<typeof PopoverPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
    <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
            ref={ref}
            align={align}
            sideOffset={sideOffset}
            className={cn(
                'z-50 w-72 rounded-md bg-white-bright p-4 text-primary shadow-xl outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-popover-content-transform-origin]',
                className
            )}
            {...props}
        />
    </PopoverPrimitive.Portal>
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName

interface HoverPopoverProps {
    children: React.ReactNode
    content: React.ReactNode
    align?: 'start' | 'center' | 'end'
    side?: 'top' | 'right' | 'bottom' | 'left'
    className?: string
    openDelay?: number
    closeDelay?: number
}

export function HoverPopover({
    children,
    content,
    align = 'center',
    side = 'bottom',
    className = '',
    openDelay = 300,
    closeDelay = 200
}: HoverPopoverProps) {
    const [open, setOpen] = useState<boolean>(false)
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null)

    const handleMouseEnter = () => {
        if (timeoutId) clearTimeout(timeoutId)
        const id = setTimeout(() => setOpen(true), openDelay)
        setTimeoutId(id)
    }

    const handleMouseLeave = () => {
        if (timeoutId) clearTimeout(timeoutId)
        const id = setTimeout(() => setOpen(false), closeDelay)
        setTimeoutId(id)
    }

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {children}
                </div>
            </PopoverTrigger>
            <PopoverContent
                className={className}
                align={align}
                side={side}
                onMouseEnter={() => {
                    if (timeoutId) clearTimeout(timeoutId)
                    setOpen(true)
                }}
                onMouseLeave={handleMouseLeave}
            >
                {content}
            </PopoverContent>
        </Popover>
    )
}

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor }
