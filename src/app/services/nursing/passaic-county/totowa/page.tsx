import { CityServicePage } from '@/components/city/CityServicePage'
import { passaicCountyNursingCities } from '@/lib/content/cities/passaic-county/nursing'

const content = passaicCountyNursingCities['totowa']

export const metadata = content.metadata

export default function NursingTotowaPage() {
    return <CityServicePage content={content} />
}
