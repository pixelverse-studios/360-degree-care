import { CityServicePage } from '@/components/city/CityServicePage'
import { bergenCountyStaffingCities } from '@/lib/content/cities/bergen-county/staffing'

const content = bergenCountyStaffingCities['river-vale']

export const metadata = content.metadata

export default function StaffingRiverValePage() {
    return <CityServicePage content={content} />
}
