import { CityServicePage } from '@/components/city/CityServicePage'
import { bergenCountyStaffingCities } from '@/lib/content/cities/bergen-county/staffing'

const content = bergenCountyStaffingCities['teaneck']

export const metadata = content.metadata

export default function StaffingTeaneckPage() {
    return <CityServicePage content={content} />
}
