'use client'

import { useState, useEffect, useCallback } from 'react'
import { Search } from 'lucide-react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'

interface SearchResult {
    id: string
    title: string
    section: string
    content: string
}

const searchableContent: SearchResult[] = [
    {
        id: 'overview',
        title: 'Overview',
        section: 'Introduction',
        content: 'Blog system built on Next.js 14 with TypeScript'
    },
    {
        id: 'architecture',
        title: 'Architecture',
        section: 'Technical Details',
        content: 'Content storage model using TypeScript files'
    },
    {
        id: 'adding-post',
        title: 'Adding a New Blog Post',
        section: 'How-To Guides',
        content: 'Step-by-step guide to create and publish blog posts'
    },
    {
        id: 'blog-structure',
        title: 'Blog Post Structure',
        section: 'Reference',
        content: 'Interface definition and required fields for blog posts'
    },
    {
        id: 'seo',
        title: 'SEO Optimization',
        section: 'Features',
        content: 'Dynamic metadata, Open Graph tags, Twitter Cards'
    },
    {
        id: 'troubleshooting',
        title: 'Troubleshooting',
        section: 'Support',
        content: 'Common issues and solutions for blog system'
    }
]

export function DocSearch() {
    const [open, setOpen] = useState(false)
    const [query, setQuery] = useState('')
    const [results, setResults] = useState<SearchResult[]>([])

    // Keyboard shortcut
    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen(open => !open)
            }
        }

        document.addEventListener('keydown', down)
        return () => document.removeEventListener('keydown', down)
    }, [])

    // Search functionality
    const performSearch = useCallback((searchQuery: string) => {
        if (searchQuery.length === 0) {
            setResults([])
            return
        }

        const filtered = searchableContent.filter(
            item =>
                item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.content
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase()) ||
                item.section.toLowerCase().includes(searchQuery.toLowerCase())
        )

        setResults(filtered)
    }, [])

    useEffect(() => {
        performSearch(query)
    }, [query, performSearch])

    const handleResultClick = (id: string) => {
        setOpen(false)
        setQuery('')
        // Scroll to the element
        setTimeout(() => {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
    }

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition-colors w-full max-w-sm"
            >
                <Search className="w-4 h-4" />
                <span className="flex-1 text-left">
                    Search documentation...
                </span>
                <kbd className="text-xs bg-white px-1.5 py-0.5 rounded border border-gray-300">
                    ⌘K
                </kbd>
            </button>

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="max-w-2xl p-0">
                    <DialogHeader className="sr-only">
                        <DialogTitle>Search Documentation</DialogTitle>
                    </DialogHeader>
                    <div className="flex items-center gap-3 px-4 py-3 border-b">
                        <Search className="w-5 h-5 text-gray-400" />
                        <Input
                            placeholder="Search documentation..."
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                            className="flex-1 border-0 focus:ring-0 p-0 text-base placeholder:text-gray-400"
                            autoFocus
                        />
                    </div>

                    {query.length > 0 && (
                        <div className="max-h-96 overflow-y-auto p-2">
                            {results.length === 0 ? (
                                <div className="text-center py-8 text-gray-500">
                                    No results found for "{query}"
                                </div>
                            ) : (
                                <div className="space-y-1">
                                    {results.map(result => (
                                        <button
                                            key={result.id}
                                            onClick={() =>
                                                handleResultClick(result.id)
                                            }
                                            className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                                        >
                                            <div className="text-sm text-gray-500">
                                                {result.section}
                                            </div>
                                            <div className="font-medium text-gray-900">
                                                {result.title}
                                            </div>
                                            <div className="text-sm text-gray-600 truncate">
                                                {result.content}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </>
    )
}
