import { CityServicePage } from '@/components/city/CityServicePage'
import { monmouthCountyPersonalCareCities } from '@/lib/content/cities/monmouth-county/personal-care'

const content = monmouthCountyPersonalCareCities['manalapan']

export const metadata = content.metadata

export default function PersonalCareManalapanPage() {
    return <CityServicePage content={content} />
}
