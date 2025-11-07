import { CityServicePage } from '@/components/city/CityServicePage'
import { essexCountyStaffingCities } from '@/lib/content/cities/essex-county/staffing'

const content = essexCountyStaffingCities['west-orange']

export const metadata = content.metadata

export default function StaffingWestOrangePage() {
    return <CityServicePage content={content} />
}
