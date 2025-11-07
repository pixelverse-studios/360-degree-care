import { CityServicePage } from '@/components/city/CityServicePage'
import { passaicCountyNursingCities } from '@/lib/content/cities/passaic-county/nursing'

const content = passaicCountyNursingCities['wayne']

export const metadata = content.metadata

export default function NursingWaynePage() {
    return <CityServicePage content={content} />
}
