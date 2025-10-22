import { CityServicePage } from '@/components/city/CityServicePage'
import { passaicCountyHomeHealthAideCities } from '@/lib/content/cities/passaic-county/home-health-aides'

const content = passaicCountyHomeHealthAideCities['paterson']

export const metadata = content.metadata

export default function HomeHealthAidesPatersonPage() {
    return <CityServicePage content={content} />
}
