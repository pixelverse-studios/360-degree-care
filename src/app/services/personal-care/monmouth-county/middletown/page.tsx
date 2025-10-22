import { CityServicePage } from '@/components/city/CityServicePage'
import { monmouthCountyPersonalCareCities } from '@/lib/content/cities/monmouth-county/personal-care'

const content = monmouthCountyPersonalCareCities['middletown']

export const metadata = content.metadata

export default function PersonalCareMiddletownPage() {
    return <CityServicePage content={content} />
}
