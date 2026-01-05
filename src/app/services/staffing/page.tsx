import type { Metadata } from 'next'
import { staffingServicesMetadata } from '@/lib/seo/staffingServices'
import StaffingContent from './StaffingContent'

export const metadata: Metadata = staffingServicesMetadata

export default function StaffingPage() {
    return <StaffingContent />
}
