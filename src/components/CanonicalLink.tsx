'use client'

import Head from 'next/head'
import { usePathname } from 'next/navigation'

const SITE_URL = 'https://www.360degreecare.net'

function buildCanonical(pathname: string | null) {
    if (pathname == null || pathname === '/') {
        return `${SITE_URL}/`
    }

    const normalizedPath =
        pathname.length > 1 && pathname.endsWith('/')
            ? pathname.slice(0, -1)
            : pathname

    return `${SITE_URL}${normalizedPath}`
}

export default function CanonicalLink() {
    const pathname = usePathname()
    const canonicalHref = buildCanonical(pathname)

    return (
        <Head>
            <link rel="canonical" href={canonicalHref} />
        </Head>
    )
}
