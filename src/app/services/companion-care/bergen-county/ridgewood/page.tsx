import { CityServicePage } from '@/components/city/CityServicePage'
import { bergenCountyCompanionCareCities } from '@/lib/content/cities/bergen-county/companion-care'

const content = bergenCountyCompanionCareCities['ridgewood']

export const metadata = content.metadata

export default function CompanionCareRidgewoodPage() {
    return <CityServicePage content={content} />
}
