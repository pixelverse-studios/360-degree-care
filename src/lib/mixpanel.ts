import mixpanel, { Config } from 'mixpanel-browser'

const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN

let isInitialized = false

const isDev = process.env.NODE_ENV !== 'production'
const debugLog = (...args: unknown[]) => {
    if (isDev) {
        console.log('[Mixpanel]', ...args)
    }
}

/**
 * Initialize Mixpanel. Safe to call multiple times - will only init once.
 */
export const initMixpanel = (): boolean => {
    if (isInitialized) return true
    if (typeof window === 'undefined') return false
    if (!MIXPANEL_TOKEN) {
        debugLog('No MIXPANEL_TOKEN found, skipping initialization')
        return false
    }

    try {
        const config: Partial<Config> = {
            debug: isDev,
            track_pageview: false, // We handle page views manually
            persistence: 'localStorage',
            ignore_dnt: false // Respect Do Not Track
        }

        mixpanel.init(MIXPANEL_TOKEN, config)
        isInitialized = true
        debugLog('Initialized with token:', MIXPANEL_TOKEN.slice(0, 8) + '...')
        return true
    } catch (error) {
        debugLog('Initialization error:', error)
        return false
    }
}

/**
 * Track an event in Mixpanel
 */
export const trackMixpanelEvent = (
    eventName: string,
    properties: Record<string, unknown> = {}
): boolean => {
    if (typeof window === 'undefined') return false
    if (!initMixpanel()) return false

    try {
        mixpanel.track(eventName, {
            ...properties,
            $current_url: window.location.href,
            timestamp: new Date().toISOString()
        })
        debugLog('Event tracked:', eventName, properties)
        return true
    } catch (error) {
        debugLog('Track error:', error)
        return false
    }
}

/**
 * Track a page view in Mixpanel
 */
export const trackMixpanelPageView = (path?: string): boolean => {
    if (typeof window === 'undefined') return false
    if (!initMixpanel()) return false

    const pageUrl = path || window.location.pathname

    try {
        mixpanel.track('Page View', {
            page: pageUrl,
            referrer: document.referrer || 'direct',
            $current_url: window.location.href
        })
        debugLog('Page view tracked:', pageUrl)
        return true
    } catch (error) {
        debugLog('Page view error:', error)
        return false
    }
}

/**
 * Identify a user (for when you have user info from forms, etc.)
 */
export const identifyUser = (
    userId: string,
    traits?: Record<string, unknown>
): boolean => {
    if (typeof window === 'undefined') return false
    if (!initMixpanel()) return false

    try {
        mixpanel.identify(userId)
        if (traits) {
            mixpanel.people.set(traits)
        }
        debugLog('User identified:', userId)
        return true
    } catch (error) {
        debugLog('Identify error:', error)
        return false
    }
}

/**
 * Reset Mixpanel state (e.g., on logout)
 */
export const resetMixpanel = (): void => {
    if (typeof window === 'undefined') return
    if (!isInitialized) return

    try {
        mixpanel.reset()
        debugLog('Reset complete')
    } catch (error) {
        debugLog('Reset error:', error)
    }
}

export default {
    init: initMixpanel,
    track: trackMixpanelEvent,
    trackPageView: trackMixpanelPageView,
    identify: identifyUser,
    reset: resetMixpanel
}
