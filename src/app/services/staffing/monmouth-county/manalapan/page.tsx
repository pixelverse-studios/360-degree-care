import { CityServicePage } from '@/components/city/CityServicePage'
import { monmouthCountyStaffingCities } from '@/lib/content/cities/monmouth-county/staffing'

const content = monmouthCountyStaffingCities['manalapan']

export const metadata = content.metadata

export default function StaffingManalapanPage() {
    return <CityServicePage content={content} />
}
