import { CityServicePage } from '@/components/city/CityServicePage'
import { monmouthCountyStaffingCities } from '@/lib/content/cities/monmouth-county/staffing'

const content = monmouthCountyStaffingCities['middletown']

export const metadata = content.metadata

export default function StaffingMiddletownPage() {
    return <CityServicePage content={content} />
}
