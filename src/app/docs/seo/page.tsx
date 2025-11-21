import type { Metadata } from 'next'
import { CheckCircle2, Flag, RefreshCcw } from 'lucide-react'
import { AbsoluteUrlQueue } from '@/components/docs/AbsoluteUrlQueue'
import { SeoTocNav } from '@/components/docs/SeoTocNav'
import { Badge } from '@/components/ui/badge'

type TargetSeoUrl = {
    url: string
    targetKeywords: string[]
    owner: string
    notes: string
}

type SeoChange = {
    id: string
    date: string
    title: string
    status: 'Needs follow-up' | 'Monitoring'
    summary: string
    urlsToCheck: string[]
    sourceFiles: string[]
    actionItems: string[]
}

export const metadata: Metadata = {
    title: 'SEO Change Log | 360° Care',
    description:
        'Internal log of SEO-impacting updates so Search Console requests and QA stay organized.',
    robots: {
        index: false,
        follow: false
    }
}

const targetSeoUrls: TargetSeoUrl[] = [
    {
        url: '/services/personal-care/bergen-county',
        targetKeywords: [
            'personal care bergen county',
            'personal care near me'
        ],
        owner: 'Phil',
        notes: 'Primary canonical hub replacing city-level URLs; ensure homepage + nav link with descriptive anchor text.'
    },
    {
        url: '/services/companion-care/essex-county',
        targetKeywords: [
            'companion care essex county',
            'essex caregiver support'
        ],
        owner: 'Phil',
        notes: 'Includes 2024 Essex survey data; watch for “Crawled – currently not indexed” in GSC.'
    },
    {
        url: '/services/nursing/monmouth-county',
        targetKeywords: [
            'private duty nursing monmouth county',
            'monmouth county nurse at home'
        ],
        owner: 'Jeff',
        notes: 'Highlights storm prep + shore traffic contingencies; add backlinks from blog/landing pages.'
    },
    {
        url: '/services/home-health-aides/passaic-county',
        targetKeywords: [
            'home health aide passaic county',
            'winter weather senior care passaic'
        ],
        owner: 'Phil',
        notes: 'Needs Search Console fetch + render after weather copy refresh to confirm no CLS regressions.'
    },
    {
        url: '/services/staffing/ocean-county',
        targetKeywords: [
            'healthcare staffing ocean county',
            'ocean county nurse staffing agency'
        ],
        owner: 'Jeff',
        notes: 'Seasonal staffing shortages messaging; include in sitemap monitoring reports.'
    },
    {
        url: '/blog/nj-caregiver-burnout-report-2025',
        targetKeywords: [
            'caregiver burnout nj 2025',
            'essex monmouth passaic caregiver data'
        ],
        owner: 'Content',
        notes: 'Interlinks to county service hubs; request indexing with “Inspect URL” once published.'
    }
]

const seoChanges: SeoChange[] = [
    {
        id: 'bergen-personal-care-canonical',
        date: '2025-02-18',
        title: 'Bergen County Personal Care Canonicalization',
        status: 'Needs follow-up',
        summary:
            'City-level URLs (Englewood, Paramus, Westwood) were sunset in favor of the `/services/personal-care/bergen-county` hub. Redirect strategy and sitemap exclusions were updated so Google only sees the canonical county experience.',
        urlsToCheck: [
            '/services/personal-care/bergen-county',
            '/services/personal-care/bergen-county/englewood',
            '/services/personal-care/bergen-county/paramus',
            '/services/personal-care/bergen-county/westwood',
            '/sitemap.xml'
        ],
        sourceFiles: [
            'src/app/services/personal-care/bergen-county/page.tsx',
            'src/app/services/personal-care/bergen-county/{englewood|paramus|westwood}/page.tsx (deleted)',
            'src/lib/content/bergen-county-personal-care.ts',
            'next-sitemap.config.mjs',
            'public/sitemap.xml',
            'BERGEN_COUNTY_SEO_IMPLEMENTATION.md'
        ],
        actionItems: [
            'Verify 301s from /services/personal-care/bergen-county/{city} resolve to the county hub, then submit URL removals for the retired slugs.',
            'Request indexing for the county page after confirming internal links and schema render in production.',
            'Resubmit sitemap.xml so Search Console records the reduced route inventory.'
        ]
    },
    {
        id: 'county-copy-refresh',
        date: '2025-02-17',
        title: 'County Service Page Content Refresh',
        status: 'Needs follow-up',
        summary:
            'Companion Care, Elder Care, Home Health Aide, Nursing, Personal Care, and Staffing pages across Bergen, Essex, Monmouth, Passaic, and Ocean counties received rewritten hero copy, survey data, seasonal/weather callouts, and CTA updates. Structured content modules mirror the new copy blocks.',
        urlsToCheck: [
            '/services/companion-care/bergen-county',
            '/services/personal-care/essex-county',
            '/services/home-health-aides/passaic-county',
            '/services/nursing/monmouth-county',
            '/services/staffing/monmouth-county',
            '/services/personal-care/ocean-county'
        ],
        sourceFiles: [
            'src/app/services/{companion-care|elder-care|home-health-aides|nursing|personal-care|staffing}/*-county/page.tsx',
            'src/lib/content/{bergen|essex|monmouth|pasaic|ocean}-county-*.ts',
            'src/lib/content/cities/bergen-county/personal-care.ts',
            'src/components/county/ServiceAreaGrid.tsx'
        ],
        actionItems: [
            'Spot-check each refreshed county route in Search Console and request indexing where coverage still shows “Crawled – currently not indexed.”',
            'Confirm that weather/survey snippets render without hydration warnings to avoid soft 404 classifications.',
            'Rebuild internal linking blocks so Homepage/service hubs reference these counties with descriptive anchor text.'
        ]
    },
    {
        id: 'caregiver-burnout-blog',
        date: '2025-02-16',
        title: 'New 2025 Caregiver Burnout Report Blog',
        status: 'Monitoring',
        summary:
            'Published a long-form county-data report that targets “caregiver burnout NJ” terms with internal links into Essex, Monmouth, and Passaic service pages.',
        urlsToCheck: ['/blog', '/blog/nj-caregiver-burnout-report-2025'],
        sourceFiles: [
            'src/lib/blogs/articles/2025/njCaregiverBurnoutReport.ts',
            'src/lib/blogs/index.ts (import order)',
            'docs/BLOGS.md (reference material)'
        ],
        actionItems: [
            'Inspect the new slug in Search Console and request indexing once the production build is live.',
            'Add the article to any relevant internal CTAs (homepage blog rail, service hubs) to accelerate discovery.',
            'Monitor Search Console for impressions tied to “caregiver burnout nj” and log ranking deltas here.'
        ]
    }
]

const tocItems = [
    { id: 'recent-changes', label: 'SEO Update Log' },
    { id: 'target-urls', label: 'Priority Targets' }
]

export default function SeoDocsPage() {
    return (
        <main className="bg-slate-50">
            <div className="mx-auto max-w-screen-2xl px-6 py-14 lg:grid lg:grid-cols-[15rem,1fr] lg:gap-8 lg:px-10">
                <aside className="hidden lg:block">
                    <SeoTocNav items={tocItems} />
                </aside>

                <div className="space-y-12">
                    <header className="rounded-3xl border border-blue-100 bg-white/80 p-6 shadow-sm backdrop-blur lg:p-8">
                        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                            <div className="space-y-2">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                                    SEO updates log
                                </p>
                                <h1 className="text-4xl font-bold text-slate-900">
                                    Recent changes + indexing queue
                                </h1>
                                <p className="text-base text-slate-600">
                                    Quick reference for what changed, which URLs
                                    to request indexing for, and the follow-up
                                    owners to ping in Search Console.
                                </p>
                            </div>
                            <Badge className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                                Internal tracking
                            </Badge>
                        </div>
                    </header>

                    <div className="space-y-6 scroll-mt-32" id="recent-changes">
                        {seoChanges.map(change => {
                            const changeHighlights = [
                                change.summary,
                                ...change.actionItems
                            ]

                            return (
                                <section
                                    key={change.id}
                                    className="rounded-3xl border border-gray-200 bg-white/80 p-6 shadow-md/50"
                                >
                                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                        <div className="space-y-1">
                                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                                                Update
                                            </p>
                                            <p className="text-3xl font-semibold text-slate-900">
                                                {change.date}
                                            </p>
                                            <p className="text-base text-slate-700">
                                                {change.title}
                                            </p>
                                        </div>
                                        <Badge
                                            variant="secondary"
                                            className="self-start text-blue-50"
                                        >
                                            SEO log
                                        </Badge>
                                    </div>

                                    <div className="mt-6 grid gap-6 lg:grid-cols-2">
                                        <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
                                            <div className="flex items-center justify-between gap-3">
                                                <p className="text-sm font-semibold uppercase tracking-wide text-slate-700">
                                                    What changed
                                                </p>
                                                {change.status ===
                                                'Needs follow-up' ? (
                                                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                                                        <RefreshCcw className="h-4 w-4" />
                                                        Needs follow-up
                                                    </span>
                                                ) : (
                                                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                                                        <CheckCircle2 className="h-4 w-4" />
                                                        Monitoring
                                                    </span>
                                                )}
                                            </div>

                                            <ul className="mt-4 list-disc space-y-3 pl-4 text-sm text-slate-800 marker:text-blue-500">
                                                {changeHighlights.map(item => (
                                                    <li
                                                        key={`${change.id}-${item}`}
                                                    >
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>

                                            <div className="mt-5 rounded-xl border border-slate-200 bg-white px-3 py-2">
                                                <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                                                    Key files / references
                                                </p>
                                                <div className="mt-2 flex flex-wrap gap-2">
                                                    {change.sourceFiles.map(
                                                        file => (
                                                            <span
                                                                key={`${change.id}-${file}`}
                                                                className="rounded-lg bg-slate-100 px-2 py-1 font-mono text-[11px] text-slate-800"
                                                            >
                                                                {file}
                                                            </span>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <AbsoluteUrlQueue
                                            urls={change.urlsToCheck}
                                        />
                                    </div>
                                </section>
                            )
                        })}
                    </div>

                    <section
                        id="target-urls"
                        className="scroll-mt-32 rounded-3xl border border-blue-100 bg-white/80 p-6 shadow-sm"
                    >
                        <div className="flex flex-wrap items-center justify-between gap-3">
                            <div className="flex items-center gap-3">
                                <div className="rounded-2xl bg-blue-50 p-3 text-blue-600">
                                    <Flag className="h-6 w-6" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold text-gray-900">
                                        Priority targets & keyword themes
                                    </h2>
                                    <p className="text-sm text-gray-600">
                                        Move top-to-bottom when filing indexing
                                        requests; notes call out ownership and
                                        caveats.
                                    </p>
                                </div>
                            </div>
                            <Badge
                                variant="secondary"
                                className="text-xs text-blue-50"
                            >
                                {targetSeoUrls.length} active targets
                            </Badge>
                        </div>

                        <div className="mt-6 grid gap-4 md:grid-cols-2">
                            {targetSeoUrls.map(target => (
                                <div
                                    key={target.url}
                                    className="rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-slate-50/60 p-5 shadow-sm"
                                >
                                    <div className="flex items-center justify-between gap-3">
                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-wide text-gray-700">
                                                Owner: {target.owner}
                                            </p>
                                            <h3 className="text-lg font-semibold text-gray-900">
                                                {target.url}
                                            </h3>
                                        </div>
                                        <Badge className="bg-blue-600 text-white">
                                            SEO target
                                        </Badge>
                                    </div>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {target.targetKeywords.map(keyword => (
                                            <Badge
                                                key={`${target.url}-${keyword}`}
                                                variant="outline"
                                                className="border-blue-100 bg-blue-50 text-xs font-medium text-blue-800"
                                            >
                                                {keyword}
                                            </Badge>
                                        ))}
                                    </div>
                                    <p className="mt-4 text-sm text-gray-700">
                                        {target.notes}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
}
