'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import analytics from '@/lib/analytics'

const isDev = process.env.NODE_ENV !== 'production'
const debugLog = (...args: unknown[]) => {
    if (isDev) {
        console.log(...args)
    }
}

export function CampaignTracker() {
    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {
        const utmParams = analytics.getCampaignDataFromURL()
        const hasCampaignData = Object.keys(utmParams).length > 0

        if (hasCampaignData) {
            const campaignData = {
                ...utmParams,
                landing_page: pathname,
                timestamp: new Date().toISOString(),
                session_id:
                    typeof crypto !== 'undefined' && crypto.randomUUID
                        ? crypto.randomUUID()
                        : `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
            }

            analytics.storeCampaignData(campaignData)

            // Make UTM params available globally for SiteBehaviour
            if (typeof window !== 'undefined') {
                ;(window as any).utmParams = utmParams
                ;(window as any).campaignData = campaignData
            }

            analytics.trackCampaign(campaignData)
            debugLog('Campaign tracked:', campaignData)

            // Try to notify SiteBehaviour directly if it's loaded
            const sendToSiteBehaviour = () => {
                if (
                    typeof (window as any).sbVisitorCustomEvent !== 'undefined'
                ) {
                    debugLog('SiteBehaviour found, sending UTM data')
                    // Send a custom event for immediate tracking
                    const eventName = campaignData.utm_campaign
                        ? `Campaign: ${campaignData.utm_campaign}`
                        : campaignData.utm_source
                          ? `Source: ${campaignData.utm_source}`
                          : 'Campaign Visit'
                    ;(window as any).sbVisitorCustomEvent(eventName)
                    debugLog('SiteBehaviour custom event sent:', eventName)
                    return true
                }
                return false
            }

            // Try immediately
            if (!sendToSiteBehaviour()) {
                // If not ready, wait for it to load
                let attempts = 0
                const maxAttempts = 20 // 10 seconds total
                const checkInterval = setInterval(() => {
                    attempts++
                    if (sendToSiteBehaviour() || attempts >= maxAttempts) {
                        clearInterval(checkInterval)
                        if (attempts >= maxAttempts) {
                            debugLog(
                                'SiteBehaviour did not load within 10 seconds'
                            )
                        }
                    }
                }, 500) // Check every 500ms
            }
        } else {
            const cookieData = analytics.getCampaignDataFromCookie()
            if (cookieData) {
                analytics.trackCampaign(cookieData)
                debugLog('Campaign tracked from cookie:', cookieData)
            }
        }
    }, [pathname, searchParams])

    useEffect(() => {
        analytics.trackPageView(pathname)
    }, [pathname])

    return null
}
