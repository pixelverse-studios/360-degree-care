import { CityServicePage } from '@/components/city/CityServicePage'
import { monmouthCountyStaffingCities } from '@/lib/content/cities/monmouth-county/staffing'

const content = monmouthCountyStaffingCities['long-branch']

export const metadata = content.metadata

export default function StaffingLongBranchPage() {
    return <CityServicePage content={content} />
}
