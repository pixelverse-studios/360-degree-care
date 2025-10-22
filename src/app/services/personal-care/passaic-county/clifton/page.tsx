import { CityServicePage } from '@/components/city/CityServicePage'
import { passaicCountyPersonalCareCities } from '@/lib/content/cities/passaic-county/personal-care'

const content = passaicCountyPersonalCareCities['clifton']

export const metadata = content.metadata

export default function PersonalCareCliftonPage() {
    return <CityServicePage content={content} />
}
