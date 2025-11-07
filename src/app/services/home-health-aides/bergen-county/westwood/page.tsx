import { CityServicePage } from '@/components/city/CityServicePage'
import { bergenCountyHomeHealthAideCities } from '@/lib/content/cities/bergen-county/home-health-aides'

const content = bergenCountyHomeHealthAideCities['westwood']

export const metadata = content.metadata

export default function HomeHealthAideWestwoodPage() {
    return <CityServicePage content={content} />
}
