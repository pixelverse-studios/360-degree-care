interface UTMParams {
    utm_source?: string
    utm_medium?: string
    utm_campaign?: string
    utm_term?: string
    utm_content?: string
}

interface CampaignData extends UTMParams {
    landing_page?: string
    timestamp?: string
    session_id?: string
}

declare global {
    interface Window {
        umami?: any
        dataLayer?: any[]
        sitebehaviourTrackingSecret?: string
    }
}

const trackPageView = (url?: string) => {
    if (typeof window !== 'undefined' && (window as any).umami) {
        if (url) {
            ;(window as any).umami.trackView(url)
        } else {
            ;(window as any).umami.trackView(window.location.pathname)
        }
    }
}

const getCampaignDataFromCookie = (): CampaignData | null => {
    if (typeof window === 'undefined') return null

    const cookies = document.cookie.split(';')
    const campaignCookie = cookies.find(cookie =>
        cookie.trim().startsWith('campaign_data=')
    )

    if (!campaignCookie) return null

    try {
        const value = campaignCookie.split('=')[1]
        return JSON.parse(decodeURIComponent(value))
    } catch {
        return null
    }
}

const getCampaignDataFromURL = (): UTMParams => {
    if (typeof window === 'undefined') return {}

    const params = new URLSearchParams(window.location.search)
    const utmParams: UTMParams = {}

    const utmKeys: (keyof UTMParams)[] = [
        'utm_source',
        'utm_medium',
        'utm_campaign',
        'utm_term',
        'utm_content'
    ]

    utmKeys.forEach(key => {
        const value = params.get(key)
        if (value) {
            utmParams[key] = value.toLowerCase()
        }
    })

    return utmParams
}

const trackCampaign = (data?: CampaignData) => {
    if (typeof window === 'undefined') return

    const campaignData =
        data || getCampaignDataFromURL() || getCampaignDataFromCookie()

    if (!campaignData || !Object.keys(campaignData).length) return

    if (window.dataLayer) {
        window.dataLayer.push({
            event: 'campaign_tracking',
            ...campaignData
        })
    }

    // SiteBehaviour tracking - add UTM params to window for their script to pick up
    if (campaignData && Object.keys(campaignData).length > 0) {
        // Store UTM data in window object for SiteBehaviour to access
        ;(window as any).siteBehaviourUTM = campaignData

        // Trigger a custom event that SiteBehaviour can capture
        const sendToSiteBehaviour = () => {
            if (typeof (window as any).sbVisitorCustomEvent !== 'undefined') {
                try {
                    // Send custom event with campaign name or source
                    const eventName = campaignData.utm_campaign
                        ? `Campaign: ${campaignData.utm_campaign}`
                        : campaignData.utm_source
                          ? `Source: ${campaignData.utm_source}`
                          : 'Campaign Visit'

                    ;(window as any).sbVisitorCustomEvent(eventName)
                    console.log('SiteBehaviour event sent:', eventName)
                    return true
                } catch (error) {
                    console.log('SiteBehaviour custom event error:', error)
                    return false
                }
            }
            return false
        }

        // Try to send immediately
        if (!sendToSiteBehaviour()) {
            console.log('SiteBehaviour not loaded yet - will retry...')
            // Retry logic - wait for SiteBehaviour to load
            let attempts = 0
            const maxAttempts = 20 // 10 seconds total
            const checkInterval = setInterval(() => {
                attempts++
                if (sendToSiteBehaviour() || attempts >= maxAttempts) {
                    clearInterval(checkInterval)
                    if (attempts >= maxAttempts) {
                        console.log(
                            'SiteBehaviour did not load within 10 seconds'
                        )
                    }
                }
            }, 500) // Check every 500ms
        }

        // Also try to add UTM params to the data layer that SiteBehaviour might monitor
        const sbData = {
            event: 'campaign_visit',
            utm_source: campaignData.utm_source,
            utm_medium: campaignData.utm_medium,
            utm_campaign: campaignData.utm_campaign,
            utm_term: campaignData.utm_term,
            utm_content: campaignData.utm_content,
            landing_page:
                (campaignData as CampaignData).landing_page ||
                window.location.pathname
        }

        // Log for debugging
        console.log('SiteBehaviour UTM tracking:', sbData)
    }

    if (typeof (window as any).umami !== 'undefined') {
        ;(window as any).umami.track('campaign', campaignData)
    }
}

const storeCampaignData = (data: CampaignData) => {
    if (typeof window === 'undefined') return

    const existingData = localStorage.getItem('campaign_history')
    const history = existingData ? JSON.parse(existingData) : []

    history.push({
        ...data,
        timestamp: new Date().toISOString()
    })

    if (history.length > 10) {
        history.shift()
    }

    localStorage.setItem('campaign_history', JSON.stringify(history))
}

const getFirstTouchAttribution = (): CampaignData | null => {
    if (typeof window === 'undefined') return null

    const history = localStorage.getItem('campaign_history')
    if (!history) return null

    try {
        const data = JSON.parse(history)
        return data[0] || null
    } catch {
        return null
    }
}

const getLastTouchAttribution = (): CampaignData | null => {
    if (typeof window === 'undefined') return null

    const history = localStorage.getItem('campaign_history')
    if (!history) return null

    try {
        const data = JSON.parse(history)
        return data[data.length - 1] || null
    } catch {
        return null
    }
}

const analytics = {
    trackPageView,
    trackCampaign,
    getCampaignDataFromCookie,
    getCampaignDataFromURL,
    storeCampaignData,
    getFirstTouchAttribution,
    getLastTouchAttribution
}

export default analytics
export type { UTMParams, CampaignData }
