import { CityServicePage } from '@/components/city/CityServicePage'
import { essexCountyHomeHealthAideCities } from '@/lib/content/cities/essex-county/home-health-aides'

const content = essexCountyHomeHealthAideCities['bloomfield']

export const metadata = content.metadata

export default function HomeHealthAideBloomfieldPage() {
    return <CityServicePage content={content} />
}
