import { CityServicePage } from '@/components/city/CityServicePage'
import { bergenCountyCompanionCareCities } from '@/lib/content/cities/bergen-county/companion-care'

const content = bergenCountyCompanionCareCities['westwood']

export const metadata = content.metadata

export default function CompanionCareWestwoodPage() {
    return <CityServicePage content={content} />
}
