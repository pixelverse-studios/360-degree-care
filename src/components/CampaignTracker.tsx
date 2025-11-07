'use client'

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
}
