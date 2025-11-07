import { CityServicePage } from '@/components/city/CityServicePage'
import { essexCountyNursingCities } from '@/lib/content/cities/essex-county/nursing'

const content = essexCountyNursingCities['west-orange']

export const metadata = content.metadata

export default function NursingWestOrangePage() {
    return <CityServicePage content={content} />
}
