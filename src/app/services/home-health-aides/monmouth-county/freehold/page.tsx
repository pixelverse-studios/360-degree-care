import { CityServicePage } from '@/components/city/CityServicePage'
import { monmouthCountyHomeHealthAideCities } from '@/lib/content/cities/monmouth-county/home-health-aides'

const content = monmouthCountyHomeHealthAideCities['freehold']

export const metadata = content.metadata

export default function HomeHealthAideFreeholdPage() {
    return <CityServicePage content={content} />
}
