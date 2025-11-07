'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'

export default function TestTrackingPage() {
    const [currentSrc, setCurrentSrc] = useState<string | null>(null)
    const [sessionSource, setSessionSource] = useState<string | null>(null)

    const baseUrl =
        typeof window !== 'undefined'
            ? `${window.location.protocol}//${window.location.host}`
            : 'https://www.360degreecare.net'
    const examples = useMemo(
        () => ({
            google: `${baseUrl}/test-tracking?src=G`,
            meta: `${baseUrl}/test-tracking?src=M`
        }),
        [baseUrl]
    )

    useEffect(() => {
        if (typeof window === 'undefined') return
        const params = new URLSearchParams(window.location.search)
        setCurrentSrc(params.get('src'))
        setSessionSource(window.sessionStorage?.getItem('ad_source_last'))
    }, [])

    return (
        <div className="min-h-screen p-8 max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">
                Campaign Tracking Test Page
            </h1>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Test URLs with <code>src</code>
                </h2>
                <p className="text-gray-600 mb-6">
                    Click a link, watch the URL append <code>?src=</code>, and
                    check the console for tracking logs.
                </p>

                <div className="space-y-4">
                    <div className="p-4 border rounded-lg bg-gray-50">
                        <h3 className="font-semibold mb-2">
                            Google Ads (src=G)
                        </h3>
                        <Link
                            href={examples.google}
                            className="text-blue-600 hover:underline break-all"
                        >
                            {examples.google}
                        </Link>
                    </div>

                    <div className="p-4 border rounded-lg bg-gray-50">
                        <h3 className="font-semibold mb-2">Meta Ads (src=M)</h3>
                        <Link
                            href={examples.meta}
                            className="text-blue-600 hover:underline break-all"
                        >
                            {examples.meta}
                        </Link>
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Current Page Parameters
                </h2>
                <div className="p-4 border rounded-lg bg-white">
                    <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">
                        src value
                    </p>
                    <p className="text-3xl font-bold text-gray-900">
                        {currentSrc ? currentSrc : 'None'}
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                        Append <code>?src=G</code> or <code>?src=M</code> to
                        this page’s URL to change the value.
                    </p>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Session Storage Snapshot
                </h2>
                <div className="p-4 border rounded-lg bg-white">
                    <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">
                        ad_source_last
                    </p>
                    <p className="text-xl font-semibold text-gray-900">
                        {sessionSource ?? 'Nothing tracked yet'}
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                        The tracker records a source only once per browser
                        session. Clear storage or open a private window to
                        re-trigger the same network.
                    </p>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">How to Test</h2>
                <ol className="list-decimal list-inside space-y-2">
                    <li>
                        Click a test link (
                        <code className="px-1 py-0.5 bg-gray-100 rounded">
                            src=G
                        </code>{' '}
                        or{' '}
                        <code className="px-1 py-0.5 bg-gray-100 rounded">
                            src=M
                        </code>
                        ).
                    </li>
                    <li>
                        Confirm the URL shows the expected{' '}
                        <code className="px-1 py-0.5 bg-gray-100 rounded">
                            src
                        </code>{' '}
                        query parameter.
                    </li>
                    <li>
                        Open DevTools → Console and look for “Tracking ad source
                        via SiteBehaviour …” plus page-view logs.
                    </li>
                    <li>
                        Reload without an `src` parameter – no ad-source event
                        should fire, but page views continue.
                    </li>
                </ol>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-4">
                    Integration Checklist
                </h2>
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        ✅ Ad URLs include either{' '}
                        <code className="px-1 py-0.5 bg-gray-100 rounded">
                            ?src=G
                        </code>{' '}
                        or{' '}
                        <code className="px-1 py-0.5 bg-gray-100 rounded">
                            ?src=M
                        </code>
                        .
                    </li>
                    <li>
                        ✅{' '}
                        <code className="px-1 py-0.5 bg-gray-100 rounded">
                            CampaignTracker
                        </code>{' '}
                        is rendered in the root layout.
                    </li>
                    <li>
                        ✅ SiteBehaviour (or the analytics endpoint) loads on
                        every page.
                    </li>
                    <li>✅ Session storage resets between QA runs.</li>
                </ul>
            </section>

            <div className="mt-12 p-6 bg-blue-50 rounded-lg">
                <h3 className="font-semibold mb-2">Note for Production</h3>
                <p>
                    Use real production URLs when sharing with paid media teams.
                    They only need to append <code>?src=G</code> or{' '}
                    <code>?src=M</code>; no other UTM parameters are required.
                </p>
            </div>
        </div>
    )
}
