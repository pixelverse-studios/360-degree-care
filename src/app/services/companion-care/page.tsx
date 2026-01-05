import type { Metadata } from 'next'
import { companionCareMetadata } from '@/lib/seo/companionCare'
import CompanionCareContent from './CompanionCareContent'

export const metadata: Metadata = companionCareMetadata

export default function CompanionCarePage() {
    return <CompanionCareContent />
}
