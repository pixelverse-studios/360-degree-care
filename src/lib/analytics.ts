import {
    trackMixpanelEvent,
    trackMixpanelPageView,
    initMixpanel
} from './mixpanel'

type EventPayload = Record<string, unknown>

const isDev = process.env.NODE_ENV !== 'production'
const debugLog = (...args: unknown[]) => {
    if (isDev) {
        console.log(...args)
    }
}

// Initialize Mixpanel on module load (client-side only)
if (typeof window !== 'undefined') {
    initMixpanel()
}

declare global {
    interface Window {
        sitebehaviourTrackingSecret?: string
        // eslint-disable-next-line no-unused-vars
        sbVisitorCustomEvent?: (eventName: string) => void
        siteBehaviourEventMeta?: EventPayload
        dataLayer?: unknown[]
        // eslint-disable-next-line no-unused-vars
        gtag?: (...args: unknown[]) => void
    }
}

type AdSourceCode = 'G' | 'M'

type AdSourceInfo = {
    code: AdSourceCode
    id: 'google_ads' | 'meta_ads'
    label: 'Google Ads' | 'Meta Ads'
    eventName: string
}

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

    // Send to SiteBehaviour
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

    // Mirror to Mixpanel
    trackMixpanelPageView(landingPage)
}

const trackEvent = (eventName: string, payload: EventPayload = {}) => {
    if (typeof window === 'undefined') return

    debugLog('Tracking SiteBehaviour event:', eventName, payload)
    enqueueSiteBehaviourEvent(eventName, payload)

    // Mirror to Mixpanel
    trackMixpanelEvent(eventName, payload)
}

const GOOGLE_ADS_CONVERSION_ID = 'AW-17090471122/KWXmCPy67MsaENLJr9U_'

const trackGoogleAdsConversion = (url?: string): boolean => {
    if (typeof window === 'undefined') return false
    if (typeof window.gtag !== 'function') {
        debugLog('Google Ads gtag not available')
        return false
    }

    try {
        const callback = () => {
            if (typeof url !== 'undefined') {
                window.location.href = url
            }
        }

        window.gtag('event', 'conversion', {
            send_to: GOOGLE_ADS_CONVERSION_ID,
            event_callback: callback
        })

        debugLog('Google Ads conversion tracked:', GOOGLE_ADS_CONVERSION_ID)
        return true
    } catch (error) {
        debugLog('Google Ads conversion error:', error)
        return false
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

    // Mirror to Mixpanel
    trackMixpanelEvent(sourceInfo.eventName, payload)

    return sourceInfo
}

const analytics = {
    trackPageView,
    trackEvent,
    trackAdSource,
    trackGoogleAdsConversion
}

export default analytics
export type { EventPayload, AdSourceInfo }
