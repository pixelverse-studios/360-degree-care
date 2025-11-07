import { CityServicePage } from '@/components/city/CityServicePage'
import { passaicCountyHomeHealthAideCities } from '@/lib/content/cities/passaic-county/home-health-aides'

const content = passaicCountyHomeHealthAideCities['west-milford']

export const metadata = content.metadata

export default function HomeHealthAideWestMilfordPage() {
    return <CityServicePage content={content} />
}
