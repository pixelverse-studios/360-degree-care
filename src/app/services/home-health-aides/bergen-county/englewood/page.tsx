import { CityServicePage } from '@/components/city/CityServicePage'
import { bergenCountyHomeHealthAideCities } from '@/lib/content/cities/bergen-county/home-health-aides'

const content = bergenCountyHomeHealthAideCities['englewood']

export const metadata = content.metadata

export default function HomeHealthAideEnglewoodPage() {
    return <CityServicePage content={content} />
}
