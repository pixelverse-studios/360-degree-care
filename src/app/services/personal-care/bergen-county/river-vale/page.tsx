import { CityServicePage } from '@/components/city/CityServicePage'
import { bergenCountyPersonalCareCities } from '@/lib/content/cities/bergen-county/personal-care'

const content = bergenCountyPersonalCareCities['river-vale']

export const metadata = content.metadata

export default function PersonalCareRiverValePage() {
    return <CityServicePage content={content} />
}
