import type { Metadata } from 'next'
import { elderCareConsultingMetadata } from '@/lib/seo/elderCareConsulting'
import ElderCareContent from './ElderCareContent'

export const metadata: Metadata = elderCareConsultingMetadata

export default function ElderCarePage() {
    return <ElderCareContent />
}
