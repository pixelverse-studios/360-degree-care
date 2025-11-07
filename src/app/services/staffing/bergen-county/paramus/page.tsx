import { CityServicePage } from '@/components/city/CityServicePage'
import { bergenCountyStaffingCities } from '@/lib/content/cities/bergen-county/staffing'

const content = bergenCountyStaffingCities['paramus']

export const metadata = content.metadata

export default function StaffingParamusPage() {
    return <CityServicePage content={content} />
}
