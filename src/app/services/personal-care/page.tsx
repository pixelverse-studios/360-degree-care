import type { Metadata } from 'next'
import { personalCareMetadata } from '@/lib/seo/personalCare'
import PersonalCareContent from './PersonalCareContent'

export const metadata: Metadata = personalCareMetadata

export default function PersonalCarePage() {
    return <PersonalCareContent />
}
