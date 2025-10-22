import { CityServicePage } from '@/components/city/CityServicePage'
import { passaicCountyNursingCities } from '@/lib/content/cities/passaic-county/nursing'

const content = passaicCountyNursingCities['clifton']

export const metadata = content.metadata

export default function NursingCliftonPage() {
    return <CityServicePage content={content} />
}
