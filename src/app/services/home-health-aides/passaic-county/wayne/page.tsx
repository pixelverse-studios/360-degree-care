import { CityServicePage } from '@/components/city/CityServicePage'
import { passaicCountyHomeHealthAideCities } from '@/lib/content/cities/passaic-county/home-health-aides'

const content = passaicCountyHomeHealthAideCities['wayne']

export const metadata = content.metadata

export default function HomeHealthAideWaynePage() {
    return <CityServicePage content={content} />
}
