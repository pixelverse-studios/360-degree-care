'use client'

import { useEffect, useRef } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import analytics from '@/lib/analytics'

const SESSION_ENGAGEMENT_KEY = 'sb_session_engaged'
const BOUNCE_THRESHOLD_MS = 15_000
const SCROLL_THRESHOLD = 0.25

export function BounceTracker() {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const search = searchParams?.toString() ?? ''
    const engagementRef = useRef(false)
    const bounceSentRef = useRef(false)
    const startTimeRef = useRef(Date.now())
    const pathRef = useRef(pathname)

    useEffect(() => {
        if (typeof window === 'undefined') return

        const currentPath = search ? `${pathname}?${search}` : pathname

        pathRef.current = currentPath
        startTimeRef.current = Date.now()
        bounceSentRef.current = false

        try {
            engagementRef.current =
                sessionStorage.getItem(SESSION_ENGAGEMENT_KEY) === 'true'
        } catch {
            engagementRef.current = false
        }

        const markEngaged = () => {
            if (engagementRef.current) return
            engagementRef.current = true
            try {
                sessionStorage.setItem(SESSION_ENGAGEMENT_KEY, 'true')
            } catch {
                // Ignore storage write errors (private mode, etc.)
            }
        }

        const handleScroll = () => {
            if (engagementRef.current) return
            const doc = document.documentElement
            const scrollable =
                doc.scrollHeight - window.innerHeight > 0
                    ? doc.scrollHeight - window.innerHeight
                    : 1
            const progress = window.scrollY / scrollable

            if (progress >= SCROLL_THRESHOLD || window.scrollY > 120) {
                markEngaged()
            }
        }

        const handleUserAction = () => {
            markEngaged()
        }

        const sendBounceIfNeeded = () => {
            if (bounceSentRef.current) return
            if (engagementRef.current) return

            const dwellMs = Date.now() - startTimeRef.current
            if (dwellMs >= BOUNCE_THRESHOLD_MS) return

            bounceSentRef.current = true

            analytics.trackEvent('bounce', {
                path: pathRef.current,
                dwellMs,
                referrer: document.referrer || 'direct',
                device: window.innerWidth < 768 ? 'mobile' : 'desktop'
            })
        }

        const handleVisibilityChange = () => {
            if (document.visibilityState === 'hidden') {
                sendBounceIfNeeded()
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        window.addEventListener('click', handleUserAction)
        window.addEventListener('touchstart', handleUserAction)
        window.addEventListener('keydown', handleUserAction)
        window.addEventListener('pagehide', sendBounceIfNeeded)
        window.addEventListener('beforeunload', sendBounceIfNeeded)
        document.addEventListener('visibilitychange', handleVisibilityChange)

        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('click', handleUserAction)
            window.removeEventListener('touchstart', handleUserAction)
            window.removeEventListener('keydown', handleUserAction)
            window.removeEventListener('pagehide', sendBounceIfNeeded)
            window.removeEventListener('beforeunload', sendBounceIfNeeded)
            document.removeEventListener(
                'visibilitychange',
                handleVisibilityChange
            )
        }
    }, [pathname, search])

    return null
}
