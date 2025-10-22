import { CityServicePage } from '@/components/city/CityServicePage'
import { bergenCountyNursingCities } from '@/lib/content/cities/bergen-county/nursing'

const content = bergenCountyNursingCities['teaneck']

export const metadata = content.metadata

export default function NursingTeaneckPage() {
    return <CityServicePage content={content} />
}
