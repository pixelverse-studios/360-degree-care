import { CityServicePage } from '@/components/city/CityServicePage'
import { bergenCountyPersonalCareCities } from '@/lib/content/cities/bergen-county/personal-care'

const content = bergenCountyPersonalCareCities['ridgewood']

export const metadata = content.metadata

export default function PersonalCareRidgewoodPage() {
    return <CityServicePage content={content} />
}
