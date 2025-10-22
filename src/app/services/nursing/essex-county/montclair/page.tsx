import { CityServicePage } from '@/components/city/CityServicePage'
import { essexCountyNursingCities } from '@/lib/content/cities/essex-county/nursing'

const content = essexCountyNursingCities['montclair']

export const metadata = content.metadata

export default function NursingMontclairPage() {
    return <CityServicePage content={content} />
}
