import { CityServicePage } from '@/components/city/CityServicePage'
import { bergenCountyStaffingCities } from '@/lib/content/cities/bergen-county/staffing'

const content = bergenCountyStaffingCities['englewood']

export const metadata = content.metadata

export default function StaffingEnglewoodPage() {
    return <CityServicePage content={content} />
}
