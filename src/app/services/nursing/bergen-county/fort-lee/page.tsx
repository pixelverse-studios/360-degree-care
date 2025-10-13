import { CityServicePage } from '@/components/city/CityServicePage'
import { bergenCountyNursingCities } from '@/lib/content/cities/bergen-county/nursing'

const content = bergenCountyNursingCities['fort-lee']

export const metadata = content.metadata

export default function NursingFortLeePage() {
    return <CityServicePage content={content} />
}
