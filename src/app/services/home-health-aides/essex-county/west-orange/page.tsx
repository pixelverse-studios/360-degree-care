import { CityServicePage } from '@/components/city/CityServicePage'
import { essexCountyHomeHealthAideCities } from '@/lib/content/cities/essex-county/home-health-aides'

const content = essexCountyHomeHealthAideCities['west-orange']

export const metadata = content.metadata

export default function HomeHealthAideWestOrangePage() {
    return <CityServicePage content={content} />
}
