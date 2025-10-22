import { CityServicePage } from '@/components/city/CityServicePage'
import { essexCountyStaffingCities } from '@/lib/content/cities/essex-county/staffing'

const content = essexCountyStaffingCities['east-orange']

export const metadata = content.metadata

export default function StaffingEastOrangePage() {
    return <CityServicePage content={content} />
}
