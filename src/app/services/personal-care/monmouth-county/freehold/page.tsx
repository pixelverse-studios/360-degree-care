import { CityServicePage } from '@/components/city/CityServicePage'
import { monmouthCountyPersonalCareCities } from '@/lib/content/cities/monmouth-county/personal-care'

const content = monmouthCountyPersonalCareCities['freehold']

export const metadata = content.metadata

export default function PersonalCareFreeholdPage() {
    return <CityServicePage content={content} />
}
