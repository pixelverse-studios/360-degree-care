import { CityServicePage } from '@/components/city/CityServicePage'
import { bergenCountyStaffingCities } from '@/lib/content/cities/bergen-county/staffing'

const content = bergenCountyStaffingCities['westwood']

export const metadata = content.metadata

export default function StaffingWestwoodPage() {
    return <CityServicePage content={content} />
}
