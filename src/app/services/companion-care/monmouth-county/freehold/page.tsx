import { CityServicePage } from '@/components/city/CityServicePage'
import { monmouthCountyCompanionCareCities } from '@/lib/content/cities/monmouth-county/companion-care'

const content = monmouthCountyCompanionCareCities['freehold']

export const metadata = content.metadata

export default function CompanionCareFreeholdPage() {
    return <CityServicePage content={content} />
}
