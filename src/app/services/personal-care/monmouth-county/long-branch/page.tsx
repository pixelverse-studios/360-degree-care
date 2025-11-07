import { CityServicePage } from '@/components/city/CityServicePage'
import { monmouthCountyPersonalCareCities } from '@/lib/content/cities/monmouth-county/personal-care'

const content = monmouthCountyPersonalCareCities['long-branch']

export const metadata = content.metadata

export default function PersonalCareLongBranchPage() {
    return <CityServicePage content={content} />
}
