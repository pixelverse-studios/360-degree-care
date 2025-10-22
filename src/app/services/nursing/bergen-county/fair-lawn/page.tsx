import { CityServicePage } from '@/components/city/CityServicePage'
import { bergenCountyNursingCities } from '@/lib/content/cities/bergen-county/nursing'

const content = bergenCountyNursingCities['fair-lawn']

export const metadata = content.metadata

export default function NursingFairLawnPage() {
    return <CityServicePage content={content} />
}
