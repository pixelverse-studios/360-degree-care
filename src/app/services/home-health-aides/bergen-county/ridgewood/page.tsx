import { CityServicePage } from '@/components/city/CityServicePage'
import { bergenCountyHomeHealthAideCities } from '@/lib/content/cities/bergen-county/home-health-aides'

const content = bergenCountyHomeHealthAideCities['ridgewood']

export const metadata = content.metadata

export default function HomeHealthAidesRidgewoodPage() {
    return <CityServicePage content={content} />
}
