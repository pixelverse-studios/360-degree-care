import { CityServicePage } from '@/components/city/CityServicePage'
import { monmouthCountyStaffingCities } from '@/lib/content/cities/monmouth-county/staffing'

const content = monmouthCountyStaffingCities['marlboro']

export const metadata = content.metadata

export default function StaffingMarlboroPage() {
    return <CityServicePage content={content} />
}
