import type { Metadata } from 'next'
import { homeHealthAidesMetadata } from '@/lib/seo/homeHealthAides'
import HomeHealthAidesContent from './HomeHealthAidesContent'

export const metadata: Metadata = homeHealthAidesMetadata

export default function HomeHealthAidesPage() {
    return <HomeHealthAidesContent />
}
