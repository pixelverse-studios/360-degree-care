import { CityServicePage } from '@/components/city/CityServicePage'
import { monmouthCountyNursingCities } from '@/lib/content/cities/monmouth-county/nursing'

const content = monmouthCountyNursingCities['howell']

export const metadata = content.metadata

export default function NursingHowellPage() {
    return <CityServicePage content={content} />
}
