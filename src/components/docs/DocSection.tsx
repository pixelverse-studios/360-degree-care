'use client'

import { useState } from 'react'
import { ChevronRight, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface DocSectionProps {
    title: string
    children: React.ReactNode
    defaultOpen?: boolean
    className?: string
}

export function DocSection({
    title,
    children,
    defaultOpen = true,
    className
}: DocSectionProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen)

    return (
        <div className={cn('my-4', className)}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 w-full text-left py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors group"
            >
                {isOpen ? (
                    <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-gray-700" />
                ) : (
                    <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-gray-700" />
                )}
                <span className="font-semibold text-gray-900">{title}</span>
            </button>

            {isOpen && (
                <div className="pl-7 pr-3 py-2 animate-in slide-in-from-top-1">
                    {children}
                </div>
            )}
        </div>
    )
}

export function DocCard({
    title,
    description,
    icon,
    children
}: {
    title: string
    description?: string
    icon?: React.ReactNode
    children?: React.ReactNode
}) {
    return (
        <div className="p-6 border border-gray-200 rounded-lg bg-white hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-3">
                {icon && (
                    <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                        {icon}
                    </div>
                )}
                <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">
                        {title}
                    </h3>
                    {description && (
                        <p className="text-sm text-gray-600 mb-3">
                            {description}
                        </p>
                    )}
                    {children}
                </div>
            </div>
        </div>
    )
}
