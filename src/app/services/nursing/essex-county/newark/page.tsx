import { CityServicePage } from '@/components/city/CityServicePage'
import { essexCountyNursingCities } from '@/lib/content/cities/essex-county/nursing'

const content = essexCountyNursingCities['newark']

export const metadata = content.metadata

export default function NursingNewarkPage() {
    return <CityServicePage content={content} />
}
