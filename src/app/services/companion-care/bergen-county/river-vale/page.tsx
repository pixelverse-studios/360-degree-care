import { CityServicePage } from '@/components/city/CityServicePage'
import { bergenCountyCompanionCareCities } from '@/lib/content/cities/bergen-county/companion-care'

const content = bergenCountyCompanionCareCities['river-vale']

export const metadata = content.metadata

export default function CompanionCareRiverValePage() {
    return <CityServicePage content={content} />
}
