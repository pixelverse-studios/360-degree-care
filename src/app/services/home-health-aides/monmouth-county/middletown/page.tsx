import { CityServicePage } from '@/components/city/CityServicePage'
import { monmouthCountyHomeHealthAideCities } from '@/lib/content/cities/monmouth-county/home-health-aides'

const content = monmouthCountyHomeHealthAideCities['middletown']

export const metadata = content.metadata

export default function HomeHealthAidesMiddletownPage() {
    return <CityServicePage content={content} />
}
