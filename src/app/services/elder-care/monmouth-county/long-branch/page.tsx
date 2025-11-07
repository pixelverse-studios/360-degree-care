import { CityServicePage } from '@/components/city/CityServicePage'
import { monmouthCountyElderCareCities } from '@/lib/content/cities/monmouth-county/elder-care'

const content = monmouthCountyElderCareCities['long-branch']

export const metadata = content.metadata

export default function ElderCareLongBranchPage() {
    return <CityServicePage content={content} />
}
