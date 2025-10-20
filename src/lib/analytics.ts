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

type EventPayload = Record<string, unknown>

const isDev = process.env.NODE_ENV !== 'production'
const debugLog = (...args: unknown[]) => {
    if (isDev) {
        console.log(...args)
    }
}

declare global {
    interface Window {
        sitebehaviourTrackingSecret?: string
        // eslint-disable-next-line no-unused-vars
        sbVisitorCustomEvent?: (eventName: string) => void
        siteBehaviourEventMeta?: EventPayload
        siteBehaviourUTM?: CampaignData
    }
}

type AdSourceCode = 'G' | 'M'

type AdSourceInfo = {
    code: AdSourceCode
    id: 'google_ads' | 'meta_ads'
    label: 'Google Ads' | 'Meta Ads'
    eventName: string
}

const AD_SOURCE_PARAM = 'src'
const AD_SOURCE_SESSION_KEY = 'ad_source_last'

const AD_SOURCE_MAP: Record<AdSourceCode, AdSourceInfo> = {
    G: {
        code: 'G',
        id: 'google_ads',
        label: 'Google Ads',
        eventName: 'Ad Source: Google'
    },
    M: {
        code: 'M',
        id: 'meta_ads',
        label: 'Meta Ads',
        eventName: 'Ad Source: Meta'
    }
}

const sendSiteBehaviourEvent = (
    eventName: string,
    payload: EventPayload = {}
): boolean => {
    if (typeof window === 'undefined') return false
    if (typeof (window as any).sbVisitorCustomEvent !== 'function') return false

    try {
        ;(window as any).siteBehaviourEventMeta = payload
        ;(window as any).sbVisitorCustomEvent(eventName)
        debugLog('SiteBehaviour event sent:', eventName, payload)
        return true
    } catch (error) {
        debugLog('SiteBehaviour custom event error:', error)
        return false
    }
}

const enqueueSiteBehaviourEvent = (
    eventName: string,
    payload: EventPayload = {},
    options: { maxAttempts?: number; intervalMs?: number } = {}
) => {
    const { maxAttempts = 20, intervalMs = 500 } = options

    if (sendSiteBehaviourEvent(eventName, payload)) {
        return
    }

    let attempts = 0
    const timer = setInterval(() => {
        attempts += 1
        if (
            sendSiteBehaviourEvent(eventName, payload) ||
            attempts >= maxAttempts
        ) {
            clearInterval(timer)
            if (attempts >= maxAttempts) {
                debugLog(
                    `SiteBehaviour event "${eventName}" not sent after ${
                        (maxAttempts * intervalMs) / 1000
                    }s`
                )
            }
        }
    }, intervalMs)
}

const normalizeAdSource = (
    value: string | null | undefined
): AdSourceInfo | null => {
    if (!value) return null

    const normalized = value.trim().toUpperCase() as AdSourceCode
    return AD_SOURCE_MAP[normalized] ?? null
}

const readTrackedAdSource = () => {
    if (typeof window === 'undefined') return null

    try {
        return window.sessionStorage?.getItem(AD_SOURCE_SESSION_KEY) ?? null
    } catch {
        return null
    }
}

const storeTrackedAdSource = (value: string) => {
    if (typeof window === 'undefined') return

    try {
        window.sessionStorage?.setItem(AD_SOURCE_SESSION_KEY, value)
    } catch {
        // ignore storage issues (private mode etc.)
    }
}

const trackPageView = (url?: string) => {
    if (typeof window === 'undefined') return

    const landingPage = url || window.location.pathname
    debugLog('SiteBehaviour page view:', landingPage)

    if (typeof (window as any).sbVisitorCustomEvent === 'function') {
        try {
            ;(window as any).siteBehaviourEventMeta = {
                landing_page: landingPage
            }
            ;(window as any).sbVisitorCustomEvent('Page View')
        } catch (error) {
            debugLog('SiteBehaviour page view error:', error)
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

const trackEvent = (eventName: string, payload: EventPayload = {}) => {
    if (typeof window === 'undefined') return

    debugLog('Tracking SiteBehaviour event:', eventName, payload)
    enqueueSiteBehaviourEvent(eventName, payload)
}

const trackCampaign = (data?: CampaignData) => {
    if (typeof window === 'undefined') return

    const campaignData =
        data || getCampaignDataFromURL() || getCampaignDataFromCookie()

    if (!campaignData || !Object.keys(campaignData).length) return

    if (Object.keys(campaignData).length > 0) {
        const landingPage =
            (campaignData as CampaignData).landing_page ||
            window.location.pathname

        ;(window as any).siteBehaviourUTM = campaignData

        const eventName = campaignData.utm_campaign
            ? `Campaign: ${campaignData.utm_campaign}`
            : campaignData.utm_source
              ? `Source: ${campaignData.utm_source}`
              : 'Campaign Visit'

        const payload = {
            utm_source: campaignData.utm_source,
            utm_medium: campaignData.utm_medium,
            utm_campaign: campaignData.utm_campaign,
            utm_term: campaignData.utm_term,
            utm_content: campaignData.utm_content,
            landing_page: landingPage
        }

        debugLog('SiteBehaviour UTM tracking:', payload)
        enqueueSiteBehaviourEvent(eventName, payload)
    }
}

const trackAdSource = (
    rawSource: string | null | undefined,
    landingPage?: string
): AdSourceInfo | null => {
    if (typeof window === 'undefined') return null

    const sourceInfo = normalizeAdSource(rawSource)
    if (!sourceInfo) return null

    const lastTracked = readTrackedAdSource()
    if (lastTracked === sourceInfo.id) {
        debugLog('Ad source already tracked for this session:', sourceInfo)
        return sourceInfo
    }

    const destination = landingPage || window.location.pathname
    const payload = {
        source: sourceInfo.id,
        label: sourceInfo.label,
        landing_page: destination
    }

    debugLog('Tracking ad source via SiteBehaviour:', payload)
    enqueueSiteBehaviourEvent(sourceInfo.eventName, payload)
    storeTrackedAdSource(sourceInfo.id)

    return sourceInfo
}

const getAdSourceFromURL = (): AdSourceInfo | null => {
    if (typeof window === 'undefined') return null

    const params = new URLSearchParams(window.location.search)
    return normalizeAdSource(params.get(AD_SOURCE_PARAM))
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
    trackEvent,
    trackCampaign,
    trackAdSource,
    getCampaignDataFromCookie,
    getCampaignDataFromURL,
    getAdSourceFromURL,
    storeCampaignData,
    getFirstTouchAttribution,
    getLastTouchAttribution
}

export default analytics
export type { UTMParams, CampaignData, EventPayload, AdSourceInfo }
