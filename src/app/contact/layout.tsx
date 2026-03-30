import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contact Haven Home Health | New Jersey In-Home Care Services',
    description:
        'Contact Haven Home Health to ask about in-home care services, employment opportunities, or general questions. Serving families across New Jersey.',
    openGraph: {
        title: 'Contact Haven Home Health | New Jersey In-Home Care Services',
        description:
            'Contact Haven Home Health to ask about in-home care services, employment opportunities, or general questions. Serving families across New Jersey.',
        type: 'website'
    }
}

export default function ContactLayout({
    children
}: {
    children: React.ReactNode
}) {
    return children
}
