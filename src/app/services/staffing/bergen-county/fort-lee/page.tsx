import { CityServicePage } from '@/components/city/CityServicePage'
import { bergenCountyStaffingCities } from '@/lib/content/cities/bergen-county/staffing'

const content = bergenCountyStaffingCities['fort-lee']

export const metadata = content.metadata

export default function StaffingFortLeePage() {
    return <CityServicePage content={content} />
}
