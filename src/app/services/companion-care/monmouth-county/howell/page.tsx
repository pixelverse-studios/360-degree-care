import { CityServicePage } from '@/components/city/CityServicePage'
import { monmouthCountyCompanionCareCities } from '@/lib/content/cities/monmouth-county/companion-care'

const content = monmouthCountyCompanionCareCities['howell']

export const metadata = content.metadata

export default function CompanionCareHowellPage() {
    return <CityServicePage content={content} />
}
