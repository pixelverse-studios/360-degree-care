import { CityServicePage } from '@/components/city/CityServicePage'
import { monmouthCountyHomeHealthAideCities } from '@/lib/content/cities/monmouth-county/home-health-aides'

const content = monmouthCountyHomeHealthAideCities['long-branch']

export const metadata = content.metadata

export default function HomeHealthAideLongBranchPage() {
    return <CityServicePage content={content} />
}
