'use client'

import { useMemo, useState } from 'react'

import { Check, Copy } from 'lucide-react'

import { Badge } from '@/components/ui/badge'

const fallbackOrigin =
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.360degreecare.net'

const makeAbsoluteUrl = (url: string, origin: string) =>
    url.startsWith('http') ? url : `${origin}${url}`

type AbsoluteUrlQueueProps = {
    urls: string[]
}

export function AbsoluteUrlQueue({ urls }: AbsoluteUrlQueueProps) {
    const [copiedUrl, setCopiedUrl] = useState<string | null>(null)

    const origin = useMemo(() => {
        if (typeof window === 'undefined') return fallbackOrigin
        return window.location.origin || fallbackOrigin
    }, [])

    const handleCopy = async (absoluteUrl: string) => {
        try {
            await navigator.clipboard.writeText(absoluteUrl)
            setCopiedUrl(absoluteUrl)
            setTimeout(
                () =>
                    setCopiedUrl(current =>
                        current === absoluteUrl ? null : current
                    ),
                1500
            )
        } catch (err) {
            console.error('Failed to copy URL:', err)
        }
    }

    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between gap-3">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-slate-700">
                        Indexing queue
                    </p>
                    <p className="text-xs text-slate-500">
                        Priority order; copy lives by the number.
                    </p>
                </div>
                <Badge variant="secondary" className="text-blue-50">
                    {urls.length} URLs
                </Badge>
            </div>

            <div className="mt-4 space-y-3 text-sm text-slate-900">
                {urls.map((url, idx) => {
                    const absoluteUrl = makeAbsoluteUrl(url, origin)
                    const isCopied = copiedUrl === absoluteUrl

                    return (
                        <div
                            key={`${absoluteUrl}-${idx}`}
                            className="flex items-center gap-2"
                        >
                            <div className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 font-mono text-[11px] text-slate-900">
                                <span className="break-all">{absoluteUrl}</span>
                            </div>
                            <button
                                type="button"
                                onClick={() => handleCopy(absoluteUrl)}
                                className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-100"
                                title="Copy URL"
                            >
                                {isCopied ? (
                                    <Check className="h-3.5 w-3.5" />
                                ) : (
                                    <Copy className="h-3.5 w-3.5" />
                                )}
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
