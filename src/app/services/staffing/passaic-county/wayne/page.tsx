import { CityServicePage } from '@/components/city/CityServicePage'
import { passaicCountyStaffingCities } from '@/lib/content/cities/passaic-county/staffing'

const content = passaicCountyStaffingCities['wayne']

export const metadata = content.metadata

export default function StaffingWaynePage() {
    return <CityServicePage content={content} />
}
