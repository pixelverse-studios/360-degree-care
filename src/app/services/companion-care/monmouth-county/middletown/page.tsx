import { CityServicePage } from '@/components/city/CityServicePage'
import { monmouthCountyCompanionCareCities } from '@/lib/content/cities/monmouth-county/companion-care'

const content = monmouthCountyCompanionCareCities['middletown']

export const metadata = content.metadata

export default function CompanionCareMiddletownPage() {
    return <CityServicePage content={content} />
}
