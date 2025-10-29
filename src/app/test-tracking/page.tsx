'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { generateURLExamples } from '@/lib/campaign-utils'
import analytics from '@/lib/analytics'

export default function TestTrackingPage() {
    const [campaignData, setCampaignData] = useState<any>(null)
    const [cookieData, setCookieData] = useState<any>(null)
    const [urlParams, setUrlParams] = useState<any>(null)
    const [examples, setExamples] = useState<any>({})

    useEffect(() => {
        // Use current window location for generating test URLs
        const baseUrl =
            typeof window !== 'undefined'
                ? `${window.location.protocol}//${window.location.host}`
                : 'https://www.360degreecare.net'
        setExamples(generateURLExamples(baseUrl))
    }, [])

    useEffect(() => {
        const urlData = analytics.getCampaignDataFromURL()
        const cookie = analytics.getCampaignDataFromCookie()

        setUrlParams(urlData)
        setCookieData(cookie)

        const firstTouch = analytics.getFirstTouchAttribution()
        const lastTouch = analytics.getLastTouchAttribution()

        setCampaignData({
            current: urlData,
            cookie,
            firstTouch,
            lastTouch
        })
    }, [])

    return (
        <div className="min-h-screen p-8 max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">
                Campaign Tracking Test Page
            </h1>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Test URLs with UTM Parameters
                </h2>
                <p className="text-gray-600 mb-6">
                    Click on these links to test different campaign tracking
                    scenarios:
                </p>

                <div className="space-y-4">
                    <div className="p-4 border rounded-lg bg-gray-50">
                        <h3 className="font-semibold mb-2">
                            Facebook Ad Campaign
                        </h3>
                        {examples.facebook && (
                            <Link
                                href={examples.facebook}
                                className="text-blue-600 hover:underline break-all"
                            >
                                {examples.facebook}
                            </Link>
                        )}
                    </div>

                    <div className="p-4 border rounded-lg bg-gray-50">
                        <h3 className="font-semibold mb-2">
                            Instagram Ad Campaign
                        </h3>
                        {examples.instagram && (
                            <Link
                                href={examples.instagram}
                                className="text-blue-600 hover:underline break-all"
                            >
                                {examples.instagram}
                            </Link>
                        )}
                    </div>

                    <div className="p-4 border rounded-lg bg-gray-50">
                        <h3 className="font-semibold mb-2">Google Search Ad</h3>
                        {examples.googleSearch && (
                            <Link
                                href={examples.googleSearch}
                                className="text-blue-600 hover:underline break-all"
                            >
                                {examples.googleSearch}
                            </Link>
                        )}
                    </div>

                    <div className="p-4 border rounded-lg bg-gray-50">
                        <h3 className="font-semibold mb-2">
                            Google Display Ad
                        </h3>
                        {examples.googleDisplay && (
                            <Link
                                href={examples.googleDisplay}
                                className="text-blue-600 hover:underline break-all"
                            >
                                {examples.googleDisplay}
                            </Link>
                        )}
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Current Tracking Data
                </h2>

                <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                        <h3 className="font-semibold mb-2">
                            URL Parameters (Current Page)
                        </h3>
                        <pre className="bg-gray-100 p-3 rounded overflow-x-auto">
                            {JSON.stringify(urlParams, null, 2)}
                        </pre>
                    </div>

                    <div className="p-4 border rounded-lg">
                        <h3 className="font-semibold mb-2">
                            Cookie Data (Persisted)
                        </h3>
                        <pre className="bg-gray-100 p-3 rounded overflow-x-auto">
                            {JSON.stringify(cookieData, null, 2)}
                        </pre>
                    </div>

                    <div className="p-4 border rounded-lg">
                        <h3 className="font-semibold mb-2">Attribution Data</h3>
                        <div className="space-y-2">
                            <div>
                                <strong>First Touch:</strong>
                                <pre className="bg-gray-100 p-3 rounded mt-1 overflow-x-auto">
                                    {JSON.stringify(
                                        campaignData?.firstTouch,
                                        null,
                                        2
                                    )}
                                </pre>
                            </div>
                            <div>
                                <strong>Last Touch:</strong>
                                <pre className="bg-gray-100 p-3 rounded mt-1 overflow-x-auto">
                                    {JSON.stringify(
                                        campaignData?.lastTouch,
                                        null,
                                        2
                                    )}
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">How to Test</h2>
                <ol className="list-decimal list-inside space-y-2">
                    <li>Click on one of the test URLs above</li>
                    <li>You'll see the UTM parameters appear in the URL</li>
                    <li>Check the browser console for tracking logs</li>
                    <li>The middleware will store campaign data in cookies</li>
                    <li>Google Tag Manager will receive the campaign events</li>
                    <li>SiteBehaviour will track the campaign data</li>
                </ol>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-4">
                    Integration Checklist
                </h2>
                <ul className="list-disc list-inside space-y-2">
                    <li>✅ Middleware captures UTM parameters</li>
                    <li>
                        ✅ Campaign data stored in cookies (30-day expiration)
                    </li>
                    <li>✅ Google Tag Manager receives events</li>
                    <li>✅ SiteBehaviour tracking integrated</li>
                    <li>✅ First-touch attribution tracking</li>
                    <li>✅ Last-touch attribution tracking</li>
                    <li>✅ Session ID generation</li>
                    <li>✅ Landing page tracking</li>
                </ul>
            </section>

            <div className="mt-12 p-6 bg-blue-50 rounded-lg">
                <h3 className="font-semibold mb-2">Note for Production</h3>
                <p>
                    Remember to update the base URL in your campaign URL
                    generation when deploying to production. Use your actual
                    domain (https://www.360degreecare.net) instead of localhost.
                </p>
            </div>
        </div>
    )
}
