'use client'

import { CodeBlock, InlineCode } from '@/components/docs/CodeBlock'

const trackerSnippet = `'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import analytics from '@/lib/analytics'

export function CampaignTracker() {
    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {
        const adSourceParam = searchParams.get('src')
        if (adSourceParam) {
            analytics.trackAdSource(adSourceParam, pathname)
        }
    }, [pathname, searchParams])

    useEffect(() => {
        analytics.trackPageView(pathname)
    }, [pathname])

    return null
}`

const layoutSnippet = `const CampaignTracker = dynamic(
    () =>
        import('@/components/CampaignTracker').then(module => ({
            default: module.CampaignTracker
        })),
    { ssr: false, loading: () => null }
)

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Suspense fallback={null}>
                    <CampaignTracker />
                    <BounceTracker />
                </Suspense>
                {children}
            </body>
        </html>
    )
}`

const qaSnippet = `https://www.360degreecare.net/test-tracking?src=G
https://www.360degreecare.net/test-tracking?src=M`

export default function CampaignTrackingGuide() {
    return (
        <div className="max-w-4xl mx-auto px-4 pt-28 md:pt-32 pb-12 space-y-12">
            <header className="space-y-4">
                <p className="text-sm uppercase tracking-wider text-blue-600 font-semibold">
                    Ads & Analytics
                </p>
                <h1 className="text-4xl font-bold text-gray-900">
                    Campaign Tracking Playbook (src parameter)
                </h1>
                <p className="text-lg text-gray-600">
                    We simplified attribution so digital teams only need to pass
                    a single query parameter: <InlineCode>src</InlineCode>. Use{' '}
                    <InlineCode>?src=G</InlineCode> for Google Ads and{' '}
                    <InlineCode>?src=M</InlineCode> for Meta Ads. The tracker
                    fires a SiteBehaviour event the first time a visitor arrives
                    from each source per session and still records every page
                    view separately.
                </p>
            </header>

            <section className="space-y-6" id="source-codes">
                <h2 className="text-2xl font-semibold text-gray-900">
                    Supported Sources
                </h2>
                <div className="border rounded-lg divide-y">
                    <div className="flex items-center justify-between p-4">
                        <div>
                            <p className="font-semibold text-gray-900">
                                Google Ads
                            </p>
                            <p className="text-sm text-gray-600">
                                Search, Performance Max, or Display traffic.
                            </p>
                        </div>
                        <InlineCode>?src=G</InlineCode>
                    </div>
                    <div className="flex items-center justify-between p-4">
                        <div>
                            <p className="font-semibold text-gray-900">
                                Meta Ads
                            </p>
                            <p className="text-sm text-gray-600">
                                Facebook / Instagram paid placements.
                            </p>
                        </div>
                        <InlineCode>?src=M</InlineCode>
                    </div>
                </div>
                <p className="text-sm text-gray-600">
                    Need another network? Add a new entry to{' '}
                    <InlineCode>AD_SOURCE_MAP</InlineCode> inside{' '}
                    <InlineCode>src/lib/analytics.ts</InlineCode> and supply a
                    unique short code (for example{' '}
                    <InlineCode>?src=TT</InlineCode>).
                </p>
            </section>

            <section className="space-y-4" id="component">
                <h2 className="text-2xl font-semibold text-gray-900">
                    CampaignTracker component
                </h2>
                <p className="text-gray-600">
                    The component does two things: track a source when the query
                    string includes <InlineCode>src=</InlineCode>, and log the
                    current path as a page view.
                </p>
                <CodeBlock
                    filename="src/components/CampaignTracker.tsx"
                    code={trackerSnippet}
                />
            </section>

            <section className="space-y-4" id="layout">
                <h2 className="text-2xl font-semibold text-gray-900">
                    Layout wiring
                </h2>
                <p className="text-gray-600">
                    Import the tracker dynamically so it only runs on the client
                    and doesn’t impact the server bundle. Keep it as high in the
                    tree as possible so every navigation runs through the
                    effect.
                </p>
                <CodeBlock filename="src/app/layout.tsx" code={layoutSnippet} />
            </section>

            <section className="space-y-4" id="qa">
                <h2 className="text-2xl font-semibold text-gray-900">
                    QA checklist
                </h2>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li>
                        Append <InlineCode>?src=G</InlineCode> or{' '}
                        <InlineCode>?src=M</InlineCode> to any URL.
                    </li>
                    <li>
                        Watch the console for{' '}
                        <InlineCode>
                            Tracking ad source via SiteBehaviour
                        </InlineCode>{' '}
                        logs (only once per session per source).
                    </li>
                    <li>
                        Refresh or navigate to another page to see{' '}
                        <InlineCode>SiteBehaviour page view</InlineCode> logs.
                    </li>
                    <li>
                        Repeat with a new browser session if you need to
                        re-trigger the same source.
                    </li>
                </ol>
                <p className="text-gray-600">
                    Internal test links you can use directly:
                </p>
                <CodeBlock
                    filename="Example URLs"
                    language="text"
                    code={qaSnippet}
                />
            </section>

            <section className="space-y-4" id="resources">
                <h2 className="text-2xl font-semibold text-gray-900">
                    Related resources
                </h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>
                        <InlineCode>docs/CAMPAIGN_TRACKER.md</InlineCode> – the
                        same content in Markdown form.
                    </li>
                    <li>
                        <InlineCode>src/lib/analytics.ts</InlineCode> – shared
                        SiteBehaviour helper functions.
                    </li>
                    <li>
                        <a
                            href="/test-tracking"
                            className="text-blue-600 hover:underline"
                        >
                            /test-tracking
                        </a>{' '}
                        – lightweight page for validating source parameters.
                    </li>
                </ul>
            </section>
        </div>
    )
}
