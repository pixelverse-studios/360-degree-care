import { CityServicePage } from '@/components/city/CityServicePage'
import { bergenCountyStaffingCities } from '@/lib/content/cities/bergen-county/staffing'

const content = bergenCountyStaffingCities['hackensack']

export const metadata = content.metadata

export default function StaffingHackensackPage() {
    return <CityServicePage content={content} />
}
