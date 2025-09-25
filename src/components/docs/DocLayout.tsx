'use client'

import { useState } from 'react'
import { Menu, X, Home, BookOpen } from 'lucide-react'
import { cn } from '@/lib/utils'
import { DocSearch } from './DocSearch'
import Link from 'next/link'

interface DocLayoutProps {
    children: React.ReactNode
    toc?: React.ReactNode
}

export function DocLayout({ children, toc }: DocLayoutProps) {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    const navigation = [
        { name: 'Overview', href: '#overview' },
        { name: 'Architecture', href: '#architecture' },
        { name: 'Blog Structure', href: '#blog-post-structure' },
        { name: 'Components', href: '#key-components' },
        { name: 'Adding Posts', href: '#adding-a-new-blog-post' },
        { name: 'Features', href: '#features' },
        { name: 'Best Practices', href: '#best-practices' },
        { name: 'Troubleshooting', href: '#troubleshooting' }
    ]

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Mobile Header */}
            <header className="lg:hidden sticky top-0 z-50 bg-white border-b border-gray-200 px-4 py-3">
                <div className="flex items-center justify-between">
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="p-2 -ml-2 rounded-md hover:bg-gray-100"
                    >
                        <Menu className="w-5 h-5" />
                    </button>
                    <Link
                        href="/"
                        className="font-semibold text-gray-900 flex items-center gap-2"
                    >
                        <Home className="w-5 h-5" />
                        360° Care
                    </Link>
                    <div className="w-9" /> {/* Spacer for balance */}
                </div>
            </header>

            <div className="flex">
                {/* Sidebar */}
                <aside
                    className={cn(
                        'fixed inset-y-0 left-0 z-50 w-80 bg-white border-r border-gray-200 transform transition-transform lg:translate-x-0 lg:static lg:z-0',
                        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    )}
                >
                    {/* Sidebar Header */}
                    <div className="flex items-center justify-between p-4 border-b border-gray-200">
                        <Link
                            href="/"
                            className="flex items-center gap-2 font-semibold text-gray-900"
                        >
                            <BookOpen className="w-5 h-5" />
                            Blog Documentation
                        </Link>
                        <button
                            onClick={() => setSidebarOpen(false)}
                            className="p-2 rounded-md hover:bg-gray-100 lg:hidden"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Search */}
                    <div className="p-4">
                        <DocSearch />
                    </div>

                    {/* Navigation */}
                    <nav className="px-4 pb-4">
                        <div className="space-y-1">
                            {navigation.map(item => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={e => {
                                        e.preventDefault()
                                        setSidebarOpen(false)
                                        const id = item.href.replace('#', '')
                                        setTimeout(() => {
                                            document
                                                .getElementById(id)
                                                ?.scrollIntoView({
                                                    behavior: 'smooth'
                                                })
                                        }, 100)
                                    }}
                                    className="block px-3 py-2 text-sm rounded-lg hover:bg-gray-100 text-gray-700 hover:text-gray-900 transition-colors"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </nav>

                    {/* Quick Links */}
                    <div className="p-4 border-t border-gray-200">
                        <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                            Quick Links
                        </div>
                        <div className="space-y-1">
                            <Link
                                href="/blog"
                                className="block px-3 py-2 text-sm rounded-lg hover:bg-gray-100 text-gray-700"
                            >
                                View Blog
                            </Link>
                            <Link
                                href="/"
                                className="block px-3 py-2 text-sm rounded-lg hover:bg-gray-100 text-gray-700"
                            >
                                Back to Site
                            </Link>
                        </div>
                    </div>
                </aside>

                {/* Overlay for mobile */}
                {sidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black/20 z-40 lg:hidden"
                        onClick={() => setSidebarOpen(false)}
                    />
                )}

                {/* Main Content */}
                <main className="flex-1 min-w-0">
                    <div className="max-w-none xl:max-w-7xl xl:mx-auto">
                        <div className="flex">
                            {/* Article */}
                            <article className="flex-1 min-w-0 p-6 lg:p-8 bg-white">
                                <div className="prose prose-gray max-w-none">
                                    {children}
                                </div>
                            </article>

                            {/* Table of Contents - Desktop Only */}
                            {toc && (
                                <aside className="hidden xl:block w-80 p-6">
                                    {toc}
                                </aside>
                            )}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
