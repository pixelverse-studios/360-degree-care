import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
    title: 'Docs Redirect | 360° Care',
    robots: {
        index: false,
        follow: false
    }
}

export default function BlogDocumentationRedirect() {
    redirect('/docs/blogs')
}
