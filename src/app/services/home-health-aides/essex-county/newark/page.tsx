import { CityServicePage } from '@/components/city/CityServicePage'
import { essexCountyHomeHealthAideCities } from '@/lib/content/cities/essex-county/home-health-aides'

const content = essexCountyHomeHealthAideCities['newark']

export const metadata = content.metadata

export default function HomeHealthAidesNewarkPage() {
    return <CityServicePage content={content} />
}
