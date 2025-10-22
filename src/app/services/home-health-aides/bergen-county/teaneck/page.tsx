import { CityServicePage } from '@/components/city/CityServicePage'
import { bergenCountyHomeHealthAideCities } from '@/lib/content/cities/bergen-county/home-health-aides'

const content = bergenCountyHomeHealthAideCities['teaneck']

export const metadata = content.metadata

export default function HomeHealthAidesTeaneckPage() {
    return <CityServicePage content={content} />
}
