import { CityServicePage } from '@/components/city/CityServicePage'
import { essexCountyStaffingCities } from '@/lib/content/cities/essex-county/staffing'

const content = essexCountyStaffingCities['bloomfield']

export const metadata = content.metadata

export default function StaffingBloomfieldPage() {
    return <CityServicePage content={content} />
}
