import type { Metadata } from 'next'
import { nursingServicesMetadata } from '@/lib/seo/nursingServices'
import NursingContent from './NursingContent'

export const metadata: Metadata = nursingServicesMetadata

export default function NursingServicesPage() {
    return <NursingContent />
}
