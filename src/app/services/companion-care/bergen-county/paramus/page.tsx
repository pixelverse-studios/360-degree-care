import { CityServicePage } from '@/components/city/CityServicePage'
import { bergenCountyCompanionCareCities } from '@/lib/content/cities/bergen-county/companion-care'

const content = bergenCountyCompanionCareCities['paramus']

export const metadata = content.metadata

export default function CompanionCareParamusPage() {
    return <CityServicePage content={content} />
}
