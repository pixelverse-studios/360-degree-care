import { CityServicePage } from '@/components/city/CityServicePage'
import { monmouthCountyStaffingCities } from '@/lib/content/cities/monmouth-county/staffing'

const content = monmouthCountyStaffingCities['freehold']

export const metadata = content.metadata

export default function StaffingFreeholdPage() {
    return <CityServicePage content={content} />
}
