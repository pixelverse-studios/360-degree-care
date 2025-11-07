import { CityServicePage } from '@/components/city/CityServicePage'
import { bergenCountyCompanionCareCities } from '@/lib/content/cities/bergen-county/companion-care'

const content = bergenCountyCompanionCareCities['englewood']

export const metadata = content.metadata

export default function CompanionCareEnglewoodPage() {
    return <CityServicePage content={content} />
}
