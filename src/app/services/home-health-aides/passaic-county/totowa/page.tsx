import { CityServicePage } from '@/components/city/CityServicePage'
import { passaicCountyHomeHealthAideCities } from '@/lib/content/cities/passaic-county/home-health-aides'

const content = passaicCountyHomeHealthAideCities['totowa']

export const metadata = content.metadata

export default function HomeHealthAideTotowaPage() {
    return <CityServicePage content={content} />
}
