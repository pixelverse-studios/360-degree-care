import { CityServicePage } from '@/components/city/CityServicePage'
import { bergenCountyCompanionCareCities } from '@/lib/content/cities/bergen-county/companion-care'

const content = bergenCountyCompanionCareCities['teaneck']

export const metadata = content.metadata

export default function CompanionCareTeaneckPage() {
    return <CityServicePage content={content} />
}
