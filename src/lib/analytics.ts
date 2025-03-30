const trackPageView = (url?: string) => {
    if (typeof window !== 'undefined' && (window as any).umami) {
        if (url) {
            ;(window as any).umami.trackView(url)
        } else {
            ;(window as any).umami.trackView(window.location.pathname)
        }
    }
}

const analytics = { trackPageView }
export default analytics
