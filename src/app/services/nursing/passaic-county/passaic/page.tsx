import { CityServicePage } from '@/components/city/CityServicePage'
import { passaicCountyNursingCities } from '@/lib/content/cities/passaic-county/nursing'

const content = passaicCountyNursingCities['passaic']

export const metadata = content.metadata

export default function NursingPassaicPage() {
    return <CityServicePage content={content} />
}
