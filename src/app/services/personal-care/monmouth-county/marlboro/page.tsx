import { CityServicePage } from '@/components/city/CityServicePage'
import { monmouthCountyPersonalCareCities } from '@/lib/content/cities/monmouth-county/personal-care'

const content = monmouthCountyPersonalCareCities['marlboro']

export const metadata = content.metadata

export default function PersonalCareMarlboroPage() {
    return <CityServicePage content={content} />
}
