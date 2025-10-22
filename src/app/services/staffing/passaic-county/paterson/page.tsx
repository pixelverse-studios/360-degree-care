import { CityServicePage } from '@/components/city/CityServicePage'
import { passaicCountyStaffingCities } from '@/lib/content/cities/passaic-county/staffing'

const content = passaicCountyStaffingCities['paterson']

export const metadata = content.metadata

export default function StaffingPatersonPage() {
    return <CityServicePage content={content} />
}
