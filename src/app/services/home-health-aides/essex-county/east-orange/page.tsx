import { CityServicePage } from '@/components/city/CityServicePage'
import { essexCountyHomeHealthAideCities } from '@/lib/content/cities/essex-county/home-health-aides'

const content = essexCountyHomeHealthAideCities['east-orange']

export const metadata = content.metadata

export default function HomeHealthAidesEastOrangePage() {
    return <CityServicePage content={content} />
}
