import { CityServicePage } from '@/components/city/CityServicePage'
import { bergenCountyNursingCities } from '@/lib/content/cities/bergen-county/nursing'

const content = bergenCountyNursingCities['hackensack']

export const metadata = content.metadata

export default function NursingHackensackPage() {
    return <CityServicePage content={content} />
}
