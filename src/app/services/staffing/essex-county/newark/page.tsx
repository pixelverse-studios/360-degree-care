import { CityServicePage } from '@/components/city/CityServicePage'
import { essexCountyStaffingCities } from '@/lib/content/cities/essex-county/staffing'

const content = essexCountyStaffingCities['newark']

export const metadata = content.metadata

export default function StaffingNewarkPage() {
    return <CityServicePage content={content} />
}
