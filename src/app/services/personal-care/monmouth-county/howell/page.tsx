import { CityServicePage } from '@/components/city/CityServicePage'
import { monmouthCountyPersonalCareCities } from '@/lib/content/cities/monmouth-county/personal-care'

const content = monmouthCountyPersonalCareCities['howell']

export const metadata = content.metadata

export default function PersonalCareHowellPage() {
    return <CityServicePage content={content} />
}
