import type { Metadata } from 'next'
import Link from 'next/link'
import type { LucideIcon } from 'lucide-react'
import { ArrowRight, BookOpen, Share2 } from 'lucide-react'

import { Badge } from '@/components/ui/badge'

type DocEntry = {
    title: string
    description: string
    href: string
    tags: string[]
    source?: string
}

type DocSection = {
    title: string
    description: string
    icon: LucideIcon
    docs: DocEntry[]
}

export const metadata: Metadata = {
    title: 'Documentation Hub | 360° Care',
    description:
        'Central directory for 360° Care internal documentation with quick links into each guide.',
    robots: {
        index: false,
        follow: false
    }
}

const docSections: DocSection[] = [
    {
        title: 'Content & Publishing',
        description:
            'Guides for writing, reviewing, and shipping new on-site content modules.',
        icon: BookOpen,
        docs: [
            {
                title: 'Blog System Documentation',
                description:
                    'Architecture, workflow, and best practices for our TypeScript-based blog stack.',
                href: '/docs/blogs',
                tags: ['Blogs', 'Editorial'],
                source: 'docs/BLOGS.md'
            }
        ]
    },
    {
        title: 'Analytics & Attribution',
        description:
            'Campaign instrumentation, UTM conventions, and QA steps for paid media.',
        icon: Share2,
        docs: [
            {
                title: 'Campaign Tracking Playbook',
                description:
                    'Source parameter tracking, SiteBehaviour hooks, and runbook-level QA.',
                href: '/docs/campaign-tracking',
                tags: ['Analytics', 'UTM'],
                source: 'docs/CAMPAIGN_TRACKER.md'
            },
            {
                title: 'SEO Change Log',
                description:
                    'Live tracker for target URLs, canonical updates, and Search Console submissions.',
                href: '/docs/seo',
                tags: ['SEO', 'Indexing'],
                source: 'src/app/docs/seo/page.tsx'
            }
        ]
    }
]

export default function DocsIndexPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <div className="max-w-6xl mx-auto px-6 py-16 space-y-12">
                <header className="text-center space-y-4">
                    <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                        Internal Knowledge Base
                    </p>
                    <h1 className="text-4xl font-bold text-gray-900">
                        Documentation Hub
                    </h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Start every operational workflow from a single
                        directory. These curated guides cover content
                        production, campaign attribution, and the systems they
                        depend on.
                    </p>
                </header>

                <div className="space-y-8">
                    {docSections.map(section => (
                        <section
                            key={section.title}
                            className="border border-gray-200 rounded-3xl bg-white p-6 shadow-sm"
                        >
                            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="rounded-2xl bg-blue-50 p-3 text-blue-600">
                                        <section.icon className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-semibold text-gray-900">
                                            {section.title}
                                        </h2>
                                        <p className="text-sm text-gray-600">
                                            {section.description}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 grid gap-4 md:grid-cols-2">
                                {section.docs.map(doc => (
                                    <Link
                                        key={doc.title}
                                        href={doc.href}
                                        className="group rounded-2xl border border-gray-200 p-5 transition hover:-translate-y-0.5 hover:border-blue-400 hover:shadow-lg"
                                    >
                                        <div className="flex items-start justify-between gap-3">
                                            <div>
                                                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                                                    {section.title}
                                                </p>
                                                <h3 className="mt-1 text-lg font-semibold text-gray-900 group-hover:text-blue-700">
                                                    {doc.title}
                                                </h3>
                                                <p className="mt-2 text-sm text-gray-600">
                                                    {doc.description}
                                                </p>
                                            </div>
                                            <ArrowRight className="mt-1 h-5 w-5 text-gray-300 transition group-hover:text-blue-500" />
                                        </div>

                                        <div className="mt-4 flex flex-wrap items-center gap-2">
                                            {doc.tags.map(tag => (
                                                <Badge
                                                    key={`${doc.title}-${tag}`}
                                                    variant="outline"
                                                    className="text-xs"
                                                >
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>

                                        {doc.source && (
                                            <p className="mt-3 text-xs font-mono text-gray-500">
                                                Source: {doc.source}
                                            </p>
                                        )}
                                    </Link>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </main>
    )
}
