import { CityServicePage } from '@/components/city/CityServicePage'
import { passaicCountyHomeHealthAideCities } from '@/lib/content/cities/passaic-county/home-health-aides'

const content = passaicCountyHomeHealthAideCities['passaic']

export const metadata = content.metadata

export default function HomeHealthAidesPassaicPage() {
    return <CityServicePage content={content} />
}
