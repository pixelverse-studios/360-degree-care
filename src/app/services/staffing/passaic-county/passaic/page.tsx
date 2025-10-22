import { CityServicePage } from '@/components/city/CityServicePage'
import { passaicCountyStaffingCities } from '@/lib/content/cities/passaic-county/staffing'

const content = passaicCountyStaffingCities['passaic']

export const metadata = content.metadata

export default function StaffingPassaicPage() {
    return <CityServicePage content={content} />
}
