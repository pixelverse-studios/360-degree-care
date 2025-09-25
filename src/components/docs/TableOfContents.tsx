'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface TOCItem {
    id: string
    title: string
    level: number
}

interface TableOfContentsProps {
    items: TOCItem[]
}

export function TableOfContents({ items }: TableOfContentsProps) {
    const [activeId, setActiveId] = useState<string>('')

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id)
                    }
                })
            },
            {
                rootMargin: '-100px 0px -66%',
                threshold: 0
            }
        )

        const headings = document.querySelectorAll('h1, h2, h3')
        headings.forEach(heading => observer.observe(heading))

        return () => observer.disconnect()
    }, [])

    return (
        <nav className="sticky top-24 w-64 h-fit max-h-[calc(100vh-6rem)] overflow-y-auto">
            <div className="text-sm font-semibold mb-4 text-gray-900">
                On this page
            </div>
            <ul className="space-y-1 text-sm">
                {items.map(item => (
                    <li key={item.id}>
                        <a
                            href={`#${item.id}`}
                            onClick={e => {
                                e.preventDefault()
                                document
                                    .getElementById(item.id)
                                    ?.scrollIntoView({ behavior: 'smooth' })
                            }}
                            className={cn(
                                'block py-1.5 px-3 rounded-md transition-colors hover:bg-gray-100',
                                item.level === 1 && 'font-semibold',
                                item.level === 2 && 'pl-6 text-gray-600',
                                item.level === 3 &&
                                    'pl-9 text-gray-500 text-xs',
                                activeId === item.id &&
                                    'bg-blue-50 text-blue-600 font-medium border-l-2 border-blue-600'
                            )}
                        >
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
