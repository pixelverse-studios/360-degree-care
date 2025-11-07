import { CityServicePage } from '@/components/city/CityServicePage'
import { monmouthCountyHomeHealthAideCities } from '@/lib/content/cities/monmouth-county/home-health-aides'

const content = monmouthCountyHomeHealthAideCities['manalapan']

export const metadata = content.metadata

export default function HomeHealthAideManalapanPage() {
    return <CityServicePage content={content} />
}
