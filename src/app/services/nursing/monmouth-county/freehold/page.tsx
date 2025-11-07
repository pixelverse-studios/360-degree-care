import { CityServicePage } from '@/components/city/CityServicePage'
import { monmouthCountyNursingCities } from '@/lib/content/cities/monmouth-county/nursing'

const content = monmouthCountyNursingCities['freehold']

export const metadata = content.metadata

export default function NursingFreeholdPage() {
    return <CityServicePage content={content} />
}
