import { CityServicePage } from '@/components/city/CityServicePage'
import { bergenCountyNursingCities } from '@/lib/content/cities/bergen-county/nursing'

const content = bergenCountyNursingCities['westwood']

export const metadata = content.metadata

export default function NursingWestwoodPage() {
    return <CityServicePage content={content} />
}
