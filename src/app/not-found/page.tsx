import type { Metadata } from 'next'

import Page404Content from '@/components/404Content'

export const metadata: Metadata = {
    title: 'Not Found | 360° Care',
    robots: {
        index: false,
        follow: false
    }
}

export default function NotFoundPage() {
    return <Page404Content />
}
