import { CityServicePage } from '@/components/city/CityServicePage'
import { monmouthCountyNursingCities } from '@/lib/content/cities/monmouth-county/nursing'

const content = monmouthCountyNursingCities['marlboro']

export const metadata = content.metadata

export default function NursingMarlboroPage() {
    return <CityServicePage content={content} />
}
