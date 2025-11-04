'use client'

import { useState, useEffect } from 'react'
import { TableOfContents } from '@/components/docs/TableOfContents'
import { CodeBlock, InlineCode } from '@/components/docs/CodeBlock'
import { DocSection, DocCard } from '@/components/docs/DocSection'
import { DocSearch } from '@/components/docs/DocSearch'
import {
    Link,
    Copy,
    Check,
    AlertCircle,
    Zap,
    BookOpen,
    Target,
    TrendingUp,
    Facebook,
    Instagram,
    Linkedin,
    Mail,
    Globe,
    Youtube,
    ChevronRight,
    ExternalLink
} from 'lucide-react'

// Platform configurations
const platforms = {
    facebook: {
        name: 'Facebook',
        icon: Facebook,
        color: 'bg-blue-500',
        lightColor: 'bg-blue-50 border-blue-200',
        textColor: 'text-blue-600',
        source: 'facebook',
        medium: 'social-cpc',
        example: 'elder-care-2025',
        content: 'video-testimonial'
    },
    instagram: {
        name: 'Instagram',
        icon: Instagram,
        color: 'bg-gradient-to-br from-purple-600 to-pink-500',
        lightColor: 'bg-pink-50 border-pink-200',
        textColor: 'text-pink-600',
        source: 'instagram',
        medium: 'social-cpc',
        example: 'brand-awareness',
        content: 'stories-vertical'
    },
    google: {
        name: 'Google Search',
        icon: Globe,
        color: 'bg-green-500',
        lightColor: 'bg-green-50 border-green-200',
        textColor: 'text-green-600',
        source: 'google',
        medium: 'search-cpc',
        example: 'home-care-bergen',
        term: 'home-health-aide-nj'
    },
    'google-display': {
        name: 'Google Display',
        icon: Globe,
        color: 'bg-yellow-500',
        lightColor: 'bg-yellow-50 border-yellow-200',
        textColor: 'text-yellow-600',
        source: 'google',
        medium: 'display-cpc',
        example: 'remarketing-30d',
        content: 'banner-728x90'
    },
    linkedin: {
        name: 'LinkedIn',
        icon: Linkedin,
        color: 'bg-blue-700',
        lightColor: 'bg-blue-50 border-blue-200',
        textColor: 'text-blue-700',
        source: 'linkedin',
        medium: 'social-cpc',
        example: 'b2b-partnerships',
        content: 'sponsored-article'
    },
    email: {
        name: 'Email',
        icon: Mail,
        color: 'bg-gray-600',
        lightColor: 'bg-gray-50 border-gray-200',
        textColor: 'text-gray-600',
        source: 'mailchimp',
        medium: 'email',
        example: 'monthly-newsletter',
        content: 'main-cta'
    },
    youtube: {
        name: 'YouTube',
        icon: Youtube,
        color: 'bg-red-600',
        lightColor: 'bg-red-50 border-red-200',
        textColor: 'text-red-600',
        source: 'youtube',
        medium: 'video-cpc',
        example: 'service-explainer',
        content: '30sec-preroll'
    },
    tiktok: {
        name: 'TikTok',
        icon: null, // Using text instead
        color: 'bg-black',
        lightColor: 'bg-gray-50 border-gray-200',
        textColor: 'text-gray-900',
        source: 'tiktok',
        medium: 'social-cpc',
        example: 'gen-z-caregivers',
        content: 'trending-sound'
    }
}

// Table of contents items
const tocItems = [
    { id: 'overview', title: 'Overview', level: 1 },
    { id: 'url-builder', title: 'Interactive URL Builder', level: 1 },
    { id: 'utm-parameters', title: 'Understanding UTM Parameters', level: 1 },
    { id: 'platform-templates', title: 'Platform Templates', level: 1 },
    { id: 'naming-conventions', title: 'Naming Conventions', level: 1 },
    { id: 'common-mistakes', title: 'Common Mistakes', level: 1 },
    { id: 'testing', title: 'Testing Your URLs', level: 1 },
    { id: 'best-practices', title: 'Best Practices', level: 1 },
    { id: 'troubleshooting', title: 'Troubleshooting', level: 1 }
]

export default function CampaignTrackingGuide() {
    const [copiedStates, setCopiedStates] = useState<{
        [key: string]: boolean
    }>({})
    const [selectedPlatform, setSelectedPlatform] = useState('facebook')
    const [urlParams, setUrlParams] = useState({
        source: 'facebook',
        medium: 'social-cpc',
        campaign: '',
        content: '',
        term: ''
    })
    const [generatedUrl, setGeneratedUrl] = useState('')
    const [testUrlStatus, setTestUrlStatus] = useState<
        'idle' | 'testing' | 'success' | 'error'
    >('idle')

    // Update URL when params change
    useEffect(() => {
        const baseUrl = 'https://www.360degreecare.net'
        const params = []

        if (urlParams.source) params.push(`utm_source=${urlParams.source}`)
        if (urlParams.medium) params.push(`utm_medium=${urlParams.medium}`)
        if (urlParams.campaign)
            params.push(`utm_campaign=${urlParams.campaign}`)
        if (urlParams.content) params.push(`utm_content=${urlParams.content}`)
        if (urlParams.term) params.push(`utm_term=${urlParams.term}`)

        const url =
            params.length > 0 ? `${baseUrl}?${params.join('&')}` : baseUrl
        setGeneratedUrl(url)
    }, [urlParams])

    // Handle platform selection
    const handlePlatformSelect = (platformKey: string) => {
        const platform = platforms[platformKey as keyof typeof platforms] as any
        setSelectedPlatform(platformKey)
        setUrlParams({
            source: platform.source,
            medium: platform.medium,
            campaign: platform.example,
            content: platform.content || '',
            term: platform.term || ''
        })
    }

    // Copy to clipboard function
    const copyToClipboard = async (text: string, key: string) => {
        try {
            await navigator.clipboard.writeText(text)
            setCopiedStates({ ...copiedStates, [key]: true })
            setTimeout(() => {
                setCopiedStates(prev => ({ ...prev, [key]: false }))
            }, 2000)
        } catch (err) {
            console.error('Failed to copy:', err)
        }
    }

    // Test URL function
    const testUrl = () => {
        setTestUrlStatus('testing')
        // Open URL in new tab
        window.open(generatedUrl, '_blank')

        // Simulate testing
        setTimeout(() => {
            setTestUrlStatus('success')
            setTimeout(() => {
                setTestUrlStatus('idle')
            }, 3000)
        }, 1500)
    }

    return (
        <main className="">
            <div className="flex">
                {/* Main Content */}
                <div className="flex-1 max-w-5xl mx-auto px-6 lg:px-8 py-12">
                    {/* Search Bar */}
                    <div className="mb-8">
                        <DocSearch />
                    </div>

                    <div className="space-y-8">
                        {/* Header */}
                        <header className="pb-8 border-b border-gray-200">
                            <h1
                                id="overview"
                                className="text-4xl font-bold text-gray-900 mb-4"
                            >
                                Campaign Tracking Guide
                            </h1>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Complete guide for creating and managing
                                campaign tracking URLs for all your marketing
                                channels. Track performance, attribution, and
                                ROI across Facebook, Google, Email, and more.
                            </p>
                        </header>

                        {/* Quick Action Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
                            <DocCard
                                title="Build URL"
                                description="Create tracking URLs instantly"
                                icon={<Link className="w-5 h-5" />}
                            >
                                <a
                                    href="#url-builder"
                                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                                >
                                    Start building →
                                </a>
                            </DocCard>
                            <DocCard
                                title="Platform Templates"
                                description="Pre-configured for all platforms"
                                icon={<BookOpen className="w-5 h-5" />}
                            >
                                <a
                                    href="#platform-templates"
                                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                                >
                                    View templates →
                                </a>
                            </DocCard>
                            <DocCard
                                title="Test URLs"
                                description="Verify tracking is working"
                                icon={<Zap className="w-5 h-5" />}
                            >
                                <a
                                    href="#testing"
                                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                                >
                                    Test now →
                                </a>
                            </DocCard>
                        </div>

                        {/* Interactive URL Builder */}
                        <section>
                            <h2
                                id="url-builder"
                                className="text-2xl font-bold text-gray-900 mb-4"
                            >
                                Interactive URL Builder
                            </h2>

                            <div className="bg-white rounded-lg border border-gray-200 p-6">
                                {/* Platform Selector */}
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-700 mb-3">
                                        Select Platform
                                    </label>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                        {Object.entries(platforms).map(
                                            ([key, platform]) => (
                                                <button
                                                    key={key}
                                                    onClick={() =>
                                                        handlePlatformSelect(
                                                            key
                                                        )
                                                    }
                                                    className={`flex items-center justify-center p-3 rounded-lg border-2 transition-all ${
                                                        selectedPlatform === key
                                                            ? 'border-blue-500 bg-blue-50'
                                                            : 'border-gray-200 hover:border-gray-300'
                                                    }`}
                                                >
                                                    {platform.icon ? (
                                                        <platform.icon className="w-5 h-5 mr-2" />
                                                    ) : (
                                                        <span className="font-bold mr-2">
                                                            TT
                                                        </span>
                                                    )}
                                                    <span className="text-sm font-medium">
                                                        {platform.name}
                                                    </span>
                                                </button>
                                            )
                                        )}
                                    </div>
                                </div>

                                {/* Parameter Inputs */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Source{' '}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            value={urlParams.source}
                                            onChange={e =>
                                                setUrlParams({
                                                    ...urlParams,
                                                    source: e.target.value
                                                })
                                            }
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="e.g., facebook, google, email"
                                        />
                                        <p className="mt-1 text-xs text-gray-500">
                                            Where traffic comes from
                                        </p>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Medium{' '}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            value={urlParams.medium}
                                            onChange={e =>
                                                setUrlParams({
                                                    ...urlParams,
                                                    medium: e.target.value
                                                })
                                            }
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="e.g., cpc, email, social"
                                        />
                                        <p className="mt-1 text-xs text-gray-500">
                                            How traffic arrives
                                        </p>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Campaign{' '}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            value={urlParams.campaign}
                                            onChange={e =>
                                                setUrlParams({
                                                    ...urlParams,
                                                    campaign: e.target.value
                                                })
                                            }
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="e.g., summer-sale, webinar-jan"
                                        />
                                        <p className="mt-1 text-xs text-gray-500">
                                            Campaign name
                                        </p>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Content{' '}
                                            <span className="text-gray-400">
                                                (optional)
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            value={urlParams.content}
                                            onChange={e =>
                                                setUrlParams({
                                                    ...urlParams,
                                                    content: e.target.value
                                                })
                                            }
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="e.g., blue-button, header-link"
                                        />
                                        <p className="mt-1 text-xs text-gray-500">
                                            For A/B testing
                                        </p>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Term{' '}
                                            <span className="text-gray-400">
                                                (optional)
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            value={urlParams.term}
                                            onChange={e =>
                                                setUrlParams({
                                                    ...urlParams,
                                                    term: e.target.value
                                                })
                                            }
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="e.g., running+shoes"
                                        />
                                        <p className="mt-1 text-xs text-gray-500">
                                            For paid search keywords
                                        </p>
                                    </div>
                                </div>

                                {/* Generated URL */}
                                <div className="bg-gray-50 rounded-lg p-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-sm font-medium text-gray-700">
                                            Generated URL
                                        </h3>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() =>
                                                    copyToClipboard(
                                                        generatedUrl,
                                                        'builder'
                                                    )
                                                }
                                                className="flex items-center px-3 py-1 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                                            >
                                                {copiedStates['builder'] ? (
                                                    <>
                                                        <Check className="w-4 h-4 mr-1 text-green-600" />
                                                        <span className="text-sm text-green-600">
                                                            Copied!
                                                        </span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <Copy className="w-4 h-4 mr-1" />
                                                        <span className="text-sm">
                                                            Copy
                                                        </span>
                                                    </>
                                                )}
                                            </button>
                                            <button
                                                onClick={testUrl}
                                                className="flex items-center px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                                            >
                                                <ExternalLink className="w-4 h-4 mr-1" />
                                                <span className="text-sm">
                                                    Test URL
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="bg-white rounded border border-gray-200 p-3">
                                        <code className="text-sm break-all text-gray-800">
                                            {generatedUrl}
                                        </code>
                                    </div>
                                    {testUrlStatus === 'success' && (
                                        <p className="mt-2 text-sm text-green-600 flex items-center">
                                            <Check className="w-4 h-4 mr-1" />
                                            URL opened in new tab - check
                                            console for tracking confirmation
                                        </p>
                                    )}
                                </div>
                            </div>
                        </section>

                        {/* Understanding UTM Parameters */}
                        <section>
                            <h2
                                id="utm-parameters"
                                className="text-2xl font-bold text-gray-900 mb-4"
                            >
                                Understanding UTM Parameters
                            </h2>

                            <div className="space-y-4">
                                <p className="text-gray-600">
                                    UTM parameters are like "return addresses"
                                    for your web traffic. They tell you exactly
                                    where your visitors came from and how they
                                    found you.
                                </p>

                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Parameter
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Purpose
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Examples
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Required
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    utm_source
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-500">
                                                    Identifies WHERE traffic
                                                    comes from
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-500">
                                                    <InlineCode>
                                                        facebook
                                                    </InlineCode>
                                                    ,{' '}
                                                    <InlineCode>
                                                        google
                                                    </InlineCode>
                                                    ,{' '}
                                                    <InlineCode>
                                                        newsletter
                                                    </InlineCode>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                        Yes
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    utm_medium
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-500">
                                                    Identifies HOW traffic
                                                    arrives
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-500">
                                                    <InlineCode>cpc</InlineCode>
                                                    ,{' '}
                                                    <InlineCode>
                                                        email
                                                    </InlineCode>
                                                    ,{' '}
                                                    <InlineCode>
                                                        social
                                                    </InlineCode>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                        Yes
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    utm_campaign
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-500">
                                                    Identifies WHICH campaign
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-500">
                                                    <InlineCode>
                                                        summer-sale
                                                    </InlineCode>
                                                    ,{' '}
                                                    <InlineCode>
                                                        product-launch
                                                    </InlineCode>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                        Yes
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    utm_content
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-500">
                                                    Differentiates similar
                                                    content/links
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-500">
                                                    <InlineCode>
                                                        header-link
                                                    </InlineCode>
                                                    ,{' '}
                                                    <InlineCode>
                                                        blue-button
                                                    </InlineCode>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                                                        Optional
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    utm_term
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-500">
                                                    Identifies paid search
                                                    keywords
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-500">
                                                    <InlineCode>
                                                        home+care
                                                    </InlineCode>
                                                    ,{' '}
                                                    <InlineCode>
                                                        elderly+care
                                                    </InlineCode>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                                                        Optional
                                                    </span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </section>

                        {/* Platform Templates */}
                        <section>
                            <h2
                                id="platform-templates"
                                className="text-2xl font-bold text-gray-900 mb-4"
                            >
                                Platform Templates
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {Object.entries(platforms).map(
                                    ([key, platform]) => {
                                        const p = platform as any
                                        const url = `https://www.360degreecare.net?utm_source=${p.source}&utm_medium=${p.medium}&utm_campaign=[CAMPAIGN-NAME]${p.content ? '&utm_content=[CONTENT]' : ''}${p.term ? '&utm_term=[KEYWORD]' : ''}`

                                        return (
                                            <div
                                                key={key}
                                                className={`border rounded-lg p-4 ${platform.lightColor}`}
                                            >
                                                <div className="flex items-center justify-between mb-3">
                                                    <div className="flex items-center">
                                                        {platform.icon ? (
                                                            <platform.icon
                                                                className={`w-5 h-5 mr-2 ${platform.textColor}`}
                                                            />
                                                        ) : (
                                                            <span className="font-bold mr-2">
                                                                TT
                                                            </span>
                                                        )}
                                                        <h3 className="font-semibold text-gray-900">
                                                            {platform.name}
                                                        </h3>
                                                    </div>
                                                    <button
                                                        onClick={() =>
                                                            copyToClipboard(
                                                                url,
                                                                key
                                                            )
                                                        }
                                                        className="flex items-center px-3 py-1 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors text-sm"
                                                    >
                                                        {copiedStates[key] ? (
                                                            <>
                                                                <Check className="w-4 h-4 mr-1 text-green-600" />
                                                                <span className="text-green-600">
                                                                    Copied!
                                                                </span>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <Copy className="w-4 h-4 mr-1" />
                                                                <span>
                                                                    Copy
                                                                </span>
                                                            </>
                                                        )}
                                                    </button>
                                                </div>
                                                <div className="bg-white rounded p-2 border border-gray-200">
                                                    <code className="text-xs break-all">
                                                        {url}
                                                    </code>
                                                </div>
                                                <div className="mt-2 text-xs text-gray-600">
                                                    <strong>Example:</strong>{' '}
                                                    {platform.example}
                                                </div>
                                            </div>
                                        )
                                    }
                                )}
                            </div>
                        </section>

                        {/* Naming Conventions */}
                        <section>
                            <h2
                                id="naming-conventions"
                                className="text-2xl font-bold text-gray-900 mb-4"
                            >
                                Naming Conventions & Standards
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                    <h3 className="font-semibold text-green-900 mb-3 flex items-center">
                                        <Check className="w-5 h-5 mr-2" />
                                        DO THIS
                                    </h3>
                                    <ul className="space-y-2 text-sm text-green-800">
                                        <li>
                                            ✅ Use lowercase only:{' '}
                                            <InlineCode>facebook</InlineCode>
                                        </li>
                                        <li>
                                            ✅ Use hyphens for spaces:{' '}
                                            <InlineCode>
                                                winter-sale-2025
                                            </InlineCode>
                                        </li>
                                        <li>
                                            ✅ Be consistent: Always use same
                                            source names
                                        </li>
                                        <li>
                                            ✅ Keep it short but descriptive
                                        </li>
                                        <li>
                                            ✅ Use dates wisely:{' '}
                                            <InlineCode>q1-2025</InlineCode>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                                    <h3 className="font-semibold text-red-900 mb-3 flex items-center">
                                        <AlertCircle className="w-5 h-5 mr-2" />
                                        DON'T DO THIS
                                    </h3>
                                    <ul className="space-y-2 text-sm text-red-800">
                                        <li>
                                            ❌ Mixed case:{' '}
                                            <InlineCode>Facebook</InlineCode>
                                        </li>
                                        <li>
                                            ❌ Spaces or special chars:{' '}
                                            <InlineCode>
                                                Winter Sale 2025!
                                            </InlineCode>
                                        </li>
                                        <li>
                                            ❌ Inconsistent naming: Sometimes
                                            fb, sometimes facebook
                                        </li>
                                        <li>
                                            ❌ Too vague:{' '}
                                            <InlineCode>campaign1</InlineCode>
                                        </li>
                                        <li>
                                            ❌ Personal info:{' '}
                                            <InlineCode>johns-test</InlineCode>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <DocSection
                                title="Standard Source Names"
                                defaultOpen={true}
                            >
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                                    <div>
                                        <strong>Facebook:</strong>{' '}
                                        <InlineCode>facebook</InlineCode>
                                    </div>
                                    <div>
                                        <strong>Instagram:</strong>{' '}
                                        <InlineCode>instagram</InlineCode>
                                    </div>
                                    <div>
                                        <strong>Google Ads:</strong>{' '}
                                        <InlineCode>google</InlineCode>
                                    </div>
                                    <div>
                                        <strong>LinkedIn:</strong>{' '}
                                        <InlineCode>linkedin</InlineCode>
                                    </div>
                                    <div>
                                        <strong>TikTok:</strong>{' '}
                                        <InlineCode>tiktok</InlineCode>
                                    </div>
                                    <div>
                                        <strong>Email:</strong>{' '}
                                        <InlineCode>mailchimp</InlineCode>
                                    </div>
                                </div>
                            </DocSection>

                            <DocSection
                                title="Standard Medium Names"
                                defaultOpen={true}
                            >
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                                    <div>
                                        <strong>Paid Social:</strong>{' '}
                                        <InlineCode>social-cpc</InlineCode>
                                    </div>
                                    <div>
                                        <strong>Organic Social:</strong>{' '}
                                        <InlineCode>social</InlineCode>
                                    </div>
                                    <div>
                                        <strong>Paid Search:</strong>{' '}
                                        <InlineCode>search-cpc</InlineCode>
                                    </div>
                                    <div>
                                        <strong>Display:</strong>{' '}
                                        <InlineCode>display-cpc</InlineCode>
                                    </div>
                                    <div>
                                        <strong>Email:</strong>{' '}
                                        <InlineCode>email</InlineCode>
                                    </div>
                                    <div>
                                        <strong>Video:</strong>{' '}
                                        <InlineCode>video-cpc</InlineCode>
                                    </div>
                                </div>
                            </DocSection>
                        </section>

                        {/* Common Mistakes */}
                        <section>
                            <h2
                                id="common-mistakes"
                                className="text-2xl font-bold text-gray-900 mb-4"
                            >
                                Common Mistakes to Avoid
                            </h2>

                            <div className="space-y-4">
                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">
                                        ⚠️ Case Sensitivity Issues
                                    </h3>
                                    <p className="text-gray-700 mb-2">
                                        Google Analytics treats "Facebook" and
                                        "facebook" as separate sources.
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        <strong>Solution:</strong> Always use
                                        lowercase for all UTM parameters.
                                    </p>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">
                                        ⚠️ Copy-Paste Errors
                                    </h3>
                                    <p className="text-gray-700 mb-2">
                                        Reusing old campaign URLs with outdated
                                        parameters (e.g., black_friday_2023 for
                                        a summer campaign).
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        <strong>Solution:</strong> Always create
                                        fresh URLs using our builder tool.
                                    </p>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">
                                        ⚠️ Internal Link Tagging
                                    </h3>
                                    <p className="text-gray-700 mb-2">
                                        Adding UTM parameters to internal site
                                        links creates false sessions and breaks
                                        attribution.
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        <strong>Solution:</strong> Only tag
                                        external links coming TO your site.
                                    </p>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">
                                        ⚠️ Inconsistent Naming
                                    </h3>
                                    <p className="text-gray-700 mb-2">
                                        Using "fb", "Facebook", and "facebook"
                                        for the same source creates fragmented
                                        data.
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        <strong>Solution:</strong> Create and
                                        follow a naming convention document.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Testing Your URLs */}
                        <section>
                            <h2
                                id="testing"
                                className="text-2xl font-bold text-gray-900 mb-4"
                            >
                                Testing Your URLs
                            </h2>

                            <DocSection
                                title="Test URLs - Click to Test"
                                defaultOpen={true}
                            >
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                        <div className="flex-1">
                                            <p className="text-sm font-medium text-gray-900 mb-1">
                                                Basic Test
                                            </p>
                                            <code className="text-xs text-gray-600">
                                                https://www.360degreecare.net?utm_source=test&utm_campaign=basic_test
                                            </code>
                                        </div>
                                        <a
                                            href="https://www.360degreecare.net?utm_source=test&utm_campaign=basic_test"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm ml-4"
                                        >
                                            <ExternalLink className="w-4 h-4 mr-1" />
                                            Test
                                        </a>
                                    </div>

                                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                        <div className="flex-1">
                                            <p className="text-sm font-medium text-gray-900 mb-1">
                                                Facebook Test
                                            </p>
                                            <code className="text-xs text-gray-600">
                                                https://www.360degreecare.net?utm_source=facebook&utm_medium=social&utm_campaign=test_fb
                                            </code>
                                        </div>
                                        <a
                                            href="https://www.360degreecare.net?utm_source=facebook&utm_medium=social&utm_campaign=test_fb"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm ml-4"
                                        >
                                            <ExternalLink className="w-4 h-4 mr-1" />
                                            Test
                                        </a>
                                    </div>

                                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                        <div className="flex-1">
                                            <p className="text-sm font-medium text-gray-900 mb-1">
                                                Full Parameters Test
                                            </p>
                                            <code className="text-xs text-gray-600">
                                                https://www.360degreecare.net?utm_source=test&utm_medium=test&utm_campaign=full_test&utm_content=all_params
                                            </code>
                                        </div>
                                        <a
                                            href="https://www.360degreecare.net?utm_source=test&utm_medium=test&utm_campaign=full_test&utm_content=all_params"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm ml-4"
                                        >
                                            <ExternalLink className="w-4 h-4 mr-1" />
                                            Test
                                        </a>
                                    </div>
                                </div>
                            </DocSection>

                            <DocSection
                                title="How to Verify Tracking"
                                defaultOpen={true}
                            >
                                <ol className="list-decimal list-inside space-y-3 text-gray-600">
                                    <li>
                                        <strong>
                                            Open Browser Developer Tools
                                        </strong>
                                        <p className="text-sm ml-6 mt-1">
                                            Press F12 or right-click → "Inspect"
                                            → Go to "Console" tab
                                        </p>
                                    </li>
                                    <li>
                                        <strong>Click a Test URL Above</strong>
                                        <p className="text-sm ml-6 mt-1">
                                            The URL will open in a new tab
                                        </p>
                                    </li>
                                    <li>
                                        <strong>
                                            Look for Success Messages
                                        </strong>
                                        <div className="ml-6 mt-1">
                                            <CodeBlock
                                                language="javascript"
                                                code={`✅ "Campaign tracked: {your parameters}"
✅ "SiteBehaviour event sent: Campaign: test_campaign"`}
                                            />
                                        </div>
                                    </li>
                                    <li>
                                        <strong>
                                            Check SiteBehaviour Dashboard
                                        </strong>
                                        <p className="text-sm ml-6 mt-1">
                                            Go to Events → Custom Events → Look
                                            for "Campaign: [name]"
                                        </p>
                                    </li>
                                    <li>
                                        <strong>
                                            Verify in Google Analytics
                                        </strong>
                                        <p className="text-sm ml-6 mt-1">
                                            Real-Time → Traffic Sources → See
                                            your test source
                                        </p>
                                    </li>
                                </ol>
                            </DocSection>

                            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                                <p className="text-sm text-blue-800">
                                    <strong>Advanced Testing:</strong> Visit{' '}
                                    <a
                                        href="/test-tracking"
                                        className="underline font-medium"
                                    >
                                        /test-tracking
                                    </a>{' '}
                                    for our interactive testing tool with URL
                                    generation, validation, and live preview
                                    features.
                                </p>
                            </div>
                        </section>

                        {/* Best Practices */}
                        <section>
                            <h2
                                id="best-practices"
                                className="text-2xl font-bold text-gray-900 mb-4"
                            >
                                Best Practices
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <DocCard
                                    title="Document Everything"
                                    icon={<BookOpen className="w-5 h-5" />}
                                >
                                    <ul className="text-sm text-gray-600 space-y-1">
                                        <li>
                                            • Maintain a campaign tracking
                                            spreadsheet
                                        </li>
                                        <li>
                                            • Include date, creator, and
                                            campaign name
                                        </li>
                                        <li>• Note performance metrics</li>
                                        <li>
                                            • Review monthly for consistency
                                        </li>
                                    </ul>
                                </DocCard>

                                <DocCard
                                    title="Test Before Launch"
                                    icon={<Target className="w-5 h-5" />}
                                >
                                    <ul className="text-sm text-gray-600 space-y-1">
                                        <li>
                                            • Always test URLs in incognito mode
                                        </li>
                                        <li>• Verify in analytics dashboard</li>
                                        <li>
                                            • Check console for tracking
                                            confirmation
                                        </li>
                                        <li>
                                            • Validate before spending ad budget
                                        </li>
                                    </ul>
                                </DocCard>

                                <DocCard
                                    title="Be Consistent"
                                    icon={<TrendingUp className="w-5 h-5" />}
                                >
                                    <ul className="text-sm text-gray-600 space-y-1">
                                        <li>
                                            • Use same naming across all
                                            campaigns
                                        </li>
                                        <li>
                                            • Train all team members on
                                            standards
                                        </li>
                                        <li>
                                            • Create a shared naming convention
                                            doc
                                        </li>
                                        <li>
                                            • Regular audits for data quality
                                        </li>
                                    </ul>
                                </DocCard>

                                <DocCard
                                    title="Think Long-term"
                                    icon={<Zap className="w-5 h-5" />}
                                >
                                    <ul className="text-sm text-gray-600 space-y-1">
                                        <li>
                                            • Use descriptive campaign names
                                        </li>
                                        <li>• Avoid temporary abbreviations</li>
                                        <li>
                                            • Consider year-over-year
                                            comparisons
                                        </li>
                                        <li>• Plan for campaign scalability</li>
                                    </ul>
                                </DocCard>
                            </div>
                        </section>

                        {/* Troubleshooting */}
                        <section>
                            <h2
                                id="troubleshooting"
                                className="text-2xl font-bold text-gray-900 mb-4"
                            >
                                Troubleshooting
                            </h2>

                            <div className="space-y-4">
                                <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">
                                        Campaign data not showing in analytics?
                                    </h3>
                                    <ul className="text-sm text-gray-600 space-y-1">
                                        <li>
                                            • Check if URL parameters are
                                            correctly formatted
                                        </li>
                                        <li>
                                            • Verify no spaces or special
                                            characters in parameters
                                        </li>
                                        <li>
                                            • Wait 24-48 hours for data to
                                            appear in reports
                                        </li>
                                        <li>
                                            • Check Real-Time reports for
                                            immediate confirmation
                                        </li>
                                    </ul>
                                </div>

                                <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">
                                        SiteBehaviour events not appearing?
                                    </h3>
                                    <ul className="text-sm text-gray-600 space-y-1">
                                        <li>
                                            • Clear browser cache and cookies
                                        </li>
                                        <li>
                                            • Check browser console for error
                                            messages
                                        </li>
                                        <li>
                                            • Verify SiteBehaviour script is
                                            loaded
                                        </li>
                                        <li>
                                            • Look for "sbVisitorCustomEvent" in
                                            console
                                        </li>
                                    </ul>
                                </div>

                                <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">
                                        Fragmented source/medium data?
                                    </h3>
                                    <ul className="text-sm text-gray-600 space-y-1">
                                        <li>
                                            • Review all active campaigns for
                                            inconsistencies
                                        </li>
                                        <li>
                                            • Create filters in GA to force
                                            lowercase
                                        </li>
                                        <li>
                                            • Update all team members on naming
                                            conventions
                                        </li>
                                        <li>
                                            • Audit and clean up historical data
                                            if needed
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Quick Reference */}
                        <section className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                Quick Reference
                            </h3>
                            <CodeBlock
                                language="text"
                                filename="Quick Reference Template"
                                code={`BASIC TEMPLATE:
https://www.360degreecare.net?utm_source=[source]&utm_medium=[medium]&utm_campaign=[campaign]

COMMON SOURCES:          COMMON MEDIUMS:
facebook                 social-cpc (paid social)
instagram               social (organic social)
google                  search-cpc (paid search)
linkedin                email
tiktok                  display-cpc
email                   referral

NAMING RULES:
✅ lowercase only
✅ use-hyphens-not-spaces
✅ keep-it-short
✅ be-consistent
❌ NO CAPITALS
❌ no spaces or special chars
❌ no personal info

TEST URL:
https://www.360degreecare.net/test-tracking`}
                            />
                        </section>

                        {/* Footer */}
                        <footer className="pt-8 mt-12 border-t border-gray-200">
                            <div className="flex items-center justify-between">
                                <p className="text-sm text-gray-500">
                                    Last updated: September 2025 • Campaign
                                    Tracking Guide v3.0
                                </p>
                                <a
                                    href="/test-tracking"
                                    className="flex items-center text-sm text-blue-600 hover:text-blue-700 font-medium"
                                >
                                    Go to Testing Tool
                                    <ChevronRight className="w-4 h-4 ml-1" />
                                </a>
                            </div>
                        </footer>
                    </div>
                </div>

                {/* Table of Contents - Desktop Only */}
                <aside className="hidden xl:block w-80 p-6">
                    <TableOfContents items={tocItems} />
                </aside>
            </div>
        </main>
    )
}
