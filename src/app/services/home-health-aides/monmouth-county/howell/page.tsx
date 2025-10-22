import { CityServicePage } from '@/components/city/CityServicePage'
import { monmouthCountyHomeHealthAideCities } from '@/lib/content/cities/monmouth-county/home-health-aides'

const content = monmouthCountyHomeHealthAideCities['howell']

export const metadata = content.metadata

export default function HomeHealthAidesHowellPage() {
    return <CityServicePage content={content} />
}
