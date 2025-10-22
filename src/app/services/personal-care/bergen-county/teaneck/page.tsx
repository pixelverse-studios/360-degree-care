import { CityServicePage } from '@/components/city/CityServicePage'
import { bergenCountyPersonalCareCities } from '@/lib/content/cities/bergen-county/personal-care'

const content = bergenCountyPersonalCareCities['teaneck']

export const metadata = content.metadata

export default function PersonalCareTeaneckPage() {
    return <CityServicePage content={content} />
}
