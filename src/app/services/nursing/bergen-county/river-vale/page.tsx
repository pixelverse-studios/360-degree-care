import { CityServicePage } from '@/components/city/CityServicePage'
import { bergenCountyNursingCities } from '@/lib/content/cities/bergen-county/nursing'

const content = bergenCountyNursingCities['river-vale']

export const metadata = content.metadata

export default function NursingRiverValePage() {
    return <CityServicePage content={content} />
}
