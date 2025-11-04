import type { Metadata } from 'next'

import CampaignTrackingGuide from '@/components/docs/CampaignTrackingGuide'

export const metadata: Metadata = {
    title: 'Campaign Tracking Playbook | 360° Care',
    description:
        'Internal-only campaign tracking patterns, UTM standards, and QA tools for 360° Care marketing.',
    robots: {
        index: false,
        follow: false
    }
}

export default function CampaignTrackingDocsPage() {
    return <CampaignTrackingGuide />
}
