import { CityServicePage } from '@/components/city/CityServicePage'
import { essexCountyStaffingCities } from '@/lib/content/cities/essex-county/staffing'

const content = essexCountyStaffingCities['irvington']

export const metadata = content.metadata

export default function StaffingIrvingtonPage() {
    return <CityServicePage content={content} />
}
