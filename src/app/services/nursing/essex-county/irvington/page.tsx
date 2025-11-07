import { CityServicePage } from '@/components/city/CityServicePage'
import { essexCountyNursingCities } from '@/lib/content/cities/essex-county/nursing'

const content = essexCountyNursingCities['irvington']

export const metadata = content.metadata

export default function NursingIrvingtonPage() {
    return <CityServicePage content={content} />
}
