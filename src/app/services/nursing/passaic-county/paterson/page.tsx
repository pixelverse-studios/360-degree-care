import { CityServicePage } from '@/components/city/CityServicePage'
import { passaicCountyNursingCities } from '@/lib/content/cities/passaic-county/nursing'

const content = passaicCountyNursingCities['paterson']

export const metadata = content.metadata

export default function NursingPatersonPage() {
    return <CityServicePage content={content} />
}
