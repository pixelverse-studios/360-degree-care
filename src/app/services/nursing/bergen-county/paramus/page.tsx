import { CityServicePage } from '@/components/city/CityServicePage'
import { bergenCountyNursingCities } from '@/lib/content/cities/bergen-county/nursing'

const content = bergenCountyNursingCities['paramus']

export const metadata = content.metadata

export default function NursingParamusPage() {
    return <CityServicePage content={content} />
}
