import { CityServicePage } from '@/components/city/CityServicePage'
import { monmouthCountyStaffingCities } from '@/lib/content/cities/monmouth-county/staffing'

const content = monmouthCountyStaffingCities['howell']

export const metadata = content.metadata

export default function StaffingHowellPage() {
    return <CityServicePage content={content} />
}
