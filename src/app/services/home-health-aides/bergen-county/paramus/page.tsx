import { CityServicePage } from '@/components/city/CityServicePage'
import { bergenCountyHomeHealthAideCities } from '@/lib/content/cities/bergen-county/home-health-aides'

const content = bergenCountyHomeHealthAideCities['paramus']

export const metadata = content.metadata

export default function HomeHealthAideParamusPage() {
    return <CityServicePage content={content} />
}
