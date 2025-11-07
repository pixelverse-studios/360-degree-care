import { CityServicePage } from '@/components/city/CityServicePage'
import { bergenCountyPersonalCareCities } from '@/lib/content/cities/bergen-county/personal-care'

const content = bergenCountyPersonalCareCities['westwood']

export const metadata = content.metadata

export default function PersonalCareWestwoodPage() {
    return <CityServicePage content={content} />
}
