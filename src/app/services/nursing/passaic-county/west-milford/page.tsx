import { CityServicePage } from '@/components/city/CityServicePage'
import { passaicCountyNursingCities } from '@/lib/content/cities/passaic-county/nursing'

const content = passaicCountyNursingCities['west-milford']

export const metadata = content.metadata

export default function NursingWestMilfordPage() {
    return <CityServicePage content={content} />
}
