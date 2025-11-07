import { CityServicePage } from '@/components/city/CityServicePage'
import { essexCountyNursingCities } from '@/lib/content/cities/essex-county/nursing'

const content = essexCountyNursingCities['bloomfield']

export const metadata = content.metadata

export default function NursingBloomfieldPage() {
    return <CityServicePage content={content} />
}
