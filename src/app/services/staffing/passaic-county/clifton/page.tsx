import { CityServicePage } from '@/components/city/CityServicePage'
import { passaicCountyStaffingCities } from '@/lib/content/cities/passaic-county/staffing'

const content = passaicCountyStaffingCities['clifton']

export const metadata = content.metadata

export default function StaffingCliftonPage() {
    return <CityServicePage content={content} />
}
