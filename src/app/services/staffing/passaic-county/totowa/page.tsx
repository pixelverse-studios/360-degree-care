import { CityServicePage } from '@/components/city/CityServicePage'
import { passaicCountyStaffingCities } from '@/lib/content/cities/passaic-county/staffing'

const content = passaicCountyStaffingCities['totowa']

export const metadata = content.metadata

export default function StaffingTotowaPage() {
    return <CityServicePage content={content} />
}
