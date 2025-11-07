import { CityServicePage } from '@/components/city/CityServicePage'
import { monmouthCountyNursingCities } from '@/lib/content/cities/monmouth-county/nursing'

const content = monmouthCountyNursingCities['manalapan']

export const metadata = content.metadata

export default function NursingManalapanPage() {
    return <CityServicePage content={content} />
}
