import { CityServicePage } from '@/components/city/CityServicePage'
import { bergenCountyHomeHealthAideCities } from '@/lib/content/cities/bergen-county/home-health-aides'

const content = bergenCountyHomeHealthAideCities['fort-lee']

export const metadata = content.metadata

export default function HomeHealthAidesFortLeePage() {
    return <CityServicePage content={content} />
}
