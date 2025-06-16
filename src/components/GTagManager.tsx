// components/GoogleTagManager.jsx
'use client' // This directive is crucial for client-side components in App Router

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

const GTM_ID = 'GTM-PGDVF55CR' // Replace with your actual GTM ID

// Extend the Window interface to include dataLayer
declare global {
    interface Window {
        dataLayer: any[] // You can use a more specific type if you know the structure
    }
}

export default function GoogleTagManager() {
    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {
        // Initialize dataLayer if it doesn't exist
        window.dataLayer = window.dataLayer || []

        // Inject the GTM script for the <head>
        // Check if GTM script is already added to prevent duplicates on fast refreshes/re-renders
        if (!document.querySelector(`script[src*="gtm.js?id=${GTM_ID}"]`)) {
            ;(function (
                w: Window & { [key: string]: any },
                d: Document,
                s: string,
                l: string,
                i: string
            ) {
                w[l] = w[l] || []
                w[l].push({
                    'gtm.start': new Date().getTime(),
                    event: 'gtm.js'
                })
                var f = d.getElementsByTagName(s)[0],
                    j = d.createElement(s) as HTMLScriptElement, // Added type assertion
                    dl = l != 'dataLayer' ? '&l=' + l : ''
                j.async = true
                j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl
                if (f && f.parentNode) {
                    // Add null check for f and f.parentNode
                    f.parentNode.insertBefore(j, f)
                } else {
                    d.head.appendChild(j) // Fallback to appending to head if f is not found
                }
            })(window, document, 'script', 'dataLayer', GTM_ID)
        }
    }, []) // Run GTM script injection only once on component mount

    useEffect(() => {
        // This part ensures that GTM processes new page views with the App Router's soft navigation
        if (window.dataLayer) {
            const pagePath =
                pathname +
                (searchParams.toString() ? `?${searchParams.toString()}` : '')
            window.dataLayer.push({
                event: 'page_view',
                page_path: pagePath
                // You might want to add more details like page_title
                // page_title: document.title
            })
        }
    }, [pathname, searchParams]) // Re-run effect on route changes

    return (
        <>
            {/* GTM (noscript) for <body> */}
            <noscript
                dangerouslySetInnerHTML={{
                    __html: `
            <iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>
          `
                }}
            />
        </>
    )
}
