import { CityServicePage } from '@/components/city/CityServicePage'
import { bergenCountyNursingCities } from '@/lib/content/cities/bergen-county/nursing'

const content = bergenCountyNursingCities['ridgewood']

export const metadata = content.metadata

export default function NursingRidgewoodPage() {
    return <CityServicePage content={content} />
}
