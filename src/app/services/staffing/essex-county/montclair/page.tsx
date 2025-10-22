import { CityServicePage } from '@/components/city/CityServicePage'
import { essexCountyStaffingCities } from '@/lib/content/cities/essex-county/staffing'

const content = essexCountyStaffingCities['montclair']

export const metadata = content.metadata

export default function StaffingMontclairPage() {
    return <CityServicePage content={content} />
}
