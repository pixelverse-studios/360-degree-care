import { CityServicePage } from '@/components/city/CityServicePage'
import { essexCountyHomeHealthAideCities } from '@/lib/content/cities/essex-county/home-health-aides'

const content = essexCountyHomeHealthAideCities['irvington']

export const metadata = content.metadata

export default function HomeHealthAideIrvingtonPage() {
    return <CityServicePage content={content} />
}
