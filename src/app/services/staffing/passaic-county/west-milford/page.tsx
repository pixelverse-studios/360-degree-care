import { CityServicePage } from '@/components/city/CityServicePage'
import { passaicCountyStaffingCities } from '@/lib/content/cities/passaic-county/staffing'

const content = passaicCountyStaffingCities['west-milford']

export const metadata = content.metadata

export default function StaffingWestMilfordPage() {
    return <CityServicePage content={content} />
}
