import { CityServicePage } from '@/components/city/CityServicePage'
import { passaicCountyPersonalCareCities } from '@/lib/content/cities/passaic-county/personal-care'

const content = passaicCountyPersonalCareCities['passaic']

export const metadata = content.metadata

export default function PersonalCarePassaicPage() {
    return <CityServicePage content={content} />
}
