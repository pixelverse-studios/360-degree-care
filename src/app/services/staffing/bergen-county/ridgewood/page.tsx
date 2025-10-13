import { CityServicePage } from '@/components/city/CityServicePage'
import { bergenCountyStaffingCities } from '@/lib/content/cities/bergen-county/staffing'

const content = bergenCountyStaffingCities['ridgewood']

export const metadata = content.metadata

export default function StaffingRidgewoodPage() {
    return <CityServicePage content={content} />
}
