import { CityServicePage } from '@/components/city/CityServicePage'
import { bergenCountyPersonalCareCities } from '@/lib/content/cities/bergen-county/personal-care'

const content = bergenCountyPersonalCareCities['fort-lee']

export const metadata = content.metadata

export default function PersonalCareFortLeePage() {
    return <CityServicePage content={content} />
}
