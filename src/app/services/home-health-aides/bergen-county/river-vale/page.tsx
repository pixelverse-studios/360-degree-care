import { CityServicePage } from '@/components/city/CityServicePage'
import { bergenCountyHomeHealthAideCities } from '@/lib/content/cities/bergen-county/home-health-aides'

const content = bergenCountyHomeHealthAideCities['river-vale']

export const metadata = content.metadata

export default function HomeHealthAidesRiverValePage() {
    return <CityServicePage content={content} />
}
