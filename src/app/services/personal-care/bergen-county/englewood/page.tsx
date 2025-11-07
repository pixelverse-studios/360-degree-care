import { CityServicePage } from '@/components/city/CityServicePage'
import { bergenCountyPersonalCareCities } from '@/lib/content/cities/bergen-county/personal-care'

const content = bergenCountyPersonalCareCities['englewood']

export const metadata = content.metadata

export default function PersonalCareEnglewoodPage() {
    return <CityServicePage content={content} />
}
