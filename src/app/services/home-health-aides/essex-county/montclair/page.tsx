import { CityServicePage } from '@/components/city/CityServicePage'
import { essexCountyHomeHealthAideCities } from '@/lib/content/cities/essex-county/home-health-aides'

const content = essexCountyHomeHealthAideCities['montclair']

export const metadata = content.metadata

export default function HomeHealthAidesMontclairPage() {
    return <CityServicePage content={content} />
}
