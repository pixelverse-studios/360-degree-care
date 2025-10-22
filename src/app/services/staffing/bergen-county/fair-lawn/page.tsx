import { CityServicePage } from '@/components/city/CityServicePage'
import { bergenCountyStaffingCities } from '@/lib/content/cities/bergen-county/staffing'

const content = bergenCountyStaffingCities['fair-lawn']

export const metadata = content.metadata

export default function StaffingFairLawnPage() {
    return <CityServicePage content={content} />
}
