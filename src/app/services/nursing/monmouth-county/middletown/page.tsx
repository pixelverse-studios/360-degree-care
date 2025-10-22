import { CityServicePage } from '@/components/city/CityServicePage'
import { monmouthCountyNursingCities } from '@/lib/content/cities/monmouth-county/nursing'

const content = monmouthCountyNursingCities['middletown']

export const metadata = content.metadata

export default function NursingMiddletownPage() {
    return <CityServicePage content={content} />
}
