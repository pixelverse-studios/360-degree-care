import { CityServicePage } from '@/components/city/CityServicePage'
import { bergenCountyHomeHealthAideCities } from '@/lib/content/cities/bergen-county/home-health-aides'

const content = bergenCountyHomeHealthAideCities['fair-lawn']

export const metadata = content.metadata

export default function HomeHealthAidesFairLawnPage() {
    return <CityServicePage content={content} />
}
