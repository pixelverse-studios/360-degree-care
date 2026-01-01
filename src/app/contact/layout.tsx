import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contact 360 Degree Care | Get In Touch for Home Care Services',
    description:
        'Contact 360 Degree Care for home care services in NJ. Call (201) 299-4243 or fill out our form for personal care, companion care, and nursing services.',
    openGraph: {
        title: 'Contact Us | 360 Degree Care',
        description:
            'Reach our home care team in Ridgewood, NJ. Call (201) 299-4243 for personal care, companion care, and nursing services.',
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
