import { CityServicePage } from '@/components/city/CityServicePage'
import { monmouthCountyCompanionCareCities } from '@/lib/content/cities/monmouth-county/companion-care'

const content = monmouthCountyCompanionCareCities['long-branch']

export const metadata = content.metadata

export default function CompanionCareLongBranchPage() {
    return <CityServicePage content={content} />
}
