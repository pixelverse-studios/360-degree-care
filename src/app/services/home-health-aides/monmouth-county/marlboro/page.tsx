import { CityServicePage } from '@/components/city/CityServicePage'
import { monmouthCountyHomeHealthAideCities } from '@/lib/content/cities/monmouth-county/home-health-aides'

const content = monmouthCountyHomeHealthAideCities['marlboro']

export const metadata = content.metadata

export default function HomeHealthAidesMarlboroPage() {
    return <CityServicePage content={content} />
}
