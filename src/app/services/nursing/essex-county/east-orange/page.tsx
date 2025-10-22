import { CityServicePage } from '@/components/city/CityServicePage'
import { essexCountyNursingCities } from '@/lib/content/cities/essex-county/nursing'

const content = essexCountyNursingCities['east-orange']

export const metadata = content.metadata

export default function NursingEastOrangePage() {
    return <CityServicePage content={content} />
}
