import { CityServicePage } from '@/components/city/CityServicePage'
import { passaicCountyHomeHealthAideCities } from '@/lib/content/cities/passaic-county/home-health-aides'

const content = passaicCountyHomeHealthAideCities['clifton']

export const metadata = content.metadata

export default function HomeHealthAidesCliftonPage() {
    return <CityServicePage content={content} />
}
