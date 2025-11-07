import { CityServicePage } from '@/components/city/CityServicePage'
import { monmouthCountyNursingCities } from '@/lib/content/cities/monmouth-county/nursing'

const content = monmouthCountyNursingCities['long-branch']

export const metadata = content.metadata

export default function NursingLongBranchPage() {
    return <CityServicePage content={content} />
}
