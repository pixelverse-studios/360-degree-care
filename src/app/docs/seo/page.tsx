import type { Metadata } from 'next'
import { SeoTocNav } from '@/components/docs/SeoTocNav'
import { Badge } from '@/components/ui/badge'
import { CheckCircle2, Flag, RefreshCcw } from 'lucide-react'

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
    { id: 'target-urls', label: 'Target URLs & Keywords' },
    { id: 'recent-changes', label: 'Recent SEO Changes' }
]

export default function SeoDocsPage() {
    return (
        <main className="bg-slate-50">
            <div className="max-w-7xl mx-auto px-6 py-16 lg:grid lg:grid-cols-[16rem,1fr] lg:gap-8">
                <aside className="hidden lg:block">
                    <SeoTocNav items={tocItems} />
                </aside>

                <div className="space-y-10">
                    <header className="space-y-4">
                        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                            SEO Change Log
                        </p>
                        <h1 className="text-4xl font-bold text-gray-900">
                            Visibility + Indexation Tracker
                        </h1>
                        <p className="text-lg text-gray-600">
                            Use this page as a running checklist before pinging
                            Search Console. Section one lists every active
                            target URL with the keywords we’re chasing; section
                            two logs the SEO changes that still need manual
                            indexing or QA.
                        </p>
                    </header>

                    <section
                        id="target-urls"
                        className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm scroll-mt-32"
                    >
                        <div className="flex items-center gap-3">
                            <div className="rounded-2xl bg-blue-50 p-3 text-blue-600">
                                <Flag className="h-6 w-6" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold text-gray-900">
                                    Target URLs & Keyword Themes
                                </h2>
                                <p className="text-sm text-gray-600">
                                    Submit these URLs whenever rankings drop or
                                    new content lands. Notes call out ownership
                                    and blocking issues.
                                </p>
                            </div>
                        </div>

                        <div className="mt-6 grid gap-4 md:grid-cols-2">
                            {targetSeoUrls.map(target => (
                                <div
                                    key={target.url}
                                    className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
                                >
                                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-700">
                                        {target.owner}
                                    </p>
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {target.url}
                                    </h3>
                                    <div className="mt-2 flex flex-wrap gap-2">
                                        {target.targetKeywords.map(keyword => (
                                            <Badge
                                                key={`${target.url}-${keyword}`}
                                                variant="outline"
                                                className="border-transparent bg-slate-200 text-xs font-medium text-slate-900"
                                            >
                                                {keyword}
                                            </Badge>
                                        ))}
                                    </div>
                                    <p className="mt-3 text-sm text-gray-700">
                                        {target.notes}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <div className="space-y-6 scroll-mt-32" id="recent-changes">
                        {seoChanges.map(change => (
                            <section
                                key={change.id}
                                className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
                            >
                                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                            <Badge variant="secondary">
                                                {change.date}
                                            </Badge>
                                            {change.status ===
                                            'Needs follow-up' ? (
                                                <span className="inline-flex items-center gap-1 text-amber-600 text-xs font-semibold uppercase tracking-wide">
                                                    <RefreshCcw className="h-4 w-4" />
                                                    Needs follow-up
                                                </span>
                                            ) : (
                                                <span className="inline-flex items-center gap-1 text-green-600 text-xs font-semibold uppercase tracking-wide">
                                                    <CheckCircle2 className="h-4 w-4" />
                                                    Monitoring
                                                </span>
                                            )}
                                        </div>
                                        <h2 className="text-2xl font-semibold text-gray-900">
                                            {change.title}
                                        </h2>
                                        <p className="text-sm text-gray-600">
                                            {change.summary}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-4 grid gap-6 md:grid-cols-2">
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                                            URLs to inspect / submit
                                        </p>
                                        <ul className="mt-2 space-y-2 text-sm text-blue-900">
                                            {change.urlsToCheck.map(url => (
                                                <li
                                                    key={`${change.id}-${url}`}
                                                    className="rounded-lg bg-blue-100/70 px-3 py-2 font-mono text-xs text-blue-900"
                                                >
                                                    {url}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                                            Source files / locations
                                        </p>
                                        <ul className="mt-2 space-y-2 text-sm text-gray-800">
                                            {change.sourceFiles.map(file => (
                                                <li
                                                    key={`${change.id}-${file}`}
                                                    className="rounded-lg bg-slate-100 px-3 py-2 font-mono text-xs text-gray-800"
                                                >
                                                    {file}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                                        Next actions
                                    </p>
                                    <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-gray-700">
                                        {change.actionItems.map(item => (
                                            <li key={`${change.id}-${item}`}>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </section>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}
