'use client'

import { useMemo, useState } from 'react'
import { Download } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type DownloadSitemapButtonProps = {
    urls: string[]
    filename?: string
    className?: string
}

function formatToday() {
    return new Date().toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric'
    })
}

export function DownloadSitemapButton({
    urls,
    filename = '360-degree-care-sitemap-urls.csv',
    className
}: DownloadSitemapButtonProps) {
    const [isDownloading, setIsDownloading] = useState(false)

    const uniqueUrls = useMemo(() => {
        return Array.from(new Set(urls)).filter(Boolean)
    }, [urls])

    const today = useMemo(() => formatToday(), [])

    const handleDownload = () => {
        if (!uniqueUrls.length) return
        setIsDownloading(true)

        try {
            const header = ['url', 'date_edited', 'date_requested'].join(',')
            const rows = uniqueUrls.map(url => [url, today, ''].join(','))
            const csvContent = [header, ...rows].join('\n')
            const blob = new Blob([csvContent], {
                type: 'text/csv;charset=utf-8;'
            })
            const blobUrl = URL.createObjectURL(blob)
            const anchor = document.createElement('a')
            anchor.href = blobUrl
            anchor.download = filename
            anchor.style.display = 'none'
            document.body.appendChild(anchor)
            anchor.click()
            document.body.removeChild(anchor)
            URL.revokeObjectURL(blobUrl)
        } finally {
            setIsDownloading(false)
        }
    }

    return (
        <Button
            variant="secondary"
            size="sm"
            type="button"
            onClick={handleDownload}
            disabled={!uniqueUrls.length || isDownloading}
            className={cn(
                'gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-900 shadow-none hover:bg-blue-100',
                className
            )}
        >
            <Download className="h-4 w-4" />
            Export CSV
        </Button>
    )
}
